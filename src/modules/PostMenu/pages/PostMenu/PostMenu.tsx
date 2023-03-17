import React, { useState } from "react";
import "./PostMenu.scss";
import flame from "@/assets/images/flame.png";
import flameBlue from "@/assets/images/flameBlue.png";
import arrowGrayIcon from "@/assets/images/arrowGrayIcon.png";
import arrowIconBlue from "@/assets/images/arrowIconBlue.png";
import moreGreyIcon from "@/assets/images/moreGreyIcon.png";
import topIcon from "@/assets/images/topIcon.png";

export const PostMenu: React.FC = () => {
  const [country, setCountry] = useState("Poland");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetCountry = (country: string) => {
    setCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="post-menu-container">
      <section className="post-menu post-menu-mobile">
        <h1 className="post-menu-heading">Popular</h1>
        <div className="post-menu-flex-container margin-t-24">
          <div className="post-menu-flex-container">
            <img className="post-menu-icon-big" src={flame} alt="popular" />
            <h2 className="post-menu-heading-small">Popular</h2>
            <a>
              <img
                className="post-menu-icon-small"
                src={arrowGrayIcon}
                alt="arrow"
              />
            </a>
          </div>
          <div>
            <img className="post-menu-icon-big" src={moreGreyIcon} alt="more" />
            <a>
              <img
                className="post-menu-icon-small margin-l-6"
                src={arrowGrayIcon}
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="post-menu post-menu-desktop">
        <div className="post-menu-flex-container">
          <div className="post-menu-flex-container post-menu-flex-container-gap">
            <a className="post-menu-flex-container post-menu-desktop-item">
              <img
                className="post-menu-icon-big"
                src={flameBlue}
                alt="popular"
              />
              <h2 className="post-menu-heading-small heading-blue">Popular</h2>
            </a>
            <div className="dropdown-country-menu-container">
              <a
                href="javascript:;"
                onClick={() => setIsOpen(!isOpen)}
                className="post-menu-flex-container post-menu-desktop-item"
              >
                <h2 className="post-menu-heading-small heading-blue">
                  {country}
                </h2>
                <img
                  className="post-menu-icon-big"
                  src={arrowIconBlue}
                  alt="popular"
                />
              </a>
              {isOpen && (
                <div className="dropdown-country-menu">
                  <div className="dropdown-country-menu-container m-20">
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Everywhere")}
                    >
                      Everywhere
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("UnitedSates")}
                    >
                      United States
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Argentina")}
                    >
                      Argentina
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Australia")}
                    >
                      Australia
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Bulgaria")}
                    >
                      Bulgaria
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Canada")}
                    >
                      Canada
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Chile")}
                    >
                      Chile
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Poland")}
                    >
                      Poland
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Everywhere")}
                    >
                      Everywhere
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("UnitedSates")}
                    >
                      United States
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Argentina")}
                    >
                      Argentina
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Australia")}
                    >
                      Australia
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Bulgaria")}
                    >
                      Bulgaria
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Canada")}
                    >
                      Canada
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Chile")}
                    >
                      Chile
                    </a>
                    <a
                      className="dropdown-country-menu-item"
                      onClick={() => handleSetCountry("Poland")}
                    >
                      Poland
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a className="post-menu-flex-container margin-l-8 blue-hover">
              <div className="hover-icon" />
              <h2 className="post-menu-heading-small">New</h2>
            </a>
            <a className="post-menu-flex-container margin-l-8 blue-hover">
              <img className="post-menu-icon-big" src={topIcon} alt="top" />
              <h2 className="post-menu-heading-small">Top</h2>
            </a>
          </div>
          <a className="anchor-margin">
            <img className="post-menu-icon-big" src={moreGreyIcon} alt="more" />
          </a>
        </div>
      </section>
    </div>
  );
};
