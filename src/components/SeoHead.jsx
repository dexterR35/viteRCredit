import { Helmet } from "react-helmet";
import ogImage from "/Icon/og-image.png";
const defaultMeta = {
  title: "Obține Credit",
  siteName: "Obține Credit",
  description: "SOLUȚII DE CREDITARE PERSONALIZATE",
  url: "https://www.obtinecredit.ro",
  type: "website",
  robots: "follow, index",
  image: ogImage,
  author: "M.Iordache",
};

const SeoHead = () => {
  return (
    <Helmet>
      <title>{defaultMeta.title}</title>
      <meta name="robots" content={defaultMeta.robots} />
      <meta name="description" content={defaultMeta.description} />
      {/* Open Graph */}
      <meta property="og:type" content={defaultMeta.type} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:description" content={defaultMeta.description} />
      <meta property="og:title" content={defaultMeta.title} />
      <meta property="og:image" content={defaultMeta.image} />
      <meta property="og:url" content={defaultMeta.url} />
      <meta name="msapplication-TileColor" content="#F53838" />
    </Helmet>
  );
};

export default SeoHead;
