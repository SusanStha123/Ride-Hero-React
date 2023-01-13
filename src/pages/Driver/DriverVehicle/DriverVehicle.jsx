import React, { useState } from 'react'
import AddVehicle from './AddVehicle';
import { VehicleHelper } from './helper';
import "./DriverVehicle.css";
import DeleteVehicle from './DeleteVehicle';
import EditVehicle from './EditVehicle';
import { imageUrl } from '../../../Constants/api';

const DriverVehicle = () => {
  const vehicleClass = React.useMemo(() => new VehicleHelper())
  const [vehicle, setVehicle] = useState([]);
  const getVehicleData = React.useCallback(async () => {
    let response = await vehicleClass.getVehicle();
    if (response !== false) {
      setVehicle(response)
    }
  }, []);

  React.useEffect(() => {
    getVehicleData();
  }, [getVehicleData]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      <div className='p-5 h-screen bg-gray-100'>
        <div className='flex justify-between items-center mb-4 flex-wrap'>
          <h1 className='text-xl font-semibold text-primary'>My Vehicles</h1>
          {/* Modal toggle */}
          <button onClick={() => {
            setOpenAddModal(true);
          }} className="btn flex items-center text-white font-medium tracking-normal text-base py-2.5 px-3 rounded active:scale-[.97]" type="button">
            Add Vehicle
          </button>
          {openAddModal && <AddVehicle closeAddModal={setOpenAddModal} />}
          {/* End Modal Toggle */}
        </div>
        <div className='overflow-auto shadow hidden md:block'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>S.N.</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Brand</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Category</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Description</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Image</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                vehicle.map((res, index) => {
                  return (
                    <tr className='border-b'>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{index + 1}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.name}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.brand}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.category}</td>
                      <td className='p-3 text-sm font-medium text-center whitespace-nowrap'>{res.description}</td>
                      <td className='p-3 text-sm font-medium text-center whitespace-nowrap'><div className='flex justify-center items-center'><img src={imageUrl + res.image} width="80" /></div></td>
                      <td className='p-3 text-sm font-medium flex items-center justify-center whitespace-nowrap'>
                        <button onClick={() => {
                          setOpenEditModal(true);
                        }} className="edit-btn flex items-center text-white font-medium tracking-normal text-base py-2 px-3 rounded active:scale-[.97]" type="button">
                          Update
                        </button>
                        {openEditModal && <EditVehicle closeEditModal={setOpenEditModal} />}
                        <button onClick={() => {
                          setOpenDeleteModal(true);
                        }} className="delete-btn ml-4 flex items-center text-white font-medium tracking-normal text-base py-2 px-3 rounded active:scale-[.97]" type="button">
                          Delete
                        </button>
                        {openDeleteModal && <DeleteVehicle closeDeleteModal={setOpenDeleteModal} />}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        {
          vehicle.map((res, index) => {
            return (
              <div className='grid grid-cols-1 gap-4 md:hidden'>
                <div className="bg-white p-4 shadow">
                  <div className='flex flex-col justify-center space-x-2 text-sm'>
                    <div className='flex items-center flex-wrap mb-2'>
                      <span className='font-semibold ml-2'>Serial Number:</span>
                      <span> {index + 1}</span>
                    </div>
                    <div className='mb-2'>
                      <span className='flex items-center'>
                        {/* <FaUser /> */}
                        <div>
                          <span className='font-semibold'>Name:</span>
                          <span> {res.name}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        {/* <FaEnvelope /> */}
                        <div>
                          <span className='font-semibold'>Brand:</span>
                          <span> {res.brand}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        {/* <FaUserFriends /> */}
                        <div>
                          <span className='font-semibold'>category:</span>
                          <span> {res.category}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        {/* <FaUserFriends /> */}
                        <div>
                          <span className='font-semibold'>Description:</span>
                          <span> {res.description}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        {/* <FaUserFriends /> */}
                        <div>
                          <span className='font-semibold'>Image:</span>
                          <span> {res.image}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        {/* <FaUserFriends /> */}
                        <div className='flex items-center justify-between mt-3 w-full flex-wrap'>
                          <button onClick={() => {
                            setOpenEditModal(true);
                          }} className="edit-btn flex items-center text-white font-medium tracking-normal text-base py-2 px-3 rounded active:scale-[.97]" type="button">
                            Update
                          </button>
                          {openEditModal && <EditVehicle closeEditModal={setOpenEditModal} />}
                          <button onClick={() => {
                            setOpenDeleteModal(true);
                          }} className="delete-btn flex items-center text-white font-medium tracking-normal text-base py-2 px-3 rounded active:scale-[.97]" type="button">
                            Delete
                          </button>
                          {openDeleteModal && <DeleteVehicle closeDeleteModal={setOpenDeleteModal} />}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default DriverVehicle