import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({
  id,
  user,
  userId,
  createdAt,
  content,
  likes,
  comments,
  handleLike,
  comment,
  setComment,
  handleCommentSubmit,
}) => {
  const [show, setShow] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  return (
    <div className="bg-grey p-4 rounded-2xl mb-5">
      <div className="flex justify-around gap-5 ">
        <div className="flex flex-col flex-1 gap-5">
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3">
              <img
                src="https://picsum.photos/200/300"
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <Link to={"/profile"}>
                  <div className="flex gap-2 items-center">
                    <h1 className="text-white font-medium">{user?.username}</h1>
                    {/* <i class="bi bi-patch-check-fill text-blue-600 text-xl"></i> */}
                    {/* <h3 className="text-slate-400 text-sm">@elonmusk</h3> */}
                  </div>
                </Link>
                <small className="text-slate-400">
                  {moment(createdAt?.seconds * 1000).fromNow()}
                </small>
              </div>
            </div>
            <a className="text-slate-400 text-xl" href="/">
              <i className="bi bi-three-dots"></i>
            </a>
          </div>
          <p className="md:ms-14 text-slate-300 text-sm pe-4 line-clamp-3">
            {content}
          </p>
          <div className="md:ms-14 flex gap-3 items-center justify-between mb-4">
            <div className="flex gap-1 items-center">
              <span className="bg-red-500 transition w-6 h-6 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-heart text-white text-sm"></i>
              </span>
              <span className="text-slate-400 text-sm">
                {likes?.length} {likes?.length === 1 ? "Like" : "Likes"}
              </span>
            </div>
            <a
              className="text-slate-500 text-sm ms-2 hover:underline transition"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
              }}
            >
              {comments?.length} Comment{comments?.length === 1 ? "" : "s"}
            </a>
          </div>
          <div className="md:ms-14 flex items-center gap-3">
            <button
              className="bg-darkgrey p-3 px-4 w-full rounded-2xl flex items-center gap-3 hover:opacity-70 transition justify-center text-sm"
              onClick={async (e) => await handleLike(e, id)}
            >
              {!likes?.includes(userId) ? (
                <>
                  {" "}
                  <i className="fa-solid fa-heart text-red-500 text-xl"></i>{" "}
                  Like{" "}
                </>
              ) : (
                <>
                  <i className="fa-solid fa-heart-broken text-white text-xl"></i>{" "}
                  Unlike
                </>
              )}
            </button>
            <button
              className="bg-darkgrey p-3 px-4 w-full rounded-2xl flex items-center gap-3 hover:opacity-70 transition justify-center text-sm"
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
              }}
            >
              <i className="fa-solid fa-comment-dots text-blue-500 text-xl"></i>
              Comment
            </button>
          </div>
        </div>
      </div>
      {/* Comment section */}
      {show && (
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="profile"
              className="w-6 h-6 rounded-full aspect-square"
            />
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-darkgrey text-white placeholder:text-slate-400 w-full outline-none text-sm rounded-xl p-2 h-12 px-4"
              placeholder="Add a comment..."
            />
            <button
              onClick={async (e) => {
                setLoading(true);
                await handleCommentSubmit(e, id);
                setLoading(false);
              }}
              className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out text-white w-12 h-12 rounded-xl flex items-center justify-center"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </div>
          {/* Comments */}
          {comments.map((comment, index) => (
            <div key={index} className="mt-5">
              <div className="flex gap-2">
                <img
                  src="https://picsum.photos/200/300"
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col justify-between w-full gap-2 bg-darkgrey p-5 rounded-2xl rounded-tl-none">
                  <div className="flex gap-3 justify-between items-center">
                    <h3 className="text-slate-400 mb-1">
                      {comment?.user?.username}
                    </h3>
                    <small className="text-slate-400 text-sm whitespace-nowrap">
                      {comment?.time !== undefined ? (
                        comment?.time?.toDate().toDateString()
                      ) : (
                        <></>
                      )}
                    </small>
                  </div>
                  <p className="text-slate-300 text-sm">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
