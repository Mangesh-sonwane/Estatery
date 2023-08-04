import Logo from '../assets/logo-estatery.png';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className='py-5 mb-4 border-b bg-primary shadow-md'>
      <div className='container lg:mx-auto px-4 flex justify-between items-center'>
        <div className='flex items-center space-x-12 font-medium mr-4'>
          <div className='mr-8'>
            <Link to='/'>
              <img width='110px' src={Logo} alt='' />
            </Link>
          </div>
          <Link
            className='bg-bagblue text-blue ml-16 px-4 py-2 tab-link-selected transition'
            to='/'
          >
            Rent
          </Link>
          <Link className='' to='/'>
            Buy
          </Link>
          <Link className='' to='/'>
            Sell
          </Link>
          <Link className='flex' to='/'>
            Manage property
            <BiChevronDown size={25} />
          </Link>
          <Link className='flex' to='/'>
            Resources
            <BiChevronDown size={25} />
          </Link>
        </div>
        <div className='flex items-center gap-4 font-medium text-base'>
          <Link
            className='border text-blue border-blue  px-4 py-2 rounded-lg'
            to='/'
          >
            Login
          </Link>
          <Link className='bg-blue text-white px-4 py-2 rounded-lg' to='/'>
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
