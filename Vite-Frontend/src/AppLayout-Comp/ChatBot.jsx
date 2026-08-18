import React from 'react';
import { FaHeadset } from 'react-icons/fa6';

const ChatBot = () => {
  return (
    <>
      <section className='fixed bottom-15 md:bottom-25 right-4 '>
        <a
          href='https://t.me/ultimatecustomercare'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[var(--cl-white)] w-12 h-12 rounded-full flex justify-center items-center  cursor-pointer hover:-translate-y-2 hover:bg-[var(--cl-purple)] hover:*:text-[var(--cl-white)] transition-all duration-300 border-1 border-[var(--border)] hover:border-0 shadow-[0_4px_15px_rgba(0,0,0,0.15)]
          hover:shadow-[0_8px_25px_rgba(128,90,213,0.35)]'
        >
          <FaHeadset className='text-[var(--cl-purple)] text-lg' />
        </a>
      </section>
    </>
  );
};

export default ChatBot;
