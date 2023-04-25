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
    hasMap:
      "https://www.google.com/search?sa=X&biw=1278&bih=1333&tbs=lf:1,lf_ui:3&tbm=lcl&sxsrf=APwXEdezotAT4mffVVii-5_QWgyOhFS-yQ:1682257944987&q=Lek%C3%A1re%C5%88+Eur%C3%B3pa&rflfq=1&num=10&ved=2ahUKEwiq2eyZk8D-AhW3g_0HHWF0C_oQtgN6BAguEAI",
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
