// components/Spinners/MarketShareSpinner.tsx
"use client";
import React from "react";

const MarketShareSpinner = () => (
  <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="h-48 bg-gray-300 rounded w-full md:w-1/2 mb-6 md:mb-0"></div>
      <div className="h-48 bg-gray-300 rounded w-full md:w-1/2"></div>
    </div>
    <div className="h-6 bg-gray-300 rounded w-full mt-6 mb-4"></div>
    {[...Array(2)].map((_, index) => (
      <div key={index} className="h-6 bg-gray-300 rounded w-full mb-2"></div>
    ))}
  </div>
);

export default MarketShareSpinner;
