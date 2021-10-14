import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Why() {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="why-container" id="services" ref={element}>
        <div className="container">
          <motion.div
            className="top"
            variants={topContainerAnimation}
            animate={controls}
            transition={{
              duration: 1,
            }}
          >
            <Title title="Why HOANGPC ?" color="pink" lineCenter={true} />
            <div className="subTitle">
              <p>
                Luôn cập nhật các công nghệ do đó chúng tôi giúp khách hàng bằng
                cách đưa ra các giải pháp tốt nhất cho nhu cầu dành cho bạn.
              </p>
            </div>
          </motion.div>
          <div className="content">
            <motion.div
              variants={videoAnimation}
              animate={controls}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <div className="video">
                <GoPlay />
              </div>
            </motion.div>
            <motion.div
              className="reasons"
              variants={reasonsAnimation}
              animate={controls}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <ul>
                <li>Đang là sinh viên năm cuối IT trường Hutech</li>
                <li>Cung cấp giải pháp cho bạn khi gặp khó khăn.</li>
                <li>Tôi là người sáng tạo và giúp đỡ bạn.</li>
                <li>99% tuân thủ hợp đồng cấp dịch vụ</li>
                <li>Sẵn sàng nhận yêu cầu dịch vụ 24/7</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;
