const VideoBanner = () => {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
      <img src="/images/hero.svg" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

      <div
        className="absolute inset-0 bg-black/70 flex flex-col items-center
        justify-center text-center px-4 sm:px-6 md:px-8 z-10"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bricolage 
            font-bold text-white leading-tight"
        >
          Un projet à concevoir ou à sécuriser ? Parlons-en
        </h2>
        <button
          className="mt-6 sm:mt-8 md:mt-10 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 cursor-pointer bg-white text-black 
         font-semibold rounded hover:bg-gray-200 transition hover:-translate-y-1 text-sm sm:text-base md:text-lg"
        >
          Nous contacter
        </button>
      </div>
    </div>
  );
};

export default VideoBanner;
