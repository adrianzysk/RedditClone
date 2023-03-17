import React from "react";
import "./Article.scss";
import moreGreyIcon from "@/assets/images/moreGreyIcon.png";
import commentsIcon from "@/assets/images/commentsIcon.png";
import shareIcon from "@/assets/images/shareIcon.png";
import saveIcon from "@/assets/images/saveIcon.png";

interface ArticleProps {
  autor: string;
  avatar?: string;
  date: string;
  text: string;
  img?: string;
  votes: string;
  commentsCount: string;
}

export const Article: React.FC<ArticleProps> = ({
  autor,
  avatar,
  date,
  text,
  img,
  votes,
  commentsCount,
}) => {
  return (
    <div className="article-container">
      <div className="votes-container">
        <div>
          <a href="#" className="votes-container-icon votes-container-upicon" />
          <p className="votes-container-count">{votes}</p>
          <a
            href="#"
            className="votes-container-icon votes-container-downicon"
          />
        </div>
      </div>
      <div className="content-container">
        <div className="content-container-wrapper">
          <div className="content-container-wrapper">
            {avatar && (
              <img
                src={avatar}
                alt="Avatar icon"
                className="content-container-avatar"
              />
            )}
            <p className="content-container-avatarname">{autor}</p>
          </div>
          <div className="content-container-date">{date}</div>
        </div>
        <p className="content-container-text">{text}</p>
        {img && (
          <img
            src={img}
            className="content-container-image"
            alt="Article image"
          />
        )}
        <div>
          <div className="content-container-wrapper">
            <div className="content-container-wrapper gap">
              <a className="content-container-wrapper" href="#">
                <img
                  className="content-container-icons"
                  src={commentsIcon}
                ></img>
                <p className="menu-text">{commentsCount} Comments</p>
              </a>
              <a className="content-container-wrapper" href="#">
                <img className="content-container-icons" src={shareIcon}></img>
                <p className="menu-text">Share</p>
              </a>
              <a className="content-container-wrapper" href="#">
                <img className="content-container-icons" src={saveIcon}></img>
                <p className="menu-text">Save</p>
              </a>
            </div>
            <a href="#">
              <img className="content-container-icons" src={moreGreyIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
