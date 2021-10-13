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

export default function Starter() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>Tôi là hoàng bạn cần tôi giúp đỡ gì không </h1>
        </div>
      </div>
    </>
  );
}
