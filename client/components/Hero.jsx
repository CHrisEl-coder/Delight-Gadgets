"use client";
import Image from "next/image";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-6xl min-h-screen w-full mx-auto flex items-center px-6 py-12">
      <div className="grid md:grid-cols-2 items-center gap-12 w-full mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeIn", delayChildren: 0.2 },
          }}
          className="flex flex-col gap-6 justify-center"
        >
          <div className="w-full flex flex-col text-center md:text-left ">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              className="text-3xl md:text-5xl font-bold font-gab mb-3 leading-tight"
            >
              WHERE INNOVATION MEETS YOUR HANDS
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
              }}
              className="flex items-center gap-3 font-medium text-lg md:text-xl text-gray-700 justify-center md:justify-start"
            >
              {" "}
              <GoDash size={28} /> Explore The Future
            </motion.p>
          </div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
            }}
            className="w-full flex items-start gap-6 justify-center md:justify-start"
          >
            <Link
              href={"/sign-up"}
              className="bg-teal-700 rounded-full px-6 py-3 shadow-md text-white text-sm font-poppins font-medium hover:shadow-xl hover:bg-teal-800 transition duration-300 ease-in-out cursor-pointer"
            >
              Get Started
            </Link>
            <Link
              href={"/services"}
              className="bg-gray-300 rounded-full px-6 py-3 shadow-md text-sm font-poppins font-medium hover:shadow-xl hover:bg-gray-400 transition duration-300 ease-in-out cursor-pointer"
            >
              {" "}
              Learn More{" "}
            </Link>
          </motion.div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-medium tracking-widest font-gab">
              Partner:{" "}
            </h3>
            <figure className="flex gap-3">
              <Image
                src={"/icons/appleLg.svg"}
                alt="appleLogo"
                width={100}
                height={100}
                className="object-contain h-10 w-auto "
              />
              <Image
                src={"/icons/mi.svg"}
                alt="redmi"
                width={100}
                height={100}
                className="object-contain h-10 w-auto"
              />
              <Image
                src={"/icons/sammy.svg"}
                alt="samsung"
                width={100}
                height={100}
                className="object-contain h-10 w-auto"
              />
            </figure>
          </div>
        </motion.div>
        <motion.figure
          initial={{ x: 50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeIn", delay: 0.1 },
          }}
          className="relative w-full h-[400px] md:h-[600px] min-h-[300px]"
        >
          <Image
            src={"/assets/delighhero.png"}
            fill
            alt="hero-ill"
            className="object-center md:object-right object-contain"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
