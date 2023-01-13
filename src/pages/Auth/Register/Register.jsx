import axios from 'axios';
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../../Constants/api';

const Register = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    roles: 1,
    status: 0,
    password: '',
    confirm_password: '',
  });
  const [loading, setLoading] = useState(false);
  const register = (e) => {
    e.preventDefault();
    if (authData.name === "" || authData.email === "" || authData.password === "" || authData.confirm_password === "") {
      toast.error('Input field is empty');
      setAuthData({
        "name": "",
        "roles": 1,
        "email": "",
        "password": "",
        "confirm_password": "",
      });
    }
    else {
      let data = {
        name: authData.name,
        email: authData.email,
        roles: authData.roles,
        status: parseInt(authData.roles) === 2 ? 0 : 1,
        password: authData.password,
        confirm_password: authData.confirm_password,
      }
      console.log(data)
      setLoading(true);
      axios.post(baseUrl + 'register', data).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setLoading(false);
          toast.success('Registered successfully');
          window.location.replace('/login');
        }
        else if (response.data.status === 405) {
          toast.error("Password must be off 8 characters!");
          setAuthData({
            "name": "",
            "roles": 1,
            "email": "",
            "password": "",
            "confirm_password": "",
          });
        }
        else if (response.data.status === 402) {
          toast.error("Passwords didn't match!");
          setAuthData({
            "name": "",
            "roles": 1,
            "email": "",
            "password": "",
            "confirm_password": "",
          });
        }
        else if (response.data.status === 403) {
          toast.error("Invalid email address!");
          setAuthData({
            "name": "",
            "roles": 1,
            "email": "",
            "password": "",
            "confirm_password": "",
          });
        }
        else if (response.data.status === 404) {
          toast.error("Email is already registered!");
          setAuthData({
            "name": "",
            "roles": 1,
            "email": "",
            "password": "",
            "confirm_password": "",
          });
        }
      }).catch((err) => {
        console.log(err);
        throw err;

      });
    }

  }
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
              Sign up to your account
            </h3>
            {/* Radio Button */}
            <div className='w-full flex justify-center mt-3'>
              <div class="flex w-48 items-center pl-4 rounded">
                <input onChange={(e) => {
                  setAuthData({
                    ...authData, roles: e.target.value
                  });
                }} id="list-radio" type="radio" value="1" name="roles" class="w-4 h-4" />
                <label class="py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Become a Passenger</label>
              </div>
              <div class="flex w-48 items-center pl-4 rounded">
                <input onChange={(e) => {
                  setAuthData({
                    ...authData, roles: e.target.value
                  });
                }} id="list-radio" type="radio" value="2" name="roles" class="w-4 h-4" />
                <label class="py-4 ml-2 text-sm font-medium text-gray-900">Become a Driver</label>
              </div>
            </div>
            {/* End Radio Button */}

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <div className='flex items-center'>
                      <span><FaUser className='text-primary' /></span>
                      <span className='ml-2'>Full Name</span>
                    </div>
                  </label>
                  <input onChange={(e) => {
                    setAuthData({
                      ...authData, name: e.target.value
                    });
                  }} type="name" name="name" id="name" value={authData.name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="full name" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <div className='flex items-center'>
                      <span><FaEnvelope className='text-primary' /></span>
                      <span className='ml-2'>Email Address</span>
                    </div>
                  </label>
                  <input onChange={(e) => {
                    setAuthData({
                      ...authData, email: e.target.value
                    });
                  }} type="email" name="email" id="email" value={authData.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <div className='flex items-center'>
                      <span><FaLock className='text-primary' /></span>
                      <span className='ml-2'>Password</span>
                    </div>
                  </label>
                  <input onChange={(e) => {
                    setAuthData({
                      ...authData, password: e.target.value
                    });
                  }} type="password" name="password" id="password" value={authData.password} placeholder="••••••••" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <div className='flex items-center'>
                      <span><FaUser className='text-primary' /></span>
                      <span className='ml-2'>Confirm Password</span>
                    </div>
                  </label>
                  <input onChange={(e) => {
                    setAuthData({
                      ...authData,
                      confirm_password: e.target.value
                    });
                  }} type="password" name="confirm_password" id="confirm_password" value={authData.confirm_password} placeholder="••••••••" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button
                  disabled={loading}
                  onClick={(e) => {
                    register(e);
                  }} type="submit" className="btn w-full flex justify-center items-center text-white font-medium tracking-normal text-base py-2.5 px-4 rounded active:scale-[.97]">
                  {loading ? "Loading..." : "Sign up"}
                </button>
                <p className="text-sm text-center font-light text-back">
                  Already have an account? <button onClick={() => {
                    navigate('/login');
                  }} className="font-medium text-primary active:underline active:text-primary dark:text-primary-500">Sign in</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default Register

{/* <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-back">
        {/* Page Content */}
      //   <main id="page-content" className="flex flex-auto flex-col max-w-full">
      //     <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
      //       {/* Patterns Background */}
      //       <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16" />
      //       <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16" />
      //       {/* END Patterns Background */}

      //       {/* Register Section */}
      //       <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
      //         {/* Header */}
      //         <div className="mb-8 text-center">
      //           <h1 className="text-3xl font-semibold inline-flex items-center mb-1 space-x-3">
      //             <svg className="hi-solid hi-cube-transparent inline-block w-8 h-8" fill="#22C55E" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" /></svg>
      //             <span className='text-primary'>Ride Hero</span>
      //           </h1>
      //         </div>
      //         {/* END Header */}

      //         {/* Register Form */}
      //         {/* <p className='text-danger'>{error}</p> */}
      //         <p className='text-danger'></p>
      //         <div className="flex flex-col bg-back rounded shadow-2xl overflow-hidden">
      //           <h1 className='bg-primary py-4 text-lg font-medium text-white px-10 tracking-wide'>Register Page</h1>
      //           <div className="p-5 lg:p-6 grow w-full">
      //             <div className="sm:p-5 lg:px-10 lg:py-8">
      //               <form className='space-y-6'>
      //                 <div className="mb-4 space-y-1">
      //                   <label className="font-medium flex items-center text-white">
      //                     <span><FaUser /></span>
      //                     <span className='ml-2'>Full Name</span>
      //                   </label>
      //                   <input className="block border-primary rounded px-5 py-3 leading-6 w-full outline-none focus:border-primary border-2" type="text" id="name" name="name" value={authData.name} placeholder="Enter your full name" onChange={(e) => {
      //                     setAuthData({
      //                       ...authData, name: e.target.value
      //                     });
      //                   }} />
      //                 </div>
      //                 <div className="mb-4 space-y-1">
      //                   <label className="font-medium flex items-center text-white">
      //                     <span><FaEnvelope /></span>
      //                     <span className='ml-2'>Email Address</span>
      //                   </label>
      //                   <input className="block border-primary rounded px-5 py-3 leading-6 w-full outline-none focus:border-primary border-2" type="email" id="email" name="email" value={authData.email} placeholder="Enter your email address" onChange={(e) => {
      //                     setAuthData({
      //                       ...authData, email: e.target.value
      //                     });
      //                   }} />
      //                 </div>
      //                 <div className="space-y-1 mb-4">
      //                   <label className="font-medium flex items-center text-white">
      //                     <span><FaLock /></span>
      //                     <span className='ml-2'>Password</span>
      //                   </label>
      //                   <input className="block border-primary rounded px-5 py-3 leading-6 w-full outline-none focus:border-primary border-2" type="password" id="password" name="password" value={authData.password} placeholder="Enter your password" onChange={(e) => {
      //                     setAuthData({
      //                       ...authData, password: e.target.value
      //                     });
      //                   }} />
      //                 </div>
      //                 <div className="space-y-1 mb-4">
      //                   <label className="font-medium flex items-center text-white">
      //                     <span><FaLock /></span>
      //                     <span className='ml-2'>Confirm Password</span>
      //                   </label>
      //                   <input className="block border-primary rounded px-5 py-3 leading-6 w-full outline-none focus:border-primary border-2" type="password" id="confirm_password" name="confirm_password" value={authData.confirm_password} placeholder="Confirm your password" onChange={(e) => {
      //                     setAuthData({
      //                       ...authData, confirm_password: e.target.value
      //                     });
      //                   }} />
      //                 </div>
      //                 <div className="space-y-1 mb-4">
      //                   <h3 className="mb-4 font-medium text-white">Registered as</h3>
      //                   <ul className="w-48 text-sm font-medium text-white bg-back rounded-lg">
      //                     <li className="w-full rounded-t-lg">
      //                       <div className="flex items-center pl-3">
      //                         <input id="list-radio-license" type="radio" value="1" name="roles" className="w-4 h-4" onChange={(e) => {
      //                           setAuthData({
      //                             ...authData, roles: e.target.value
      //                           });
      //                         }} />
      //                         <label className="py-3 ml-2 w-full text-sm font-medium text-white dark:text-gray-300">Passenger</label>
      //                       </div>
      //                     </li>
      //                     <li className="w-full rounded-t-lg">
      //                       <div className="flex items-center pl-3">
      //                         <input id="list-radio-id" type="radio" value="2" name="roles" className="w-4 h-4" onChange={(e) => {
      //                           setAuthData({
      //                             ...authData, roles: e.target.value
      //                           });
      //                         }} />
      //                         <label className="py-3 ml-2 w-full text-sm font-medium text-white dark:text-gray-300">Driver</label>
      //                       </div>
      //                     </li>
      //                   </ul>
      //                 </div>
      //                 <div className='mt-8'>
      //                   <button onClick={(e) => {
      //                     register(e);
      //                   }}
      //                     type="submit" className="inline-flex justify-center items-center space-x-2 font-semibold text-lg focus:outline-none w-full px-4 py-3 leading-6 rounded bg-primary hover:bg-green-600 text-white focus:ring focus:ring-primary focus:ring-opacity-50 active:bg-primary tracking-wide">
      //                     {loading ? "Loading..." : "Register"}
      //                   </button>
      //                 </div>
      //               </form>
      //             </div>
      //           </div>
      //           <div className="py-4 px-5 lg:px-6 border-primary border-t-2 w-full text-sm text-center bg-back font-semibold">
      //             <span className='font-medium text-white'>Already have an accout? </span>
      //             <button className="font-medium text-primary active:text-green-600 active:underline" onClick={() => {
      //               navigate('/login');
      //             }}>Login</button>
      //           </div>
      //         </div>
      //         {/* END Register Form */}
      //       </div>
      //       {/* END Register Section */}
      //     </div>
      //   </main>
      //   {/* END Page Content */}
      // </div>
      // END Page Container */}