// components/ExpenseManagementDisplay.tsx

"use client";
import React, { useEffect, useState } from "react";

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
    years: [2021, 2022, 2023],
    revenue: [500000, 550000, 600000],
    cogs: [200000, 220000, 240000],
    expenses: [150000, 160000, 170000],
  };
}

const ExpenseManagementDisplay: React.FC = () => {
  const [data, setData] = useState<FinancialData | null>(null);

  useEffect(() => {
    fetchFinancialData().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const totalExpenses = data.expenses.reduce((acc, val) => acc + val, 0);

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Expense Management (Last 3 Years)
      </h2>
      <table className="min-w-full bg-white mb-6">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
              Year
            </th>
            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
              Expenses ($)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.years.map((year, index) => (
            <tr key={year}>
              <td className="py-2 px-4 border-b text-gray-700">
                {year.toString()}
              </td>
              <td className="py-2 px-4 border-b text-gray-700">
                {data.expenses[index].toLocaleString()}
              </td>
            </tr>
          ))}
          <tr>
            <td className="py-2 px-4 font-bold text-gray-800">Total</td>
            <td className="py-2 px-4 font-bold text-gray-800">
              {totalExpenses.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseManagementDisplay;
