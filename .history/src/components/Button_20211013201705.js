import React from "react";
import "../styles/components/Button.scss";

export default function Button({ content, icon = "", color = "blue", link }) {
  return (
    <>
      {/* <MobileSvg href={link} target="_blank">
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </MobileSvg> */}
      <a href={link} target="_blank">
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </a>
    </>
  );
}
