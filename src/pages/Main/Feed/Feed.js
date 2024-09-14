import React from "react";
import Article from "../../../components/app/Article/Article";
import ArticleGrid from "../../../components/app/Article/ArticleGrid";
import { NoContent } from "../../../components/app/NoContent/NoContent";
import "./Feed.css";

const Feed = () => {
  const [noContent, setNoContent] = React.useState(true);

  return (
    <div className="w-full flex gap-20">
      <div className="w-3/5 overflow-scroll scroll-smooth pb-20 no-scrollbar">
        {!noContent ? (
          <NoContent
            title="No Article Selected"
            description="Click on an article to view it here"
          />
        ) : (
          <Article />
        )}
      </div>
      <div className="w-2/5 overflow-scroll scroll-smooth pb-20 no-scrollbar">
        <h3 className="text-white text-2xl mb-5">Recent Articles</h3>
        <div className="flex flex-col gap-5">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ArticleGrid key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
