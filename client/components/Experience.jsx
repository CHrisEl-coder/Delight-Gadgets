import Image from "next/image";

const Experience = () => {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 py-12 border-t border-gray-300">
      <h1 className="text-center text-xl font-medium font-gab mb-6 ">
        {" "}
        Why Choose Us{" "}
      </h1>
      <div className="container bg-[url('/assets/global.png')] bg-no-repeat bg-contain bg-center w-full px-6 md:bg-white/50 grid grid-cols-2 md:grid-cols-3 gap-6 py-12 mx-auto items-stretch">
        <div className="grid grid-rows-2 gap-12 items-start">
          <article className="h-full tracking-wide leading-tight bg-white/70 p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-bold font-poppins leading-tight mb-3">
              LATEST GADGETS IN STOCK
            </h3>
            <p className="text-xs font-normal text-neutral-600 leading-relaxed tracking-wide">
              We bring you the most cutting-edge gadgets—from flagship
              smartphones and powerful laptops to smart wearables and
              accessories. No more hopping between multiple stores; everything
              you need to stay ahead in tech is right here.
            </p>
          </article>
          <article className="h-full tracking-wide leading-tight bg-white/70 p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-bold font-poppins leading-tight mb-3">
              FAST, SEAMLESS AND SECURE
            </h3>
            <p className="text-xs font-normal text-neutral-600 leading-relaxed tracking-wide">
              From browsing to checkout, we make your shopping journey smooth
              and stress-free. With secure payments and lightning-fast delivery,
              your favorite gadgets get to your doorstep quicker than you’d
              expect.
            </p>
          </article>
        </div>

        <figure className="hidden md:flex items-center">
          <Image
            src={"/assets/global.png"}
            alt="globe"
            width={500}
            height={500}
            className="object-contain w-auto "
          />
        </figure>

        <div className="grid grid-rows-2 gap-12 items-start">
          <article className="h-full tracking-wide leading-tight bg-white/70 p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-bold font-poppins leading-tight mb-3">
              DEDICATED AFTER SALE SUPPORT
            </h3>
            <p className="text-xs font-normal text-neutral-600 leading-relaxed tracking-wide">
              Buying a gadget is just the beginning—we’re here every step of the
              way. Our friendly tech experts are always available to help you
              choose the right product and provide reliable after-sales support
              whenever you need it.
            </p>
          </article>
          <article className="h-full tracking-wide leading-tight bg-white/70 p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-bold font-poppins leading-tight mb-3">
              PRODUCT AUTHENTICITY GUARANTED
            </h3>
            <p className="text-xs font-normal text-neutral-600 leading-relaxed tracking-wide">
              Your trust is our priority. Every product in our store is
              original, tested, and comes with a valid warranty. You can shop
              with confidence knowing you’re getting quality gadgets that are
              built to last.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
