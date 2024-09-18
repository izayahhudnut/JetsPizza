'use client'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
    CartesianGrid,
  } from "recharts";
  
  import { useState } from "react";
  
  const operationsData = {
    months: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    sales: [25000, 27000, 29000, 31000, 33000, 35000, 37000, 39000, 41000, 43000, 45000, 47000],
    costs: [15000, 14000, 14500, 15500, 16000, 16500, 17000, 17200, 17500, 17800, 18000, 18500],
    staffing: [12, 13, 14, 15, 15, 16, 17, 16, 15, 15, 14, 14],
    profit: [10000, 13000, 14500, 15500, 17000, 18500, 20000, 21000, 23500, 25500, 27000, 28500],
  };
  
  const GeneralOperations = () => {
    const [salesTargetIncrease, setSalesTargetIncrease] = useState(0);
  
    const calculateNewSales = (baseSales: number) => baseSales * (1 + salesTargetIncrease / 100);
    const projectedSales = operationsData.sales.map(calculateNewSales);
  
    const calculateNewProfit = (baseSales: number, baseCosts: number) =>
      (baseSales * (1 + salesTargetIncrease / 100)) - baseCosts;
  
    const projectedProfit = operationsData.sales.map((sales, index) =>
      calculateNewProfit(sales, operationsData.costs[index])
    );
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">General Operations Overview</h2>
        <p className="text-gray-600 mb-4">
          Explore ways to improve your business by adjusting sales targets and optimizing your staffing. See the impact on costs and profit.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sales vs. Costs</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={operationsData.months.map((month, index) => ({
                month,
                sales: operationsData.sales[index],
                costs: operationsData.costs[index],
                profit: operationsData.profit[index],
                projectedSales: projectedSales[index],
                projectedProfit: projectedProfit[index],
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Current Sales" />
                <Line type="monotone" dataKey="projectedSales" stroke="#82ca9d" name="Projected Sales" />
                <Line type="monotone" dataKey="costs" stroke="#ff8042" name="Costs" />
                <Line type="monotone" dataKey="profit" stroke="#8884d8" name="Profit" />
                <Line type="monotone" dataKey="projectedProfit" stroke="#82ca9d" name="Projected Profit" />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-4">Staffing Needs</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={operationsData.months.map((month, index) => ({
                month,
                staffing: operationsData.staffing[index],
                projectedStaffing: Math.ceil(operationsData.staffing[index] * (1 + salesTargetIncrease / 100)),
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `${value} staff`} />
                <Legend />
                <Bar dataKey="staffing" fill="#8884d8" name="Current Staffing" />
                <Bar dataKey="projectedStaffing" fill="#82ca9d" name="Projected Staffing" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Adjust Sales Target (%)</h3>
          <input
            type="range"
            min="-10"
            max="30"
            value={salesTargetIncrease}
            onChange={(e) => setSalesTargetIncrease(parseFloat(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-600 mt-2">
            Adjust the sales target by {salesTargetIncrease}% to see how it affects projected staffing, sales, and profits.
          </p>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
          <ul className="list-disc ml-5">
            <li>
              {salesTargetIncrease > 0
                ? `By increasing sales by ${salesTargetIncrease}%, you would need to hire approximately ${Math.ceil(operationsData.staffing[11] * (1 + salesTargetIncrease / 100)) - operationsData.staffing[11]} more staff in December.`
                : `No additional staffing required based on current projections.`}
            </li>
            <li>Increased sales could result in an additional profit of ${projectedProfit[11] - operationsData.profit[11]} by the end of the year.</li>
            <li>Focus on key months like December where sales are highest to optimize profits.</li>
            <li>Consider cost-saving measures in months where profit margins are lower, such as February and March.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default GeneralOperations;
  