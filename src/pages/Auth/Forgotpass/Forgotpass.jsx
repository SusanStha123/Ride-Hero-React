import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

const Forgotpass = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-secondary h-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <button className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            <span className='text-primary font-bold tracking-normal'>Ride Hero</span>
          </button>
          <div className="w-full bg-white rounded shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-secondary">
            <h3 className="px-6 bg-primary rounded-t-lg font-semibold py-3 leading-tight tracking-normal text-white text-left md:text-lg dark:text-white">
              Account Recovery
            </h3>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <span><FaEnvelope className='text-primary' /></span>
                    <span className='ml-2'>Email Address</span>
                  </label>
                  <input type="email" name="email" id="email" value="" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com" />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the Terms and Conditions</label>
                  </div>
                </div>
                <button onClick={() => {
                  navigate('/verify-code');
                }} type="submit" className="btn w-full flex justify-center items-center text-white font-medium tracking-normal text-base py-2.5 px-4 rounded active:scale-[.97]">
                  <span>Send Email Verification Code</span>
                  <span><FiSend className='ml-2' /></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Forgotpass
