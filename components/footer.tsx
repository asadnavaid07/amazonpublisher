import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Amazon Author Partners Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
              <span className="font-bold text-foreground text-lg">
                Amazon Author Partners
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Transforming manuscripts into masterpieces since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[["Home", "/"], ["Services", "/services"], ["About Us", "/about-us"], ["Blogs", "/blogs"]].map((link) => (
                <li key={link[0]}>
                  <Link
                    href={link[1]}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[["Ghostwriting", "/services/ghostwriting"], ["Book Cover Design", "/services/book-cover-design"], ["Book Promotion & Marketing", "/services/book-promotion-marketing"], ["Proofreading", "/services/editing-proofreading"]].map(
                (service) => (
                  <li key={service[0]}>
                    <Link
                      href={service[1]}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service[0]}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@amazonauthorpartners.com"
                  className="hover:text-primary transition-colors"
                >
                  info@amazonauthorpartners.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 305-765-7102
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>ST PETERSBURG, FL 33702</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Amazon Author Partners. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
