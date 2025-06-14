"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items - simple links only
  const navItems: NavItem[] = [
    { label: "Lorem Ipsum", href: "/services" },
    { label: "Lorem Ipsum", href: "/about" },
    { label: "Lorem Ipsum", href: "/portfolio" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/30 shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="ml-4 flex-shrink-0 bg-[#DBDBDB] px-4 py-2 md:px-6 lg:ml-0 lg:px-8">
            <Link
              href="/"
              className=" font-roboto-condensed text-xl font-bold text-brand-text md:text-2xl lg:text-3xl"
            >
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="mr-0 hidden items-center space-x-8 md:flex lg:mr-32">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-1 font-inter font-medium text-brand-primary transition-all duration-300 hover:scale-105 hover:text-brand-secondary"
              >
                <span>{item.label}</span>
                <ChevronDown className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="text-md bg-white px-10 font-inter font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white lg:shadow-lg"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed left-0 right-0 top-16 transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div className="bg-white/95 px-4 pb-2 shadow-lg backdrop-blur-md">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between py-2 font-inter font-medium text-brand-text transition-colors duration-200 hover:text-brand-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
              ))}
            </div>

            {/* Mobile Sign In Button */}
            <div className="mt-3 border-t border-gray-200 pt-3">
              <Button
                variant="outline"
                className="w-full bg-white py-2 font-inter font-semibold shadow-sm transition-all duration-300 hover:bg-black hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
