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
  phone: "+40786744694",
};

const SeoHead = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": defaultMeta.url + "#organization",
    name: defaultMeta.siteName,
    url: defaultMeta.url,
    logo: {
      "@type": "ImageObject",
      url: defaultMeta.image,
    },
    description: defaultMeta.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: defaultMeta.phone,
      contactType: "customer service",
      areaServed: "RO",
      availableLanguage: ["Romanian", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/obtinecredit",
      "https://twitter.com/obtinecredit",
      "https://www.instagram.com/obtinecredit",
    ],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: defaultMeta.siteName,
    description: defaultMeta.description,
    url: defaultMeta.url,
    serviceType: [
      "Credit Personal",
      "Credit Ipotecar",
      "Credit Auto",
      "Consultanță Financiară",
    ],
    areaServed: {
      "@type": "Country",
      name: "Romania",
    },
    provider: {
      "@type": "Organization",
      name: defaultMeta.siteName,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultMeta.siteName,
    url: defaultMeta.url,
    description: defaultMeta.description,
    inLanguage: "ro-RO",
    publisher: {
      "@type": "Organization",
      name: defaultMeta.siteName,
    },
  };

  return (
    <Helmet>
      <title>{defaultMeta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={defaultMeta.robots} />
      <meta name="description" content={defaultMeta.description} />
      <meta name="keywords" content="credit, creditare, credit personal, credit ipotecar, credit auto, consultanță financiară, România, obtine credit" />
      <meta name="author" content={defaultMeta.author} />
      <link rel="canonical" href={defaultMeta.url} />

      {/* Open Graph */}
      <meta property="og:type" content={defaultMeta.type} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:title" content={defaultMeta.title} />
      <meta property="og:description" content={defaultMeta.description} />
      <meta property="og:image" content={defaultMeta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
      <meta name="twitter:image:alt" content="Obține Credit - Soluții de creditare personalizate" />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={defaultMeta.siteName} />

      {/* JSON-LD Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* JSON-LD Structured Data - Financial Service */}
      <script type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </script>

      {/* JSON-LD Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SeoHead;
