import React from "react";
import Image from "next/image";
import { Container } from "@/components/atoms/layout/Container";
import Button from "@/app/components/Button";
import { Facebook, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { SocialLink } from "@/components/action/SocialLink/SocialLink";

export interface HeroProps {}

export const Hero = (props: HeroProps) => {
  const {} = props;
  return (
    <Container
      className={
        "grid grid-cols-1 lg:grid-cols-2 py-8 lg:py-20 gap-10 lg:gap-20"
      }
    >
      <div className="left prose prose-zinc flex flex-col justify-center">
        <div className="tag mb-6">
          <span className="bg-primary-500 text-white p-2 px-4 rounded-full text-sm">
            Teší nás
          </span>
        </div>
        <h1
          className={
            "text-5xl lg:text-7xl font-bold leading-none mb-0 text-gray-800"
          }
        >
          Tvoja nová lekáreň v srdci Banskej Bystrice.
        </h1>
        <h2
          className={
            "text-gray-500 font-normal text-base lg:text-xl mt-4 lg:mt-8"
          }
        >
          Sme tu, aby sme poskytovali širokú škálu produktov,{" "}
          <b>nie len liekov</b>, pre plnohodné zdravie teba a tvojej rodiny. Ak
          teda potrebuješ s čímkoľkvek čo sa zdravia týka poradiť, sme ti plne k
          dispozicií. Tak neváhaj a príď, radi pomôžeme.
        </h2>
        <div
          className={
            " mt-4 lg:mt-12 flex items-center md:items-start md:flex-col gap-8 md:gap-6 md:justify-start"
          }
        >
          <div className="actions  not-prose max-w-fit">
            <Link
              href={"https://goo.gl/maps/gNL57JXBzbidbdaA7"}
              target={"_blank"}
              rel="noopener"
            >
              <Button text={"Navštív nás"} color={"primary.500"} />
            </Link>
          </div>
          <div className=" flex flex-row text-xl -mx-4">
            <SocialLink
              icon={Facebook}
              href={`https://www.facebook.com/profile.php?id=100083136738593`}
            />
            <SocialLink
              icon={Instagram}
              href={"https://www.instagram.com/lekareneuropabb/"}
            />
          </div>
        </div>
      </div>
      <div className="image flex flex-auto">
        <div className="img relative flex flex-auto rounded-3xl drop-shadow-2xl overflow-hidden aspect-square">
          <Image
            src={"/heroimage.png"}
            alt={"Hero Image"}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </Container>
  );
};
