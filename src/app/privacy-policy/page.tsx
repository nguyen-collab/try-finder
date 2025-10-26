import Image from 'next/image';
import Footer from '@/components/Footer';
import CopyRight from '@/components/CopyRight';
import Header from '@/components/Header';
import Policy from '@/components/Policy';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-gray-500">
        <div className="container mx-auto py-4 sm:py-6 lg:py-8 xl:py-12">
          <Header />
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
          <Policy title="Privacy Policy" />
        </div>
      </div>

      <div className="bg-gray-500 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-28">
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
        <div className="container mx-auto">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}
