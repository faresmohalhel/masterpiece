import Footer from "@/components/UI/Footer";
import NavBar from "@/components/UI/NavBar";
import { Fragment } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-base-100">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
