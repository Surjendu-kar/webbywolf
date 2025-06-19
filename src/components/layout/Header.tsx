"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-4 flex-shrink-0 bg-[#DBDBDB] px-4 py-2 md:px-6 lg:ml-0 lg:px-8"
          >
            <Link
              href="/"
              className="font-roboto-condensed text-xl font-bold text-brand-text md:text-2xl lg:text-3xl"
            >
              LOGO
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="mr-0 hidden items-center space-x-8 md:flex lg:mr-32">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 font-inter font-medium text-brand-primary transition-all duration-300 hover:scale-105 hover:text-brand-secondary"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Sign In Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Button
              variant="default"
              className="text-md bg-white px-10 font-inter font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white lg:shadow-lg"
            >
              Sign In
            </Button>
          </motion.div>

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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 top-16 md:hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 px-4 pb-2 shadow-lg backdrop-blur-md"
              >
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-2 font-inter font-medium text-brand-text transition-colors duration-200 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Sign In Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-3 border-t border-gray-200 pt-3"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white py-2 font-inter font-semibold shadow-sm transition-all duration-300 hover:bg-black hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
