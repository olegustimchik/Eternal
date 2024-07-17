import "@/assets/styles/layers/footer.css";
import EternalLoaderText                       from "@public/EternalLoaderText.png";
import { FaXTwitter }                          from "react-icons/fa6";
import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import { FC }                                  from "react";

import { MiniEternalLogo }                     from "../logo/mini-logo";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="eternal-container">
          <div className="eternal-container-animation">
            <MiniEternalLogo/>
          </div>
          <div className="eternal-text-img">
            <img src={ EternalLoaderText} alt="Eternal"/>
          </div>
        </div>
        <div className="eternal-copyright">
          <p className="eternal-copyright-text">Eternal. All rights reserved</p>
        </div>
        <div className="footer-socials">
          <p className="footer-text">Follow Us</p>
          <div className="socials">
            <div className="social-icon">
              <FaXTwitter/>
            </div>
            <div className="social-icon">
              <FaInstagram/>
            </div>
            <div className="social-icon">
              <FaDiscord/>
            </div>
            <div className="social-icon">
              <FaFacebookF/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
