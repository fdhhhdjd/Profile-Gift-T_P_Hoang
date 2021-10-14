import React, { useEffect, useRef } from "react";
import "../styles/components/Button.scss";
import Lottie from "react-lottie";
import * as facebook from "../Json/facebook.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: facebook.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Button({
  content,
  icon = "",
  color = "blue",
  link,
  json,
}) {
  return (
    <>
      <a href={link} target="_blank">
        <button className={`${color}`}>
          {content} {icon}
          <div ref={json} className="facebook"></div>
        </button>
      </a>
    </>
  );
}
