"use client";

import React, { useState } from "react";

export default function TDEECalculator() {
  const [formData, setFormData] = useState({
    gender: "male",
    weight: "",
    height: "",
    age: "",
    activityLevel: "1.2",
  });
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { gender, weight, height, age, activityLevel } = formData;

    // Calculate BMR
    const bmr =
      gender === "male"
        ? 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5
        : 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;

    // Calculate TDEE
    const tdee = bmr * Number(activityLevel);
    setResult(tdee);
  };

  return (
    <div className="min-h-screen w-full p-6 flex items-center justify-center bg-[url('/cbum2.jpeg')] bg-cover bg-center">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">TDEE Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Gender */}
          <div>
            <label className="block text-lg font-bold mb-3">Gender</label>
            <div className="flex space-x-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                <span className="text-lg">Male</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="accent-pink-500"
                />
                <span className="text-lg">Female</span>
              </label>
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-lg font-bold mb-3">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-lg font-bold mb-3">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-lg font-bold mb-3">Age (years)</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-lg font-bold mb-3">Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Light exercise</option>
              <option value="1.55">Moderate exercise</option>
              <option value="1.725">Heavy exercise</option>
              <option value="1.9">Very heavy exercise</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md font-bold hover:bg-blue-600 transition"
          >
            Calculate
          </button>
        </form>

        {result && (
          <div className="mt-6 p-6 bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700">Your TDEE:</h2>
            <p className="text-3xl font-bold text-blue-900">{Math.round(result)} Kcal</p>
          </div>
        )}
      </div>
    </div>
  );
}