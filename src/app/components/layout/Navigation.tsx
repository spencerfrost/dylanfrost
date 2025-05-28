"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", color: "hover:text-primary" },
    { href: "/work", label: "My Work", color: "hover:text-primary" },
    { href: "/hire", label: "Hire Me", color: "hover:text-accent" },
    { href: "/contact", label: "Contact", color: "hover:text-primary" },
  ];

  return (
    <nav className="w-full bg-card backdrop-blur sticky top-0 z-20 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold text-primary">
            Dylan Frost
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-lg font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${link.color} transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${link.color} transition-colors duration-200 text-lg font-semibold`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
