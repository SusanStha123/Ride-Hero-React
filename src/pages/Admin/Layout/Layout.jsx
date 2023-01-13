import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { FaCarAlt, FaCashRegister, FaFolder, FaHome, FaSignOutAlt, FaUserCircle, FaUserSecret } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import axios from 'axios';
import { baseUrl, header } from '../../../Constants/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const menus = [
    { name: "Home", link: "/admin/home", icon: FaHome },
    { name: "Passenger", link: "/admin/passenger", icon: FaUserSecret },
    { name: "Driver", link: "/admin/driver", icon: FaUserCircle },
    { name: "Rides", link: "/admin/rides", icon: FaCarAlt },
    { name: "KYC", link: "/admin/kyc", icon: FaFolder },
    { name: "Payment", link: "/admin/payment", icon: FaCashRegister },
    { name: "Feedback", link: "/admin/feedback", icon: AiFillMessage },
    { name: "Sign Out", link: "/", icon: FaSignOutAlt },
  ];
  const [open, setOpen] = useState(true);
  const logout = (e) => {
    e.preventDefault();
    axios.get(baseUrl + 'logout', header).then((res) => {
      if (res.data.status === 200) {
        toast.success('Logged out successfully');
        localStorage.removeItem("token");
        window.location.replace('/login');
      }

    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <>
      <div className="bg-gray-200 fixed w-full">
        <nav className="bg-secondary px-4 py-3 flex justify-between items-center">
          <button className="text-white font-bold text-2xl">
            <span className='ml-2 text-primary'>Ride Hero</span>
          </button>
          <div>
            <button onClick={(e) => {
              logout(e);
            }} className="btn ml-2 flex items-center text-white font-medium tracking-normal text-base py-2 px-3 rounded active:scale-[.97]">Logout</button>
          </div>
        </nav>
        <div className="flex shadow-2xl">
          <div
            className={`bg-secondary min-h-screen shadow-2xl ${open ? "w-72" : "w-16"
              } duration-500 text-primary px-4`}
          >
            <div className="py-3 flex justify-end">
              <HiMenuAlt3
                size={26}
                className="cursor-pointer hover:text-primary"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${menu?.margin && "mt-5"
                    } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-primary hover:text-white rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      // transitionDelay: `${i + 1}00ms`,
                    }}
                    className={`whitespace-pre tracking-normal ${!open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
          <main className="flex-1 px-4 py-6">
            <Outlet />
          </main>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Layout;
