import React from "react";
import "./HomePage.scss";

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {
  return (
    <div className="topic-list-container">
      <div>{msg}</div>
    </div>
  );
};
