import Account from '@/components/Account';
import DashboardHeader from '@/components/DashboardHeader';

export default function AccountPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="container mx-auto py-4 px-4">
        <DashboardHeader />
        <div className="max-w-xl mx-auto mt-4 sm:mt-6 lg:mt-8">
          <Account />
        </div>
      </div>
    </div>
  );
}
