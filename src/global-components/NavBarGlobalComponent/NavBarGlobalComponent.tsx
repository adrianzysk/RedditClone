import React, { useState } from "react";
import "./NavBarGlobalComponent.scss";
import Hamburger from "hamburger-react";
import flameBlack from "@/assets/images/flameBlack.png";
import { MenuIconDropdownComponent } from "@/global-components";
import menuData from "@/assets/files/menuData.json";

export const NavBarGlobalComponent: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(-1);

  const handleActiveIcon = (index: number) => {
    if (activeIcon === index) {
      setActiveIcon(-1);
    } else {
      setActiveIcon(index);
    }
  };

  return (
    <header className="navBar-main-container">
      <div className="navBar-menu-container">
        <div className="not-display-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} size={19} />
        </div>
        <a className="margin-left-desktop" href="#">
          reddit
        </a>
        {isOpen && (
          <nav className="dropdown-menu-container">
            <ul>
              <h3 className="menu-heading">FEEDS</h3>
              <li className="margin-bottom-50">
                <div className="flex-container">
                  <img
                    src={flameBlack}
                    className="menu-icon"
                    alt="Popular icon"
                  />
                  <p className="menu-text">Popular</p>
                </div>
              </li>
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
          </nav>
        )}
      </div>
      <div className="input-container">
        <input type="text" name="search" placeholder="Search"></input>
      </div>
      <div className="navBar-buttons-container">
        <a href="#" className="buttons log-button">
          <p>Log in</p>
        </a>
        <a href="#" className="buttons register-button">
          <p>Register</p>
        </a>
      </div>
    </header>
  );
};
