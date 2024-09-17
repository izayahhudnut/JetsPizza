// components/Spinners/CostAnalysisSpinner.tsx
"use client";
import React from "react";

const CostAnalysisSpinner = () => (
  <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"></div>
    <div className="h-48 bg-gray-300 rounded"></div>
  </div>
);

export default CostAnalysisSpinner;
