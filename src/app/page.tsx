import JobList from '@/components/JobList';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <>
      <SearchForm />
      <main className='mt-[97px] lg:mt-[105px] mx-auto max-w-[327px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
        <JobList />
      </main>
    </>
  );
}
