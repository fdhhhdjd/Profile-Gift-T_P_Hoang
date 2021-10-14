import React, { useEffect, useRef } from "react";
import "../styles/components/Button.scss";
import lottie from "lottie-web";
export default function Button({
  content,
  icon = "",
  color = "blue",
  link,
  ref,
}) {
  const facebook = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: facebook.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/facebook.json"),
    });
  }, []);
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
