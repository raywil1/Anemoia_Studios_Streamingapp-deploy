import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Account() {
  // Dummy data for demonstration
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    plan: "Premium",
    paymentMethod: "**** **** **** 1234",
  };

  return (
    <div className="account-container">
      <h1 className="account-header">Account</h1>

      <div className="profile-section">
        <h2>Profiles:</h2>
        <div className="profile-list">
          {/* Dynamically list profiles */}
          <div className="profile-item">
            <img src="/path-to-your-default-avatar.png" alt="Profile" />
            <span>{userProfile.name}</span>
          </div>
          {/* Add more profiles or an 'Add Profile' button here */}
        </div>
      </div>

      <div className="account-details">
        <h2>Account Details:</h2>
        <p>Email: {userProfile.email}</p>
        <p>Plan: {userProfile.plan}</p>
        <Link to="/change-plan">Change Plan</Link>
        <p>Payment Method: {userProfile.paymentMethod}</p>
        <Link to="/update-payment">Update Payment Method</Link>
        <Link to="/change-password">Change Password</Link>
        <Link to="/language-settings">Language Settings</Link>
        <Link to="/playback-settings">Playback Settings</Link>
      </div>
    </div>
  );
}

export default Account;
