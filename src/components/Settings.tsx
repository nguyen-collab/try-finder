'use client';

import { useState } from 'react';
import {
  AlertIcon,
  ArrowTurnBackIcon,
  ArrowUpIcon,
  DeleteIcon,
  EmailIcon,
  EyeOpenIcon,
  KeyIcon,
  LockIcon,
  PencilEditIcon,
} from './common/SvgIcon';

export default function Settings() {
  const [isDangerZoneExpanded, setIsDangerZoneExpanded] = useState(false);

  return (
    <main className="w-full flex flex-col items-start gap-3.5 text-white font-inter-variable text-[16px] pb-20">
      {/* Email Settings Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-400 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-[15px] font-inter">
        <header className="w-full flex flex-col items-start justify-center gap-0.5">
          <h2 className="tracking-num--0_01 leading-[22px] font-medium">
            Settings
          </h2>
          <p className="text-[14px] tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
            Manage your account preferences
          </p>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1] bg-gray-10" />

        <div className="w-full flex flex-col items-start gap-2 text-[12px] font-inter-variable">
          <label className="w-full tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
            Email Address
          </label>
          <div className="w-full rounded-num-9.6 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8">
            <div className="flex items-center gap-1.5">
              <EmailIcon />
              <span className="tracking-num--0_01 leading-num-16">
                hi@echodzns.com
              </span>
            </div>
            <PencilEditIcon />
          </div>
        </div>
      </section>

      {/* Password Reset Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-400 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-3 text-[12px]">
        <header className="w-full flex flex-col items-start justify-center text-[16px] font-inter">
          <div className="flex flex-col items-start justify-center gap-0.5">
            <h2 className="tracking-num--0_01 leading-[22px] font-medium">
              Reset Password
            </h2>
            <p className="text-[14px] tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
              Change your account password
            </p>
          </div>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1]" />

        {/* Current Password Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
              Current Password
            </label>
            <button className="text-[11.2px] tracking-num--0_01 leading-[11.2px] font-medium opacity-num-0.5">
              Forgot password?
            </button>
          </div>
          <div className="w-full rounded-num-9.6 bg-gray-300 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8">
            <div className="flex items-center gap-[6.4px]">
              <KeyIcon />
              <span className="tracking-num--0_01 leading-num-16 opacity-num-0.25">
                *************
              </span>
            </div>
            <EyeOpenIcon />
          </div>
        </div>

        {/* New Password Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
              New Password
            </label>
            <button className="text-[11.2px] tracking-num--0_01 leading-[11.2px] font-medium opacity-num-0.5">
              Forgot password?
            </button>
          </div>
          <div className="w-full rounded-num-9.6 bg-gray-300 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8">
            <div className="flex items-center gap-[6.4px]">
              <KeyIcon />
              <span className="tracking-num--0_01 leading-num-16 opacity-num-0.25">
                *************
              </span>
            </div>
            <EyeOpenIcon />
          </div>
        </div>

        {/* Confirm New Password Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
              Confirm New Password
            </label>
            <button className="text-[11.2px] tracking-num--0_01 leading-[11.2px] font-medium opacity-num-0.5">
              Forgot password?
            </button>
          </div>
          <div className="w-full rounded-num-9.6 bg-gray-300 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8">
            <div className="flex items-center gap-[6.4px]">
              <LockIcon />
              <span className="tracking-num--0_01 leading-num-16 opacity-num-0.25">
                ••••••••••••••••
              </span>
            </div>
            <EyeOpenIcon />
          </div>
        </div>
      </section>

      {/* Danger Zone Section */}
      <section
        className={`w-full rounded-[13.08px] [background:linear-gradient(rgba(197,34,31,0.1),rgba(197,34,31,0.1)),#0f0f0f] border-firebrick-100 border-dashed border flex flex-col items-start p-[15px] text-num-12.8 transition-all duration-300 ${isDangerZoneExpanded ? 'gap-3' : 'gap-0'}`}
      >
        <header
          className="w-full flex items-center justify-between gap-5 text-[16px] font-inter cursor-pointer"
          onClick={() => setIsDangerZoneExpanded(!isDangerZoneExpanded)}
        >
          <div className="flex flex-col items-start justify-center gap-0.5">
            <h2 className="tracking-num--0_01 leading-[22px] font-medium">
              Danger Zone
            </h2>
            <p className="text-[14px] tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
              Delete your account and all related searches
            </p>
          </div>
          <div
            className={`transition-transform duration-300 ${isDangerZoneExpanded ? 'rotate-180' : 'rotate-0'}`}
          >
            <ArrowUpIcon />
          </div>
        </header>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isDangerZoneExpanded
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-3">
            <hr className="w-full h-[1.3px] opacity-[0.1]" />

            <div className="w-full rounded-[13.08px] bg-firebrick-300 border-firebrick-200 border-solid border flex items-center p-2.5 text-[14px]">
              <p className="w-full tracking-num--0_01 leading-5">
                Note : This will delete all your saved searches, credits linked
                to this account&apos;s email address
              </p>
            </div>

            <label className="flex items-center gap-[9.6px] text-gray-10">
              <div className="h-num-14.4 w-[14.4px] rounded-[4.5px] bg-gray-300 border-gray-400 border-solid border-[0.9px]" />
              <span className="tracking-num--0_01 leading-num-16 font-medium">
                I want to permanently delete my account
              </span>
            </label>

            <button className="w-full shadow-[0px_0px_0px_3.2px_rgba(197,34,31,0.25)] rounded-num-9.6 [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#c5221f] border-gray-400 border-solid border-[0.8px] overflow-hidden flex items-center justify-center p-[9.6px] gap-1">
              <DeleteIcon />
              <span className="tracking-num--0_01 leading-[19.2px] font-semibold">
                Yes, Delete my account
              </span>
            </button>

            <footer className="w-full flex items-center justify-center gap-[5px] text-center text-gray-10">
              <AlertIcon />
              <p className="tracking-num--0_01 leading-[19.2px] font-medium">
                Caution : Once deleted you cannot recover your account data.
              </p>
            </footer>
          </div>
        </div>
      </section>

      {/* Fixed Save Section */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="container max-w-md mx-auto px-4">
          <div className="w-full h-[61px] rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex items-center justify-between p-[15px] gap-5 text-sm text-white font-inter mb-4">
            <div className="tracking-num--0_01 leading-4 font-medium opacity-[0.75]">
              2 Unsaved Changes
            </div>
            <div className="flex items-center gap-2.5 text-[13.95px] font-inter-variable">
              <button className="h-[34.9px] rounded-[10.46px] border-gray-1300 border-solid border flex items-center justify-center py-[10.5px] px-4 gap-[4.4px]">
                <ArrowTurnBackIcon />
                <span className="tracking-num--0_01 leading-[20.93px] font-semibold">
                  Reset
                </span>
              </button>
              <button className="h-[34.9px] rounded-[10.46px] [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#fafafa] border-gray-300 border-solid border-[0.9px] flex items-center justify-center py-[10.5px] px-4 text-gray-200">
                <span className="tracking-num--0_01 leading-[20.93px] font-semibold">
                  Save changes
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
