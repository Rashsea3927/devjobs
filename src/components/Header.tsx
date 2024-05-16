import { MobileHeaderImage } from '@/utils/image';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='relative'>
      <picture>
        <Image src={MobileHeaderImage} width={100} height={50} alt='' />
      </picture>
    </header>
  );
};

export default Header;
