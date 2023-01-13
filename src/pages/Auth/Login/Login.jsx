// import React, { useState } from 'react';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { baseUrl } from '../../../Constants/api';

// const Login = () => {
//   const navigate = useNavigate();
//   const [authData, setAuthData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const login = (e) => {
//     e.preventDefault();
//     if (authData.email === "" || authData.password === "") {
//       toast.error('Input field is empty');
//       setAuthData({
//         "email": "",
//         "password": ""
//       });
//     } else {
//       let data = {
//         email: authData.email,
//         password: authData.password,
//       }
//       setLoading(true)
//       axios.post(baseUrl + 'login', data).then((response) => {
//         if (response.data.status === 200) {
//           localStorage.setItem('token', response.data.token);
//           var roles = response.data.user.roles;
//           setLoading(false);
//           if (roles === 0) {
//             toast.success('Login successfully');
//             window.location.replace('/admin/home');
//           }
//           else if (roles === 1) {
//             toast.success('Login successfully');
//             window.location.replace('/admin/passenger/');
//           }

//           else if (roles === 2) {
//             toast.success('Login successfully');
//             window.location.replace('/admin/driver/');
//           }
//         }
//         else {
//           setLoading(false)
//           toast.error('Wrong Credentials', {
//             position: "top-right",
//             autoClose: 2000
//           });
//           setAuthData({
//             "email": "",
//             "password": ""
//           });
//         }
//       }).catch(function (err) {
//         toast.warning('Cannot login');
//         setLoading(false);
//         setAuthData({
//           "email": "",
//           "password": ""
//         });
//         throw err
//       })
//     }
//   }
//   return (
//     <>
//       <div id="page-container" classNameName="flex flex-col mx-auto w-full min-h-screen bg-white">
//         {/* Page Content */}
//         <main id="page-content" classNameName="flex flex-auto flex-col max-w-full">
//           <div classNameName="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
//             {/* Patterns Background */}
//             <div classNameName="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16" />
//             <div classNameName="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16" />
//             {/* END Patterns Background */}

//             {/* Login Section */}
//             <div classNameName="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
//               {/* Header */}
//               <div classNameName="mb-8 text-center">
//                 <h1 classNameName="text-3xl font-semibold inline-flex items-center mb-1 space-x-3">
//                   <svg classNameName="hi-solid hi-cube-transparent inline-block w-8 h-8" fill="#22C55E" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" /></svg>
//                   <span classNameName='text-primary'>Ride Hero</span>
//                 </h1>
//               </div>
//               {/* END Header */}

//               {/* Login Form */}
//               <div classNameName="flex flex-col bg-back rounded shadow-2xl overflow-hidden">
//                 <h1 classNameName='bg-primary py-4 text-lg font-medium text-white px-10 tracking-wide'>Login Page</h1>
//                 <div classNameName="p-5 lg:p-6 grow w-full">
//                   <div classNameName="sm:p-5 lg:px-10 lg:py-8">
//                     <form>
//                       <div classNameName="mb-4 space-y-1">
//                         <label classNameName="font-medium flex items-center text-white">
//                           <span><FaEnvelope /></span>
//                           <span classNameName='ml-2'>Email Address</span>
//                         </label>
//                         <input classNameName="block border-gray-200 rounded px-5 py-3 leading-6 w-full outline-none focus:border-primary border-2" type="email" id="email" name="email" value={authData.email} placeholder="Enter your email address" onChange={(e) => {
//                           setAuthData({
//                             ...authData, email: e.target.value
//                           });
//                         }} />
//                       </div>
//                       <div classNameName="space-y-1 mb-4">
//                         <label classNameName="font-medium flex items-center text-white">
//                           <span><FaLock /></span>
//                           <span classNameName='ml-2'>Password</span>
//                         </label>
//                         <input classNameName="block border-gray-200 rounded px-5 py-3 leading-6 w-full outline-none focus:border-primary border-2" type="password" id="password" name="password" value={authData.password} placeholder="Enter your password" onChange={(e) => {
//                           setAuthData({
//                             ...authData, password: e.target.value
//                           });
//                         }} />
//                       </div>
//                       <div classNameName='mt-8'>
//                         <button
//                           disabled={loading}
//                           onClick={(e) => {
//                             login(e);
//                           }}
//                           type="submit" classNameName="inline-flex justify-center items-center space-x-2 font-semibold text-lg focus:outline-none w-full px-4 py-3 leading-6 rounded bg-primary hover:bg-green-600 text-white active:scale-[.97] tracking-wide">
//                           {loading ? "Loading..." : "Login"}
//                         </button>
//                         <div classNameName="space-y-2 sm:flex sm:items-center sm:justify-between lg:justify-end sm:space-x-2 sm:space-y-0 mt-4">
//                           <button classNameName="inline-block text-primary active:text-green-600 font-medium active:underline" onClick={() => {
//                             navigate('/forgot-password');
//                           }}>Forgot Password?</button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div classNameName="py-4 px-5 lg:px-6 border-primary border-t-2 w-full text-sm text-center bg-back font-semibold">
//                   <span classNameName='font-medium text-white'>Don’t have an account yet? </span>
//                   <button classNameName="font-medium text-primary active:text-green-600 active:underline" onClick={() => {
//                     navigate('/register');
//                   }}>Register today</button>
//                 </div>
//               </div>
//               {/* END Login Form */}

//             </div>
//             {/* END Login Section */}
//           </div>
//         </main>
//         {/* END Page Content */}
//       </div>
//       {/* END Page Container */}
//       <ToastContainer />
//     </>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../../Constants/api';

const Login = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const login = (e) => {
    e.preventDefault();
    if (authData.email === "" || authData.password === "") {
      toast.error('Input field is empty');
      setAuthData({
        "email": "",
        "password": ""
      });
    } else {
      let data = {
        email: authData.email,
        password: authData.password,
      }
      setLoading(true)
      axios.post(baseUrl + 'login', data).then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem('token', response.data.token);
          var roles = response.data.user.roles;
          setLoading(false);
          if (roles === 0) {
            toast.success('Login successfully');
            window.location.replace('/admin/home');
          }
          else if (roles === 1) {
            toast.success('Login successfully');
            window.location.replace('/admin/passenger/');
          }

          else if (roles === 2) {
            toast.success('Login successfully');
            window.location.replace('/driver/home/');
          }
        }
        else {
          setLoading(false)
          toast.error('Wrong Credentials', {
            position: "top-right",
            autoClose: 2000
          });
          setAuthData({
            "email": "",
            "password": ""
          });
        }
      }).catch(function (err) {
        toast.warning('Cannot login');
        setLoading(false);
        setAuthData({
          "email": "",
          "password": ""
        });
        throw err
      })
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
              Sign in to your account
            </h3>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <span><FaEnvelope className='text-primary' /></span>
                    <span className='ml-2'>Email Address</span>
                  </label>
                  <input onChange={(e) => {
                    setAuthData({
                      ...authData, email: e.target.value
                    });
                  }} type="email" name="email" id="email" value={authData.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <span><FaLock className='text-primary' /></span>
                    <span className='ml-2'>Password</span>
                  </label>
                  <input onChange={(e) => {
                    setAuthData({
                      ...authData, password: e.target.value
                    });
                  }} type="password" name="password" id="password" value={authData.password} placeholder="••••••••" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-secondary dark:border-secondary outline-none focus:border-primary focus:border-2 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-back dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <button onClick={() => {
                    navigate('/forgot-password');
                  }} className="text-sm font-medium text-primary active:underline active:text-primary">Forgot password?</button>
                </div>
                <button
                  disabled={loading}
                  onClick={(e) => {
                    login(e);
                  }} type="submit" className="btn w-full flex justify-center items-center text-white font-medium tracking-normal text-base py-2.5 px-4 rounded active:scale-[.97]">
                  {loading ? "Loading..." : "Sign in"}
                  <span><BiLogInCircle className='ml-2 text-xl' /></span>
                </button>
                <p className="text-sm text-center font-light text-back">
                  Don’t have an account yet? <button onClick={() => {
                    navigate('/register');
                  }} className="font-medium text-primary active:underline active:text-primary dark:text-primary-500">Sign up</button>
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

export default Login