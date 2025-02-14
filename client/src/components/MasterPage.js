import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";














// const MasterPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-[80px] sm:border-l-2  text-center text-gray-800 font-black leading-7 ml-3 md:leading-10">
//                Book  <span className="text-indigo-700 ">It</span> </h1>
//       <div className="flex items-center justify-center border-b-2 border-gray-400 mb-8">
//         {/* Placeholder for a full-width line */}
//       </div>
//       <div className="flex gap-8">
//         {/* Hall Booking System */}
//         <div className="bg-white p-4 rounded-lg shadow-md text-center text-[20px]">
//           <Link to="/hall-booking-system" className="block w-full py-4 px-6 font-semibold text-center text-blue-600 hover:bg-blue-50">
//             Go to Hall Booking
//           </Link>
//         </div>

//         {/* Transport Booking System */}
//         <div className="bg-white p-4 rounded-lg shadow-md text-center">
//           <Link to="/transport-booking-system" className="block w-full py-4 px-6 font-semibold text-center text-green-600 hover:bg-green-50">
//             Go to Transport Booking
//           </Link>
//         </div>

//         {/* Canteen Booking System */}
//         <div className="bg-white p-4 rounded-lg shadow-md text-center">
//           <Link to="/canteen-booking-system" className="block w-full py-4 px-6 font-semibold text-center text-yellow-600 hover:bg-yellow-50">
//             Go to Canteen Booking
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

















// const MasterPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-full"> // Root container with rounded corners
//       <h1 className="text-xl sm:border-l-2 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-black leading-7 ml-3 md:leading-10">
//         Book <span className="text-indigo-700">It</span>
//       </h1>
//       <div className="flex flex-col items-center gap-8">
//         {/* Hall Booking System */}
//         <div className="bg-white p-4 rounded-full shadow-md text-center">
//           <h2 className="text-xl font-semibold mb-4">Hall Booking System</h2>
//           <Link to="/hall-booking-system" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
//             Go to Hall Booking
//           </Link>
//         </div>

//         {/* Transport Booking System */}
//         <div className="bg-white p-4 rounded-full shadow-md text-center">
//           <h2 className="text-xl font-semibold mb-4">Transport Booking System</h2>
//           <Link to="/transport-booking-system" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
//             Go to Transport Booking
//           </Link>
//         </div>

//         {/* Canteen Booking System */}
//         <div className="bg-white p-4 rounded-full shadow-md text-center">
//           <h2 className="text-xl font-semibold mb-4">Canteen Booking System</h2>
//           <Link to="/canteen-booking-system" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full">
//             Go to Canteen Booking
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };












const MasterPage = () => {
  return (
    <>
    {/* <Navbar /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">
          Welcome to the Book It Master Page
        </h1>
        <div className="flex gap-8">
          {/* Hall Booking System */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Hall Booking System</h2>
            <Link
              to="/hall-booking-system"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Go to Hall Booking
            </Link>
          </div>

          {/* Transport Booking System */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">
              Transport Booking System
            </h2>
            <Link
              to="/transport-booking-system"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Go to Transport Booking
            </Link>
          </div>

          {/* Canteen Booking System */}
         <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">
              Canteen Booking System
            </h2>
            <Link
              to="/canteen-booking-system"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              Go to Canteen Booking
            </Link>
          </div> 
        </div>
      </div>

      {/* <div class="container mx-auto text-center pt-24">
        <div class="items-center justify-center flex">
          <div class="text-center">
            
              <h1 className="text-xl   sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-black leading-7  md:leading-10">
                Book <span className="text-indigo-700">It</span>{" "}
              </h1>

            <ul class="flex flex-row mt-10 justify-center">
              <div class="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
              <li class="relative p-6">
                <div
                  class="border-t-2 absolute h-8  border-gray-400 top-0 left-[50%] right-0"
                ></div>
                <div class="relative flex justify-center">
                  <div class="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
            
                      <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">
                          Hall Booking System
                        </h2>
                        <Link
                          to="/hall-booking-system"
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                          Go to Hall Booking
                        </Link>
                      </div>
                 
                </div>
              </li>
              <li class="relative p-6">
                <div
                  class="border-t-2 absolute h-8 border-gray-400 top-0 left-0 right-[45%]"
                 
                ></div>
                <div class="relative flex justify-center">
                  <div class="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0 left-[55%]"></div>
               
                      <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">
                          Transport Booking System
                        </h2>
                        <Link
                          to="/transport-booking-system"
                          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                          Go to Transport Booking
                        </Link>
                      </div>
                 
                </div>
              </li>
              <li class="relative p-6">
                <div
                  class="border-t-2 absolute h-8 border-gray-400 top-0 left-[-50%] right-[50%]"
                
                ></div>
                <div class="relative flex justify-center">
                  <div class="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0 "></div>
                  
                      <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">
                          Canteen Booking System
                        </h2>
                        <Link
                          to="/canteen-booking-system"
                          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                          Go to Canteen Booking
                        </Link>
                      </div>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MasterPage;
