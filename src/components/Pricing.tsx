import {
  CancelCircleIcon,
  DashboardBrowsingIcon,
  DownloadIcon,
  JobSearchIcon,
  MailLockIcon,
  SearchListICon,
  ZapIcon,
} from './common/SvgIcon';

export default function Pricing() {
  return (
    <section className="w-full min-h-[574px] text-left text-num-18 text-gray-1100 font-inter flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1350px] w-full flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Header Section */}
        <header className="max-w-[942px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-[15px] text-center">
          <div className="rounded-[15px] bg-gray-200 border-gray-1300 border-solid border flex items-center justify-center py-1.5 px-2.5">
            <div className="flex items-center gap-[5px]">
              <div className="h-2 w-2 rounded-num-50 bg-darkorange" />
              <div className="tracking-num--0_01 leading-5 font-medium">
                Pricing
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[56px] font-aeonik-pro">
            Single Price, No Hidden Charges
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] tracking-num--0_01 leading-relaxed sm:leading-relaxed lg:leading-7 font-inter-variable opacity-[0.6]">
            No contracts. No surprises. Just results.
          </p>
        </header>

        {/* Pricing Display */}
        <main className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Price */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
            <div className="font-aeonik-pro text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:2px_0_0_#fff,_0_2px_0_#fff,_-2px_0_0_#fff,_0_-2px_0_#fff] text-6xl sm:text-7xl lg:text-[171.3px]">
              <sup>
                <span>$</span>
              </sup>
              <span>20</span>
              <span className="text-2xl sm:text-3xl lg:text-[72px]">/mo</span>
            </div>
            <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
              Per user
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full max-w-4xl flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Top Features */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-[15px]">
              <div className="flex items-center justify-center gap-2">
                <ZapIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  Unlimited Power.
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center justify-center gap-2">
                <SearchListICon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  100 verified search every day
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center justify-center gap-2">
                <MailLockIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  Real-Time Email Verification
                </div>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-[15px]">
              <div className="flex items-center justify-center gap-2">
                <JobSearchIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  Full Contact Enrichment
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center justify-center gap-2">
                <DownloadIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  Bulk Search & Export
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center justify-center gap-2">
                <DashboardBrowsingIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  CRM Integration
                </div>
              </div>
              <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-num-0_5" />
              <div className="flex items-center justify-center gap-2">
                <CancelCircleIcon />
                <div className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                  Cancel Anytime
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <footer className="w-full max-w-2xl">
          <div className="rounded-xl bg-gray-100 border-gray-1200 border-solid border flex flex-col items-center p-4 sm:p-6 lg:p-[15px] text-sm sm:text-base lg:text-[16px] text-white">
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-[15px]">
              <div className="tracking-num--0_01 leading-num-24 font-medium opacity-[0.75] text-center sm:text-left">
                Ready to supercharge your searches?
              </div>
              <button className="rounded-[9px] bg-white border-gray-1200 border-solid border-[3.8px] flex items-center justify-center py-2 sm:py-3 lg:py-[9px] px-6 sm:px-8 lg:px-8 text-gray-500 font-inter-variable hover:bg-gray-50 transition-colors">
                <div className="tracking-num--0_01 leading-[19.5px] font-semibold">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
