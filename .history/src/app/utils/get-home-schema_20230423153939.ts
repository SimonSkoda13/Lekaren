export const getHomeSchema = () => ({
  "@context": "https://schema.org/",
  "@type": "Pharmacy",
  name: "Lekáreň Európa",
  description:
    "Predávame lieky v strede Slovenska, hlavne v okolí Banskej Bystrice a Zvolena. Čoskoro ponúkneme službu doručovania liekov pre seniorov",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    postalCode: "Your Postal Code",
    addressCountry: "Your Country",
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
});
