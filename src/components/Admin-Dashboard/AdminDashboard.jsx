import React from 'react';
import { useNavigate } from "react-router-dom";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data (e.g., token from localStorage)
    localStorage.removeItem("userToken");

    // Redirect to login page
    navigate("/");
  };
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <ul className="sidebar-menu">
          <li>Dashboard Overview</li>
          <li>Manage Users</li>
          <li>Property Listings</li>
          <li>Messages</li>
          <li>Settings</li>
          <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
        </ul>
      </aside>
      
      <main className="content">
        <header className="header">
          <h1>Welcome, Admin!</h1>
          <p>Here is your dashboard overview</p>
        </header>
        
        <section className="dashboard-overview">
          <div className="card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Properties Listed</h3>
            <p>35</p>
          </div>
          <div className="card">
            <h3>New Messages</h3>
            <p>8</p>
          </div>
          <div className="card">
            <h3>Settings</h3>
            <p>Configure your system</p>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <p>5 users logged in recently</p>
          </div>
          <div className="card">
            <h3>Total Revenue</h3>
            <p>$5000</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard
