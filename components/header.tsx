"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    // { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "/about-us" },

  ]

  return (
    <header className="fixed top-0 z-[1000] w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 rounded-xl px-3 md:px-5 mt-3 md:mt-4 bg-background/70 backdrop-blur-md border border-border shadow-[0_0_0_1px_rgba(236,162,18,0.15)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-[inset_0_0_0_2px_#111]">
              <span className="font-bold text-lg tracking-wide">EP</span>
            </div> */}
            <span className="hidden sm:inline font-bold text-lg text-foreground group-hover:text-primary transition-colors">Amazon Publisher</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* <Link href="#login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Log in</Link> */}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border bg-background/80 backdrop-blur">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
