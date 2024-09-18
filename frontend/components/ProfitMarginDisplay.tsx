// components/ProfitMarginDisplay.tsx

"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Define the FinancialData type within the file
type FinancialData = {
  years: number[];
  revenue: number[];
  cogs: number[];
  expenses: number[];
};

// Data fetching function within the file
async function fetchFinancialData(): Promise<FinancialData> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    years: [2020, 2021, 2022],
    revenue: [500000, 550000, 600000],
    cogs: [200000, 220000, 240000],
    expenses: [150000, 160000, 170000],
  };
}

const ProfitMarginDisplay: React.FC = () => {
  const [data, setData] = useState<FinancialData | null>(null);

  useEffect(() => {
    fetchFinancialData().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = data.years.map((year, index) => {
    const revenue = data.revenue[index];
    const cogs = data.cogs[index];
    const expenses = data.expenses[index];
    const grossProfit = revenue - cogs;
    const netProfit = grossProfit - expenses;
    const grossProfitMargin = (grossProfit / revenue) * 100;
    const netProfitMargin = (netProfit / revenue) * 100;
    return {
      year: year.toString(),
      "Gross Profit Margin": parseFloat(grossProfitMargin.toFixed(2)),
      "Net Profit Margin": parseFloat(netProfitMargin.toFixed(2)),
    };
  });

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Profit Margin Analysis (Last 3 Years)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="Gross Profit Margin" fill="#8884d8" />
          <Bar dataKey="Net Profit Margin" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitMarginDisplay;
