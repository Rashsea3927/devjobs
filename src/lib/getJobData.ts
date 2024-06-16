import JobsData from '@/data/data.json';
import { JobData } from '@/types';

export const getJobData = (id: string): JobData | undefined => {
  return JobsData.find((job) => job.id.toString() === id);
};
