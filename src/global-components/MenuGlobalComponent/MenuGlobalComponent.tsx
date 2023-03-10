import React from "react";
import "./MenuGlobalComponent.scss";
import flame from "@/assets/images/flame.png";

export const MenuGlobalComponent: React.FC = () => {
  return (
    <div>
      <h1>Popular</h1>
      <div>
        <div>
          <img src={flame} className="logo" alt="Flame Icon" />
          <h2>Popular</h2>
        </div>
      </div>
    </div>
  );
};
