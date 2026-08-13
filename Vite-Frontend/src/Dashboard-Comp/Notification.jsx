import React from 'react';

const Notification = ({ selectedNotification, setSelectedNotification }) => {
  if (!selectedNotification) return null;
  return (
    <>
      <section
        className={`
          fixed
          top-0 bottom-0
          right-auto
          lg:left-[calc(var(--aside-width)+50px)]
          xl:left-[calc(var(--aside-width)+100px)]
          z-[60]
          m-auto w-auto
           lg:w-170 mx-2.5 sm:mx-6 md:mx-12 lg:mx-0 h-fit max-h-135 rounded-2xl
          bg-[var(--cl-white)] overflow-hidden
          `}
      >
        <div className='w-full sticky top-0 z-10 border-b-1  border-[var(--border)] flex items-center justify-between bg-[var(--cl-white)] h-15 px-3'>
          <h1 className='font-semibold text-lg lg:text-xl'>
            {selectedNotification.title}
          </h1>
          <i
            className='fa-solid fa-xmark cursor-pointer text-[var(--text-muted)]/60'
            onClick={() => setSelectedNotification(null)}
          ></i>
        </div>
        <div className='px-4 py-2 overflow-y-auto w-full max-h-110'>
          <p className='text-base text-[var(--gray)] whitespace-pre-line'>
            {selectedNotification.content}
          </p>
        </div>
      </section>
    </>
  );
};

export default Notification;
