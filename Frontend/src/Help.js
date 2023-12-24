import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillShopping,
  AiOutlineFullscreen,
  AiOutlineIssuesClose,
} from "react-icons/ai";
import "./Help.css";

function Help() {
  const [showPreview, setShowPreview] = useState(true);

  const SidebarData = [
    {
      title: "Billing & Subscriptions",
      icon: <AiFillShopping />,
    },
    {
      title: "Screenplay Issues",
      icon: <AiOutlineFullscreen />,
    },
    {
      title: "Other Issues",
      icon: <AiOutlineIssuesClose />,
    },
  ];

  return (
    <div className="help-container">
      <h1 className="help-header">
        You’ve come to the right place. How can we assist you?{" "}
      </h1>

      {showPreview && (
        <React.Fragment>
          <div className="search-bar">
            <input type="text" placeholder="How can we assist you?" />
          </div>

          <div className="categories-container">
            {SidebarData.map((category, index) => (
              <div className="category" key={index}>
                <h2>
                  {category.icon} {category.title}
                </h2>
                <Link to={`/${category.title.toLowerCase()}/link1`}>
                  How To Cancel A Subscription
                </Link>
                <Link to={`/${category.title.toLowerCase()}/link2`}>
                  Request A Refund
                </Link>
                <Link to={`/${category.title.toLowerCase()}/link3`}>
                  Payment Declined
                </Link>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Help;
