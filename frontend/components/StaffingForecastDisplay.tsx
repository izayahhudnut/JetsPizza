// components/StaffingForecastDisplay.tsx
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

interface StaffingData {
  averageWeeklyHours: number;
  predictedIncreasePercentage: number;
  forecastForNextWeek: number;
  historicalHours: number[]; // Array of hours for the past weeks
}

interface StaffingForecastDisplayProps {
  data: StaffingData;
}

const StaffingForecastDisplay: React.FC<StaffingForecastDisplayProps> = ({ data }) => {
  const historicalLabels = data.historicalHours.map((_, index) => `Week ${index + 1}`);
  const historicalData = data.historicalHours;
  const forecastData = [...historicalData, data.forecastForNextWeek];
  const forecastLabels = [...historicalLabels, "Next Week"];

  const chartData = {
    labels: forecastLabels,
    datasets: [
      {
        label: "Staffing Hours",
        data: forecastData,
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54,162,235,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="border rounded-xl p-6 max-w-4xl mx-auto shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Staffing Forecast</h2>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Staffing Trend Over Time</h3>
        <Line data={chartData} />
      </div>
      <div className="text-lg text-gray-700">
        <p className="mb-2">
          Average Weekly Hours (Last 6 Weeks): {data.averageWeeklyHours} hours
        </p>
        <p className="mb-2">
          Predicted Increase for Next Week: {data.predictedIncreasePercentage}%
        </p>
        <p>
          Forecast for Next Week: {data.forecastForNextWeek} hours
        </p>
      </div>
    </div>
  );
};

export default StaffingForecastDisplay;
