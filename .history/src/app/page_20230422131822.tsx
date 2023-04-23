import Image from "next/image";
import { Inter } from "next/font/google";
import { Banner } from "@/components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main className="px-5 py-5 relative ">
      <Banner />
    </main>
  );
}
