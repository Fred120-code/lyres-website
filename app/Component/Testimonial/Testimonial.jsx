import { testimonialData } from "../../JsonData/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="px-4 sm:px-[8%] lg:px-[12%] py-12 sm:py-20 bg-white">
      <div
        className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12
         gap-4 sm:gap-8"
      >
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bricolage font-bold leading-tight">
            Nos <br /> engagements
          </h1>
        </div>
        <div className="lg:w-2/3">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">Notre approche</h3>
          <p className="text-sm sm:text-base text-gray-700">
            Cinq principes guident chacune de nos missions, du premier échange à la réception des travaux : ils sont la base de la confiance que nous construisons avec nos clients.
          </p>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg h-full">
              <img
                src="/qoute.svg"
                alt="qoute"
                className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 object-contain mb-3 sm:mb-4
                             opacity-25"
              />
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed line-clamp-4">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-base sm:text-lg truncate">
                    {testimonial.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
