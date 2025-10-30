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
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const [isDangerZoneExpanded, setIsDangerZoneExpanded] = useState(false);
  const [email, setEmail] = useState(user?.email ?? '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveChanges = () => {
    console.log('Saving changes:', {
      email,
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

  const handleReset = () => {
    setEmail(user?.email ?? '');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
    setConfirmDelete(false);
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

  return (
    <main className="w-full flex flex-col items-start gap-3.5 text-white font-inter-variable text-base pb-20">
      {/* Email Settings Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-400 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-[15px] font-inter">
        <header className="w-full flex flex-col items-start justify-center gap-0.5">
          <h2 className="tracking-num--0_01 leading-[22px] font-medium">
            Settings
          </h2>
          <p className="text-sm tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
            Manage your account preferences
          </p>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1] bg-gray-10" />

        <div className="w-full flex flex-col items-start gap-2 text-xs font-inter-variable">
          <label className="w-full tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
            Email Address
          </label>
          <div className="group w-full rounded-num-9.6 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
            <div className="flex items-center gap-1.5 flex-1">
              <EmailIcon />
              <input
                type="email"
                className="flex-1 bg-transparent tracking-num--0_01 leading-num-16 text-white placeholder:text-gray-10 focus:outline-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button className="opacity-num-0.25 hover:opacity-50 transition-opacity cursor-pointer">
              <PencilEditIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Password Reset Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-400 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-3 text-xs">
        <header className="w-full flex flex-col items-start justify-center text-base font-inter">
          <div className="flex flex-col items-start justify-center gap-0.5">
            <h2 className="tracking-num--0_01 leading-[22px] font-medium">
              Reset Password
            </h2>
            <p className="text-sm tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
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
          </div>
          <div className="group w-full rounded-num-9.6 bg-gray-300 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
            <div className="flex items-center gap-[6.4px] flex-1">
              <KeyIcon className="group-focus-within:[&_path]:fill-gray-1100 group-focus-within:[&_g]:opacity-100 transition-all duration-200" />
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder="••••••••••••••••"
                className="flex-1 bg-transparent tracking-num--0_01 leading-num-16 text-white placeholder:text-gray-10 focus:outline-none"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="opacity-num-0.25 hover:opacity-50 transition-opacity"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              <EyeOpenIcon
                className={`transition-all duration-200 ${
                  showCurrentPassword
                    ? '[&_path]:fill-gray-1100 [&_g]:opacity-100'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* New Password Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
              New Password
            </label>
          </div>
          <div className="group w-full rounded-num-9.6 bg-gray-300 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
            <div className="flex items-center gap-[6.4px] flex-1">
              <KeyIcon className="group-focus-within:[&_path]:fill-gray-1100 group-focus-within:[&_g]:opacity-100 transition-all duration-200" />
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="••••••••••••••••"
                className="flex-1 bg-transparent tracking-num--0_01 leading-num-16 text-white placeholder:text-gray-10 focus:outline-none"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="opacity-num-0.25 hover:opacity-50 transition-opacity"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              <EyeOpenIcon
                className={`transition-all duration-200 ${
                  showNewPassword
                    ? '[&_path]:fill-gray-1100 [&_g]:opacity-100'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Confirm New Password Field */}
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
              Confirm New Password
            </label>
          </div>
          <div className="group w-full rounded-num-9.6 bg-gray-300 border-gray-400 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
            <div className="flex items-center gap-[6.4px] flex-1">
              <LockIcon className="group-focus-within:[&_path]:fill-gray-1100 group-focus-within:[&_g]:opacity-100 transition-all duration-200" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••••••••••"
                className="flex-1 bg-transparent tracking-num--0_01 leading-num-16 text-white placeholder:text-gray-10 focus:outline-none"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="opacity-num-0.25 hover:opacity-50 transition-opacity"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <EyeOpenIcon
                className={`transition-all duration-200 ${
                  showConfirmPassword
                    ? '[&_path]:fill-gray-1100 [&_g]:opacity-100'
                    : ''
                }`}
              />
            </button>
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
            <h2 className="tracking-num--0_01 leading-[22px] font-medium">
              Danger Zone
            </h2>
            <p className="text-sm tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
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
          <div className="space-y-3">
            <hr className="w-full h-[1.3px] opacity-[0.1]" />

            <div className="w-full rounded-[13.08px] bg-firebrick-300 border-firebrick-200 border-solid border flex items-center p-2.5 text-sm">
              <p className="w-full tracking-num--0_01 leading-5">
                Note : This will delete all your saved searches, credits linked
                to this account&apos;s email address
              </p>
            </div>

            <label className="flex items-center gap-[9.6px] text-gray-10 cursor-pointer">
              <input
                type="checkbox"
                id="confirmDelete"
                checked={confirmDelete}
                onChange={e => setConfirmDelete(e.target.checked)}
                className="h-num-14.4 w-[14.4px] rounded-[4.5px] bg-gray-300 border-gray-400 border-solid border-[0.9px] appearance-none focus:outline-none relative after:content-['✓'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 checked:bg-gray-500 checked:border-gray-500 transition-all duration-200"
              />
              <span className="tracking-num--0_01 leading-num-16 font-medium">
                I want to permanently delete my account
              </span>
            </label>

            <button
              onClick={handleDeleteAccount}
              disabled={!confirmDelete || isLoading}
              className={`w-full shadow-[0px_0px_0px_3.2px_rgba(197,34,31,0.25)] rounded-num-9.6 [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#c5221f] border-gray-400 border-solid border-[0.8px] overflow-hidden flex items-center justify-center p-[9.6px] gap-1 transition-all duration-300 ${
                confirmDelete && !isLoading
                  ? 'hover:[background:linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.1)),#c5221f] cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <DeleteIcon />
              <span className="tracking-num--0_01 leading-[19.2px] font-semibold">
                {isLoading ? 'Deleting...' : 'Yes, Delete my account'}
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
        <div className="container max-w-xl mx-auto px-4">
          <div className="w-full h-[61px] rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex items-center justify-between p-[15px] gap-5 text-sm text-white font-inter mb-4">
            <div className="tracking-num--0_01 leading-4 font-medium opacity-[0.75]">
              2 Unsaved Changes
            </div>
            <div className="flex items-center gap-2.5 text-sm font-inter-variable">
              <button
                onClick={handleReset}
                className="h-[34.9px] rounded-[10.46px] border-gray-1300 border-solid border flex items-center justify-center py-[10.5px] px-4 gap-[4.4px] hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
              >
                <ArrowTurnBackIcon />
                <span className="tracking-num--0_01 leading-[20.93px] font-semibold">
                  Reset
                </span>
              </button>
              <button
                onClick={handleSaveChanges}
                className="h-[34.9px] rounded-[10.46px] [background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.2)),#fafafa] border-gray-300 border-solid border-[0.9px] flex items-center justify-center py-[10.5px] px-4 text-gray-200 hover:[background:linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.1)),#fafafa] transition-[background] duration-300 ease-in-out cursor-pointer"
              >
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
