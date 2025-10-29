'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AnonymousIcon,
  ArrowRightIcon,
  HeadphonesIcon,
  SearchIcon,
  SearchInsightIcon,
} from './common/SvgIcon';
import Image from 'next/image';
import LottieAnimation from './common/LottieAnimation';
import heroAnimation from '../../public/animations/hero.json';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInBottom,
  staggerContainer,
  staggerItems,
} from '@/utils/animations';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to sign-up page when user enters text and searches
      router.push('/sign-up');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="flex flex-col mt-12 lg:mt-0 lg:flex-row items-center justify-between text-white font-inter">
      {/* Hero Content Section */}
      <motion.section
        className="flex-3/5 flex flex-col items-center lg:items-start gap-6 lg:gap-[25px] text-left text-sm px-4 lg:px-0"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Launch Offer Badge */}
        {/* <div className="rounded-[15px] bg-gray-1300 border-gray-1200 border-solid border flex items-center justify-center p-2.5 text-gray-500">
          <div className="rounded-[7px] bg-white flex items-center justify-center py-1 px-2">
            <div className="text-sm xl:text-base 2xl:text-lg tracking-num--0_01 leading-5 font-medium">
              Launch Offer
            </div>
          </div>
        </div> */}

        {/* Main Headline */}
        <motion.header
          className="w-full text-center lg:text-left"
          variants={fadeInUp}
        >
          <h1 className="text-4xl xl:text-5xl 2xl:text-[56px] tracking-[-0.03em] leading-12 xl:leading-14 2xl:leading-[62px] font-aeonik-pro">
            <p className="m-0">
              Find prospects in{' '}
              <span className="relative inline-block px-1.5">
                <span className="relative z-10">5 seconds.</span>
                <span className="absolute inset-0 bg-gray-1200 transform -skew-y-2 opacity-80"></span>
              </span>
            </p>
            <p className="m-0">Close deals- find contacts.</p>
          </h1>
        </motion.header>

        {/* Description */}
        <motion.div
          className="w-full text-center lg:text-left max-w-[751px] text-base xl:text-lg 2xl:text-xl tracking-num--0_01 leading-7 opacity-[0.6] flex flex-col gap-4 xl:gap-6 2xl:gap-8"
          variants={staggerContainer}
        >
          <motion.p className="m-0" variants={staggerItems}>
            TryFinder uses an advanced algorithm to find prospects more likely
            to be interested in your product—better than LinkedIn.
          </motion.p>
          <motion.p className="m-0" variants={staggerItems}>
            Combine that with real-time verified multi-channel contacts.
          </motion.p>
          <motion.p className="m-0" variants={staggerItems}>
            Better than RocketReach, Pipl, and more, all in one place.
          </motion.p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          className="group w-full max-w-[535px] rounded-xl bg-gray-100 border-gray-1200 border-solid border box-border flex items-center justify-between py-2.5 px-3 gap-5 text-sm xl:text-base 2xl:text-lg font-inter-variable focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200"
          variants={staggerContainer}
        >
          <div className="flex items-center gap-2.5 flex-1">
            <SearchIcon className="group-focus-within:[&_path]:fill-white transition-all duration-200" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search for any Business Contact"
              className="flex-1 bg-transparent border-none outline-none tracking-num--0_01 leading-[26px] font-medium text-white focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <ArrowRightIcon />
          </button>
        </motion.div>

        {/* Feature List */}
        <motion.div
          className="flex flex-col md:flex-row flex-wrap items-center gap-[15px] text-xs xl:text-sm 2xl:text-base text-gray-1100"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={staggerItems}
          >
            <AnonymousIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              Case-adjusted algorithm
            </div>
          </motion.div>
          <div className="hidden md:block h-0.5 w-0.5 rounded-num-50 bg-white opacity-[0.5]" />
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={staggerItems}
          >
            <HeadphonesIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              24/7 Dedicated Support
            </div>
          </motion.div>
          <div className="hidden md:block h-0.5 w-0.5 rounded-num-50 bg-white opacity-[0.5]" />
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={staggerItems}
          >
            <SearchInsightIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              High Quality Insights
            </div>
          </motion.div>
        </motion.div>

        {/* Social Proof */}
        <motion.footer
          className="w-fit rounded-xl bg-gray-100 border-gray-1200 border-solid border box-border flex items-center justify-center py-2.5 px-3 text-base mt-0 xl:mt-20 2xl:mt-40"
          variants={fadeInBottom}
        >
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
        </motion.footer>
      </motion.section>

      {/* Hero Animation */}
      <motion.section
        className="flex flex-2/5 justify-center lg:justify-end items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="w-full h-full max-w-[500px] xl:max-w-[600px]">
          <LottieAnimation
            animationData={heroAnimation}
            className="w-full h-full"
            loop={true}
            autoplay={true}
            speed={1}
          />
        </div>
      </motion.section>
    </main>
  );
}
