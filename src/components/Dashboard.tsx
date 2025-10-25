'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-500 text-white font-inter-variable">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6 flex justify-between items-center border-b border-gray-1300">
          <div className="flex items-center gap-2.5">
            <Image
              src="/header/tryfinder.svg"
              className="h-[35.4px] w-[189.5px]"
              width={144.5}
              height={35.4}
              sizes="100vw"
              alt="TryFinder Logo"
            />
          </div>

          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className="rounded-xl bg-gray-1300 hover:bg-gray-1200 px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
          >
            {isLoading ? 'Signing Out...' : 'Sign Out'}
          </button>
        </header>

        {/* Main content */}
        <main className="py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">
              Welcome to your dashboard
            </h1>
            <p className="opacity-75">{user?.email}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
