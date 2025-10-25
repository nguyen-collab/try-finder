'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        container fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out 
        ${
          isScrolled
            ? 'bg-gray-200/95 border border-solid border-gray-1300 backdrop-blur-lg shadow-2xl rounded-2xl p-3 w-[90%] md:w-[800px] mt-8 mx-auto'
            : 'bg-transparent py-4 w-full border border-solid border-gray-200'
        } 
        text-left text-sm md:text-base lg:text-num-16 text-white font-inter-variable
      `}
    >
      <div
        className={`${isScrolled ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'}`}
      >
        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-1 transition-all duration-700 ease-out">
            <Image
              src="/header/tryfinder.svg"
              className="h-6 w-auto transition-all duration-700 ease-out"
              width={114.1}
              height={28}
              sizes="100vw"
              alt="TryFinder Logo"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white transition-all duration-300 ease-out hover:scale-110 active:scale-95"
          >
            <svg
              className={`w-6 h-6 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            lg:hidden absolute left-0 right-0 transition-all duration-500 ease-out overflow-hidden rounded-b-2xl border-l border-r border-gray-1300 border-solid
            ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
            ${isScrolled ? 'bg-gray-200/95 backdrop-blur-sm' : 'bg-gray-500/95 backdrop-blur-sm'}
          `}
        >
          <nav
            className={`flex flex-col p-4 gap-4 transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'delay-100' : 'delay-0'
            }`}
          >
            <button
              onClick={() => scrollToSection('features')}
              className="tracking-num--0_01 py-2 font-medium transition-all duration-300 ease-out rounded-lg px-2 -mx-2 text-left cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="tracking-num--0_01 py-2 font-medium transition-all duration-300 ease-out rounded-lg px-2 -mx-2 text-left cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="tracking-num--0_01 py-2 font-medium transition-all duration-300 ease-out rounded-lg px-2 -mx-2 text-left cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="tracking-num--0_01 py-2 font-medium transition-all duration-300 ease-out rounded-lg px-2 -mx-2 text-left cursor-pointer"
            >
              FAQs
            </button>
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/sign-in">
                <button className="w-full rounded-[9px] border-gray-1200 border-solid border flex items-center justify-center py-2 px-3 cursor-pointer transition-all duration-300 ease-out">
                  <div className="tracking-num--0_01 leading-[19.5px] font-semibold">
                    Sign In
                  </div>
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="w-full rounded-[9px] bg-white border-gray-900 border-solid border-[3.8px] flex items-center justify-center py-2 px-3 text-gray-100 transition-all duration-300 ease-out cursor-pointer">
                  <div className="tracking-num--0_01 leading-[19.5px] font-semibold">
                    Create Account
                  </div>
                </button>
              </Link>
            </div>
          </nav>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-1 transition-all duration-700 ease-out">
            <Image
              src="/header/tryfinder.svg"
              className="h-6 md:h-7 w-auto transition-all duration-700 ease-out"
              width={114.1}
              height={28}
              sizes="100vw"
              alt="TryFinder Logo"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-4 md:gap-6 lg:gap-[30px] font-inter transition-all duration-700 ease-out">
            <button
              onClick={() => scrollToSection('features')}
              className="tracking-num--0_01 leading-[26px] font-medium transition-all duration-500 ease-out opacity-num-0_8 hover:opacity-100 cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="tracking-num--0_01 leading-[26px] font-medium transition-all duration-500 ease-out opacity-num-0_8 hover:opacity-100 cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="tracking-num--0_01 leading-[26px] font-medium transition-all duration-500 ease-out opacity-num-0_8 hover:opacity-100 cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="tracking-num--0_01 leading-[26px] font-medium transition-all duration-500 ease-out opacity-num-0_8 hover:opacity-100 cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 md:gap-4 transition-all duration-700 ease-out">
            {!isScrolled && (
              <Link href="/sign-in">
                <button className="rounded-[9px] border-gray-1200 border-solid border flex items-center justify-center py-2 md:py-[9px] px-3 md:px-[18px] cursor-pointer transition-all duration-300 ease-out hover:bg-gray-800">
                  <div className="tracking-num--0_01 leading-[19.5px] font-semibold text-sm md:text-base">
                    Sign In
                  </div>
                </button>
              </Link>
            )}
            <Link href="/sign-up">
              <button className="rounded-[9px] bg-white border-gray-900 border-solid border-[3.8px] flex items-center justify-center py-2 md:py-[9px] px-3 md:px-[18px] text-gray-100 transition-all duration-300 ease-out hover:bg-gray-100 hover:text-gray-900 cursor-pointer min-h-[44px] md:min-h-0">
                <div className="tracking-num--0_01 leading-[19.5px] font-semibold text-sm md:text-base">
                  Create Account
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
