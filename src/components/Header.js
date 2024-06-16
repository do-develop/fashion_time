import React, { useContext, useState, useEffect } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag } from 'react-icons/bs';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../img/logo.png';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // EVENT LISTENER
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
  <header className={`${isActive? 'bg-white py-4 shadow-md':'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
      {/* LOGO */}
      <Link to={'/'}>
        <div>
          <img className='w-[70px]'src={Logo} alt='' />
        </div>
      </Link>
      <div></div>
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-3xl'/>
        <div className='bg-purple-500 absolute -right-2 -bottom-2 text-[12px] w-[19px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
    
  </header>
  );
};

export default Header;
