import React, { useState } from "react";
import "./MainGlobalComponent.scss";
import flame from "@/assets/images/flame.png";
import getAppIcon from "@/assets/images/getAppIcon.png";
import { MenuIconDropdownComponent } from "@/global-components";
import menuData from "@/assets/files/menuData.json";

export const MainGlobalComponent: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState(-2);

  const handleActiveIcon = (index: number) => {
    if (activeIcon === index) {
      setActiveIcon(-2);
    } else {
      setActiveIcon(index);
    }
  };
  return (
    <div className="main-container">
      <nav className="dropdown-menu-container dropdown-menu-container-desktop">
        <ul>
          <h3 className="menu-heading">FEEDS</h3>
          <a href="#">
            <li className="margin-bottom-50">
              <div className="flex-container">
                <img src={flame} className="menu-icon" alt="Popular icon" />
                <p className="menu-text">Popular</p>
              </div>
            </li>
          </a>
          <h3 className="menu-heading">TOPICS</h3>
          {menuData.map((subMenu, index) => {
            return (
              <MenuIconDropdownComponent
                key={index}
                isActive={activeIcon === index}
                onShow={() => handleActiveIcon(index)}
                title={subMenu.title}
                icon={subMenu.icon}
                subMenu={subMenu.subMenu}
              />
            );
          })}
        </ul>
        <ul className="dropdown-menu-container-settings-box">
          <MenuIconDropdownComponent
            isActive={activeIcon === -1}
            onShow={() => handleActiveIcon(-1)}
            title={"Settings"}
            icon={"src/assets/images/settingIcon.png"}
            subMenu={["Profile", "Date"]}
          />
          <a href="#">
            <li className="margin-bottom-50">
              <div className="flex-container">
                <img
                  src={getAppIcon}
                  className="menu-icon"
                  alt="Popular icon"
                />
                <p className="menu-text">Get app</p>
              </div>
            </li>
          </a>
        </ul>
      </nav>
      <div className="main-content-container">
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
        <div>
          <div>
            <img src={flame} className="logo" alt="Flame Icon" />
            <h2>Popular</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
