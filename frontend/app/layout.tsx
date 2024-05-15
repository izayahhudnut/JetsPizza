import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Image from "next/image";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from 'next/link';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GoogleIcon from '@mui/icons-material/Google';
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
        <div className="flex flex-row">
          <div className="flex flex-col bg-gray-200 bg-opacity-50 w-64 min-h-screen bg-white border-r">
            <div className="flex flex-row items-center justify-between py-3 px-3 border-b bg-custom-gray mb-4">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full">
                <div className="text-green-800">
                  <GoogleIcon />
                </div>
              </div>
              <div className="py-1.5 px-2 bg-white rounded-xl border hover:bg-gray-200 hover:bg-opacity-20 hover:cursor-pointer">
                <NotificationsOutlinedIcon style={{ fontSize: '20px' }} />
              </div>
            </div>

            <div className="flex flex-col h-full px-5 justify-between">
              <div className="space-y-1">
                <Link href="/">
                  <div className="px-4 py-2 rounded-xl bg-opacity-50 hover:bg-gray-100 flex hover:bg-opacity-50 flex items-center text-gray-700 bg-white rounded-md">
                    <PersonOutlineOutlinedIcon style={{ color: 'black' }} />
                    <p className="ml-2">Budtender</p>
                  </div>
                </Link>
                <Link href="/products">
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 flex hover:bg-opacity-50 hover:rounded-xl">
                    <LocalFloristOutlinedIcon style={{ color: 'black' }} />
                    <p className="ml-2">Products</p>
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 flex hover:bg-opacity-50 hover:rounded-xl">
                    <SettingsOutlinedIcon style={{ color: 'black' }} />
                    <p className="ml-2">Settings</p>
                  </div>
                </Link>
              </div>

              <div className="border rounded-xl bg-custom-gray mb-10 p-5 flex flex-col items-center">
                <LocalOfferOutlinedIcon style={{ fontSize: '50px', color: 'green' }} />
                <p className="text-sm mt-5 text-gray-700 text-center"> Use Promo Code &quot;GREEN&quot; when checking out for 50% off all products </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex-col">
            <header className="h-[64px] p-4 bg-custom-gray border-b flex justify-end px-5">
              <img 
                src='/template.png'
                width={30}
                height={30}
                alt="Logo"
              />
            </header>

            <AI>{children}</AI>
          </div>
        </div>
      </body>
    </html>
  );
}
