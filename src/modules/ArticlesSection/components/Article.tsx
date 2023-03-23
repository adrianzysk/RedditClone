import React from "react";
import "./Article.scss";
import moreGreyIcon from "@/assets/images/moreGreyIcon.png";
import commentsIcon from "@/assets/images/commentsIcon.png";
import shareIcon from "@/assets/images/shareIcon.png";
import saveIcon from "@/assets/images/saveIcon.png";
import icon from "@/assets/images/voteUpIcon.png";
import blueIcon from "@/assets/images/voteUpBlueIcon.png";

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
          <a href="#">
            <img
              src={icon}
              className="votes-container__icon votes-container__icon--hide-up"
            />
            <img
              src={blueIcon}
              className="votes-container__icon votes-container__icon--show-up "
            />
          </a>
          <p className="votes-container__count">{votes}</p>
          <a href="#">
            <img
              src={icon}
              className="votes-container__icon votes-container__icon--downicon votes-container__icon--hide-down"
            />
            <img
              src={blueIcon}
              className="votes-container__icon votes-container__icon--downicon votes-container__icon--show-down"
            />
          </a>
        </div>
      </div>
      <div className="content-container">
        <div className="content-container__wrapper">
          <div className="content-container__wrapper">
            {avatar && (
              <img
                src={avatar}
                alt="Avatar icon"
                className="content-container__avatar"
              />
            )}
            <p className="content-container__avatarname">{autor}</p>
          </div>
          <div className="content-container__date">{date}</div>
        </div>
        <p className="content-container__text">{text}</p>
        {img && (
          <img
            src={img}
            className="content-container__image"
            alt="Article image"
          />
        )}
        <div>
          <div className="content-container__wrapper">
            <div className="content-container__wrapper content-container--gap">
              <a
                className="content-container__wrapper content-container__anchor"
                href="#"
              >
                <img
                  className="content-container__icons"
                  src={commentsIcon}
                ></img>
                <p className="content-container__text-bottom">
                  {commentsCount} Comments
                </p>
              </a>
              <a
                className="content-container__wrapper content-container__anchor"
                href="#"
              >
                <img className="content-container__icons" src={shareIcon}></img>
                <p className="content-container__text-bottom">Share</p>
              </a>
              <a
                className="content-container__wrapper content-container__anchor"
                href="#"
              >
                <img className="content-container__icons" src={saveIcon}></img>
                <p className="content-container__text-bottom">Save</p>
              </a>
            </div>
            <a className="content-container__anchor" href="#">
              <img className="content-container__icons" src={moreGreyIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
