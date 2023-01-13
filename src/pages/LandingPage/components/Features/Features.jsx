import React, { useEffect } from 'react';
import features from "./Images/features.svg";
import { FaCarAlt, FaPaypal, FaSearchLocation } from "react-icons/fa";
import "./Features.css";
import "aos/dist/aos.css";
import Aos from 'aos';

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* FAQ Section: App Features */}
      <div className="bg-white">
        <div className="space-y-16 px-4 container xl:max-w-7xl mx-auto py-16 lg:py-16">
          <div class="flex flex-col text-center w-full mb-20" bis_skin_checked="1">
            <h1 class="sm:text-3xl text-2xl tracking-normal font-extrabold title-font text-primary">App Features</h1>
          </div>
          <div class="flex flex-wrap w-full" bis_skin_checked="1">
            <div data-aos="fade-up-left" class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6" bis_skin_checked="1">
              <div class="flex relative pb-12" bis_skin_checked="1">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center" bis_skin_checked="1">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none" bis_skin_checked="1"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10" bis_skin_checked="1">
                  <FaCarAlt className='text-primary' />
                </div>
                <div class="flex-grow pl-4" bis_skin_checked="1">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">STEP 1</h2>
                  <p class="leading-relaxed text-gray-500">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
              <div class="flex relative pb-12" bis_skin_checked="1">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center" bis_skin_checked="1">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none" bis_skin_checked="1"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10" bis_skin_checked="1">
                  <FaSearchLocation className='text-primary' />
                </div>
                <div class="flex-grow pl-4" bis_skin_checked="1">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">STEP 2</h2>
                  <p class="leading-relaxed text-gray-500">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                </div>
              </div>
              <div class="flex relative pb-12" bis_skin_checked="1">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center" bis_skin_checked="1">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none" bis_skin_checked="1"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10" bis_skin_checked="1">
                  <FaPaypal className='text-primary' />
                </div>
                <div class="flex-grow pl-4" bis_skin_checked="1">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">STEP 3</h2>
                  <p class="leading-relaxed text-gray-500">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                </div>
              </div>
              <div class="flex relative pb-12" bis_skin_checked="1">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center" bis_skin_checked="1">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none" bis_skin_checked="1"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10" bis_skin_checked="1">
                  {/*  */}
                </div>
                <div class="flex-grow pl-4" bis_skin_checked="1">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">STEP 4</h2>
                  <p class="leading-relaxed text-gray-500">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
              <div class="flex relative" bis_skin_checked="1">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10" bis_skin_checked="1">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4" bis_skin_checked="1">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">FINISH</h2>
                  <p class="leading-relaxed text-gray-500">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                </div>
              </div>
            </div>
            <img data-aos="fade-down-right" class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 hero-animate" src={features} alt="step" />
          </div>
        </div>
      </div>
      {/* END FAQ Section: App Features */}
    </>
  )
}

export default Features