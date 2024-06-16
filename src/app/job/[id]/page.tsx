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
      <main className='container mx-auto px-6 mb-16'>
        <div className='relative mb-2 pt-[50px] pb-8 px-6 bg-card rounded-md -translate-y-4'>
          <div
            className='absolute w-[50px] h-[50px] -top-[25px] left-1/2 -translate-x-1/2 grid place-content-center rounded-[15px]'
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image className='w-auto h-auto' src={job.logo} width={0} height={0} alt='' />
          </div>
          <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center'>
              <h2 className='text-foreground text-md font-bold'>{job.company}</h2>
              <p className='text-muted'>{job.company.toLowerCase()}.com</p>
            </div>
            <Button className='text-primary h-12 text-base bg-primary/10 font-bold' asChild>
              <Link href={job.website}>Company Site</Link>
            </Button>
          </div>
        </div>

        <div className='bg-card rounded-md py-10 px-6'>
          <div className='flex flex-col gap-12 mb-8'>
            <div className='flex flex-col gap-2'>
              <p className='flex items-baseline gap-3 text-muted'>
                <span>{job.postedAt}</span>
                <span className='w-1 h-1 rounded-full bg-muted'></span>
                <span>{job.contract}</span>
              </p>
              <h3 className='text-foreground text-md font-bold'>{job.position}</h3>
              <h4 className='text-primary font-bold text-sm'>{job.location}</h4>
            </div>
            <Button className='bg-primary text-secondary h-12 text-base font-bold' asChild>
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
      <div className='sticky top-[100%] p-6 w-full bg-card'>
        <Button className='w-full h-12 text-base text-secondary font-bold' asChild>
          <Link href={job.apply}>Apply Now</Link>
        </Button>
      </div>
    </>
  );
};

export default JobDetailPage;
