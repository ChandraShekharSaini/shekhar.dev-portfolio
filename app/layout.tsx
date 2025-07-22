import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webdev Portfolio",
  description: "Webdev portfolio",
};

// <AnimatedCursor innerSize={8} outerSize={35} innerScale={2} outerScale={2} innerStyle={{background:"white"}} outerStyle={{
//             border:"3px solid white"
//           }} color='193, 11, 111'  outerAlpha={0}/>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        <div className="hidden sm:block">
          
        </div>
        <ResponsiveNavbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
