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
        <div className="flex flex-row px-4 justify-between w-full items-center py-3">
            <div className="flex flex-row space-x-2 items-center">
                <h1 className="text-green-800 font-bold text-2xl">
                    G
                </h1>
                <h1 className="text-md text-black">
                    Budtender
                </h1>
            </div>
            <div className="flex flex-row space-x-2 items-center">
                <Link href="/">
                    <div className={`flex flex-row space-x-1 items-center ${isMainPage ? 'text-black font-bold' : 'text-black opacity-30'}`}>
                        <ChatIcon />
                        <p>
                            Budtender
                        </p>
                    </div>
                </Link>
                <Link href="/products">
                    <div className={`flex flex-row space-x-1 items-center ${isProductsPage ? 'text-black font-bold' : 'text-black opacity-30 '}`}>
                        <SearchIcon />
                        <p>
                            Search
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
