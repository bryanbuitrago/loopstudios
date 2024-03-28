'use client';
import { useMenuContext } from '@/contexts/menuContext';

const HamburgerButton = () => {
  const { menuOpen, onClickToggleMenu } = useMenuContext();
  const btnClassName = menuOpen ? 'open' : '';

  // Correct the class names to match the CSS definitions
  const topLineAnimate = menuOpen ? 'animate-hamburger-top' : '';
  const middleLineHide = menuOpen ? 'hide-hamburger-middle' : '';
  const bottomLineAnimate = menuOpen ? 'animate-hamburger-bottom' : '';

  return (
    <div className='md:hidden'>
      <button
        onClick={onClickToggleMenu}
        id='menu-btn'
        className={`${btnClassName} z-40 block hamburger md:hidden focus:outline-none`}
        type='button'
      >
        <span className={`${topLineAnimate} hamburger-top`}></span>
        <span className={`${middleLineHide} hamburger-middle`}></span>
        <span className={`${bottomLineAnimate} hamburger-bottom`}></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
