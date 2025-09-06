"use client";
import { delay, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import { products } from "@/data";
import Image from "next/image";
import { CurrencyFormatter } from "@/lib/utils";
import {
  MdOutlineCamera,
  MdOutlineBattery0Bar,
  MdOutlineSmartphone,
  MdOutlineSdStorage,
} from "react-icons/md";

const ProductSlide = () => {
  const cardVariants = {
    offScreen: {
      y: 40,
      opacity: 0,
    },

    onScreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 },
    },
  };
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="w-full flex flex-col gap-8 items-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="text-lg font-poppins font-semibold text-teal-700"
        >
          Featured Products
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCards]}
          effect="cards"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="w-full max-w-md"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                variants={cardVariants}
                initial="offScreen"
                whileInView="onScreen"
                className="bg-white/90 shadow-md rounded-xl p-3 flex flex-col gap-4"
              >
                <figure className=" bg-black p-2 rounded-xl overflow-hidden">
                  <Image
                    src={product.image[0].pic1}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-52"
                  />
                </figure>
                <section className="flex flex-col gap-3">
                  <article className="flex items-center justify-between text-sm font-semibold font-poppins">
                    <h3 className="truncate">{product.name}</h3>
                    <p className="text-teal-700">
                      {CurrencyFormatter(product.price)}
                    </p>
                  </article>
                  <div className="text-xs text-neutral-600">
                    <h3 className="font-medium mb-2">Specs :</h3>
                    <div className="grid grid-cols-2 gap-2 text-neutral-500">
                      <div className="flex items-center gap-1">
                        <MdOutlineSmartphone />
                        <span>{product.specs.display}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineSdStorage />
                        <span>{product.specs.storage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineCamera />
                        <span>{product.specs.camera}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineBattery0Bar />
                        <span>{product.specs.battery}</span>
                      </div>
                    </div>
                  </div>
                  <h3
                    className={`text-xs font-medium ${
                      product.inStock ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </h3>

                  <div className="flex items-center gap-4 mt-2">
                    <button
                      disabled={!product.inStock}
                      className={`px-6 rounded-full text-sm font-medium font-gal py-2  transition ${
                        product.inStock
                          ? "bg-teal-800 hover:bg-teal-900 text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {" "}
                      Buy{" "}
                    </button>
                    <button className="bg-black rounded-full text-sm font-gal shadow-md px-6 py-2 text-white hover:shadow-lg transition ease-in-out duration-300 ">
                      {" "}
                      View{" "}
                    </button>
                  </div>
                </section>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlide;
