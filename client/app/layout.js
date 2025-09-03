import {Gabarito, Galada, Poppins, } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
  weight: ["400"]
});

const galada = Galada ({
  variable: "--font-galada",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata = {
  title: "Delight Gadgets",
  description: "Buy, Swap, Sell conveniently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${poppins.variable} ${galada.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
