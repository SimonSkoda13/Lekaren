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
    image:
      "data:image/jpeg;base64,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",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "Your Telephone Number",
      email: "Your Email Address",
      contactType: "customer service",
    },
  };
  return schema;
};
