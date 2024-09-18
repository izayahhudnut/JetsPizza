// components/MarketShareDisplay.tsx

"use client";
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MarketShareDisplay: React.FC = () => {
  // Initial market share data
  const initialData = [
    { name: "Jet's Pizza", revenue: 500000 },
    { name: "Mod Pizza", revenue: 600000 },
    { name: "Pizza Hut", revenue: 400000 },
    { name: "Domino's", revenue: 500000 },
  ];

  const totalMarketRevenue = initialData.reduce(
    (acc, curr) => acc + curr.revenue,
    0
  );

  const initialMarketShareData = initialData.map((item) => ({
    name: item.name,
    value: (item.revenue / totalMarketRevenue) * 100,
    revenue: item.revenue,
  }));

  const [revenue, setRevenue] = useState(initialData[0].revenue);
  const [marketShareData, setMarketShareData] = useState(
    initialMarketShareData
  );

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRevenue = Number(e.target.value);
    setRevenue(newRevenue);

    // Update Jet's Pizza revenue
    const updatedData = marketShareData.map((item) => {
      if (item.name === "Jet's Pizza") {
        return { ...item, revenue: newRevenue };
      }
      return item;
    });

    // Recalculate total market revenue
    const newTotalMarketRevenue = updatedData.reduce(
      (acc, curr) => acc + curr.revenue,
      0
    );

    // Recalculate market shares
    const newMarketShareData = updatedData.map((item) => ({
      ...item,
      value: (item.revenue / newTotalMarketRevenue) * 100,
    }));

    setMarketShareData(newMarketShareData);
  };

  // Recommendations based on revenue changes
  const recommendations = [
    "Invest in targeted marketing to boost sales.",
    "Introduce new menu items to attract customers.",
    "Enhance online ordering experience.",
    "Offer promotions and discounts.",
    "Improve customer service for repeat business.",
  ];

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Market Share Analysis
      </h2>
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <label
            htmlFor="revenue-slider"
            className="mr-4 text-gray-700 font-medium"
          >
            Adjust Your Revenue: ${revenue.toLocaleString()}
          </label>
          <input
            id="revenue-slider"
            type="range"
            min="100000"
            max="1000000"
            step="10000"
            value={revenue}
            onChange={handleRevenueChange}
            className="w-full"
          />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={marketShareData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={(entry) => `${entry.name}: ${entry.value.toFixed(2)}%`}
            >
              {marketShareData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value.toFixed(2)}%`,
                name,
              ]}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 text-gray-700">
        <h3 className="text-xl font-medium mb-4">
          Recommendations to Increase Market Share:
        </h3>
        <ul className="list-disc list-inside">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketShareDisplay;
