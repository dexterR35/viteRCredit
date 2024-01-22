import { Helmet } from "react-helmet";

const defaultMeta = {
  title: "LaslesVPN",
  siteName: "LaslesVPN",
  description:
    "Landing page VPN LaslesVPN Best VPN For Privacy, Country and Cheapest",
  url: "https://www.obtinecredit.ro",
  type: "website",
  robots: "follow, index",
  image: "https://next-landing-vpn.vercel.app/assets/card-image.png",
  author: "Lorem Ipsum",
};

const SeoHead = (props) => {
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />

      {/* Favicons */}
      {/* {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))} */}
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#F53838" />
      {/* <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      /> */}
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#F53838" />
    </Helmet>
  );
};

// const favicons = [
//   {
//     rel: "apple-touch-icon",
//     sizes: "57x57",
//     href: "/favicon/apple-icon-57x57.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "60x60",
//     href: "/favicon/apple-icon-60x60.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "72x72",
//     href: "/favicon/apple-icon-72x72.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "76x76",
//     href: "/favicon/apple-icon-76x76.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "114x114",
//     href: "/favicon/apple-icon-114x114.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "120x120",
//     href: "/favicon/apple-icon-120x120.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "144x144",
//     href: "/favicon/apple-icon-144x144.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "152x152",
//     href: "/favicon/apple-icon-152x152.png",
//   },
//   {
//     rel: "apple-touch-icon",
//     sizes: "180x180",
//     href: "/favicon/apple-icon-180x180.png",
//   },
//   {
//     rel: "mask-icon",
//     href: "/favicon/safari-pinned-tab.svg",
//     color: "#F59A9A",
//   },
//   {
//     rel: "icon",
//     href: "/favicon/favicon.ico",
//   },
//   {
//     rel: "icon",
//     type: "image/png",
//     sizes: "16x16",
//     href: "/favicon/favicon-16x16.png",
//   },
//   {
//     rel: "icon",
//     type: "image/png",
//     sizes: "32x32",
//     href: "/favicon/favicon-32x32.png",
//   },
//   {
//     rel: "icon",
//     type: "image/png",
//     sizes: "96x96",
//     href: "/favicon/favicon-96x96.png",
//   },
//   {
//     rel: "icon",
//     type: "image/png",
//     sizes: "192x192",
//     href: "/favicon/android-icon-192x192.png",
//   },
//   {
//     rel: "manifest",
//     href: "/site.webmanifest",
//   },
// ];

export default SeoHead;
