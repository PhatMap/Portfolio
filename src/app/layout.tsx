import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tran Trung Phat Portfolio",
  description: "This is my profile",
  icons: "tab-icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased `}>
        <div className="relative  h-screen overflow-y-auto flex flex-col items-center bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white">
          <Header />
          <div className="max-w-[1400px] mx-auto ">{children}</div>
        </div>
      </body>
    </html>
  );
}
