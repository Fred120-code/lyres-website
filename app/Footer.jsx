import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10">
        <div className="absolute inset-0 footer invert z-[-1]" />
        <div
          className="absolute bottom-0 footer-shape bg-no-repeat bg-bottom-right  
                invert z-[-1] right-0 w-full h-full"
        />
        <div className="px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            {/**Left col */}
            <div className="lg:w-1/2 pr-0 lg:pr-10">
              <h2 className="font-bricolage text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 mt-4 sm:mt-6 leading-tight">
                Construisons ensemble vos projets, avec rigueur.
              </h2>
              <p className="my-3 sm:my-4 md:my-5 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                LYRES accompagne les maîtres d’ouvrage, les entreprises et les bureaux d’études dans la conception, la coordination et le pilotage de leurs projets de bâtiment et d’infrastructures en Île-de-France.
              </p>
              <div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center
             w-full max-w-md gap-6 sm:gap-4 mt-6 sm:mt-8"
              >
                <div>
                  <span className="text-sm sm:text-base md:text-lg block">
                    Appelez-nous
                  </span>
                  <h4 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold">
                    <a href="tel:+33698455576" className="hover:underline">
                      +33 6 98 45 55 76
                    </a>
                  </h4>
                </div>

                <div>
                  <span className="text-sm sm:text-base md:text-lg block">
                    Écrivez-nous
                  </span>
                  <a
                    href="#"
                    className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg hover:underline inline-block"
                  >
                    lyres.bet@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 sm:gap-6 md:gap-12">
              <div className="flex-1">
                <div className="flex flex-col space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <h3 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-bricolage mb-2 sm:mb-3 hover:ps-2 transition-all duration-300">
                    Entreprise
                  </h3>
                  <Link
                    href="/a-propos"
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    À propos
                  </Link>
                  <Link
                    href="/realisations"
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    Missions
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>

                <div className="lg:flex-1 mt-6 sm:mt-8">
                  <h5 className="font-bricolage text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3">
                    Adresse
                  </h5>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg font-medium max-w-sm leading-relaxed">
                    25 avenue Lénine, 78260 Achères
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                <h3
                  className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-bricolage
                 mb-2 sm:mb-3"
                >
                  Contact direct
                </h3>
                <a
                  href="mailto:lyres.bet@yahoo.com"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  E-mail
                </a>
                <a
                  href="tel:+33698455576"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Téléphone
                </a>{" "}
                <a
                  href="/mentions-legales"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-4 sm:py-6 bg-white px-4 sm:px-6">
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
            &copy; {new Date().getFullYear()} LYRES. Tous droits réservés. Site réalisé par{" "}
            <a href="#" className="font-semibold hover:underline">
              Joran Fred
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
