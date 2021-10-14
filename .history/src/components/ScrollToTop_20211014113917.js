import React, { useEffect, useRef, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import "../styles/components/ScrollToTop.scss";
import lottie from "lottie-web";
function ScrollToTop() {
  const container = useRef(null);
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  window.addEventListener("scroll", toggleVisible);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/arrowsup.json"),
    });
  }, []);
  return (
    <>
      {visible && (
        <div className="scrollToTop" onClick={scrollToTop} ref={container}>
          {/* <div ></div> */}
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
