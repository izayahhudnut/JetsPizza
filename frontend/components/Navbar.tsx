'use client'
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar () {
    const pathname = usePathname();
    const isMainPage = pathname === '/';
    const isProductsPage = pathname === '/products';

    return (
        <div className="flex flex-row px-4 justify-end w-full items-center py-3 ">
         
            <div className="flex flex-row space-x-2 items-center">
                <Link href="/">
                    <div className={`flex flex-row space-x-1 items-center hover:bg-gray-200 hover:bg-opacity-50 p-2 rounded-xl ${isMainPage ? 'text-black ' : 'text-black opacity-30'}`}>
                        <ChatIcon />
                        <p className="text-sm">
                            Budtender
                        </p>
                    </div>
                </Link>
                <Link href="/products">
                    <div className={`flex flex-row space-x-1 items-center hover:bg-gray-200 hover:bg-opacity-50 p-2  rounded-xl ${isProductsPage ? 'text-black ' : 'text-black opacity-30 '}`}>
                        <SearchIcon />
                        <p className="text-sm">
                            Search
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
