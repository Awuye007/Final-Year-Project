import React from "react";
import { VideoCard } from "../../../components/app/VideoCard/VideoCard";
import './Videos.css'

const Videos = () => {
  return (
    <div className="flex flex-row gap-4 flex-wrap overflow-auto pb-28 scroll-dark">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default Videos;
