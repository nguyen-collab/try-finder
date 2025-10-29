import DashboardHeader from '@/components/DashboardHeader';
import Dashboard from '@/components/Dashboard';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="container mx-auto py-4 px-4">
        <DashboardHeader />
        <div className="mx-auto mt-4 sm:mt-6 lg:mt-8">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
