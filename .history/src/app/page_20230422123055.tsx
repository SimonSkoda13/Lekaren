import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main>
      <h1>My page</h1>
      <Image
        src="/images/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={200}
      />
    </main>
  );
}
