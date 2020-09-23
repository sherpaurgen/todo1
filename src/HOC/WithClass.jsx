import React from "react";

export const WithClass = (props) => {
  return <div className={props.classes}>{props.children}</div>;
};
