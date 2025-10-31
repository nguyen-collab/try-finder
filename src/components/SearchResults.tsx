import Image from 'next/image';
import { useState } from 'react';
import {
  BackPack02Icon,
  Briefcase02Icon,
  Building02Icon,
  BuildingIcon,
  FacebookWhiteIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  QuoraIcon,
  SmartPhoneIcon,
  TwitterIcon,
} from './common/SvgIcon';

// Placeholder images for demonstration
const PLACEHOLDER_IMAGE = '/images/3.png';

// Simple helpers to mask sensitive values when item is collapsed
function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return email;
  return `${local.slice(0, 2)}***@${domain.slice(0, 2)}**.${domain.split('.').pop()}`;
}

function maskPhone(phone: string): string {
  return phone.replace(/\d/g, (digit, index, str) => {
    // Keep last 4 digits
    return index >= str.length - 4 ? digit : '•';
  });
}

// Define the structure for search result items
type SearchResultItem = {
  name: string;
  position: string;
  companyName: string;
  companyDisplayName: string;
  location: string;
  email: string;
  personalEmail: string;
  phone: string;
  secondaryPhone?: string;
  avatar?: string;
};

// Data for search results
const searchResults: SearchResultItem[] = [
  {
    name: 'Mark Cuban',
    position: 'President',
    companyName: 'Company Name',
    companyDisplayName: 'Cost Plus Drugs',
    location: 'Dallas, TX, USA',
    email: 'mark@costplusdrugs.com',
    personalEmail: 'mcuban@gmail.com',
    phone: '214-621-4426',
    secondaryPhone: '214-621-2184',
    avatar: '/dashboard/avatar-1.png',
  },
  {
    name: 'Elon Musk',
    position: 'CEO',
    companyName: 'Tesla, Inc.',
    companyDisplayName: 'Tesla',
    location: 'Palo Alto, CA, USA',
    email: 'elonmusk@spacex.com',
    personalEmail: 'elon@tesla.com',
    phone: '650-681-5000',
    secondaryPhone: '310-420-0160',
    avatar: '/dashboard/avatar-2.png',
  },
  {
    name: 'Sundar Pichai',
    position: 'CEO',
    companyName: 'Google LLC',
    companyDisplayName: 'Alphabet Inc.',
    location: 'Mountain View, CA, USA',
    email: 'sundar@google.com',
    personalEmail: 'sundar.pichai@gmail.com',
    phone: '650-253-0000',
    secondaryPhone: '650-253-1234',
    avatar: '/dashboard/avatar-3.png',
  },
  {
    name: 'Tim Cook',
    position: 'CEO',
    companyName: 'Apple Inc.',
    companyDisplayName: 'Apple',
    location: 'Cupertino, CA, USA',
    email: 'tim@apple.com',
    personalEmail: 'tcook@icloud.com',
    phone: '408-996-1010',
    secondaryPhone: '408-996-1234',
    avatar: '/dashboard/avatar-4.png',
  },
  {
    name: 'Satya Nadella',
    position: 'CEO',
    companyName: 'Microsoft Corporation',
    companyDisplayName: 'Microsoft',
    location: 'Redmond, WA, USA',
    email: 'satya@microsoft.com',
    personalEmail: 'satyan@microsoft.com',
    phone: '425-882-8080',
    secondaryPhone: '425-882-1234',
    avatar: '/dashboard/avatar-5.png',
  },
];

function DetailItem() {
  return (
    // Details container
    <section className="w-full text-left text-sm text-white font-inter-variable flex flex-col gap-4">
      {/* Top: Two columns */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column: Experience/Education/Skills */}
        <section className="flex flex-col items-start gap-[15px]">
          <h3 className="tracking-num--0_01 leading-num-17_44 opacity-num-0_5">
            Work Experience, Education, Skills
          </h3>
          <div className="flex flex-col items-start gap-3 text-base">
            <div className="flex items-start gap-2">
              <Building02Icon />
              <div className="flex flex-col items-start justify-center gap-[3px]">
                <div className="tracking-num--0_01 leading-num-17_44">
                  President @Dallas Mavericks
                </div>
                <div className="tracking-num--0_01 leading-num-17_44">
                  Founder @Broadcast.com
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BackPack02Icon />
              <div className="flex flex-col items-start justify-center gap-[3px]">
                <div className="tracking-num--0_01 leading-num-17_44">
                  1990 - 1992 Indiana University Bloomington
                </div>
                <div className="tracking-num--0_01 leading-num-17_44">{`1990 - 1992 Texas School `}</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-[21px] h-[21px]">
                <Briefcase02Icon />
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="tracking-num--0_01 leading-num-17_44">
                  Skills - Mergers, IPO, Private Equity, Investment Banking,
                  Equities, Restructuring, Valuation, Capital Markets, Financial
                  Modeling, Financial Structuring, Corporate Finance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right column: Other Contact Information */}
        {/* <section className="flex flex-col items-start gap-[15px] ml-48">
          <h3 className="tracking-num--0_01 leading-num-17_44 opacity-num-0_5">
            Other Contact Information
          </h3>
          <div className="flex flex-col items-start gap-[8.7px] text-sm">
            <div className="flex items-center gap-[3.5px]">
              <BuildingIcon />
              <div className="tracking-num--0_01 leading-num-17_44">
                mark@dallasmavs.com
              </div>
            </div>
            <div className="flex items-center gap-[3.5px]">
              <MailIcon />
              <div className="tracking-num--0_01 leading-num-17_44">
                president@dallasmavs.com
              </div>
            </div>
            <div className="flex items-center gap-[3.5px]">
              <SmartPhoneIcon />
              <div className="flex items-center gap-[8.7px]">
                <div className="tracking-num--0_01 leading-num-17_44">
                  114-442-4411
                </div>
                <div className="h-[1.7px] w-[1.7px] rounded-[50%] bg-white opacity-num-0_5" />
                <div className="tracking-num--0_01 leading-num-17_44">
                  214-783-1236
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>

      {/* Bottom: Companies row */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-[15px] text-lg font-inter">
        <div className="h-[76px] rounded-[10.46px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border flex flex-col items-start py-3.5 px-[21px]">
          <div className="flex items-center gap-[15px]">
            <Image
              className="w-[48.4px] max-h-full object-cover"
              src={'/dashboard/detail-1.png'}
              width={48.4}
              height={48.3}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start justify-center">
              <div className="tracking-num--0_01 leading-[22.67px] font-medium">
                Dallas Mavericks
              </div>
              <div className="text-sm tracking-num--0_01 leading-num-17_44 font-inter-variable opacity-num-0_5">
                President
              </div>
            </div>
          </div>
        </div>
        <div className="h-[76px] rounded-[10.46px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border flex flex-col items-start py-3.5 px-[21px]">
          <div className="flex items-center gap-[15px]">
            <Image
              className="h-12 w-[89px] object-cover"
              src={'/dashboard/detail-2.png'}
              width={89}
              height={48}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start justify-center">
              <div className="tracking-num--0_01 leading-[22.67px] font-medium">
                Axs.tv
              </div>
              <div className="text-sm tracking-num--0_01 leading-num-17_44 font-inter-variable opacity-num-0_5">
                Investor
              </div>
            </div>
          </div>
        </div>
        <div className="h-[76px] rounded-[10.46px] bg-gray-200 border-gray-100 border-solid border-[1px] box-border flex flex-col items-start py-3.5 px-[21px]">
          <div className="flex items-center gap-[15px]">
            <Image
              className="h-12 w-[109px] object-cover"
              src={'/dashboard/detail-3.png'}
              width={109}
              height={48}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start justify-center">
              <div className="tracking-num--0_01 leading-[22.67px] font-medium">
                CostPlus Drug Company
              </div>
              <div className="text-sm tracking-num--0_01 leading-num-17_44 font-inter-variable opacity-num-0_5">
                Equity Owner
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

// Component for rendering individual search result item
function SearchResultItem({
  item,
  index,
  checked,
  onChange,
  isExpanded,
  isLoading,
  onRequestToggle,
}: {
  item: SearchResultItem;
  index: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
  isExpanded: boolean;
  isLoading: boolean;
  onRequestToggle: () => void;
}) {
  return (
    <article
      className={`flex flex-col w-full ${index % 2 === 0 ? '' : 'bg-white/5'}`}
    >
      {/* Divider line */}
      {index > 0 && <hr className="w-full h-[1.3px] opacity-10 bg-gray-1100" />}

      <div className="grid w-full items-center py-4 px-4 gap-x-6 md:gap-x-8 grid-cols-[minmax(260px,1fr)_180px_240px_256px_180.5px]">
        {/* Left column - Checkbox and profile */}
        <div className="flex items-center space-x-4">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={checked}
            onChange={e => onChange(e.target.checked)}
            className="h-num-15.7 w-[15.7px] rounded-num-4.91 bg-gray-1300 border-gray-1300 rounded-sm border-solid border appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 checked:bg-gray-1300 checked:border-gray-1300 transition-all duration-200 shrink-0"
            aria-label={`Select row ${item.name}`}
          />

          {/* Profile info */}
          <div className="flex items-center gap-2 text-lg font-inter">
            <Image
              className="w-12 h-12 rounded-lg object-cover"
              src={item.avatar || PLACEHOLDER_IMAGE}
              width={48}
              height={48}
              sizes="100vw"
              alt={`${item.name} profile`}
            />
            <div className="flex flex-col items-start justify-center gap-[3px]">
              <div className="flex items-center gap-2">
                <span className="tracking-num--0_01 leading-num-22_67 font-medium whitespace-nowrap truncate text-xl">
                  {item.name}
                </span>
                <span className="text-base tracking-num--0_01 leading-num-17_44 font-inter-variable opacity-50 whitespace-nowrap truncate">
                  {item.position}
                </span>
              </div>
              <div className="flex items-center gap-[5.5px]">
                {/* Rating stars - rendering 6 stars for each */}
                <InstagramIcon />
                <LinkedinIcon />
                <FacebookWhiteIcon />
                <QuoraIcon />
                <GmailIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Company information */}
        <div className="overflow-hidden flex flex-col items-start justify-center gap-[3px] text-left">
          <span className="block tracking-num--0_01 leading-num-17_44 opacity-50 whitespace-nowrap truncate text-sm">
            {item.companyName}
          </span>
          <span className="block text-base font-inter tracking-num--0_01 leading-num-22_67 font-medium whitespace-nowrap truncate">
            {item.companyDisplayName}
          </span>
        </div>

        {/* Location information */}
        <div className="overflow-hidden flex flex-col items-start justify-center gap-[3px] text-left">
          <span className="block tracking-num--0_01 leading-num-17_44 opacity-50 whitespace-nowrap truncate text-sm">
            {item.location}
          </span>
          <span className="block text-base font-inter tracking-num--0_01 leading-num-22_67 font-medium whitespace-nowrap truncate">
            {isExpanded ? item.email : maskEmail(item.email)}
          </span>
        </div>

        {/* Contact information (Grid column 4) */}
        <div className="flex flex-col gap-2 text-sm w-56">
          <div className="flex items-center gap-1">
            <BuildingIcon />
            <span className="tracking-num--0_01 leading-num-17_44 whitespace-nowrap truncate">
              {isExpanded ? item.email : maskEmail(item.email)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MailIcon />
            <span className="tracking-num--0_01 leading-num-17_44 whitespace-nowrap truncate">
              {isExpanded ? item.personalEmail : maskEmail(item.personalEmail)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[18px] h-[18px]">
              <SmartPhoneIcon />
            </div>
            <div className="flex items-center gap-2">
              <span className="tracking-num--0_01 leading-num-17_44 whitespace-nowrap truncate flex items-center gap-1">
                {isExpanded ? item.phone : maskPhone(item.phone)}
                <div className="h-[1.7px] w-[1.7px] rounded-full bg-white opacity-50" />
                {isExpanded
                  ? item.secondaryPhone
                  : item.secondaryPhone
                    ? maskPhone(item.secondaryPhone)
                    : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons (Grid column 5) */}
        <div className="flex flex-col items-center justify-center gap-[10.5px] text-base text-gray-100 w-[140.5px]">
          <button
            type="button"
            onClick={onRequestToggle}
            disabled={isLoading}
            className={`w-full h-[34.9px] rounded-[10.46px] border-gray-200 border-[0.9px] overflow-hidden flex items-center justify-center p-[10.5px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${isExpanded ? 'bg-gray-500 text-white border-gray-1300' : '[background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#fafafa]'}`}
            aria-expanded={isExpanded}
            aria-controls={`result-details-${index}`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                <span className="tracking-num--0_01 leading-num-20_93 font-semibold whitespace-nowrap">
                  Loading...
                </span>
              </span>
            ) : (
              <span className="tracking-num--0_01 leading-num-20_93 font-semibold whitespace-nowrap">
                {isExpanded ? 'Hide Details' : 'Get Contact Info'}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Expanded details with simple transition */}
      {isExpanded && (
        <div
          id={`result-details-${index}`}
          className="w-full px-4 pb-4 animate-in slide-in-from-top-2 fade-in duration-200"
          aria-hidden={!isExpanded}
        >
          <DetailItem />
        </div>
      )}
    </article>
  );
}

export default function SearchResults() {
  const [selected, setSelected] = useState<number[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const allChecked =
    selected.length === searchResults.length && searchResults.length > 0;
  const indeterminate =
    selected.length > 0 && selected.length < searchResults.length;

  function handleSelectAll(checked: boolean) {
    setSelected(checked ? searchResults.map((_, idx) => idx) : []);
  }
  function handleSelectRow(idx: number, checked: boolean) {
    setSelected(prev => {
      if (checked) {
        return prev.includes(idx) ? prev : [...prev, idx];
      } else {
        return prev.filter(i => i !== idx);
      }
    });
  }

  function handleRequestToggle(idx: number) {
    const isCurrentlyExpanded = expandedIndex === idx;
    if (isCurrentlyExpanded) {
      // Collapse immediately
      setExpandedIndex(null);
      return;
    }
    if (loadingIndex !== null) return;
    setLoadingIndex(idx);
    setTimeout(() => {
      setExpandedIndex(idx);
      setLoadingIndex(null);
    }, 2000);
  }

  return (
    <>
      <main className="w-full overflow-x-hidden text-xs text-white font-inter-variable">
        {/* Background decorative elements - converted from absolute positioning */}
        <div className="hidden">
          {/* These were decorative backgrounds with transforms, hidden for now as they need special handling */}
          {/* We could convert these to a background pattern or SVG if needed */}
        </div>

        {/* Header with results count */}
        <div className="px-4 overflow-x-auto scrollbar-none">
          <header className="flex items-center justify-between py-4 min-w-[1200px]">
            <div className="flex items-center gap-2 text-base">
              <input
                type="checkbox"
                checked={allChecked}
                ref={el => {
                  if (el) el.indeterminate = indeterminate;
                }}
                onChange={e => handleSelectAll(e.target.checked)}
                className="h-num-15.7 w-[15.7px] rounded-num-4.91 bg-gray-1300 border-gray-1300 rounded-md border-solid border appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 checked:bg-gray-1300 checked:border-gray-1300 transition-all duration-200"
                aria-label="Select all results"
              />
              <span className="tracking-num--0_01 leading-tight font-medium opacity-75">
                1 - {searchResults.length} of about {searchResults.length}{' '}
                results. Selected: {selected.length}
              </span>
            </div>
          </header>
        </div>

        {/* Main divider */}
        <hr className="w-full h-[1.3px] opacity-10 bg-gray-1100" />

        {/* Results section with horizontal scroll on small screens */}
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <section className="flex flex-col min-w-[1200px]">
            {searchResults.map((item, index) => (
              <SearchResultItem
                key={index}
                item={item}
                index={index}
                checked={selected.includes(index)}
                onChange={checked => handleSelectRow(index, checked)}
                isExpanded={expandedIndex === index}
                isLoading={loadingIndex === index}
                onRequestToggle={() => handleRequestToggle(index)}
              />
            ))}
          </section>
        </div>

        <hr className="w-full h-[1.3px] opacity-10 bg-gray-1100" />

        {/* Footer with end of results message */}
      </main>

      <div className="px-4 overflow-x-auto scrollbar-none w-full">
        <footer className="flex justify-center py-4 w-full">
          <div className="text-sm tracking-num--0_01 leading-tight font-medium opacity-75 w-full">
            End of Results
          </div>
        </footer>
      </div>
    </>
  );
}
