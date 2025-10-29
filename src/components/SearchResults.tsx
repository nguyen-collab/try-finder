import Image from 'next/image';
import {
  BuildingIcon,
  FacebookIcon,
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
const PLACEHOLDER_ICON = '/file.svg';
const PLACEHOLDER_LINE = '/window.svg';

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

// Component for rendering individual search result item
function SearchResultItem({
  item,
  index,
}: {
  item: SearchResultItem;
  index: number;
}) {
  return (
    <article className="flex flex-col w-full">
      {/* Divider line */}
      {index > 0 && <hr className="w-full h-[1.3px] opacity-10 bg-gray-1100" />}

      <div className="flex w-full py-4">
        {/* Left column - Checkbox and profile */}
        <div className="flex items-start space-x-4">
          {/* Checkbox */}
          <div className="mt-4 rounded-md bg-gray-200 border-gray-200 border w-4 h-4 shrink-0" />

          {/* Profile info */}
          <div className="flex items-center gap-2 text-[17.44px] font-inter">
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
                <span className="tracking-num--0_01 leading-num-22_67 font-medium">
                  {item.name}
                </span>
                <span className="text-[15.7px] tracking-num--0_01 leading-num-17_44 font-inter-variable opacity-50">
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

        {/* Middle columns - Company and location info */}
        <div className="flex-1 grid grid-cols-2 gap-4 ml-14">
          {/* Company information */}
          <div className="flex flex-col items-start justify-center gap-[3px]">
            <span className="tracking-num--0_01 leading-num-17_44 opacity-50">
              {item.companyName}
            </span>
            <span className="text-[15.7px] font-inter tracking-num--0_01 leading-num-22_67 font-medium">
              {item.companyDisplayName}
            </span>
          </div>

          {/* Location information */}
          <div className="flex flex-col items-start justify-center gap-[3px]">
            <span className="tracking-num--0_01 leading-num-17_44 opacity-50">
              {item.location}
            </span>
            <span className="text-[15.7px] font-inter tracking-num--0_01 leading-num-22_67 font-medium">
              {item.email}
            </span>
          </div>
        </div>

        {/* Right columns - Contact info and actions */}
        <div className="flex ml-12 space-x-6">
          {/* Contact information */}
          <div className="flex flex-col gap-2 text-num-13_95 w-56">
            <div className="flex items-center gap-1">
              <BuildingIcon />
              <span className="tracking-num--0_01 leading-num-17_44">
                {item.email}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MailIcon />
              <span className="tracking-num--0_01 leading-num-17_44">
                {item.personalEmail}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <SmartPhoneIcon />
              <div className="flex items-center gap-2">
                <span className="tracking-num--0_01 leading-num-17_44">
                  {item.phone}
                </span>
                {item.secondaryPhone && (
                  <>
                    <div className="h-[1.7px] w-[1.7px] rounded-full bg-white opacity-50" />
                    <span className="tracking-num--0_01 leading-num-17_44">
                      {item.secondaryPhone}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center gap-[10.5px] text-num-13_95 text-gray-100 w-[180.5px]">
            <div className="w-full h-[34.9px] rounded-[10.46px] [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#fafafa] border-gray-200 border-[0.9px] overflow-hidden flex items-center justify-center p-[10.5px]">
              <span className="tracking-num--0_01 leading-num-20_93 font-semibold">
                {index === 0 ? 'Get Contact Info' : 'View More Details'}
              </span>
            </div>
            <div className="w-full tracking-num--0_01 leading-num-20_93 font-medium text-white text-center opacity-50">
              View More Details
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SearchResults() {
  return (
    <main className="w-full min-h-screen text-num-12_21 text-white font-inter-variable">
      {/* Background decorative elements - converted from absolute positioning */}
      <div className="hidden">
        {/* These were decorative backgrounds with transforms, hidden for now as they need special handling */}
        {/* We could convert these to a background pattern or SVG if needed */}
      </div>

      {/* Header with results count */}
      <header className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-[13.08px]">
          <div className="h-4 w-4 rounded bg-gray-200 border-gray-200 border" />
          <span className="tracking-num--0_01 leading-tight font-medium opacity-75">
            1 - {searchResults.length} of about {searchResults.length} results.
          </span>
        </div>
      </header>

      {/* Main divider */}
      <hr className="w-full h-[1.3px] opacity-10 bg-gray-1100" />

      {/* Results section */}
      <section className="flex flex-col w-full">
        {searchResults.map((item, index) => (
          <SearchResultItem key={index} item={item} index={index} />
        ))}
      </section>

      {/* Footer with end of results message */}
      <footer className="flex justify-center py-4">
        <div className="text-[13.08px] tracking-num--0_01 leading-tight font-medium opacity-75">
          End of Results
        </div>
      </footer>
    </main>
  );
}
