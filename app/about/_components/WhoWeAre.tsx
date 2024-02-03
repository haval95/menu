import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
export default function WhoWeAre({ content, color = "yellow" }: { content: {buttonDestination:string, buttonText:string,  image: { url: string }, title:string, subtitle:string, detail:string, slogan:string}, color:string}) {
  return (
    <section className="flex items-center bg-white xl:h-screen font-poppins ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative lg:max-w-md">
                              <Image src={content.image?.url}
                                  width={1000}
                                  height={1000}
                                  alt="aboutimage"
                                  className={`relative z-10 object-cover w-full rounded h-96 border-4  shadow-xl`}
                              />
                        <div
                            className={`absolute  shadow-2xl bottom-0 right-0 z-10 p-8 bg-white  border-y-4  border-${color}-500 rounded shadow dark:border-${color}-500 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-black  `}>
                            <p className="text-lg font-semibold md:w-72">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    className={`absolute top-0 left-0 w-16 h-16 text-${color}-700 opacity-10`}
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                    </path>
                                </svg> {content.slogan}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className={`pl-4 mb-6 border-l-4 border-${color}-500 `}>
                          <span className="text-sm text-black uppercase dark:text-black">{content.subtitle}</span>
                        <h1 className="mt-2 text-3xl font-black text-black md:text-5xl dark:text-black">
                            {content.title}
                        </h1>
                    </div>
                    <p className="mb-6 text-base leading-7 text-black dark:text-black text-justify">
                          {content.detail}
                      </p>
                    <Link href={content.buttonDestination} className={`btn bg-${color}-500 capitalize text-white duration-500 border-1 hover:bg-${color}-600 hover:shadow-none hover:border-gray-200 px-8 border-gray-200 shadow-md text-black `}>
                          {content.buttonText}<IoMdArrowRoundForward className="text-white animate-back text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
