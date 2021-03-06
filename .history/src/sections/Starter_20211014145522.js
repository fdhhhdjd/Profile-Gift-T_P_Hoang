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
import { GiMailbox } from "react-icons/gi";

export default function Starter() {
  const [element, controls] = useScroll();
  const container = useRef(null);
  const facebook = useRef(null);
  const gmail = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: facebook.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/facebook.json"),
    });
  }, []);
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
      container: GiMailbox.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/gmail.json"),
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
                words={["T??i l?? Tr???n Phi Ho??ng "]}
              />
            </h1>
            <p>
              Ch??o m???ng b???n ?????n v???i Website c???a t??i,b???n ??ang th???c m???c v?? c???n
              li??n h??? cho t??i,??? ????y ch??ng t??i cung c???p d???ch v??? ch???t l?????ng cao v???
              c??c l??nh v???c nh?? Kinh doanh,bu??n b??n,Dev C#,li??n h??? cho t??i qua ????
            </p>
            <div className="button-container">
              <Button
                content="Facebook"
                // icon={<AiFillFacebook />}
                json={facebook}
                link="https://www.facebook.com/hoang.p.tran.12"
              />
              <Button
                color="pink"
                content="Email"
                // icon={<AiOutlineMail />}
                json={email}
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
