import Link from 'next/link';

const FooterMenuItem = ({ title }) => {
  return (
    <div className='h-10 group'>
      <Link href='#'>{title}</Link>
      <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
    </div>
  );
};

export default FooterMenuItem;
