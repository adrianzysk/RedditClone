import React, { useEffect, useState } from "react";
import "./MenuIconDropdownComponent.scss";
import arrow from "@/assets/images/arrow.png";

interface MenuIconProps {
  onShow: (event: any) => void;
  isActive: boolean;
  title: string;
  icon: string;
  subMenu?: string[];
}

export const MenuIconDropdownComponent: React.FC<MenuIconProps> = ({
  onShow,
  isActive,
  title,
  icon,
  subMenu,
}: MenuIconProps) => {
  const [isOn, setIsOn] = useState(-1);

  const style = {
    transform: isActive ? "rotate(180deg)" : "",
    transition: "transform 250ms ease",
  };

  useEffect(() => {
    setIsOn(-1);
  }, [isActive]);

  return (
    <div className="padding-0">
      <li onClick={onShow}>
        <div className="flex-container">
          <img src={icon} className="menu-icon" alt="Menu icon" />
          <p className="menu-text">{title}</p>
        </div>
        <img style={style} src={arrow} className="arrow" alt="Menu icon" />
      </li>
      <div>
        {isActive && (
          <ul>
            {subMenu?.map((menuItem, index) => {
              if (isOn === index) {
                return (
                  <a href="#" key={index}>
                    <li className="menu-item active-link">{menuItem}</li>
                  </a>
                );
              } else {
                return (
                  <a href="#" key={index} onClick={() => setIsOn(index)}>
                    <li className="menu-item ">{menuItem}</li>
                  </a>
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
