// SeoHead.jsx
import { Helmet } from "react-helmet-async";

const defaultMeta = {
  title: "Obține Credit - Soluții de creditare personalizate",
  siteName: "Obține Credit",
  description:
    "Obține cele mai bune soluții de creditare personalizate pentru nevoile tale financiare. Consultanță rapidă și transparentă.",
  url: "https://www.obtinecredit.ro",
  type: "website",
  robots: "index, follow",
  image: "https://www.obtinecredit.ro/Icon/og-image.png",
  author: "M.Iordache",
  twitterHandle: "@obtinecredit",
};

const SeoHead = () => (
  <Helmet>
    <title>{defaultMeta.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content={defaultMeta.robots} />
    <meta name="description" content={defaultMeta.description} />
    <link rel="canonical" href={defaultMeta.url} />

    {/* Open Graph */}
    <meta property="og:type" content={defaultMeta.type} />
    <meta property="og:site_name" content={defaultMeta.siteName} />
    <meta property="og:title" content={defaultMeta.title} />
    <meta property="og:description" content={defaultMeta.description} />
    <meta property="og:image" content={defaultMeta.image} />
    <meta property="og:image:alt" content="Obține Credit - Soluții de creditare personalizate" />
    <meta property="og:url" content={defaultMeta.url} />
    <meta property="og:locale" content="ro_RO" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={defaultMeta.twitterHandle} />
    <meta name="twitter:creator" content={defaultMeta.twitterHandle} />
    <meta name="twitter:title" content={defaultMeta.title} />
    <meta name="twitter:description" content={defaultMeta.description} />
    <meta name="twitter:image" content={defaultMeta.image} />

    {/* JSON-LD Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": defaultMeta.url + "#organization",
        name: defaultMeta.siteName,
        url: defaultMeta.url,
        logo: defaultMeta.image,
        description: defaultMeta.description,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+40786744694",
          contactType: "customer service",
          areaServed: "RO",
          availableLanguage: ["Romanian", "English"],
        },
        sameAs: [
          "https://www.linkedin.com/obtinecredit",
          "https://twitter.com/obtinecredit",
          "https://www.instagram.com/obtinecredit",
        ],
      })}
    </script>
  </Helmet>
);

export default SeoHead;
