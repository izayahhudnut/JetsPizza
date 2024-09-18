// components/ExpenseBreakdownSpinner.tsx
import React from "react";

const ExpenseBreakdownSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      <p className="ml-4 text-gray-600">Loading Expense Breakdown...</p>
    </div>
  );
};

export default ExpenseBreakdownSpinner;
