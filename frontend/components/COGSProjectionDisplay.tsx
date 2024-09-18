"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Define types for ingredients and base costs
interface COGSData {
  [ingredient: string]: number;
}

// Ingredient types
const ingredients = ["Cheese", "Tomato Sauce", "Flour", "Pepperoni"] as const;
type Ingredient = typeof ingredients[number];

// Initial base costs
const baseCosts: COGSData = {
  Cheese: 57000,
  "Tomato Sauce": 23000,
  Flour: 35000,
  Pepperoni: 18000,
};

// COGSProjectionDisplay Component
const COGSProjectionDisplay: React.FC = () => {
  const projectionYears = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

  const [inflationRate, setInflationRate] = useState<number>(3); // Default 3%
  const [projectedData, setProjectedData] = useState<any[]>([]);
  const [profitMargins, setProfitMargins] = useState<any[]>([]);

  const salesGrowthRate = 0.05; // 5% sales growth
  const lastYearSales = 200000; // Previous sales figure

  useEffect(() => {
    calculateProjections();
  }, [inflationRate]);

  const calculateProjections = () => {
    const data: Array<{ [key: string]: number | string }> = [];
    const profitData: Array<{ year: string; "Gross Profit Margin": number }> = [];

    let previousSales = lastYearSales;

    // Iterate over the projection years
    for (let i = 0; i < projectionYears.length; i++) {
      const year = projectionYears[i];

      // Create an object to store the projected costs for each ingredient
      const ingredientCosts: COGSData = {};
      ingredients.forEach((ingredient) => {
        const lastYearCost = i === 0 ? baseCosts[ingredient] : data[i - 1][ingredient] as number;
        const projectedCost = lastYearCost * (1 + inflationRate / 100);
        ingredientCosts[ingredient] = projectedCost;
      });

      // Calculate total COGS for the year
      const totalCOGS = Object.values(ingredientCosts).reduce(
        (acc: number, curr: number) => acc + curr,
        0
      );

      // Projected sales
      const projectedSales = previousSales * (1 + salesGrowthRate);

      // Gross profit and margin
      const grossProfit = projectedSales - totalCOGS;
      const grossProfitMargin = (grossProfit / projectedSales) * 100;

      // Store the projection data for chart display
      data.push({
        year: year.toString(),
        ...ingredientCosts,
      });

      // Store the profit margin data for chart display
      profitData.push({
        year: year.toString(),
        "Gross Profit Margin": grossProfitMargin,
      });

      // Update sales for next iteration
      previousSales = projectedSales;
    }

    setProjectedData(data);
    setProfitMargins(profitData);
  };

  const handleInflationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInflationRate(parseFloat(e.target.value));
  };

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        COGS Projection (Next 5 Years)
      </h2>
      <div className="mb-6">
        <label htmlFor="inflationSlider" className="block text-gray-700">
          Adjust Inflation Rate (%):
        </label>
        <input
          id="inflationSlider"
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={inflationRate}
          onChange={handleInflationChange}
          className="w-full mt-2"
        />
        <p className="text-sm text-gray-600">
          {inflationRate}% inflation rate
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={projectedData}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toLocaleString()}k`} />
          <Tooltip formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name]} />
          <Legend />
          {ingredients.map((ingredient, index) => (
            <Line
              key={ingredient}
              type="monotone"
              dataKey={ingredient}
              stroke={colors[index % colors.length]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Projected Gross Profit Margins</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={profitMargins}>
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `${value.toFixed(2)}%`} />
            <Tooltip formatter={(value: number, name: string) => [`${value.toFixed(2)}%`, name]} />
            <Legend />
            <Line type="monotone" dataKey="Gross Profit Margin" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default COGSProjectionDisplay;
