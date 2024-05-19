import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import { AI } from './action'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Greenest",
  description: "Health, wellness, mindfulness and a little fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
          <div className="flex-1 flex-col">
        

            <AI>{children}</AI>
          </div>
       
      </body>
    </html>
  );
}
