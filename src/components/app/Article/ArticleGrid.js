import React from "react";

const ArticleGrid = ({ onClick }) => {
  return (
    <button className="flex gap-5 mb-5 text-left" onClick={onClick}>
      <img
        src="https://picsum.photos/200/300"
        alt="article"
        className="w-60 h-40 object-cover"
      />
      <div className="flex flex-col gap-3">
        <p className="text-red-500 text-xs uppercase">Trending in Indonesia</p>
        <h1 className="text-white font-medium">
          Nulla auctor ipsum sit amet diam cursus ullamcorper
        </h1>
        <p className="text-slate-400 uppercase text-xs">by Jeffery Awuye</p>
      </div>
    </button>
  );
};

export default ArticleGrid;
