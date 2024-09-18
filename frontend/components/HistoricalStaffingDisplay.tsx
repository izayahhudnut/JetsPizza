'use client'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
    CartesianGrid,
  } from "recharts";
  
  const StaffingChart = () => {
    const staffingData = [
      { timePeriod: 'Jan', actualStaff: 30, forecastedStaff: 35, events: 'New Year', insight: 'Increase staff due to holidays' },
      { timePeriod: 'Feb', actualStaff: 28, forecastedStaff: 32, events: '', insight: 'Normal staffing levels' },
      { timePeriod: 'Mar', actualStaff: 35, forecastedStaff: 37, events: 'Spring Break', insight: 'Expect higher foot traffic during Spring Break' },
      { timePeriod: 'Apr', actualStaff: 32, forecastedStaff: 34, events: '', insight: 'Maintain standard staffing' },
      { timePeriod: 'May', actualStaff: 40, forecastedStaff: 42, events: 'Memorial Day', insight: 'Prepare for increased orders' },
      { timePeriod: 'Jun', actualStaff: 38, forecastedStaff: 39, events: '', insight: 'Slight staffing adjustment needed' },
      { timePeriod: 'Jul', actualStaff: 45, forecastedStaff: 48, events: '4th of July', insight: 'Increase staffing for holiday rush' },
      { timePeriod: 'Aug', actualStaff: 40, forecastedStaff: 41, events: '', insight: 'Steady staffing' },
      { timePeriod: 'Sep', actualStaff: 37, forecastedStaff: 39, events: 'Back to School', insight: 'Increase staff for Back to School events' },
      { timePeriod: 'Oct', actualStaff: 42, forecastedStaff: 43, events: 'Halloween', insight: 'Expect increased orders around Halloween' },
      { timePeriod: 'Nov', actualStaff: 45, forecastedStaff: 47, events: 'Thanksgiving', insight: 'Prepare for high volume around Thanksgiving' },
      { timePeriod: 'Dec', actualStaff: 50, forecastedStaff: 52, events: 'Christmas', insight: 'Significant increase in staffing needed for Christmas rush' },
    ];
  
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Staffing Needs & Insights (Past Year)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={staffingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timePeriod" label={{ value: 'Month', position: 'insideBottomRight', offset: -5 }} />
            <YAxis label={{ value: 'Staff Count', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={({ payload }) => {
              if (payload && payload.length) {
                const { timePeriod, actualStaff, forecastedStaff, events, insight } = payload[0].payload;
                return (
                  <div className="bg-white p-2 border border-gray-300 rounded-md shadow-lg">
                    <p><strong>{timePeriod}</strong></p>
                    <p><strong>Actual Staff:</strong> {actualStaff}</p>
                    <p><strong>Forecasted Staff:</strong> {forecastedStaff}</p>
                    {events && <p><strong>Events:</strong> {events}</p>}
                    <p><strong>Insight:</strong> {insight}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Legend />
            <Line type="monotone" dataKey="actualStaff" stroke="#82ca9d" name="Actual Staffing" />
            <Line type="monotone" dataKey="forecastedStaff" stroke="#8884d8" name="Forecasted Staffing" />
          </LineChart>
        </ResponsiveContainer>
  
        <div className="mt-6">
          <h3 className="text-lg font-medium">Insights:</h3>
          <ul className="list-disc ml-5 mt-2">
            {staffingData.map((entry, index) => (
              <li key={index}>{entry.timePeriod}: {entry.insight}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default StaffingChart;
  