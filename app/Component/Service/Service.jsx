import React from "react";
import { Services } from "../../JsonData/Services";
import Image from "next/image";

const Service = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bricolage font-bold leading-tight">
              Solutions d’ingénierie
            </h1>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-jost font-semibold mb-3 sm:mb-4">Nos expertises</h3>
            <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Du cadrage à la livraison, nos ingénieurs sécurisent les décisions techniques, les coûts et les délais de vos projets.
            </p>
            <a href="/expertises">
              <button
                className="flex items-center
                text-black font-semibold hover:underline text-sm sm:text-base md:text-lg py-2 sm:py-3 px-0 hover:text-[#c9a24b] transition-colors"
              >
                <span>Toutes nos expertises</span>
                <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-10">
          {Services.map((service, index) => (
            <div
              className="border border-black rounded-xl p-4 sm:p-6 transition-all duration-300
                       hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              key={index}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="mb-3 sm:mb-4 transition-transform duration-700 group-hover:rotate-[360deg] sm:w-[70px] sm:h-[70px]"
              />
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bricolage relative inline-block mt-2 mb-2 
                  after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
                   after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-normal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
