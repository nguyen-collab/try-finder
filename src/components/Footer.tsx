import {
  ArrowRightSmall2Icon,
  CancelCircle2Icon,
  ConfigurationIcon,
  SearchFocusIcon,
} from './common/SvgIcon';

export default function Footer() {
  return (
    <footer className="w-full text-left text-num-14 text-white font-inter relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        {/* CTA Section */}
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-[942px] w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-[25px]">
            {/* Launch Offer Badge */}
            <div className="rounded-[15px] bg-gray-1300 border-gray-1200 border-solid border flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 lg:p-2.5 gap-2 sm:gap-3 lg:gap-2.5 text-gray-300">
              <div className="rounded-[7px] bg-white flex items-center justify-center py-1 px-2">
                <div className="tracking-num--0_01 leading-num-20 font-medium text-xs sm:text-sm lg:text-base">
                  Launch Offer
                </div>
              </div>
              <div className="flex items-center text-sm sm:text-base lg:text-num-16 text-white">
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-[5px]">
                  <div className="tracking-num--0_01 leading-num-20 font-medium">
                    Welcome to tryfinder.ai
                  </div>
                  <div className="h-[19.1px] w-[1.5px] opacity-[0.25] bg-gray-1100" />
                  <div className="tracking-num--0_01 leading-num-20 font-medium">
                    Get 2 Free Searches on us
                  </div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[62px] font-aeonik-pro text-center">
              Ready to 10x Your Pipeline?
            </h1>

            {/* Description */}
            <div className="max-w-[751px] text-sm sm:text-base lg:text-[20px] tracking-num--0_01 leading-relaxed sm:leading-relaxed lg:leading-7 text-center opacity-[0.9] space-y-2">
              <p>Join 10,000+ sales teams closing more deals with TryFinder.</p>
              <p>
                Stop wasting time on tools that don&apos;t work. Start finding
                real emails that convert. Your first two searches are on us.
              </p>
            </div>

            {/* CTA Button */}
            <button className="rounded-xl bg-white border-gray-900 border-solid border-[5px] flex items-center justify-center py-3 sm:py-4 lg:py-3 px-6 sm:px-8 lg:px-6 gap-3 sm:gap-4 lg:gap-[15px] text-base sm:text-lg lg:text-[18px] text-gray-300 font-inter-variable hover:bg-gray-1100 transition-colors cursor-pointer">
              <span className="tracking-num--0_01 leading-[26px] font-semibold">
                Start Finding Buyers Now
              </span>
              <ArrowRightSmall2Icon />
            </button>

            {/* Features */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-[15px] text-sm sm:text-base lg:text-num-16">
              <div className="flex items-center justify-center gap-2">
                <ConfigurationIcon />
                <div className="tracking-num--0_01 leading-6 font-medium opacity-[0.9]">
                  Instant Setup
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-[50%] bg-white opacity-[0.5]" />
              <div className="flex items-center justify-center gap-2">
                <SearchFocusIcon />
                <div className="tracking-num--0_01 leading-6 font-medium opacity-[0.9]">
                  2 Free Searches
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-[50%] bg-white opacity-[0.5]" />
              <div className="flex items-center justify-center gap-2">
                <CancelCircle2Icon />
                <div className="tracking-num--0_01 leading-6 font-medium opacity-[0.9]">
                  Cancel Anytime
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </footer>
  );
}
