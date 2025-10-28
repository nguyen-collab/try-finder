import Image from 'next/image';
import {
  AISearchIcon,
  NotificationIcon,
  SavedSearchesIcon,
} from './common/SvgIcon';

export default function DashboardHeader() {
  return (
    <div className="w-full max-w-xl mx-auto relative rounded-[13.08px] bg-[#161616]  border-gray-1300 border-solid border-[0.7px] box-border flex items-center justify-between py-[10.9px] px-[16.4px] gap-5 text-left text-[13.08px] text-gray-10 font-inter-variable">
      <div className="flex items-center gap-[6.2px]">
        <Image
          src="/header/tryfinder.svg"
          className="h-[21.8px] w-[117.9px]"
          width={88.9}
          height={21.8}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="hidden sm:flex items-center gap-[13.1px]">
        <div className="rounded-[8.72px] overflow-hidden flex flex-col items-center justify-center py-[7px] px-[10.5px]">
          <div className="flex items-center gap-[8.7px]">
            <div className="flex items-center gap-[4.4px]">
              <AISearchIcon />
              <div className="relative tracking-[-0.01em] leading-[13.08px] font-medium">
                Search
              </div>
            </div>
            <div className="h-[20.9px] rounded-[5.23px] bg-limegreen-300 border-limegreen-200 border-solid border-[0.9px] box-border flex items-center justify-center py-0 px-[5.2px] text-[10.9px] text-limegreen-100 font-inter">
              <div className="relative tracking-[-0.01em] leading-[13.95px] font-semibold">
                2/2
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[8.72px] overflow-hidden flex flex-col items-center justify-center py-[7px] px-[10.5px]">
          <div className="self-stretch flex items-center">
            <div className="flex items-center gap-[8.7px]">
              <SavedSearchesIcon />
              <div className="relative tracking-[-0.01em] leading-[13.08px] font-medium">
                Saved Searches
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[5px] text-[17.76px] text-white">
        <NotificationIcon />
        <div className="h-[34.9px] w-[34.9px] rounded-[11.89px] bg-gray-500 border-gray-1300 border-solid border-[1.1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center">
          <div className="relative tracking-[-0.01em] leading-[26.64px] font-extrabold">
            E
          </div>
        </div>
      </div>
    </div>
  );
}
