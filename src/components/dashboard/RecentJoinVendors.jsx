import React from 'react';
import { useSelector } from 'react-redux';

const RecentJoinVendors = ({ activeTab }) => {
  const { recentVendors } = useSelector((state) => state.dashboard);
  
  const formatDate = (dateString) => {
    if (!dateString) return 'No bookings';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };
  
  const bookingVendors = recentVendors.map((vendor) => ({
    id: vendor.id,
    name: vendor.name,
    type: 'Active',
    typeColor: 'bg-green-100 text-green-800',
    category: 'Services',
    date: formatDate(vendor.lastBooking),
    avatar: vendor.name.split(' ').map(n => n[0]).join('').substring(0, 2)
  }));
  
  const salesVendors = bookingVendors;
  const vendors = activeTab === 'sales' ? salesVendors : bookingVendors;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-bold text-black">
          {activeTab === 'sales' ? 'Recent Join Sales Vendors' : 'Recent Join Vendors'}
        </h3>
        <button className="text-sm text-gradient font-medium flex items-center underline">
          View All
          {/* Icon can be added here if needed */}
        </button>
      </div>

      <div className="">
        {vendors.slice(0, 3).map((vendor, index) => (
          <div key={vendor.id} className={`flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 hover:bg-gray-50 transition-colors ${index !== vendors.length - 1 ? 'border-b border-gray-200 mb-4 pb-4' : ''}`}>
            <div className="flex items-start space-x-4 sm:space-x-0">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 sm:mt-1">
                <span className="text-black font-bold text-sm">{vendor.avatar}</span>
              </div>
              
              <div className="flex-1 min-w-0 sm:hidden">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <p className="text-sm font-bold text-black truncate">{vendor.name}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${vendor.typeColor}`}>
                      {vendor.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{vendor.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{vendor.date}</span>
                    <button className="text-xs text-gray-800 hover:text-gray-700 px-3 py-1 border rounded-xl font-bold">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-1">
                    <p className="text-sm font-bold text-black truncate">{vendor.name}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${vendor.typeColor}`}>
                      {vendor.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{vendor.category}</p>
                </div>
                <div className="flex flex-col items-end">
                  <button className="text-xs text-gray-800 hover:text-gray-700 px-3 py-1 border rounded-xl font-bold mb-1">
                    More Details
                  </button>
                  <span className="text-xs text-gray-400">{vendor.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentJoinVendors;
