import React from 'react'
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from 'next/link';

const BlogPageHeader = () => {
  return (
    <div className="flex flex-col px-5 py-5 md:px-12 lg:px-28 items-center ">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"}>

        <Image
          src={logo}
          alt="logo"
          width={180}
          className="w-[130px] sm:w-auto"
        /></Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-base font-normal py-3 px-4 rounded-md leading-none">
          Get Started
        </button>
      </div>

      <div
        className="mt-2 p-2 px-4 bg-blue-100 items-center text-BLACK leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-blue-50 uppercase px-2 py-1 text-xs font-bold mr-3">
          NEW
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          Get the coolest t-shirts from our brand new store
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  )
}

export default BlogPageHeader
