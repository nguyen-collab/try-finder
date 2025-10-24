import { ArrowRightSmallIcon, CloseIcon, PlusIcon } from './common/SvgIcon';

export default function Faq() {
  return (
    <div className="w-full relative bg-gray-200 border-gray-1000 border-solid border-t-[1px] border-b-[1px] box-border flex flex-col items-center py-[120px] px-[285px] text-left text-num-16 text-white font-inter">
      <div className="w-[1350px] flex flex-col items-center justify-center gap-[30px]">
        <div className="w-[942px] flex flex-col items-center justify-center gap-[15px]">
          <div className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border-[1px] flex items-center justify-center py-1.5 px-num-10">
            <div className="flex items-center gap-[5px]">
              <div className="h-2 w-2 relative rounded-[50%] bg-limegreen" />
              <div className="relative tracking-num--0_01 leading-5 font-medium">
                FAQs
              </div>
            </div>
          </div>
          <div className="relative text-[42px] tracking-[-0.03em] leading-[56px] font-aeonik-pro">
            Got Questions? We&apos;ve Got Answers.
          </div>
          <div className="relative text-[20px] tracking-num--0_01 leading-7 font-inter-variable opacity-[0.6]">
            Everything you need to know before you start closing more deals.
          </div>
        </div>
        <div className="w-[666px] flex flex-col items-start gap-2.5">
          <div className="self-stretch shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-200 border-gray-1200 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                How accurate is TryFinder&apos;s email verification?
              </div>
              <CloseIcon />
            </div>
            <div className="self-stretch flex items-center justify-center p-num-12">
              <div className="flex-1 relative tracking-num--0_01 leading-num-24 font-medium opacity-[0.6]">
                98%+ deliverability guaranteed. Every email is triple-verified
                in real-time - we check the format, ping the mail server, and
                validate against our live database. If it&apos;s not
                deliverable, you won&apos;t see it. And if you somehow get a
                bounce? We&apos;ll credit your account instantly.
              </div>
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                What happens if I need more than 100 searches per day?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                Which CRMs do you integrate with?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                Can I search for contacts at specific companies?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                What data do you provide beyond email addresses?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                Can I export my searches to CSV?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                How do you source and verify contact data?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-num-68 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-start p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between p-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                Do you have an API for developers?
              </div>
              <PlusIcon />
            </div>
          </div>
          <div className="self-stretch h-20 shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10">
            <div className="self-stretch rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border-[1px] flex items-center justify-between py-num-10 px-num-12 gap-5">
              <div className="relative tracking-num--0_01 leading-num-24 font-medium">
                Couldn’t find an answer you’re looking for?
              </div>
              <div className="rounded-[9px] border-gray-1200 border-solid border-[1px] flex items-center justify-center py-[9px] px-[18px] gap-[11.3px] text-[14px]">
                <div className="relative tracking-num--0_01 leading-5 font-medium">
                  Contact Us
                </div>
                <ArrowRightSmallIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
