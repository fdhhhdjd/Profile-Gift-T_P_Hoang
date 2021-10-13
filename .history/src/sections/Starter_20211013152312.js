import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "../assets/work.svg";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

export default function Starter() {
  return (
    <>
      {/* <div className="main-container">
        <div className="container">
          <h1>
            Tôi là
            <span
              style={{ color: "red", fontWeight: "bold", marginLeft: "4px" }}
            >
              <Typewriter
                loop
                cursor
                cursorStyle={"_"}
                // delaySpeed={10}
                deleteSpeed={500}
                words={["Trần Phi Hoàng kinh doanh và Dev C#"]}
              />
            </span>
          </h1>
        </div>
      </div> */}
      <div className="main-container">
        <div className="container">
          <motion.div
            className="content"
            variants={headerAnimation}
            animate
            transition={{ delay: 0.2, type: "tween" }}
          >
            <h1>
              Tôi là {""}
              <Typewriter
                loop
                cursor
                cursorStyle={"💝"}
                // delaySpeed={1}
                deleteSpeed={500}
                words={["Trần Phi Hoàng kinh doanh và Dev C#"]}
              />
            </h1>
            <p>
              Chào mừng bạn đến với Website của tôi,bạn đang thắc mắc và cần
              gì,ở đây chúng tôi cung cấp dịch vụ chất lượng cao về các lĩnh vực
              như và phát triển ứng dụng di động cũng như trong thiết kế.
            </p>
            <div className="button-container">
              <Button content="Watch Video" icon={<GoPlay />} />
              <Button
                color="pink"
                content="Request Quote"
                icon={<HiOutlineArrowNarrowRight />}
              />
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
