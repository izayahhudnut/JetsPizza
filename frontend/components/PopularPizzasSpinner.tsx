// components/PopularPizzasSpinner.tsx
"use client";
import React from "react";

export const PopularPizzasSpinner = () => (
    <div className="border rounded-xl pb-4 max-w-4xl mx-auto shadow-sm animate-pulse">
        <div className="text-center mb-4 border-b pb-2 py-4 rounded-t-xl">
            <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto"></div>
        </div>
        {[...Array(3)].map((_, index) => (
            <div
                key={index}
                className="flex flex-row items-center bg-white rounded-xl p-2 mb-2 mx-4"
            >
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
                </div>
                <div className="flex-grow ml-4">
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                        </div>
                        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded w-full mt-1"></div>
                </div>
            </div>
        ))}
    </div>
);
