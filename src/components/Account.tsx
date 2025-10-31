'use client';

import { GoogleIcon, LogoutIcon, SettingsIcon } from './common/SvgIcon';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Account() {
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
          <h2 className="tracking-num--0_01 leading-[22px] font-medium text-lg">
            Account Details
          </h2>
          <p className="text-base tracking-num--0_01 leading-5 font-inter-variable opacity-[0.5]">
            Details about your profile and ID
          </p>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1]" />

        {/* Email and Authentication Info */}
        <div className="w-full flex items-center justify-between gap-5">
          <div className="flex flex-col items-start justify-center gap-[2.6px]">
            <label className="flex items-center">
              <span className="tracking-num--0_01 leading-[17.44px] opacity-[0.5] text-sm">
                Email Address
              </span>
            </label>
            <div className="flex items-center gap-[8.7px] text-base font-inter">
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
            <span className="tracking-num--0_01 leading-[13.95px] font-medium text-sm">{`Signed up via `}</span>
            <GoogleIcon className="w-[14px] h-[14px]" />
          </button>
        </div>

        {/* User ID and Account Creation Info */}
        <div className="w-full grid grid-cols-2 gap-[21px]">
          <div className="flex items-center">
            <div className="flex flex-col items-start justify-center gap-[2.6px]">
              <label className="flex items-center">
                <span className="tracking-num--0_01 leading-[17.44px] opacity-[0.5] text-sm">
                  Tryfinder ID
                </span>
              </label>
              <div className="flex items-center text-base font-inter">
                <span className="tracking-num--0_01 leading-5 font-medium">
                  {user?.id || 'Unknown ID'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-start justify-center gap-[2.6px]">
              <label className="flex items-center">
                <span className="tracking-num--0_01 leading-[17.44px] opacity-[0.5] text-sm">
                  Account Creation
                </span>
              </label>
              <div className="flex items-center text-base font-inter">
                <span className="tracking-num--0_01 leading-5 font-medium">
                  {formatAccountCreation(user?.created_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Statistics Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] p-[15px] text-base font-inter">
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

      {/* Action Buttons Section */}
      <footer className="w-full flex items-center gap-2 text-base">
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
          className="flex-1 rounded-lg bg-orangered-200 border-orangered-100 border-solid border flex items-center justify-center p-[9.6px] gap-2 hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
        >
          <LogoutIcon />
          <span className="tracking-num--0_01 leading-[19.2px] font-medium">
            Log Out
          </span>
        </button>
      </footer>
    </main>
  );
}
