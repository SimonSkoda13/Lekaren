import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeHero } from "./components/HomeHero/HomeHero";
import { Contact } from "./components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <>
      <HomeHero
        title={"Neviete ako ďalej?"}
        image={"/homeBanner.jpg"}
        description={"Prídite k nám a váš život bude zdravo napredovať"}
      />
      <Contact items={
        [
          {
            title: "Kontakt",
            description: "Neváhajte nás kontaktovať",
            icon: "/contactIcon.svg",
          },
          {
            title: "Kontakt",
            description: "Neváhajte nás kontaktovať",
            icon: "/contactIcon.svg",
          },
          {
            title: "Kontakt",
            description: "Neváhajte nás kontaktovať",
            icon: "/contactIcon.svg",
          },
          {
            title: "Kontakt",
            description: "Neváhajte nás kontaktovať",
            icon: "/contactIcon.svg",
        },
      }/>
    </>
  );
}
