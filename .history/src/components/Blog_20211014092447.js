import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "../styles/components/Blog.scss";
import Lottie from "react-lottie";
import * as facebook from "../sections/facebook.json";

function Blog({ image, title, subTitle, variants, animate }) {
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: facebook.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
        <Button
          content="Read more"
          color="inverse"
          icon={<HiOutlineArrowNarrowRight />}
        />
        <Lottie options={defaultOptions2} height={10} width={20} />
      </div>
    </motion.div>
  );
}

export default Blog;
