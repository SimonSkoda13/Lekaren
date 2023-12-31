import { Analytics } from "@vercel/analytics/react";

import "../globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/app/components/Layout/Header/Header";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    template: "%s | Lekáreň Europa",
    default: "Domov | Lekáreň Europa",
  },
  description: "Tvoja nová lekáreň v srdci Banskej Bystrice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk-SK">
      <body className={poppins.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
