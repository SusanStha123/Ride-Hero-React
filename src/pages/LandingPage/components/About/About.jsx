import React, { useEffect } from 'react';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import about from "./Images/about.svg";
import "aos/dist/aos.css";
import Aos from 'aos';

const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full bg-secondary'>
        <div className="space-y-16 px-4 container xl:max-w-7xl mx-auto py-16 lg:py-16">
          <div class="flex flex-col text-center w-full mb-20" bis_skin_checked="1">
            <h1 class="sm:text-3xl text-2xl tracking-normal font-extrabold title-font text-primary">About Us</h1>
          </div>
          <div class="container mx-auto flex px-5 md:flex-row flex-col items-center" bis_skin_checked="1">
            <div data-aos="fade-down" class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" bis_skin_checked="1">
              <img class="object-cover object-center rounded hero-animate" alt="hero" src={about} />
            </div>
            <div data-aos="fade-up" class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" bis_skin_checked="1">
              <h1 class="title-font text-5xl xl:text-5xl mb-4 font-bold text-back tracking-tight">Ride Hero - Ride Sharing Web App
                {/* <br class="hidden lg:inline-block" />Let's Start the Ride */}
              </h1>
              <p class="mb-8 leading-relaxed text-gray-500">Ride Hero is a ride-sharing web app is a platform that connects drivers with riders who need a ride to a specific destination. Users can easily request a ride through the app, track the progress of their ride, and pay for the service all through their web browser. Ride-sharing apps offer a convenient and cost-effective alternative to traditional taxi services, and are particularly popular for short trips within urban areas.</p>
              <div class="flex justify-center" bis_skin_checked="1">
                <button onClick={() => {
                  navigate('/login');
                }} class="flex items-center text-white font-semibold tracking-wide py-3 px-6 rounded text-lg active:scale-[.97] btn">
                  <span className='mr-1'>Let's Talk</span>
                  <HiOutlineSpeakerphone />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About