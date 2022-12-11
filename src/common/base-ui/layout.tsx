import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/svg/arrow.svg";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="container pt-4 max-w-3xl relative h-screen">
      <img
        className="cursor-pointer"
        onClick={() => navigate(-1)}
        src={Arrow}
        alt="arrow-svg"
      />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
