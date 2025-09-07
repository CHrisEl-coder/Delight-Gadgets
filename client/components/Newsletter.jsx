import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-[url('/assets/preview.jpg')] bg-no-repeat bg-cover rounded mx-auto px-6 py-12 relative">
      <div className="absolute inset-0 bg-black/60 rounded"></div>
      <div className=" relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center place-items-center gap-6 ">
        <div className="w-full flex flex-col items-start">
          <article className=" flex flex-col items-start gap-3 ">
            <h2 className="text-3xl md:text-4xl font-semibold font-poppins text-white">
              Subscribe To Our Newsletter
            </h2>
            <span className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              Get the latest updates, tech news, and exclusive offers delivered
              straight to your inbox. Join our community today!
            </span>
          </article>
        </div>

        <form className="w-full flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-600 transition ease-in-out duration-300"
          />
          <button className="px-8 py-3 rounded-full bg-teal-600 text-white font-poppins font-medium hover:bg-teal-500 transition ease-in-out duration-300 cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
