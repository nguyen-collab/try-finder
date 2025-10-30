'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  CancelCircle2Icon,
  ConfigurationIcon,
  EmailIcon2,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  KeyIcon,
  LockIcon,
  SearchFocusIcon,
} from './common/SvgIcon';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { signUp } = useAuth();

  const validateInputs = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      toast.error('Error', {
        description: 'All fields are required',
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      toast.error('Error', {
        description: 'Please enter a valid email address',
      });
      return false;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      toast.error('Error', {
        description: 'Password must be at least 6 characters',
      });
      return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      toast.error('Error', {
        description: 'Passwords do not match',
      });
      return false;
    }

    // Terms agreement validation
    if (!agreeToTerms) {
      setErrorMessage('You must agree to the Terms and Conditions');
      toast.error('Error', {
        description: 'You must agree to the Terms and Conditions',
      });
      return false;
    }

    return true;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateInputs()) {
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(email, password);

      if (error) {
        toast.error('Error', {
          description: error.message,
        });
        setErrorMessage(error.message);
        return;
      }

      // Show success message and redirect
      router.push('/verification');
      toast.success('Success', {
        description: 'Sign up successful',
      });
    } catch (error) {
      console.error('Sign up error:', error);
      toast.error('Error', {
        description: 'An unexpected error occurred. Please try again.',
      });
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-500 text-left text-sm sm:text-base lg:text-base text-white font-inter-variable">
      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left side - Hero content */}
        <main className="hidden lg:flex flex-1 flex-col justify-center py-8 sm:py-12 lg:py-20">
          {/* Logo */}
          <header className="flex items-center gap-2.5 mb-4 sm:mb-6 lg:mb-8">
            <Image
              src="/header/tryfinder.svg"
              className="h-6 w-24 sm:h-8 sm:w-32 lg:h-[45.4px] lg:w-[194.5px]"
              width={144.5}
              height={35.4}
              sizes="100vw"
              alt=""
            />
          </header>

          {/* Hero content */}
          <section className="max-w-full lg:max-w-[520px] mb-8 sm:mb-16 lg:mb-20">
            <h1 className="text-xl sm:text-2xl lg:text-3xl tracking-num--0_01 leading-tight lg:leading-8 font-semibold mb-3 sm:mb-4">
              Ready to 10x Your Pipeline?
            </h1>
            <div className="text-sm sm:text-base lg:text-lg tracking-num--0_01 leading-relaxed lg:leading-7 opacity-num-0_6 mb-4 sm:mb-6">
              <p className="mb-2">
                Join 10,000+ sales teams closing more deals with TryFinder. Stop
                wasting time on tools that don&apos;t work.
              </p>
              <p>Start finding real emails that convert.</p>
            </div>

            {/* Features - Stack on mobile, inline on larger screens */}
            <div className="flex flex-col xl:flex-row xl:items-center gap-2 sm:gap-[15px] text-xs sm:text-sm lg:text-base font-inter">
              <div className="flex items-center gap-2">
                <ConfigurationIcon />
                <span className="tracking-num--0_01 leading-tight lg:leading-num-24 font-medium opacity-[0.9] whitespace-nowrap">
                  Instant Setup
                </span>
              </div>
              <div className="hidden xl:block h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center gap-2">
                <SearchFocusIcon />
                <span className="tracking-num--0_01 leading-tight lg:leading-num-24 font-medium opacity-[0.9] whitespace-nowrap">
                  2 Free Searches
                </span>
              </div>
              <div className="hidden xl:block h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center gap-2">
                <CancelCircle2Icon />
                <span className="tracking-num--0_01 leading-tight lg:leading-num-24 font-medium opacity-[0.9] whitespace-nowrap">
                  Cancel Anytime
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 text-lg sm:text-xl lg:text-[24px] font-caveat mt-4 sm:mt-6">
              <Image
                src="/auth/group.png"
                className="lg:h-[85.7px] lg:w-[382.2px]"
                width={148.2}
                height={33.7}
                sizes="100vw"
                alt=""
              />
            </div>
          </section>

          {/* Testimonial section - Hidden on mobile, shown on tablet+ */}
          <section className="block max-w-full lg:max-w-[480px]">
            <div className="text-sm lg:text-lg tracking-num--0_01 leading-relaxed lg:leading-7 opacity-num-0_6 mb-3 sm:mb-4">
              What the customers say about tryfinder AI
            </div>

            {/* Testimonial card */}
            <div className="rounded-[15px] bg-gray-500 border-gray-1300 border-solid border-[1px] p-4 sm:p-5">
              <div className="">
                <p className="text-sm sm:text-base lg:text-base tracking-num--0_01 leading-relaxed lg:leading-num-24 opacity-num-0_6 mb-3 sm:mb-4">
                  &ldquo;tryfinder tears the competition apart. I&apos;ve tried
                  almost every other search service, their speeds, success rates
                  beats all the other providers. Incredible&rdquo;
                </p>
                <div className="flex items-center gap-2 font-inter-variable">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/solution/user-avatar.png"
                      className="h-5 w-5 sm:h-6 sm:w-6 rounded-num-50 object-cover"
                      width={24}
                      height={24}
                      sizes="100vw"
                      alt=""
                    />
                    <span className="text-xs sm:text-sm tracking-[-0.02em] leading-tight lg:leading-[22px] font-medium opacity-num-0_75">
                      Echo
                    </span>
                  </div>
                  <div className="h-1 w-1 rounded-num-50 bg-white opacity-num-0_25" />
                  <span className="text-xs sm:text-sm tracking-[-0.02em] leading-tight lg:leading-[22px] opacity-num-0_75">
                    Investor, @Theranos
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial pagination */}
            <div className="flex justify-center items-center gap-2 sm:gap-2.5 mt-4 sm:mt-6">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-num-50 bg-white border-gray-1300 border-solid border-[0.5px]" />
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-num-50 bg-white border-gray-1300 border-solid border-[0.5px] opacity-num-0_25" />
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-num-50 bg-white border-gray-1300 border-solid border-[0.5px] opacity-num-0_25" />
            </div>
          </section>
        </main>

        {/* Right side - Registration form */}
        <aside className="flex-1  flex items-center justify-center px-4 lg:px-0 py-8 sm:py-12 lg:py-20">
          <div className="w-full max-w-xl bg-gray-50 rounded-[20px]">
            {/* Registration form */}
            <div className="rounded-[20px] bg-gray-200 border-gray-1300 border-solid border-[1px] p-4 sm:p-6 lg:p-[30px] mb-4 sm:mb-6">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-3xl tracking-num--0_01 leading-tight lg:leading-8 font-medium mb-2">
                  Create Account
                </h2>
                <p className="text-base lg:text-lg tracking-num--0_01 leading-relaxed lg:leading-[26px] opacity-num-0_6">
                  Join the fastest search platform
                </p>
              </div>

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSignUp}>
                {/* Email field */}
                <div className="space-y-2 sm:space-y-2.5">
                  <label className="block text-base tracking-num--0_01 leading-tight lg:leading-[15px] font-medium opacity-num-0_75">
                    Email Address
                  </label>
                  <div className="group rounded-xl bg-gray-500 border-gray-1300 border-solid border-[1px] flex items-center py-3 sm:py-3.5 px-3 sm:px-num-12 gap-2 text-sm sm:text-base focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
                    <EmailIcon2
                      className="group-focus-within:[&_path]:fill-gray-1100 group-focus-within:[&_g]:opacity-100 transition-all duration-200"
                      color="white"
                      opacity="0.25"
                    />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="flex-1 bg-transparent tracking-num--0_01 leading-tight lg:leading-num-20 text-white placeholder:text-gray-10 focus:outline-none"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-start justify-between gap-3 sm:gap-5">
                    <label className="text-base tracking-num--0_01 leading-tight lg:leading-[15px] font-medium opacity-num-0_75">
                      Password
                    </label>
                  </div>
                  <div className="group rounded-xl bg-gray-500 border-gray-1300 border-solid border-[1px] flex items-center justify-between py-3 sm:py-3.5 px-3 sm:px-num-12 gap-3 sm:gap-5 text-sm sm:text-base focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
                    <div className="flex items-center gap-2 flex-1">
                      <KeyIcon className="group-focus-within:[&_path]:fill-gray-1100 group-focus-within:[&_g]:opacity-100 transition-all duration-200" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••••••••••"
                        className="flex-1 bg-transparent text-white placeholder-opacity-25 tracking-num--0_01 leading-tight lg:leading-num-20 focus:outline-none"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="button"
                      className="opacity-num-0_25 hover:opacity-50 transition-opacity cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <EyeOpenIcon
                        className={`transition-all duration-200 ${
                          showPassword
                            ? '[&_path]:fill-gray-1100 [&_g]:opacity-100'
                            : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Confirm Password field */}
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-start justify-between gap-3 sm:gap-5">
                    <label className="text-base tracking-num--0_01 leading-tight lg:leading-[15px] font-medium opacity-num-0_75">
                      Confirm Password
                    </label>
                  </div>
                  <div className="group rounded-xl bg-gray-500 border-gray-1300 border-solid border-[1px] flex items-center justify-between py-3 sm:py-3.5 px-3 sm:px-num-12 gap-3 sm:gap-5 text-sm sm:text-base focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
                    <div className="flex items-center gap-2 flex-1">
                      <LockIcon className="group-focus-within:[&_path]:fill-gray-1100 group-focus-within:[&_g]:opacity-100 transition-all duration-200" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••••••••••"
                        className="flex-1 bg-transparent text-white placeholder-opacity-25 tracking-num--0_01 leading-tight lg:leading-num-20 focus:outline-none"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="button"
                      className="opacity-num-0_25 hover:opacity-50 transition-opacity cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <EyeOpenIcon
                        className={`transition-all duration-200 ${
                          showConfirmPassword
                            ? '[&_path]:fill-gray-1100 [&_g]:opacity-100'
                            : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Terms and conditions */}
                <div className="flex items-start gap-3 text-sm sm:text-base text-gray-10">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={agreeToTerms}
                    onChange={e => setAgreeToTerms(e.target.checked)}
                    className="h-[18px] w-[18px] rounded-[5.63px] bg-gray-200 border-gray-100 border-solid border-[1.1px] box-border appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100"
                  />
                  <label
                    htmlFor="remember"
                    className="tracking-num--0_01 leading-tight lg:leading-num-20 font-medium cursor-pointer"
                  >
                    I agree to the{' '}
                    <Link
                      href="/terms-of-service"
                      className="underline cursor-pointer"
                    >
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/privacy-policy"
                      className="underline cursor-pointer"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Error message */}
                {/* {errorMessage && (
                  <div className="text-red-500 text-sm mt-2">
                    {errorMessage}
                  </div>
                )} */}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.25)] rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2)),_#fafafa] flex items-center justify-center p-3 text-base text-gray-300 hover:[background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.1)),_#fafafa] transition-[background] duration-300 ease-in-out cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed font-semibold"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center py-1.5 px-0 gap-1.5 opacity-[0.15] text-xs sm:text-xs my-4 sm:my-6">
                <div className="flex-1 h-px bg-white" />
                <span className="tracking-num--0_01 leading-tight lg:leading-4 font-semibold px-2">
                  OR
                </span>
                <div className="flex-1 h-px bg-white" />
              </div>

              {/* Social login */}
              <div className="space-y-3 sm:space-y-4">
                <div className="text-center">
                  <p className="text-sm sm:text-base tracking-num--0_01 leading-relaxed lg:leading-[26px] opacity-num-0_6">
                    Sign up with
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
                  <button className="flex-1 rounded-[10px] bg-gray-1300 border-gray-1300 border-solid border-[1px] flex items-center justify-center p-3 sm:p-3 gap-2 sm:gap-2.5 cursor-pointer hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200">
                    <GoogleIcon />
                    <span className="text-sm sm:text-base tracking-num--0_01 leading-tight lg:leading-num-24 font-medium">
                      Google
                    </span>
                  </button>
                  <button className="flex-1 rounded-[10px] bg-gray-1300 border-gray-1300 border-solid border-[1px] flex items-center justify-center p-3 sm:p-3 gap-2 sm:gap-2.5 cursor-pointer hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200">
                    <FacebookIcon />
                    <span className="text-sm sm:text-base tracking-num--0_01 leading-tight lg:leading-num-24 font-medium">
                      Facebook
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sign in link */}
            <div className="rounded-[20px] pb-4 sm:pb-6 text-center">
              <p className="text-base tracking-num--0_01 leading-tight lg:leading-num-20">
                <span className="font-medium text-gray-10">
                  Already have an account?{' '}
                </span>
                <Link
                  href="/sign-in"
                  className="font-semibold text-white hover:opacity-80 transition-opacity cursor-pointer"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 text-center p-8">
        <p className="text-xs sm:text-sm tracking-num--0_01 leading-tight lg:leading-num-20 font-medium font-inter opacity-[0.8]">
          ©2025 Tryfinder LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
