import React, { useState, useEffect, useRef } from 'react';
import ScrollintoView from '../Functions';
import { GoDotFill } from 'react-icons/go';

function useTypingEffect(
  words,
  { typeSpeed = 100, deleteSpeed = 60, pause = 1500 } = {},
) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const delay = isDeleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }
      if (isDeleting && displayed === '') {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
        return;
      }
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1),
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return displayed;
}

const Header = () => {
  const [ref, isVisible] = ScrollintoView();
  const [badgesRef, isBadgesVisible] = ScrollintoView();
  const word = useTypingEffect([
    'Email Rentals',
    'Number Rentals',
    'VTU & Bills Payment',
    'Digital Accounts',
  ]);

  // const user = ['0xCE019A', '0x37C773', ' 0xCBE890', ' 0x55323C'];
  return (
    <>
      <header className='min-h-screen bg-white pt-20 lg:pt-24 pb-16 px-4 md:px-16'>
        <section
          className={`lg:flex justify-between gap-8  transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          ref={ref}
        >
          <div className='max-w-150 mx-auto'>
            <a
              href='#'
              className='py-3 px-3 h-16 md:h-12 md:w-120 border-green-500/20 hover:border-green-500/50 border rounded-full flex justify-between items-center text-xl bg-[var(--cl-white)] gap-2 hover:-translate-y-1 transition-transform duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.1)]  hover:shadow-[0_8px_20px_rgba(37,211,102,0.2)] mx-auto lg:mx-0'
            >
              <span className='w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center'>
                <i className='fa-brands fa-whatsapp text-white'></i>
              </span>
              <span className='text-[var(--dark)] text-center text-[1.1rem] md:text-[1.25rem] font-medium'>
                Join our Whatsapp for news and updates
              </span>
              <i className='fa-solid fa-arrow-right text-[#25D366] text-[0.8rem] md:text-xl'></i>
            </a>

            <h1 className='pt-6 text-[var(--dark)] text-[2.5rem]/12 font-bold md:text-6xl text-center lg:text-left'>
              Digital Solution to Early Markets
            </h1>
            <div className='flex items-center justify-center lg:justify-start'>
              <h1 className='py-3 text-[2.5rem]/12 font-bold md:text-6xl text-center lg:text-left bg-gradient-to-r from-[var(--light-pur)] to-[var(--accent)] bg-clip-text text-transparent '>
                {word}
                <span className='inline-block w-1 h-8 lg:h-12 bg-[var(--light-pur)] blinker'></span>
              </h1>
            </div>

            <p className='text-[var(--gray)] text-xl mt-6 text-center lg:text-left'>
              Ultimate Logs Marketplace: Discover, Verify, and Elevate Your
              Online Presence. Your trusted gateway to verified digital accounts
              and services, empowering your digital journey.
            </p>
            <div className='pt-6 flex gap-6 md:gap-5 justify-center lg:justify-start'>
              <button className='text-white py-4 px-7 bg-gradient-to-br from-[var(--light-pur)] to-[var(--dark-pur)] rounded-xl hover:-translate-y-1 shadow-[0px_8px_20px_rgba(141,55,226,0.2)] hover:shadow-[0px_8px_20px_rgba(141,55,226,0.4)]'>
                Browse Accounts <i className='fa-solid fa-arrow-right '></i>
              </button>
              <button className='bg-white py-4 px-6 text-[var(--dark)] border-2 border-[var(--gray)]/30 rounded-xl hover:-translate-y-0.5 hover:border-[var(--dark-pur)] text-[var(--dark)] hover:text-[var(--dark-pur)] font-medium'>
                Log In
              </button>
            </div>
          </div>
          <div className='mt-8 lg:mt-0 pt-8 lg:pt-32 shadow-[var(--shadow-md)] w-80 md:w-100 lg:w-120 mx-auto rounded-2xl lg:shadow-none'>
            <div className='w-80 md:w-120 lg:w-120'>
              <img
                src='/images/heroImg.png'
                alt='heroimg'
                className='w-80 md:w-100 lg:w-120'
              />
            </div>
          </div>
        </section>
        <div
          className={`md:flex gap-4 w-fit mx-auto lg:mx-0 transition-all duration-1000 ease-out ${isBadgesVisible ? 'translate-y-4' : 'translate-y-20'}`}
          ref={badgesRef}
        >
          <p className='bg-white p-3 rounded-full border-2 font-medium border-[var(--border)] shadow-[var(--shadow-sm)] max-w-50'>
            <i className='fa-solid fa-check-double text-[var(--dark-pur)] pr-4'></i>
            100% Verified Logins
          </p>
          <p className='bg-white p-3 rounded-full border-2 border-[var(--border)] shadow-[var(--shadow-sm)] max-w-60 mt-4 md:mt-0 font-medium'>
            <i className='fa-solid fa-bolt text-[var(--dark-pur)] pr-4 '></i>
            Instant Auto-Delivery
          </p>
        </div>
      </header>
      <section className='bg-[var(--dark)] py-4 lg:flex justify-between items-center gap-2 px-8 xl:px-16'>
        <div className='border-b-[0.02rem] lg:border-b-0 lg:border-r border-[var(--gray)] lg:min-w-90 xl:min-w-110 text-center md:text-left pb-3 lg:pb-0'>
          <p className='uppercase text-[var(--gray)] font-medium text-[0.9rem] text-center md:text-left'>
            <GoDotFill className='inline-block text-green-500 animate-pulse transition-all duration-300 mr-1' />
            Live Purchases
          </p>
          <h2 className='text-white'>
            User <span className='text-[var(--accent)]'>0xCE019A</span> just
            bought 14x Google Voice
          </h2>
        </div>
        <div className='md:flex gap-2 lg:gap-4 md:pt-4 lg:pt-0 justify-between lg:justify-between flex-1'>
          <div className='md:ml-2 p-4 md:p-0 text-center lg:text-left'>
            <h2 className='text-[var(--gray)] font-medium'>
              <i class='fa-solid fa-shield-halved text-[var(--accent)] inline-block text-2xl mr-2'></i>
              Escrow Protection on all Logs
            </h2>
          </div>
          <div className='p-4 md:p-0 text-center lg:text-left'>
            <h2 className='text-[var(--gray)] font-medium'>
              <i class='fa-solid fa-arrows-rotate text-[var(--accent)] inline-block text-2xl mr-2'></i>
              Valid logins guaranteed
            </h2>
          </div>
          <div className='p-4 md:p-0 text-center lg:text-left'>
            <h2 className='text-[var(--gray)] font-medium'>
              <i class='fa-solid fa-headset text-[var(--accent)] inline-block text-2xl mr-2'></i>
              Live help desk online
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
