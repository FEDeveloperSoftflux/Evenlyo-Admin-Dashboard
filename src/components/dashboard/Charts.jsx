import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Charts = () => {
  // Sample data for the chart visualization matching the image
  const chartData = [
    { month: 'Jan', value: 300 },
    { month: 'Feb', value: 250 },
    { month: 'Mar', value: 200 },
    { month: 'Apr', value: 450 },
    { month: 'May', value: 350 },
    { month: 'Jun', value: 500 }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-black mb-1">Orders Overview</h3>
          <p className="text-sm text-gray-500">1 Month</p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E31B95" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#E31B95" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#E31B95"
              strokeWidth={3}
              fill="none"
              dot={{ fill: '#E31B95', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#E31B95', strokeWidth: 2, fill: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
