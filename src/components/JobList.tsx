'use client';

import JobsData from '@/data/data.json';
import { JobData } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const initialJobsList = 12;
const incrementInitialJobsList = 4;

const JobList = () => {
  const [displayJobs, setDisplayJobs] = useState<number>(initialJobsList);
  const [jobs, setJobs] = useState<JobData[]>(JobsData);

  const loadMore = () => {
    setDisplayJobs(displayJobs + incrementInitialJobsList);
  };

  return (
    <section className='pb-16'>
      <div className='grid gap-[50px] sm:grid-cols-2 sm:gap-x-3 lg:gap-x-[30px] lg:gap-y-[65px] xl:grid-cols-3'>
        {jobs.slice(0, displayJobs).map((job) => {
          return (
            <article key={job.id} className='relative bg-card'>
              <Link href={`/job/${job.id}`} className='h-full px-8 pt-[48px] pb-8 block'>
                <div
                  className='absolute rounded-[15px] w-[50px] h-[50px] -top-[25px]'
                  style={{ backgroundColor: job.logoBackground }}
                >
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={0}
                    height={0}
                    className='absolute w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  />
                </div>
                <div className='grid gap-10 h-full'>
                  <div className='flex flex-col gap-1'>
                    <p className='flex gap-3 items-baseline text-muted'>
                      <span>{job.postedAt}</span>
                      <span className='w-1 h-1 rounded-full bg-muted'></span>
                      <span>{job.contract}</span>
                    </p>
                    <h2 className='text-foreground text-md font-bold'>{job.position}</h2>
                    <p className='text-muted'>{job.company}</p>
                  </div>
                  <h3 className='text-primary font-bold text-sm self-end'>{job.location}</h3>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      {displayJobs < jobs.length && (
        <div className='flex justify-center'>
          <Button
            onClick={loadMore}
            className='flex items-center justify-center mt-8 w-[140px] h-12 bg-primary text-white font-bold rounded-md'
          >
            Load more
          </Button>
        </div>
      )}
    </section>
  );
};

export default JobList;
