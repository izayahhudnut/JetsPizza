// components/Spinners/InventorySpinner.tsx
"use client";
import React from "react";

const InventorySpinner = () => (
  <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
    <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
    {[...Array(5)].map((_, index) => (
      <div key={index} className="h-6 bg-gray-300 rounded w-full mb-2"></div>
    ))}
  </div>
);

export default InventorySpinner;
