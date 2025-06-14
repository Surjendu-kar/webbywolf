'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 w-full pt-16 md:pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 px-4 lg:pl-28 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="font-roboto-condensed text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight-2 leading-tight text-brand-text animate-fade-in">
                Lorem ipsum dolor sit amet
              </h1>
              
              <p className="font-inter text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up">
                Lorem ipsum dolor sit amet consectetur. Enim metus cras congue quis elit 
                sociis. Sed mi rhoncus id habitant. In urna tellus nisl platea morbi libero 
                imperdiet neque. Justo suspendisse tristique posuere quis eget viterra. 
                Nunc euismod ultrices etiam nulla habitasse.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-4 animate-slide-up">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-white border-gray-300 focus:border-brand-primary text-brand-text placeholder:text-gray-500"
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
              <div className="flex items-center gap-2 text-gray-600 justify-center lg:justify-start">
                <div className="w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-inter text-sm">No credit card required!</span>
              </div>
            </div>
          </div>

          {/* Right Content - Motorcycle Image */}
          <div className="relative">
            <div className="relative h-[50vh] md:h-[80vh] lg:h-[100vh] w-full">
              <Image
                src="/hero-img.webp"
                alt="Motorcycle rider"
                fill
                priority
                className="object-cover shadow-2xl animate-fade-in lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Bottom blur gradient overlay */}
              <div className="lg:[clip-path:polygon(0.35%_0,100%_0,100%_100%,0%_100%)] absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-white/100 to-transparent backdrop-blur-sm"></div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:flex">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
}

export default HeroSection