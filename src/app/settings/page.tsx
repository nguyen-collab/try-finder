import Settings from '@/components/Settings';
import DashboardHeader from '@/components/DashboardHeader';
import Account from '@/components/Account';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="mx-auto py-4 px-4 lg:px-12 xl:px-16 2xl:px-20 bg-gray-500">
        <DashboardHeader />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-7xl mx-auto mt-10 sm:mt-12 lg:mt-16 bg-gray-500">
          <div className="w-full lg:w-1/2 shrink-0">
            <Account />
          </div>
          <div className="w-full lg:w-1/2 shrink-0">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
