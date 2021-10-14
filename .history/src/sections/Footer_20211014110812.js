import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <>
      <div className="footer-container" ref={element}>
        <div className="container">
          <div className="main-container">
            <motion.div
              className="news-letter"
              variants={fromUp}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <BrandName isFooter={true} />
              <p>
                Join our newsletter to get updated with our Offers & Discounts.
              </p>
              <div className="mail">
                <input type="email" placeholder="Please Enter Your Email" />
                <button>
                  <AiOutlineSend />
                </button>
              </div>
            </motion.div>
            <motion.div
              className="quick-links"
              variants={fromDown}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <h3>Đường dẫn nhanh</h3>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="industries"
              variants={fromUp}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <h3>Các ngành nghề</h3>
              <ul>
                <li>
                  <a href="https://profile-forme.surge.sh/" target="_blank">
                    Website Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/jonhny.nguyen.184"
                    target="_blank"
                  >
                    AI Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href="https://khang-designer.surge.sh/" target="_blank">
                    Website Design
                  </a>
                </li>
                <li>
                  <a href="https://profile-forme.surge.sh/" target="_blank">
                    Mobile App Design
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hoang.p.tran.12"
                    target="_blank"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="https://khang-designer.surge.sh/" target="_blank">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hoang.p.tran.12"
                    target="_blank"
                  >
                    IOS App Development
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="touch"
              variants={fromDown}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <h3>Get in Touch</h3>
              <div className="touch-section">
                <div className="icon">
                  <MdEmail />
                </div>
                <div className="detail">
                  <div className="detail-name">Email</div>
                  <div className="detail-content">
                    <a href="mailto: phihoang1107@gmail.com">
                      phihoang1107@gmail.com
                    </a>
                    <a href="mailto:abc@example.com?subject = Feedback&body = Message">
                      Send Feedback
                    </a>
                  </div>
                </div>
              </div>
              <div className="touch-section">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="detail">
                  <div className="detail-name">Phone</div>
                  <div className="detail-content">
                    <a href="#">+91 7551231231</a>
                  </div>
                </div>
              </div>

              <div className="touch-section">
                <div className="icon">
                  <ImLocation />
                </div>
                <div className="detail">
                  <div className="detail-name">Location</div>
                  <div className="detail-content">
                    <a href="#"> 32 StreetOne Boards, GJ 560123</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="copyright">
            <div className="copy">
              <p>Copyright c 2021. All Rights Reserved.</p>
            </div>
            <div className="icons">
              <div className="icon">
                <a href="#">
                  <FaFacebookF />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <AiFillInstagram />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <AiFillLinkedin />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  {" "}
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
