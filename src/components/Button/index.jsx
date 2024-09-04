import { ArrowRightIcon } from "../Icons";

import "./style.scss";

export const PrimaryButton = ({ children, size, icon }) => {
  return (
    <button className={`primary-button ${size}`}>
      {children} {icon ? <ArrowRightIcon /> : ""}
    </button>
  );
};
