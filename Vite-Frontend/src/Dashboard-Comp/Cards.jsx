import React, { useState } from 'react';

const Cards = () => {
  const referalCode = 'DEVDEV';
  const [copy, setCopy] = useState(null);

  const handleCopy = async (type) => {
    try {
      await navigator.clipboard.writeText(referalCode);

      setCopy(type);

      setTimeout(() => {
        setCopy(false);
      }, 3000);
    } catch {}
  };

  return (
    <>
      <div className='w-full flex flex-col md:flex-row gap-6 md:grid md:grid-cols-2 xl:grid-cols-3 justify-center pt-6 md:pt-8'>
        {/* CARD */}
        <div className='w-full bg-[var(--white)] border-1 border-[var(--light-pur)] h-fit md:h-95 rounded-3xl p-4 flex flex-col-reverse  gap-0.5  md:grid md:grid-cols-[1fr_auto] items-center md:gap-2'>
          <div className='text-center gap-2 flex flex-col'>
            <div className='md:text-left text-center'>
              <h1 className='text-lg lg:text-[1.35rem] text-[var(--cl-purple)] font-bold '>
                Communication Tools Hub
              </h1>
              <p className='text-[0.95rem] lg:text-[1.1rem] text-[var(--gray)]/80 font-medium text-center md:text-left'>
                Access reliable numbers and email tools for seamless
                communication and account set up
              </p>
            </div>
            <div className='flex flex-col gap-2.5 w-full'>
              <div className='flex items-center gap-4 w-full md:gap-2 '>
                <a
                  href='#'
                  className='text-[var(--cl-white)] bg-[var(--light-pur)] hover:bg-[var(--cl-purple)] p-2 flex flex-col rounded-xl items-center justify-center transition-all duration-300 hover:-translate-y-0.5 flex-1'
                >
                  <i className='fa-solid fa-phone'></i>
                  <p>Buy Numbers</p>
                </a>
                <a
                  href='#'
                  className='text-[var(--cl-white)] bg-[var(--light-pur)] hover:bg-[var(--cl-purple)] p-2 flex flex-col rounded-xl items-center justify-center transition-all duration-300 hover:-translate-y-0.5 flex-1 '
                >
                  <i className='fa-solid fa-envelope'></i>
                  <p>Email Access</p>
                </a>
              </div>
              <div className='w-full'>
                <a
                  href=''
                  className='flex items-center justify-between text-[var(--cl-white)] bg-[var(--light-pur)] hover:bg-[var(--cl-purple)] p-2 transition-all duration-300 hover:-translate-y-0.5 rounded-xl'
                >
                  <i className='fa-solid fa-clock'></i>
                  <p>Manage Services</p>
                  <i className='fa-solid fa-chevron-right'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-22 rounded-2xl'>
            <svg
              width='80'
              height='75'
              viewBox='0 0 100 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='50' cy='50' r='42' fill='var(--cl-white)'></circle>
              <path
                d='M25 35C25 29.4772 29.4772 25 35 25H65C70.5228 25 75 29.4772 75 35V45H25V35Z'
                fill='var(--light-pur)'
              ></path>
              <path
                d='M25 45H75V65C75 70.5228 70.5228 75 65 75H35C29.4772 75 25 70.5228 25 65V45Z'
                fill='var(--dark-pur)'
              ></path>
              <circle cx='33' cy='35' r='3' fill='var(--cl-white)'></circle>
              <circle cx='42' cy='35' r='3' fill='var(--cl-white)'></circle>
              <circle cx='67' cy='35' r='3' fill='var(--cl-white)'>
                <animate
                  attributeName='opacity'
                  values='1;0.5;1'
                  dur='2s'
                  repeatCount='indefinite'
                ></animate>
              </circle>
              <rect
                x='35'
                y='55'
                width='30'
                height='4'
                rx='2'
                fill='var(--cl-white)'
              ></rect>
              <rect
                x='35'
                y='64'
                width='20'
                height='4'
                rx='2'
                fill='var(--cl-white)'
              ></rect>
              <circle
                cx='80'
                cy='25'
                r='8'
                fill='var(--accent)'
                opacity='0.6'
              ></circle>
              <path
                d='M80 22L80 28M77 25L83 25'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
              ></path>
            </svg>
          </div>
        </div>
        {/* End of  CARD */}
        {/* CARD */}
        <div className='w-full bg-gradient-to-b from-[var(--cl-white)] to-[var(--white)]/50 border-1 border-[var(--light-pur)] h-fit md:h-95 rounded-3xl p-4 flex flex-col-reverse  gap-0.5 md:grid sm:grid-cols-[1fr_auto] items-center md:gap-2'>
          <div className='text-center md:text-left gap-2 flex flex-col'>
            <h1 className='text-lg lg:text-[1.35rem] text-[var(--cl-purple)] font-bold'>
              Social Media Marketplace
            </h1>
            <p className='text-[0.95rem] lg:text-[1.1rem] text-[var(--gray)]/80 font-medium text-center md:text-left'>
              Access premium verified accounts for your digital need
            </p>
            <div className='flex flex-col gap-2.5 w-full'>
              <div className='w-full'>
                <a
                  href=''
                  className='flex items-center justify-center text-[var(--cl-white)] bg-[var(--light-pur)] hover:bg-[var(--cl-purple)] p-2 transition-all duration-300 hover:-translate-y-0.5 rounded-xl'
                >
                  <p>Explore Marketplace</p>
                </a>
              </div>
            </div>
          </div>
          <div className='w-22 bg-[var(--cl-white)] rounded-2xl shadow'>
            <img src='/images/acct.png' alt='Account Image' />
          </div>
        </div>
        {/* End of  CARD */}
        {/* CARD */}
        <div className='w-full bg-[var(--white)] border-1 border-[var(--light-pur)] h-fit md:h-95 rounded-3xl p-4 flex flex-col-reverse  gap-0.5  md:grid md:grid-cols-[1fr_auto] items-center md:gap-2'>
          <div className='text-center gap-2.5 flex flex-col'>
            <div className='text-center md:text-start'>
              <h1 className='text-lg lg:text-[1.35rem] text-[var(--cl-purple)] font-bold'>
                Bill Payment
              </h1>
              <p className='text-[0.95rem] lg:text-[1.1rem] text-[var(--gray)]/80 font-medium'>
                Airtime, data, cable TV and electricity bills — all in one
                place.
              </p>
            </div>
            <div className='flex flex-wrap gap-1.5 justify-center  md:justify-normal'>
              <p className='p-1 bg-[var(--cl-white)] font-bold text-[var(--light-pur)] text-sm flex gap-1 items-center justify-center rounded-lg border-1 border-[var(--border)] cursor-text'>
                <i className='fa-solid fa-mobile-screen text-[var(--accent)]'></i>{' '}
                Artime
              </p>
              <p className='p-1 bg-[var(--cl-white)] font-bold text-[var(--light-pur)] text-sm flex gap-1 items-center justify-center rounded-lg border-1 border-[var(--border)] cursor-text'>
                <i className='fa-solid fa-wifi text-[var(--accent)]'></i> Wifi
              </p>
              <p className='p-1 bg-[var(--cl-white)] font-bold text-[var(--light-pur)] text-sm flex gap-1 items-center justify-center rounded-lg border-1 border-[var(--border)] cursor-text'>
                <i className='fa-solid fa-tv text-[var(--accent)]'></i> Cable TV
              </p>
              <p className='p-1 bg-[var(--cl-white)] font-bold text-[var(--light-pur)] text-sm flex gap-1 items-center justify-center rounded-lg border-1 border-[var(--border)] cursor-text'>
                <i className='fa-solid fa-bolt text-[var(--accent)]'></i>{' '}
                Electricity
              </p>
            </div>
            <div className='w-full'>
              <a
                href=''
                className='flex items-center justify-center text-[var(--cl-white)] bg-[var(--light-pur)] hover:bg-[var(--cl-purple)] p-2 transition-all duration-300 hover:-translate-y-0.5 rounded-xl'
              >
                <p>Pay Bills</p>
              </a>
            </div>
          </div>
          <div className='md:w-25'>
            <svg
              width='85'
              height='85'
              viewBox='0 0 100 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='50' cy='50' r='42' fill='var(--white)'></circle>
              <path
                d='M30 30H70C71.6569 30 73 31.3431 73 33V40H27V33C27 31.3431 28.3431 30 30 30Z'
                fill='var(--dark-pur)'
              ></path>
              <path
                d='M27 40H73V67C73 68.6569 71.6569 70 70 70H30C28.3431 70 27 68.6569 27 67V40Z'
                fill='var(--cl-purple)'
              ></path>
              <rect
                x='35'
                y='50'
                width='30'
                height='8'
                rx='2'
                fill='white'
                opacity='0.9'
              ></rect>
              <rect
                x='35'
                y='62'
                width='20'
                height='4'
                rx='2'
                fill='white'
                opacity='0.6'
              ></rect>
              <path
                d='M73 45H82C83.1046 45 84 45.8954 84 47V53C84 54.1046 83.1046 55 82 55H73V45Z'
                fill='var(--accent)'
              ></path>
              <circle cx='78.5' cy='50' r='1.5' fill='white'></circle>
              <path
                d='M25 25L30 30'
                stroke='var(--accent)'
                stroke-width='3'
                stroke-linecap='round'
              ></path>
              <path
                d='M25 35L30 30'
                stroke='var(--accent)'
                stroke-width='3'
                stroke-linecap='round'
              ></path>
            </svg>
          </div>
        </div>
        {/* End of  CARD */}
        {/* CARD */}
        <div className='w-full bg-[var(--white)] border-1 border-[var(--light-pur)] h-fit md:h-95 xl:h-fit rounded-3xl p-4 flex flex-col-reverse  gap-0.5 md:grid md:grid-cols-[1fr_auto] items-center md:gap-2'>
          <div className='text-center gap-2.5 flex flex-col'>
            <div className='flex flex-col gap-2'>
              <div className='text-center md:text-left'>
                <h1 className='text-lg lg:text-[1.35rem] text-[var(--cl-purple)] font-bold'>
                  Referals
                </h1>
                <p className='text-[0.95rem] lg:text-[1.1rem] text-[var(--gray)]/80 font-medium'>
                  Share your link with friends and earn rewards.
                </p>
              </div>

              <div className='w-full'>
                <span
                  className={`flex items-center justify-between text-[var(--cl-purple)]  hover:bg-[var(--cl-white)] p-2 transition-all duration-300 hover:translate-x-1 rounded-xl border-1 border-dashed border-[var(--cl-purple)] font-bold cursor-pointer ${copy === 'icon' ? 'translate-x-1 bg-[var(--cl-white)]' : 'bg-transparent'}`}
                  onClick={() => handleCopy('icon')}
                >
                  <p className='pl-2'>{referalCode}</p>

                  <i
                    className={`fa-solid ${copy === 'icon' ? 'fa-check' : 'fa-copy'}`}
                  ></i>
                </span>
              </div>
              <div className='w-full'>
                <span
                  className={`flex items-center justify-center text-[var(--cl-white)]  hover:bg-[var(--cl-purple)] p-2 transition-all duration-300  rounded-xl cursor-pointer ${copy === 'text' ? 'bg-[var(--cl-purple)]' : 'bg-[var(--light-pur)]'} `}
                  onClick={() => handleCopy('text')}
                >
                  <p>{copy === 'text' ? 'Link Copied!' : 'Copy Link'}</p>
                </span>
              </div>
            </div>
          </div>
          <div className='md:w-25'>
            <svg
              width='70'
              height='75'
              viewBox='0 0 100 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='50' cy='50' r='42' fill='var(--cl-white)'></circle>
              <path d='M30 45H70V80H30V45Z' fill='var(--cl-purple)'></path>
              <rect
                x='45'
                y='45'
                width='10'
                height='35'
                fill='var(--accent)'
              ></rect>
              <rect
                x='30'
                y='55'
                width='40'
                height='8'
                fill='var(--dark-pur)'
              ></rect>
              <path
                d='M25 45H75V40C75 37.2386 72.7614 35 70 35H30C27.2386 35 25 37.2386 25 40V45Z'
                fill='var(--accent)'
              ></path>
              <path
                d='M50 35V20'
                stroke='var(--accent)'
                stroke-width='6'
                stroke-linecap='round'
              ></path>
              <circle cx='40' cy='22' r='8' fill='#f0abfc'></circle>
              <circle cx='60' cy='22' r='8' fill='#f0abfc'></circle>
              <path
                d='M85 60L88 65L93 68L88 71L85 76L82 71L77 68L82 65L85 60Z'
                fill='var(--accent)'
              ></path>
              <path
                d='M15 35L17 38L20 40L17 42L15 45L13 42L10 40L13 38L15 35Z'
                fill='var(--cl-purple)'
              ></path>
            </svg>
          </div>
        </div>
        {/* End of  CARD */}
      </div>
    </>
  );
};

export default Cards;
