import Image from 'next/image';

const FooterSocialIcon = ({ imgSrc }) => {
  return (
    <div className='h-8 group'>
      <Image
        src={imgSrc}
        alt='Social Icon'
        width={24}
        height={24}
        className='h-6'
      />
    </div>
  );
};

export default FooterSocialIcon;
