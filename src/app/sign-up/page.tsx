import SignUp from '@/components/SignUp';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500 relative">
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/auth/subtract-main.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8 xl:py-12">
        <SignUp />
      </div>
    </div>
  );
}
