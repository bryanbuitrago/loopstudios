import Image from 'next/image';
const CreationsItem = ({ desktopImg, mobileImg, alt, title }) => {
  return (
    <div className='group item-loopstudios'>
      {/* Desktop Image  */}
      <Image
        src={desktopImg}
        alt={alt}
        width={500}
        height={500}
        className='hidden w-full duration-200 md:block group-hover:scale-110'
      />
      {/* Mobile Image  */}
      <Image
        src={mobileImg}
        alt={alt}
        width={500}
        height={500}
        className='w-full md:hidden'
      />
      {/*  Item Gradient */}
      <div className='item-gradient-loopstudios'>
        <h5 className='h5-loopstudios'>{title}</h5>
      </div>
    </div>
  );
};

export default CreationsItem;
