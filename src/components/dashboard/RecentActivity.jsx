import React from 'react';

const RecentActivity = ({ activeTab }) => {
  const bookings = [
    {
      id: 1,
      name: 'John Doe',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-800',
      details: 'Office Chair from ABC Supplies',
      date: '11 Jun 2025',
      avatar: 'JD',
      action: 'Track'
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'In progress',
      statusColor: 'bg-yellow-100 text-yellow-800',
      details: 'Laptop Stand from Tech Solutions',
      date: '11 Jun 2025',
      avatar: 'JS',
      action: 'Track'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      status: 'Pending',
      statusColor: 'bg-blue-100 text-blue-800',
      details: 'Table Lamp from Home Decor',
      date: '11 Jun 2025',
      avatar: 'BJ',
      action: 'Track'
    }
  ];
  const sales = [
    {
      id: 1,
      name: 'Alice Brown',
      status: 'Delivered',
      statusColor: 'bg-green-100 text-green-800',
      details: 'Sold: Desk Lamp',
      date: '10 Jun 2025',
      avatar: 'AB',
      action: 'Invoice'
    },
    {
      id: 2,
      name: 'David Lee',
      status: 'Processing',
      statusColor: 'bg-yellow-100 text-yellow-800',
      details: 'Sold: Office Desk',
      date: '09 Jun 2025',
      avatar: 'DL',
      action: 'Invoice'
    },
    {
      id: 3,
      name: 'Sophia Turner',
      status: 'Pending',
      statusColor: 'bg-blue-100 text-blue-800',
      details: 'Sold: Chair',
      date: '08 Jun 2025',
      avatar: 'ST',
      action: 'Invoice'
    }
  ];
  const data = activeTab === 'sales' ? sales : bookings;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-bold text-black">
          {activeTab === 'sales' ? 'Recent Sales' : 'Recent Bookings'}
        </h3>
        <button className="text-sm text-gradient font-medium flex items-center underline">
          View All
          {/* Icon can be added here if needed */}
        </button>
      </div>

      <div className="">
        {data.map((item, index) => (
          <div key={item.id} className={`flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 hover:bg-gray-50 transition-colors ${index !== data.length - 1 ? 'border-b border-gray-200 mb-4 pb-4' : ''}`}>
            <div className="flex items-start space-x-4 sm:space-x-0">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 sm:mt-1">
                <span className="text-black font-bold text-sm">{item.avatar}</span>
              </div>
              
              <div className="flex-1 min-w-0 sm:hidden">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <p className="text-sm font-bold text-black truncate">{item.name}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.details}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <button className="text-xs text-gray-800 hover:text-gray-700 px-3 py-1 border rounded-xl font-bold">
                      {item.action}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-1">
                    <p className="text-sm font-bold text-black truncate">{item.name}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.details}</p>
                </div>
                <div className="flex flex-col items-end">
                  <button className="text-xs text-gray-800 hover:text-gray-700 px-3 py-1 border rounded-xl font-bold mb-1">
                    {item.action}
                  </button>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
