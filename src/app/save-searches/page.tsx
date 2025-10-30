import DashboardHeader from '@/components/DashboardHeader';
import SaveSearches from '@/components/SaveSearches';

export default function SaveSearchesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500">
      <div className="container mx-auto py-4 px-4 bg-gray-500">
        <DashboardHeader />
        <div className="mx-auto mt-4 sm:mt-6 lg:mt-8 bg-gray-500">
          <SaveSearches />
        </div>
      </div>
    </div>
  );
}
