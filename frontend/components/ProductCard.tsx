"use client";
import { useActions, useUIState } from "ai/rsc";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Image from "next/image";

interface ProductInfo {
    product_name: string;
    dispensary: string;
    mg_content?: string;
    price: string;
    strain_type: string;
    brand_name: string;
    description: string;
    image: string;
}

export default function ProductCard({
    productInfo,
}: {
    productInfo: ProductInfo;
}) {
    const { submitUserMessage } = useActions();
    const [messages, setMessages] = useUIState();

    return (
        <>
            <div className="flex flex-row w-full border mx-auto rounded-xl">
                {/* Product Image */}
                <div className="p-5 md:w-1/4 flex items-center justify-center">
                    <img
                        src={productInfo.image}
                        alt={`${productInfo.image}`}
                        className="w-[130px] h-[130px] object-contain rounded-xl"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col md:w-3/4 p-5 ">
                    <p className="font-medium text-lg">
                        {productInfo.product_name}
                    </p>
                    <div className="flex flex-row space-x-5">
                        <div className="flex flex-col">
                            <p>
                                <span className="font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.fuchsia.800),theme(colors.purple.700),theme(colors.violet.600),theme(colors.indigo.500),theme(colors.violet.600),theme(colors.purple.700),theme(colors.fuchsia.800))] bg-[length:200%_auto] animate-gradient">
                                    {productInfo.strain_type}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">
                                    {productInfo.brand_name}
                                </span>
                            </p>
                            <p>
                                <span className="font-normal">CBD:</span>{" "}
                                <span className="font-medium">
                                    {productInfo?.mg_content}
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>
                                <span className="font-normal">$</span>
                                <span className="font-medium">
                                    {productInfo.price}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">
                                    {productInfo.dispensary}
                                </span>
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600">{productInfo.description}</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap mt-5 md:space-x-4 space-y-4 md:space-y-0">
                {/* Buy Product Button */}
                <div
                    className="bg-custom-gray py-3 px-3 rounded-xl items-center inline-flex hover:bg-gray-200 hover:cursor-pointer w-full md:w-auto"
                    onClick={async () => {
                        const response = await submitUserMessage(
                            `The user wants to buy this product. Call this function "check_out". Here is the Product: ${JSON.stringify(
                                productInfo
                            )}`
                        );
                        setMessages((currentMessages: any[]) => [
                            ...currentMessages,
                            response,
                        ]);
                    }}
                >
                    <ShoppingCartIcon />
                    <p className="text-s ml-2">Buy Product</p>
                </div>

                {/* Recommend Another Product Button */}
                <div
                    className="bg-custom-gray py-3 px-3 rounded-xl items-center inline-flex hover:bg-gray-200 hover:cursor-pointer w-full md:w-auto"
                    onClick={async () => {
                        const response = await submitUserMessage(
                            `The user wants a recommendation for another product.`
                        );
                        setMessages((currentMessages: any[]) => [
                            ...currentMessages,
                            response,
                        ]);
                    }}
                >
                    <AutoAwesomeIcon style={{ fontSize: "20px" }} />
                    <p className="text-s ml-2">Recommend another product</p>
                </div>
            </div>
        </>
    );
}
