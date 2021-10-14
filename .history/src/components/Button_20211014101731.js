import React, { useEffect, useRef } from "react";
import "../styles/components/Button.scss";
export default function Button({ content, icon = "", color = "blue", link }) {
  return (
    <>
      <a href={link} target="_blank">
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </a>
    </>
  );
}
