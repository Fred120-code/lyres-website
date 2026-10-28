import Marquee2 from "../Component/Marquee2/Marquee2";
import Service from "../Component/Service/Service";
import Service2 from "../Component/Service2/Service2";

export const metadata = { title: "Expertises : ingénierie, maîtrise d’œuvre, conseil et BIM", description: "Études techniques, maîtrise d’œuvre, conseil aux entreprises, BIM, voiries, ouvrages d’art et voies ferrées : les expertises de LYRES en Île-de-France.", alternates: { canonical: "/expertises" } };

const Page = () => {
  return (
    <section>
      <div
        className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] 
        xl:h-[68vh] overflow-hidden flex flex-col items-center
         justify-center text-center"
      >
        <img src="/images/hero.svg" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70
            z-10"
        />

        <h1
          className="text-white text-2xl sm:text-3xl md:text-4xl 
        lg:text-5xl xl:text-6xl font-bricolage z-20 leading-tight px-4"
        >Expertises</h1>

      </div>
      <div
        className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-8 
      sm:mb-10 md:mb-12 lg:mb-16"
      >
        {/* Services */}
        <Service />
        {/* Marquee 2 */}
        <Marquee2 />
        {/* Services 2 */}
        <Service2 />
      </div>
    </section>
  );
};

export default Page;
