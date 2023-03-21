import React, { useState } from "react";
import "./AsideMenu.scss";
import asideMenuData from "@/assets/files/asideMenuData.json";
import { AsideMenuDropdownElement } from "../../components/AsideMenuDropdownElement";

export const AsideMenu: React.FC = () => {
  const [active, setActive] = useState(-1);

  const handleActiveIcon = (index: number) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };
  return (
    <aside className="aside-container">
      <nav>
        {asideMenuData.map((subMenu, index) => {
          return (
            <AsideMenuDropdownElement
              key={index}
              isActive={active === index}
              onShow={() => handleActiveIcon(index)}
              title={subMenu.title}
              subMenu={subMenu.subMenu}
            />
          );
        })}
      </nav>
    </aside>
  );
};
