'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items - simple links only
  const navItems: NavItem[] = [
    { label: 'Lorem Ipsum', href: '/services' },
    { label: 'Lorem Ipsum', href: '/about' },
    { label: 'Lorem Ipsum', href: '/portfolio' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/30 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
    <nav className="container mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 bg-[#DBDBDB] px-4 md:px-6 lg:px-8 py-2">
            <Link 
              href="/" 
              className="font-roboto-condensed text-xl md:text-2xl lg:text-3xl font-bold text-brand-text"
            >
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mr-0 lg:mr-32">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-1 font-inter font-medium transition-all duration-300 hover:scale-105 text-brand-primary hover:text-brand-secondary"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="px-10 shadow-lg text-md font-inter font-semibold transition-all duration-300 hover:-translate-y-0.5 bg-white hover:text-white hover:bg-black"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-colors duration-300 text-black"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed left-0 right-0 top-16 md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md px-4 pb-2 shadow-lg">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between py-2 font-inter font-medium text-brand-text hover:text-brand-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
              ))}
            </div>
            
            {/* Mobile Sign In Button */}
            <div className="pt-3 border-t border-gray-200 mt-3">
              <Button
                variant="outline"
                className="w-full shadow-sm py-2 bg-white hover:text-white hover:bg-black font-inter font-semibold transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header