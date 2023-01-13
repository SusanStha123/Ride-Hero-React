import React, { useState } from 'react';
import { AdminFeedback } from './Helper';
import { FaEnvelope, FaUser } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

const Feedback = () => {
  const adminFeedback = React.useMemo(() => new AdminFeedback(), []);
  // const [open, setOpen] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const getFeedback = React.useCallback(async () => {
    let response = await adminFeedback.getFeedback();
    if (response !== false) {
      setFeedback(response)
    }
  }, []);

  React.useEffect(() => {
    getFeedback();
  }, [getFeedback]);
  return (
    <>
      <div className='p-5 h-screen bg-gray-100'>
        <h1 className='text-xl mb-4 font-semibold text-primary'>Feedback Messages</h1>
        <div className='overflow-auto shadow hidden md:block'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>S.N.</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Email Address</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {
                feedback.map((res, index) => {
                  return (
                    <tr className='border-b'>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{index + 1}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.name}</td>
                      <td className='p-3 text-sm text-back text-center whitespace-nowrap'>{res.email}</td>
                      <td className='p-3 text-sm text-primary font-medium text-center whitespace-nowrap'>{res.message}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className='grid grid-cols-1 gap-4 md:hidden'>
          {
            feedback.map((res, index) => {
              return (
                <div className="bg-white p-4 shadow">
                  <div className='flex flex-col justify-center space-x-2 text-sm'>
                    <div className='mb-2'>
                      <span className='p-2 font-semibold'>S.N.</span>
                      <span>{index + 1}</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold flex items-center'>
                        <FaUser />
                        <span className='ml-2'>Name</span>
                      </span>
                      <div>{res.name}</div>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold flex items-center'>
                        <FaEnvelope />
                        <span className='ml-2'>Email Address</span>
                      </span>
                      <div>{res.email}</div>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold flex items-center'>
                        <AiFillMessage />
                        <span className='ml-2'>Email Address</span>
                      </span>
                      <div className='text-primary font-medium'>{res.message}</div>
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

export default Feedback

{/* <h1 className='text-2xl font-semibold mb-3 text-primary tracking-wide'>Feedback Message Table</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
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
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  Feedback.map((res, index) => {
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
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          <span className={`${res.status === 0 ? 'bg-red-500 text-white p-1 rounded' : 'text-white bg-green-500 p-1 rounded'}`}>
                            {res.status === 0 ? "unverified" : "verified"}
                          </span>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {res.message}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div> */}