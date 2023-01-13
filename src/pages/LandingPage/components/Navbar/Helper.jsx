import React, { useState } from 'react';
import { FaCarAlt, FaHome, FaLaptopCode, FaListAlt, FaUserFriends } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      {/* Page Header */}
      < header id="page-header" className="flex flex-none items-center bg-back shadow-sm z-1" >
        <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between py-4">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Logo */}
              <button className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-primary active:text-gray-700">
                <svg fill="#48bb78" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-90 text-blue-600 transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" /></svg>
                <span className='text-xl'>Ride Hero</span>
              </button>
              {/* END Logo */}
            </div>
            {/* END Left Section */}

            {/* Right Section */}
            <div className="flex items-center space-x-1 lg:space-x-5">

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex lg:items-center lg:space-x-2">
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-primary">
                  <FaHome />
                  <span>Home</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                  <FaUserFriends />
                  <span>About Us</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                  <FaCarAlt />
                  <span>Modes of Services</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                  <FaLaptopCode />
                  <span>Technology</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                  <FaListAlt />
                  <span>App Features</span>
                </button>
                <button onClick={() => {
                  navigate('/login');
                }} className="inline-flex justify-center items-center space-x-2 font-semibold tracking-wide text-sm focus:outline-none px-6 py-2 leading-6 bg-primary text-white rounded active:scale-[.97] hover:bg-green-600">Ride With Us</button>
              </nav>
              {/* END Desktop Navigation */}

              {/* Toggle Mobile Navigation */}
              <div className="lg:hidden flex">
                <button onClick={() => {
                  navigate('/login');
                }} className="inline-flex justify-center items-center space-x-2 font-semibold tracking-wide text-sm focus:outline-none px-6 py-2 leading-6 bg-primary text-white rounded active:scale-[.97] hover:bg-green-600">Ride With Us</button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none ml-3 px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-5 h-5"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
              </div>
              {/* END Toggle Mobile Navigation */}

            </div>
            {/* END Right Section */}
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden ${mobileNavOpen ? "" : "hidden"
              }`}
          >
            <nav className="flex flex-col space-y-2 py-4 border-t">
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-primary">
                <FaHome />
                <span>Home</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                <FaUserFriends />
                <span>About Us</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                <FaCarAlt />
                <span>Modes of Services</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                <FaLaptopCode />
                <span>Technology</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-white border border-transparent hover:text-primary">
                <FaListAlt />
                <span>App Features</span>
              </button>
            </nav>
          </div>
          {/* END Mobile Navigation */}
        </div>
      </header >
      {/* END Page Header */}
    </>
  )
}

export default Navbar