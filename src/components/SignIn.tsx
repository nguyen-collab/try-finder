'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  EmailIcon2,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  KeyIcon,
} from './common/SvgIcon';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { signIn } = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      // Redirect to dashboard on successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Sign in error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-500 text-white font-inter-variable">
      {/* Main layout container */}
      <div className="relative flex flex-col min-h-screen">
        {/* Header with logo */}
        <header className="flex justify-center pt-20 pb-8">
          <div className="flex items-center gap-2.5">
            <Image
              src="/header/tryfinder.svg"
              className="h-[35.4px] w-[189.5px]"
              width={144.5}
              height={35.4}
              sizes="100vw"
              alt=""
            />
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 flex flex-col items-center px-4">
          <div className="w-full max-w-[553px] pb-[30px] rounded-[20px] bg-gray-50 border-gray-1300 border border-solid">
            {/* Sign-in form card */}
            <section className="rounded-[20px] bg-gray-200 border-gray-1300 border-b border-solid p-[30px] space-y-[30px]">
              {/* Welcome section */}
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <h1 className="text-[28px] tracking-num--0_01 leading-8 font-medium">
                  Welcome Back
                </h1>
                <p className="text-[18px] tracking-num--0_01 leading-[26px] opacity-[0.6]">
                  We&apos;re glad to have you back
                </p>
              </div>

              {/* Form fields */}
              <div className="space-y-4 text-[15px]">
                <div className="space-y-[18px]">
                  {/* Email field */}
                  <div className="space-y-2.5">
                    <label className="block tracking-num--0_01 leading-[15px] font-medium opacity-[0.75]">
                      Email Address
                    </label>
                    <div className="rounded-xl bg-gray-500 border-gray-1300 border border-solid flex items-center py-3.5 px-num-12 gap-2 text-num-16">
                      <EmailIcon2 />
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="flex-1 bg-transparent tracking-num--0_01 leading-num-20 text-white placeholder:text-gray-10"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-5">
                      <label className="tracking-num--0_01 leading-[15px] font-medium opacity-[0.75]">
                        Password
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-[14px] tracking-num--0_01 leading-[14px] font-medium opacity-[0.5] hover:opacity-75 transition-opacity cursor-pointer"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="rounded-xl bg-gray-500 border-gray-1300 border border-solid flex items-center justify-between py-3.5 px-num-12 gap-5 text-num-16">
                      <div className="flex items-center gap-2 flex-1">
                        <KeyIcon />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••••••••••"
                          className="flex-1 bg-transparent tracking-num--0_01 leading-num-20 text-white placeholder:text-gray-10"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className="opacity-num-0_25 hover:opacity-50 transition-opacity"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <EyeOpenIcon />
                      </button>
                    </div>
                  </div>

                  {/* Remember me checkbox */}
                  <div className="rounded-lg flex items-center gap-3 text-num-16 text-gray-10">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={e => setRememberMe(e.target.checked)}
                      className="h-[18px] w-[18px] rounded-[5.63px] bg-gray-200 border-gray-100 border-solid border-[1.1px] box-border appearance-none focus:outline-none focus:ring-2 relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100"
                    />
                    <label
                      htmlFor="remember"
                      className="tracking-num--0_01 leading-num-20 font-medium cursor-pointer"
                    >
                      Remember this login
                    </label>
                  </div>

                  {/* Sign in button */}
                  {errorMessage && (
                    <div className="text-red-500 text-sm mt-2">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    onClick={handleSignIn}
                    disabled={isLoading}
                    className="w-full shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.25)] rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2)),_#fafafa] border-gray-1300 border border-solid flex items-center justify-center p-num-12 text-num-16 text-gray-300 hover:shadow-[0px_0px_0px_6px_rgba(255,_255,_255,_0.3)] transition-shadow cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="tracking-num--0_01 leading-6 font-semibold">
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center py-1.5 px-0 gap-1.5 opacity-[0.15] text-[12px]">
                  <div className="h-px flex-1 max-w-full overflow-hidden max-h-full bg-gray-1100"></div>
                  <span className="tracking-num--0_01 leading-4 font-semibold">
                    OR
                  </span>
                  <div className="h-px flex-1 max-w-full overflow-hidden max-h-full bg-gray-1100"></div>
                </div>

                {/* Social login */}
                <div className="flex flex-col items-center justify-center gap-4 text-num-16">
                  <div className="flex flex-col items-center justify-center">
                    <p className="tracking-num--0_01 leading-[26px] opacity-[0.6]">
                      Continue with
                    </p>
                  </div>
                  <div className="w-full flex gap-2.5">
                    <button className="flex-1 rounded-[10px] bg-gray-1300 border-gray-1300 border border-solid flex items-center justify-center p-num-12 gap-2.5 hover:bg-gray-1200 transition-colors cursor-pointer">
                      <GoogleIcon />
                      <span className="tracking-num--0_01 leading-6 font-medium">
                        Google
                      </span>
                    </button>
                    <button className="flex-1 rounded-[10px] bg-gray-1300 border-gray-1300 border border-solid flex items-center justify-center p-num-12 gap-2.5 hover:bg-gray-1200 transition-colors cursor-pointer">
                      <FacebookIcon />
                      <span className="tracking-num--0_01 leading-6 font-medium">
                        Facebook
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Sign up link */}
            <div className="mt-8 text-num-16 tracking-num--0_01 leading-num-20 text-gray-10 text-center">
              <span className="font-medium">Don&apos;t have an account? </span>
              <Link
                href="/sign-up"
                className="font-semibold text-white hover:opacity-80 transition-opacity cursor-pointer"
              >
                Create Account
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-center pb-5">
          <div className="text-[14px] tracking-num--0_01 leading-num-20 font-medium font-inter opacity-[0.8]">
            ©2025 Tryfinder LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
