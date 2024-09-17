import React from "react";
import "./VideoCard.css";

export const VideoCard = ({ handleVideoChange }) => {
  return (
    <div className="video-card h-fit w-full md:w-[30%]">
      <div className="relative">
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="overlay"></div>
      </div>
      <p className="py-2 text-white font-medium truncate">
        Lorem ipsum dolor sit amet
      </p>
      <button
        className="bg-slate-100 rounded-full p-2 text-sm text-darkgrey w-24 hover:bg-slate-200 transition font-medium"
        onClick={handleVideoChange}
      >
        View
      </button>
    </div>
  );
};
