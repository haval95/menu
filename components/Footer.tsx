import Image from "next/image"
import React from 'react'

function Footer() {
  return (
          <footer className="bg-white max-w-screen-xl mx-auto my-4 px-6 pt-1 border-t-2">
        <div className="container mx-auto  py-10">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">

            <div className="flex flex-col w-1/2 md:p-0   ">
                 <Image src='/logo.webp' alt="logo" width={250} height={250} />
              <p className=" ">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>

              <p className="pt-4">
                Privacy Policy | © {new Date().getFullYear()} Rest <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                 Hvl
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Main Pages</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-yellow-400"></span>

              <p className="text-[16px] hover:text-yellow-400 cursor-pointer text-gray-600 duration-500 transform hover:font-bold">
               Home
              </p>
              <p className="text-[16px] hover:text-yellow-400 cursor-pointer text-gray-600 duration-500 hover:font-bold">
                About
              </p>
              <p className="text-[16px] hover:text-yellow-400 cursor-pointer text-gray-600 duration-500  hover:font-bold">
                Menu
              </p>
              <p className="text-[16px] hover:text-yellow-400 cursor-pointer text-gray-600 duration-500  hover:font-bold">
                Book
              </p>
              <p className="text-[16px] hover:text-yellow-400 cursor-pointer text-gray-600 duration-500  hover:font-bold">
                Sign out
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-yellow-400"></span>

              <p className="text-[16px]  text-gray-600 font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-gray-600 font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-gray-600 font-bold">Saturday:</p>
              <p className="text-[16px] text-gray-600 font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-gray-600 font-bold ">
                Sunday - Closed
              </p>
            </div>

            <span></span>
          </div>
        </div>
      </footer>
  )
}

export default Footer