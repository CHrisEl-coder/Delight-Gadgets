import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-black grid grid-cols-2 items-center rounded max-w-6xl mx-auto px-6 py-12 mb-6">
      <div>
        <article className="text-white">
          <h2 className="text-2xl font-semibold font-poppins">
            Subscribe To Out Newsletter
          </h2>
          <span className="text-sm text-white/50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            hic voluptatum nesciunt, aliquam laboriosam exercitationem quos
            dolores. Repudiandae odit consectetur quibusdam eum et ad, quod
            adipisci minima modi? Tempore, rem?
          </span>
        </article>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-self-end">
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-6 w-full md:w-1/2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-600 transition"
        />
        <button className="mt-6 ml-3 px-6 py-3 rounded-full bg-teal-600 text-white font-poppins font-medium ">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
