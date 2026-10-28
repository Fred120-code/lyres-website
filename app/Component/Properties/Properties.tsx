"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Image from "next/image";
import PropertyData from "../../JsonData/properties.js";

const Properties = () => {
  return (
    <>
      <section className="px-4 sm:px-[8%] lg:px-[12%] py-8 sm:py-12 md:py-16 lg:py-20 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bricolage font-bold leading-tight">Nos missions</h1>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-jost font-semibold mb-2 sm:mb-3">Exemples de missions</h3>
            <p className="mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              Un aperçu de la manière dont nous intervenons sur vos projets : études, coordination BIM, pilotage de chantier et conseil.
            </p>
            <a href="/realisations">
              <button className="flex items-center text-black font-semibold hover:underline text-sm sm:text-base md:text-lg py-2 sm:py-3 px-0 transition-all">
                <span>Toutes les missions</span>
                <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
              </button>
            </a>
          </div>
        </div>

        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-project-next",
            prevEl: ".swiper-project-prev",
          }}
          autoplay={{
            delay: 1500,
          }}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="relative"
        >
          {PropertyData.map((property, index) => (
            <SwiperSlide key={index}>
              <Link href={`/realisations/${property.id}`}>
                <div
                  className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] 
                xl:h-[450px] rounded overflow-hidden group shadow-md"
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 
                    group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[25%] sm:h-[30%] 
                  bg-gradient-to-t from-black to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700 z-0"
                  />

                  {/* Title & Price */}
                  <div
                    className="flex flex-col sm:flex-row justify-between items-start 
                  sm:items-center gap-2 sm:gap-0 w-full absolute bottom-0 
                  left-0 z-10 px-2 sm:px-3 md:px-4 py-2 sm:py-3 translate-y-full 
                  group-hover:translate-y-0 transition-transform duration-700"
                  >
                    <h4
                      className="text-white text-base sm:text-lg md:text-xl 
                    lg:text-2xl font-bricolage font-bold line-clamp-2"
                    >
                      {property.title}
                    </h4>
                    <p
                      className="text-white text-sm sm:text-base md:text-lg lg:text-xl 
                    font-bricolage whitespace-nowrap"
                    >
                      {property.location}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Properties;
