'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const HeroSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-roboto-condensed text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight-2 leading-tight text-white animate-fade-in">
                Lorem ipsum dolor sit amet
              </h1>
              
              <p className="font-inter text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl animate-slide-up">
                Lorem ipsum dolor sit amet consectetur. Enim metus cras congue quis elit 
                sociis. Sed mi rhoncus id habitant. In urna tellus nisl platea morbi libero 
                imperdiet neque. Justo suspendisse tristique posuere quis eget viterra. 
                Nunc euismod ultrices etiam nulla habitasse.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-4 animate-slide-up">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-white/90 backdrop-blur-sm border-white/20 focus:border-brand-primary focus:bg-white text-brand-text placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="h-12 px-8 bg-brand-primary hover:bg-brand-secondary text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Submitted
                    </span>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
              
              {/* No Credit Card Required */}
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-inter text-sm">No credit card required!</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image space (empty in this design) */}
          <div className="hidden lg:block">
            {/* This space is for the motorcycle image which is part of the background */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection