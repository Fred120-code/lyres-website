import { notFound } from "next/navigation";
import PropertyData from "../../JsonData/properties";
import Image from "next/image";
import Link from "next/link";
import SwiperComp from "../../Component/Swiper/SwiperComp";
import PageHero from "../../Component/PageHero/PageHero";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = PropertyData.find((i) => i.id === Number(id));
  return p ? { title: p.title, description: p.desc, alternates: { canonical: `/realisations/${p.id}` } } : {};
}

export default async function PropertyDetails({ params }) {
  const { id } = await params;
  const property = PropertyData.find((item) => item.id === Number(id));
  if (!property) notFound();

  const relatedProperties = PropertyData.filter(
    (item) => item.id !== property.id,
  );

  return (
    <main>
      <PageHero title={property.title} />

      <section className="px-4 py-10 sm:px-8 lg:px-[8.5%] lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12">
          <div className="relative h-[280px] w-full overflow-hidden rounded-lg shadow-lg sm:h-[360px] lg:h-[400px]">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="pt-2">
            <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
              {property.desc}
            </p>

            <dl className="mt-5 flex flex-wrap gap-3 text-sm text-gray-800 sm:text-base">
              <div className="rounded border border-gray-800 px-2 py-2">
                <dt className="inline font-semibold">Secteur :</dt>{" "}
                <dd className="inline">{property.location}</dd>
              </div>
              <div className="rounded border border-gray-800 px-2 py-2">
                <dt className="inline font-semibold">Zone :</dt>{" "}
                <dd className="inline">{property.zone}</dd>
              </div>
              <div className="rounded border border-gray-800 px-2 py-2">
                <dt className="inline font-semibold">Rôle de LYRES :</dt>{" "}
                <dd className="inline">{property.role}</dd>
              </div>
              <div className="rounded border border-gray-800 px-2 py-2">
                <dt className="inline font-semibold">Client :</dt>{" "}
                <dd className="inline">{property.client}</dd>
              </div>
            </dl>

            <p className="mt-6 leading-relaxed text-gray-700">
              Exemple illustratif de mission, à adapter aux références réelles
              du projet.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:px-[8.5%] lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-bricolage text-4xl font-bold sm:text-5xl lg:text-6xl">
            Description de la mission
          </h2>
          <div className="mt-6 space-y-3 leading-relaxed text-gray-900">
            {property.missionDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <Link
                href="/contact"
                className="font-medium underline decoration-[#c9a24b] decoration-2 underline-offset-4 hover:text-[#8b6a1e]"
              >
                Contactez-nous pour discuter d’une mission similaire sur votre
                projet.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 px-4 py-12 sm:px-8 lg:px-[8.5%] lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-bricolage text-3xl font-bold sm:text-4xl">
            Nos livrables
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 text-gray-700 sm:grid-cols-2 lg:grid-cols-5">
            {property.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-3">
                <i
                  aria-hidden="true"
                  className="bi bi-check2-circle text-2xl text-[#c9a24b]"
                />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12 sm:px-8 lg:px-[8.5%] lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 font-bricolage text-3xl font-bold sm:text-4xl">
            Autres réalisations
          </h2>
          <SwiperComp relatedProperties={relatedProperties} />
        </div>
      </section>
    </main>
  );
}
