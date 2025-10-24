export default function CopyRight() {
  return (
    <div className="w-full min-h-[669px] text-left text-num-14 text-white font-inter relative overflow-hidden">
      <div className="bg-gray-200 border-gray-900 border-solid border-t flex items-center justify-between py-6 px-4 sm:px-6 lg:px-[285px]">
        <div className="tracking-num--0_01 leading-num-20 font-medium opacity-[0.8] text-xs sm:text-sm lg:text-base">
          ©2025 Tryfinder LLC. All rights reserved.
        </div>
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <a
            href="#"
            className="tracking-num--0_01 leading-num-20 font-medium opacity-[0.8] text-xs sm:text-sm lg:text-base hover:opacity-100 transition-opacity"
          >
            Terms of Service
          </a>
          <div className="h-0.5 w-0.5 rounded-[50%] bg-white opacity-[0.5]" />
          <a
            href="#"
            className="tracking-num--0_01 leading-num-20 font-medium opacity-[0.8] text-xs sm:text-sm lg:text-base hover:opacity-100 transition-opacity"
          >
            Privacy Policy
          </a>
          <div className="h-0.5 w-0.5 rounded-[50%] bg-white opacity-[0.5]" />
          <a
            href="#"
            className="tracking-num--0_01 leading-num-20 font-medium opacity-[0.8] text-xs sm:text-sm lg:text-base hover:opacity-100 transition-opacity"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}
