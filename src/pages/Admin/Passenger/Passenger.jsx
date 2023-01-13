import React, { useState } from 'react';
import { AdminPassenger } from './Helper';
import { FaEnvelope, FaUser, FaUserFriends } from "react-icons/fa";

const Passenger = () => {
  const adminPassenger = React.useMemo(() => new AdminPassenger(), []);
  // const [open, setOpen] = useState(true);
  const [passenger, setPassenger] = useState([]);

  const getPassenger = React.useCallback(async () => {
    let response = await adminPassenger.getPassenger();
    if (response !== false) {
      setPassenger(response)
    }
  }, []);

  React.useEffect(() => {
    getPassenger();
  }, [getPassenger]);

  return (
    <>
      <div className='p-5 h-screen bg-gray-100'>
        <h1 className='text-xl mb-4 font-semibold text-primary'>Registered Passenger</h1>
        <div className='overflow-auto shadow hidden md:block'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>S.N.</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Email Address</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Status</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Roles</th>
              </tr>
            </thead>
            <tbody>
              {
                passenger.map((res, index) => {
                  return (
                    <tr className='border-b'>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{index + 1}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.name}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.email}</td>
                      <td className='p-3 text-sm font-medium text-center whitespace-nowrap'>
                        <span className={`${res.status === 0 ? 'bg-red-500 text-white p-1 rounded' : 'text-white bg-green-500 p-1 rounded'}`}>
                          {res.status === 0 ? "unverified" : "verified"}
                        </span>
                      </td>
                      <td className='p-3 text-sm font-medium text-center whitespace-nowrap'>{res.status === 1 ? "Passenger" : "passenger"}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className='grid grid-cols-1 gap-4 md:hidden'>
          {
            passenger.map((res, index) => {
              return (
                <div className="bg-white p-4 shadow">
                  <div className='flex flex-col justify-center space-x-2 text-sm'>
                    <div className='flex justify-between items-center flex-wrap mb-2'>
                      <span className='font-semibold'>Serial Number: <span className='font-thin'>{index + 1}</span></span>
                      <span className={`${res.status === 0 ? 'bg-red-500 text-white p-1 rounded' : 'text-white bg-green-500 p-1 rounded'}`}>
                        {res.status === 0 ? "unverified" : "verified"}
                      </span>
                    </div>
                    <div className='mb-2'>
                      <span className='flex items-center'>
                        <FaUser />
                        <div>
                          <span className='ml-2 font-semibold'>Name:</span>
                          <span> {res.name}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        <FaEnvelope />
                        <div>
                          <span className='ml-2 font-semibold'>Email:</span>
                          <span> {res.email}</span>
                        </div>
                      </span>
                    </div>

                    <div className='mb-2'>
                      <span className='flex items-center'>
                        <FaUserFriends />
                        <div>
                          <span className='ml-2 font-semibold'>Roles:</span>
                          <span> {res.roles === 1 ? "Passenger" : "passenger"}</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Passenger

{/* <h1 className='text-2xl font-semibold mb-3 text-primary tracking-wide'>Register Passenger Table</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      S.N.
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Email Address
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Status
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                      Roles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    passenger.map((res, index) => {
                      return (
                        <tr key={res.id} className="bg-gray-100 border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {res.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {res.email}
                          </td>
                          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center'>
                            <span className={`${res.status === 0 ? 'bg-red-500 text-white p-1 rounded' : 'text-white bg-green-500 p-1 rounded'}`}>
                              {res.status === 0 ? "unverified" : "verified"}
                            </span>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {res.roles}
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}