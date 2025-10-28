// import Image from 'next/image';

// export default function Search() {
//   return (
//     <div className="w-full min-h-screen bg-gray-500 overflow-hidden text-left text-num-12_21 text-white font-inter-variable">
//       {/* Header Navigation Bar */}
//       <header className="w-full flex justify-center py-8">
//         <nav className="w-full max-w-[640px] rounded-num-13_08 bg-gray-200 border-gray-1000 border-solid border-[0.7px] flex items-center justify-between py-[10.9px] px-[16.4px] gap-5 text-[13.08px]">
//           {/* Logo and Brand */}
//           <div className="flex items-center gap-[6.2px]">
//             <div className="h-[21.8px] w-[21.8px] flex items-center justify-center relative">
//               <div className="rounded-num-50 bg-white w-[19.3px] h-[19.3px] absolute" />
//               <Image
//                 className="rounded-[0.41px] w-[9.1px] h-[9.1px] z-10"
//                 width={9.1}
//                 height={9.1}
//                 sizes="100vw"
//                 alt="Search icon"
//               />
//               <div className="rounded-num-50 bg-gray-500 w-[15.4px] h-[15.4px] [transform:_rotate(-45deg)] [transform-origin:0_0] absolute" />
//               <div className="rounded-num-50 bg-gray-500 w-[15.4px] h-[15.4px] [transform:_rotate(-45deg)] [transform-origin:0_0] absolute" />
//               <div className="rounded-num-50 bg-gray-500 w-[15.4px] h-[15.4px] [transform:_rotate(-47.9deg)] [transform-origin:0_0] absolute" />
//               <div className="rounded-num-50 bg-gray-500 w-[15.4px] h-[15.4px] [transform:_rotate(132.1deg)] [transform-origin:0_0] absolute" />
//               <div className="bg-gray-500 w-[2.2px] h-[4.2px] [transform:_rotate(-45deg)] [transform-origin:0_0] absolute" />
//             </div>
//             <Image
//               className="h-[21.8px] w-[88.9px]"
//               width={88.9}
//               height={21.8}
//               sizes="100vw"
//               alt="Brand logo"
//             />
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center gap-[13.1px]">
//             <div className="h-num-34_9 w-[127.4px] rounded-[11.89px] bg-gray-500 border-gray-1000 border-solid border-[1.1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[5px]">
//               <div className="flex items-center gap-[8.7px]">
//                 <div className="flex items-center gap-[4.4px]">
//                   <Image
//                     className="w-num-20_9 max-h-full"
//                     width={20.9}
//                     height={20.9}
//                     sizes="100vw"
//                     alt="Search icon"
//                   />
//                   <div className="tracking-num--0_01 leading-num-13_08 font-medium">
//                     Search
//                   </div>
//                 </div>
//                 <div className="h-[20.9px] rounded-[5.23px] bg-limegreen-300 border-limegreen-200 border-solid border-[0.9px] box-border flex items-center justify-center py-0 px-[5.2px] text-num-10_9 text-limegreen-100 font-inter">
//                   <div className="tracking-num--0_01 leading-num-13_95 font-semibold">
//                     2/2
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="rounded-num-8_72 overflow-hidden flex flex-col items-center justify-center py-[7px] px-num-10_5 text-gray-100">
//               <div className="self-stretch flex items-center">
//                 <div className="flex items-center gap-[8.7px]">
//                   <Image
//                     className="w-num-20_9 max-h-full"
//                     width={20.9}
//                     height={20.9}
//                     sizes="100vw"
//                     alt="Saved searches icon"
//                   />
//                   <div className="tracking-num--0_01 leading-num-13_08 font-medium">
//                     Saved Searches
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* User Profile */}
//           <div className="flex items-center gap-[5px] text-[17.76px]">
//             <Image
//               className="h-num-34_9 w-[34.9px] rounded-[11.89px]"
//               width={34.9}
//               height={34.9}
//               sizes="100vw"
//               alt="User avatar"
//             />
//             <div className="h-num-34_9 w-[34.9px] rounded-[11.89px] bg-gray-500 border-gray-1000 border-solid border-[1.1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center">
//               <div className="tracking-num--0_01 leading-[26.64px] font-extrabold">
//                 E
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content Area - Two Column Layout */}
//       <main className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-4 lg:gap-[15.7px]">
//         {/* Left Sidebar - Filter Sections */}
//         <aside className="w-full lg:w-[300px] flex flex-col gap-[15.3px] text-num-10_46 text-gray-100">
//           {/* Applied Filters Section */}
//           <section className="w-full rounded-num-13_08 bg-gray-400 border-gray-1000 border-solid border-[0.7px] p-[15.7px]">
//             <div className="flex flex-col gap-[10.5px]">
//               <div className="flex items-start justify-between">
//                 <h3 className="tracking-num--0_01 leading-num-13_95 font-semibold opacity-num-0_75">
//                   APPLIED FILTERS
//                 </h3>
//                 <button className="tracking-num--0_01 leading-num-13_95 font-semibold opacity-num-0_75">
//                   CLEAR ALL
//                 </button>
//               </div>
//               <Image
//                 className="w-full h-[0.9px] opacity-num-0_1"
//                 width={269.4}
//                 height={0.9}
//                 sizes="100vw"
//                 alt=""
//               />
//               <div className="rounded-[5.23px] bg-gray-1000 border-gray-800 border-solid border-[0.9px] flex items-center justify-center p-[5.2px] gap-[4.4px] text-num-12_21 text-white font-inter">
//                 <Image
//                   className="w-[15.7px]"
//                   width={15.7}
//                   height={15.7}
//                   sizes="100vw"
//                   alt=""
//                 />
//                 <div className="tracking-num--0_01 leading-num-13_95">
//                   <span className="font-medium">{`Name : `}</span>
//                   <b>Mark Cuban</b>
//                 </div>
//                 <Image
//                   className="w-[15.7px]"
//                   width={15.7}
//                   height={15.7}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Name Filter Section */}
//           <section className="w-full rounded-num-13_08 bg-gray-400 border-gray-1000 border-solid border-[0.7px] p-[15.7px]">
//             <div className="flex flex-col gap-[8.7px]">
//               <div className="flex items-start justify-between">
//                 <h3 className="tracking-num--0_01 leading-num-13_95 font-semibold opacity-num-0_75">
//                   NAME
//                 </h3>
//                 <Image
//                   className="h-num-15_7 w-[15.7px]"
//                   width={15.7}
//                   height={15.7}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>
//               <div className="text-num-12_21 text-white">
//                 <div className="rounded-num-10_46 bg-gray-500 border-gray-1000 border-solid border-[0.9px] flex items-center justify-between p-num-10_5 gap-5">
//                   <div className="flex items-center gap-[7px]">
//                     <Image
//                       className="w-[15.7px]"
//                       width={15.7}
//                       height={15.7}
//                       sizes="100vw"
//                       alt=""
//                     />
//                     <div className="tracking-num--0_01 leading-num-17_44 opacity-[0.25]">
//                       Enter Name
//                     </div>
//                   </div>
//                   <Image
//                     className="w-[15.7px]"
//                     width={15.7}
//                     height={15.7}
//                     sizes="100vw"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Location Filter Section */}
//           <section className="w-full rounded-num-13_08 bg-gray-400 border-gray-1000 border-solid border-[0.7px] p-[15.7px] flex flex-col gap-[20.9px]">
//             <div className="flex flex-col gap-[8.7px]">
//               <div className="flex items-start justify-between">
//                 <h3 className="tracking-num--0_01 leading-num-13_95 font-semibold opacity-num-0_75">
//                   LOCATION
//                 </h3>
//                 <Image
//                   className="h-num-15_7 w-[15.7px]"
//                   width={15.7}
//                   height={15.7}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>
//               <div className="text-num-12_21 text-white">
//                 <div className="rounded-num-10_46 bg-gray-500 border-gray-1000 border-solid border-[0.9px] flex items-center justify-between p-num-10_5 gap-5">
//                   <div className="flex items-center gap-[7px]">
//                     <Image
//                       className="w-[15.7px]"
//                       width={15.7}
//                       height={15.7}
//                       sizes="100vw"
//                       alt=""
//                     />
//                     <div className="tracking-num--0_01 leading-num-17_44 opacity-[0.25]">
//                       Enter Location
//                     </div>
//                   </div>
//                   <Image
//                     className="w-[15.7px]"
//                     width={15.7}
//                     height={15.7}
//                     sizes="100vw"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Location Options */}
//             <div className="flex flex-col gap-[10.5px] text-[13.95px]">
//               {/* US States Option */}
//               <div className="rounded-num-6_98 flex items-center justify-between">
//                 <div className="flex items-center gap-[8.7px]">
//                   <Image
//                     className="h-num-15_7 w-[15.7px] object-contain"
//                     width={15.7}
//                     height={15.7}
//                     sizes="100vw"
//                     alt=""
//                   />
//                   <div className="flex items-center gap-[10.5px]">
//                     <div className="h-num-15_7 w-[15.7px] rounded-num-4_91 bg-gray-1000 border-gray-1000 border-solid border-[1px]" />
//                     <div className="flex items-center gap-[5.2px]">
//                       <div className="tracking-num--0_01 leading-num-17_44 font-medium">
//                         US
//                       </div>
//                       <Image
//                         className="h-num-15_7 w-[15.7px] object-contain"
//                         width={15.7}
//                         height={15.7}
//                         sizes="100vw"
//                         alt=""
//                       />
//                       <div className="tracking-num--0_01 leading-num-17_44 font-medium">
//                         States (56)
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Image
//                   className="w-[15.7px]"
//                   width={15.7}
//                   height={15.7}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>

//               {/* More location options would go here */}
//             </div>

//             {/* Radius Slider */}
//             <div className="flex flex-col gap-[8.7px] text-[13.08px] text-white">
//               <div className="tracking-num--0_01 leading-num-13_08 font-medium opacity-num-0_75">
//                 Radius (km)
//               </div>
//               <div className="h-[30.5px] text-center text-num-10_9 relative">
//                 <Image
//                   className="w-[251.8px] opacity-num-0_1"
//                   width={251.8}
//                   height={1.3}
//                   sizes="100vw"
//                   alt=""
//                 />
//                 <div className="w-full flex items-end justify-between">
//                   {/* Slider markers would go here */}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Contact Method Filter Section */}
//           <section className="w-full rounded-num-13_08 bg-gray-400 border-gray-1000 border-solid border-[0.7px] p-[15.7px] flex flex-col gap-3.5">
//             <div className="flex flex-col gap-[8.7px]">
//               <div className="flex items-start justify-between">
//                 <h3 className="tracking-num--0_01 leading-num-13_95 font-semibold opacity-num-0_75">
//                   CONTACT METHOD
//                 </h3>
//                 <Image
//                   className="h-num-15_7 w-[15.7px]"
//                   width={15.7}
//                   height={15.7}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>
//               <div className="flex items-start gap-[8.7px] text-[13.95px] text-white">
//                 <div className="flex-1">
//                   <div className="rounded-num-10_46 [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_#0f0f0f] border-gray-700 border-solid border-[0.9px] flex items-center justify-center py-[7px] px-num-10_5">
//                     <div className="tracking-num--0_01 leading-num-17_44">
//                       Or
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="rounded-num-10_46 bg-gray-500 border-gray-1000 border-solid border-[0.9px] flex items-center justify-center py-[7px] px-num-10_5">
//                     <div className="tracking-num--0_01 leading-num-17_44">
//                       And
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Method Options */}
//             <div className="flex flex-col gap-[10.5px] text-[13.95px]">
//               <div className="rounded-num-6_98 flex items-center">
//                 <div className="flex items-center gap-[10.5px]">
//                   <div className="h-num-15_7 w-[15.7px] rounded-num-4_91 bg-gray-1000 border-gray-1000 border-solid border-[1px]" />
//                   <div className="tracking-num--0_01 leading-num-17_44 font-medium">
//                     Mobile
//                   </div>
//                 </div>
//               </div>
//               <div className="rounded-num-6_98 flex items-center">
//                 <div className="flex items-center gap-[10.5px]">
//                   <div className="h-num-15_7 w-[15.7px] rounded-num-4_91 bg-gray-1000 border-gray-1000 border-solid border-[1px]" />
//                   <div className="tracking-num--0_01 leading-num-17_44 font-medium">
//                     Phone
//                   </div>
//                 </div>
//               </div>
//               <div className="rounded-num-6_98 flex items-center">
//                 <div className="flex items-center gap-[10.5px]">
//                   <div className="h-num-15_7 w-[15.7px] rounded-num-4_91 bg-gray-1000 border-gray-1000 border-solid border-[1px]" />
//                   <div className="tracking-num--0_01 leading-num-17_44 font-medium">
//                     Personal Email
//                   </div>
//                 </div>
//               </div>
//               <div className="rounded-num-6_98 flex items-center">
//                 <div className="flex items-center gap-[10.5px]">
//                   <div className="h-num-15_7 w-[15.7px] rounded-num-4_91 bg-gray-1000 border-gray-1000 border-solid border-[1px]" />
//                   <div className="tracking-num--0_01 leading-num-17_44 font-medium">
//                     Work Email
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </aside>

//         {/* Right Content Area - Search Results */}
//         <section className="flex-1 flex flex-col gap-4">
//           {/* Search Input and Tag Selection */}
//           <div className="w-full flex flex-col lg:flex-row gap-4 lg:items-end text-[13.08px]">
//             <div className="flex-1 flex flex-col gap-[13.1px]">
//               <label className="tracking-num--0_01 leading-num-13_08 font-medium opacity-num-0_75">
//                 Search for any business contact
//               </label>
//               <div className="rounded-num-10_46 bg-gray-300 border-gray-900 border-solid border-[0.9px] flex items-center justify-between py-[8.7px] px-num-10_5 gap-5 text-[14.17px]">
//                 <div className="flex items-center gap-[8.7px]">
//                   <Image
//                     className="w-num-20_9"
//                     width={20.9}
//                     height={20.9}
//                     sizes="100vw"
//                     alt=""
//                   />
//                   <div className="tracking-num--0_01 leading-[19.62px] opacity-[0.4]">
//                     e.g. LinkedIn URL, Job Title, Industry, Revenue, Number of
//                     Employees, Years of Experience, etc.
//                   </div>
//                 </div>
//                 <Image
//                   className="h-[19.6px] w-[19.6px] rounded-[5.45px]"
//                   width={19.6}
//                   height={19.6}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="h-[45.3px] w-full lg:w-[352.7px] rounded-num-10_46 bg-gray-300 border-gray-900 border-solid border-[0.9px] flex items-center justify-between py-[8.7px] px-num-10_5 gap-5 text-[14.17px]">
//               <div className="flex items-center">
//                 <div className="tracking-num--0_01 leading-[19.62px] opacity-[0.4]">
//                   No Active Tag
//                 </div>
//               </div>
//               <div className="flex items-center gap-[10.5px]">
//                 <Image
//                   className="h-[20.9px] w-num-20_9"
//                   width={20.9}
//                   height={20.9}
//                   sizes="100vw"
//                   alt=""
//                 />
//                 <Image
//                   className="h-[20.9px] w-[1.3px] opacity-[0.25]"
//                   width={1.3}
//                   height={20.9}
//                   sizes="100vw"
//                   alt=""
//                 />
//                 <Image
//                   className="h-[20.9px] w-num-20_9"
//                   width={20.9}
//                   height={20.9}
//                   sizes="100vw"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Search Results Count */}
//           <div className="flex items-center gap-[8.7px] text-[13.08px] py-4">
//             <div className="h-num-15_7 w-[15.7px] rounded-num-4_91 bg-gray-1000 border-gray-1000 border-solid border-[1px]" />
//             <div className="tracking-num--0_01 leading-num-13_08 font-medium opacity-num-0_75">
//               1 - 5 of about 5 results.
//             </div>
//           </div>

//           {/* Search Results List */}
//           <div className="flex flex-col">
//             {/* Result items would go here */}
//             <div className="border-t border-white border-opacity-10 py-6">
//               {/* End of Results */}
//               <div className="text-center text-[13.08px] tracking-num--0_01 leading-num-13_08 font-medium opacity-num-0_75 py-4">
//                 End of Results
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
