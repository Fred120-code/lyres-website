import Image from "next/image";
import React from "react";
import PageHero from "../Component/PageHero/PageHero";

export const metadata = { title: "À propos : société d’ingénierie à Achères (Yvelines)", description: "LYRES accompagne maîtres d’ouvrage, entreprises et bureaux d’études dans la conception, la coordination et le pilotage de leurs projets.", alternates: { canonical: "/a-propos" } };

const Page = () => {
  return (
    <div>
      {" "}
      <PageHero title="À propos" />
      {/* À propos */}
      <div className="bg-white py-10">
        {/* Top Section */}
        <div className="container mx-auto mb-10 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-8xl font-bold text-gray-800">
                Ingénierie & Conseil
              </h1>
            </div>

            <div className="lg:w-1/3">
              <div>
                <p className="mt-2 text-gray-600">
                  LYRES est une société d’ingénierie et de conseil spécialisée dans la construction et les infrastructures. Nous accompagnons les maîtres d’ouvrage, les entreprises et les bureaux d’études dans la conception, la coordination et le pilotage de leurs projets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div
              className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden
             rounded-lg"
            >
              <Image
                src="/images/bim.svg"
                alt="vision"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="text-gray-800 font-bold">Notre </span>
                vision est de contribuer à la réussite de projets de construction et d’infrastructures, en alliant rigueur technique, anticipation des contraintes et sens du service.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Nous croyons qu’une étude solide et une coordination claire font la différence entre un projet subi et un projet maîtrisé. Le BIM et le numérique sont au cœur de notre manière de travailler : moins de reprises, plus de fluidité entre les acteurs.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                Chez <strong>LYRES</strong>, notre engagement est de conjuguer qualité, maîtrise des coûts, respect des délais et performance opérationnelle sur chacun de vos projets.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Nos valeurs : rigueur, transparence et engagement. Chaque décision technique est documentée et partagée avec vous.
              </p>
            </div>

            <div
              className="lg:w-1/2 mb-6 lg:pl-12 lg:mb-0 overflow-hidden
             rounded-lg"
            >
              <Image
                src="/images/batiment.svg"
                alt="vision"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
