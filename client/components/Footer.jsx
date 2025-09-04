import Image from "next/image";
import Link from "next/link";
import { MdChatBubbleOutline, MdOutlineCopyright } from "react-icons/md";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto rounded bg-gray-300 overflow-hidden">
      <figure className="w-40 h-10 flex items-center mt-3 ml-6">
        <Image
          src={"/icons/DelightLogo.svg"}
          width={200}
          height={100}
          alt="logo"
          className="object-contain "
        />
      </figure>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-12 border-b border-gray-300 px-6">
        <article className="flex flex-col items-start ">
          <h1 className="text-2xl text-teal-600 font-poppins font-semibold text-center border-t border-gray-300 ">
            Free Consultation
          </h1>
          <p className="text-sm my-3 text-gray-600 font-poppins leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            dicta voluptatum magnam eaque soluta eius harum? Distinctio, tempore
            iusto in provident animi possimus libero, ducimus ad quia laudantium
            debitis quidem?
          </p>
          <Link
            href={"/"}
            className="bg-teal-600 rounded-full text-white text-sm font-medium px-6 py-3 flex items-center gap-3"
          >
            <MdChatBubbleOutline />
            Chat
          </Link>
        </article>

        <section className="justify-self-end">
          <div className="flex gap-6 items-start">
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-sm text-teal-600 font-medium font-poppins">
                Info :
              </h3>

              <ul className="flex flex-col items-start gap-3">
                <Link href={"/about"} className="text-xs text-neutral-500 ">
                  About
                </Link>
                <Link href={"/services"} className="text-xs text-neutral-500 ">
                  Services
                </Link>
                <Link href={"/products"} className="text-xs text-neutral-500 ">
                  Products
                </Link>
              </ul>
            </div>
            <div className="flex items-start flex-col gap-3 ">
              <h3 className="text-sm text-teal-600 font-medium font-poppins">
                Get Started :
              </h3>
              <ul className="flex flex-col items-start gap-3">
                <Link href={"/signup"} className="text-xs text-neutral-500 ">
                  {" "}
                  Sign Up{" "}
                </Link>
                <Link href={"/login"} className="text-xs text-neutral-500 ">
                  {" "}
                  Log In{" "}
                </Link>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <div className=" flex items-center justify-around bg-teal-600 text-white py-6 px-6 border-t border-r-gray-300">
        <p className="text-sm ">Designed By ChrisCodes</p>
        <p className="flex items-center gap-3 text-sm">
          <MdOutlineCopyright /> <span> Delight Gadegts 2025 </span>
        </p>
        <div className="flex items-center gap-6 ">
          <figure className="h-10 w-10 flex items-center justify-center p-3 rounded-full bg-white/20">
            <Image
              src={"/icons/tweet.svg"}
              alt="twitter"
              width={30}
              height={30}
            />
          </figure>
          <figure className="h-10 w-10 flex items-center justify-center p-3 rounded-full bg-white/20">
            <Image
              src={"/icons/din.svg"}
              alt="linkedin"
              width={30}
              height={30}
            />
          </figure>
          <figure className="h-10 w-10 flex items-center justify-center p-3 rounded-full bg-white/20">
            <Image
              src={"/icons/face.svg"}
              alt="facebook"
              width={30}
              height={30}
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
