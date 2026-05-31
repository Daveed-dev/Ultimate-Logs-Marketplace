import React, { useState } from 'react';
import ScrollintoView from '../Functions';
import Icons from '../utils/Data';

const Accounts = () => {
  const [ref, setAnimation] = ScrollintoView();
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);
  const [hovered9, setHovered9] = useState(false);
  const [hovered10, setHovered10] = useState(false);
  const [hovered11, setHovered11] = useState(false);
  const [hovered12, setHovered12] = useState(false);
  const [hovered13, setHovered13] = useState(false);
  const [hovered14, setHovered14] = useState(false);
  const [hovered15, setHovered15] = useState(false);
  const [hovered16, setHovered16] = useState(false);
  const [hovered17, setHovered17] = useState(false);
  const [hovered18, setHovered18] = useState(false);

  return (
    <>
      <main className='pt-20 bg-[var(--light-gray)] min-h-screen '>
        <section className=' px-4 lg:px-16 '>
          <div
            className={` w-full  transition-all duration-1000 ease-in ${setAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            ref={ref}
          >
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl  text-[var(--dark)] text-center '>
              Buy Verified{' '}
              <span className='bg-gradient-to-r from-[var(--light-pur)] to-[var(--accent)] bg-clip-text text-transparent'>
                Account's & Logins
              </span>
            </h1>
            <p className='text-[var(--gray)]  lg:text-2xl text-xl text-center max-w-190 mx-auto pt-2 md:pt-4'>
              Purchase direct access to our strictly vetted inventory of social
              profiles, enterprise tools, and premium VPN networks.
            </p>
          </div>
          <div className='pt-8 md:pt-12 w-full md:flex md:flex-wrap md:justify-evenly lg:justify-start items-center gap-4'>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8  bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#e11d48] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-envelope-open-text text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Email Rentars
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase or rent verified, aged email accounts for your specific
                short-term or long-term project needs.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#059669] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered2
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered2
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-phone-volume text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Number Rentars
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Long-term and short-term phone number rentals for secure SMS
                verifications and dedicated communication.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered2 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#2563eb] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered3
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered3
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-file-invoice-dollar text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                VTU & Bill Payments
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Fast, secure, and automated Virtual Top-Up (VTU) for data,
                airtime, and utility bill payments.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  Coming Soon
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered3 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#7c3aed] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered4
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered4
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-users-gear text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Digital Accounts
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Premium access to a wide variety of vetted digital profiles,
                software licenses, and subscription accounts.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered4 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered5(true)}
              onMouseLeave={() => setHovered5(false)}
            >
              <div
                className='h-17 w-17 rounded-xl flex justify-center items-center mb-2'
                style={{
                  background:
                    'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  boxShadow: hovered5
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered5
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-instagram text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy Instagram PVA
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase high-trust, phone-verified profiles with aged creation
                dates. Passwords and recovery info included.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered6(true)}
              onMouseLeave={() => setHovered6(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[var(--dark)] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered6
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered6
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-twitter text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy X Accounts
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase warmed-up X (formerly Twitter) accounts. Includes login
                credentials and associated email.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered6 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered7(true)}
              onMouseLeave={() => setHovered7(false)}
            >
              <div
                className='h-17 w-17 rounded-xl  flex justify-center items-center mb-2'
                style={{
                  background:
                    'linear-gradient(135deg, #00f2fe 0%, #000 50%, #ff0050 100%)',
                  boxShadow: hovered7
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered7
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-tiktok text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy TikTok Accounts
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase region-locked accounts eligible for Creator Fund. Full
                login credentials provided instantly.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  Restocking
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered7 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered8(true)}
              onMouseLeave={() => setHovered8(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#1877F2] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered8
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered8
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-facebook-f text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy Facebook Logs
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase aged FB profiles with established Business Managers.
                Ready for immediate ad deployment.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered8 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered9(true)}
              onMouseLeave={() => setHovered9(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#0F9D58] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered9
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered9
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-google text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy Google Voice
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase verified US numbers attached to clean Gmail accounts.
                Perfect for SMS verifications.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  High Demand
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered9 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered10(true)}
              onMouseLeave={() => setHovered10(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#0078D4] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered10
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered10
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-microsoft text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy Outlook Logs
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase bulk-created, aged Outlook and Hotmail aliases with
                POP3/IMAP enabled.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered10 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered11(true)}
              onMouseLeave={() => setHovered11(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#2BCE71] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered11
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered11
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-comment-dots text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy TextPlus Lines
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase dedicated virtual numbers and login credentials for
                temporary communication apps.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered11 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered12(true)}
              onMouseLeave={() => setHovered12(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#4687FF] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered12
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered12
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-globe text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy NordVPN Logins
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase secure tunneling accounts with extended subscriptions.
                Instant login delivery.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered12 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered13(true)}
              onMouseLeave={() => setHovered13(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#FFCC00] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered13
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered13
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-ghost text-3xl text-[var(--dark)] text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy CyberGhost VPN
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase streaming-optimized VPN credentials with massive
                bandwidth allocation.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered13 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered14(true)}
              onMouseLeave={() => setHovered14(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#1f2937] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered14
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered14
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-wind text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy WindScribe Pro
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase advanced firewall configuration profiles featuring
                unlimited data limits.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered14 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered15(true)}
              onMouseLeave={() => setHovered15(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#68B04D] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered15
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered15
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-shield-virus text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy AdGuard VPN
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase DNS-level adblocking combined with encrypted routing
                logs.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered15 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered16(true)}
              onMouseLeave={() => setHovered16(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#F2B50F] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered16
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered16
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-solid fa-paw text-3xl text-[var(--dark)] text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy TunnelBear Logs
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase easy-to-deploy VPN accounts for quick geographical
                spoofing and bypasses.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  Low Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered16 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered17(true)}
              onMouseLeave={() => setHovered17(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#FF4500] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered17
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered17
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-reddit-alien text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy Reddit Aged
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase high-karma account logins capable of bypassing
                subreddit filters.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered17 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
            <div
              className='md:w-80 lg:w-72 md:h-95 mx-4 md:mx-0 mb-8 bg-[var(--cl-white)] border rounded-3xl border-[var(--border)] transition-all duration-500 hover:shadow-md hover:shadow-[var(--shadow-md)] hover:border-[var(--dark-pur)] px-4 py-8'
              onMouseEnter={() => setHovered18(true)}
              onMouseLeave={() => setHovered18(false)}
            >
              <div
                className='h-17 w-17 rounded-xl bg-[#1DB954] flex justify-center items-center mb-2'
                style={{
                  boxShadow: hovered18
                    ? '0px 20px 40px transparent'
                    : 'var(--shadow-3d)',
                  transform: hovered18
                    ? 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(40px) scale(1.015)'
                    : 'perspective(500px) rotateX(15deg) rotateY(-10deg) translateZ(0px) scale(1)',
                  transition:
                    'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <i className='fa-brands fa-spotify text-3xl text-white text-center mx-auto'></i>
              </div>
              <h1 className='font-bold py-1.5 text-[1.5rem] text-[var(--dark)]'>
                Buy Spotify Premium
              </h1>
              <p className='text-[var(--gray)] text-xl h-30'>
                Purchase family plan upgrades and individual premium keys for
                audio streaming.
              </p>
              <div className='py-2.5 border-b-[0.15rem] border-dotted border-[var(--gray)]'></div>
              <div className='flex justify-between items-center pt-4'>
                <p className='text-[var(--dark-pur)] bg-[var(--white)] font-bold py-1.5 px-2 rounded-full'>
                  In Stock
                </p>
                <p className='text-[var(--dark-pur)] font-medium text-[1.2rem]'>
                  Buy Now
                  <i
                    className={`fa-solid fa-chevron-right text-[1rem] transition-all duration-200 ${hovered18 ? 'ml-1.5' : ''}`}
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ICONS */}
        <section className='h-30 w-full border-[0.1rem] border-[var(--border)] flex items-center'>
          <div className='animate-marquee flex'>
            {Icons.map((item, index) => {
              return (
                <span
                  className='transition-transform duration-300 hover:scale-[1.15]  mx-3 md:mx-7'
                  key={index}
                >
                  <i
                    className={`${item.icon} text-[2.35rem] text-[var(--icons)] hover:text-[var(--dark)] `}
                  ></i>
                </span>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Accounts;
