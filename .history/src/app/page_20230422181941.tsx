import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeHero } from "./components/HomeHero/HomeHero";
import { Contact } from "./components/Contact/Contact";
import { Phone, MapPin, Clock4, Mail } from "lucide-react";

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
      <Contact
        items={[
          {
            title: "Poloha",
            description: "Dukelských hrdinov, 960 01 Zvolen",
            icon: <MapPin size={30} className="stroke-primary" />,
          },
          {
            title: "Otváracie hodiny",
            description: "Pon - Štv:  7:30 - 14:30,Pia: 7:30 - 13:00",
            icon: <Clock4 size={30} className="stroke-primary" />,
          },
          {
            title: "Email",
            description: "lubica.abelovska@gmail.com",
            icon: <Mail size={30} className="stroke-primary" />,
          },
          {
            title: "Kontakt",
            description: "045/5402012",
            icon: <Phone size={30} className="stroke-primary" />,
          },
        ]}
      />
    </>
  );
}
