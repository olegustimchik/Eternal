import MenuIcon                         from "@public/MenuIcon.svg";
import { FC, Dispatch, SetStateAction } from "react";

type MenuProps =  {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen : boolean;
};

export const Menu: FC<MenuProps> = ({ isOpen, setOpen }) => {
  return (
    <div className="menu">
      <div className="menu-button" onClick={() => setOpen(true)}>
        <MenuIcon></MenuIcon>
      </div>
    </div>
  );
};
