import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./PostMenu.scss";
import flame from "@/assets/images/flame.png";
import flameBlue from "@/assets/images/flameBlue.png";
import arrowGrayIcon from "@/assets/images/arrowGrayIcon.png";
import arrowIconBlue from "@/assets/images/arrowIconBlue.png";
import moreGreyIcon from "@/assets/images/moreGreyIcon.png";
import topIcon from "@/assets/images/topIcon.png";
import newIcon from "@/assets/images/newIcon.png";
import blueNewIcon from "@/assets/images/blueNewIcon.png";

export const PostMenu: React.FC = () => {
  const [country, setCountry] = useState("Poland");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetCountry = (country: string) => {
    setCountry(country);
    setIsOpen(false);
  };

  function clickOutside(ref: MutableRefObject<HTMLElement | null>) {
    useEffect(() => {
      function handleClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
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
    <div className="post-menu-container">
      <section className="post-menu post-menu-mobile">
        <h1 className="post-menu__heading">Popular</h1>
        <div className="post-menu__flex-container margin-t-24">
          <div className="post-menu__flex-container">
            <img className="post-menu__icon-big" src={flame} alt="popular" />
            <h2 className="post-menu__heading-small">Popular</h2>
            <a>
              <img
                className="post-menu__icon-small"
                src={arrowGrayIcon}
                alt="arrow"
              />
            </a>
          </div>
          <div>
            <img
              className="post-menu__icon-big"
              src={moreGreyIcon}
              alt="more"
            />
            <a>
              <img
                className="post-menu__icon-small margin-l-6"
                src={arrowGrayIcon}
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="post-menu post-menu-desktop">
        <div className="post-menu__flex-container">
          <div className="post-menu__flex-container post-menu__flex-container--gap">
            <a className="post-menu__flex-container post-menu-desktop__item">
              <img
                className="post-menu__icon-big"
                src={flameBlue}
                alt="popular"
              />
              <h2 className="post-menu__heading-small post-menu__heading-small--blue">
                Popular
              </h2>
            </a>
            <div className="dropdown-country-menu__menu-container">
              <a
                href="javascript:;"
                onClick={() => setIsOpen(!isOpen)}
                className="post-menu__flex-container post-menu-desktop__item"
              >
                <h2 className="post-menu__heading-small post-menu__heading-small--blue">
                  {country}
                </h2>
                <img
                  className="post-menu__icon-big"
                  src={arrowIconBlue}
                  alt="popular"
                />
              </a>
              {isOpen && (
                <div ref={wrapperRef} className="dropdown-country-menu">
                  <div className="dropdown-country-menu__menu-container dropdown-country-menu__menu-container--margin">
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Everywhere")}
                    >
                      Everywhere
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("UnitedSates")}
                    >
                      United States
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Argentina")}
                    >
                      Argentina
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Australia")}
                    >
                      Australia
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Bulgaria")}
                    >
                      Bulgaria
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Canada")}
                    >
                      Canada
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Chile")}
                    >
                      Chile
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Poland")}
                    >
                      Poland
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Everywhere")}
                    >
                      Everywhere
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("UnitedSates")}
                    >
                      United States
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Argentina")}
                    >
                      Argentina
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Australia")}
                    >
                      Australia
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Bulgaria")}
                    >
                      Bulgaria
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Canada")}
                    >
                      Canada
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Chile")}
                    >
                      Chile
                    </a>
                    <a
                      className="dropdown-country-menu__item"
                      onClick={() => handleSetCountry("Poland")}
                    >
                      Poland
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a className="post-menu__flex-container blue-hover">
              <img
                src={newIcon}
                className="blue-hover__icon blue-hover__icon--hide"
              />
              <img
                src={blueNewIcon}
                className="blue-hover__icon blue-hover__icon--show"
              />
              <h2 className="post-menu__heading-small">New</h2>
            </a>
            <a className="post-menu__flex-container blue-hover">
              <img className="post-menu__icon-big" src={topIcon} alt="top" />
              <h2 className="post-menu__heading-small">Top</h2>
            </a>
          </div>
          <a className="post-menu__anchor">
            <img
              className="post-menu__icon-big"
              src={moreGreyIcon}
              alt="more"
            />
          </a>
        </div>
      </section>
    </div>
  );
};
