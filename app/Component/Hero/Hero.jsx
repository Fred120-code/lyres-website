"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { trackEvent } from "../../../lib/gtm";

//Hero
import HeroSlides from "../../JsonData/heroSlides";

import Marquee from "../Marquee/Marquee";
import About from "../About/About";
import DesingProcess from "../DesingProcess/DesingProcess";
import Properties from "../Properties/Properties";
import VideoBanner from "../VideoBanner/VideoBanner";
import Testimonial from "../Testimonial/Testimonial";
import SocialImage from "../SocialImage/SocialImage";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero-section relative w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={{
            nextEl: ".hero-swiper-next",
            prevEl: ".hero-swiper-prev",
          }}
          className="hero-swiper h-full"
        >
          {HeroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide relative flex h-full w-full items-center justify-center text-white"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 z-0 bg-black/70"></div>
                {/* Content */}

                <div className="hero-content relative z-10 w-full max-w-5xl space-y-4 text-start sm:space-y-6">
                  <span className="text-sm font-medium uppercase tracking-wide sm:text-base md:text-xl">
                    {slide.span}
                  </span>
                  <h1 className="whitespace-pre-line font-bricolage text-4xl font-bold sm:text-5xl md:text-7xl lg:text-8xl">
                    {slide.title}
                  </h1>
                  <div className="flex flex-col justify-center gap-3 text-sm sm:gap-4 sm:text-base md:flex-row md:gap-6 md:text-lg">
                    {slide.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="max-w-xl md:flex-1">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <Link href={slide.buttonLink}>
                    <button
                      type="button"
                      onClick={() =>
                        trackEvent("click-started", { button: "hero" })
                      }
                      className="mt-2 cursor-pointer rounded border border-white px-5 py-3
                        text-sm font-medium uppercase tracking-wide text-white transition-all
                        hover:bg-white hover:text-black sm:mt-4 sm:px-6 sm:text-base"
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
          <button
            type="button"
            aria-label="Diapositive suivante"
            className="swiper-button-next swiper-btn swiper-next hero-swiper-next"
          >
            <i className="ri-arrow-right-wide-line"></i>
          </button>
          <button
            type="button"
            aria-label="Diapositive précédente"
            className="swiper-button-prev swiper-btn swiper-prev hero-swiper-prev"
          >
            <i className="ri-arrow-left-wide-line"></i>
          </button>
        </Swiper>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* About */}
      <About />

      {/* DesingProcess */}
      <DesingProcess />

      {/* Properties */}
      <Properties />

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
