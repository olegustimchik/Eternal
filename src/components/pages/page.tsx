import "@/assets/styles/pages/page.css";
import { FC, ReactNode, useState } from "react";

import { Footer }                  from "../layers/footer";
import { Header }                  from "../layers/header";
import { Menu }                    from "../sections/menu";

type PageProps = {
  children: ReactNode;
};
export const Page: FC<PageProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}></Header>
      <div className="page-content">
        <Menu isOpen={isMenuOpen} setClose={setMenuOpen}></Menu>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};
