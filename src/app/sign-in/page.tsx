import Image from 'next/image';
import SignIn from '@/components/SignIn';

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/auth/subtract-main.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container max-w-2xl mx-auto">
        <SignIn />
      </div>
    </div>
  );
}
