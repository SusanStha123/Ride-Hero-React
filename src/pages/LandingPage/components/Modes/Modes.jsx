import React, { useEffect } from 'react';
import modes1 from "./Images/hero.svg";
import modes2 from './Images/hero-section-2.svg';
import modes3 from './Images/hero-section-2.svg';
import "aos/dist/aos.css";
import Aos from 'aos';
import "./Modes.css";

const Modes = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='w-full bg-white'>
        <div className="space-y-16 px-4 container xl:max-w-7xl mx-auto py-16 lg:py-16">
          <div class="flex flex-col text-center w-full mb-20" bis_skin_checked="1">
            {/* <p className='text-primary text-lg font-medium mb-4'>Ride Hero<span className='animate-ping'>_</span> </p> */}
            <h1 class="sm:text-3xl text-2xl font-semibold title-font text-primary tracking-wide">Modes of Services</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 px-5">
            <div data-aos="fade-down-right" className="modes flex relative flex-col rounded-lg overflow-hidden border shadow-lg text-white cursor-pointer blink">
              <div className="p-10 lg:py-16 md:py-16 sm:py-16 grow w-full flex justify-between items-center text-xl">
                <img src={modes1} alt="" />
              </div>
              <div className='overlay text-back'>
                <p className='bg-primary px-2 rounded-2xl text-white'>Car</p>
              </div>
            </div>
            {/* END Card: Modes Services */}

            {/* Card: Modes Services */}
            <div data-aos="fade-down" className="modes flex relative flex-col rounded-lg border shadow-lg overflow-hidden text-white cursor-pointer blink">
              <div className="p-10 lg:py-16 md:py-16 sm:py-16 grow w-full flex justify-between items-center text-xl">
                <img src={modes2} alt="" />
              </div>
              <div className='overlay text-back'>
                <p className='bg-primary px-2 rounded-2xl text-white'>Bike</p>
              </div>
            </div>
            {/* END Card: Modes Services */}

            {/* Card: Modes Services */}
            <div data-aos="fade-down-left" className="modes flex relative flex-col rounded-lg border shadow-lg overflow-hidden text-white cursor-pointer blink">
              <div className="p-10 lg:py-16 md:py-16 sm:py-16 grow w-full flex justify-between items-center text-xl">
                <img src={modes3} alt="" />
              </div>
              <div className='overlay text-back'>
                <p className='bg-primary px-2 rounded-2xl text-white'>Tuk-tuk</p>
              </div>
            </div>
          </div>
          {/* END Modes Services */}
        </div>
      </div>
    </>
  )
}

export default Modes