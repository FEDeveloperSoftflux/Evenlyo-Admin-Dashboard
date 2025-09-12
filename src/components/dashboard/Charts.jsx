import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Charts = ({ activeTab }) => {
  const { monthlyBookingData } = useSelector((state) => state.dashboard);
  
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const bookingData = monthlyBookingData.map(item => ({
    month: monthNames[item.month - 1],
    value: item.count
  }));
  
  const salesData = bookingData; // Using same data for sales tab
  const chartData = activeTab === 'sales' ? salesData : bookingData;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-left justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-black mb-1">
            {activeTab === 'sales' ? 'Yearly Sales Overview' : 'Yearly Bookings Overview'}
          </h3>
          <p className="text-sm text-gray-500">
            {activeTab === 'sales' ? `$${bookingData.reduce((sum, item) => sum + item.value, 0) * 10}` : `$${bookingData.reduce((sum, item) => sum + item.value, 0) * 8}`}
          </p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
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
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px'
              }}
              labelStyle={{ color: '#374151' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#E31B95"
              strokeWidth={3}
              dot={{ fill: '#E31B95', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#E31B95', strokeWidth: 2, fill: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
