"use client";
import { useActions, useUIState } from "ai/rsc";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "next/image";
import { useCallback, useState } from "react";

interface ProductInfo {
    product_name: string;
    dispensary: string;
    mg_content: string;
    price: string;
    explanation: string;
    image: string;
}

interface RecommendedProductsListProps {
    products: ProductInfo[];
    selectedEffect: string;
}

export function RecommendedProductsList({
    products,
    selectedEffect,
}: RecommendedProductsListProps) {
    const { submitUserMessage } = useActions();
    const [messages, setMessages] = useUIState();
    const [productLimit, setProductLimit] = useState(3); // Initial limit

    const handleProductClick = useCallback(
        async (product: ProductInfo) => {
            const response = await submitUserMessage(
                `The user has selected a product they want to learn more about. Please provide detailed information using the "product_details" function call. Assume all products relate to CBD. Here is the Product: ${JSON.stringify(
                    product
                )} `
            );
            setMessages((currentMessages: any[]) => [
                ...currentMessages,
                response,
            ]);
        },
        [submitUserMessage, setMessages, selectedEffect]
    );

    const handleLoadMore = () => {
        setProductLimit((prevLimit) => prevLimit + 5); // Increase limit by 5
    };

    return (
        <div className="border rounded-xl pb-4 max-w-4xl mx-auto shadow-sm">
            {/* Title and Subtext */}
            <div className="text-center mb-4 border-b pb-2 bg- py-4 rounded-t-xl">
                <h1 className="text-lg font-small">
                    Recommended Products for <span className="font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.fuchsia.800),theme(colors.purple.700),theme(colors.violet.600),theme(colors.indigo.500),theme(colors.violet.600),theme(colors.purple.700),theme(colors.fuchsia.800))] bg-[length:200%_auto] animate-gradient">{selectedEffect} </span>
                </h1>
            </div>
            {products.slice(0, productLimit).map((product) => (
                <div
                    key={product.product_name}
                    className="flex flex-row items-center bg-white hover:bg-gray-200 hover:bg-opacity-30 rounded-xl p-2 mb-2 hover:cursor-pointer mx-4 "
                    onClick={() => handleProductClick(product)}
                >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={product.image}
                            alt={`${product.image}`}
                            className="w-16 h-16 object-contain rounded-xl"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow ml-4">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h2 className="font-medium text-md">
                                    {product.product_name}
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    {product.dispensary}
                                </p>
                                <span className="text-md font-medium text-green-800">
                                    ${product.price}
                                </span>
                            </div>
                            <InfoOutlinedIcon style={{ color: "gray" }} />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {product.explanation}
                        </p>
                    </div>
                </div>
            ))}
            {productLimit < products.length && (
                <div className="text-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className=" text-black text-sm opacity-70 rounded-full"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
