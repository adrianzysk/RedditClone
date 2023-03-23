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
    <a className="image__anchor" href="#">
      <div className="image-gradient">
        <img src={image} className="image" alt="article image" />
      </div>
      <div className="autor">
        <img src={icon} className="autor__avatar" alt="Avatar" />
        <p className="autor__name">{autor}</p>
      </div>
      <div className="description">
        <h3 className="description__title">{title}</h3>
        <p className="description__text">{description}</p>
      </div>
    </a>
  );
};
