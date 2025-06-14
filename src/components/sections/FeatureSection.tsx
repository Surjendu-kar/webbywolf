import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

const FeatureSection = () => {
  return (
    <section className="py-0 md:py-24 lg:pl-28 lg:px-0">
      <div className='shadow-2xl p-0 lg:p-10 lg:pr-14'>
      

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left content */}
        
        <div className="space-y-8 px-4 lg:px-0">
          {/* Top blue link text */}
          <Link 
        href="#" 
        className="text-brand-secondary text-lg font-semibold font-inter mb-2 lg:mb-4 inline-block hover:text-brand-primary transition-colors px-4 pt-4 lg:px-0 lg:pt-0"
      >
        Lorem ipsum dolor sit
      </Link>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-roboto-condensed font-bold text-brand-text">
            LOREM IPSUM<br />DOLOR SIT AMET
          </h2>
          
          <p className="text-gray-700 font-inter">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>

          {/* Feature items */}
          <div className="space-y-6">
            {/* Feature item 1 */}
            <div className="flex gap-6">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/feature-1.webp"
                  alt="Motorcycle rider"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 font-inter">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                </p>
              </div>
            </div>

            {/* Feature item 2 */}
            <div className="flex gap-6">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/feature-2.webp"
                  alt="Motorcycle workshop"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 font-inter">
                  Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.
                </p>
              </div>
            </div>

            {/* Feature item 3 */}
            <div className="flex gap-6">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/feature-3.webp"
                  alt="Motorcycle service"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 font-inter">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Large motorcycle image */}
        <div className="relative h-[300px] md:h-[500px] lg:h-[700px] w-full">
          <Image
            src="/motorcycles.webp"
            alt="Motorcycles lineup"
            fill
            className="object-cover shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

       {/* CTA Button and Phone */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center py-6 lg:pb-8">
            <Link 
              href="#"
              className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-semibold flex items-center gap-2"
            >
              Leorum Ipsum
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:123456789" 
              className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">123456789</span>
            </a>
          </div>

      {/* Bottom decorative bar */}
             <div className="h-3 w-full bg-gradient-to-r from-blue-800 via-emerald-600 to-indigo-950 "></div>
      </div>
    </section>
  )
}

export default FeatureSection 