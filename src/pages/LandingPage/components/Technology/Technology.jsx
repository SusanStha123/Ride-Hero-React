import React, { useEffect } from 'react';
import { FaBootstrap, FaLaravel, FaReact } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';
import "./Technology.css";
import "aos/dist/aos.css";
import Aos from 'aos';

const Technology = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='w-full bg-secondary'>
        <div className="space-y-16 px-4 container xl:max-w-7xl mx-auto py-16 lg:py-16">
          <div class="flex flex-col text-center w-full mb-20" bis_skin_checked="1">
            <h1 class="sm:text-3xl text-2xl text-primary title-font tracking-normal font-extrabold">Technology</h1>
          </div>
          <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-4 text-primary">
            <div className="h-28 flex items-center justify-between">
              <div data-aos="fade-up" className="inline-flex react-animate items-center space-x-2 text-3xl font-semibold tracking-normal">
                <FaReact className='text-7xl' />
                <span className='tracking-normal'>React JS</span>
              </div>
            </div>
            <div className="h-28 flex items-center justify-between">
              <div data-aos="fade-left" className="inline-flex laravel-animate items-center space-x-2 text-3xl font-semibold tracking-normal">
                <FaLaravel className='text-7xl' />
                <span className='tracking-normal'>Laravel</span>
              </div>
            </div>
            <div className="h-28 flex items-center justify-between">
              <div data-aos="fade-down" className="inline-flex boot-animate items-center space-x-2 text-3xl font-semibold tracking-normal">
                <FaBootstrap className='text-7xl' />
                <span className='tracking-normal'>Bootstrap</span>
              </div>
            </div>
            <div className="h-28 flex items-center justify-between">
              <div data-aos="fade-right" className="inline-flex tailwind-animate items-center space-x-2 text-3xl font-semibold tracking-normal">
                <TbBrandTailwind className='text-7xl' />
                <span className='tracking-normal'>Tailwind CSS</span>
              </div>
            </div>
            {/* END Technology */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology