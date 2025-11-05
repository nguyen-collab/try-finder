'use client';

import { useState, useEffect } from 'react';
import {
  ArrowTurnBackIcon,
  EmailIcon,
  EyeOpenIcon,
  KeyIcon,
  LockIcon,
  LogoutIcon,
  PencilEditIcon,
  SettingsIcon,
} from './common/SvgIcon';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Settings() {
  const { user, signOut } = useAuth();

  // Original values for comparison
  const [originalEmail, setOriginalEmail] = useState(user?.email ?? '');

  // Current form values
  const [email, setEmail] = useState(user?.email ?? '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  // Calculate unsaved changes count
  const getUnsavedChangesCount = () => {
    let count = 0;

    // Check if email changed
    if (email !== originalEmail) {
      count++;
    }

    // Check current password field
    if (currentPassword) {
      count++;
    }

    // Check new password field
    if (newPassword) {
      count++;
    }

    if (confirmPassword) {
      count++;
    }

    return count;
  };

  const unsavedChangesCount = getUnsavedChangesCount();

  const handleSaveChanges = () => {
    // Validate password change if attempted
    if (currentPassword || newPassword || confirmPassword) {
      if (!currentPassword) {
        toast.error('Please enter your current password');
        return;
      }
      if (!newPassword) {
        toast.error('Please enter a new password');
        return;
      }
      if (!confirmPassword) {
        toast.error('Please confirm your new password');
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error('New passwords do not match');
        return;
      }
      if (newPassword.length < 6) {
        toast.error('New password must be at least 6 characters long');
        return;
      }
    }

    // Validate email if changed
    if (email !== originalEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Please enter a valid email address');
        return;
      }
    }

    try {
      // Simulate saving changes (replace with actual API calls)
      console.log('Saving changes:', {
        email: email !== originalEmail ? email : null,
        passwordChange: currentPassword && newPassword ? true : false,
      });

      // Update original email to new value
      if (email !== originalEmail) {
        setOriginalEmail(email);
      }

      // Reset password fields after successful change
      if (currentPassword && newPassword) {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
      }

      toast.success('Settings updated successfully');
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Failed to update settings. Please try again.');
    }
  };

  const handleReset = () => {
    // Reset to original values
    setEmail(originalEmail);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);

    toast.success('Changes discarded');
  };

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

  return (
    <main className="w-full bg-gray-500 flex flex-col items-start gap-3.5 text-white font-inter-variable text-num-14 pb-20">
      {/* Email Settings Section */}
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-[15px] font-inter">
        <header className="w-full flex flex-col items-start justify-center gap-0.5">
          <h2 className="tracking-num--0_01 leading-[22px] font-medium text-lg">
            Settings
          </h2>
          <p className="text-base tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
            Manage your account preferences
          </p>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1] bg-gray-10" />

        <div className="w-full flex flex-col items-start gap-3 text-num-12 font-inter-variable">
          <label className="w-full tracking-num--0_01 leading-3 font-medium opacity-[0.75]">
            Email Address
          </label>
          <div className="group w-full rounded-num-9.6 border-gray-1300 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
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
      <section className="w-full rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex flex-col items-start p-[15px] gap-4 text-xs">
        <header className="w-full flex flex-col items-start justify-center text-base font-inter">
          <div className="flex flex-col items-start justify-center gap-0.5">
            <h2 className="tracking-num--0_01 leading-[22px] font-medium text-lg">
              Reset Password
            </h2>
            <p className="text-base tracking-num--0_01 leading-5 font-inter-variable opacity-num-0.5">
              Change your account password
            </p>
          </div>
        </header>

        <hr className="w-full h-[1.3px] opacity-[0.1]" />

        {/* Current Password Field */}
        <div className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75] text-num-14">
              Current Password
            </label>
          </div>
          <div className="group w-full rounded-num-9.6 bg-gray-300 border-gray-1300 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
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
        <div className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75] text-num-14">
              New Password
            </label>
          </div>
          <div className="group w-full rounded-num-9.6 bg-gray-300 border-gray-1300 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
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
        <div className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-center justify-between gap-5">
            <label className="tracking-num--0_01 leading-3 font-medium opacity-[0.75] text-num-14">
              Confirm New Password
            </label>
          </div>
          <div className="group w-full rounded-num-9.6 bg-gray-300 border-gray-1300 border-solid border-[0.8px] flex items-center justify-between py-[11.2px] px-[9.6px] gap-5 text-num-12.8 focus-within:outline-none focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.75),0_0_0_4px_rgba(255,255,255,0.25)] transition-all duration-200">
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

      {/* Action Buttons Section */}
      <footer className="w-full flex items-center gap-2 text-base">
        {/* <button
          onClick={handleSettingsClick}
          className="flex-1 rounded-lg bg-gray-1300 border-gray-1300 border-solid border-[0.8px] flex items-center justify-center p-[9.6px] gap-2 hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
        >
          <SettingsIcon />
          <span className="tracking-num--0_01 leading-[19.2px] font-medium">
            Settings
          </span>
        </button> */}
        <button
          onClick={handleLogout}
          className="flex-1 rounded-[5.23px] bg-orangered-200 border-orangered-100 border-solid border flex items-center justify-center p-[9.6px] gap-2 hover:outline-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_0_4px_rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
        >
          <LogoutIcon />
          <span className="tracking-num--0_01 leading-[19.2px] font-medium">
            Log Out
          </span>
        </button>
      </footer>

      {/* Fixed Save Section - Only show when there are unsaved changes */}
      {unsavedChangesCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <div className="container max-w-xl mx-auto px-4">
            <div className="w-full h-[61px] rounded-[13.08px] bg-gray-200 border-gray-1300 border-solid border-[0.7px] flex items-center justify-between p-[15px] gap-5 text-sm text-white font-inter mb-4">
              <div className="tracking-num--0_01 leading-4 font-medium opacity-[0.75]">
                {unsavedChangesCount} Unsaved Change
                {unsavedChangesCount !== 1 ? 's' : ''}
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
      )}
    </main>
  );
}
