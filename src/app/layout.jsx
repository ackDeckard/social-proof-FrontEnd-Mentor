import "./globals.css";
import { League_Spartan } from "@next/font/google";
import Image from "next/image";

const league = League_Spartan({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <body className={`${league.className}`}>
        <div className="block xl:hidden -z-10 ">
          <Image
            src="/top-mobile.svg"
            fill
            alt=""
            className="object-scale-down object-left-top -z-10"
          />
          <Image
            src="/bottom-mobile.svg"
            fill
            alt=""
            className="object-scale-down object-right-bottom -z-10"
          />
        </div>
        <div className="hidden xl:block -z-10 ">
          <Image
            src="/top-desktop.svg"
            fill
            alt=""
            className="object-scale-down object-left-top -z-10"
          />
          <Image
            src="/bottom-desktop.svg"
            fill
            alt=""
            className="object-scale-down object-right-bottom -z-10"
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
