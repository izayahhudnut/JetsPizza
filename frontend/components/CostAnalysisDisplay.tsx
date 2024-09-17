// components/CostAnalysisDisplay.tsx
"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

interface COGSData {
  year1: number;
  year2: number;
  year3: number;
}

interface CostAnalysisDisplayProps {
  data: COGSData;
}

const CostAnalysisDisplay: React.FC<CostAnalysisDisplayProps> = ({ data }) => {
  const chartData = {
    labels: ["Year 1", "Year 2", "Year 3"],
    datasets: [
      {
        label: "Average COGS Price ($/month)",
        data: [data.year1, data.year2, data.year3],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cost Analysis (COGS Over 3 Years)</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CostAnalysisDisplay;
