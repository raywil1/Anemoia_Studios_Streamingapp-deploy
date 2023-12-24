import React, { useState } from "react";
import "./Header.css";
import anemoia_logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [showPreview, setshowPreview] = useState(true);

  const handleButtonClick = () => {
    setshowPreview(false);
  };

  const homeClick = () => {
    setshowPreview(true);
  };

  return (
    <header
      className={`header ${showPreview ? "full-height" : "shrink-height"}`}
    >
      <div className="centered-container">
        {showPreview && (
          <React.Fragment>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <h3 className="featured-title">This week's Featured Films</h3>
          </React.Fragment>
        )}
        {showPreview && (
          <div className="square-container">
            <button className="left-button">←</button>
            <div className="preview-box"></div>
            <button className="right-button">→</button>
          </div>
        )}
        <div className="header-container">
          <div className="nav">
            <div className={`labels ${showPreview ? "full" : "half"}`}>
              <li>
                <Link to="/profile" onClick={handleButtonClick}>
                  MY PROFILE
                </Link>
              </li>
              <li>
                <Link to="/genre" onClick={handleButtonClick}>
                  GENRE
                </Link>
              </li>
              <div className="name">
                <img
                  src={anemoia_logo}
                  className={`logo full-size`}
                  alt="Anemoia Logo"
                />
              </div>
              <li>
                <Link to="/" onClick={homeClick}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/watchlist" onClick={handleButtonClick}>
                  Watchlist
                </Link>
              </li>
            </div>
            {!showPreview && (
              <li className="search-bar2">
                <input type="text" placeholder="Search..." />
              </li>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
