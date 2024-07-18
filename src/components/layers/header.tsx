import "@/assets/styles/layers/header.css";
import EternalLoaderText                from "@public/EternalLoaderText.png";
import MenuIcon                         from "@public/MenuIcon.svg";
import { RxCross2 }                     from "react-icons/rx";
import { FC, Dispatch, SetStateAction } from "react";

import { GetStarted }                   from "../buttons/get-started";
import { GroupLogoText }                from "../logo/group-logo-text";

type HeaderProps = {
  isMenuOpen : boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const Header: FC<HeaderProps> = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <>
      <div className="header">
        <div className="menu">
          {!isMenuOpen  &&
          <div className="menu-button" onClick={() => setMenuOpen(true)}>
            <MenuIcon></MenuIcon>
          </div>}
          {isMenuOpen && <div className="exit-menu">
            <button className="exit-menu-button" onClick={() => {
              setMenuOpen(false);
            }}>
              <RxCross2 color="#2F2535" size={"20px"}/>
            </button>
          </div>}
        </div>
        <GroupLogoText></GroupLogoText>
        {/* <div className="eternal-container">
          <div className="eternal-container-animation">
            <MiniEternalLogo/>
          </div>
          <div className="eternal-text-img">
            <img src={ EternalLoaderText} alt="Eternal"/>
          </div>
        </div> */}
        <div className="buttons">
          <GetStarted></GetStarted>
        </div>
      </div>
    </>
  );
};
