import { Resend } from "resend";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, service, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error("Missing env vars: RESEND_API_KEY or CONTACT_EMAIL");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Global Bunkers <onboarding@resend.dev>";
  const cc = process.env.CONTACT_CC_EMAIL;

  // Strip newlines to prevent SMTP header injection via subject fields
  const safeName = name.replace(/[\r\n]/g, " ").trim();
  const safeService = typeof service === "string"
    ? service.replace(/[\r\n]/g, " ").trim()
    : "";

  const subject = `New inquiry – ${safeService || "General"} – ${safeName}`;

  const html = `
    <table cellpadding="12" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; max-width: 600px; border-collapse: collapse;">
      <tbody>
        <tr style="background-color: #1a1a1a; color: #ffffff;">
          <td colspan="2" style="padding: 20px;">
            <strong style="font-size: 18px;">New Contact Form Submission</strong><br/>
            <span style="color: #c9a961;">Global Bunkers US</span>
          </td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="width: 120px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Name</td>
          <td style="border-bottom: 1px solid #e0e0e0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; border-bottom: 1px solid #e0e0e0;">Email</td>
          <td style="border-bottom: 1px solid #e0e0e0;">
            <a href="mailto:${escapeHtml(email)}" style="color: #1a1a1a;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="font-weight: bold; border-bottom: 1px solid #e0e0e0;">Service</td>
          <td style="border-bottom: 1px solid #e0e0e0;">${escapeHtml(safeService || "Not specified")}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; vertical-align: top; padding-top: 14px;">Message</td>
          <td style="white-space: pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </tbody>
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      ...(cc ? { cc: [cc] } : {}),
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
