import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data.json";

function ArticleListing() {
  console.log(Data);
  const articleName = "Articles";
  return (
    <div className="PageWrapper">
      <h1 className="HeaderOneStyle ArticleListingHeader">{articleName}</h1>
      {Data.map((article, key) => (
        <ArticleCard article={article} key={key}/>
      ))}
    </div>
  );
}

export default ArticleListing;
