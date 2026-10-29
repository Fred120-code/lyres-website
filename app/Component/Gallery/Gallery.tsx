import Image from "next/image";
import { galleryItems } from "../../JsonData/gallery";

const Gallery = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bricolage font-bold mb-6 sm:mb-8 md:mb-10">
          Nos domaines d’intervention
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryItems.map((item, idx) => (
            <a
              key={idx}
              href="/expertises"
              data-lightbox={item.lightbox}
              data-title={item.title}
              className="group relative block overflow-hidden rounded-md"
            >
              <div className="relative w-full h-48 sm:h-72 md:h-96 lg:h-[400px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-cover transition-transform duration-500
                                    group-hover:scale-105"
                  fill
                />
              </div>

              <div
                className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 bg-gradient-to-t 
                            from-black to-transparent z-10 opacity-0 translate-y-4 group-hover:opacity-100
                            group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bricolage">
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
