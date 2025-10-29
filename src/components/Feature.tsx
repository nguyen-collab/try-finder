'use client';

import {
  CheckBadge,
  EmailSearch,
  FilterMailCircle,
  GlobalSearch,
  Mentoring,
} from './common/SvgIcon';
import ScrollAnimationWrapper from './common/ScrollAnimationWrapper';
import {
  fadeInUp,
  fadeInBottom,
  staggerContainer,
  staggerItems,
} from '@/utils/animations';
import { motion } from 'framer-motion';

export default function Feature() {
  return (
    <section className="w-full order-2 lg:order-1 text-white font-inter">
      <div className="max-w-[1350px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-[30px]">
        {/* Header Section */}
        <ScrollAnimationWrapper variants={fadeInUp}>
          <header className="w-full lg:max-w-[942px] flex flex-col gap-3 sm:gap-4 lg:gap-[15px]">
            <div className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex items-center justify-center py-1.5 px-2.5 w-fit">
              <div className="flex items-center gap-[5px]">
                <div className="h-2 w-2 rounded-[50%] bg-white" />
                <div className="text-sm sm:text-base tracking-num--0_01 leading-5 font-medium">
                  Features
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[56px] font-aeonik-pro">
              Everything You Need to Find, Verify, and Close.
            </h2>
            <p className="w-full lg:max-w-[751px] text-sm sm:text-base lg:text-[20px] tracking-num--0_01 leading-relaxed sm:leading-relaxed lg:leading-7 font-inter-variable opacity-num-0_6">
              Built for sales teams tired of bounced emails, dead-end LinkedIn
              searches, and CRMs full of outdated contacts. Real data, real-time
              verification, real results.
            </p>
          </header>
        </ScrollAnimationWrapper>

        {/* Features Grid */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[18px] text-sm sm:text-base lg:text-num-18">
          {/* Main Features - Full Width Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[18px]">
            {/* AI-Powered Algorithm Feature */}
            <ScrollAnimationWrapper variants={fadeInUp}>
              <div className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col sm:flex-row items-center p-4 sm:p-6 lg:p-num-40 gap-4 sm:gap-6 lg:gap-[30px]">
                <div className="flex-1 w-full sm:w-32 lg:w-auto min-h-24 sm:min-h-32 lg:min-h-[149px] rounded-[10px] bg-gray-1400" />
                <div className="flex-1 w-full sm:max-w-[675px] flex flex-col gap-1 sm:gap-2 lg:gap-[5px]">
                  <div className="flex items-center gap-2">
                    <GlobalSearch />
                    <h3 className="text-sm sm:text-base lg:text-lg tracking-num--0_01 leading-num-24 font-medium">
                      AI-Powered Algorithm
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-num-16 tracking-num--0_01 leading-num-24 font-medium opacity-num-0_6">
                    Smart matching that connects you with the people who
                    matter—buyers, sellers, or anyone relevant to your business.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Real-Time Verification Feature */}
            <ScrollAnimationWrapper variants={fadeInBottom}>
              <div className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col sm:flex-row items-center p-4 sm:p-6 lg:p-num-40 gap-4 sm:gap-6 lg:gap-[30px]">
                <div className="w-full sm:w-32 lg:w-auto min-h-24 sm:min-h-60 lg:min-h-[249px] flex-1 rounded-[10px] bg-gray-1400" />{' '}
                <div className="flex-1 w-full sm:max-w-[675px] flex flex-col gap-1 sm:gap-2 lg:gap-[5px]">
                  <div className="flex items-center gap-2">
                    <CheckBadge />
                    <h3 className="text-sm sm:text-base lg:text-lg tracking-num--0_01 leading-num-24 font-medium">
                      Real-Time Verification
                    </h3>
                  </div>
                  <motion.div
                    className="text-xs sm:text-sm lg:text-num-16 tracking-num--0_01 leading-num-24 font-medium opacity-num-0_6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <ul className="pl-4 sm:pl-5 lg:pl-[21px] space-y-1 list-disc">
                      <motion.li variants={staggerItems}>
                        Every email is verified for accuracy.
                      </motion.li>
                      <motion.li variants={staggerItems}>
                        Phone numbers are sourced from industry-leading,
                        high-quality data providers.
                      </motion.li>
                      <motion.li variants={staggerItems}>
                        We offer access to contact details others can&apos;t
                        provide.
                      </motion.li>
                      <motion.li variants={staggerItems}>
                        Identify multi-channel communication options—including
                        Twitter, WhatsApp, Telegram, Signal, and personal
                        contact numbers.
                      </motion.li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Secondary Features - Responsive Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[18px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Advanced Search Filters */}
            <motion.div
              className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col py-4 sm:py-6 lg:py-[30px] px-4 sm:px-6 lg:px-num-40"
              variants={fadeInBottom}
            >
              <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[5px]">
                <div className="flex items-center gap-2">
                  <FilterMailCircle />
                  <h3 className="text-sm sm:text-base lg:text-lg tracking-num--0_01 leading-num-24 font-medium">
                    Advanced Search Filters
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-num-16 tracking-num--0_01 leading-num-24 font-medium opacity-num-0_6">
                  Hunt by job title, industry, company size, location, or
                  seniority level. Find the exact decision-makers you need, not
                  just random contacts.
                </p>
              </div>
            </motion.div>

            {/* Smart Lead Enrichment */}
            <motion.div
              className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col py-4 sm:py-6 lg:py-[30px] px-4 sm:px-6 lg:px-num-40"
              variants={fadeInBottom}
            >
              <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[5px]">
                <div className="flex items-center gap-2">
                  <Mentoring />
                  <h3 className="text-sm sm:text-base lg:text-lg tracking-num--0_01 leading-num-24 font-medium">
                    Smart Lead Enrichment
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-num-16 tracking-num--0_01 leading-num-24 font-medium opacity-num-0_6">
                  Drop in just an email address. Get back their full profile -
                  current title, direct phone, manager&apos;s name, tech stack,
                  company size, and all available contacts.
                </p>
              </div>
            </motion.div>

            {/* Email Pattern Detection */}
            <motion.div
              className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col py-4 sm:py-6 lg:py-[30px] px-4 sm:px-6 lg:px-num-40 sm:col-span-2 lg:col-span-1"
              variants={fadeInBottom}
            >
              <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[5px]">
                <div className="flex items-center gap-2">
                  <EmailSearch />
                  <h3 className="text-sm sm:text-base lg:text-lg tracking-num--0_01 leading-num-24 font-medium">
                    Email Pattern Detection
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-num-16 tracking-num--0_01 leading-num-24 font-medium opacity-num-0_6">
                  Discovered one email at a company? Our AI instantly learns
                  their format and unlocks every other email address at that
                  organization. One find becomes hundreds.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
