import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Setting.css";
import AccountDetails from "./AccountDetails";
import PrivacySecurity from "./PrivacySecurity";
import ManageSubscription from "./ManageSubscription";
import PaymentMethods from "./PaymentMethods";
import Notifications from "./Notifications";
import Language from "./Language";
import Accessibility from "./Accessibility";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import ApplicationVersion from "./ApplicationVersion";
import OurMission from "./OurMission";

function Setting() {
  return (
    <div className="settings-container">
      <h1 className="settings-header">Settings</h1>

      
      <div className="settings-category">
        <div className="settings-category-header settings-outline-bar">
          Account
        </div>
        <div className="settings-subcategory">
        <Link to="account-details" className="settings-subcategory-link">
            Account Details
        </Link>
          <Link to="privacy-security" className="settings-subcategory-link">
            Privacy and Security
          </Link>
          <Link to="manage-subscription" className="settings-subcategory-link">
            Manage Subscription
          </Link>
          <Link to="payment-methods" className="settings-subcategory-link">
            Payment Methods
          </Link>
        </div>
      </div>

      
      <div className="settings-category">
        <div className="settings-category-header settings-outline-bar">
          General
        </div>
        <div className="settings-subcategory">
          <Link to="notifications" className="settings-subcategory-link">
            Notifications
          </Link>
          <Link to="language" className="settings-subcategory-link">
            Language
          </Link>
          <Link to="accessibility" className="settings-subcategory-link">
            Accessibility
          </Link>
        </div>
      </div>

      
      <div className="settings-category">
        <div className="settings-category-header settings-outline-bar">
          About
        </div>
        <div className="settings-subcategory">
          <Link to="terms-of-service" className="settings-subcategory-link">
            Terms Of Service
          </Link>
          <Link to="privacy-policy" className="settings-subcategory-link">
            Privacy Policy
          </Link>
          <Link to="application-version" className="settings-subcategory-link">
            Application Version
          </Link>
          <Link to="our-mission" className="settings-subcategory-link">
            Our Mission
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Setting;
