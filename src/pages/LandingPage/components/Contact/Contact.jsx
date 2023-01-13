import axios from 'axios';
import React, { useState } from 'react';
import contactimage from "./Images/contact.svg";
import { FiSend } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../../../Constants/api';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const contact = (e) => {
    e.preventDefault();
    if (contactData.name === "" || contactData.email === "" || contactData.message === "") {
      toast.error('Input field is empty');
      setContactData({
        "name": "",
        "email": "",
        "message": "",
      });
    }
    else {
      let data = {
        name: contactData.name,
        email: contactData.email,
        message: contactData.message,
      }
      console.log(data);
      setLoading(true);
      axios.post(baseUrl + 'contact', data).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setLoading(false);
          toast.success('Feedback sent successfully');
          setContactData({
            "name": "",
            "email": "",
            "message": "",
          });
        }
        else if (response.data.status === 402) {
          setLoading(false);
          toast.error("Invalid Email Address !");
          setContactData({
            "name": "",
            "email": "",
            "message": "",
          });
        }
      });
    }
  }
  return (
    <>
      <div className="bg-secondary">
        <div className="space-y-16 px-4 container xl:max-w-7xl mx-auto py-16 lg:py-16">
          <div className="flex flex-col text-center w-full mb-20" bis_skin_checked="1">
            <h1 className="sm:text-3xl text-2xl tracking-normal font-extrabold title-font text-primary">Contact Us</h1>
          </div>
          <div className="flex flex-wrap w-full" bis_skin_checked="1">
            <img data-aos="fade-down-right" className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 hero-animate" src={contactimage} alt="step" />
            <div data-aos="fade-up-right" className="flex flex-col justify-center lg:w-2/5 md:w-1/2 px-5" bis_skin_checked="1">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center mt-3">Provide Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">You can send the feedback for the app. We will consider each and everyone feedback.</p>
              <div className="relative mb-4" bis_skin_checked="1">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={(e) => {
                  setContactData({
                    ...contactData, name: e.target.value
                  });
                }} type="text" id="name" name="name" value={contactData.name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4" bis_skin_checked="1">
                <label className="leading-7 text-sm text-gray-600">Email Address</label>
                <input onChange={(e) => {
                  setContactData({
                    ...contactData, email: e.target.value
                  });
                }} type="email" id="email" name="email" value={contactData.email} className="C" />
              </div>
              <div className="relative mb-4" bis_skin_checked="1">
                <label className="leading-7 text-sm text-gray-600">Leave Message</label>
                <textarea onChange={(e) => {
                  setContactData({
                    ...contactData, message: e.target.value
                  });
                }} id="message" name="message" value={contactData.message} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button onClick={(e) => {
                contact(e);
              }} className="btn flex items-center justify-center text-white font-medium tracking-normal text-base py-3.5 px-4 rounded active:scale-[.97]">
                <span>
                  {loading ? "Loading..." : "Send Message"}
                </span>
                <FiSend className='ml-2' />
              </button>
              <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {/* END FAQ Section: contact us */}
    </>
  )
}

export default Contact