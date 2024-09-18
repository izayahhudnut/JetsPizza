// components/Spinners/SalesDataSpinner.tsx
"use client";
import React from "react";

const SalesDataSpinner = () => (
  <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
    <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-48 bg-gray-300 rounded mb-8"></div>
    <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-48 bg-gray-300 rounded"></div>
  </div>
);

export default SalesDataSpinner;
