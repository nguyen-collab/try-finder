import Image from 'next/image';
import {
  PromotionIcon,
  StartupIcon,
  StoreIcon,
  UserGroupIcon,
} from './common/SvgIcon';

export default function Solution() {
  return (
    <section className="w-full h-auto xl:min-h-[835px] text-left text-num-16 text-white font-inter relative overflow-hidden">
      {/* Background Image */}
      <div className="hidden xl:block absolute top-40 z-0">
        <Image
          className="w-full h-full object-cover rounded-[15px]"
          width={1350}
          height={566}
          sizes="100vw"
          alt="Solution background"
          src="/solution/solution-bg.png"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-[1350px] w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-[15px]">
          {/* Header Section */}
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

          {/* Team Categories */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-2.5 text-sm 2xl:text-[18px]">
            <div className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 sm:p-3 lg:p-num-10 w-fit">
              <div className="flex items-center gap-2">
                <StoreIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Sales Teams
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 sm:p-3 lg:p-num-10 w-fit">
              <div className="flex items-center gap-2">
                <PromotionIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Marketing Teams
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 sm:p-3 lg:p-num-10 w-fit">
              <div className="flex items-center gap-2">
                <UserGroupIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Recruiters
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-2 sm:p-3 lg:p-num-10 w-fit">
              <div className="flex items-center gap-2">
                <StartupIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium">
                  Startups & Founders
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <main className="w-full max-w-[1350px] flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-6 sm:gap-8 lg:gap-12 mt-8 xl:mt-10 2xl:mt-16 px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Left Content */}
            <div className="flex-1 max-w-[606px] flex flex-col gap-4 lg:gap-5 2xl:gap-20 text-3xl 2xl:text-[38px] font-aeonik-pro">
              <div className="flex flex-col text-center xl:text-left gap-2 sm:gap-3 lg:gap-2.5">
                <h3 className="tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[42px]">
                  Find decision-makers in seconds
                </h3>
                <div className="text-sm xl:text-sm 2xl:text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-[0.6] space-y-2">
                  <p>
                    Stop wasting hours on research, verify their emails
                    instantly, and sync directly to your CRM. More
                    conversations, more pipeline, more closed deals.
                  </p>
                  <p>
                    Even hard-to-reach prospects are covered, with access to
                    Twitter, WhatsApp, Signal, and more.
                  </p>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="rounded-[15px] bg-gray-500 border-gray-1200 border-solid border flex items-center p-4 sm:p-5 lg:p-5 text-sm xl:text-sm 2xl:text-num-16 font-inter-variable">
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[15px] flex-1">
                  <blockquote className="tracking-num--0_01 leading-num-24 opacity-[0.6]">
                    &quot;tryfinder tears the competition apart. I&apos;ve tried
                    almost every other search service, their speeds, success
                    rates beats all the other providers. Incredible&quot;
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
              </div>
            </div>

            {/* Right Content - Decorative Element */}
            <div className="hidden xl:block flex-1">
              <div className="rounded-[15px] bg-gray-500 border-gray-1200 border-solid border h-full" />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
