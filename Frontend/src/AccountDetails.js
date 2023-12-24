
import React from "react";
import { Link } from "react-router-dom";
import "./AccountDetails.css";

function AccountDetails() {
  const userProfile = {
    email: "john.doe@example.com",
    plan: "Premium",
    paymentMethod: "**** **** **** 1234",
  };

  return (
    <div className="account-details-container">
      <h1 className="account-details-header">Account Details</h1>

      <div className="account-info">
        <h2>Account Details:</h2>
        <p>Email: {userProfile.email}</p>
        <p>Plan: {userProfile.plan}</p>
        <Link to="/change-plan">Change Plan</Link>
        <p>Payment Method: {userProfile.paymentMethod}</p>
      </div>
    </div>
  );
}

export default AccountDetails;
