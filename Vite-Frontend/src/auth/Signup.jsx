import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Signup';
  });
  return (
    <>
      <section className='w-full h-screen flex items-center justify-center'>
        <div>
          <h1>SingUP Page</h1>
          <Link
            to='/user/login'
            className='px-4 py-1.5 text-white bg-gradient-to-br from-[var(--light-pur)] to-[var(--dark-pur)] rounded-xl shadow-[0px_8px_20px_rgba(141,55,226,0.3)] hover:-translate-y-1 hover:shadow-[0px_8px_20px_rgba(141,55,226,0.6)] transition-transform duration-300'
          >
            <i className='fa-solid fa-right-to-bracket'></i> Login
          </Link>
        </div>
      </section>
    </>
  );
};

export default Signup;
