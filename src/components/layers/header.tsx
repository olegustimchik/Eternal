import "@/assets/styles/layers/header.css";
import EternalLoaderText   from "@public/EternalLoaderText.png";
import MenuIcon            from "@public/MenuIcon.svg";
import { RxCross2 }        from "react-icons/rx";
import { FC, useState }    from "react";

import { GetStarted }      from "../buttons/get-started";
import { MiniEternalLogo } from "../logo/mini-logo";
import { Menu }            from "../sections/menu";

export const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="menu">
          {!isOpen  &&
          <div className="menu-button" onClick={() => setOpen(true)}>
            <MenuIcon></MenuIcon>
          </div>}
          {isOpen && <div className="exit-menu">
            <button className="exit-menu-button" onClick={() => {
              setOpen(false);
            }}>
              <RxCross2 color="#2F2535" size={"20px"}/>
            </button>
          </div>}
        </div>
        <div className="eternal-container">
          <div className="eternal-container-animation">
            <MiniEternalLogo/>
          </div>
          <div className="eternal-text-img">
            <img src={ EternalLoaderText} alt="Eternal"/>
          </div>
        </div>
        <div className="buttons">
          <GetStarted></GetStarted>
        </div>
      </div>
      {isOpen && <Menu isOpen={isOpen} setOpen={setOpen}/>}
    </>
  );
};
