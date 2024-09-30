import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUserContext } from "../../../shared/context/UserContext";
import { db } from "../../../shared/core/firebase";
import { NoContent } from "../NoContent/NoContent";
import Post from "../Post/Post";
import "./MiddleContent.css";

export const MiddleContent = () => {
  const [post, setPost] = useState("");

  const { user } = useUserContext();

  const [posts, setPosts] = useState([]);

  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await addDoc(collection(db, "posts"), {
        content: post,
        image: "",
        createdAt: new Date(),
        userId: user.id,
        likes: [],
        comments: [],
      });

      if (res) {
        setPost("");
        await getPosts();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(`${error.code}: ${error.message}`);
    }
  };

  const getPosts = async () => {
    try {
      const res = await getDocs(collection(db, "posts"));
      const posts = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const users = await getDocs(collection(db, "users"));
      const usersMap = users.docs.reduce((map, doc) => {
        map[doc.id] = doc.data();
        return map;
      }, {});

      const data = posts.map((post) => {
        const user = usersMap[post.userId];

        return {
          ...post,
          user,
          comments: post.comments.map((comment) => ({
            ...comment,
            user: usersMap[comment.userId],
          })),
        };
      });

      setPosts(data);
    } catch (error) {
      console.log(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  };

  const handleLike = async (e, id) => {
    try {
      e.preventDefault();
      const post = posts.find((post) => post.id === id);

      if (post.likes.includes(user.id)) {
        post.likes = post.likes.filter((like) => like !== user.id);
      } else {
        post.likes.push(user.id);
      }

      setPosts(posts.map((post) => (post.id === id ? post : post)));

      await updateDoc(doc(db, "posts", id), {
        likes: post.likes,
      });
    } catch (error) {
      console.log(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  };

  const handleCommentSubmit = async (e, id) => {
    try {
      e.preventDefault();
      const post = posts.find((post) => post.id === id);
      post.comments.push({
        userId: user.id,
        comment,
        time: new Date(),
      });

      setPosts(posts.map((post) => (post.id === id ? post : post)));

      await updateDoc(doc(db, "posts", id), {
        comments: post.comments,
      });
      setComment("");
    } catch (error) {
      console.log(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  };

  return (
    <div className="flex-1 flex-grow text-white overflow-y-auto pb-20 scroll-bg-darkgrey pe-2">
      <div className="bg-grey flex justify-around gap-5 p-7 rounded-2xl mb-5  message-sender">
        <img
          src="https://picsum.photos/200/300"
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-1 gap-5 ">
          <input
            value={post}
            onChange={(e) => setPost(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                await handleSubmit();
              }
            }}
            className="bg-darkgrey text-white placeholder:text-slate-400 w-full outline-none text-sm rounded-xl p-2 h-12 px-4 flex-1"
            placeholder="What's happening?"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out text-white w-12 h-12 rounded-xl flex items-center justify-center"
          >
            {loading ? (
              <i className="fas fa-spinner animate-spin"></i>
            ) : (
              <i className="fas fa-paper-plane"></i>
            )}
          </button>
        </div>
      </div>
      {posts.map((post, i) => (
        <Post
          key={i}
          {...post}
          comment={comment}
          setComment={setComment}
          handleLike={handleLike}
          handleCommentSubmit={handleCommentSubmit}
        />
      ))}
      {posts?.length === 0 && <NoContent  title="No Posts Found"/>}
    </div>
  );
};
