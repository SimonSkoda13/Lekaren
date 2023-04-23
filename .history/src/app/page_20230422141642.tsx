import Image from "next/image";
import { Inter } from "next/font/google";
import { Banner } from "@/components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main className="relative">
      <Banner
        title={"Neviete ako ďalej?"}
        image={"/lekarenbanner.jpg"}
        description={"Prídite k nám a váš život bude zdravo napredovať"}
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Neviete ako ďalej?</h1>
        <p className="text-2xl">
          Prídite k nám a váš život bude zdravo napredovať
        </p>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        perspiciatis nihil mollitia eum ea quam, ducimus quaerat atque cumque
        beatae dolorum distinctio ratione omnis aspernatur asperiores! Cumque
        culpa dolores aliquam!
      </div>
    </main>
  );
}
