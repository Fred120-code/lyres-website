import React from "react";
import { ProcessSteps } from "../../JsonData/ProcessSteps";

const DesingProcess = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-0">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bricolage font-bold leading-tight">
                Notre méthode
              </h1>
            </div>

            <div className="lg:w-1/2 w-full">
              <h3
                className="uppercase tracking-wider font-semibold border-b 
                                  pb-2 mb-4 sm:mb-6 text-xs sm:text-sm w-fit"
              >Méthode</h3>
              <p className="text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                Une démarche claire en quatre étapes, du besoin exprimé à la livraison de votre projet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-6 sm:pt-10">
            {ProcessSteps.map(({ id, imgSrc, title, description }) => (
              <div key={id} className="w-full relative">
                <div className="flex flex-col items-center cursor-pointer relative group">
                  {/**Circle with image and number */}
                  <div
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[170px] lg:h-[170px] rounded-full shadow-lg flex items-center
                           justify-center relative hover:-translate-y-1.5 transition-transform duration-300"
                  >
                    <img
                      src={imgSrc}
                      alt={`process ste ${id}`}
                      className="w-14 sm:w-16 lg:w-[70px] h-14 sm:h-16 lg:h-[70px] transition-transform duration-500 ease-out
                            group-hover:-rotate-y-360"
                    />
                    <span
                      className="absolute -top-3 right-8 sm:right-10 bg-black text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center
                       justify-center rounded-full text-xs sm:text-sm font-semibold select-none"
                    >
                      {id}.
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="font-bricolage text-base sm:text-lg md:text-xl mt-4 sm:mt-6 mb-2 sm:mb-4 relative after:absolute
                       after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:w-0 
                       group-hover:after:w-full after:transition-width after:duration-300 text-center"
                  >
                    {title}
                  </h2>
                  {/* Descrption */}
                  <p className="text-center text-xs sm:text-sm md:text-base max-w-[85%] mx-auto leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesingProcess;
