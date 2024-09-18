// components/Dashboard.tsx
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-6 mx-3 mt-5 space-y-6 mt-[-250px]">
      <h2 className="text-lg font-semibold text-black opacity-70">
        Business Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-300 border-opacity-30 p-5 rounded-xl">
          <h3 className="text-sm font-light text-black opacity-80 mb-2">
            Total Revenue (Last Year)
          </h3>
          <p className="text-2xl font-bold text-green-500 opacity-80">$600,000</p>
        </div>
        <div className="bg-white border border-gray-300 border-opacity-30 p-5 rounded-xl">
          <h3 className="text-sm font-light text-black opacity-60 mb-2">
            Locations
          </h3>
          <p className="text-2xl font-bold text-black opacity-80">5</p>
        </div>
        <div className="bg-white border border-gray-300 border-opacity-30 p-5 rounded-xl">
          <h3 className="text-sm font-light text-black opacity-80 mb-2">
            Inventory Value
          </h3>
          <p className="text-2xl font-bold text-green-500 opacity-80">$75,000</p>
        </div>
        <div className="bg-white border border-gray-300 border-opacity-30 p-5 rounded-xl">
          <h3 className="text-sm font-light text-black opacity-80 mb-2">
            Staffing Costs (This Month)
          </h3>
          <p className="text-2xl font-bold text-yellow-500 opacity-80">$25,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
