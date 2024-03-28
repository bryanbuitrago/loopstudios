import Link from 'next/link';

const MenuItem = ({ title }) => {
  return (
    <div className='group'>
      <Link href='#'>{title}</Link>
      <div className='mx-2 group-hover:border-b group-hover:border-blue-50 duration-100'></div>
    </div>
  );
};

export default MenuItem;
