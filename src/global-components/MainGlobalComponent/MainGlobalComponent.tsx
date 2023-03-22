import React, { useState } from "react";
import "./MainGlobalComponent.scss";
import flameBlack from "@/assets/images/flameBlack.png";
import getAppIcon from "@/assets/images/getAppIcon.png";
import menuData from "@/assets/files/menuData.json";
import {
  ImagesSection,
  PostMenu,
  ArticlesSection,
  AsideMenu,
  DropdownMenu,
} from "@modules";

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
      <nav className="dropdown-desktop">
        <div>
          <h3 className="dropdown-desktop__heading">FEEDS</h3>
          <a href="#" className="dropdown-desktop__anchor">
            <img
              src={flameBlack}
              className="dropdown-desktop__icon"
              alt="Popular icon"
            />
            <p className="dropdown-desktop__text">Popular</p>
          </a>
          <h3 className="dropdown-desktop__heading">TOPICS</h3>
          {menuData?.map((subMenu, index) => {
            return (
              <DropdownMenu
                key={index}
                isActive={activeIcon === index}
                onShow={() => handleActiveIcon(index)}
                title={subMenu.title}
                icon={subMenu.icon}
                subMenu={subMenu.subMenu}
              />
            );
          })}
        </div>
        <div className="dropdown-desktop__settings">
          <DropdownMenu
            isActive={activeIcon === -1}
            onShow={() => handleActiveIcon(-1)}
            title={"Settings"}
            icon={"src/assets/images/settingIcon.png"}
            subMenu={["Profile", "Date"]}
          />
          <a href="#" className="dropdown-desktop__anchor">
            <img
              src={getAppIcon}
              className="dropdown-desktop__icon dropdown-desktop__icon--height"
              alt="Popular icon"
            />
            <p className="dropdown-desktop__text">Get app</p>
          </a>
        </div>
      </nav>
      <main className="main-content">
        <div className="main-content__wrapper">
          <div className="main-content__wrapped">
            <ImagesSection />
            <h1 className="main-content__heading">Popular Post</h1>
            <div className="main-content__articles-wrapper">
              <div>
                <PostMenu />
                <ArticlesSection />
              </div>
              <div className="main-content__aside-menu">
                <AsideMenu />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
