import { cx } from "@emotion/css";
import { ReactNode } from "react";

type TextLinkProps = {
  children: ReactNode;
  className?: string;
};
const TextLink = ({ children, className }: TextLinkProps) => {
  return (
    <div
      className={cx(
        "text-[#1f6ae6] font-semibold text-base text-center",
        className
      )}
    >
      {children}
    </div>
  );
};
export default TextLink;
