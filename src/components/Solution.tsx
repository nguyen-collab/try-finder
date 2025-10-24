import Image from 'next/image';
import {
  PromotionIcon,
  StartupIcon,
  StoreIcon,
  UserGroupIcon,
} from './common/SvgIcon';

export default function Solution() {
  return (
    <div className="w-full h-[755px] relative text-left text-num-16 text-white font-inter">
      <div className="absolute top-[0px] left-[calc(50%_-_471px)] w-[942px] flex flex-col items-center justify-center gap-[15px]">
        <div className="rounded-[15px] bg-gray-200 border-gray-1300 border-solid border-[1px] flex items-center justify-center py-1.5 px-num-10">
          <div className="flex items-center gap-[5px]">
            <div className="h-2 w-2 relative rounded-[50%] bg-darkorange" />
            <div className="relative tracking-num--0_01 leading-5 font-medium">
              Solutions
            </div>
          </div>
        </div>
        <div className="relative text-[42px] tracking-[-0.03em] leading-[56px] font-aeonik-pro">
          Built for Every Team That Sells, Markets, or Recruits.
        </div>
        <div className="relative text-[20px] tracking-num--0_01 leading-7 font-inter-variable opacity-[0.6]">
          From solo founders to Fortune 500 sales floors — find the right
          contacts, the right way, right now.
        </div>
      </div>
      <Image
        className="absolute top-[189px] left-[calc(50%_-_675px)] rounded-[15px] w-[1350px] h-[566px]"
        width={1350}
        height={566}
        sizes="100vw"
        alt=""
      />
      <div className="absolute top-[201px] left-[calc(50%_-_367px)] flex items-center gap-2.5 text-[18px]">
        <div className="w-[155px] rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
          <div className="flex items-center gap-2">
            <StoreIcon />
            <div className="relative tracking-num--0_01 leading-num-24 font-medium">
              Sales Teams
            </div>
          </div>
        </div>
        <div className="w-[194px] rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
          <div className="flex items-center gap-2">
            <PromotionIcon />
            <div className="relative tracking-num--0_01 leading-num-24 font-medium">
              Marketing Teams
            </div>
          </div>
        </div>
        <div className="w-[135px] rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
          <div className="flex items-center gap-2">
            <UserGroupIcon />
            <div className="relative tracking-num--0_01 leading-num-24 font-medium">
              Recruiters
            </div>
          </div>
        </div>
        <div className="w-[220px] rounded-[10px] bg-gray-200 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
          <div className="flex items-center gap-2">
            <StartupIcon />
            <div className="relative tracking-num--0_01 leading-num-24 font-medium">{`Startups & Founders`}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[335px] left-[60px] w-[606px] flex flex-col items-start gap-5 text-[38px] font-aeonik-pro">
        <div className="self-stretch flex flex-col items-start gap-2.5">
          <div className="self-stretch relative tracking-[-0.03em] leading-[42px]">
            Find decision-makers in seconds
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-[0.6]">
            <p className="m-0">
              Stop wasting hours on research, verify their emails instantly, and
              sync directly to your CRM. More conversations, more pipeline, more
              closed deals.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Even hard-to-reach prospects are covered, with access to Twitter,
              WhatsApp, Signal, and more.
            </p>
          </div>
        </div>
        <div className="rounded-[15px] bg-gray-500 border-gray-1200 border-solid border-[1px] flex items-center p-5 text-num-16 font-inter-variable">
          <div className="w-[414px] flex flex-col items-start gap-[15px]">
            <div className="self-stretch relative tracking-num--0_01 leading-num-24 opacity-[0.6]">
              “tryfinder tears the competition apart. I’ve tried almost every
              other search service, their speeds, success rates beats all the
              other providers. Incredible”
            </div>
            <div className="flex items-center gap-2 font-inter">
              <div className="flex items-center gap-2">
                <Image
                  className="h-6 w-6 relative rounded-[50%] object-cover"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/solution/user-avatar.png"
                />
                <div className="relative tracking-[-0.02em] leading-[22px] font-medium opacity-[0.75]">
                  Echo
                </div>
              </div>
              <div className="h-1 w-1 relative rounded-[50%] bg-white opacity-[0.25]" />
              <div className="relative tracking-[-0.02em] leading-[22px] opacity-[0.75]">
                Investor, @Theranos
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[319px] left-[1290px] rounded-[15px] bg-gray-500 border-gray-1200 border-solid border-[1px] box-border w-[558px] h-[376px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
    </div>
  );
}
