'use client';

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for testing
const data = [
  { x: 0, value: 5 },
  { x: 10, value: 8 },
  { x: 20, value: 15 },
  { x: 25, value: 25 },
  { x: 30, value: 35 },
  { x: 40, value: 45 },
  { x: 50, value: 65 },
  { x: 55, value: 45 },
  { x: 65, value: 30 },
  { x: 75, value: 20 },
  { x: 85, value: 15 },
  { x: 95, value: 0 },
  { x: 100, value: 0 },
];

export default function Chart() {
  return (
    <div className="w-full h-[600px]">
      <h3 className="text-lg font-semibold mb-2">Comparison Graph</h3>
      <p className="text-gray-600 mb-4">
        You scored 90% percentile which is higher than the
        average percentile 72% of all the engineers who took this assessment
      </p>
      <ResponsiveContainer width="100%" height="40%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={[0, 100]}
            tickCount={5}
            label={{ value: 'Percentile', position: 'bottom' }}
          />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          {/* Vertical line for your percentile */}
          <Line
            type="monotone"
            dataKey="yourScore"
            stroke="#ddd"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 