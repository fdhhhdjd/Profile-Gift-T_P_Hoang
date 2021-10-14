import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="testimonials-container" id="testimonial" ref={element}>
        <div className="container">
          <motion.div
            className="title-container"
            variants={textAnimation}
            animate={controls}
            transition={{
              duration: 1,
            }}
          >
            <Title title="Testimonials" color="blue" lineCenter={true} />
            <p>Xem những gì khách hàng của chúng tôi đang nói về chúng tôi.</p>
          </motion.div>
          <div className="testimonials">
            <Testimonial
              content="Tốt nhất trên mạng! Phát triển phần mềm đã cứu công việc kinh doanh của tôi. tôi sử dụng
              Phát triển phần mềm thường xuyên. Tôi thực sự hài lòng với Phần mềm của mình
              Sự phát triển."
              name="Khách hàng"
              designation="Co-Founder"
              variants={cardAnimation}
              animate={controls}
            />
            <Testimonial
              content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
              name="Kishan H. Sheth"
              designation="Founder & CEO"
              variants={cardAnimation}
              animate={controls}
            />
            <Testimonial
              content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
              name="Romit Gandhi"
              designation="Founder"
              variants={cardAnimation}
              animate={controls}
            />
          </div>
        </div>
      </div>
    </>
  );
}
