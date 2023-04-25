import Footer from "@/components/UI/Footer";
import NavBar from "@/components/UI/navbar";
import { Fragment } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
