import "@/assets/styles/layers/header.css";
import EternalLoaderText   from "@public/EternalLoaderText.png";
import { FC, useState }    from "react";

import { GetStarted }      from "../buttons/get-started";
import { MiniEternalLogo } from "../logo/mini-logo";
import  { PopUp }          from "../pop-up";
import { Menu }            from "../sections/menu";

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <Menu setOpen={setOpen}/>
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
  );
};
