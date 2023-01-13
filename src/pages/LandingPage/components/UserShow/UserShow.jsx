// import React, { useEffect } from 'react';
// import { FaCarAlt, FaUsers } from 'react-icons/fa';
// import "./UserShow.css";
// import "aos/dist/aos.css";
// import Aos from 'aos';

// const UserShow = () => {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);
//   return (
//     <>
//       {/* User Show */}
//       <div className='w-full bg-white'>
//         <div className="space-y-16 px-4 container xl:max-w-7xl mx-auto py-16 lg:py-16">
//           <div class="flex flex-col text-center w-full mb-20" bis_skin_checked="1">
//             <p className='text-primary text-lg font-medium mb-4'>Ride Hero<span className='animate-ping'>_</span> </p>
//             <h1 class="sm:text-3xl text-2xl font-medium title-font text-white tracking-wide">There are no any users now</h1>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 px-5">
//             <div className="flex flex-col rounded-lg bg-back border-primary border-2 overflow-hidden shadow-xl text-white cursor-pointer blink" data-aos="fade-down-right">
//               <div className="p-10 lg:py-16 md:py-16 sm:py-16 grow w-full flex justify-between items-center text-xl">
//                 <div className='flex flex-col'>
//                   <span className='text-3xl font-bold'>0+</span>
//                   <span className='font-medium'>Driver</span>
//                 </div>
//                 <div>
//                   <FaUsers className='text-6xl' />
//                 </div>
//               </div>
//             </div>
//             {/* END Card: User Show */}

//             {/* Card: User Show */}
//             <div className="flex flex-col rounded-lg shadow-xl bg-back border-primary border-2 overflow-hidden text-white cursor-pointer blink" data-aos="fade-down-right">
//               <div className="p-10 lg:py-16 md:py-16 sm:py-16 grow w-full flex justify-between items-center text-xl">
//                 <div className='flex flex-col'>
//                   <span className='text-3xl font-bold'>0+</span>
//                   <span className='font-medium'>Passenger</span>
//                 </div>
//                 <div>
//                   <FaUsers className='text-6xl' />
//                 </div>
//               </div>
//             </div>
//             {/* END Card: User Show */}

//             {/* Card: User Show */}
//             <div className="flex flex-col rounded-lg shadow-xl bg-back border-primary border-2 overflow-hidden text-white cursor-pointer blink " data-aos="fade-down-right">
//               <div className="p-10 lg:py-16 md:py-16 sm:py-16 grow w-full flex justify-between items-center text-xl">
//                 <div className='flex flex-col'>
//                   <span className='text-3xl font-bold'>0+</span>
//                   <span className='font-medium'>Total Rides</span>
//                 </div>
//                 <div>
//                   <FaCarAlt className='text-6xl' />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* END User Show */}
//         </div>
//       </div>
//     </>
//   )
// }

// export default UserShow

import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';

const UserShow = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- Stats Section: User Show --> */}
      <div class="bg-white">
        <div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div class="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x">
            <dl data-aos="fade-up" class=" space-y-1 p-5">
              <dt class="text-4xl font-extrabold">
                0+
              </dt>
              <dd class="text-lg tracking-wide font-semibold text-primary">
                Passengers
              </dd>
            </dl>
            <dl data-aos="fade-up" class="space-y-1 p-5">
              <dt class="text-4xl font-extrabold">
                0+
              </dt>
              <dd class="text-lg tracking-wide font-semibold text-primary">
                Drivers
              </dd>
            </dl>
            <dl data-aos="fade-up" class="space-y-1 p-5">
              <dt class="text-4xl font-extrabold">
                0+
              </dt>
              <dd class="text-lg tracking-wide font-semibold text-primary">
                Total Rides
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* <!-- END Stats Section: User Show --> */}
    </>
  )
}

export default UserShow