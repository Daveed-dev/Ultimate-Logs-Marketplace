import React from 'react';
import { footerIcons } from '../utils/Data';

const Footer = () => {
  return (
    <>
      <footer className='bg-[--cl-white]  pt-4 px-4 md:px-12 border-t border-[var(--border)]'>
        <main className='md:flex md:flex-wrap md:gap-2 lg:gap-4 justify-between py-6 md:py-12'>
          <div className='py-2 md:py-0'>
            <img src='/images/logo.png' alt='Logo' className='h-10' />
            <p className='text-[var(--gray)] font-medium text-[0.875rem] max-w-70 mt-4'>
              The definitive marketplace for purchasing secure digital
              footprints, VPN logins, and enterprise communication accounts.
            </p>
            <div className='mt-4 flex gap-2'>
              {footerIcons.map((item, index) => {
                return (
                  <span
                    className='w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--light-gray)] transition-all duration-300 hover:bg-[var(--white)] border border-[var(--border)] hover:border-[var(--light-pur)] cursor-pointer'
                    key={index}
                  >
                    <i className={`${item.icon} text-[var(--gray)]`}></i>
                  </span>
                );
              })}
            </div>
          </div>
          <div className='md:flex md:flex-wrap justify-between gap-8 mt-2 md:mt-4 lg:mt-0 lg:gap-16'>
            <div className='flex flex-col items-start'>
              <h1 className='font-bold text-xl py-2 md:py-0'>Buy Logins</h1>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5  block transition-colors duration-300'
              >
                Buy Digital Accounts
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5  block transition-colors duration-300'
              >
                Buy Email Accounts
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                Buy VPN Logins
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                Buy Entertainment Logs
              </a>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='font-bold text-xl py-2 md:py-0'>Operations</h1>

              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 transition-colors duration-300'
              >
                Purchase History
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                API Documentation
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                Replacement Policy
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                Terms of Use
              </a>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='font-bold text-xl py-2 md:py-0'>Contact us</h1>

              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                <i className='fas fa-envelope mr-1.5'></i>
                ultimatelogsmarketplace@gmail.com
              </a>
              <a
                href='#'
                className='text-[var(--gray)] hover:text-[var(--dark-pur)] py-0.5 block transition-colors duration-300'
              >
                <i className='fa-brands fa-telegram mr-1.5'></i>Live Suport on
                Telegram
              </a>
            </div>
          </div>
        </main>
        <div className='border-t border-[var(--border)] py-4 flex justify-center items-center'>
          <p className='text-center text-[var(--gray)] text-[0.95rem]'>
            © {new Date().getFullYear()} Ultimate Logs Marketplace. All
            operations secured.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
