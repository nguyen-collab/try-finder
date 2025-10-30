import DashboardHeader from '@/components/DashboardHeader';
import Dashboard from '@/components/Dashboard';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="mx-auto py-4 px-4 lg:px-12 xl:px-16 2xl:px-20">
        <DashboardHeader />
        <div className="mx-auto mt-10 sm:mt-12 lg:mt-16">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
