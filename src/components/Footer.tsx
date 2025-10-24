import Image from 'next/image';
import {
  ArrowRightSmallIcon,
  CancelCircle2Icon,
  ConfigurationIcon,
  SearchFocusIcon,
} from './common/SvgIcon';

export default function Footer() {
  return (
    <div className="w-full h-[669px] relative text-left text-num-14 text-white font-inter">
      <div className="absolute top-[600px] left-[calc(50%_-_968px)] w-[1921px] h-[69px]">
        <div className="absolute top-[0px] left-[calc(50%_-_960.5px)] bg-gray-200 border-gray-900 border-solid border-t-[1px] box-border w-[1921px] h-[69px]" />
        <div className="absolute top-[25px] left-[285px] tracking-num--0_01 leading-num-20 font-medium opacity-[0.8]">
          ©2025 Tryfinder LLC. All rights reserved.
        </div>
        <div className="absolute top-[25px] left-[1239px] w-[396px] flex items-center justify-between gap-5">
          <div className="relative tracking-num--0_01 leading-num-20 font-medium opacity-[0.8]">
            Terms of Service
          </div>
          <div className="h-0.5 w-0.5 relative rounded-[50%] bg-white opacity-[0.5]" />
          <div className="relative tracking-num--0_01 leading-num-20 font-medium opacity-[0.8]">
            Privacy Policy
          </div>
          <div className="h-0.5 w-0.5 relative rounded-[50%] bg-white opacity-[0.5]" />
          <div className="relative tracking-num--0_01 leading-num-20 font-medium opacity-[0.8]">
            Cookie Policy
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_968px)] [background:radial-gradient(50%_50%_at_50%_50%,_#0f0f0f,_#050505)] w-[1920px] h-[600px]" />
      <div className="absolute top-[116px] left-[calc(50%_-_479px)] w-[942px] flex flex-col items-center justify-center gap-[25px]">
        <div className="rounded-[15px] bg-gray-1300 border-gray-1200 border-solid border-[1px] flex items-center justify-center p-2.5 gap-2.5 text-gray-300">
          <div className="rounded-[7px] bg-white flex items-center justify-center py-1 px-2">
            <div className="relative tracking-num--0_01 leading-num-20 font-medium">
              Launch Offer
            </div>
          </div>
          <div className="flex items-center text-num-16 text-white">
            <div className="flex items-center gap-[5px]">
              <div className="relative tracking-num--0_01 leading-num-20 font-medium">
                Welcome to tryfinder.ai
              </div>
              <div className="h-[19.1px] w-[1.5px] relative opacity-[0.25]" />
              <div className="relative tracking-num--0_01 leading-num-20 font-medium">
                Get 2 Free Searches on us
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-[56px] tracking-[-0.03em] leading-[62px] font-aeonik-pro text-center">
          Ready to 10x Your Pipeline?
        </div>
        <div className="w-[751px] relative text-[20px] tracking-num--0_01 leading-7 text-center inline-block opacity-[0.9]">
          <p className="m-0">
            Join 10,000+ sales teams closing more deals with TryFinder.
          </p>
          <p className="m-0">
            Stop wasting time on tools that don&apos;t work. Start finding real
            emails that convert. Your first two searches are on us.
          </p>
        </div>
        <div className="rounded-xl bg-white border-gray-1200 border-solid border-[5px] flex items-center justify-center py-3 px-6 gap-[15px] text-[18px] text-gray-300 font-inter-variable">
          <div className="relative tracking-num--0_01 leading-[26px] font-semibold">
            Start Finding Buyers Now
          </div>
          <ArrowRightSmallIcon />
        </div>
        <div className="flex items-center gap-[15px] text-num-16">
          <div className="flex items-center justify-center gap-2">
            <ConfigurationIcon />
            <div className="relative tracking-num--0_01 leading-6 font-medium opacity-[0.9]">
              Instant Setup
            </div>
          </div>
          <div className="h-0.5 w-0.5 relative rounded-[50%] bg-white opacity-[0.5]" />
          <div className="flex items-center justify-center gap-2">
            <SearchFocusIcon />
            <div className="relative tracking-num--0_01 leading-6 font-medium opacity-[0.9]">
              2 Free Searches
            </div>
          </div>
          <div className="h-0.5 w-0.5 relative rounded-[50%] bg-white opacity-[0.5]" />
          <div className="flex items-center justify-center gap-2">
            <CancelCircle2Icon />
            <div className="relative tracking-num--0_01 leading-6 font-medium opacity-[0.9]">
              Cancel Anytime
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[30.5px] left-[0px] w-[540px] h-[540px] opacity-[0.05] overflow-hidden flex items-center justify-center">
        <Image
          src="/footer/subtract-left.png"
          className="w-full h-full object-cover absolute left-[132px] top-[3px] [transform:scale(1)]"
          width={540}
          height={540}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="absolute top-[30px] left-[1904px] w-[540px] h-[540px] opacity-[0.05] overflow-hidden flex items-center justify-center">
        <Image
          src="/footer/subtract-right.png"
          className="w-full h-full object-cover absolute left-[0px] top-[3px] [transform:scale(1.038)]"
          width={540}
          height={540}
          sizes="100vw"
          alt=""
        />
      </div>
    </div>
  );
}
