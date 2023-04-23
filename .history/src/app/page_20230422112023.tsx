import Image from "next/image";
import { Poppins } from "next/font/google";

export default function Home() {
  return (
    <main>
      <Image src="/lekarenbanner" alt="main banner image" fill />
    </main>
  );
}
