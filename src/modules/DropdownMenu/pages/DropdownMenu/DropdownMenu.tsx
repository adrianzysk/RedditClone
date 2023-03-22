import React, { useEffect, useState } from "react";
import "./DropdownMenu.scss";
import arrow from "@/assets/images/arrow.png";

interface DropdownMenuProps {
  onShow: (event: React.MouseEvent<HTMLElement>) => void;
  isActive: boolean;
  title: string;
  icon: string;
  subMenu?: string[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  onShow,
  isActive,
  title,
  icon,
  subMenu,
}: DropdownMenuProps) => {
  const [isOn, setIsOn] = useState(-1);

  const style = {
    transform: isActive ? "rotate(180deg)" : "",
    transition: "transform 250ms ease",
  };

  useEffect(() => {
    setIsOn(-1);
  }, [isActive]);

  return (
    <div className="dropdown-content">
      <button className="dropdown-content__button" onClick={onShow}>
        <div className="flex-container">
          <img src={icon} className="dropdown-content__icon" alt="Menu icon" />
          <p className="dropdown-content__text">{title}</p>
        </div>
        <img
          style={style}
          src={arrow}
          className="dropdown-content__arrow"
          alt="Menu icon"
        />
      </button>
      <div>
        {isActive && (
          <ul>
            {subMenu?.map((menuItem, index) => {
              if (isOn === index) {
                return (
                  <a href="#" key={index}>
                    <li className="dropdown-content__item dropdown-content__item--active">
                      {menuItem}
                    </li>
                  </a>
                );
              } else {
                return (
                  <a href="#" key={index} onClick={() => setIsOn(index)}>
                    <li className="dropdown-content__item ">{menuItem}</li>
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
