"use client";
import Image from "next/image";

import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import Links from "./Links";

import Slide from "./animations/Slide";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 sm:px-4 h-20 ">
      <figure className="flex items-center">
        <Image
          src={"/icons/DelightLogo.svg"}
          width={200}
          height={80}
          alt="logo pic"
          className="object-contain w-auto h-10"
          priority
        />
      </figure>

      <Links />

      <div className="flex items-center h-10">
        <div className="hidden md:flex gap-6 ">
          <Link
            href="/sign-in"
            className="text-sm font-poppins font-medium shadow-md px-5 py-2 rounded-full hover:shadow-lg hover:bg-teal-800 hover:rounded hover:text-white transition duration-300 ease-in-out "
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-teal-800 rounded-full px-5 py-2 border border-black text-white text-sm font-medium shadow-md hover:text-black hover:shadow-lg hover:border-none hover:rounded hover:bg-transparent transition duration-300 ease-in-out"
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden flex items-center z-50 h-full ml-4 mb-3"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Open menu" : "Close menu"}
        >
          {" "}
          {isOpen ? (
            <LiaTimesSolid size={30} />
          ) : (
            <HiOutlineBars3BottomRight size={30} />
          )}
        </button>
      </div>

      {isOpen && <Slide onClose={handleClick} />}
    </nav>
  );
};

export default Navbar;
