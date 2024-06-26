import CreationsItem from './CreationsItem';
import { FIRST_ROW_DATA, SECOND_ROW_DATA } from './creationsData';
const CreationsSection = () => {
  return (
    <section id='creations'>
      <div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
        <div className='flex justify-center mb-20 md:justify-between'>
          <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
            Our creations
          </h2>
          <button className='hidden btn md:block'>See all</button>
        </div>

        <div className='item-container'>
          {FIRST_ROW_DATA.map((item, index) => (
            <CreationsItem
              key={index}
              desktopImg={item.desktopImg}
              mobileImg={item.mobileImg}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>
        <div className='item-container mt-10'>
          {SECOND_ROW_DATA.map((item, index) => (
            <CreationsItem
              key={index}
              desktopImg={item.desktopImg}
              mobileImg={item.mobileImg}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>

        <div className='flex justify-center mt-10 md:hidden'>
          <button className='btn w-full md:hidden'>See all</button>
        </div>
      </div>
    </section>
  );
};

export default CreationsSection;
