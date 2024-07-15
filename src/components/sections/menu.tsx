import "@/assets/styles/sections/menu.css";
import { FaXTwitter }                             from "react-icons/fa6";
import { FaFacebookF, FaDiscord }                 from "react-icons/fa";
import { FaInstagram }                            from "react-icons/fa";
import { Dispatch, FC, SetStateAction, useState } from "react";

type MenuProps = {
  isOpen : boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Menu: FC<MenuProps> = ({ isOpen, setOpen }) => {
  return (
    <div className="menu-container">
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
  );
};
