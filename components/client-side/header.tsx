"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import Link from "next/link";

// Define types for the props
interface ServiceItem {
  name: string;
  slug: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeaderClientProps {
  navItems: NavItem[];
  serviceItems: ServiceItem[];
}

export default function HeaderClient({ navItems, serviceItems }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[9999] w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center pt-3 gap-3 group">
            <Image
              src="/logo.png"
              alt="Amazon Author Partners Logo"
              width={180}
              height={180}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-[#ECA212] transition-colors duration-200 py-4"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-[100%] w-64 bg-white border border-gray-200 rounded-b-lg shadow-xl transition-all duration-300 ease-out z-[10000] ${
                      isServicesOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible pointer-events-none"
                    }`}
                  >
                    <ul className="py-2">
                      {serviceItems.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#ECA212] hover:bg-[#FFF8E7] transition-all duration-200"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-[#ECA212] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right Side Icons & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#ECA212] rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <User size={16} />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              <div className="px-4 py-2 font-bold text-xs uppercase tracking-widest text-gray-400">
                Our Services
              </div>
              {serviceItems.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="px-8 py-2 text-sm text-gray-700 hover:text-[#ECA212] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}

              <div className="h-px bg-gray-100 my-2 mx-4" />

              {navItems
                .filter((i) => !i.hasDropdown)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

              <Link
                href="/contact"
                className="mx-4 mt-4 flex items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold text-white bg-[#ECA212] rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <User size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}