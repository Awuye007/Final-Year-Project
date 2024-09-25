import React from "react";
import { MiddleContent } from "../../../components/app/MiddleContent/MiddleContent";
import { RightContent } from "../../../components/app/RightContent/RightContent";
import { getPosts } from "../../../shared/services/post.service";

export const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.posts);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <MiddleContent />
      <RightContent />
    </>
  );
};
