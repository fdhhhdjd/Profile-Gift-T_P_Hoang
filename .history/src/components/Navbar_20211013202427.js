import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";
import * as menuV2 from "../sections/menu.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: menuV2.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
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
              <GiHamburgerMenu onClick={navbarToggler} />
            ) : (
              <Lottie
                options={defaultOptions}
                height={120}
                width={120}
                onClick={navbarToggler}
              />
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
