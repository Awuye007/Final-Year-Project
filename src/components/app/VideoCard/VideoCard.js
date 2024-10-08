import React from "react";
import VideoThumbnail from "react-video-thumbnail";
import "./VideoCard.css";

export const VideoCard = ({ handleVideoChange, video }) => {
  return (
    <div className="video-card h-fit w-full md:w-[30%]">
      <div className="relative">
        <VideoThumbnail
          videoUrl={video.video}
          thumbnailHandler={(thumbnail) => console.log(thumbnail)}
        />
        <div className="overlay"></div>
      </div>
      <p className="py-2 text-white font-medium truncate">{video.title}</p>
      <button
        className="bg-slate-100 rounded-full p-2 text-sm text-darkgrey w-24 hover:bg-slate-200 transition font-medium"
        onClick={() => handleVideoChange(video.video)}
      >
        View
      </button>
    </div>
  );
};
