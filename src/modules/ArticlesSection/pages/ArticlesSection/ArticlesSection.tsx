import React from "react";
import "./ArticlesSection.scss";
import { Article } from "../../components/Article";
import articlesData from "@/assets/files/articlesData.json";

export const ArticlesSection: React.FC = () => {
  return (
    <section className="articles-container">
      {articlesData?.map((article, index) => {
        return (
          <Article
            key={index}
            autor={article.autor}
            avatar={article.avatar}
            date={article.date}
            text={article.text}
            img={article.img}
            votes={article.votes}
            commentsCount={article.commentsCount}
          />
        );
      })}
    </section>
  );
};
