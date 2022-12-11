import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};
const Title = ({ children }: TitleProps) => {
  return (
    <div className="text-xl font-semibold my-6 tracking-wider">{children}</div>
  );
};
export default Title;
