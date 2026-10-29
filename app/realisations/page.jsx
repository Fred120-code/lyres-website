import Image from "next/image";
import Link from "next/link";
import PropertyData from "../JsonData/properties";
import PageHero from "../Component/PageHero/PageHero";

export const metadata = {
  title: "Réalisations : exemples de missions",
  description:
    "Découvrez des exemples de missions de LYRES en bâtiment, voirie, ouvrages d’art, ferroviaire, aménagement urbain et BIM.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <main>
      <PageHero
        title="Réalisations"
        subtitle="Exemples de missions types dans nos domaines d’intervention."
      />

      <section
        aria-labelledby="realisations-title"
        className="px-4 py-12 sm:px-8 sm:py-16 lg:px-[12%] lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-12">
            <h2
              id="realisations-title"
              className="font-bricolage text-3xl font-bold sm:text-4xl"
            >
              Exemples de missions
            </h2>
            <p className="mt-3 text-gray-700">
              Parcourez les types de projets sur lesquels LYRES peut vous
              accompagner.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PropertyData.map((property) => (
              <li key={property.id} className="min-w-0">
                <Link
                  href={`/realisations/${property.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a24b]"
                >
                  <div className="relative h-56 w-full overflow-hidden sm:h-64">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#8b6a1e]">
                      {property.location}
                    </p>
                    <h3 className="mt-2 font-bricolage text-xl font-bold sm:text-2xl">
                      {property.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-relaxed text-gray-700">
                      {property.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center font-semibold">
                      Découvrir l’exemple
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
