import React, { useState } from 'react';
import DashboardHeader from '../components/common/DashboardHeader';
import StatsCards from '../components/Dashboard/StatsCards';
import RecentActivity from '../components/Dashboard/RecentActivity';
import Charts from '../components/Dashboard/Charts';
import RecentJoinVendors from '../components/Dashboard/RecentJoinVendors';
import RecentJoinClients from '../components/Dashboard/RecentJoinClients';
import '../styles/design-system.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('booking');

  return (
    <div className="flex flex-col h-full">
      {/* Fixed Dashboard Header */}
      <div className="flex-shrink-0">
        <DashboardHeader title="Dashboard" subtitle="Welcome to your admin dashboard" />
      </div>

      {/* Scrollable Main Dashboard Content */}
      <div className="flex-1 overflow-y-auto">
        <main className="container-7xl py-10 px-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-responsive-h2 text-gray-900 mb-2">Dashboard</h1>
            <p className="text-md text-gray-400">
              Welcome to Jaydeep it will be admin or roll management
            </p>
          </div>

          {/* Stats Cards Section */}
          <StatsCards />

          {/* Tabs Section */}
          <div className="mt-8 mb-6 flex justify-center">
            <div className="relative flex bg-gray-100 p-1 rounded-xl w-full max-w-6xl">
              {/* Sliding background indicator */}
              <div 
                className={`absolute top-1 bottom-1 bg-gradient-brand rounded-2xl shadow-sm transition-all duration-300 ease-in-out ${
                  activeTab === 'booking' 
                    ? 'left-1 right-1/2 mr-0.5' 
                    : 'left-1/2 right-1 ml-0.5'
                }`}
              />
              <button
                onClick={() => setActiveTab('booking')}
                className={`relative z-10 flex-1 px-8 py-2 rounded-2xl text-base font-medium transition-all duration-300 ${
                  activeTab === 'booking'
                    ? 'text-white'
                    : 'text-black font-bold hover:text-gray-900'
                }`}
              >
                Booking Items
              </button>
              <button
                onClick={() => setActiveTab('sales')}
                className={`relative z-10 flex-1 px-8 py-2 rounded-2xl text-base font-medium transition-all duration-300 ${
                  activeTab === 'sales'
                    ? 'text-white'
                    : 'text-black font-bold hover:text-gray-900'
                }`}
              >
                Sale Items
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'booking' ? (
              <div>
                {/* Booking Items details go here */}
                <p className="text-center text-gray-600">Booking Items details...</p>
              </div>
            ) : (
              <div>
                {/* Sale Items details go here */}
                <p className="text-center text-gray-600">Sale Items details...</p>
              </div>
            )}
          </div>

          {/* Charts and Recent Bookings Section */}
          <section className="mb-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Charts activeTab={activeTab} />
              <RecentActivity activeTab={activeTab} />
            </div>
          </section>

          {/* Recent Join Sections */}
          <section className="mb-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentJoinVendors activeTab={activeTab} />
              <RecentJoinClients activeTab={activeTab} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
