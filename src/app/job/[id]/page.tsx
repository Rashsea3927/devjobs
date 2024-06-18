import { Button } from '@/components/ui/button';
import { getJobData } from '@/lib/getJobData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const JobDetailPage = ({ params }: { params: { id: string } }) => {
  const job = getJobData(params.id);

  if (!job) {
    return notFound();
  }

  return (
    <>
      <main className='max-w-[327px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[730px] mx-auto mb-16'>
        <div className='relative mb-2 sm:mb-0 pt-[50px] pb-8 px-6 sm:p-0 bg-card rounded-md -translate-y-4 sm:-translate-y-10 sm:flex sm:justify-between sm:gap-10'>
          <div
            className='absolute sm:static w-[50px] sm:w-[140px] h-[50px] sm:h-[140px] -top-[25px] left-1/2 -translate-x-1/2 sm:translate-x-0 grid place-content-center rounded-[15px] sm:rounded-none'
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image
              className='w-auto h-auto sm:scale-200'
              src={job.logo}
              width={0}
              height={0}
              alt=''
            />
          </div>
          <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-0 sm:justify-between sm:grow sm:pr-10'>
            <div className='flex flex-col items-center sm:items-start'>
              <h2 className='text-foreground text-md sm:text-lg font-bold'>{job.company}</h2>
              <p className='text-muted'>{job.company.toLowerCase()}.com</p>
            </div>
            <Button
              className='text-primary h-12 py-4 text-base bg-primary/10 dark:bg-secondary/10 dark:text-secondary font-bold'
              asChild
            >
              <Link href={job.website}>Company Site</Link>
            </Button>
          </div>
        </div>

        <div className='bg-card rounded-md py-10 px-6'>
          <div className='flex flex-col sm:flex-row gap-12 mb-8 sm:items-center sm:justify-between'>
            <div className='flex flex-col gap-2'>
              <p className='flex items-baseline gap-3 text-muted'>
                <span>{job.postedAt}</span>
                <span className='w-1 h-1 rounded-full bg-muted'></span>
                <span>{job.contract}</span>
              </p>
              <h3 className='text-foreground text-md sm:text-lg font-bold'>{job.position}</h3>
              <h4 className='text-primary font-bold text-sm'>{job.location}</h4>
            </div>
            <Button
              className='bg-primary text-secondary h-12 py-4 px-6 text-base font-bold'
              asChild
            >
              <Link href={job.apply}>Apply Now</Link>
            </Button>
          </div>

          <div className='mb-10'>
            <p className='text-muted'>{job.description}</p>
          </div>

          <div className='mb-10'>
            <h2 className='text-foreground text-md font-bold mb-7'>Requirements</h2>
            <p className='text-muted mb-8'>{job.requirements.content}</p>
            <ul className='grid gap-2'>
              {job.requirements.items.map((item, index) => (
                <li
                  key={index}
                  className='relative pl-8 text-muted before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:absolute before:top-3 before:left-0'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-foreground text-md font-bold mb-7'>What You Will Do</h2>
            <p className='text-muted mb-8'>{job.role.content}</p>
            <ul className='grid gap-2 list-counter'>
              {job.role.items.map((item, index) => (
                <li
                  key={index}
                  className={`relative pl-8 text-muted before:text-primary before:inline-block before:absolute before:top-0 before:left-0 before:text-base before:font-bold`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <div className='sticky top-[100%] p-6 w-full bg-card text-center'>
        <div className='mx-auto md:flex md:justify-between md:max-w-md lg:max-w-[730px]'>
          <div className='hidden md:flex md:flex-col'>
            <h3 className='text-foreground text-md font-bold'>{job.position}</h3>
            <p className='text-left text-muted'>{job.company}</p>
          </div>
          <Button
            className='w-full max-w-[327px] md:w-[141px] h-12 text-base text-secondary font-bold'
            asChild
          >
            <Link href={job.apply}>Apply Now</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;
