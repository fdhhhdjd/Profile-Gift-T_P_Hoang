import React from "react";
import "../styles/components/Button.scss";

export default function Button({
  content,
  icon = "",
  color = "blue",
  link,
  facebook,
}) {
  return (
    <>
      <a href={link} target="_blank" ref={`${facebook}`}>
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </a>
    </>
  );
}
