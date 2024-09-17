// components/GeneralOperationsDisplay.tsx
"use client";
import React from "react";

interface GeneralOperationsData {
  recommendations: string[];
}

interface GeneralOperationsDisplayProps {
  data: GeneralOperationsData;
}

const GeneralOperationsDisplay: React.FC<GeneralOperationsDisplayProps> = ({ data }) => {
  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">General Operations Recommendations</h2>
      <ul className="list-disc list-inside text-gray-700">
        {data.recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneralOperationsDisplay;
