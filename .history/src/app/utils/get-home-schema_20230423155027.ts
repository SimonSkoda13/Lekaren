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
      name: "Banská Bystrica",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.7333,
        longitude: 19.15,
      },
    },
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
};
