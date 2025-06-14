import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import FeatureSection from '@/components/sections/FeatureSection'

function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with transparent background */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section */}
      <FeatureSection />
    </main>
  )
}

export default Home