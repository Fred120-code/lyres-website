"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { trackEvent } from "../../../lib/gtm";

//Hero
import HeroSlides from "../../JsonData/heroSlides";

import Marquee from "../Marquee/Marquee";
import About from "../About/About";
import DesingProcess from "../DesingProcess/DesingProcess";
import Service from "../Service/Service";
import Properties from "../Properties/Properties";
import Marquee2 from "../Marquee2/Marquee2";
import Service2 from "../Service2/Service2";
import Gallery from "../Gallery/Gallery";
import VideoBanner from "../VideoBanner/VideoBanner";
import Testimonial from "../Testimonial/Testimonial";
import SocialImage from "../SocialImage/SocialImage";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="w-full h-screen relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectCards]}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="h-full"
        >
          {HeroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full relative flex items-center  justify-center
                                text-white px-6"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className=" absolute inset-0 bg-black/70 z-0"></div>
                {/* Content */}

                <div className=" relative hero-content z-10 max-w-4xl text-start space-y-6">
                  <span className="text-xl font-medium uppercase">
                    {slide.span}
                  </span>
                  <h1 className="text-6xl md:text-8xl font-bold font-bricolage whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <div className=" flex flex-col md:flex-row gap-4 text-lg justify-center">
                    {slide.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="max-w-xl">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <Link href={slide.buttonLink}>
                    <button
                      onClick={() =>
                        trackEvent("click-started", { button: "hero" })
                      }
                      className="mt-4 cursor-pointer rounded px-6 py-3 border border-white 
                        text-white uppercase font-medium tracking-wide hover:bg-white 
                        hover:text-black transition-all"
                    >
                      {slide.buttonText}{" "}
                      <i className="bi bi-arrow-right ml-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div
            className="swiper-button-next swiper-btn swiper-next left-4 top-[80%]
           absolute z-20"
          >
            <i className="ri-arrow-right-wide-line"></i>
          </div>
          <div
            className="swiper-button-prev swiper-btn swiper-prev left-4 top-[90%]
           absolute z-20"
          >
            <i className="ri-arrow-left-wide-line"></i>
          </div>
        </Swiper>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* About */}
      <About />

      {/* DesingProcess */}
      <DesingProcess />

      {/* Services */}
      <Service />

      {/* Properties */}
      <Properties />

      {/* Marquee 2 */}
      <Marquee2 />

      {/* Service2 */}
      <Service2 />

      {/* Gallery */}
      <Gallery />

      {/* VideoBanner */}
      <VideoBanner />

      {/* Testimonial */}
      <Testimonial />

      {/* SocialImage */}
      <SocialImage />
    </>
  );
};

export default Hero;
