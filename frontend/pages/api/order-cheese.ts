// pages/api/order-cheese.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Send a webhook to Zapier
      const response = await fetch("https://hooks.zapier.com/hooks/catch/14035339/2hcaar7/", {
        method: "POST",
        body: JSON.stringify({ item: "Cheese", quantity: 100 }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        res.status(200).json({ success: true, message: "Order successful." });
      } else {
        res.status(500).json({ success: false, message: "Order failed." });
      }
    } catch (error) {
      console.error("Error ordering cheese:", error);
      res.status(500).json({ success: false, message: "Order failed." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
