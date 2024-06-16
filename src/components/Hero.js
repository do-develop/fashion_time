import React from 'react';
// import images
import HeroImage from '../img/woman_hero.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-9 mb-2'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* TEXT */}
      <div className='flex flex-col justify-center'>
        {/* PRE-TITLE */}
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-purple-500 mr-3'></div>For Trendsetters
        </div>
        {/* TITLE */}
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'> UNIQUE STYLE <br />
          <span className='font-semibold'> FASHION </span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'> Discover More </Link>
      </div>
      {/* IMAGE */}                      
      <div className='hidden lg:block'>
        <img src={HeroImage} alt='hero' className='h-[767px]' />
      </div>
    </div>

  </section>);
};

export default Hero;
