import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  bgColor: string;
  onClick?: () => void;
  type?: "button" | "submit";
};
const Button = ({
  bgColor,
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick?.()}
      type={type}
      className={cx(
        "rounded-md py-2 w-full text-white mb-4 text-base font-semibold",
        css({ background: bgColor })
      )}
    >
      {children}
    </button>
  );
};
export default Button;
