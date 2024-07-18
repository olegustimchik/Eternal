import "@/assets/styles/pages/page.css";
import { FC, ReactNode, useState } from "react";

import { Footer }                  from "../layers/footer";
import { Header }                  from "../layers/header";
import { Menu }                    from "../sections/menu";

type PageProps = {
  children    : ReactNode;
  renderFooter: boolean;
};
export const Page: FC<PageProps> = ({ children, renderFooter }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Header isMenuOpen={false} setMenuOpen={setMenuOpen}></Header>
      <div className="page-content" id="page-content">
        {isMenuOpen && <Menu isOpen={isMenuOpen} setClose={setMenuOpen}></Menu>}
        {children}
      </div>
      {renderFooter && <Footer></Footer>}
    </>
  );
};
