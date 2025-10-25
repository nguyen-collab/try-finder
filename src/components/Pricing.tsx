import Image from 'next/image';
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
    <section className="w-full min-h-[574px] text-left text-num-18 text-white font-inter flex flex-col items-center justify-center">
      <div className="max-w-[1350px] w-full flex flex-col items-center gap-4">
        {/* Header Section */}
        <header className="max-w-[942px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-[15px] text-center">
          <div className="rounded-[15px] bg-gray-200 border-gray-1300 border-solid border flex items-center justify-center py-1.5 px-2.5">
            <div className="flex items-center gap-[5px]">
              <div className="h-2 w-2 rounded-num-50 bg-darkorange" />
              <div className="tracking-num--0_01 leading-5 font-medium text-sm xl:text-base 2xl:text-lg">
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
        <main className="flex flex-col items-center gap-4 sm:gap-4 lg:gap-8 relative">
          {/* Price */}
          <div className="flex items-center justify-center px-12">
            <div className="relative">
              <Image
                src="/pricing/moper.png"
                alt="Price Background"
                width={393}
                height={197}
              />
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
        <footer className="w-fit mt-8">
          <div className="rounded-xl bg-gray-100 border-gray-1200 border-solid border flex flex-col items-center p-3 lg:p-[15px] text-sm sm:text-base lg:text-[16px] text-white">
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-[15px]">
              <div className="tracking-num--0_01 leading-num-24 font-medium opacity-[0.75] text-center sm:text-left">
                Ready to supercharge your searches?
              </div>
              <button className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.25)] rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2)),_#fafafa] flex items-center justify-center p-3 text-num-16 text-gray-300 hover:[background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.1)),_#fafafa] transition-[background] duration-300 ease-in-out cursor-pointer">
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
