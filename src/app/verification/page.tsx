import Verification from '@/components/Verification';
import Image from 'next/image';

export default function VerificationPage() {
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

      <div className="container mx-auto max-w-2xl bg-gray-500">
        <Verification />
      </div>
    </div>
  );
}
