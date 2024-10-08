import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { NoContent } from "../../../components/app/NoContent/NoContent";
import { VideoCard } from "../../../components/app/VideoCard/VideoCard";
import VideoDisplay from "../../../components/app/VideoDisplay/VideoDisplay";
import { db } from "../../../shared/core/firebase";
import "./Videos.css";

const Videos = () => {
  const [videoUrl, setVideoUrl] = React.useState(
    "https://ik.imagekit.io/ikmedia/example_video.mp4"
  );

  const [open, setOpen] = React.useState(false);

  const [videos, setVideos] = React.useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const handleVideoChange = (url) => {
    setVideoUrl(url);
    setOpen(true);
  };

  const getVideos = async () => {
    try {
      const resp = await getDocs(collection(db, "videos"));

      if (!resp) return;

      const data = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setVideos(data);
    } catch (error) {
      console.log(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  };

  return (
    <>
      <div className="flex flex-row gap-4 flex-wrap overflow-auto pb-28 scroll-dark w-screen">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            handleVideoChange={handleVideoChange}
          />
        ))}
        {videos?.length === 0 && (
          <div className="w-full flex justify-center h-screen">
            <NoContent
              title="No Videos Found"
              description="No videos found in the database"
            />
          </div>
        )}
      </div>
      <VideoDisplay open={open} setOpen={setOpen} videoUrl={videoUrl} />
    </>
  );
};

export default Videos;
