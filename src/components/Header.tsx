'use client';

import {
  DesktopHeaderImage,
  Logo,
  MobileHeaderImage,
  MoonImage,
  SunImage,
  TabletHeaderImage,
} from '@/utils/image';
import { Switch } from './ui/switch';
import Image from 'next/image';
import SearchForm from './SearchForm';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header = () => {
  console.log(TabletHeaderImage);
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <header className='relative w-full h-[136px] pt-8 sm:h-40 sm:pt-10'>
      <div className='absolute inset-0 w-full h-full sm:rounded-bl-[100px] sm:overflow-hidden'>
        <picture>
          <source srcSet={DesktopHeaderImage.src} media='(min-width: 1025px)' />
          <source srcSet={TabletHeaderImage.src} media='(min-width: 640px)' />
          <Image src={MobileHeaderImage} fill className='object-cover' priority={true} alt='' />
        </picture>
      </div>
      <div className='flex justify-between items-center mx-auto max-w-[327px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
        <h1 className='relative w-28 h-8'>
          <Link href='/'>
            <Image className='object-contain' src={Logo} fill alt='devjobs' />
          </Link>
        </h1>
        <div className='flex gap-4 items-center'>
          <div className='relative w-[20px] h-[19px]'>
            <Image className='object-contain' src={SunImage} fill alt='' />
          </div>
          <Switch onCheckedChange={handleThemeChange} />
          <div className='relative w-[14px] h-[14px]'>
            <Image className='object-contain' src={MoonImage} fill alt='' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
