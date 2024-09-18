// components/InventoryDisplay.tsx

"use client";
import React, { useState } from "react";

interface InventoryData {
  currentInventory: { [item: string]: number };
  projectedNeeds: { [item: string]: number };
  historicalComparison: { [item: string]: number };
}

interface InventoryDisplayProps {
  data: InventoryData;
}

const InventoryDisplay: React.FC<InventoryDisplayProps> = ({ data }) => {
  const [orderStatus, setOrderStatus] = useState<null | string>(null);
  const [isOrdering, setIsOrdering] = useState<boolean>(false);

  const cheeseCurrent = data.currentInventory["Cheese"];
  const cheeseProjected = data.projectedNeeds["Cheese"];
  const isCheeseLow = cheeseCurrent < cheeseProjected;

  const handleOrderCheese = async () => {
    setIsOrdering(true);
    try {
      const response = await fetch("/api/order-cheese", {
        method: "POST",
      });
      const result = await response.json();
      if (result.success) {
        setOrderStatus("Order placed successfully!");
      } else {
        setOrderStatus("Order failed. Please try again.");
      }
    } catch (error) {
      console.error("Error ordering cheese:", error);
      setOrderStatus("An error occurred. Please try again.");
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Inventory Ordering Recommendations
      </h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
              Item
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
              Current Inventory (lbs)
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
              Projected Need (lbs)
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
              Recommendation
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.currentInventory).map((item) => (
            <tr key={item}>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {item}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {data.currentInventory[item]}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {data.projectedNeeds[item] || "N/A"}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                {data.projectedNeeds[item]
                  ? data.currentInventory[item] < data.projectedNeeds[item]
                    ? "Order More"
                    : "Sufficient Stock"
                  : "Monitor Levels"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isCheeseLow && (
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Exclamation Icon */}
              <svg
                className="h-6 w-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.366-.446.983-.446 1.349 0l6.804 8.29c.345.42.038 1.061-.517 1.061H2.97c-.555 0-.862-.641-.517-1.061l6.804-8.29zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-5a1 1 0 00-.993.883L9 9v2a1 1 0 001.993.117L11 11V9a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-yellow-700">
                Hey, I noticed the cheese stock is low. Would you like to order
                more?
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={handleOrderCheese}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              disabled={isOrdering}
            >
              {isOrdering ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Ordering...
                </>
              ) : (
                "Order More Cheese"
              )}
            </button>
          </div>
          {orderStatus && (
            <p
              className={`mt-4 text-sm ${
                orderStatus.includes("successfully")
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {orderStatus}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InventoryDisplay;
