'use client';

import Image from 'next/image';
import {
  PromotionIcon,
  StartupIcon,
  StoreIcon,
  UserGroupIcon,
} from './common/SvgIcon';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './common/ScrollAnimationWrapper';
import {
  fadeInUp,
  fadeInBottom,
  staggerContainer,
  staggerItems,
} from '@/utils/animations';

export default function Solution() {
  return (
    <section className="w-full h-auto xl:min-h-[575px] 2xl:min-h-[655px] text-left text-base text-white font-inter relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="hidden xl:block absolute top-51 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          className="w-full h-full object-cover rounded-[15px]"
          width={1350}
          height={566}
          sizes="100vw"
          alt="Solution background"
          src="/solution/solution-bg.png"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-[1350px] w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-[28px]">
          {/* Header Section */}
          <ScrollAnimationWrapper variants={fadeInUp}>
            <header className="max-w-[942px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-[15px] text-center">
              <div className="rounded-[15px] bg-gray-200 border-gray-1300 border-solid border-[1px] flex items-center justify-center py-1.5 px-num-10">
                <div className="flex items-center gap-[5px]">
                  <div className="h-2 w-2 rounded-[50%] bg-darkorange" />
                  <div className="tracking-num--0_01 leading-5 font-medium text-sm xl:text-base 2xl:text-lg">
                    Solutions
                  </div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[56px] font-aeonik-pro">
                Built for Every Team That Sells, Markets, or Recruits.
              </h2>
              <p className="text-sm sm:text-base lg:text-[20px] tracking-num--0_01 leading-relaxed sm:leading-relaxed lg:leading-7 font-inter-variable opacity-[0.6]">
                From solo founders to Fortune 500 sales floors — find the right
                contacts, the right way, right now.
              </p>
            </header>
          </ScrollAnimationWrapper>

          {/* Team Categories */}
          <motion.div
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-2.5 text-sm 2xl:text-md"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 w-fit"
              variants={staggerItems}
            >
              <div className="flex items-center gap-2">
                <StoreIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Sales Teams
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 w-fit"
              variants={staggerItems}
            >
              <div className="flex items-center gap-2">
                <PromotionIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Marketing Teams
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 w-fit"
              variants={staggerItems}
            >
              <div className="flex items-center gap-2">
                <UserGroupIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Recruiters
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 w-fit"
              variants={staggerItems}
            >
              <div className="flex items-center gap-2">
                <StartupIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Startups & Founders
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content Section */}
          <main className="w-full max-w-[1350px] flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-6 sm:gap-8 lg:gap-12 mt-4 2xl:mt-8 px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Left Content */}
            <ScrollAnimationWrapper variants={fadeInUp} viewportAmount={0.1}>
              <div className="flex-1 max-w-[606px] flex flex-col gap-4 lg:gap-10 2xl:gap-20 text-3xl 2xl:text-[38px] font-aeonik-pro">
                <div className="flex flex-col text-center xl:text-left gap-2 sm:gap-3 lg:gap-2.5">
                  <h3 className="tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[42px]">
                    Find decision-makers in seconds
                  </h3>
                  <motion.div
                    className="text-sm xl:text-sm 2xl:text-base tracking-num--0_01 leading-num-24 font-inter opacity-[0.6] space-y-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.p variants={staggerItems}>
                      Stop wasting hours on research, verify their emails
                      instantly, and sync directly to your CRM. More
                      conversations, more pipeline, more closed deals.
                    </motion.p>
                    <motion.p variants={staggerItems}>
                      Even hard-to-reach prospects are covered, with access to
                      Twitter, WhatsApp, Signal, and more.
                    </motion.p>
                  </motion.div>
                </div>

                {/* Testimonial Card */}
                <motion.div
                  className="rounded-[15px] bg-gray-500 border-gray-1200 border-solid border flex items-center p-4 sm:p-5 lg:p-5 text-sm xl:text-sm 2xl:text-base font-inter-variable"
                  variants={fadeInBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[15px] flex-1">
                    <blockquote className="tracking-num--0_01 leading-num-24 opacity-[0.6]">
                      &quot;tryfinder tears the competition apart. I&apos;ve
                      tried almost every other search service, their speeds,
                      success rates beats all the other providers.
                      Incredible&quot;
                    </blockquote>
                    <div className="flex items-center gap-2 font-inter">
                      <div className="flex items-center gap-2">
                        <Image
                          className="h-6 w-6 rounded-[50%] object-cover"
                          width={24}
                          height={24}
                          sizes="100vw"
                          alt="Echo's avatar"
                          src="/solution/user-avatar.png"
                        />
                        <div className="tracking-[-0.02em] leading-[22px] font-medium opacity-[0.75]">
                          Echo
                        </div>
                      </div>
                      <div className="h-1 w-1 rounded-[50%] bg-white opacity-[0.25]" />
                      <div className="tracking-[-0.02em] leading-[22px] opacity-[0.75]">
                        Investor, @Theranos
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimationWrapper>

            {/* Right Content - Decorative Element */}
            <motion.div
              className="hidden xl:block flex-1"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="rounded-[15px] bg-gray-500 border-gray-1200 border-solid border h-full" />
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
