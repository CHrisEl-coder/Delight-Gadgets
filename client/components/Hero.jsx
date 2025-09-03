import Image from "next/image";
import Link from "next/link";
import { GoDash } from "react-icons/go";

const Hero = () => {
  return (
    <section className="max-w-6xl min-h-screen w-full mx-auto flex items-center px-6 py-12">
      <div className="grid md:grid-cols-2 items-center gap-12 w-full mx-auto">
        <div className="flex flex-col gap-6 justify-center">
          <div className="w-full flex flex-col text-center md:text-left ">
            <h1 className="text-3xl md:text-5xl font-bold font-gab mb-3 leading-tight">
              WHERE INNOVATION MEETS YOUR HANDS
            </h1>
            <p className="flex items-center gap-3 font-medium text-lg md:text-xl text-gray-700 justify-center md:justify-start">
              {" "}
              <GoDash size={28} /> Explore The Future
            </p>
          </div>
          <div className="w-full flex items-start gap-6 justify-center md:justify-start">
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
          </div>
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
        </div>
        <figure className="relative w-full h-[400px] md:h-[600px] min-h-[300px]">
          <Image
            src={"/assets/delighhero.png"}
            fill
            alt="hero-ill"
            className="object-center md:object-right object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
