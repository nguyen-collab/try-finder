'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  AISearchIcon,
  NotificationIcon,
  SavedSearchesIcon,
  SettingsIcon,
  LogoutIcon,
  UserCircleIcon,
} from './common/SvgIcon';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardHeader() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const notificationPopupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsUserPopupOpen(false);
      }
      if (
        notificationPopupRef.current &&
        !notificationPopupRef.current.contains(event.target as Node)
      ) {
        setIsNotificationPopupOpen(false);
      }
    };

    if (isUserPopupOpen || isNotificationPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserPopupOpen, isNotificationPopupOpen]);

  const handleUserAvatarClick = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
    setIsNotificationPopupOpen(false); // Close notification popup when opening user popup
  };

  const handleNotificationClick = () => {
    setIsNotificationPopupOpen(!isNotificationPopupOpen);
    setIsUserPopupOpen(false); // Close user popup when opening notification popup
  };

  const handleAccountClick = () => {
    router.push('/account');
    setIsUserPopupOpen(false);
  };

  const handleSettingsClick = () => {
    router.push('/settings');
    setIsUserPopupOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
    setIsUserPopupOpen(false);
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] relative rounded-[13.08px] flex items-center justify-between py-[10.9px] gap-5 text-left text-sm text-gray-10 font-inter-variable">
      <div className="flex items-center gap-[6.2px]">
        <Link href="/">
          <Image
            src="/header/tryfinder.svg"
            className="h-6 w-auto"
            width={88.9}
            height={21.8}
            sizes="100vw"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden sm:flex items-center gap-[13.1px]">
        <button
          className={`cursor-pointer rounded-[8.72px] overflow-hidden flex flex-col items-center justify-center py-[7px] px-[10.5px] text-sm transition-colors duration-200 ${
            pathname === '/dashboard' ? 'bg-gray-100' : 'hover:bg-gray-100'
          }`}
          onClick={() => router.push('/dashboard')}
        >
          <div className="flex items-center gap-[8.7px]">
            <div className="flex items-center gap-[4.4px]">
              <AISearchIcon />
              <div className="relative tracking-[-0.01em] leading-[13.08px] font-medium">
                Search
              </div>
            </div>
            <div className="h-[20.9px] rounded-[5.23px] bg-limegreen-300 border-limegreen-200 border-solid border-[0.9px] box-border flex items-center justify-center py-0 px-[5.2px] text-xs text-limegreen-100 font-inter">
              <div className="relative tracking-[-0.01em] leading-[13.95px] font-semibold">
                2/2
              </div>
            </div>
          </div>
        </button>
        <Link
          href="/save-searches"
          className={`cursor-pointer rounded-[8.72px] overflow-hidden flex flex-col items-center justify-center py-[7px] px-[10.5px] text-sm transition-colors duration-200 ${
            pathname === '/save-searches' ? 'bg-gray-100' : 'hover:bg-gray-100'
          }`}
        >
          <div className="self-stretch flex items-center">
            <div className="flex items-center gap-[8.7px] transition-colors duration-200 text-gray-10">
              <SavedSearchesIcon />
              <div className="relative tracking-[-0.01em] leading-[13.08px] font-medium">
                Saved Searches
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-[5px] text-[17.76px] text-white">
        {/* Notification Icon */}
        <div className="relative" ref={notificationPopupRef}>
          <button
            onClick={handleNotificationClick}
            className={`h-[34.9px] w-[34.9px] rounded-[11.89px] overflow-hidden shrink-0 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
              isNotificationPopupOpen
                ? 'bg-gray-50 shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)]'
                : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className="relative tracking-[-0.01em] leading-[26.64px] font-extrabold">
              <NotificationIcon />
            </div>
          </button>

          {/* Notification Popup */}
          {isNotificationPopupOpen && (
            <div className="absolute top-full right-0 mt-2 z-50">
              <NotificationPopup />
            </div>
          )}
        </div>
        {/* User Avatar */}
        <div className="relative" ref={popupRef}>
          <button
            onClick={handleUserAvatarClick}
            className={`h-[34.9px] w-[34.9px] rounded-[11.89px] overflow-hidden shrink-0 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
              isUserPopupOpen
                ? 'bg-gray-50 shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)]'
                : 'bg-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className="relative tracking-[-0.01em] leading-[26.64px] font-extrabold">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </button>

          {/* User Popup */}
          {isUserPopupOpen && (
            <div className="absolute top-full right-0 mt-2 z-50">
              <UserPopup
                // onAccountClick={handleAccountClick}
                onSettingsClick={handleSettingsClick}
                onLogoutClick={handleLogout}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const NotificationPopup = () => {
  return (
    <div className="relative rounded-[13.08px] w-fit bg-gray-500 border-gray-1300 border-solid border-[1.1px] box-border overflow-hidden flex flex-col items-center p-2 text-left text-base text-white font-inter-variable">
      <div className="flex items-center gap-[8.7px]">
        <NotificationIcon />
        <div className="relative tracking-[-0.01em] leading-[20px] text-sm opacity-[0.9]">
          <p className="m-0 whitespace-nowrap">All Caught up!</p>
          <p className="m-0 whitespace-nowrap">No New Notifications</p>
        </div>
      </div>
    </div>
  );
};

interface UserPopupProps {
  // onAccountClick: () => void;
  onSettingsClick: () => void;
  onLogoutClick: () => void;
}

const UserPopup = ({
  // onAccountClick,
  onSettingsClick,
  onLogoutClick,
}: UserPopupProps) => {
  return (
    <div className="relative rounded-[13.08px] bg-gray-500 border-gray-1300 border-solid border-[1.1px] box-border w-full overflow-hidden flex flex-col items-center py-[8.7px] px-0 gap-1 text-center text-sm text-white font-geist">
      {/* <button
        onClick={onAccountClick}
        className="w-[147.7px] flex items-center p-1 box-border rounded-md gap-[8.2px] hover:bg-gray-100 mx-2 transition-colors duration-200 cursor-pointer"
      >
        <UserCircleIcon />
        <div className="relative font-medium">Account</div>
      </button> */}
      <button
        onClick={onSettingsClick}
        className="w-[147.7px] flex items-center p-1 box-border rounded-md gap-[8.2px] hover:bg-gray-100 mx-2 transition-colors duration-200 cursor-pointer"
      >
        <SettingsIcon />
        <div className="relative font-medium">Settings</div>
      </button>
      <div className="self-stretch h-[0.8px] bg-gray-10 opacity-[0.1]" />
      <button
        onClick={onLogoutClick}
        className="w-[147.7px] flex items-center p-1 box-border rounded-md gap-[8.2px] text-orangered hover:bg-gray-100 mx-2 transition-colors duration-200 cursor-pointer"
      >
        <LogoutIcon />
        <div className="relative font-medium">Log Out</div>
      </button>
    </div>
  );
};
