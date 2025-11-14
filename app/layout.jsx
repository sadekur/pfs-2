import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransection from "@/components/PageTransection";
import StairEffect from "@/components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono", // Make sure this matches the variable in tailwind config
  display: 'swap',
});

export const metadata = {
  title: "Sadekur Rahman - Full Stack Developer",
  description: "Personal portfolio of Sadekur Rahman - Full Stack Developer specializing in Wordpress, React, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-primary"> {/* Apply the font class here */}
        <Header />
        <StairEffect />
        <PageTransection>{children}</PageTransection>     
      </body>
    </html>
  );
}