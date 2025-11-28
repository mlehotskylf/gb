"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Galleries",
    href: "/galleries",
    submenu: [
      { name: "Bank Liquidation", href: "/galleries/bank-liquidation" },
      { name: "Panic & Safe Rooms", href: "/galleries/panic-safe-rooms" },
      { name: "Bunkers & Bomb Shelters", href: "/galleries/bunkers" },
      { name: "Bulletproof Glass", href: "/galleries/bulletproof-glass" },
      { name: "Any Type of Safes", href: "/galleries/safes" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleriesOpen, setGalleriesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/logo-main.png"
              alt="Global Bunkers - Security Solutions Since 1988"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`font-semibold text-gray-700 hover:text-primary transition-colors ${
                        pathname.startsWith("/galleries") ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                      <svg
                        className="inline-block ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-semibold text-gray-700 hover:text-primary transition-colors ${
                      pathname === item.href ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:block">
            <a
              href="tel:+14159908051"
              className="text-lg font-bold text-primary hover:text-accent transition-colors"
            >
              (415) 990-8051
            </a>
            <p className="text-xs text-gray-600">24/7 Emergency</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setGalleriesOpen(!galleriesOpen)}
                      className="block w-full text-left py-3 font-semibold text-gray-700 hover:text-primary"
                    >
                      {item.name}
                      <svg
                        className={`inline-block ml-1 w-4 h-4 transition-transform ${
                          galleriesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {galleriesOpen && (
                      <div className="pl-4">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 text-gray-600 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 font-semibold text-gray-700 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="tel:+14159908051"
                className="block text-lg font-bold text-primary"
              >
                (415) 990-8051
              </a>
              <p className="text-sm text-gray-600">24/7 Emergency</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
