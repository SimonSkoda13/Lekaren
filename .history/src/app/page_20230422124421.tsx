import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main className="px-5 py-5 relative">
      <h1>My page</h1>
      <div className="fixed top-0 w-[100vw] h-auto">
        <Image src="/lekarenbanner.jpg" alt="Next.js logo" fill />
      </div>
    </main>
  );
}
