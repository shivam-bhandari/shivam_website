import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/SHIVAM (3).png';
import Pdf from '/src/assets/Shivam_Bhandari_Resume.pdf'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[screen] flex justify-between items-center px-4 bg-[#f3f5f9] text-black-10'>
      <div>
        <a href='/'>
          <img src={Logo} alt='Logo Image' style={{ width: '80px' }} />
        </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:underline'>
          <a href={Pdf}
            target="_blank"
            rel="noreferrer" className='smooth'>
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
        }
      >
        {/* <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home'>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work'>
            Work
          </Link>
        </li> */}
        <li className='py-6 text-4xl'>
          {' '}
          <a href={Pdf}
            target="_blank"
            rel="noreferrer" className='smooth hover:underline'>
            Resume
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul className='pl-[1px] bg-transparent'>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full'
              href="https://www.linkedin.com/in/shivambha/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full'
              href="https://github.com/shivam-bhandari"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full'
              href="mailto:ssbhandari@ucdavis.edu"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;