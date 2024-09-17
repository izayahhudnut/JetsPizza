// components/PopularPizzasList.tsx
"use client";
import { useActions, useUIState } from "ai/rsc";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useCallback } from "react";

interface PizzaInfo {
    name: string;
    description: string;
    price: number;
    image: string;
    popularity: number;
}

interface PopularPizzasListProps {
    pizzas: PizzaInfo[];
}

export default function PopularPizzasList({ pizzas }: PopularPizzasListProps) {
    const { submitUserMessage } = useActions();
    const [messages, setMessages] = useUIState();

    const handlePizzaClick = useCallback(
        async (pizza: PizzaInfo) => {
            const response = await submitUserMessage(
                `User is interested in the pizza: ${JSON.stringify(pizza)}. Please provide more details.`
            );
            setMessages((currentMessages: any[]) => [...currentMessages, response]);
        },
        [submitUserMessage, setMessages]
    );

    return (
        <div className="border rounded-xl pb-4 max-w-4xl mx-auto shadow-md bg-white">
            <div className="text-center mb-4 border-b pb-2 py-4 rounded-t-xl bg-gray-50">
                <h1 className="text-2xl font-semibold text-gray-800">Popular Pizzas</h1>
            </div>
            {pizzas.map((pizza) => (
                <div
                    key={pizza.name}
                    className="flex flex-row items-center bg-white hover:bg-gray-100 rounded-xl p-4 mb-2 mx-4 cursor-pointer shadow-sm"
                    onClick={() => handlePizzaClick(pizza)}
                >
                    {/* Pizza Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={pizza.image}
                            alt={pizza.name}
                            className="w-20 h-20 object-cover rounded-xl"
                        />
                    </div>

                    {/* Pizza Info */}
                    <div className="flex-grow ml-6">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h2 className="font-semibold text-xl text-gray-800">{pizza.name}</h2>
                                <p className="text-gray-600 text-sm mt-1">{pizza.description}</p>
                                <p className="text-gray-800 text-lg font-medium mt-2">
                                    ${pizza.price.toFixed(2)}
                                </p>
                            </div>
                            <InfoOutlinedIcon style={{ color: "gray" }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
