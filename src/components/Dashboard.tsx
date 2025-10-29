'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  AISearchIcon,
  ArrowRightSmallIcon,
  ArrowRightSmallWhiteIcon,
  CancelIcon,
  DropdownIcon,
  IconArrowCornerDropRight,
  LocationIcon,
  PlusIcon,
  PreferenceHorizontalIcon,
  UserCircleIcon,
} from './common/SvgIcon';
import SearchResults from './SearchResults';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNameFilterOpen, setIsNameFilterOpen] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [isLocationFilterOpen, setIsLocationFilterOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedLocationOptions, setSelectedLocationOptions] = useState<
    string[]
  >([]);
  const [radius, setRadius] = useState(0);
  const [isContactMethodFilterOpen, setIsContactMethodFilterOpen] =
    useState(false);
  const [contactMethodLogic, setContactMethodLogic] = useState<'or' | 'and'>(
    'or'
  );
  const [selectedContactMethods, setSelectedContactMethods] = useState<
    string[]
  >([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    console.log('Searching for:', searchQuery);
  };

  const handleNameFilterToggle = () => {
    setIsNameFilterOpen(!isNameFilterOpen);
  };

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  const handleLocationFilterToggle = () => {
    setIsLocationFilterOpen(!isLocationFilterOpen);
  };

  const handleLocationFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocationFilter(e.target.value);
  };

  const handleLocationOptionToggle = (option: string) => {
    setSelectedLocationOptions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(parseInt(e.target.value));
  };

  const handleContactMethodFilterToggle = () => {
    setIsContactMethodFilterOpen(!isContactMethodFilterOpen);
  };

  const handleClearAllFilters = () => {
    setNameFilter('');
    setLocationFilter('');
    setSelectedLocationOptions([]);
    setRadius(0);
    setSelectedContactMethods([]);
    setContactMethodLogic('or');
    console.log('All filters cleared');
  };

  const handleContactMethodLogicToggle = () => {
    setContactMethodLogic(prev => (prev === 'or' ? 'and' : 'or'));
  };

  const handleContactMethodToggle = (method: string) => {
    setSelectedContactMethods(prev =>
      prev.includes(method)
        ? prev.filter(item => item !== method)
        : [...prev, method]
    );
  };

  // Check if any filters are applied
  const hasAppliedFilters =
    nameFilter ||
    locationFilter ||
    selectedLocationOptions.length > 0 ||
    radius > 0 ||
    selectedContactMethods.length > 0;

  const searchResults = () => {
    if (!isSearching) {
      return (
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
      );
    }

    // Search Results Section
    return <SearchResults />;
  };

  return (
    <main className="w-full min-h-screen bg-gray-500 text-white font-inter-variable text-[13.08px] overflow-x-hidden">
      {/* Main Content Area */}
      <section className="w-full flex flex-col lg:flex-row px-6 gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-[300.8px] flex flex-col items-start gap-[15.3px] text-num-10.46 text-gray-10">
          {/* Applied Filters */}
          <div
            className={`w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px] transition-all duration-300 ${
              hasAppliedFilters ? 'min-h-[92.7px]' : 'h-[47px]'
            }`}
          >
            <div className="w-full flex flex-col items-start gap-[10.5px]">
              <div className="w-full flex items-center justify-between gap-5">
                <h3 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  APPLIED FILTERS
                </h3>
                <button
                  onClick={handleClearAllFilters}
                  className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75 hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  CLEAR ALL
                </button>
              </div>

              {/* Only show horizontal bar when filters are applied */}
              {hasAppliedFilters && (
                <hr className="w-full h-[0.9px] opacity-[0.1] bg-gray-10" />
              )}

              <div className="w-full flex items-start flex-col gap-[5.2px]">
                {/* Name Filter Applied */}
                {nameFilter && (
                  <div className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-[12.21px] text-white font-inter transition-all duration-300">
                    <UserCircleIcon />
                    <span className="tracking-num--0_01 leading-num-13.95">
                      <span className="font-medium">{`Name : `}</span>
                      <strong>{nameFilter}</strong>
                    </span>
                    <button
                      onClick={() => setNameFilter('')}
                      className="opacity-num-0.5 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <CancelIcon />
                    </button>
                  </div>
                )}

                {/* Location Filter Applied */}
                {locationFilter && (
                  <div className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-[12.21px] text-white font-inter transition-all duration-300">
                    <UserCircleIcon />
                    <span className="tracking-num--0_01 leading-num-13.95">
                      <span className="font-medium">{`Location : `}</span>
                      <strong>{locationFilter}</strong>
                    </span>
                    <button
                      onClick={() => setLocationFilter('')}
                      className="opacity-num-0.5 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <CancelIcon />
                    </button>
                  </div>
                )}

                {/* Location Options Applied */}
                {selectedLocationOptions.length > 0 && (
                  <div className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-[12.21px] text-white font-inter transition-all duration-300">
                    <UserCircleIcon />
                    <span className="tracking-num--0_01 leading-num-13.95">
                      <span className="font-medium">{`Location Options : `}</span>
                      <strong>{selectedLocationOptions.length} selected</strong>
                    </span>
                    <button
                      onClick={() => setSelectedLocationOptions([])}
                      className="opacity-num-0.5 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <CancelIcon />
                    </button>
                  </div>
                )}

                {/* Radius Applied */}
                {radius > 0 && (
                  <div className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-[12.21px] text-white font-inter transition-all duration-300">
                    <UserCircleIcon />
                    <span className="tracking-num--0_01 leading-num-13.95">
                      <span className="font-medium">{`Radius : `}</span>
                      <strong>{radius} km</strong>
                    </span>
                    <button
                      onClick={() => setRadius(0)}
                      className="opacity-num-0.5 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <CancelIcon />
                    </button>
                  </div>
                )}

                {/* Contact Methods Applied */}
                {selectedContactMethods.length > 0 && (
                  <div className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-[12.21px] text-white font-inter transition-all duration-300">
                    <UserCircleIcon />
                    <span className="tracking-num--0_01 leading-num-13.95">
                      <span className="font-medium">{`Contact Methods (${contactMethodLogic.toUpperCase()}) : `}</span>
                      <strong>{selectedContactMethods.length} selected</strong>
                    </span>
                    <button
                      onClick={() => setSelectedContactMethods([])}
                      className="opacity-num-0.5 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <CancelIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="w-full space-y-[15.3px]">
            {/* Name Filter */}
            <div className="w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px] transition-all duration-300">
              <div className="w-full flex items-center justify-between gap-5">
                <h4 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  NAME
                </h4>
                <button
                  onClick={handleNameFilterToggle}
                  className="cursor-pointer"
                >
                  <div
                    className={`transition-transform duration-300 ${isNameFilterOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <DropdownIcon />
                  </div>
                </button>
              </div>

              {/* Name Filter Input - Expanded State */}
              <div
                className={`w-full transition-all duration-300 ease-in-out ${
                  isNameFilterOpen
                    ? 'overflow-visible max-h-[100px] opacity-100 mt-[8.7px]'
                    : 'overflow-hidden max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="w-full rounded-[10.46px] bg-gray-500 border-gray-1300 border-solid border-[0.9px] flex items-center justify-between p-[10.5px] gap-5 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
                  <div className="flex items-center gap-[7px] flex-1">
                    <UserCircleIcon />
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="flex-1 bg-transparent tracking-num--0_01 leading-[17.44px] text-white placeholder:text-gray-10 placeholder:opacity-num-0.5 focus:outline-none"
                      value={nameFilter}
                      onChange={handleNameFilterChange}
                    />
                  </div>
                  <button className="opacity-num-0.75 hover:opacity-100 transition-opacity cursor-pointer">
                    <PreferenceHorizontalIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Location Filter */}
            <div className="w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px] transition-all duration-300">
              <div className="w-full flex items-center justify-between gap-5">
                <h4 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  LOCATION
                </h4>
                <button
                  onClick={handleLocationFilterToggle}
                  className="cursor-pointer"
                >
                  <div
                    className={`transition-transform duration-300 ${isLocationFilterOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <DropdownIcon />
                  </div>
                </button>
              </div>

              {/* Location Filter Content - Expanded State */}
              <div
                className={`w-full transition-all duration-300 ease-in-out ${
                  isLocationFilterOpen
                    ? 'overflow-visible max-h-[500px] opacity-100 mt-[8.7px]'
                    : 'overflow-hidden max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="w-full space-y-[20.9px]">
                  {/* Location Input */}
                  <div className="w-full rounded-[10.46px] bg-gray-500 border-gray-1300 border-solid border-[0.9px] flex items-center justify-between p-[10.5px] gap-5 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
                    <div className="flex items-center gap-[7px] flex-1">
                      <LocationIcon />
                      <input
                        type="text"
                        placeholder="Enter Location"
                        className="flex-1 bg-transparent tracking-num--0_01 leading-[17.44px] text-white placeholder:text-gray-10 placeholder:opacity-num-0.5 focus:outline-none"
                        value={locationFilter}
                        onChange={handleLocationFilterChange}
                      />
                    </div>
                    <button className="opacity-num-0.75 hover:opacity-100 transition-opacity cursor-pointer">
                      <PreferenceHorizontalIcon />
                    </button>
                  </div>

                  {/* Location Options */}
                  <div className="w-full space-y-[10.5px]">
                    {[
                      { id: 'states', label: 'States (56)', country: 'US' },
                      {
                        id: 'metro-areas',
                        label: 'Metro Areas (217)',
                        country: 'US',
                      },
                      {
                        id: 'provinces',
                        label: 'Provinces (13)',
                        country: 'US',
                      },
                      {
                        id: 'metro-area-34',
                        label: 'Metro Area (34)',
                        country: 'US',
                      },
                      { id: 'africa', label: 'Africa (52)', country: '' },
                    ].map(option => (
                      <div
                        key={option.id}
                        className="w-full rounded-num-6.98 flex items-center justify-between gap-5"
                      >
                        <div className="flex items-center gap-[8.7px]">
                          <ArrowRightSmallWhiteIcon />
                          <div className="flex items-center gap-[10.5px]">
                            <input
                              type="checkbox"
                              checked={selectedLocationOptions.includes(
                                option.id
                              )}
                              onChange={() =>
                                handleLocationOptionToggle(option.id)
                              }
                              className="h-num-15.7 w-[15.7px] rounded-num-4.91 bg-gray-1300 border-gray-1300 rounded-sm border-solid border appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 checked:bg-gray-1300 checked:border-gray-1300 transition-all duration-200"
                            />
                            <div className="flex items-center gap-[5.2px]">
                              {option.country && (
                                <>
                                  <div className="tracking-num--0_01 leading-[17.44px] font-medium">
                                    {option.country}
                                  </div>
                                  <div className="opacity-num-0.75 px-1">
                                    <ArrowRightSmallIcon />
                                  </div>
                                </>
                              )}
                              <div className="tracking-num--0_01 leading-[17.44px] font-medium">
                                {option.label}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="opacity-num-0.75 hover:opacity-100 transition-opacity cursor-pointer">
                          <PreferenceHorizontalIcon />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Radius Slider */}
                  <div className="w-full space-y-[8.7px]">
                    <div className="tracking-num--0_01 leading-[13.08px] font-medium opacity-num-0.75">
                      Radius (km)
                    </div>
                    <div className="w-full h-[30.5px] relative">
                      <div className="absolute top-[2.29px] left-[7.19px] w-[251.8px] h-[1.3px] bg-gray-10 opacity-[0.1]" />
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="40"
                        value={radius}
                        onChange={handleRadiusChange}
                        className="absolute top-[0.11px] left-[-0.44px] w-[259.4px] h-[30.5px] opacity-0 cursor-pointer"
                      />
                      <div className="absolute top-[0.11px] left-[-0.44px] w-[259.4px] flex items-end justify-between gap-5 pointer-events-none">
                        {[0, 40, 80, 120, 160, 200].map(value => (
                          <div
                            key={value}
                            className="flex flex-col items-center gap-[5.2px]"
                          >
                            <div
                              className={`w-[5.2px] h-[5.2px] rounded-num-50 ${
                                radius >= value ? 'bg-white' : 'bg-dimgray'
                              }`}
                            />
                            <div className="tracking-num--0_01 leading-[17.44px]">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Method Filter */}
            <div className="w-full rounded-num-13.08 bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15.7px] transition-all duration-300">
              <div className="w-full flex items-center justify-between gap-5">
                <h4 className="tracking-num--0_01 leading-num-13.95 font-semibold opacity-num-0.75">
                  CONTACT METHOD
                </h4>
                <button
                  onClick={handleContactMethodFilterToggle}
                  className="cursor-pointer"
                >
                  <div
                    className={`transition-transform duration-300 ${isContactMethodFilterOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <DropdownIcon />
                  </div>
                </button>
              </div>

              {/* Contact Method Filter Content - Expanded State */}
              <div
                className={`w-full transition-all duration-300 ease-in-out ${
                  isContactMethodFilterOpen
                    ? 'overflow-visible max-h-[300px] opacity-100 mt-[8.7px]'
                    : 'overflow-hidden max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="w-full space-y-3.5">
                  {/* Or/And Logic Toggle */}
                  <div className="w-full flex items-start gap-[8.7px]">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <button
                        onClick={handleContactMethodLogicToggle}
                        className={`w-full rounded-[10.46px] border-solid border-[0.9px] overflow-hidden flex items-center justify-center py-[7px] px-[10.5px] transition-all duration-200 cursor-pointer ${
                          contactMethodLogic === 'or'
                            ? '[background:linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05)),#0f0f0f] border-gray-1600'
                            : 'bg-gray-500 border-gray-1300'
                        }`}
                      >
                        <div className="tracking-num--0_01 leading-[17.44px]">
                          Or
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-start">
                      <button
                        onClick={handleContactMethodLogicToggle}
                        className={`w-full rounded-[10.46px] border-solid border-[0.9px] flex items-center justify-center py-[7px] px-[10.5px] transition-all duration-200 cursor-pointer ${
                          contactMethodLogic === 'and'
                            ? '[background:linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05)),#0f0f0f] border-gray-1600'
                            : 'bg-gray-500 border-gray-1300'
                        }`}
                      >
                        <div className="tracking-num--0_01 leading-[17.44px]">
                          And
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Contact Method Options */}
                  <div className="w-full space-y-[10.5px]">
                    {[
                      { id: 'mobile', label: 'Mobile' },
                      { id: 'phone', label: 'Phone' },
                      { id: 'personal-email', label: 'Personal Email' },
                      { id: 'work-email', label: 'Work Email' },
                    ].map(option => (
                      <div
                        key={option.id}
                        className="w-full rounded-num-6.98 flex items-center"
                      >
                        <div className="flex items-center">
                          <div className="flex items-center gap-[10.5px]">
                            <input
                              type="checkbox"
                              checked={selectedContactMethods.includes(
                                option.id
                              )}
                              onChange={() =>
                                handleContactMethodToggle(option.id)
                              }
                              className="h-num-15.7 w-[15.7px] rounded-[4.91px] bg-gray-1300 border-gray-1300 border-solid border appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 checked:bg-gray-1300 checked:border-gray-1300 transition-all duration-200"
                            />
                            <div className="flex items-center">
                              <div className="tracking-num--0_01 leading-[17.44px] font-medium">
                                {option.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Results Area */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[15px] text-center text-[15px] min-h-[500px] overflow-x-hidden w-full">
          {/* Search Section */}
          <section className="w-full flex flex-col items-center gap-4 px-1">
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

          {/* Results data Section */}
          {searchResults()}
        </div>
      </section>
    </main>
  );
}
