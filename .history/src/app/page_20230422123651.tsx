import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main className="bg-primary-100 min-h-[100vh]">
      <h1>My page</h1>
      <Image
        src="/lekarenbanner.jpg"
        alt="Next.js logo"
        width={200}
        height={200}
      />
    </main>
  );
}
