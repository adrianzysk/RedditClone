import React, { useState, useEffect, useRef } from "react";
import "./NavBarGlobalComponent.scss";
import Hamburger from "hamburger-react";
import flameBlack from "@/assets/images/flameBlack.png";
import { DropdownMenu } from "@modules";
import menuData from "@/assets/files/menuData.json";

export const NavBarGlobalComponent: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(-1);

  const handleEvent = () => {
    if (isOpen) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  });

  const handleActiveIcon = (index: number) => {
    if (activeIcon === index) {
      setActiveIcon(-1);
    } else {
      setActiveIcon(index);
    }
  };

  function clickOutside(ref: React.MutableRefObject<HTMLElement | null>) {
    useEffect(() => {
      function handleClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  clickOutside(wrapperRef);
  return (
    <header ref={wrapperRef} className="navBar">
      <div className="navBar__container">
        <div className="not-display-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} size={19} />
        </div>
        <a className="margin-left-desktop" href="#">
          reddit
        </a>
        {isOpen && (
          <nav className="dropdown-container">
            <div>
              <h3 className="dropdown-container__heading">FEEDS</h3>
              <a
                className="dropdown-container__popular flex-container"
                href="#"
              >
                <img
                  src={flameBlack}
                  className="dropdown-container__icon"
                  alt="Popular icon"
                />
                <p className="dropdown-container__text">Popular</p>
              </a>
              <h3 className="dropdown-container__heading">TOPICS</h3>
              {menuData.map((subMenu, index) => {
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
          </nav>
        )}
      </div>
      <div className="input-container">
        <input type="text" name="search" placeholder="Search"></input>
      </div>
      <div className="navBar__buttons-container">
        <a
          href="#"
          className="navBar__buttons-container__button navBar__buttons-container__button--log"
        >
          <p>Log in</p>
        </a>
        <a
          href="#"
          className="navBar__buttons-container__button navBar__buttons-container__button--register"
        >
          <p>Register</p>
        </a>
      </div>
    </header>
  );
};
