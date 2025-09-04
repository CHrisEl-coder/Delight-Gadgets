import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="container max-w-6xl mx-auto py-12 px-6 flex flex-col gap-6 items-center">
        <h2 className="font-poppins font-medium text-sm"> Services </h2>
        <div className="grid grid-cols-2 place-items-center gap-6">
          <figure className="w-full h-full flex items-center">
            <Image
              src={"/assets/service.png"}
              width={300}
              height={300}
              alt="Service Illustration"
              className="object-cover"
            />
          </figure>
          <div className="grid grid-cols-2 place-items-center gap-6">
            <article className="w-full min-w-56 bg-white/30 shadow-sm rounded px-6 py-3 ">
              <div className="flex items-center gap-3">
                <figure className="w-10 h-10 flex items-center">
                  <Image
                    src={"/icons/swap.svg"}
                    width={50}
                    height={50}
                    alt="addons icon"
                    className="object-contain text-teal-600"
                  />
                </figure>
                <h3 className="whitespace-nowrap font-bold text-teal-600 text-sm font-poppins">
                  Swap and Upgrade
                </h3>
              </div>

              <p className="text-xs mt-3 leading-relaxed text-neutral-500">
                Seamlessly swap and upgrade your digital assets with our
                user-friendly platform, ensuring you always have access to the
                latest and most efficient technologies.
              </p>
            </article>
            <article className="w-full min-w-56 bg-white/30 shadow-sm rounded px-6 py-3 ">
              <div className="flex items-center gap-3">
                <figure className="w-10 h-10 flex items-center">
                  <Image
                    src={"/icons/repair.svg"}
                    width={100}
                    height={100}
                    alt="addons icon"
                    className="object-contain text-teal-600"
                  />
                </figure>
                <h3 className="whitespace-nowrap font-bold text-teal-600 text-sm font-poppins">
                  Repair and Maintainance
                </h3>
              </div>

              <p className="text-xs mt-3 leading-relaxed text-neutral-500">
                Keep your digital assets in top condition with our expert repair
                and maintenance services, designed to ensure optimal performance
                and longevity.
              </p>
            </article>
            <article className="w-full min-w-56 bg-white/30 shadow-sm rounded px-6 py-3 ">
              <div className="flex items-center gap-3">
                <figure className="w-10 h-10 flex items-center">
                  <Image
                    src={"/icons/add.svg"}
                    width={100}
                    height={100}
                    alt="addons icon"
                    className="object-contain text-teal-600"
                  />
                </figure>
                <h3 className="whitespace-nowrap font-bold text-teal-600 text-sm font-poppins">
                  Smart Add-Ons
                </h3>
              </div>

              <p className="text-xs mt-3 leading-relaxed text-neutral-500">
                Enhance your digital experience with our range of smart add-ons,
                tailored to provide additional functionality and convenience to
                your existing assets.
              </p>
            </article>
            <article className="w-full min-w-56 bg-white/30 shadow-sm rounded px-6 py-3 ">
              <div className="flex items-center gap-3">
                <figure className="w-10 h-10 flex items-center">
                  <Image
                    src={"/icons/support.svg"}
                    width={100}
                    height={100}
                    alt="addons icon"
                    className="object-contain text-teal-600"
                  />
                </figure>
                <h3 className="whitespace-nowrap font-bold text-teal-600 text-sm font-poppins">
                  Tech Consultation
                </h3>
              </div>

              <p className="text-xs mt-3 leading-relaxed text-neutral-500">
                Benefit from our expert tech consultation services, offering
                personalized advice and solutions to help you navigate the
                ever-evolving digital landscape.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
