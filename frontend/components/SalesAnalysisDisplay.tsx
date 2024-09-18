// components/SalesAnalysisDisplay.tsx

"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";

const SalesAnalysisDisplay: React.FC = () => {
  // Initial financial data
  const initialData = {
    years: [2021, 2022, 2023],
    revenue: [550000, 600000, 1520422.78],
    cogs: [220000, 240000, 608169.11], // 40% of revenue
    expenses: [160000, 170000, 430119.79], // ~28.29% of revenue
    staffingCosts: [85000, 90000, 227963.42], // 15% of revenue
    inventoryCosts: [130000, 140000, 354765.32], // ~23.33% of revenue
    numberOfStaff: [72, 104, 263], // Scaled proportionally to revenue increase
  };

  // State for projected sales increase percentage
  const [salesIncreasePct, setSalesIncreasePct] = useState(0);

  // Calculate projected revenue based on sales increase
  const projectedRevenue =
    initialData.revenue[2] * (1 + salesIncreasePct / 100);

  // Calculate impact on COGS (assumed to vary directly with revenue)
  const projectedCOGS =
    initialData.cogs[2] * (1 + salesIncreasePct / 100);

  // Calculate impact on expenses (fixed and variable components)
  const fixedExpenses = 80000; // Fixed expenses remain constant
  const variableExpenses = initialData.expenses[2] - fixedExpenses;
  const projectedVariableExpenses =
    variableExpenses * (1 + salesIncreasePct / 100);
  const projectedExpenses = fixedExpenses + projectedVariableExpenses;

  // Calculate profit margins
  const grossProfit = projectedRevenue - projectedCOGS;
  const netProfit = grossProfit - projectedExpenses;
  const grossProfitMargin = (grossProfit / projectedRevenue) * 100;
  const netProfitMargin = (netProfit / projectedRevenue) * 100;

  // Calculate impact on staffing needs (assumed to increase with sales)
  const staffGrowthRate = salesIncreasePct / 100; // Assuming staff grows proportionally with sales increase
  const projectedNumberOfStaff = Math.ceil(
    initialData.numberOfStaff[2] * (1 + staffGrowthRate)
  );

  // Calculate impact on inventory requirements
  const projectedInventoryCosts =
    initialData.inventoryCosts[2] * (1 + salesIncreasePct / 100);

  // Handler for slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalesIncreasePct(parseFloat(e.target.value));
  };

  // Data for charts
  const chartData = [
    {
      name: "Current",
      Revenue: initialData.revenue[2],
      COGS: initialData.cogs[2],
      Expenses: initialData.expenses[2],
      "Gross Profit": initialData.revenue[2] - initialData.cogs[2],
      "Net Profit":
        initialData.revenue[2] - initialData.cogs[2] - initialData.expenses[2],
    },
    {
      name: "Projected",
      Revenue: projectedRevenue,
      COGS: projectedCOGS,
      Expenses: projectedExpenses,
      "Gross Profit": grossProfit,
      "Net Profit": netProfit,
    },
  ];

  const staffingData = [
    {
      name: "Current",
      "Number of Staff": initialData.numberOfStaff[2],
    },
    {
      name: "Projected",
      "Number of Staff": projectedNumberOfStaff,
    },
  ];

  const inventoryData = [
    {
      name: "Current",
      "Inventory Costs": initialData.inventoryCosts[2],
    },
    {
      name: "Projected",
      "Inventory Costs": projectedInventoryCosts,
    },
  ];

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Sales Projections and Impact Analysis
      </h2>
      <div className="mb-6">
        <label htmlFor="salesIncreaseSlider" className="block text-gray-700">
          Adjust Projected Sales Increase (%):
        </label>
        <input
          id="salesIncreaseSlider"
          type="range"
          min="-10"
          max="30"
          step="1"
          value={salesIncreasePct}
          onChange={handleSliderChange}
          className="w-full mt-2"
        />
        <p className="text-sm text-gray-600">
          {salesIncreasePct}%{" "}
          {salesIncreasePct >= 0 ? "increase" : "decrease"} in sales
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-gray-800">
          Financial Impact
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(value) => `$${value / 1000}k`}
              domain={[0, 'auto']}
            />
            <Tooltip
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Legend />
            <Bar dataKey="Revenue" fill="#8884d8" />
            <Bar dataKey="COGS" fill="#82ca9d" />
            <Bar dataKey="Expenses" fill="#ffc658" />
            <Bar dataKey="Net Profit" fill="#ff8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Profit Margins
          </h3>
          <p className="text-gray-700">
            <strong>Gross Profit Margin:</strong>{" "}
            {grossProfitMargin.toFixed(2)}%
          </p>
          <p className="text-gray-700">
            <strong>Net Profit Margin:</strong> {netProfitMargin.toFixed(2)}%
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Operational Impact
          </h3>
          <p className="text-gray-700">
            <strong>Projected Number of Staff:</strong>{" "}
            {projectedNumberOfStaff}
          </p>
          <p className="text-gray-700">
            <strong>Projected Inventory Costs:</strong> $
            {projectedInventoryCosts.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Staffing Needs
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={staffingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(value) => `${value}`}
                domain={[0, 'auto']}
                allowDecimals={false}
              />
              <Tooltip
                formatter={(value: number) => `${value} staff members`}
              />
              <Bar dataKey="Number of Staff" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Inventory Requirements
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(value) => `$${value / 1000}k`}
                domain={[0, 'auto']}
              />
              <Tooltip
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Bar dataKey="Inventory Costs" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalysisDisplay;
