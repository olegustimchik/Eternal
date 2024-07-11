import MenuIcon                         from "@public/MenuIcon.svg";
import { FC, Dispatch, SetStateAction } from "react";

type MenuProps =  {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Menu: FC<MenuProps> = ({ setOpen }) => {
  return (
    <div className="menu">
      <div className="menu-button" onClick={() => setOpen(true)}>
        <MenuIcon></MenuIcon>
      </div>
    </div>
  );
};
