import Marquee2 from "../Component/Marquee2/Marquee2";
import Service from "../Component/Service/Service";
import Service2 from "../Component/Service2/Service2";
import PageHero from "../Component/PageHero/PageHero";

export const metadata = { title: "Expertises : ingénierie, maîtrise d’œuvre, conseil et BIM", description: "Études techniques, maîtrise d’œuvre, conseil aux entreprises, BIM, voiries, ouvrages d’art et voies ferrées : les expertises de LYRES en Île-de-France.", alternates: { canonical: "/expertises" } };

const Page = () => {
  return (
    <section>
      <PageHero title="Expertises" />
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
