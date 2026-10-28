import React from "react";
import { tabContent, tabs } from "../../JsonData/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("his");

  return (
    <>
      {" "}
      <section className="px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-12 md:py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:w-2/3 w-full">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-snug md:leading-normal lg:leading-[4rem] xl:leading-[6rem]
              tracking-tight sm:tracking-normal md:tracking-[0.1rem] lg:tracking-[0.2rem] font-bricolage font-bold"
            >
              Ingénierie, conseil et maîtrise d’œuvre
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <h3
              className="uppercase tracking-wider font-semibold border-b 
            pb-2 mb-4 sm:mb-6 text-xs sm:text-sm w-fit"
            >
              À propos
            </h3>
            <p className="text-sm sm:text-base mb-4 text-gray-700 leading-relaxed">
              LYRES conçoit, coordonne et pilote vos projets de construction et d’infrastructures, avec rigueur technique et sens du service.
            </p>
            <a
              href="/a-propos"
              className="inline-flex items-center
            text-black font-semibold hover:underline text-sm sm:text-base hover:text-[#c9a24b] transition-colors"
            >
              En savoir plus <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
            </a>
          </div>
        </div>

        {/* Main Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Navigation, EffectCards, Autoplay]}
              loop={true}
              effect="cards"
              grabCursor={true}
              autoplay={{ delay: 1500 }}
              navigation={{
                nextEl: ".swiper-about-next",
                prevEl: ".swiper-about-prev",
              }}
              className="rounded"
              style={{
                padding: "15px",
              }}
            >
              {[
                "/images/batiment.svg",
                "/images/routes.svg",
                "/images/ouvrages.svg",
                "/images/bim.svg",
                "/images/amenagement.svg",
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`slide ${index + 1}`}
                    className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[550px] object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tabs & Content */}
          <div className="lg:w-1/2 w-full px-0 lg:px-6 pt-6 sm:pt-8 lg:pt-10">
            {/* Tabs */}
            <div className="flex gap-4 sm:gap-6 border-b mb-4 sm:mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`relative pb-2 text-sm sm:text-base lg:text-lg font-medium transition-colors cursor-pointer whitespace-nowrap
                        ${
                          activeTab === tab.key
                            ? "text-black after:h-1 after:absolute after:bottom-0 after:left-0 after:w-full after:bg-black"
                            : "text-gray-400 hover:text-black"
                        }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-3 sm:space-y-4 text-gray-700">
              {tabContent[activeTab].map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
