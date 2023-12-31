import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/app/components/Banner/Banner";
import { Button } from "@/components/atoms/actions/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-2">
      <Link href="/version1">
        <Button>
          <h1 className="text-black">Verzia 1</h1>
        </Button>
      </Link>
      <Link href="/version2">
        <Button>
          <h1 className="text-black">Verzia 2</h1>
        </Button>
      </Link>
    </div>
  );
}
