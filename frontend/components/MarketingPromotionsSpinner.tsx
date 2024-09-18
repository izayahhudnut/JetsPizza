// components/MarketingPromotionsSpinner.tsx
import React from 'react';

const MarketingPromotionsSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

export default MarketingPromotionsSpinner;
