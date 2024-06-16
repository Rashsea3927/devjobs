'use client';

import { Logo, MobileHeaderImage, MoonImage, SunImage } from '@/utils/image';
import { Switch } from './ui/switch';
import Image from 'next/image';
import SearchForm from './SearchForm';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header = () => {
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <header className='relative h-[136px] pt-8 px-6'>
      <Image src={MobileHeaderImage} fill priority={true} alt='' />
      <div className='flex justify-between items-center'>
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
