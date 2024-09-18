'use client'
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar () {
    const pathname = usePathname();
    const isMainPage = pathname === '/';
    const isProductsPage = pathname === '/products';

    return (
        <div className="flex flex-row px-4 justify-between w-full items-center py-3 justify-center">
            <Link href="https://www.jetspizza.com/">
                <Image
                    src={"/logo.png"}
                    height={175}
                    width={175}
                    alt='logo'
                />
            </Link>
         
        </div>
    );
}
