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

          <div className="bg-gray-200 border border-gray-1300 rounded-xl p-6">
            <h2 className="text-xl font-medium mb-4">Dashboard Content</h2>
            <p className="opacity-75 mb-4">
              This is a protected dashboard page. You need to be authenticated
              to view this content.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map(item => (
                <div
                  key={item}
                  className="border border-gray-1300 rounded-lg p-4 bg-gray-400"
                >
                  <div className="h-40 flex items-center justify-center">
                    <p className="text-lg font-medium">Sample Content {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 border-t border-gray-1300">
          <div className="text-[14px] tracking-num--0_01 leading-num-20 font-medium font-inter opacity-[0.8] text-center">
            ©2025 Tryfinder LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
