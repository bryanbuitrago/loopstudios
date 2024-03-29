import Image from 'next/image';
import FooterMenuItem from './FooterMenuItem';
import FooterSocialIcon from './FooterSocialIcon';
import { MENU_ITEMS_DATA, SOCIAL_ICONS_DATA } from './footerData';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container max-w-6xl py-10 mx-auto'>
        <div
          className='flex flex-col items-center mb-8 space-y-6 md:flex-row 
                     md:space-y-0 md:justify-between md:items-start'
        >
          <div
            className='flex flex-col items-center space-y-8 
                       md:items-start md:space-y-4'
          >
            <div className='h-8'>
              <Image
                src='/images/logo.svg'
                alt='Loopstudios Logo'
                width={100}
                height={20}
                className='w-44 md:ml-3'
              />
            </div>
            <div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
              {MENU_ITEMS_DATA.map((title, index) => (
                <FooterMenuItem key={index} title={title} />
              ))}
            </div>
          </div>
          <div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
            <div className='flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0'>
              {SOCIAL_ICONS_DATA.map((icon, index) => (
                <FooterSocialIcon
                  key={index}
                  imgSrc={icon.src}
                  alt={icon.alt}
                />
              ))}
            </div>
            <div className='font-bold'>
              &copy; 2021 Loopstudios. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
