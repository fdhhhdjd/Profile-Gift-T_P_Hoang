import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/components/Testimonial.scss";
import lottie from "lottie-web";

function Testimonial({ content, name, designation, variants, animate }) {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/rocket1.json"),
      className: "facebook",
    });
  }, []);
  return (
    <>
      <motion.div
        className="testimonial-container"
        variants={variants}
        animate={animate}
      >
        <div className="quote">
          <span ref={container}></span>
        </div>
        <div className="content">{content}</div>
        <div className="author">
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
      </motion.div>
    </>
  );
}

export default Testimonial;
