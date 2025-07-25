import React, { useState } from 'react';

const ReportTable = ({ searchTerm, activeTab }) => {
  // Sample vendor/seller data
  const vendorData = [
    {
      id: 'BIL-001',
      date: '2024-01-15',
      vendor: 'DJ',
      profit: '$10',
      profitPercentage: '2%',
      totalCost: '$299'
    },
    {
      id: 'BIL-002',
      date: '2024-01-14',
      vendor: 'Live Band',
      profit: '$10',
      profitPercentage: '2%',
      totalCost: '$99'
    },
    {
      id: 'BIL-003',
      date: '2024-01-13',
      vendor: 'Photo Booth',
      profit: '$10',
      profitPercentage: '2%',
      totalCost: '$599'
    },
    {
      id: 'BIL-004',
      date: '2024-01-12',
      vendor: 'DJ',
      profit: '$10',
      profitPercentage: '2%',
      totalCost: '$199'
    },
    {
      id: 'BIL-005',
      date: '2024-01-11',
      vendor: 'Live Band',
      profit: '$10',
      profitPercentage: '2%',
      totalCost: '$299'
    },
    {
      id: 'BIL-006',
      date: '2024-01-10',
      vendor: 'Photo Booth',
      profit: '$10',
      profitPercentage: '2%',
      totalCost: '$99'
    }
  ];

  // Sample booking transaction data - different structure
  const bookingData = [
    {
      billingId: 'BIL-001',
      date: '2024-01-15',
      subscription: 'Premium',
      type: 'Buyer',
      daysLeft: '25 days',
      revenue: '$299'
    },
    {
      billingId: 'BIL-002',
      date: '2024-01-14',
      subscription: 'Standard',
      type: 'Buyer',
      daysLeft: '12 days',
      revenue: '$99'
    },
    {
      billingId: 'BIL-003',
      date: '2024-01-13',
      subscription: 'Ultra',
      type: 'Buyer',
      daysLeft: '12 days',
      revenue: '$599'
    },
    {
      billingId: 'BIL-004',
      date: '2024-01-12',
      subscription: 'Standard',
      type: 'Buyer',
      daysLeft: '8 days',
      revenue: '$199'
    },
    {
      billingId: 'BIL-005',
      date: '2024-01-11',
      subscription: 'Premium',
      type: 'Seller',
      daysLeft: '33 days',
      revenue: '$299'
    },
    {
      billingId: 'BIL-006',
      date: '2024-01-10',
      subscription: 'Ultra',
      type: 'Buyer',
      daysLeft: '10 days',
      revenue: '$99'
    }
  ];

  const currentData = activeTab === 'vendor' ? vendorData : bookingData;

  // Filter data based on search term
  const filteredData = currentData.filter(item => {
    const searchFields = activeTab === 'vendor' 
      ? [item.id, item.vendor, item.date]
      : [item.billingId, item.subscription, item.type, item.date];
    
    return searchFields.some(field => 
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const getSubscriptionColor = (subscription) => {
    switch (subscription) {
      case 'Premium':
        return 'bg-green-100 text-green-800';
      case 'Standard':
        return 'bg-pink-100 text-pink-800';
      case 'Ultra':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Buyer':
        return 'bg-gray-100 text-gray-800';
      case 'Seller':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-pink-50 border-b border-gray-200">
            <tr>
              {activeTab === 'vendor' ? (
                <>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking Id
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking Items Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit %
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Cost
                  </th>
                </>
              ) : (
                <>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Billing ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subscription
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Days Left
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {activeTab === 'vendor' ? (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-black">
                        {item.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-black font-semibold">
                        {item.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-black font-semibold">
                        {item.vendor}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{item.profit}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {item.profitPercentage}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.totalCost}
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.billingId}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {item.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSubscriptionColor(item.subscription)}`}>
                        {item.subscription}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.daysLeft}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.revenue}
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-sm">
              No {activeTab === 'vendor' ? 'seller reports' : 'booking transactions'} found matching your search.
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="px-6 py-2 flex items-center justify-between border-t border-gray-200 bg-gray-50">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{Math.min(10, filteredData.length)}</span> of{' '}
                <span className="font-medium">{filteredData.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
