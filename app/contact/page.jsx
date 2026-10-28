"use client"
import { trackEvent } from "../../lib/gtm";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    trackEvent("form_submit", { form_name: "contact", page: window.location.pathname });
    const body = `Nom : ${d.get("name")}
E-mail : ${d.get("email")}
Téléphone : ${d.get("phone") || "-"}

${d.get("message")}`;
    window.location.href = `mailto:lyres.bet@yahoo.com?subject=${encodeURIComponent("Demande via le site LYRES")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div>
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
        >
          Contact
        </h1>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="">Let's Talk</h1>
              <h2>
                Décrivez-nous votre projet : nous revenons vers vous rapidement.
              </h2>

              <div className="space-y-4">
                <h6 className=" uppercase text-lg tracking-widest border-b pb-4">
                  Appelez-nous
                </h6>
                <h3 className="text-3xl font-light">
                  <a href="tel:+33698455576" className="text-black no-underline">
                    +33 6 98 45 55 76
                  </a>
                </h3>
                <div className="flex gap-4">
                  <a href="tel:+33698455576">
                    <i className="bi bi-telephone text-2xl text-black"></i>
                  </a>
                  <a href="mailto:lyres.bet@yahoo.com">
                    <i className="bi bi-envelope text-2xl text-black"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-2/5">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nom"
                  name="name"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />
                <input
                  type="text"
                  placeholder="Téléphone (facultatif)"
                  name="phone"
                  
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />
                <textarea
                  rows="6"
                  placeholder="Votre demande"
                  name="message"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />

                <button
                  type="submit"
                  className="bg-black text-white
                  py-2 px-6 rounded-md text-lg cursor-pointer"
                >Envoyer ma demande</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-black px-8 lg:px-[12%] py-12">
        <div className="overflow-hidden">
          <div
            className="bg-white rounded flex flex-col md:flex-row
             gap-6 p-10 items-center shadow-md"
          >
            {/* Image */}
            <div className="w-full md:w-2/5 h-[400px]">
              <img
                src="/images/hero.svg"
                alt="contact-banner"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-3/5">
              <h1 className="text-4xl md:text-6xl font-bold">
                Parlons de votre projet
              </h1>
              <p className="text-gray-500 mt-4">
                Nous répondons à chaque demande dans les meilleurs délais.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps?q=25+avenue+L%C3%A9nine+78260+Ach%C3%A8res&output=embed"
              width="100%"
              height="650"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-[10px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
