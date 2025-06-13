'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <nav className="container mx-auto ">
          <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 bg-[#DBDBDB] px-8 py-2">
            <a 
              href="/" 
              className="font-roboto-condensed text-2xl lg:text-3xl font-bold tracking-tight-2 transition-colors duration-300 text-brand-text"
            >
              LOGO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-1 font-inter font-medium transition-all duration-300 hover:scale-105 text-brand-primary hover:text-brand-secondary"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="px-8 shadow-lg font-inter font-semibold transition-all duration-300 hover:-translate-y-0.5 text-black bg-white hover:text-white hover:bg-black"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-brand-text' : 'text-white'
              }`}
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
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-lg mt-4 p-4 shadow-lg">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between py-2 font-inter font-medium text-brand-text hover:text-brand-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* Mobile Sign In Button */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Button
                variant="outline"
                className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-inter font-semibold"
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