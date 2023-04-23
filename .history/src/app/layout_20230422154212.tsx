import "./globals.css";
import { Poppins } from "next/font/googS

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-[100vh]">
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
