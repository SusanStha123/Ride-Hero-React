import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl, imgHeader } from '../../../Constants/api';

const AddVehicle = ({ closeAddModal }) => {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState({
    name: '',
    brand: '',
    category: '',
    description: '',
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const addVehicle = (e) => {
    e.preventDefault();
    if (vehicleData.name === "" || vehicleData.brand === "" || vehicleData.category === "" || vehicleData.description === "" || vehicleData.image === "") {
      toast.error('Input field is empty');
      setVehicleData({
        "name": "",
        "brand": "",
        "category": "",
        "description": "",
        "image": "",
      });
    }
    else {
      let data = {
        name: vehicleData.name,
        brand: vehicleData.brand,
        category: vehicleData.category,
        description: vehicleData.description,
        image: vehicleData.image,
      }
      console.log(data)
      setLoading(true);
      axios.post(baseUrl + 'add-vehicle', data, imgHeader).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setLoading(false);
          toast.success('Vehicle added successfully');
          setVehicleData({
            "name": "",
            "brand": "",
            "category": "",
            "description": "",
            "image": "",
          });
          navigate('/driver/vehicle');
        }
      }).catch(function (err) {
        toast.warning('Cannot add vehicle');
        setLoading(false);
        setVehicleData({
          "name": "",
          "brand": "",
          "category": "",
          "description": "",
          "image": "",
        });
        throw err
      })
    }
  }

  return (
    <>
      {/* <!-- Main modal --> */}
      <div id="add-vehicle" className="fixed left-0 right-0 top-0 z-50 w-full p-4 min-h-screen flex justify-center items-center" style={{
        background: "rgba(0,0,0,0.5)",
      }}>
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={() => {
              closeAddModal(false);
            }} className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="add-vehicle-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="mb-4 py-3 px-8 rounded-t-lg text-xl font-semibold text-white bg-primary">Add a vehicle</h3>
            <div className="w-full px-6 py-6 lg:px-8">
              <form encType='multipart/form-data'>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div className='sm:col-span-2'>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Vehicle Name</label>
                    <input onChange={(e) => {
                      setVehicleData({
                        ...vehicleData, name: e.target.value
                      });
                    }} type="text" name="name" id="name" value={vehicleData.name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Type product name" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Vehicle Brand</label>
                    <input onChange={(e) => {
                      setVehicleData({
                        ...vehicleData, brand: e.target.value
                      });
                    }} type="text" name="brand" id="brand" value={vehicleData.brand} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product brand" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Vehicle Category</label>
                    <select onChange={(e) => {
                      setVehicleData({
                        ...vehicleData, category: e.target.value
                      })
                    }} id="category" value={vehicleData.category} name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option>Select category</option>
                      <option>Car</option>
                      <option>Bike</option>
                      <option>Tuk-tuk</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label for="description" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Vehicle Description</label>
                    <textarea onChange={(e) => {
                      setVehicleData({
                        ...vehicleData, description: e.target.value
                      });
                    }} id="description" name='description' value={vehicleData.description} rows="3" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Write product description here"></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    {/* <p className='block mb-2 text-sm font-semibold text-gray-900'>Vehicle Image</p> */}
                    {/* <div className="flex items-center justify-center w-full"> */}
                    <label for="description" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Vehicle Image</label>
                    <input onChange={(e) => {
                      setVehicleData({
                        ...vehicleData, image: e.target.files[0]
                      });
                    }} type="file" name="image" id="image" className="inline-block bg-white rounded border-gray-300 text-sm outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product brand" />
                    {/* <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-3 pb-3">
                          <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">Vehicle Image</p>
                        </div>
                        <input onChange={(e) => {
                          setVehicleData({
                            ...vehicleData, image: e.target.value
                          });
                        }} type="file" name='image' value={vehicleData.image} className="hidden" />
                      </label> */}
                    {/* </div> */}
                  </div>
                </div>
                <button disabled={loading}
                  onClick={(e) => {
                    addVehicle(e);
                  }} type="submit" className="btn flex items-center text-white font-semibold tracking-normal text-sm mt-5 py-2.5 px-3 rounded active:scale-[.97]">
                  {loading ? "Loading..." : "Add vehicle"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddVehicle;