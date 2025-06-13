import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'

function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with transparent background */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Additional sections will go here */}
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <h2 className="font-inter text-2xl font-semibold tracking-tight-2 text-brand-text mb-8 text-center">
            More sections will be added here...
          </h2>
          
          {/* Placeholder for future sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-inter text-xl font-semibold text-brand-text mb-4">Section 1</h3>
              <p className="text-gray-600">Future content section</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-inter text-xl font-semibold text-brand-text mb-4">Section 2</h3>
              <p className="text-gray-600">Future content section</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-inter text-xl font-semibold text-brand-text mb-4">Section 3</h3>
              <p className="text-gray-600">Future content section</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home