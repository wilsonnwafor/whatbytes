'use client';

import { SyllabusItem } from "../types/syllabus.types";


const syllabusData: SyllabusItem[] = [
  {
    topic: "HTML Tools, Forms, History",
    percentage: 80,
    color: "bg-blue-500",
  },
  {
    topic: "Tags & References in HTML",
    percentage: 60,
    color: "bg-orange-500",
  },
  {
    topic: "Tables & References in HTML",
    percentage: 24,
    color: "bg-red-500",
  },
  {
    topic: "Tables & CSS Bascis",
    percentage: 96,
    color: "bg-green-500",
  },
];

export default function SyllabusAnalysis() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-6">Syllabus Wise Analysis</h3>
      
      <div className="space-y-6">
        {syllabusData.map((item, index) => (
          <div key={index}>
            <div className="text-gray-700 mb-2">{item.topic}</div>
            <div className="relative h-2 bg-gray-100 rounded-full">
              <div
                className={`absolute h-full rounded-full ${item.color}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <div className="text-right mt-1">
              <span className={`text-sm ${item.color.replace('bg-', 'text-')}`}>
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 