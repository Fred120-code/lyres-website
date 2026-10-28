export const metadata = { title: "Mentions légales", robots: { index: false }, alternates: { canonical: "/mentions-legales" } };

const Page = () => (
  <section className="px-4 sm:px-6 md:px-8 lg:px-[12%] pt-32 pb-16">
    <h1 className="text-4xl md:text-6xl font-bricolage font-bold mb-8">Mentions légales</h1>
    <div className="max-w-2xl space-y-4 text-gray-700">
      {/* À vérifier avec le client avant mise en ligne */}
      <p><b>Éditeur :</b> LYRES, SASU au capital de 500 €, 25 avenue Lénine, 78260 Achères. SIREN 940 001 027, SIRET 940 001 027 00017, APE 7490A.</p>
      <p><b>Directeur de la publication :</b> M. Rodolphe Narcisse Sezono, Président.</p>
      <p><b>Hébergeur :</b> Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.</p>
      <p><b>Données personnelles :</b> les messages et candidatures reçus servent uniquement à traiter votre demande et ne sont pas transmis à des tiers. Suppression sur simple demande à lyres.bet@yahoo.com.</p>
    </div>
  </section>
);
export default Page;
