"use client";
import Image from "next/image";
import { services } from "@/data";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <>
      <section className="container max-w-6xl mx-auto py-12 px-6 flex flex-col gap-8 items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="font-poppins font-semibold text-lg text-teal-700"
        >
          {" "}
          Services{" "}
        </motion.h2>
        <div className="w-full grid md:grid-cols-2 items-center gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeIn", delay: 0.1 },
            }}
            className="w-full flex justify-center"
          >
            <Image
              src={"/assets/service.png"}
              width={350}
              height={350}
              alt="Service Illustration"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "easeIn", delay: 0.1 },
            }}
            className="grid grid-cols-2 place-items-center gap-6"
          >
            {services.map((service, i) => (
              <article
                key={i}
                className="w-full bg-white shadow rounded-lg px-6 py-5 flex flex-col gap-3 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <figure className="w-10 h-10 flex items-center">
                    <Image
                      src={service.icon}
                      width={40}
                      height={40}
                      alt={service.title}
                      className="object-contain"
                    />
                  </figure>
                  <h3 className="font-semibold text-teal-700 text-sm font-poppins">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600">
                  {service.desc}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
