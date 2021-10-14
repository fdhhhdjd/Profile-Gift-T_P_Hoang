import React from "react";
import "../styles/components/Button.scss";

export default function Button({
  content,
  icon = "",
  color = "blue",
  link,
  ref,
}) {
  return (
    <>
      <a href={link} target="_blank" ref={`${ref}`}>
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </a>
    </>
  );
}
