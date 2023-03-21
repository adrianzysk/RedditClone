import React, { useState, useEffect } from "react";
import "./AsideMenuDropdownElement.scss";
import arrow from "@/assets/images/arrow.png";

interface AsideMenuDropdownElementProps {
  onShow: (event: React.MouseEvent<HTMLElement>) => void;
  isActive: boolean;
  title: string;
  subMenu?: string[];
}

export const AsideMenuDropdownElement: React.FC<
  AsideMenuDropdownElementProps
> = ({ onShow, isActive, title, subMenu }: AsideMenuDropdownElementProps) => {
  const [isOn, setIsOn] = useState(-1);

  const style = {
    transform: isActive ? "rotate(180deg)" : "",
    transition: "transform 250ms ease",
  };

  useEffect(() => {
    setIsOn(-1);
  }, [isActive]);
  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={onShow}>
        <p className="dropdown__text">{title}</p>
        <img
          style={style}
          src={arrow}
          className="dropdown__arrow"
          alt="Dropdown arrow"
        />
      </button>
      <div>
        {isActive && (
          <div className="dropdown__submenu">
            {subMenu?.map((menuItem, index) => {
              if (isOn === index) {
                return (
                  <a
                    href="#"
                    key={index}
                    className="dropdown__item dropdown__item--active"
                  >
                    {menuItem}
                  </a>
                );
              } else {
                return (
                  <a
                    href="#"
                    key={index}
                    onClick={() => setIsOn(index)}
                    className="dropdown__item"
                  >
                    {menuItem}
                  </a>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};
