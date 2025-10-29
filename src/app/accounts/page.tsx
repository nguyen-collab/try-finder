import Accounts from '@/components/Accounts';
import DashboardHeader from '@/components/DashboardHeader';

export default function AccountsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="container mx-auto py-4 px-4">
        <DashboardHeader />
        <div className="max-w-2xl mx-auto mt-4 sm:mt-6 lg:mt-8">
          <Accounts />
        </div>
      </div>
    </div>
  );
}
