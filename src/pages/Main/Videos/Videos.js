import React from "react";
import { VideoCard } from "../../../components/app/VideoCard/VideoCard";
import VideoDisplay from "../../../components/app/VideoDisplay/VideoDisplay";
import "./Videos.css";

const Videos = () => {
  const [videoUrl, setVideoUrl] = React.useState(
    "https://ik.imagekit.io/ikmedia/example_video.mp4"
  );

  const [open, setOpen] = React.useState(false);

  const handleVideoChange = (url) => {
    // setVideoUrl(url);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-row gap-4 flex-wrap overflow-auto pb-28 scroll-dark">
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
        <VideoCard handleVideoChange={handleVideoChange} />
      </div>
      <VideoDisplay open={open} setOpen={setOpen} videoUrl={videoUrl} />
    </>
  );
};

export default Videos;
