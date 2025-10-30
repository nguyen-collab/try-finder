import Settings from '@/components/Settings';
import DashboardHeader from '@/components/DashboardHeader';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="container mx-auto py-4 px-4">
        <DashboardHeader />
        <div className="max-w-xl mx-auto mt-4 sm:mt-6 lg:mt-8">
          <Settings />
        </div>
      </div>
    </div>
  );
}
