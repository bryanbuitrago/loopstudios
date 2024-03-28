import { MenuProvider } from '@/contexts/menuContext';
import MobileMenu from './MobileMenu';
import NavBar from './NavBar';

const HeroSection = () => {
  return (
    <MenuProvider>
      <section id='hero'>
        <div className='container max-w-6xl mx-auto px-6 py-12'>
          <NavBar />
          {/* show only mobile */}
          <MobileMenu />
          <div
            className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white 
                     uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'
          >
            Impressive Experiences that deliver
          </div>
        </div>
      </section>
    </MenuProvider>
  );
};

export default HeroSection;
