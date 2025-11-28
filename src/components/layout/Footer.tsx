import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/logo-footer.png"
              alt="Global Bunkers US"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Premier provider of high-quality safes and security solutions
              since 1988.
            </p>
            <div className="text-gray-300">
              <p className="font-semibold text-white mb-1">Billing Address:</p>
              <p>1592 Union St. Ste 216</p>
              <p>San Francisco, CA 94123</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">Phone:</p>
                <a
                  href="tel:+14159908051"
                  className="hover:text-white transition-colors"
                >
                  (415) 990-8051
                </a>
                <p className="text-sm mt-1">24/7 Emergency Availability</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email:</p>
                <a
                  href="mailto:contact@globalbunkers.us"
                  className="hover:text-white transition-colors"
                >
                  contact@globalbunkers.us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {currentYear} Global Bunkers US. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
