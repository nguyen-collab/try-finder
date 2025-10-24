import Feature from '@/components/Feature';
import Hero from '../components/Hero';
import Solution from '@/components/Solution';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-200 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <Hero />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <Feature />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <Solution />
      </div>
    </div>
  );
}
