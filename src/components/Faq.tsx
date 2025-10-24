import { ArrowRightSmallIcon, CloseIcon, PlusIcon } from './common/SvgIcon';

export default function Faq() {
  return (
    <section className="w-full bg-gray-200 border-gray-1000 border-solid border-t border-b py-16 sm:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-[285px] text-left text-num-16 text-white font-inter">
      <div className="max-w-[1350px] mx-auto flex flex-col items-center gap-6 sm:gap-8 lg:gap-[30px]">
        {/* Header Section */}
        <header className="max-w-[942px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-[15px] text-center">
          <div className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex items-center justify-center py-1.5 px-num-10">
            <div className="flex items-center gap-[5px]">
              <div className="h-2 w-2 rounded-[50%] bg-limegreen" />
              <div className="tracking-num--0_01 leading-5 font-medium">
                FAQs
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[56px] font-aeonik-pro">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] tracking-num--0_01 leading-relaxed sm:leading-relaxed lg:leading-7 font-inter-variable opacity-[0.6]">
            Everything you need to know before you start closing more deals.
          </p>
        </header>

        {/* FAQ Items */}
        <main className="w-full max-w-[666px] flex flex-col gap-2 sm:gap-3 lg:gap-2.5">
          {/* Expanded FAQ Item */}
          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10">
            <div className="rounded-num-7_5 bg-gray-200 border-gray-1200 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                How accurate is TryFinder&apos;s email verification?
              </h3>
              <CloseIcon />
            </div>
            <div className="flex items-center justify-center p-3 sm:p-4 lg:p-num-12">
              <p className="flex-1 tracking-num--0_01 leading-num-24 font-medium opacity-[0.6] text-sm sm:text-base lg:text-lg">
                98%+ deliverability guaranteed. Every email is triple-verified
                in real-time - we check the format, ping the mail server, and
                validate against our live database. If it&apos;s not
                deliverable, you won&apos;t see it. And if you somehow get a
                bounce? We&apos;ll credit your account instantly.
              </p>
            </div>
          </div>

          {/* Collapsed FAQ Items */}
          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                What happens if I need more than 100 searches per day?
              </h3>
              <PlusIcon />
            </div>
          </div>

          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                Which CRMs do you integrate with?
              </h3>
              <PlusIcon />
            </div>
          </div>

          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                Can I search for contacts at specific companies?
              </h3>
              <PlusIcon />
            </div>
          </div>

          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                What data do you provide beyond email addresses?
              </h3>
              <PlusIcon />
            </div>
          </div>

          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                Can I export my searches to CSV?
              </h3>
              <PlusIcon />
            </div>
          </div>

          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                How do you source and verify contact data?
              </h3>
              <PlusIcon />
            </div>
          </div>

          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col p-4 sm:p-6 lg:p-num-10 min-h-[68px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between p-3 sm:p-4 lg:p-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                Do you have an API for developers?
              </h3>
              <PlusIcon />
            </div>
          </div>

          {/* Contact CTA */}
          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1200 border-solid border flex flex-col items-center justify-center p-4 sm:p-6 lg:p-num-10 min-h-[80px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex items-center justify-between py-3 sm:py-4 lg:py-num-10 px-3 sm:px-4 lg:px-num-12 gap-3 sm:gap-4 lg:gap-5">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-sm sm:text-base lg:text-lg">
                Couldn&apos;t find an answer you&apos;re looking for?
              </h3>
              <button className="rounded-[9px] border-gray-1200 border-solid border flex items-center justify-center py-2 sm:py-3 lg:py-[9px] px-4 sm:px-6 lg:px-[18px] gap-2 sm:gap-3 lg:gap-[11.3px] text-xs sm:text-sm lg:text-[14px] hover:bg-gray-700 transition-colors">
                <span className="tracking-num--0_01 leading-5 font-medium">
                  Contact Us
                </span>
                <ArrowRightSmallIcon />
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
