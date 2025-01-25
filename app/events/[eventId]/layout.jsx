import React from "react";
import { COMMON_PADDING } from "@/app/utils/constants";
const layout = ({ children }) => {
  return <div className={`${COMMON_PADDING}`}>{children}</div>;
};

export default layout;
