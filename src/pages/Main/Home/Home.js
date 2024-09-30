import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { MiddleContent } from "../../../components/app/MiddleContent/MiddleContent";
import { RightContent } from "../../../components/app/RightContent/RightContent";
import { db } from "../../../shared/core/firebase";

export const Home = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getDocs(collection(db, "posts"));
        setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        toast.error(`${error.code}: ${error.message}`);
      }
    };
    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <MiddleContent />
      <RightContent />
    </>
  );
};
