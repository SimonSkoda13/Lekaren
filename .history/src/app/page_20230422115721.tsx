import Image from "next/image";
import { Poppins } from "next/font/google";

export default function Home() {
  return (
    <main>
      <div className="w-[10vw] max-h-5">
        <Image
          src="/lekarenbanner.jpg"
          alt="main banner image"
          style={{ objectFit: "scale-down" }}
          fill
          priority
        />
      </div>
      <div className="w-[10vw] max-h-5">
        <Image
          src="/lekarenbanner.jpg"
          alt="main banner image"
          style={{ objectFit: "scale-down" }}
          fill
        />
      </div>
    </main>
  );
}
