import { Bricolage_Grotesque, Geist, Geist_Mono, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";
import SuspenseComp from "./Component/Suspense/SuspenseComp";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["400", "700", "900"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lyres.fr";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "LYRES – Bureau d’études BIM, maîtrise d’œuvre et ingénierie en Île-de-France", template: "%s | LYRES" },
  description: "LYRES, société d’ingénierie à Achères (Yvelines) : études techniques, maîtrise d’œuvre, conseil et coordination BIM pour le bâtiment et les travaux publics.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_FR", siteName: "LYRES", images: [{ url: "/og.png", width: 1200, height: 630 }] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: "LYRES", url: SITE_URL,
  email: "lyres.bet@yahoo.com", telephone: "+33698455576", image: `${SITE_URL}/og.png`, areaServed: "Île-de-France",
  address: { "@type": "PostalAddress", streetAddress: "25 avenue Lénine", postalCode: "78260", addressLocality: "Achères", addressCountry: "FR" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${bricolage.variable}`}>
        <SuspenseComp />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
