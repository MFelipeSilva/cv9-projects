import { ArrowRightIcon } from "../Icons";

import "./style.css";

export const PrimaryButton = ({ children, size, icon }) => {
  return (
    <button className={`primary-button ${size}`}>
      {children} {icon ? <ArrowRightIcon /> : ""}
    </button>
  );
};
