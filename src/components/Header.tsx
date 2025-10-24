import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full h-[38px] relative text-left text-num-16 text-white font-inter-variable">
      <div className="absolute top-[-3.75px] left-[1192.25px] rounded-[9px] bg-white border-gray-900 border-solid border-[3.8px] flex items-center justify-center py-[9px] px-[18px] text-gray-100 hover:bg-gray-1100 transition-colors cursor-pointer">
        <div className="relative tracking-num--0_01 leading-[19.5px] font-semibold">
          Create Account
        </div>
      </div>
      <div className="absolute top-[-1px] left-[1095px] rounded-[9px] border-gray-1200 border-solid border- flex items-center justify-center py-[9px] px-[18px] cursor-pointer">
        <div className="relative tracking-num--0_01 leading-[19.5px] font-semibold">
          Sign In
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_14px)] left-[0px] flex items-center gap-[5px]">
        <Image
          src="/header/tryfinder.svg"
          className="h-7 w-full relative"
          width={114.1}
          height={28}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="absolute top-[6px] left-[calc(50%_-_223px)] flex items-center gap-[30px] font-inter">
        <div className="relative tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8">
          Features
        </div>
        <div className="relative tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8">
          Solutions
        </div>
        <div className="relative tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8">
          Reviews
        </div>
        <div className="relative tracking-num--0_01 leading-[26px] font-medium opacity-num-0_8">
          Pricing
        </div>
      </div>
    </div>
  );
}
