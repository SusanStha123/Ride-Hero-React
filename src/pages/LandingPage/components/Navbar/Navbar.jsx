import React, { useState } from 'react';
import { FaCarAlt, FaHome, FaLaptopCode, FaListAlt, FaPhoneAlt, FaUserFriends } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      {/* Page Header */}
      < header id="page-header" className="header flex flex-none items-center bg-white transition-all z-50" >
        <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between py-4">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Logo */}
              <button className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-primary active:text-gray-700">
                {/* <img src={logo} alt="logo" width={50} className='rounded-lg transition-all hover:scale-105' /> */}
                <span className='text-xl'>Ride Hero</span>
              </button>
              {/* END Logo */}
            </div>
            {/* END Left Section */}

            {/* Right Section */}
            <div className="flex items-center space-x-1 lg:space-x-5">

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex lg:items-center lg:space-x-2">
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-primary">
                  <FaHome />
                  <span>Home</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                  <FaUserFriends />
                  <span>About Us</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                  <FaCarAlt />
                  <span>Modes of Services</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                  <FaLaptopCode />
                  <span>Technology</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                  <FaListAlt />
                  <span>App Features</span>
                </button>
                <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                  <FaPhoneAlt />
                  <span>Contact Us</span>
                </button>
                <button onClick={() => {
                  navigate('/login');
                }} className="btn inline-flex justify-center items-center space-x-2 font-semibold tracking-wide text-sm focus:outline-none px-6 py-2 leading text-white rounded active:scale-[.97]">Ride With Us</button>
              </nav>
              {/* END Desktop Navigation */}

              {/* Toggle Mobile Navigation */}
              <div className="lg:hidden flex">
                <button onClick={() => {
                  navigate('/login');
                }} className="inline-flex justify-center items-center space-x-2 font-semibold tracking-wide text-sm focus:outline-none px-6 py-2 leading-6 bg-primary text-white rounded active:scale-[.97] hover:bg-green-600">Ride With Us</button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none ml-3 px-2 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
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
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-primary">
                <FaHome />
                <span>Home</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                <FaUserFriends />
                <span>About Us</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                <FaCarAlt />
                <span>Modes of Services</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                <FaLaptopCode />
                <span>Technology</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                <FaListAlt />
                <span>App Features</span>
              </button>
              <button className="nav-list text-sm font-medium flex items-center space-x-2 px-2 py-2 rounded text-back border border-transparent hover:text-primary">
                <FaPhoneAlt />
                <span>Contact Us</span>
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