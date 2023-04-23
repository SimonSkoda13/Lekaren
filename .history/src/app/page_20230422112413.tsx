import Image from "next/image";
import { Poppins } from "next/font/google";

export default function Home() {
  return (
    <main>
      <Image
        src="/lekarenbanner.jpg"
        alt="main banner image"
        sizes="100vw (max-height: 768px)"
        style={{ objectFit: "cover" }}
        fill
        priority
      />
    </main>
  );
}
