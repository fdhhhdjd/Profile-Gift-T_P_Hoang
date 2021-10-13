import React from "react";
import "../styles/components/Button.scss";

export default function Button({ content, icon = "", color = "blue" }) {
  return (
    <>
      <a href="">
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </a>
    </>
  );
}
