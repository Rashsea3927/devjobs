import JobList from '@/components/JobList';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <>
      <SearchForm />
      <main className='mt-[97px] container mx-auto px-6'>
        <JobList />
      </main>
    </>
  );
}
