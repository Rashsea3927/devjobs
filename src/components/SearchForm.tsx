'use client';

import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from './ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';
import { IconFilter, IconLocation, IconSearch } from '@/utils/image';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import FilterIcon from './FilterIcon';
import SearchIcon from './SearchIcon';
import { useWindowSize } from '@/utils/useWindowSize';

const formSchema = z.object({
  searchText: z.string().min(0).max(30),
  location: z.string().min(0).max(30),
  isFullTimeOnly: z.boolean().default(false).optional(),
});

const SearchForm = () => {
  const width = useWindowSize();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchText: '',
      location: '',
      isFullTimeOnly: false,
    },
  });

  const placeholderText =
    width >= 1024 ? 'Filter by title, companies, expertise…' : 'Filter by title…';

  const fullTimeText = width >= 1024 ? 'Full Time Only' : 'Full Time';

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className='absolute top-24 sm:top-[120px] left-[50%] -translate-x-[50%] w-full max-w-[327px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-card flex items-center gap-6 h-20 md:py-0 pl-6 pr-4 rounded-md'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='searchText'
          render={() => (
            <FormItem className='w-full'>
              <FormControl>
                <div className='flex md:grid md:grid-cols-[0.9fr_1fr_0.6fr_0.3fr] lg:grid-cols-[1fr_0.8fr_0.5fr_auto] justify-between md:justify-start items-center md:items-start md:gap-5'>
                  <div className='md:grid md:grid-cols-[24px_1fr] md:items-center md:gap-4 md:pr-5 md:py-4 md:border-r-[1px] md:grow-[0.8] border-muted/20'>
                    <SearchIcon className='hidden md:block fill-primary' />
                    <Input
                      className='border-none text-base p-0'
                      placeholder={placeholderText}
                      {...form.register('searchText')}
                    />
                  </div>
                  <div className='hidden md:grid md:border-r-[1px] md:grow-1 border-muted/20 md:grid-cols-[17px_1fr] md:items-center md:gap-4 md:pr-5 md:py-4'>
                    <Label className='relative min-w-[17px] h-6' htmlFor='location'>
                      <Image src={IconLocation} fill alt='' />
                    </Label>
                    <Input
                      id='location'
                      className='border-none text-base p-0'
                      placeholder='Filter by location...'
                      {...form.register('location')}
                    />
                  </div>
                  <div className='hidden h-20 md:flex md:items-center md:gap-4 md:py-4 md:grow-[0.6]'>
                    <Checkbox
                      className='w-6 h-6 border-none bg-foreground/10'
                      id='fulltime'
                      checked={form.watch('isFullTimeOnly')}
                      onCheckedChange={(checked: boolean) =>
                        form.setValue('isFullTimeOnly', checked)
                      }
                      {...form.register('isFullTimeOnly')}
                    />
                    <Label className='font-bold text-base' htmlFor='fulltime'>
                      {fullTimeText}
                    </Label>
                  </div>
                  <div className='hidden md:h-20 md:flex items-center md:py-4 md:grow-[0.4]'>
                    <Button type='submit' className='text-base font-bold text-secondary'>
                      Search
                    </Button>
                  </div>

                  <div className='flex items-center gap-4 md:hidden'>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className='relative w-5 h-5 object-contain p-0 bg-transparent hover:bg-transparent'>
                          <FilterIcon className='fill-[#6E8098] dark:fill-white' />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='border-none px-0 py-6'>
                        <div className='flex items-center gap-4 px-6 pb-6 border-b border-solid border-muted/20'>
                          <Label className='relative min-w-[17px] h-6' htmlFor='location'>
                            <Image src={IconLocation} fill alt='' />
                          </Label>
                          <Input
                            id='location'
                            className='border-none text-base p-0'
                            placeholder='Filter by location...'
                            {...form.register('location')}
                          />
                        </div>
                        <div className='px-6 pt-6'>
                          <div className='flex items-center gap-4 mb-6'>
                            <Checkbox
                              className='w-6 h-6 border-none bg-foreground/10'
                              id='fulltime'
                              checked={form.watch('isFullTimeOnly')}
                              onCheckedChange={(checked: boolean) =>
                                form.setValue('isFullTimeOnly', checked)
                              }
                              {...form.register('isFullTimeOnly')}
                            />
                            <Label className='font-bold text-base' htmlFor='fulltime'>
                              Full Time Only
                            </Label>
                          </div>
                          <Button
                            type='button'
                            className='w-full text-secondary text-base font-bold'
                            onClick={() => form.handleSubmit(onSubmit)()}
                          >
                            Search
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button type='submit' className='w-12 h-12 p-0'>
                      <Image src={IconSearch} width={20} height={20} alt='Search' />
                    </Button>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;
