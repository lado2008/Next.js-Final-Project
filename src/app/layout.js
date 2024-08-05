import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/testComp/testComp";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Created By Lado Adamia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"container"}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
