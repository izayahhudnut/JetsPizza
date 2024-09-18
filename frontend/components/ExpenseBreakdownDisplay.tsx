// components/ExpenseBreakdownDisplay.tsx

"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Define the structure of the expenses
const initialExpenses = {
  Rent: 80000,
  "Employee Salaries": 250000,
  Utilities: 20000,
  Ingredients: 150000,
  Marketing: 30000,
  "Franchise Fees": 40000,
  Maintenance: 10000,
};

const ExpenseBreakdownDisplay: React.FC = () => {
  const [expenses, setExpenses] = useState<typeof initialExpenses>(
    initialExpenses
  );

  const totalExpenses = Object.values(expenses).reduce(
    (acc, expense) => acc + expense,
    0
  );
  const revenue = 600000; // Example revenue
  const profit = revenue - totalExpenses;
  const profitMargin = ((profit / revenue) * 100).toFixed(2);

  const handleExpenseChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    expenseName: keyof typeof expenses
  ) => {
    const newValue = parseInt(e.target.value, 10);
    setExpenses({ ...expenses, [expenseName]: newValue });
  };

  const chartData = Object.keys(expenses).map((expense) => ({
    name: expense,
    Expense: expenses[expense as keyof typeof expenses],
  }));

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Expense Breakdown & Impact on Profit
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {Object.keys(expenses).map((expense) => (
          <div key={expense}>
            <label className="block text-gray-700 mb-2">{expense}</label>
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={expenses[expense as keyof typeof expenses]} // Type-safe access
              onChange={(e) =>
                handleExpenseChange(e, expense as keyof typeof expenses)
              }
              className="w-full"
            />
            <p className="text-gray-600 text-sm">
              ${expenses[expense as keyof typeof expenses].toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            <Bar dataKey="Expense" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Profit Overview</h3>
        <p className="text-gray-700">
          <strong>Total Expenses:</strong> ${totalExpenses.toLocaleString()}
        </p>
        <p className="text-gray-700">
          <strong>Revenue:</strong> ${revenue.toLocaleString()}
        </p>
        <p className="text-gray-700">
          <strong>Profit:</strong> ${profit.toLocaleString()}
        </p>
        <p className="text-gray-700">
          <strong>Profit Margin:</strong> {profitMargin}%
        </p>
      </div>
    </div>
  );
};

export default ExpenseBreakdownDisplay;
