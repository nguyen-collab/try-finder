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

      <div className="container mx-auto bg-gray-500">
        <SignUp />
      </div>
    </div>
  );
}
