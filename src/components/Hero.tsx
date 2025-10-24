'use client';

import { useState } from 'react';
import {
  AnonymousIcon,
  ArrowRightIcon,
  HeadphonesIcon,
  SearchIcon,
  SearchInsightIcon,
} from './common/SvgIcon';
import Image from 'next/image';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchQuery);
      // You can add navigation or API call here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-[706px] text-white font-inter">
      {/* Hero Content Section */}
      <section className="flex-1 flex flex-col items-center lg:items-start gap-6 lg:gap-[25px] text-left text-sm px-4 lg:px-0">
        {/* Launch Offer Badge */}
        <div className="rounded-[15px] bg-gray-1300 border-gray-1200 border-solid border flex items-center justify-center p-2.5 text-gray-500">
          <div className="rounded-[7px] bg-white flex items-center justify-center py-1 px-2">
            <div className="text-sm xl:text-base 2xl:text-lg tracking-num--0_01 leading-5 font-medium">
              Launch Offer
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <header className="w-full text-center lg:text-left">
          <h1 className="text-4xl xl:text-5xl 2xl:text-[56px] tracking-[-0.03em] leading-12 xl:leading-14 2xl:leading-[62px] font-aeonik-pro">
            <p className="m-0">
              Find prospects in{' '}
              <span className="relative inline-block">
                <span className="relative z-10">5 seconds.</span>
                <span className="absolute inset-0 bg-gray-1200 transform -skew-y-2 opacity-80 rounded-sm"></span>
              </span>
            </p>
            <p className="m-0">Close deals- find contacts.</p>
          </h1>
        </header>

        {/* Description */}
        <div className="w-full text-center lg:text-left max-w-[751px] text-base xl:text-lg 2xl:text-xl tracking-num--0_01 leading-7 opacity-[0.6] flex flex-col gap-4 xl:gap-6 2xl:gap-8">
          <p className="m-0">
            TryFinder uses an advanced algorithm to find prospects more likely
            to be interested in your product—better than LinkedIn.
          </p>
          <p className="m-0">
            Combine that with real-time verified multi-channel contacts.
          </p>
          <p className="m-0">
            Better than RocketReach, Pipl, and more, all in one place.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-[535px] rounded-xl bg-gray-100 border-gray-1200 border-solid border box-border flex items-center justify-between py-2.5 px-3 gap-5 text-sm xl:text-base 2xl:text-lg font-inter-variable">
          <div className="flex items-center gap-2.5 flex-1">
            <SearchIcon />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search for any Business Contact"
              className="flex-1 bg-transparent border-none outline-none tracking-num--0_01 leading-[26px] font-medium text-white"
            />
          </div>
          <button
            onClick={handleSearch}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Feature List */}
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-[15px] text-xs xl:text-sm 2xl:text-base text-gray-1100">
          <div className="flex items-center justify-center gap-2">
            <AnonymousIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              Case-adjusted algorithm
            </div>
          </div>
          <div className="hidden md:block h-0.5 w-0.5 rounded-num-50 bg-white opacity-[0.5]" />
          <div className="flex items-center justify-center gap-2">
            <HeadphonesIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              24/7 Dedicated Support
            </div>
          </div>
          <div className="hidden md:block h-0.5 w-0.5 rounded-num-50 bg-white opacity-[0.5]" />
          <div className="flex items-center justify-center gap-2">
            <SearchInsightIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              High Quality Insights
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <footer className="w-fit rounded-xl bg-gray-100 border-gray-1200 border-solid border box-border flex items-center justify-center py-2.5 px-3 text-base mt-0 xl:mt-20 2xl:mt-40">
          <div className="flex items-center gap-[13px]">
            <div className="flex items-center">
              <Image
                src="/hero/group-accounts.png"
                alt="Group Accounts"
                width={125}
                height={125}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="tracking-num--0_01 leading-5 font-medium text-sm xl:text-base 2xl:text-lg">
              Vouched by 2.5k+ Business Owners
            </div>
          </div>
        </footer>
      </section>

      {/* Hero Image */}
      <section className="flex-1 flex justify-center lg:justify-end">
        <Image
          src="/hero/hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </section>
    </main>
  );
}
