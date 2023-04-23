import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeHero } from "./components/HomeHero/HomeHero";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main className="container px-5 md:px-15">
      <HomeHero
        title={"Neviete ako ďalej?"}
        image={"/lekarenbanner.jpg"}
        description={"Prídite k nám a váš život bude zdravo napredovať"}
      />
    </main>
  );
}
