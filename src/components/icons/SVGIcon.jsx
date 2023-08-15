import React from "react";

function SVGIcon({ size, children }) {
  const style = {};
  if (size > 0) {
    style.fontSize = `${size}px`;
  }
  return (
    <span className="text-[36px]" style={style}>
      {children}
    </span>
  );
}

export default SVGIcon;
