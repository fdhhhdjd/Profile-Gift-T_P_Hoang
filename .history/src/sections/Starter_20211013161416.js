import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import WorkImage from "../assets/work.svg";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

export default function Starter() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="container">
          <motion.div
            className="content"
            variants={headerAnimation}
            animate
            transition={{ delay: 0.2, type: "tween" }}
          >
            <h1 style={{ color: "red" }}>
              <Typewriter
                loop
                cursor
                cursorStyle={"_"}
                // pauseFor={1000}
                // delaySpeed={10}
                color="red"
                deleteSpeed={500}
                words={["Tôi là Trần Phi Hoàng "]}
              />
            </h1>
            <p>
              A professional web and mobile app development agency with over
              100+ web and app developed. We provide a high- quality service in
              web and mobile app development as well as in design.
            </p>
            <div className="button-container">
              <Button content="Facebook" icon={<AiFillFacebook />} />
              <Button color="pink" content="Email" icon={<AiOutlineMail />} />
            </div>
          </motion.div>
          <motion.div
            className="image"
            variants={imageAnimation}
            animate
            transition={{ type: "tween" }}
          >
            <img src={WorkImage} alt="Work Image" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
