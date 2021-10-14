import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import lottie from "lottie-web";

export default function Starter() {
  const [element, controls] = useScroll();
  const container = useRef(null);
  const facebook = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/office.json"),
    });
  }, []);
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
      <div className="main-container" ref={element}>
        <Navbar />
        <div className="container">
          <motion.div
            className="content"
            variants={headerAnimation}
            animate={controls}
            transition={{ delay: 0.2, type: "tween" }}
          >
            <h1 style={{ color: "red" }}>
              <Typewriter
                loop
                cursor
                cursorStyle={"_"}
                pauseFor={1000}
                delaySpeed={3000}
                color="red"
                // deleteSpeed={2000}
                words={["Tôi là Trần Phi Hoàng "]}
              />
            </h1>
            <p>
              Chào mừng bạn đến với Website của tôi,bạn đang thắc mắc và cần
              liên hệ cho tôi,ở đây chúng tôi cung cấp dịch vụ chất lượng cao về
              các lĩnh vực như Kinh doanh,buôn bán,Dev C#,liên hệ cho tôi qua 🤙
            </p>
            <div className="button-container">
              <Button
                content="Facebook"
                // icon={<AiFillFacebook />}
                facebook={facebook}
                link="https://www.facebook.com/hoang.p.tran.12"
              />
              <Button
                color="pink"
                content="Email"
                icon={<AiOutlineMail />}
                link="mailto:phihoang1107@gmail.com"
              />
            </div>
          </motion.div>
          <motion.div
            className="image"
            variants={imageAnimation}
            animate={controls}
            transition={{ type: "tween" }}
          >
            <div ref={container} alt="Work Image" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
