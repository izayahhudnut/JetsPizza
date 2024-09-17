// components/SalesDataSpinner.tsx
"use client";
import React from "react";

export const SalesDataSpinner = () => (
    <div className="border rounded-xl p-4 max-w-4xl mx-auto shadow-sm animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
    </div>
);
