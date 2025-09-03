"use client";
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
  return (
    <section className="max-w-6xl mx-auto min-h-1/2 flex items-center py-12 px-6">
      <div className="container w-full flex flex-col gap-6 mx-auto items-center overflow-hidden">
        <h2 className="text-sm font-poppins font-medium">Featured Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCards]}
          effect="cards"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-3">
                <figure className="rounded-xl overflow-hidden">
                  <Image
                    src={product.image[0].pic1}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </figure>
                <section className="px-3 flex flex-col ">
                  <article className="grid grid-cols-2 text-sm font-poppins font-semibold mb-3">
                    <h3 className="truncate whitespace-nowrap text-white">
                      {product.name}
                    </h3>
                    <p className="ml-4 text-teal-700 text-end">
                      {CurrencyFormatter(product.price)}
                    </p>
                  </article>
                  <div className="text-xs font-poppins font-normal mb-3">
                    <h3 className="text-white font-medium mb-3">Specs :</h3>
                    <div className="grid grid-cols-2 gap-3 text-gray-300">
                      <div>
                        <MdOutlineSmartphone />
                        <span className="truncate ">
                          {product.specs.display}
                        </span>
                      </div>
                      <div>
                        <MdOutlineSdStorage />
                        <span className="truncate">
                          {product.specs.storage}
                        </span>
                      </div>
                      <div>
                        <MdOutlineCamera />
                        <span className="truncate ">
                          {product.specs.camera}
                        </span>
                      </div>
                      <div>
                        <MdOutlineBattery0Bar />
                        <span className="truncate">
                          {product.specs.battery}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xs text-white/50 font-poppins font-medium mb-3">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </h3>

                  <div className="w-full flex items-center gap-6">
                    <button
                      disabled={!product.inStock}
                      className=" px-6 rounded-full shadow-2xl text-sm font-medium font-gal py-3 bg-teal-800 text-white"
                    >
                      {" "}
                      Buy{" "}
                    </button>
                    <button> View </button>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlide;
