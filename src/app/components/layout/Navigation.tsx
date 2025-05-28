"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/work", label: "My Work" },
    { href: "/hire", label: "Hire Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-card backdrop-blur sticky top-0 z-20 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-foreground">
            Dylan Frost
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-lg font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-accent transition-colors duration-200`}
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
            {mounted && isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mounted && isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors duration-200 text-lg font-semibold"
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
