import "@/assets/styles/logo/group-logo-text.css";
import EternalLoaderText   from "@public/EternalLoaderText.png";
import { FC }              from "react";

import { MiniEternalLogo } from "./mini-logo";

export const GroupLogoText: FC = () => {
  return (
    <div className="eternal-container">
      <div className="eternal-container-animation">
        <MiniEternalLogo/>
      </div>
      <div className="eternal-text-img">
        <img src={ EternalLoaderText} alt="Eternal"/>
      </div>
    </div>
  );
};
