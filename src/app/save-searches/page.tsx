import DashboardHeader from '@/components/DashboardHeader';
import SaveSearches from '@/components/SaveSearches';
import CopyRight from '@/components/CopyRight';

export default function SaveSearchesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-500 flex flex-col">
      <div className="w-full mx-auto py-4 px-4 lg:px-12 xl:px-16 2xl:px-20 bg-gray-500">
        <DashboardHeader />
        <div className="mx-auto max-w-5xl mt-10 sm:mt-12 lg:mt-16 bg-gray-500">
          <SaveSearches />
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
