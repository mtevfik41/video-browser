import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url}
             alt={video.snippet.title.replace('&#39;', '\'')}/>
        <div className="content">
          <div className="header">
            {video.snippet.title.replace('&#39;', '\'')}
          </div>
        </div>
      </div>
  );
};

export default VideoItem;