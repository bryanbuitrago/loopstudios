'use client';
import { useMenuContext } from '@/contexts/menuContext';
import Link from 'next/link';

const MobileMenu = () => {
  const { menuOpen } = useMenuContext();
  const showOrHide = menuOpen ? 'flex' : 'hidden';
  return (
    <div
      id='menu'
      className={`${showOrHide} flex-col absolute top-0 bottom-0 left-0 w-full min-h-screen 
                 pt-40 pl-[40%] space-y-3 text-lg text-white uppercase bg-black`}
    >
      <Link className='hover:text-pink-500' href='#'>
        About
      </Link>
      <Link className='hover:text-pink-500' href='#'>
        Careers
      </Link>
      <Link className='hover:text-pink-500' href='#'>
        Events
      </Link>
      <Link className='hover:text-pink-500' href='#'>
        Products
      </Link>
      <Link className='hover:text-pink-500' href='#'>
        Support
      </Link>
    </div>
  );
};

export default MobileMenu;
