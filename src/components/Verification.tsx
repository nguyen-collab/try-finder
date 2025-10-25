'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Verification() {
  const { user } = useAuth();

  const router = useRouter();

  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (user && user.email_confirmed_at) {
      // If user is already authenticated and email is confirmed, redirect to dashboard
      router.push('/dashboard');
    }
  }, [user, router]);

  // Countdown effect for redirect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/sign-in');
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen w-full bg-gray-500 text-white font-inter-variable flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/header/tryfinder.svg"
          className="h-[35.4px] w-[189.5px] mb-10"
          width={144.5}
          height={35.4}
          sizes="100vw"
          alt=""
        />

        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-4">Check your email</h1>
          <p className="opacity-75 mb-6">
            We sent a verification link to your email address. Please click the
            link to verify your account.
          </p>
          <div className="bg-gray-200 border border-gray-1300 rounded-xl p-6 mb-6">
            <p className="opacity-75 mb-2">Don&apos;t see the email?</p>
            <button className="rounded-xl bg-gray-1300 hover:bg-gray-1200 px-6 py-3 text-sm font-medium transition-colors w-full cursor-pointer">
              Resend Verification Email
            </button>
          </div>
          <p className="text-sm opacity-75">
            Redirecting to sign in page in {countdown} seconds... or{' '}
            <Link href="/sign-in" className="text-white underline">
              click here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5">
        <div className="text-[14px] tracking-num--0_01 leading-num-20 font-medium font-inter opacity-[0.8]">
          ©2025 Tryfinder LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
