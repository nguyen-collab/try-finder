import Image from 'next/image';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import Solution from '@/components/Solution';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import CopyRight from '@/components/CopyRight';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="bg-gray-500">
        <div className="container max-w-[1500px] mx-auto">
          <Header />
        </div>
      </div>
      <div className="bg-gray-500">
        <div className="container max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 xl:pt-4">
          <Hero />
        </div>
      </div>
      <div id="features" className="bg-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Feature />
        </div>
      </div>
      <div id="solutions" className="bg-gray-500">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Solution />
        </div>
      </div>
      <div id="pricing" className="bg-gray-500">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Pricing />
        </div>
      </div>
      <div id="faqs" className="bg-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Faq />
        </div>
      </div>
      <div className="bg-gray-500 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Footer />
        </div>

        {/* Background Images */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[540px] xl:h-[540px]">
          <Image
            src="/footer/subtract-main.png"
            className="w-full h-full object-contain"
            width={540}
            height={540}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 540px"
            alt=""
          />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[540px] xl:h-[540px]">
          <Image
            src="/footer/subtract-main.png"
            className="w-full h-full object-contain rotate-270"
            width={540}
            height={540}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 540px"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container max-w-7xl mx-auto">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}
