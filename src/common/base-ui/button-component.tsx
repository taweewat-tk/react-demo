import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  bgColor: string;
};
const Button = ({ bgColor, children }: ButtonProps) => {
  return (
    <button
      className={cx(
        "rounded-md py-3 w-full text-white mb-4 text-lg",
        css({ background: bgColor })
      )}
    >
      {children}
    </button>
  );
};
export default Button;
