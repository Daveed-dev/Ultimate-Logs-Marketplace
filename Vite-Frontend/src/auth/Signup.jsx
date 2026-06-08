import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  useEffect(() => {
    document.title = 'Ultimate Tools Marketplace - Register';
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <section className='w-full h-[100vh] flex items-center justify-center bg-[var(--bg-body)] px-4 py-6 md:py-0'>
        <div className='absolute inset-0 pointer-events-none'>
          <i className='fa-solid fa-circle absolute top-10 left-20 text-[var(--light-pur)]/20 text-[0.5rem]'></i>
          <i className='fa-solid fa-circle absolute top-40 right-32 text-[var(--light-pur)]/20 text-[0.4rem]'></i>
          <i className='fa-solid fa-circle absolute bottom-20 left-40 text-[var(--light-pur)]/20 text-[0.6rem]'></i>
          <span className='absolute top-20 left-10 w-20 h-[1px] bg-[var(--light-pur)]/20 rotate-45'></span>
          <span className='absolute bottom-32 right-20 w-20 h-[1px] bg-[var(--light-pur)]/20 -rotate-45'></span>
          <span className='absolute top-1/2 left-5 w-16 h-[1px] bg-[var(--light-pur)]/15 rotate-12'></span>
        </div>
        <article className='flex items-center h-full md:h-[90vh] md:w-220 z-10 shadow-2xl shadow-[var(--shadow-md)] rounded-3xl overflow-hidden'>
          <div className='bg-[var(--cl-white)] md:w-120 w-full h-full p-8  md:rounded-l-3xl md:rounded-r-none overflow-y-auto overflow-hidden'>
            <img src='/images/logo.png' alt='logo-img' className='h-9 my-2.5' />
            <h1 className='pt-4 font-bold text-[var(--dark)] text-2xl'>
              Create Account
            </h1>
            <p className='text-[0.9rem]  text-[var(--gray)]'>
              Join Ultimate Logs Marketplace and get started today.
            </p>
            {/* FORM */}
            <form action='' method='post' className=''>
              {/* INPUT    */}
              <div className='md:flex gap-3'>
                <div className='flex flex-col pt-4'>
                  <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                    FIRST NAME
                  </label>
                  <div className='relative flex items-center group'>
                    <i className='fa-regular fa-user absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                    <input
                      type='text'
                      placeholder='John'
                      className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
                    focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                    />
                  </div>
                </div>
                <div className='flex flex-col pt-4'>
                  <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                    LAST NAME
                  </label>
                  <div className='relative flex items-center group'>
                    <i className='fa-regular fa-user absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                    <input
                      type='text'
                      placeholder='Doe'
                      className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
                    focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                    />
                  </div>
                </div>
              </div>
              {/* INPUT    */}
              <div className='flex flex-col pt-4'>
                <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                  Email ADDRESS
                </label>
                <div className='relative flex items-center group'>
                  <i className='fa-regular fa-envelope absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                  <input
                    type='text'
                    placeholder='you@example.com'
                    className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
                    focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                  />
                </div>
              </div>
              {/* INPUT    */}
              <div className='flex flex-col pt-4'>
                <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                  Phone NUMBER
                </label>
                <div className='flex items-center w-full border-2 border-[#eef0f6] rounded-xl transition-all duration-300 overflow-hidden'>
                  <div className='px-4 py-3 border-r border-[#dcdfe6] text-[var(--gray)] font-bold text-[1rem]'>
                    +234
                  </div>

                  <input
                    type='text'
                    placeholder='8012345678'
                    className='flex-1 px-4 py-3 bg-transparent placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem] outline-none  focus:ring-2
                    focus:ring-[var(--dark-pur)] focus:ring-inset rounded-r-xl'
                  />
                </div>
              </div>
              {/* INPUT    */}
              <div className='flex flex-col pt-4'>
                <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                  USERNAME
                </label>
                <div className='relative flex items-center group'>
                  <i className='fa-regular fa-circle-user absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                  <input
                    type='text'
                    placeholder='Choose a username'
                    className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
                    focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                  />
                </div>
              </div>
              {/* INPUT    */}
              <div className='flex flex-col pt-4'>
                <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                  PASSWORD
                </label>
                <div className='relative flex items-center group'>
                  <i className='fa-solid fa-lock absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Min. 8 characters'
                    className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
          focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                  />
                  <i
                    className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-4 text-[var(--gray)] group-focus-within:text-[var(--dark-pur)] cursor-pointer top-1/2 -translate-y-1/2 transition-all duration-300 text-[1rem]`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </div>
              </div>
              {/* INPUT    */}
              <div className='flex flex-col pt-4'>
                <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                  COMFIRM PASSWORD
                </label>
                <div className='relative flex items-center group'>
                  <i className='fa-solid fa-shield-halved absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                  <input
                    type={showPassword2 ? 'text' : 'password'}
                    placeholder='Repeat password'
                    className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
          focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                  />
                  <i
                    className={`fa-solid ${showPassword2 ? 'fa-eye-slash' : 'fa-eye'} absolute right-4 text-[var(--gray)] group-focus-within:text-[var(--dark-pur)] cursor-pointer top-1/2 -translate-y-1/2 transition-all duration-300 text-[1rem]`}
                    onClick={() => setShowPassword2(!showPassword2)}
                  ></i>
                </div>
              </div>
              {/* INPUT    */}
              <div className='flex flex-col pt-4'>
                <label className='mb-1 font-medium text-[0.8rem] text-[var(--dark)]'>
                  REFERAL CODE (Optional)
                </label>
                <div className='relative flex items-center group'>
                  <i className='fa-solid fa-gift absolute left-4 text-[var(--placeholder)] group-focus-within:text-[var(--dark-pur)] transition-all duration-300 text-[1rem]'></i>

                  <input
                    placeholder='Enter referal code'
                    className='w-full border-2 border-[#eef0f6] rounded-xl pl-12 pr-4 py-3 bg-[var(--input-bg)] outline-none  focus:ring-2
          focus:ring-[var(--dark-pur)] focus:ring-inset transition-all duration-300 placeholder:text-[var(--placeholder)] placeholder:font-medium placeholder:text-[0.95rem]'
                  />
                </div>
              </div>
              <div className='flex justify-between items-center py-3'>
                <label className='flex items-center cursor-pointer text-[var(--gray)] hover:text-[var(--dark-pur)]'>
                  <input type='checkbox' name='agree' className='mr-1 ' />
                  <span className='text-[0.95rem] '>I agree with all</span>
                </label>
              </div>
              <div className='py-2'>
                <button
                  type='submit'
                  className='relative overflow-hidden text-white font-medium p-3 rounded-xl w-full bg-gradient-to-r from-[var(--light-pur)] to-[var(--accent)] flex justify-center items-center hover:-translate-y-1 hover:shadow-[0px_8px_20px_rgba(217,70,239,0.25)] transition-all duration-300 text-[1rem] group'
                >
                  {/* Shimmer sweep */}
                  <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none' />
                  Create Account <i className='fa-solid fa-rocket ml-2'></i>
                </button>
              </div>
              <div className='py-2'>
                <p className='text-[0.85rem] text-[var(--gray)] text-center'>
                  By signing up, you agree to our{' '}
                  <a href='' className='text-[var(--dark-pur)] hover:underline'>
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href='' className='text-[var(--dark-pur)] hover:underline'>
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
            <div className='flex justify-center py-2 gap-1'>
              <span className='text-[var(--gray)] text-[1rem]'>
                Already have an account?
              </span>
              <Link
                to='/user/login'
                className='text-[var(--dark-pur)] hover:text-[var(--accent)] transition-all duration-300 font-medium text-[0.95rem]'
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className='bg-gradient-to-b from-[var(--light-pur)] to-[var(--accent)] hidden md:flex md:flex-col justify-center items-center h-full flex-1 rounded-r-3xl relative overflow-hidden'>
            <div className='absolute inset-0 pointer-events-none z-1'>
              <span className='absolute left-12 -top-10 h-[120%] w-[1.5px] bg-white/10 rotate-[14deg]'></span>

              <span className='absolute left-45 -top-10 h-[100%] w-[1px] bg-white/10 rotate-[-20deg]'></span>

              <span className='absolute right-26 -top-10 h-[105%] w-[1.5px] bg-white/10 rotate-[22deg]'></span>

              <span className='absolute right-10 -top-10 h-[90%] w-[1px] bg-white/10 rotate-[-9deg]'></span>
            </div>
            <div className='absolute inset-0 pointer-events-none z-1'>
              <i className='fa-solid fa-circle absolute top-10 left-15 text-[var(--icons)]/20 animatefloatup text-[0.8rem]'></i>

              <i className='fa-solid fa-circle absolute top-12 right-20 text-[var(--icons)]/20 animatefloatdown'></i>

              <i className='fa-solid fa-circle absolute top-40 left-10 text-[var(--icons)]/20 animatefloatdown text-[0.7rem]'></i>
              <i className='fa-solid fa-circle absolute top-50 right-10 text-[var(--icons)]/20 animatefloatdown text-[0.9rem]'></i>
              <i className='fa-solid fa-circle absolute top-80 left-5 text-[var(--icons)]/20 animatefloatup text-[0.6rem]'></i>
            </div>
            <div className='relative flex flex-col items-center text-center z-2'>
              <div className='w-[100px] h-[100px] bg-white/10 rounded-[24px] flex items-center justify-center mx-auto mb-4 backdrop-blur-[12px] border border-white/20 animatefloat overflow-hidden p-[14px]'>
                <img
                  src='/images/logo.png'
                  alt='logo-img'
                  className='w-18 filter brightness-0 invert'
                />
              </div>
              <h1 className='font-bold  text-[1.3rem] text-[var(--dark)] py-2 font-stretch-extra-condensed'>
                Get Started in Seconds
              </h1>
              <p className='text-[var(--light-gray)] text-center text-[0.9rem] font-medium max-w-70'>
                Create your free account and unlock powerful tools built for
                your digital needs.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Signup;
