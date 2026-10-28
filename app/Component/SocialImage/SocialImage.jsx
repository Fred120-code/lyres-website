import { socialImageData } from "../../JsonData/socialImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Image from "next/image";

const SocialImage = () => {
  return (
    <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="h-full w-full"
      >
        {socialImageData.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="w-full h-full">
              <Image
                src={image}
                alt={`Social Image ${index + 1}`}
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SocialImage;
