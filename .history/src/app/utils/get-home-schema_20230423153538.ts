export const getHomeSchema = () => ({
  "@context": "https://schema.org/",
  "@type": "Pharmacy",
  name: "Your Pharmacy Name",
  description:
    "We sell medicals in the middle of Slovakia with a focus on local people. We will soon offer a delivery service for medicals for seniors with their approval.",
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
