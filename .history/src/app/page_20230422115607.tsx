import Image from "next/image";
import { Poppins } from "next/font/google";

export default function Home() {
  return (
    <main>
      <div className="">
        <Image
          src="/lekarenbanner.jpg"
          alt="main banner image"
          style={{ objectFit: "contain" }}
          fill
          priority
        />
      </div>
    </main>
  );
}
