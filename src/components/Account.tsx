'use client';

import {
  AlertIcon,
  ArrowUpIcon,
  DeleteIcon,
  GoogleIcon,
  LogoutIcon,
  SettingsIcon,
} from './common/SvgIcon';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Account() {
  const [isDangerZoneExpanded, setIsDangerZoneExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSettingsClick = () => {
    router.push('/settings');
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (!confirmDelete) return;

    setIsLoading(true);
    try {
      // TODO: delete api calling
      console.log('Account deletion requested');

      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error deleting account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Format account creation date
  const formatAccountCreation = (createdAt: string | undefined) => {
    if (!createdAt) return 'Unknown';
    const date = new Date(createdAt);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <main className="w-full flex flex-col items-start gap-3.5 text-white font-inter-variable text-xs">
      {/* Account Details Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-[15px]">
        <header className="w-full flex flex-col items-start justify-center gap-0.5 text-base font-inter">
          <h2 className="tracking-num--0_01 leading-[22px] font-medium text-num-16">
            Account Details
          </h2>
          <p className="text-num-14 tracking-num--0_01 leading-5 font-inter-variable opacity-[0.5]">
            Details about your profile and ID
          </p>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1]" />

        {/* Email and Authentication Info */}
        <div className="w-full flex items-center justify-between gap-5">
          <div className="flex flex-col items-start justify-center gap-[2.6px]">
            <label className="flex items-center">
              <span className="tracking-num--0_01 leading-[17.44px] opacity-[0.5] text-num-14">
                Email Address
              </span>
            </label>
            <div className="flex items-center gap-[8.7px] text-num-14 font-inter">
              <span className="tracking-num--0_01 leading-5 font-medium">
                {user?.email || 'No email'}
              </span>
              <div
                className={`h-[20.9px] rounded-[5.23px] border-solid border-[0.9px] flex items-center justify-center py-0 px-[5.2px] text-xs ${
                  user?.email_confirmed_at
                    ? 'bg-limegreen-200 border-limegreen-100 text-limegreen-100'
                    : 'bg-gray-1300 border-gray-1200'
                }`}
              >
                <span className="tracking-num--0_01 leading-[13.95px] font-medium">
                  {user?.email_confirmed_at ? 'Verified' : 'Not Verified'}
                </span>
              </div>
            </div>
          </div>

          <button className="rounded-[5.23px] bg-gray-1300 border-gray-1200 border-solid border-[0.9px] flex items-center justify-center py-[5px] px-2.5 gap-[5px] text-xs font-inter hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer">
            <span className="tracking-num--0_01 leading-[13.95px] font-medium text-num-14">{`Signed up via `}</span>
            <GoogleIcon className="w-[14px] h-[14px]" />
          </button>
        </div>

        {/* User ID and Account Creation Info */}
        <div className="w-full grid grid-cols-2 gap-[21px]">
          <div className="flex items-center">
            <div className="flex flex-col items-start justify-center gap-[2.6px]">
              <label className="flex items-center">
                <span className="tracking-num--0_01 leading-[17.44px] opacity-[0.5] text-num-14">
                  Tryfinder ID
                </span>
              </label>
              <div className="flex items-center text-num-14 font-inter">
                <span className="tracking-num--0_01 leading-5 font-medium">
                  {user?.id?.slice?.(0, 6) || 'Unknown'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-start justify-center gap-[2.6px]">
              <label className="flex items-center">
                <span className="tracking-num--0_01 leading-[17.44px] opacity-[0.5] text-num-14">
                  Account Creation
                </span>
              </label>
              <div className="flex items-center text-num-14 font-inter">
                <span className="tracking-num--0_01 leading-5 font-medium">
                  {formatAccountCreation(user?.created_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Statistics Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] p-[15px] text-num-14 font-inter">
        <div className="w-full flex flex-col items-start gap-2.5">
          <div className="w-full flex justify-center">
            <p className="tracking-num--0_01 leading-4 font-medium opacity-[0.75]">
              1 of 2 Searches Remaining
            </p>
          </div>
          <div className="w-full flex items-center gap-[5px]">
            <div className="h-[5px] w-[218px] rounded-[10px] bg-white" />
            <div className="h-[5px] flex-1 rounded-[10px] bg-white opacity-[0.1]" />
          </div>
        </div>
      </section>

      {/* Danger Zone Section */}
      <section
        className={`w-full rounded-[13.08px] [background:linear-gradient(rgba(197,34,31,0.1),rgba(197,34,31,0.1)),#0f0f0f] border-firebrick-100 border-dashed border flex flex-col items-start p-[15px] text-num-12.8 transition-all duration-300 ${isDangerZoneExpanded ? 'gap-3' : 'gap-0'}`}
      >
        <header
          className="w-full flex items-center justify-between gap-5 text-base font-inter cursor-pointer"
          onClick={() => setIsDangerZoneExpanded(!isDangerZoneExpanded)}
        >
          <div className="flex flex-col items-start justify-center gap-0.5">
            <h2 className="tracking-num--0_01 leading-[22px] font-medium text-num-16">
              Danger Zone
            </h2>
            <p className="text-num-14 tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
              Delete your account and all related searches
            </p>
          </div>
          <div
            className={`transition-transform duration-300 ${isDangerZoneExpanded ? 'rotate-0' : 'rotate-180'}`}
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
          <div className="space-y-4">
            <hr className="w-full h-[1.3px] opacity-[0.1]" />

            <div className="w-full rounded-[13.08px] bg-firebrick-300 border-firebrick-200 border-solid border flex items-center p-2.5 text-num-14">
              <p className="w-full tracking-num--0_01 leading-5 text-num-14">
                Note : This will delete all your saved searches, credits linked
                to this account&apos;s email address
              </p>
            </div>

            <label className="flex items-center gap-[9.6px] text-num-14 cursor-pointer">
              <input
                type="checkbox"
                id="confirmDelete"
                checked={confirmDelete}
                onChange={e => setConfirmDelete(e.target.checked)}
                className="h-num-14.4 w-[14.4px] rounded-[4.5px] bg-gray-300 border-gray-1300 border-solid border-[0.9px] appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 checked:bg-gray-500 checked:border-gray-500 transition-all duration-200"
              />
              <span className="tracking-num--0_01 leading-num-16 font-medium">
                I want to permanently delete my account
              </span>
            </label>

            <button
              onClick={handleDeleteAccount}
              disabled={!confirmDelete || isLoading}
              className={`w-[98%] mx-auto shadow-[0px_0px_0px_3.2px_rgba(197,34,31,0.25)] rounded-num-9.6 [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#c5221f] border-gray-1300 border-solid border-[0.8px] overflow-hidden flex items-center justify-center p-[9.6px] gap-1 transition-all duration-300 ${
                confirmDelete && !isLoading
                  ? 'hover:[background:linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.1)),#c5221f] cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <DeleteIcon />
              <span className="tracking-num--0_01 leading-[19.2px] font-semibold text-num-14">
                {isLoading ? 'Deleting...' : 'Yes, Delete my account'}
              </span>
            </button>

            <footer className="w-full flex items-center justify-center gap-[5px] text-center text-gray-10">
              <AlertIcon />
              <p className="tracking-num--0_01 leading-[19.2px] font-medium text-num-14">
                Caution : Once deleted you cannot recover your account data.
              </p>
            </footer>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      {/* <footer className="w-full flex items-center gap-2 text-num-14">
        <button
          onClick={handleSettingsClick}
          className="flex-1 rounded-lg bg-gray-1300 border-gray-1300 border-solid border-[0.8px] flex items-center justify-center p-[9.6px] gap-2 hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
        >
          <SettingsIcon />
          <span className="tracking-num--0_01 leading-[19.2px] font-medium">
            Settings
          </span>
        </button>
        <button
          onClick={handleLogout}
          className="flex-1 rounded-[5.23px] bg-orangered-200 border-orangered-100 border-solid border flex items-center justify-center p-[9.6px] gap-2 hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
        >
          <LogoutIcon />
          <span className="tracking-num--0_01 leading-[19.2px] font-medium">
            Log Out
          </span>
        </button>
      </footer> */}
    </main>
  );
}
