import "@/assets/styles/sections/menu.css";
import { FaXTwitter }                             from "react-icons/fa6";
import { FaFacebookF, FaDiscord, FaInstagram }    from "react-icons/fa";
import  ReactModal                                from "react-modal";
import { Dispatch, FC, SetStateAction, useState } from "react";

type MenuProps = {
  isOpen  : boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
};

ReactModal.setAppElement("#root");

export const Menu: FC<MenuProps> = ({ isOpen, setClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={() => setClose(false)} className={"overlay"}>
      <div className="menu-container" tabIndex={-1}>
        {isOpen}
        <div className="menu">
          <a><h3 className="menu-text">Capsule</h3></a>
          <a><h3 className="menu-text">About us</h3></a>
          <a><h3 className="menu-text">Pricing</h3></a>
          <a><h3 className="menu-text">Contact us</h3></a>
          <div className="divider"></div>
          <div className="menu-social-container">
            <FaFacebookF/>
            <FaInstagram/>
            <FaXTwitter/>
            <FaDiscord/>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
