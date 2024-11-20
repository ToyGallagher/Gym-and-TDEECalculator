import React from 'react';
import TDEECalculator from "components/tdee/TDEECalculator";

export default function tdee() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TDEECalculator/>
    </div>
  );
}