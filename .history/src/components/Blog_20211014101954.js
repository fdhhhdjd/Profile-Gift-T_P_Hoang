import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "../styles/components/Blog.scss";
import lottie from "lottie-web";
function Blog({ image, title, subTitle, variants, animate }) {
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
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        <Button content="Read more" color="inverse" />
      </div>
    </motion.div>
  );
}

export default Blog;
