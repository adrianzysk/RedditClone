import React from "react";
import "./ArticlesSection.scss";
import { Article } from "../../components/Article";
import { ArticlesData } from "../../../../assets/files/ArticlesData";

export const ArticlesSection: React.FC = () => {
  return (
    <section className="articles-container">
      {ArticlesData?.map((article, index) => {
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
