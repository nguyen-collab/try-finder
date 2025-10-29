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
import { useRouter } from 'next/navigation';

export default function DashboardHeader() {
  const { user, signOut } = useAuth();
  const router = useRouter();
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
    router.push('/accounts');
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
    <div className="w-full max-w-xl mx-auto relative rounded-[13.08px] bg-[#161616]  border-gray-1300 border-solid border-[0.7px] box-border flex items-center justify-between py-[10.9px] px-[16.4px] gap-5 text-left text-[13.08px] text-gray-10 font-inter-variable">
      <div className="flex items-center gap-[6.2px]">
        <Image
          src="/header/tryfinder.svg"
          className="h-[21.8px] w-[117.9px]"
          width={88.9}
          height={21.8}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="hidden sm:flex items-center gap-[13.1px]">
        <div className="rounded-[8.72px] overflow-hidden flex flex-col items-center justify-center py-[7px] px-[10.5px] bg-gray-500">
          <div className="flex items-center gap-[8.7px]">
            <div className="flex items-center gap-[4.4px]">
              <AISearchIcon />
              <div className="relative tracking-[-0.01em] leading-[13.08px] font-medium">
                Search
              </div>
            </div>
            <div className="h-[20.9px] rounded-[5.23px] bg-limegreen-300 border-limegreen-200 border-solid border-[0.9px] box-border flex items-center justify-center py-0 px-[5.2px] text-[10.9px] text-limegreen-100 font-inter">
              <div className="relative tracking-[-0.01em] leading-[13.95px] font-semibold">
                2/2
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[8.72px] overflow-hidden flex flex-col items-center justify-center py-[7px] px-[10.5px]">
          <div className="self-stretch flex items-center">
            <div className="flex items-center gap-[8.7px]">
              <SavedSearchesIcon />
              <div className="relative tracking-[-0.01em] leading-[13.08px] font-medium">
                Saved Searches
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[5px] text-[17.76px] text-white">
        {/* Notification Icon */}
        <div className="relative" ref={notificationPopupRef}>
          <button
            onClick={handleNotificationClick}
            className={`h-[34.9px] w-[34.9px] rounded-[11.89px] bg-gray-500 border-solid border-[1.1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
              isNotificationPopupOpen
                ? 'border-gray-1300 shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)]'
                : 'border-gray-1300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)]'
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
            className={`h-[34.9px] w-[34.9px] rounded-[11.89px] bg-gray-500 border-solid border-[1.1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
              isUserPopupOpen
                ? 'border-gray-1300 shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)]'
                : 'border-gray-1300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)]'
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
                onAccountClick={handleAccountClick}
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
    <div className="relative rounded-[13.08px] w-[197.7px] bg-gray-500 border-gray-1300 border-solid border-[1.1px] box-border overflow-hidden flex flex-col items-center py-[8.7px] px-2.5 text-left text-sm text-white font-inter-variable">
      <div className="flex items-center gap-[8.7px]">
        <NotificationIcon />
        <div className="relative tracking-[-0.01em] leading-[18px] opacity-[0.9]">
          <p className="m-0">All Caught up!</p>
          <p className="m-0">No New Notifications</p>
        </div>
      </div>
    </div>
  );
};

interface UserPopupProps {
  onAccountClick: () => void;
  onSettingsClick: () => void;
  onLogoutClick: () => void;
}

const UserPopup = ({
  onAccountClick,
  onSettingsClick,
  onLogoutClick,
}: UserPopupProps) => {
  return (
    <div className="relative rounded-[13.08px] bg-gray-500 border-gray-1300 border-solid border-[1.1px] box-border w-full overflow-hidden flex flex-col items-center py-[8.7px] px-0 gap-[5px] text-center text-[14.17px] text-white font-geist">
      <button
        onClick={onAccountClick}
        className="w-[147.7px] flex items-center py-0.5 px-[10.9px] box-border gap-[8.2px] opacity-[0.9] hover:opacity-100 transition-opacity cursor-pointer"
      >
        <UserCircleIcon />
        <div className="relative font-medium">Account</div>
      </button>
      <button
        onClick={onSettingsClick}
        className="w-[147.7px] flex items-center py-0.5 px-[10.9px] box-border gap-[8.2px] opacity-[0.9] hover:opacity-100 transition-opacity cursor-pointer"
      >
        <SettingsIcon />
        <div className="relative font-medium">Settings</div>
      </button>
      <div className="self-stretch h-[0.8px] bg-gray-10 opacity-[0.1]" />
      <button
        onClick={onLogoutClick}
        className="w-[147.7px] flex items-center py-0.5 px-[10.9px] box-border gap-[8.2px] text-orangered hover:opacity-80 transition-opacity cursor-pointer"
      >
        <LogoutIcon />
        <div className="relative font-medium">Log Out</div>
      </button>
    </div>
  );
};
