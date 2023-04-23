import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// page with

export default function Home() {
  return (
    <main className="px-5 py-5 relative ">
      <div className="absolute left-0 top-0 w-[100vw] min-h-[80vh] z-0">
        <Image
          src="/lekarenbanner.jpg"
          alt="Next.js logo"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </main>
  );
}
