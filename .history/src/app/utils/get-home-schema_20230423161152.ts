import { Pharmacy, WithContext } from "schema-dts";

export const getHomeSchema = () => {
  const schema: WithContext<Pharmacy> = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: "Lekáreň Európa",
    currenciesAccepted: "EUR",
    openingHours: "Mo-Fr 08:00-18:00",
    paymentAccepted: "cash, credit card",
    containedInPlace: {
      "@type": "Place",
      name: "Europa SC",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.7333,
        longitude: 19.15,
      },
    },
    publicAccess: true,
    slogan: "Predávame lieky v strede Slovenska",

    hasMap:
      "https://www.google.com/maps/place/Lek%C3%A1re%C5%88+Europea/@48.7299657,19.1328671,17z/data=!3m1!4b1!4m6!3m5!1s0x47153df0f0c243a1:0xd4c6def9d2574dea!8m2!3d48.7299622!4d19.135442!16s%2Fg%2F11bzx28x9_",
    description:
      "Predávame lieky v strede Slovenska, hlavne v okolí Banskej Bystrice a Zvolena. Čoskoro ponúkneme službu doručovania liekov pre seniorov a tých, ktorí to potrebujú",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Na Troskách 25",
      addressLocality: "Banská Bystrica",
      postalCode: "974 01",
      addressCountry: "Slovakia",
    },
    telephone: "Your Telephone Number",
    email: "Your Email Address",
    url: "Your Website URL",
    image: "Your Hero Image URL",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "Your Telephone Number",
      email: "Your Email Address",
      contactType: "customer service",
    },
  };
  return schema;
};
