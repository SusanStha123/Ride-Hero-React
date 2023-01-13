import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl, imgHeader } from '../../../Constants/api';

const DriverKyc = () => {
  const navigate = useNavigate();
  const [kycData, setKycData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    address: '',
    email: '',
    phone: '',
    dob: '',
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const addKyc = (e) => {
    e.preventDefault();
    if (kycData.first_name === "" || kycData.middle_name === "" || kycData.last_name === "" || kycData.address === "" || kycData.email === "" || kycData.phone === "" || kycData.dob === "" || kycData.image === "") {
      toast.error('Input field is empty');
      setKycData({
        "first_name": "",
        "middle_nam": "",
        "last_name": "",
        "address": "",
        "email": "",
        "phone": "",
        "dob": "",
        "image": "",
      });
    }
    else {
      let data = {
        first_name: kycData.first_name,
        middle_name: kycData.middle_name,
        last_name: kycData.last_name,
        address: kycData.address,
        email: kycData.email,
        phone: kycData.phone,
        dob: kycData.dob,
        image: kycData.image,
      }
      console.log(data)
      setLoading(true);
      axios.post(baseUrl + 'add-kyc', data, imgHeader).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setLoading(false);
          toast.success('Kyc added successfully');
          setKycData({
            'first_name': '',
            'middle_name': '',
            'last_name': '',
            'address': '',
            'email': '',
            'phone': '',
            'date': null,
            'image': '',
          });
        }
        else if (response.data.status === 403) {
          setLoading(true);
          toast.error("Invalid email address!");
          setKycData({
            'first_name': '',
            'middle_name': '',
            'last_name': '',
            'address': '',
            'email': '',
            'phone': '',
            'date': null,
            'image': '',
          });
        }
      }).catch(function (err) {
        toast.warning('Cannot add kyc');
        setLoading(false);
        setKycData({
          'first_name': '',
          'middle_name': '',
          'last_name': '',
          'address': '',
          'email': '',
          'phone': '',
          'date': '',
          'image': '',
        });
        throw err
      })
    }
  }
  return (
    <>
      <div className='p-5 h-screen bg-gray-100'>
        <div className='overflow-auto md:block container xl:max-w-7xl'>
          <div className="w-full mx-auto bg-white rounded shadow-xl md:mt-0 sm:max-w-md lg:max-w-2xl xl:p-0">
            <h3 className="px-6 bg-primary rounded-t-lg font-semibold py-3 leading-tight tracking-normal text-white text-left md:text-lg dark:text-white">
              KYC Form
            </h3>
            <div className="w-full px-6 py-6 lg:px-8">
              <form encType='multipart/form-data'>
                <div className="grid gap-4 mb-4 sm:grid-cols-3">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">First Name</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, first_name: e.target.value
                      });
                    }} type="text" name="first_name" id="first_name" value={kycData.first_name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="First Name" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Middle Name</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, middle_name: e.target.value
                      });
                    }} type="text" name="middle_name" id="middle_name" value={kycData.middle_name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="Middle Name" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Last Name</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, last_name: e.target.value
                      });
                    }} type="text" name="last_name" id="last_name" value={kycData.last_name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="Last Name" />
                  </div>
                  <div className='sm:col-span-3'>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Address</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, address: e.target.value
                      });
                    }} type="text" name="address" id="address" value={kycData.address} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="Address" />
                  </div>
                  <div className='sm:col-span-3'>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email Address</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, email: e.target.value
                      });
                    }} type="email" name="email" id="email" value={kycData.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="Email Address" />
                  </div>
                  <div className='sm:col-span-2'>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Phone Number</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, phone: e.target.value
                      });
                    }} type="text" name="phone" id="phone" value={kycData.phone} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="Phone Number" />
                  </div>
                  <div className='sm:col-span-1'>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Date of Birth</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, dob: e.target.value
                      });
                    }} type="date" name="dob" id="dob" value={kycData.dob} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-light" placeholder="" />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Driving License Image</label>
                    <input onChange={(e) => {
                      setKycData({
                        ...kycData, image: e.target.files[0]
                      });
                    }} type="file" name="image" id="image" className="inline-block bg-white rounded border-gray-300 text-sm outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product brand" />
                  </div>
                </div>
                <button disabled={loading}
                  onClick={(e) => {
                    addKyc(e);
                  }} type="submit" className="btn flex items-center text-white font-semibold tracking-normal text-base mt-5 py-2.5 px-3 rounded active:scale-[.97]">
                  {loading ? "Loading..." : "Submit KYC"}
                </button>
              </form>
            </div>
          </div>
        </div >
      </div >
      <ToastContainer />
    </>
  )
}

export default DriverKyc