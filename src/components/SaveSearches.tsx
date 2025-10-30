import Image from 'next/image';
import {
  DeleteRedIcon,
  PencilEditIcon,
  SearchCircleIcon,
} from './common/SvgIcon';

export default function SaveSearches() {
  return (
    // Card container for Saved Searches
    <section
      className="w-full rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] box-border flex flex-col items-start p-5 gap-[15px] text-left text-base text-white font-inter"
      style={{ fontSize: '21.6px' }}
    >
      {/* Header: title and subtitle */}
      <header className="self-stretch flex items-center">
        <div className="flex flex-col items-start justify-center gap-0.5">
          <h2 className="tracking-num--0_01 leading-[22px] font-medium text-[16px]">
            Saved Searches
          </h2>
          <p className="text-[14px] tracking-num--0_01 leading-num-20 font-inter-variable opacity-num-0_5">
            List of all your saved searches
          </p>
        </div>
      </header>

      {/* Divider */}
      <hr className="w-full h-[1.3px] opacity-[0.1] bg-gray-10" />

      {/* List of saved search cards (Grid) */}
      <section className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-[15px] text-lg font-inter-variable">
        {/* Card 1 */}
        <article className="rounded-[10.46px] bg-gray-1300 border-gray-1200 border-solid border-[1px] overflow-hidden flex items-center justify-between p-[18px] gap-5">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2.5 font-inter">
              <SearchCircleIcon />
              <div className="tracking-num--0_01 leading-[22.67px] font-medium text-num-17_44">
                Mark Cuban
              </div>
            </div>
            <div className="flex items-center gap-2 text-[14px]">
              <div className="tracking-num--0_01 leading-num-20 opacity-num-0_5">
                5 Contacts
              </div>
              <Image
                className="h-[3.3px] w-[3.3px] opacity-num-0_5"
                src="/file.svg"
                width={3.3}
                height={3.3}
                sizes="100vw"
                alt=""
              />
              <div className="tracking-num--0_01 leading-num-20 opacity-num-0_5">
                0 Filters Applied
              </div>
            </div>
            <div className="flex items-center text-num-12_21">
              <div className="tracking-num--0_01 leading-[17.44px] opacity-num-0_5">
                Saved Oct 29, 2025
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[8.3px]">
            <button className="cursor-pointer bg-gray-500 p-2 rounded-xl transition-all duration-300">
              <PencilEditIcon />
            </button>
            <button className="cursor-pointer bg-gray-500 p-2 rounded-xl transition-all duration-300">
              <DeleteRedIcon />
            </button>
          </div>
        </article>

        {/* Card 2 */}
        <article className="rounded-[10.46px] bg-gray-1300 border-gray-1200 border-solid border-[1px] overflow-hidden flex items-center justify-between p-[18px] gap-5">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2.5 font-inter">
              <SearchCircleIcon />
              <div className="tracking-num--0_01 leading-[22.67px] font-medium text-num-17_44">
                Tim Cook
              </div>
            </div>
            <div className="flex items-center gap-2 text-[14px]">
              <div className="tracking-num--0_01 leading-num-20 opacity-num-0_5">
                5 Contacts
              </div>
              <Image
                className="h-[3.3px] w-[3.3px] opacity-num-0_5"
                src="/file.svg"
                width={3.3}
                height={3.3}
                sizes="100vw"
                alt=""
              />
              <div className="tracking-num--0_01 leading-num-20 opacity-num-0_5">
                0 Filters Applied
              </div>
            </div>
            <div className="flex items-center text-num-12_21">
              <div className="tracking-num--0_01 leading-[17.44px] opacity-num-0_5">
                Saved Oct 29, 2025
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[8.3px]">
            <button className="cursor-pointer bg-gray-500 p-2 rounded-xl transition-all duration-300">
              <PencilEditIcon />
            </button>
            <button className="cursor-pointer bg-gray-500 p-2 rounded-xl transition-all duration-300">
              <DeleteRedIcon />
            </button>
          </div>
        </article>

        {/* Card 3 */}
        <article className="rounded-[10.46px] bg-gray-1300 border-gray-1200 border-solid border-[1px] box-border overflow-hidden flex items-center justify-between p-[18px] gap-5">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2.5 font-inter">
              <SearchCircleIcon />
              <div className="tracking-num--0_01 leading-[22.67px] font-medium text-num-17_44">
                Kevin O’Leary
              </div>
            </div>
            <div className="flex items-center gap-2 text-[14px]">
              <div className="tracking-num--0_01 leading-num-20 opacity-num-0_5">
                5 Contacts
              </div>
              <Image
                className="h-[3.3px] w-[3.3px] opacity-num-0_5"
                src="/file.svg"
                width={3.3}
                height={3.3}
                sizes="100vw"
                alt=""
              />
              <div className="tracking-num--0_01 leading-num-20 opacity-num-0_5">
                0 Filters Applied
              </div>
            </div>
            <div className="flex items-center text-num-12_21">
              <div className="tracking-num--0_01 leading-[17.44px] opacity-num-0_5">
                Saved Oct 29, 2025
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[8.3px]">
            <button className="cursor-pointer bg-gray-500 p-2 rounded-xl transition-all duration-300">
              <PencilEditIcon />
            </button>
            <button className="cursor-pointer bg-gray-500 p-2 rounded-xl transition-all duration-300">
              <DeleteRedIcon />
            </button>
          </div>
        </article>
      </section>
    </section>
  );
}
