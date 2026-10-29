import Image from "next/image";

export default function PageHero({ title, subtitle }) {
  return (
    <header className="relative flex min-h-[250px] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[68vh]">
      <Image
        src="/images/hero.svg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 px-4">
        <h1 className="font-bricolage text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm font-medium text-white sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
