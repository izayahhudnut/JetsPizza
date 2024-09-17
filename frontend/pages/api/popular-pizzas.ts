// pages/api/popular-pizzas.ts
import type { NextApiRequest, NextApiResponse } from "next";

const popularPizzas = [
    {
        name: "Margherita",
        description: "Classic pizza with tomato sauce and cheese.",
        price: 8.99,
        image: "/images/margherita.jpg",
        popularity: 95,
    },
    // ...more pizzas
];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        res.status(200).json(popularPizzas);
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
