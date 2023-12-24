import "./App.css";
import React, { useState, useEffect } from "react";
import VidGrid from "./VidGrid";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Genre from "./Genre";
import Watchlist from "./Watchlist";
import Sidebar from "./Sidebar";
import LogIn from "./LogIn";
import Account from './Account';
import CreateAccount from "./CreateAccount";
import Setting from "./Setting";
import Help from "./Help";
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


function LoadingScreen() {
  const [text, setText] = useState("A");
  const targetText = "Anemoia";

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < targetText.length) {
        setText(targetText.substring(0, text.length + 1));
      }
    }, 500); // Adjust the duration between letters as needed

    return () => clearInterval(interval);
  }, [text, targetText]);

  return (
    <div className="center loading-screen">
      <h1>{text}</h1>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
    <div className={`App ${loading ? "loading" : ""}`}>
        {loading && <LoadingScreen />}
        <header className="Header">
          <Header />
        </header>
        <div className="Container">
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;What's New</h3>
                    <VidGrid />
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;For You</h3>
                    <VidGrid />
                  </div>
                }
              />
              <Route path="/watch-list" element={<Watchlist />} />
              <Route path="/account" element={<Account />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/help" element={<Help />} />
              <Route path="setting/account-details" element={<AccountDetails />} />
              <Route path="setting/privacy-security" element={<PrivacySecurity />} />
              <Route path="setting/manage-subscription" element={<ManageSubscription />} />
              <Route path="setting/payment-methods" element={<PaymentMethods />} />
              <Route path="setting/notifications" element={<Notifications />} />
              <Route path="setting/language" element={<Language />} />
              <Route path="setting/accessibility" element={<Accessibility />} />
              <Route path="setting/terms-of-service" element={<TermsOfService />} />
              <Route path="setting/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="setting/application-version" element={<ApplicationVersion />} />
              <Route path="setting/our-mission" element={<OurMission />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
