"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const SwiperComp = ({ relatedProperties = [] }) => {
  return (
    <div>
      {" "}
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
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {relatedProperties.map((property, index) => (
          <SwiperSlide key={index}>
            <Link href={`/realisations/${property.id}`}>
              <div className=" relative h-[450px] rounded overflow-hidden group">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className=" object-cover transition-transform duration-700
                                 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div
                  className=" absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black 
                              to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                />

                {/* Title & Price */}
                <div
                  className=" flex justify-between items-center w-full absolute bottom-0
                               left-0 z-10 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform
                                duration-700"
                >
                  <h4 className=" text-white text-2xl font-bricolage font-bold">
                    {property.title}
                  </h4>
                  <p className="text-white text-xl font-bricolage">
                    {property.location}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
