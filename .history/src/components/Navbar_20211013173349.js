import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";
import check from "../assets/menu.svg";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <>
      <motion.div
        className={`navbar ${toggleNavbar === true ? "active" : ""}`}
        variants={navbarAnimation}
        transition={{ delay: 0.1 }}
      >
        <div className="col">
          <BrandName />
          <div className="collapseble-button">
            {!toggleNavbar ? (
              // <GiHamburgerMenu onClick={navbarToggler} />
              <img src={check} onClick={navbarToggler} />
            ) : (
              <MdClose onClick={navbarToggler} />
            )}
          </div>
        </div>
        <nav>
          <div className="links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#testimonial">Testimonial</a>
              </li>

              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <Button
                  content="Contact"
                  link={"tel:+0936095986"}
                  color="lightBlue"
                />
              </li>
            </ul>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
