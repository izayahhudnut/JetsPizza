// components/Spinners/StaffingSpinner.tsx
"use client";
import React from "react";

const StaffingSpinner = () => (
  <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
  </div>
);

export default StaffingSpinner;
