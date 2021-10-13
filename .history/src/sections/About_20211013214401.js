import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="about-container" id="about" ref={element}>
        <div className="container">
          <motion.div
            className="details"
            initial="hidden"
            animate="show"
            animate={controls}
            variants={reveal}
            transition={{ delay: 0.1, stiffness: 300 }}
          >
            <Title title="About HOANGPC" color="lightBlue " />
            <p>
              Chúng tôi tin rằng mọi người đều xứng đáng có một công việc hoặc
              ưng ý với mỗi người. Đổi mới và đơn giản làm cho chúng tôi hạnh
              phúc. Nhiệm vụ của chúng tôi là giúp mọi người đạt được những gì
              họ đam mê.
            </p>
            <p>
              Chúng tôi rất vui được giúp đỡ bạn vì bạn xứng đáng bạn đã tìm
              đúng người đó là một người như Tôi
            </p>
            <Button content="Why ?" color="lightBlue" />
          </motion.div>
          <div className="cards" ref={element}>
            <Card
              title="Innovative Ideas"
              logo={<HiLightBulb />}
              // animateCustom={controls}
            />
            <Card
              title="Planning"
              logo={<BsFillCalendarFill />}
              animateCustom={controls}
            />
            <Card
              title="Communication"
              logo={<BiSupport />}
              animateCustom={controls}
            />
            <Card
              title="24 * 7 Support"
              logo={<SiGooglemessages />}
              animateCustom={controls}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
