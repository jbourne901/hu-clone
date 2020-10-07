import React from 'react';
import './header.css';
import Home from "@material-ui/icons/Home";
import FlashOn from "@material-ui/icons/FlashOn";
import LiveTv from "@material-ui/icons/LiveTv";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import Search from "@material-ui/icons/Search";
import PersonOutline from "@material-ui/icons/PersonOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icons">
        <div className="header-icon header-icon-active">
          <Home />
          <p className="header-label">
            Home
          </p>
        </div>
        
        <div className="header-icon">
          <FlashOn />
          <p className="header-label">
            Trending
          </p>
        </div>

        <div className="header-icon">
          <LiveTv />
          <p className="header-label">
            Verified
          </p>
        </div>

        <div className="header-icon">
          <VideoLibrary />
          <p className="header-label">
            Collections
          </p>
        </div>
                
        <div className="header-icon">
          <Search />
          <p className="header-label">
            Search
          </p>
        </div>
        
        <div className="header-icon">
          <PersonOutline />
          <p className="header-label">
            Account
          </p>
        </div>
        
      </div>
      <img  src="http://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" 
            alt=""
            className="header-img"
      />
    </div>
  );
}

export default Header;

