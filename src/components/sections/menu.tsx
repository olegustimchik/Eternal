import "@/assets/styles/sections/menu.css";
import { FaXTwitter }                              from "react-icons/fa6";
import { FaFacebookF, FaDiscord, FaInstagram }     from "react-icons/fa";
import  ReactModal                                 from "react-modal";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

import { Header }                                  from "../layers/header";

type MenuProps = {
  isOpen  : boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
};

export const Menu: FC<MenuProps> = ({ isOpen, setClose }) => {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setClose(false)}
      overlayClassName="overlay"
      className="react-modal-content"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      onAfterOpen={() => document.body.style.overflow = "hidden"}
      onAfterClose={() => document.body.style.overflow = "unset"}
    >
      {/* <ReactModal isOpen={isOpen} onRequestClose={() => setClose(false)} className={"overlay"} ariaHideApp={false}> */}
      <div className="menu-container">
        <Header isMenuOpen={isOpen} setMenuOpen={setClose}></Header>
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
