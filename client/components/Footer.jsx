import Image from "next/image";
import Link from "next/link";
import { MdChatBubbleOutline, MdOutlineCopyright } from "react-icons/md";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto bg-gray-100 ">
      <section className="max-w-6xl mx-auto py-12 px-6">
        <figure className="w-40 h-10 flex items-center mb-6">
          <Image
            src={"/icons/DelightLogo.svg"}
            width={200}
            height={100}
            alt="logo"
            className="object-contain "
          />
        </figure>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 border-b border-gray-300 pb-12">
          <article className="flex flex-col items-start gap-4">
            <h1 className="text-2xl text-teal-800 font-poppins font-semibold text-center">
              Free Consultation
            </h1>
            <p className="text-sm text-gray-600 font-poppins leading-relaxed">
              Got questions or need advice? Our experts are here to help you
              choose the right gadgets for your needs. Let’s chat and find the
              perfect fit for you!
            </p>
            <Link
              href={"/"}
              className="bg-teal-800 rounded-full text-white text-sm font-medium px-6 py-3 flex items-center gap-3"
            >
              <MdChatBubbleOutline />
              Chat
            </Link>
          </article>

          <div className="flex gap-12 justify-self-start md:justify-self-end">
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-base text-teal-800 font-medium font-poppins">
                Info :
              </h3>

              <ul className="flex flex-col items-start gap-2">
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
              <h3 className="text-sm text-teal-800 font-medium font-poppins">
                Get Started :
              </h3>
              <ul className="flex flex-col items-start gap-2">
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
        </div>
      </section>

      <section className="mx-auto">
        <div className="max-w-6xl mx-auto bg-teal-800 flex flex-col md:flex-row items-center justify-between p-6 text-white gap-6">
          <p className="text-sm">Designed By ChrisCodes</p>
          <p className="flex items-center gap-2 text-sm">
            <MdOutlineCopyright /> <span> Delight Gadegts 2025 </span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com" target="_blank">
              <figure className="h-10 w-10 flex items-center justify-center p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
                <Image
                  src="/icons/tweet.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </figure>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <figure className="h-10 w-10 flex items-center justify-center p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
                <Image
                  src="/icons/din.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </figure>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <figure className="h-10 w-10 flex items-center justify-center p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
                <Image
                  src="/icons/face.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
