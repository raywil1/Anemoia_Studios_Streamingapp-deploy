import React from 'react';
import { Link } from "react-router-dom";
import './Video.css'; 

const Video = ({ video }) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        {/* Assuming video.thumbnail is the path to your video's thumbnail image */}
        <img src={video.thumbnail} alt={video.title} />
        <button className="video-play-button">▶</button>
      </div>
      <div className="video-info">
        <h4 className="video-title">{video.title}</h4>
        <p className="video-description">{video.description}</p>
      </div>
       <div className="video-rating">
        <span className="star-rating">☆☆☆☆☆</span>
      </div>
    </div>
  );
};

export default Video;