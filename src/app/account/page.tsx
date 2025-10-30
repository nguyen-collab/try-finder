import Account from '@/components/Account';
import DashboardHeader from '@/components/DashboardHeader';

export default function AccountPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="container mx-auto py-4 px-4">
        <DashboardHeader />
        <div className="max-w-xl mx-auto mt-10 sm:mt-12 lg:mt-16">
          <Account />
        </div>
      </div>
    </div>
  );
}
