// components/MarketingPromotionsDisplay.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

// Sample data for marketing promotions over the last 3 years
const initialData = [
  {
    quarter: "Q1 2021",
    cost: 10000,
    trafficIncrease: 12,
    revenue: 15000,
  },
  {
    quarter: "Q2 2021",
    cost: 8000,
    trafficIncrease: 10,
    revenue: 13000,
  },
  {
    quarter: "Q3 2021",
    cost: 12000,
    trafficIncrease: 15,
    revenue: 18000,
  },
  {
    quarter: "Q4 2021",
    cost: 14000,
    trafficIncrease: 17,
    revenue: 21000,
  },
  {
    quarter: "Q1 2022",
    cost: 11000,
    trafficIncrease: 13,
    revenue: 16000,
  },
  {
    quarter: "Q2 2022",
    cost: 9000,
    trafficIncrease: 11,
    revenue: 14000,
  },
  {
    quarter: "Q3 2022",
    cost: 13000,
    trafficIncrease: 16,
    revenue: 19000,
  },
  {
    quarter: "Q4 2022",
    cost: 15000,
    trafficIncrease: 18,
    revenue: 22000,
  },
  {
    quarter: "Q1 2023",
    cost: 12000,
    trafficIncrease: 14,
    revenue: 17000,
  },
  {
    quarter: "Q2 2023",
    cost: 10000,
    trafficIncrease: 12,
    revenue: 15000,
  },
  {
    quarter: "Q3 2023",
    cost: 14000,
    trafficIncrease: 17,
    revenue: 20000,
  },
  {
    quarter: "Q4 2023",
    cost: 16000,
    trafficIncrease: 19,
    revenue: 23000,
  },
];

const MarketingPromotionsDisplay: React.FC = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Marketing Promotions Over Last 3 Years
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#82ca9d"
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            labelFormatter={(label) => `Quarter: ${label}`}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="cost" fill="#8884d8" name="Cost ($)" />
          <Bar
            yAxisId="right"
            dataKey="trafficIncrease"
            fill="#82ca9d"
            name="Traffic Increase (%)"
          />
          <Bar yAxisId="left" dataKey="revenue" fill="#ffc658" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 text-gray-700">
        <h3 className="text-xl font-medium">Promotion Performance Insights:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Costs, traffic increase, and revenue vary significantly by quarter.</li>
          <li>Q4 promotions tend to have the highest costs and returns.</li>
          <li>Monitor promotions to ensure you're maximizing revenue relative to the cost.</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketingPromotionsDisplay;
