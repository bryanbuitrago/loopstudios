'use client';
import { useMenuContext } from '@/contexts/menuContext';
import Image from 'next/image';
import MenuItem from './MenuItem';
import HamburgerButton from './HamburgerButton';

const NavBar = () => {
  const { onClickToggleMenu } = useMenuContext();

  return (
    <nav className='flex items-center justify-between font-bold text-white'>
      {/* Logo */}
      <Image
        src='/images/logo.svg'
        alt='Loopstudios Logo'
        width={150}
        height={150}
      />
      {/* Menu */}
      <div className='hidden h-10 md:flex md:space-x-8'>
        <MenuItem title='About' />
        <MenuItem title='Careers' />
        <MenuItem title='Events' />
        <MenuItem title='Products' />
        <MenuItem title='Support' />
      </div>
      <HamburgerButton onClickToggleMenu={onClickToggleMenu} />
    </nav>
  );
};

export default NavBar;
