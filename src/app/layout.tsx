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
  title: "Welcome - This is Tran Trung Phat profile",
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
      <body
        className={`${roboto.variable} antialiased `}
      >
        <div className="h-screen max-w-[1400px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
