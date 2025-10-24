import Feature from '@/components/Feature';
import Hero from '../components/Hero';
import Solution from '@/components/Solution';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <Hero />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Feature />
        </div>
      </div>
      <div className="bg-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Solution />
        </div>
      </div>
      <div className="bg-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Pricing />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Faq />
        </div>
      </div>
      <div className="bg-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Footer />
        </div>
      </div>
    </div>
  );
}
