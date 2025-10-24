import {
  AnonymousIcon,
  ArrowRightIcon,
  HeadphonesIcon,
  SearchIcon,
  SearchInsightIcon,
} from './common/SvgIcon';
import Image from 'next/image';

export default function Hero() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-[706px] text-white font-inter">
      {/* Hero Content Section */}
      <section className="flex-1 flex flex-col items-start gap-6 lg:gap-[25px] text-left text-sm px-4 lg:px-0">
        {/* Launch Offer Badge */}
        <div className="rounded-[15px] bg-gray-1300 border-gray-1200 border-solid border flex items-center justify-center p-2.5 text-gray-500">
          <div className="rounded-[7px] bg-white flex items-center justify-center py-1 px-2">
            <div className="tracking-num--0_01 leading-5 font-medium">
              Launch Offer
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <header className="w-full">
          <h1 className="text-[56px] tracking-[-0.03em] leading-[62px] font-aeonik-pro">
            <p className="m-0">Find prospects in 5 seconds.</p>
            <p className="m-0">Close deals- find contacts.</p>
          </h1>
        </header>

        {/* Description */}
        <div className="w-full max-w-[751px] text-xl tracking-num--0_01 leading-7 opacity-[0.6]">
          <p className="m-0">
            TryFinder uses an advanced algorithm to find prospects more likely
            to be interested in your product—better than LinkedIn.
          </p>
          <p className="m-0">
            Combine that with real-time verified multi-channel contacts.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Better than RocketReach, Pipl, and more, all in one place.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-[535px] rounded-xl bg-gray-100 border-gray-1200 border-solid border box-border flex items-center justify-between py-2.5 px-3 gap-5 text-lg font-inter-variable">
          <div className="flex items-center gap-2.5">
            <SearchIcon />
            <div className="tracking-num--0_01 leading-[26px] font-medium opacity-[0.25]">
              Search for any Business Contact
            </div>
          </div>
          <ArrowRightIcon />
        </div>

        {/* Feature List */}
        <div className="flex flex-wrap items-center gap-[15px] text-base text-gray-1100">
          <div className="flex items-center justify-center gap-2">
            <AnonymousIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              Case-adjusted algorithm
            </div>
          </div>
          <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-[0.5]" />
          <div className="flex items-center justify-center gap-2">
            <HeadphonesIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              24/7 Dedicated Support
            </div>
          </div>
          <div className="h-0.5 w-0.5 rounded-num-50 bg-white opacity-[0.5]" />
          <div className="flex items-center justify-center gap-2">
            <SearchInsightIcon />
            <div className="tracking-num--0_01 leading-6 font-medium">
              High Quality Insights
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <footer className="w-full max-w-[472px] rounded-xl bg-gray-100 border-gray-1200 border-solid border box-border flex items-center justify-center py-2.5 px-3 text-base">
          <div className="flex items-center gap-[13px]">
            <div className="flex items-center">
              <Image
                src="/hero/group-accounts.png"
                alt="Group Accounts"
                width={180}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="tracking-num--0_01 leading-5 font-medium">
              Vouched by 2.5k+ Business Owners
            </div>
          </div>
        </footer>
      </section>

      {/* Hero Image */}
      <section className="flex-1 flex justify-center lg:justify-end">
        <Image
          src="/hero/hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </section>
    </main>
  );
}
