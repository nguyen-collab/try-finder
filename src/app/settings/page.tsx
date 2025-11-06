import Settings from '@/components/Settings';
import DashboardHeader from '@/components/DashboardHeader';
import Account from '@/components/Account';
import CopyRight from '@/components/CopyRight';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500 flex flex-col">
      <div className="w-full mx-auto py-5 bg-gray-500">
        <DashboardHeader />
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto mt-10 sm:mt-12 lg:mt-16 bg-gray-500 px-4 sm:px-6 lg:px-8 xl:px-12 items-start">
          <div className="w-full min-w-lg lg:max-w-1/2">
            <Account />
          </div>
          <div className="w-full lg:max-w-1/2">
            <Settings />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mt-auto">
        <div className="container max-w-7xl mx-auto">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}
