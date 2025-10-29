'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  AISearchIcon,
  CancelIcon,
  DropdownIcon,
  IconArrowCornerDropRight,
  PlusIcon,
  UserCircleIcon,
} from './common/SvgIcon';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <main className="w-full min-h-screen bg-gray-500 text-white font-inter-variable text-[13.08px]">
      {/* Main Content Area */}
      <section className="w-full flex flex-col lg:flex-row px-6 gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-[300.8px] flex flex-col items-start gap-[15.3px] text-num-10.46 text-gray-10">
          {/* Applied Filters */}
          <div className="w-full h-[92.7px] rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px]">
            <div className="w-full flex flex-col items-start gap-[10.5px]">
              <div className="w-full flex items-center justify-between gap-5">
                <h3 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  APPLIED FILTERS
                </h3>
                <button className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  CLEAR ALL
                </button>
              </div>
              <hr className="w-full h-[0.9px] opacity-[0.1] bg-gray-10" />
              <div className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-[12.21px] text-white font-inter">
                <UserCircleIcon />
                <span className="tracking-num--0_01 leading-num-13.95">
                  <span className="font-medium">{`Name : `}</span>
                  <strong>Mark Cuban</strong>
                </span>
                <button>
                  <CancelIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="w-full space-y-[15.3px]">
            {/* Name Filter */}
            <div className="w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px]">
              <div className="w-full flex items-center justify-between gap-5">
                <h4 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  NAME
                </h4>
                <button>
                  <DropdownIcon />
                </button>
              </div>
            </div>

            {/* Location Filter */}
            <div className="w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px]">
              <div className="w-full flex items-center justify-between gap-5">
                <h4 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  LOCATION
                </h4>
                <button>
                  <DropdownIcon />
                </button>
              </div>
            </div>

            {/* Contact Method Filter */}
            <div className="w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px]">
              <div className="w-full flex items-center justify-between gap-5">
                <h4 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  CONTACT METHOD
                </h4>
                <button>
                  <DropdownIcon />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Results Area */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[15px] text-center text-[15px] min-h-[500px]">
          {/* Search Section */}
          <section className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col lg:flex-row items-end gap-4">
              {/* Main Search Input */}
              <div className="flex-1 flex flex-col items-start gap-[13.1px] w-full">
                <label className="w-full tracking-num--0_01 text-left leading-[13.08px] font-medium opacity-num-0.75">
                  Search for any business contact
                </label>
                <div className="w-full rounded-[10.46px] bg-[#151515] border-gray-1500 border-solid border-[0.9px] flex items-center justify-between py-[8.7px] px-[10.5px] gap-5 text-[14.17px] focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
                  <div className="flex items-center gap-[8.7px] flex-1">
                    <AISearchIcon />
                    <input
                      type="text"
                      placeholder="e.g. LinkedIn URL, Job Title, Industry, Revenue, Number of Employees, Years of Experience, etc."
                      className="flex-1 bg-transparent tracking-num--0_01 leading-[19.62px] text-white placeholder:text-gray-10 placeholder:opacity-[0.4] focus:outline-none"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      onKeyPress={e => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="opacity-num-0.75 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <IconArrowCornerDropRight />
                  </button>
                </div>
              </div>

              {/* Tag Filter */}
              <div className="w-full lg:max-w-[250px] rounded-[10.46px] bg-[#151515] border-gray-1500 border-solid border-[0.9px] flex items-center justify-between py-[8.7px] px-[10.5px] gap-5 text-[14.17px]">
                <div className="flex items-center">
                  <span className="tracking-num--0_01 leading-[19.62px] opacity-[0.4]">
                    No Active Tag
                  </span>
                </div>
                <div className="flex items-center gap-[10.5px]">
                  <DropdownIcon />
                  <div className="h-[20.9px] w-[1.3px] opacity-[0.25] bg-gray-10" />
                  <PlusIcon />
                </div>
              </div>
            </div>
          </section>
          <div className="flex-1 flex flex-col items-center justify-center gap-[15px] text-center text-[15px] min-h-[500px]">
            <Image
              src="/dashboard/social-02.png"
              className="w-[204px] h-[204px]"
              width={204}
              height={204}
              sizes="100vw"
              alt="Dashboard illustration showing search functionality"
            />

            <div className="w-full max-w-md flex flex-col items-center gap-[5px]">
              <h2 className="w-full tracking-[-0.02em] leading-[22px] font-medium">
                Start Searching
              </h2>
              <p className="w-full text-[14px] tracking-num--0_01 leading-5 opacity-[0.5]">
                Let&apos;s start with your first business search
              </p>
            </div>

            {/* Usage Statistics */}
            <div className="w-full max-w-md flex flex-col items-center gap-2.5 text-center text-[14px] font-inter">
              <p className="tracking-num--0_01 leading-4 font-medium opacity-num-0.75">
                1 of 2 Searches Remaining
              </p>
              <div className="w-full flex items-center gap-[5px]">
                <div className="h-[5px] w-[152px] rounded-[10px] bg-white" />
                <div className="h-[5px] flex-1 rounded-[10px] bg-white opacity-[0.1]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
