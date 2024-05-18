import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Image from "next/image";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from 'next/link';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

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
