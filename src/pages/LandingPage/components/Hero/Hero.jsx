import React from 'react';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import hero from './Images/hero.svg';
import "./Hero.css";
import TypeWriter from "typewriter-effect";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="text-gray-400 bg-white body-font">
        <div className="container xl:max-w-7xl mx-auto flex px-4 lg:px-8 py-16 md:flex-row flex-col items-center" bis_skin_checked="1">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" bis_skin_checked="1">
            {/* <p className='text-primary text-lg font-medium mb-4'>Ride Hero<span className='animate-ping'>_</span> </p> */}
            <div className='mb-4 text-primary font-medium'>
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "This is a FYP project",
                    "This is a problem solving project",
                    "This is a ride-sharing web app",
                  ],
                }} />
            </div>
            {/* Slogans */}
            <h1 className="title-font text-5xl xl:text-5xl mb-4 font-bold text-back tracking-tight">Effortless transportation for busy lives
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">Ride Hero is a ride-sharing web app which is an online platform that connects drivers and passengers who need or want to travel together.</p>
            {/* End Slogans */}

            {/* Newsletter */}

            <div class="flex mb-8 w-full md:justify-start justify-center items-center" bis_skin_checked="1">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4" bis_skin_checked="1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className='text-primary' />
                </div>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 rounded border-2 bg-opacity-50 border-gray-300 pl-10 focus:bg-transparent focus:border-primary text-base outline-none text-gray-700 py-2.5 px-4 transition-colors duration-200 ease-in-out" placeholder='Email Address' />
              </div>
              <button class="btn ml-2 flex items-center text-white font-medium tracking-normal text-base py-2.5 px-4 rounded active:scale-[.97]">
                <span>Send</span>
                <FiSend className='ml-2' />
              </button>
            </div>
            {/* End Newsletter */}

            <div className="flex justify-center" bis_skin_checked="1">
              {/* Get Started button */}
              <button onClick={() => {
                navigate('/login');
              }} className="btn flex items-center text-white font-medium tracking-normal text-base py-3.5 px-4 rounded active:scale-[.97]">
                <span className='mr-1'>Get Started</span>
                <FaArrowRight />
              </button>
              {/* End Get Started Button */}
            </div>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" bis_skin_checked="1">
            <img className="object-cover object-center rounded hero-animate" alt="hero" src={hero} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero