// components/CostAnalysisDisplay.tsx

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

// Define the COGSDetails type within the file
type COGSDetails = {
  years: number[];
  ingredients: string[];
  costs: {
    [ingredient: string]: number[];
  };
};

// Data fetching function within the file
async function fetchCOGSDetails(): Promise<COGSDetails> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    years: [2021, 2022, 2023],
    ingredients: ["Cheese", "Tomato Sauce", "Flour", "Pepperoni"],
    costs: {
      Cheese: [50000, 53000, 56000],
      "Tomato Sauce": [20000, 21000, 22000],
      Flour: [30000, 32000, 34000],
      Pepperoni: [15000, 16000, 17000],
    },
  };
}

const CostAnalysisDisplay: React.FC = () => {
  const [data, setData] = useState<COGSDetails | null>(null);

  useEffect(() => {
    fetchCOGSDetails().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = data.years.map((year, index) => {
    const yearData: any = { year: year.toString() };
    data.ingredients.forEach((ingredient) => {
      yearData[ingredient] = data.costs[ingredient][index];
    });
    return yearData;
  });

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        COGS Analysis (Last 3 Years)
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Legend />
          {data.ingredients.map((ingredient, index) => (
            <Bar
              key={ingredient}
              dataKey={ingredient}
              stackId="a"
              fill={colors[index % colors.length]}
              name={ingredient}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6 text-gray-700">
        <h3 className="text-xl font-medium">Ingredient Cost Changes:</h3>
        <ul className="list-disc list-inside mt-2">
          {data.ingredients.map((ingredient) => {
            const costs = data.costs[ingredient];
            const percentageChange = ((costs[2] - costs[0]) / costs[0]) * 100;
            return (
              <li key={ingredient}>
                {ingredient}: {percentageChange.toFixed(2)}% increase over 3 years.
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CostAnalysisDisplay;
