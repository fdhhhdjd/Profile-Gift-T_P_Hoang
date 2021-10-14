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
              content="Nhờ có bạn mà công ty đã có một sức mạnh để chiến đấu với các công ty nước ngoài,cảm ơn bạn."
              name="Thái Huỳnh"
              designation="Nha sáng lập"
              variants={cardAnimation}
              animate={controls}
            />
            <Testimonial
              content="Về kinh doanh chính xác là những gì doanh nghiệp đang mắc phải.
               Tôi đã nhận được ít nhất 50 lần giá trị từ những lời khuyên và con đường chỉ hướng của bạn."
              name="Quỳnh Tú"
              designation="Nhà sáng lập & CEO"
              variants={cardAnimation}
              animate={controls}
            />
            <Testimonial
              content="Sản phẩm. Bao giờ! Definet rất đáng để đầu tư,tất cả sản phẩm ở đây rất đẹp và chất lượng,tôi sẽ lấy số lượng lớn ở bạn để bán ra thị trường."
              name="Xuân Quỳnh"
              designation="Khách hàng"
              variants={cardAnimation}
              animate={controls}
            />
          </div>
        </div>
      </div>
    </>
  );
}
