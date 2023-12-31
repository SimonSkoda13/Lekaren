import "../globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/app/components/Header/Header";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Lekaren Europa",
  description: "Vasa Lekaren Europa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/logo.svg" />
      </head>

      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
