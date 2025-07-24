import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import ListingManagement from './pages/ListingManagement'
import Tracking from './pages/Tracking'
import Sidebar from './components/common/Sidebar'
import './App.css'
import './styles/design-system.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'user-management':
        return <UserManagement />
      case 'listing-management':
        return <ListingManagement />
      case 'tracking':
        return <Tracking />
      case 'events':
        return (
          <div className="flex-1 overflow-y-auto">
            <div className="container-7xl py-responsive">
              <h1 className="text-responsive-h2 text-gray-900 mb-6">Events Management</h1>
              <div className="card-mobile space-mobile-md">
                <p className="text-gray-600">Events page coming soon...</p>
              </div>
            </div>
          </div>
        )
      case 'users':
        return (
          <div className="flex-1 overflow-y-auto">
            <div className="container-7xl py-responsive">
              <h1 className="text-responsive-h2 text-gray-900 mb-6">Users Management</h1>
              <div className="card-mobile space-mobile-md">
                <p className="text-gray-600">Users page coming soon...</p>
              </div>
            </div>
          </div>
        )
      case 'analytics':
        return (
          <div className="flex-1 overflow-y-auto">
            <div className="container-7xl py-responsive">
              <h1 className="text-responsive-h2 text-gray-900 mb-6">Analytics</h1>
              <div className="card-mobile space-mobile-md">
                <p className="text-gray-600">Analytics page coming soon...</p>
              </div>
            </div>
          </div>
        )
      case 'settings':
        return (
          <div className="flex-1 overflow-y-auto">
            <div className="container-7xl py-responsive">
              <h1 className="text-responsive-h2 text-gray-900 mb-6">Settings</h1>
              <div className="card-mobile space-mobile-md">
                <p className="text-gray-600">Settings page coming soon...</p>
              </div>
            </div>
          </div>
        )
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-0 flex flex-col overflow-hidden">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
