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
      <div className="main-container">
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
      </div>
    </>
  );
}
