import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-12 md:h-14 lg:h-[38px] relative text-left text-sm md:text-base lg:text-num-16 text-white font-inter-variable">
      {/* Mobile Layout */}
      <div className="flex lg:hidden items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image
            src="/header/tryfinder.svg"
            className="h-6 w-auto"
            width={114.1}
            height={28}
            sizes="100vw"
            alt="TryFinder Logo"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image
            src="/header/tryfinder.svg"
            className="h-6 md:h-7 w-auto"
            width={114.1}
            height={28}
            sizes="100vw"
            alt="TryFinder Logo"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-[30px] font-inter">
          <a
            href="#"
            className="tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8 hover:opacity-100 transition-opacity text-sm md:text-base"
          >
            Features
          </a>
          <a
            href="#"
            className="tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8 hover:opacity-100 transition-opacity text-sm md:text-base"
          >
            Solutions
          </a>
          <a
            href="#"
            className="tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8 hover:opacity-100 transition-opacity text-sm md:text-base"
          >
            Reviews
          </a>
          <a
            href="#"
            className="tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8 hover:opacity-100 transition-opacity text-sm md:text-base"
          >
            Pricing
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/sign-in"
            className="rounded-[9px] border-gray-1200 border-solid border flex items-center justify-center py-2 md:py-[9px] px-3 md:px-[18px] cursor-pointer hover:bg-gray-800 transition-colors"
          >
            <div className="tracking-num--0_01 leading-[19.5px] font-semibold text-sm md:text-base">
              Sign In
            </div>
          </Link>
          <Link
            href="/sign-up"
            className="rounded-[9px] bg-white border-gray-900 border-solid border-[3.8px] flex items-center justify-center py-2 md:py-[9px] px-3 md:px-[18px] text-gray-100 hover:bg-gray-1100 transition-colors cursor-pointer min-h-[44px] md:min-h-0"
          >
            <div className="tracking-num--0_01 leading-[19.5px] font-semibold text-sm md:text-base">
              Create Account
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
