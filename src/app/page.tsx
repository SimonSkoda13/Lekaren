import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/app/components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

const data = {
  banner: {
    image: "/banner.jpg",
    title: "Tvoja nová lekáreň v srdci Banskej Bystrice.",
    description: (
      <>
        Sme tu, aby sme poskytovali širokú škálu produktov,{" "}
        <span className="font-bold">nie len liekov</span>, pre plnohodné zdravie
        teba a tvojej rodiny. Ak teda potrebuješ s čímkoľkvek čo sa zdravia týka
        poradiť, sme ti plne k dispozicií. Tak neváhaj a príď, radi pomôžeme.
      </>
    ),
    button: "Navštív nás!",
    address: (
      <>
        Banská Bystrica
        <br />
        <span className="text-primary.600">EuropaSC </span>na prízemí
      </>
    ),
    openingHours: (
      <>
        Pon-Pia: <br />
        <span className="text-primary.600">8:00 - 18:00</span>
      </>
    ),
    badge: "Teší nás",
  },
};

export default function Home() {
  return (
    <div>
      <Banner {...data.banner} />
    </div>
  );
}
