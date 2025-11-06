import DashboardHeader from '@/components/DashboardHeader';
import Dashboard from '@/components/Dashboard';
import CopyRight from '@/components/CopyRight';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500 flex flex-col">
      <div className="w-full mx-auto py-5 bg-gray-500">
        <DashboardHeader />
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-12 mt-10 sm:mt-12 lg:mt-16 bg-gray-500">
          <Dashboard />
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
