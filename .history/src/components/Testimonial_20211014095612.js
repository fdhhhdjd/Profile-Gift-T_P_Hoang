import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/components/Testimonial.scss";

function Testimonial({ content, name, designation, variants, animate }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/rocket.json"),
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
          <span>&#10077;</span>
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
