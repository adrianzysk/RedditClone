import React from "react";
import "./ImageArticle.scss";

interface ImageArticleProps {
  image: string;
  autor: string;
  icon: string;
  title: string;
  description: string;
}

export const ImageArticle: React.FC<ImageArticleProps> = ({
  image,
  autor,
  icon,
  title,
  description,
}) => {
  return (
    <a>
      <div className="image-gradient">
        <img src={image} className="image" alt="article image" />
      </div>
      <div className="autor-position">
        <img src={icon} className="avatar" alt="Avatar" />
        <p className="autor-name">{autor}</p>
      </div>
      <div className="description-position">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};
