import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/Components/Navbar/Navbar"));
const Footer = dynamic(() => import("@/Components/Footer/Footer"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mocdt ",
  description: "A Mocdt Product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>

      {/* <div data-tf-live="01HCAG592WMETMT39HVC1Q2YGT"></div>

      <script src="https://embed.typeform.com/next/embed.js" async /> */}
    </html>
  );
}
