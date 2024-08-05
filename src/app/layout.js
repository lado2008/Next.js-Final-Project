import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "Created By CodeIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"container"}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
