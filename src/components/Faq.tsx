'use client';

import { useState } from 'react';
import { ArrowRightSmallIcon, CloseIcon, PlusIcon } from './common/SvgIcon';

export default function Faq() {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]); // First item expanded by default

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How accurate is TryFinder's email verification?",
      answer:
        "98%+ deliverability guaranteed. Every email is triple-verified in real-time - we check the format, ping the mail server, and validate against our live database. If it's not deliverable, you won't see it. And if you somehow get a bounce? We'll credit your account instantly.",
    },
    {
      question: 'What happens if I need more than 100 searches per day?',
      answer:
        'You can upgrade to our Pro plan for unlimited searches, or purchase additional search credits as needed. Contact our support team to discuss enterprise solutions for high-volume usage.',
    },
    {
      question: 'Which CRMs do you integrate with?',
      answer:
        'We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, Zoho, and more. Our API also allows custom integrations with any CRM that supports webhooks.',
    },
    {
      question: 'Can I search for contacts at specific companies?',
      answer:
        'Yes! You can search by company name, domain, industry, company size, and location. Our advanced filters help you find exactly the contacts you need at your target companies.',
    },
    {
      question: 'What data do you provide beyond email addresses?',
      answer:
        'We provide comprehensive contact data including phone numbers, social media profiles, job titles, company information, and verified email addresses. All data is verified and up-to-date.',
    },
    {
      question: 'Can I export my searches to CSV?',
      answer:
        'Absolutely! You can export all your search results to CSV format with one click. The export includes all contact information and can be imported directly into your CRM.',
    },
    {
      question: 'How do you source and verify contact data?',
      answer:
        'We use multiple data sources including public records, social media, professional networks, and proprietary databases. All data is verified through our multi-step validation process to ensure accuracy.',
    },
    {
      question: 'Do you have an API for developers?',
      answer:
        "Yes! We provide a comprehensive REST API that allows developers to integrate TryFinder's capabilities directly into their applications. Documentation and SDKs are available for popular programming languages.",
    },
  ];
  return (
    <section className="w-full bg-gray-200 border-gray-1000 border-solid border-t border-b text-left text-num-16 text-white font-inter">
      <div className="max-w-[1350px] mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[30px]">
        {/* Header Section */}
        <header className="max-w-[942px] flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-[15px] text-center">
          <div className="rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex items-center justify-center py-1.5 px-3 sm:px-4 md:px-num-10">
            <div className="flex items-center gap-[5px]">
              <div className="h-2 w-2 rounded-[50%] bg-limegreen" />
              <div className="tracking-num--0_01 leading-5 font-medium text-xs sm:text-sm md:text-base">
                FAQs
              </div>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[56px] font-aeonik-pro px-4">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-[20px] tracking-num--0_01 leading-relaxed sm:leading-relaxed lg:leading-7 font-inter-variable opacity-[0.6] px-4">
            Everything you need to know before you start closing more deals.
          </p>
        </header>

        {/* FAQ Items */}
        <main className="w-full max-w-[666px] flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-2.5">
          {faqData.map((faq, index) => {
            const isExpanded = expandedItems.includes(index);
            return (
              <div
                key={index}
                className={`shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col lg:p-num-10 transition-all duration-300 ease-in-out ${isExpanded ? 'p-2' : ''}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`rounded-num-7_5 flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-num-12 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full text-left transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? 'bg-gray-200 hover:bg-gray-300 border-gray-1300 border-solid border'
                      : 'bg-gray-800 hover:bg-gray-700 border-transparent border-solid border'
                  }`}
                >
                  <h3 className="tracking-num--0_01 leading-num-24 font-medium text-xs sm:text-sm md:text-base lg:text-lg flex-1 pr-2">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 transition-transform duration-300 ease-in-out">
                    {isExpanded ? <CloseIcon /> : <PlusIcon />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-num-12">
                    <p className="flex-1 tracking-num--0_01 leading-num-24 font-medium opacity-[0.6] text-xs sm:text-sm md:text-base lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Contact CTA */}
          <div className="shadow-[0px_1px_2px_rgba(10,_10,_10,_0.05)] rounded-num-15 bg-gray-500 border-gray-1300 border-solid border flex flex-col items-center justify-center lg:p-num-10 min-h-[70px] sm:min-h-[80px]">
            <div className="rounded-num-7_5 bg-gray-800 border-gray-700 border-solid border flex flex-col sm:flex-row items-center justify-between py-2 sm:py-3 md:py-4 lg:py-num-10 px-2 sm:px-3 md:px-4 lg:px-num-12 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full">
              <h3 className="tracking-num--0_01 leading-num-24 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center sm:text-left flex-1">
                Couldn&apos;t find an answer you&apos;re looking for?
              </h3>
              <button className="rounded-[9px] border-gray-1300 border-solid border flex items-center justify-center py-1.5 sm:py-2 md:py-3 lg:py-[9px] px-3 sm:px-4 md:px-6 lg:px-[18px] gap-1.5 sm:gap-2 md:gap-3 lg:gap-[11.3px] text-xs sm:text-sm md:text-sm lg:text-[14px] hover:bg-gray-700 transition-colors w-full sm:w-auto cursor-pointer">
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
