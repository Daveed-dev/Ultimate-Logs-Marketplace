import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`h-18 flex justify-between bg-white/90 backdrop-blur-[12px] border-b border-black/4 items-center px-4 lg:px-20 py-2 z-100 fixed top-0 left-0 w-full transition-transform duration-300 ${isFixed ? 'shadow-sm ' : ''}`}
    >
      <img src='/images/logo.png' alt='Logo' className='h-10 lg:h-11' />
      <button className='px-4 py-1.5 text-white bg-gradient-to-br from-[var(--light-pur)] to-[var(--dark-pur)] rounded-xl shadow-[0px_8px_20px_rgba(141,55,226,0.3)] hover:-translate-y-1 hover:shadow-[0px_8px_20px_rgba(141,55,226,0.6)] transition-transform duration-300'>
        <i className='fa-solid fa-right-to-bracket'></i> Sign In
      </button>
    </nav>
  );
};

export default Navbar;
