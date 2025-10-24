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
    <div className="w-full h-[574px] relative text-left text-num-18 text-gray-1100 font-inter">
      <div className="absolute top-[505px] left-[calc(50%_-_240px)] rounded-xl bg-gray-100 border-gray-1200 border-solid border-[1px] flex flex-col items-center p-[15px] text-[16px] text-white">
        <div className="self-stretch flex items-center gap-[15px]">
          <div className="relative tracking-num--0_01 leading-num-24 font-medium opacity-[0.75]">
            Ready to supercharge your searches?
          </div>
          <div className="rounded-[9px] bg-white border-gray-1200 border-solid border-[3.8px] flex items-center justify-center py-[9px] px-8 text-gray-500 font-inter-variable">
            <div className="relative tracking-num--0_01 leading-[19.5px] font-semibold">
              Get Started
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[403px] left-[calc(50%_-_390px)] flex items-center gap-[15px]">
        <div className="flex items-center justify-center gap-2">
          <ZapIcon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">
            Unlimited Power.
          </div>
        </div>
        <div className="h-0.5 w-0.5 relative rounded-num-50 bg-white opacity-num-0_5" />
        <div className="flex items-center justify-center gap-2">
          <SearchListICon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">
            100 verified search every day
          </div>
        </div>
        <div className="h-0.5 w-0.5 relative rounded-num-50 bg-white opacity-num-0_5" />
        <div className="flex items-center justify-center gap-2">
          <MailLockIcon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">
            Real-Time Email Verification
          </div>
        </div>
      </div>
      <div className="absolute top-[181px] left-[663px] tracking-num--0_01 leading-num-24 font-medium">
        Per user
      </div>
      <div className="absolute top-[447px] left-[calc(50%_-_432px)] flex items-center gap-[15px]">
        <div className="flex items-center justify-center gap-2">
          <JobSearchIcon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">
            Full Contact Enrichment
          </div>
        </div>
        <div className="h-0.5 w-0.5 relative rounded-num-50 bg-white opacity-num-0_5" />
        <div className="flex items-center justify-center gap-2">
          <DownloadIcon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">{`Bulk Search & Export`}</div>
        </div>
        <div className="h-0.5 w-0.5 relative rounded-num-50 bg-white opacity-num-0_5" />
        <div className="flex items-center justify-center gap-2">
          <DashboardBrowsingIcon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">
            CRM Integration
          </div>
        </div>
        <div className="h-0.5 w-0.5 relative rounded-num-50 bg-white opacity-num-0_5" />
        <div className="flex items-center justify-center gap-2">
          <CancelCircleIcon />
          <div className="relative tracking-num--0_01 leading-num-24 font-medium">
            Cancel Anytime
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_471px)] w-[942px] flex flex-col items-center justify-center gap-[15px] text-[16px] text-white">
        <div className="rounded-[15px] bg-gray-200 border-gray-1300 border-solid border-[1px] flex items-center justify-center py-1.5 px-2.5">
          <div className="flex items-center gap-[5px]">
            <div className="h-2 w-2 relative rounded-num-50 bg-darkorange" />
            <div className="relative tracking-num--0_01 leading-5 font-medium">
              Pricing
            </div>
          </div>
        </div>
        <div className="relative text-[42px] tracking-[-0.03em] leading-[56px] font-aeonik-pro">
          Single Price, No Hidden Charges
        </div>
        <div className="relative text-[20px] tracking-num--0_01 leading-7 font-inter-variable opacity-[0.6]">
          No contracts. No surprises. Just results.
        </div>
      </div>
      <div className="absolute top-[176px] left-[calc(50%_-_204px)] font-aeonik-pro text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:2px_0_0_#fff,_0_2px_0_#fff,_-2px_0_0_#fff,_0_-2px_0_#fff] text-[171.3px]">
        <sup>
          <span>$</span>
        </sup>
        <span>20</span>
        <span className="text-[72px]">/mo</span>
      </div>
    </div>
  );
}
