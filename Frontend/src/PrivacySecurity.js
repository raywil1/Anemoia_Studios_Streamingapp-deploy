import React from "react";
import { Link } from "react-router-dom";
import "./PrivacySecurity.css";

function PrivacySecurity() {
  
  const privacySecuritySettings = {
    enableTwoFactorAuth: true,
    receiveEmailNotifications: false,
    
  };

  return (
    <div className="privacy-security-container">
      <h1 className="privacy-security-header">Privacy and Security Settings</h1>

      <div className="privacy-security-info">
        <h2>Privacy and Security Options:</h2>
        <p>Two-Factor Authentication: {privacySecuritySettings.enableTwoFactorAuth ? "Enabled" : "Disabled"}</p>
        <p>Receive Email Notifications: {privacySecuritySettings.receiveEmailNotifications ? "Enabled" : "Disabled"}</p>
        
      </div>
    </div>
  );
}

export default PrivacySecurity;
