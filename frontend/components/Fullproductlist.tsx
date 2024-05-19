'use client'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Link from 'next/link';


function Skeleton() {
    return (
        <>
        
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
            <div className="flex flex-row border-b pt-2 pb-5 mt-5 space-x-5 px-5 items-center">
                <div className="w-20 h-20 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                <div className="flex w-full space-y-1 flex-col">
                    <div className="w-20 h-4 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="w-[350px] h-5 bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
                    <div className="flex flex pt-2 row items-center space-x-5">
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                        <div className="w-[70px] h-6 bg-gray-300 bg-opacity-50 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="w-[70px] h-[60px] bg-gray-300 bg-opacity-50 rounded-xl animate-pulse"></div>
            </div>
          
        </>
    );
}

export default function FullList() {
    const [data, setData] = useState<ApiData[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedDispensaries, setSelectedDispensaries] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSort = (sortType: string) => {
        let sortedData: ApiData[];
        if (sortType === 'lowToHigh') {
            sortedData = [...filteredData].sort((a, b) => {
                const priceA = a.sales && a.sales !== "null" ? parseFloat(a.sales) : parseFloat(a.price);
                const priceB = b.sales && b.sales !== "null" ? parseFloat(b.sales) : parseFloat(b.price);
                return priceA - priceB;
            });
        } else if (sortType === 'highToLow') {
            sortedData = [...filteredData].sort((a, b) => {
                const priceA = a.sales && a.sales !== "null" ? parseFloat(a.sales) : parseFloat(a.price);
                const priceB = b.sales && b.sales !== "null" ? parseFloat(b.sales) : parseFloat(b.price);
                return priceB - priceA;
            });
        } else {
            sortedData = filteredData;
        }
        setData(sortedData);
    };

    interface ApiData {
        id: number;
        product_name: string;
        strain_type: string;
        brand_name: string;
        cbd: string;
        price: string;
        dispensary: string;
        description: string;
        explanation: string;
        image: string;
        sales: string;
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
                const jsonData = await response.json();
                console.log("API Response:", jsonData);
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleTypeChange = (type: string) => {
        const updatedTypes = selectedTypes.includes(type)
            ? selectedTypes.filter((t) => t !== type)
            : [...selectedTypes, type];
        setSelectedTypes(updatedTypes);
    };

    const handleBrandChange = (brand: string) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter((b) => b !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(updatedBrands);
    };

    const handleDispensaryChange = (dispensary: string) => {
        const updatedDispensaries = selectedDispensaries.includes(dispensary)
            ? selectedDispensaries.filter((d) => d !== dispensary)
            : [...selectedDispensaries, dispensary];
        setSelectedDispensaries(updatedDispensaries);
    };

    const filteredData = data.filter((product) => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.strain_type);
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand_name);
        const dispensaryMatch = selectedDispensaries.length === 0 || selectedDispensaries.includes(product.dispensary);
        return typeMatch && brandMatch && dispensaryMatch;
    });

    const types = [...new Set(data.map((product) => product.strain_type))];
    const brands = [...new Set(data.map((product) => product.brand_name))];
    const dispensaries = [...new Set(data.map((product) => product.dispensary))];

    return (
        <>
        <div className="flex justify-end space-x-3 p-4 items-center rounded-md">
        <Link href="/" >
        <div className="flex flex-row items-center py-2 px-2 rounded-full border border-gray-400 ">
        <p className="text-gray-800 text-sm">Chat</p>
        
        </div>
    </Link>

    <Link href="/settings" >
    <div className="flex flex-row items-center py-2 px-2 rounded-full border border-gray-400 ">
        <p className="text-gray-800 text-sm">Customize</p>
        
        </div>
    </Link>
    <Link href="/products" >
    <div className="flex flex-row items-center py-2 px-2 rounded-full border bg-custom-gray  border-black ">
    <AcUnitIcon style={{fontSize: '20px', color: 'green'}} />

        <p className="text-gray-800 text-sm">Browse</p>
        
        </div>
    </Link>
</div>
        <div className="flex flex-row">
            <div className="w-48 border-r h-[calc(100vh-64px)] space-y-10 pt-10 px-3 flex flex-col">
                <div className="flex flex-col border-b pb-5 space-y-2">
                    <p className="text-sm font-bold">Types</p>
                    {types
                        .filter((type) => type !== "N/A")
                        .map((type) => (
                            <div key={type} className="flex items-center cursor-pointer justify-between" onClick={() => handleTypeChange(type)}>
                                <div className="flex items-center space-x-2">
                                    <div className={`h-3 w-3 rounded border border-gray-400 ${selectedTypes.includes(type) ? 'bg-green-700' : 'white'}`}></div>
                                    <p className="text-xs">{type}</p>
                                </div>
                                <div className="bg-gray-200 opacity-50 p-1 rounded">
                                    <p className="text-xs">{data.filter((product) => product.strain_type === type).length}</p>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="flex flex-col border-b pb-5 space-y-2">
                    <p className="text-sm font-bold">Brands</p>
                    {brands
                        .filter((brand) => brand !== "N/A")
                        .map((brand) => (
                            <div key={brand} className="flex items-center cursor-pointer justify-between" onClick={() => handleBrandChange(brand)}>
                                <div className="flex items-center space-x-2">
                                    <div className={`h-3 w-3 rounded border border-gray-400 ${selectedBrands.includes(brand) ? 'bg-green-700' : 'white'}`}></div>
                                    <p className="text-xs">{brand}</p>
                                </div>
                                <div className="bg-gray-200 opacity-50 p-1 rounded">
                                    <p className="text-xs">{data.filter((product) => product.brand_name === brand).length}</p>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="flex flex-col border-b pb-5 space-y-2">
                    <p className="text-sm font-bold">Dispensaries</p>
                    {dispensaries
                        .filter((dispensary) => dispensary !== "N/A")
                        .map((dispensary) => (
                            <div key={dispensary} className="flex items-center cursor-pointer justify-between" onClick={() => handleDispensaryChange(dispensary)}>
                                <div className="flex items-center space-x-2">
                                    <div className={`h-3 w-3 rounded border border-gray-400 ${selectedDispensaries.includes(dispensary) ? 'bg-green-700' : 'white'}`}></div>
                                    <p className="text-xs">{dispensary.length > 15 ? `${dispensary.substring(0,15)}... `: dispensary}</p>
                                </div>
                                <div className="bg-gray-200 opacity-50 p-1 rounded">
                                    <p className="text-xs">{data.filter((product) => product.dispensary === dispensary).length}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex flex-col px-10 w-full">
                <div className="flex pt-8 items-center pb-3 flex row border-b w-full">
                    <h2 className="font-bold text-lg w-full">All CBD</h2>
                    <div className="flex flex-row space-x-2">
                        <div className="flex flex-row space-x-2">
                            <div
                                className="border flex items-center flex-nowrap flex flex-row rounded-xl cursor-pointer px-2 py-1 relative"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <h1 className="text-sm whitespace-nowrap">Sort By</h1>
                                {showDropdown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                {showDropdown && (
                                    <div className="absolute top-full mt-2 right-0 bg-white z-10 w-[175px] py-2 rounded-xl shadow-md">
                                        <p className="font-bold text-gray-600 text-xs ml-3 opacity-50">Sort</p>
                                        <div
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSort('lowToHigh')}
                                        >
                                            <p className="text-xs">Price: Low to High</p>
                                        </div>
                                        <div
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSort('highToLow')}
                                        >
                                            <p className="text-xs">Price: High to Low</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <Skeleton />
                ) : (
                    <ul className="space-y-2">
                        {filteredData.map((productInfo) => (
                            <li key={productInfo.id} className="border-b p-4">
                                <div className="flex flex-row space-x-5 items-center">
                                    <img
                                        src={productInfo.image}
                                        alt={`${productInfo.product_name}`}
                                        className="w-20 h-20 object-contain rounded-xl"
                                    />
                                    <div className="flex w-full space-y-1 flex-col">
                                        <div className="flex flex-row space-x-2 items-center">
                                            <p className="text-sm text-gray-600">{productInfo.brand_name}</p>
                                            <p> - </p>
                                            <p className="text-xs text-gray-400">{productInfo.dispensary}</p>
                                        </div>
                                        <h2 className="text-sm font-semibold">{productInfo.product_name}</h2>
                                        <div className="flex flex row items-center space-x-5">
                                            {productInfo.strain_type !== "N/A" && (
                                                <div className="bg-custom-gray p-2 rounded-full">
                                                    <p className="text-xs opacity-80">{productInfo.strain_type}</p>
                                                </div>
                                            )}
                                            {productInfo.cbd && productInfo.cbd !== "0" && (
                                                <p className="text-xs opacity-50">CBD: {productInfo.cbd}mg</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="bg-custom-gray shadow-sm w-40 h-20 rounded-xl text-center flex items-center justify-center">
                                        {productInfo.sales && productInfo.sales !== "null" ? (
                                            <div className="flex-1 flex-col">
                                                <p className="mx-10 opacity-20 line-through">${productInfo.price}</p>
                                                <p className="mx-10 mb-2 text-sm font-bold">${productInfo.sales}</p>
                                                <div className="bg-green-200">
                                                    <p className="text-xs">
                                                        {((1 - parseFloat(productInfo.sales) / parseFloat(productInfo.price)) * 100).toFixed(0)}% off
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="font-bold text-sm">${productInfo.price}</p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </>
    );
}
