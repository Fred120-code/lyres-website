import Properties from "../Component/Properties/Properties";

export const metadata = { title: "Missions : exemples d’interventions", description: "Exemples de missions de LYRES : coordination BIM, suivi de travaux de voirie, études d’ouvrage d’art, travaux ferroviaires.", alternates: { canonical: "/realisations" } };

const page = () => {
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

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl 
        lg:text-5xl xl:text-6xl font-bricolage z-20 leading-tight px-4">Missions</h1>

        <h1 className="text-white text-xs sm:text-sm md:text-base lg:text-lg 
        font-bold font-bricolage mt-2 sm:mt-3 md:mt-4 z-20 px-4">Exemples de missions</h1>
        
      </div>

      <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-8 
      sm:mb-10 md:mb-12 lg:mb-16">
        <Properties />
      </div>
    </section>
  );
};

export default page;
