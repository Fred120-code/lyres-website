import { notFound } from "next/navigation";
import PropertyData from "../../JsonData/properties";
import Image from "next/image";
import SwiperComp from "../../Component/Swiper/SwiperComp";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = PropertyData.find((i) => i.id === parseInt(id));
  return p ? { title: p.title, description: p.desc, alternates: { canonical: `/realisations/${p.id}` } } : {};
}

export default async function PropertyDetails({ params }) {
  const { id } = await params;
  const property = PropertyData.find((item) => item.id === parseInt(id));
  if (!property) notFound();

    const relatedProperties = PropertyData.filter(
      (item) => item.id !== property.id && item.location === property.location,
    );

 
  return (
    <div>
      <div
        className="relative md:h-[68vh] h-[280px] overflow-hidden flex items-center
         justify-center text-center"
      >
        <img src="/images/hero.svg" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70
            z-10"
        />
        <h1 className="text-white text-[3rem] md:text-[5rem] font-bricolage z-20">
          {property.title}
        </h1>
      </div>

      {/* Property Details */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className=" flex justify-between items-start gap-2">
              <div>
                <h2
                  className="text-4xl font-bold text-gray-800
                         font-bricolage mb-2"
                >
                  {property.title}
                </h2>
                <p className="text-lg text-gray-600 mb-1 leading-relaxed">
                  {property.desc}
                </p>
              </div>

              <span>{property.location}</span>
            </div>

            {/* Static info section */}
            <div
              className="mb-6 mt-3 space-y-1 text-gray-700
            font-medium flex flex-wrap gap-x-5 gap-y-3"
            >
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Secteur :</span>
                {property.location}
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Zone :</span>Île-de-France</p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Rôle de LYRES :</span>
                Études et pilotage
              </p>{" "}
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Client :</span>
                Maître d’ouvrage ou entreprise
              </p>
            </div>

            <p className="mt-3 font-bricolage text-gray-700">
              Exemple de mission type : une intervention structurée, de l’analyse du besoin à la réception, avec un interlocuteur unique et des livrables clairs.
            </p>
            <p className="mt-3 font-bricolage text-gray-700">
              Chaque mission est adaptée à la taille du projet, à son contexte et aux contraintes du maître d’ouvrage.
            </p>
          </div>
        </div>
      </div>

      {/* Desc */}
      <div className="px-[8%] lg:px-[12%] py-16">
        <h1 className="text-6xl font-bold font-bricolage mb-10">Description de la mission</h1>
        <p className="font-bricolage text-lg mb-2">
          Cette mission illustre notre démarche : cadrage précis des enjeux, études techniques documentées, coordination des intervenants et suivi rigoureux des coûts et des délais.
        </p>
        <p className="font-bricolage text-lg mb-2">
          Nous privilégions la clarté : des comptes rendus réguliers, des décisions tracées et une information partagée avec tous les acteurs.
        </p>
        <p className="font-bricolage text-lg mb-2">
          Contactez-nous pour discuter d’une mission similaire sur votre projet.
        </p>
      </div>

      {/* Amenties */}
      <div className="px-[8%] lg:px-[12%] py-16 rounded-xl shadow-sm bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Nos livrables</h1>

        {/* Amenities Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
                    gap-8 text-gray-700"
        >
          <div className="flex items-center gap-3">
            <i
              className="bi bi-check2-circle text-[#c9a24b]
                text-2xl"
            ></i>
            <span>Notes de synthèse technique</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-check2-circle text-[#c9a24b]
                text-2xl"
            ></i>
            <span>Plannings et suivi budgétaire</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-check2-circle text-[#c9a24b]
                text-2xl"
            ></i>
            <span>Comptes rendus de chantier</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-check2-circle text-[#c9a24b]
                text-2xl"
            ></i>
            <span>Contrôle de conformité</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-check2-circle text-[#c9a24b]
                text-2xl"
            ></i>
            <span>Dossier de livraison</span>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Autres missions</h2>

        <SwiperComp relatedProperties={relatedProperties} />
      </div>
    </div>
  );
}
