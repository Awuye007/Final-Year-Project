import React from "react";
import "./VideoCard.css";

export const VideoCard = () => {
  return (
    <div className="video-card h-fit">
      <div className="relative">
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="overlay"></div>
      </div>
      <p className="py-2 text-white font-medium truncate">
        Lorem ipsum dolor sit amet
      </p>
      <div className="flex gap-4 justify-between">
        <button className="bg-slate-100 rounded-full p-2 text-sm text-darkgrey w-24 hover:bg-slate-200 transition font-medium">
          View
        </button>
        {/* <div className="flex gap-2">
          <a
            href="/"
            className="border-slate-100 border w-10 h-10 flex items-center justify-center rounded-full"
          >
            <i class="bi bi-heart-fill text-sm"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};
