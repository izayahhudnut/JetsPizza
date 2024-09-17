// components/SalesAnalysisDisplay.tsx
"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

interface SalesData {
  currentWeekSales: number;
  lastYearSameWeekSales: number;
  factorsImpactingSales: string[];
  projectedSales: { [week: string]: number };
}

interface SalesAnalysisDisplayProps {
  data: SalesData;
}

const SalesAnalysisDisplay: React.FC<SalesAnalysisDisplayProps> = ({ data }) => {
  const barChartData = {
    labels: ["Current Week", "Same Week Last Year"],
    datasets: [
      {
        label: "Sales ($)",
        data: [data.currentWeekSales, data.lastYearSameWeekSales],
        backgroundColor: ["#4BC0C0", "#FF6384"],
      },
    ],
  };

  const projectionLabels = Object.keys(data.projectedSales);
  const projectionValues = Object.values(data.projectedSales);

  const lineChartData = {
    labels: projectionLabels,
    datasets: [
      {
        label: "Projected Sales ($)",
        data: projectionValues,
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54,162,235,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sales Analysis</h2>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Current vs Last Year</h3>
        <Bar data={barChartData} />
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Sales Projections</h3>
        <Line data={lineChartData} />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-medium text-gray-800">Factors Impacting Sales:</h3>
        <ul className="list-disc list-inside mt-2">
          {data.factorsImpactingSales.map((factor, index) => (
            <li key={index} className="text-gray-700">
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalesAnalysisDisplay;
