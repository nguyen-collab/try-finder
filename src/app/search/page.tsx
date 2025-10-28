import Search from '@/components/Search';

export default function SearchPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-gray-500">
        <div className="container mx-auto py-4 sm:py-6 lg:py-8 xl:py-12">
          <Search />
        </div>
      </div>
    </div>
  );
}
