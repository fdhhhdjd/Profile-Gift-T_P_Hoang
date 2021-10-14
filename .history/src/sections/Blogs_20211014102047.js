import React, { useEffect, useRef } from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../assets/1.jpg";
import BlogImage2 from "../assets/2.jpg";
import BlogImage3 from "../assets/anhem.jpg";
import "../styles/sections/Blogs.scss";
import lottie from "lottie-web";

import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();
  const facebook = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: facebook.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/facebook.json"),
    });
  }, []);
  return (
    <>
      <div className="blogs-container" id="blog" ref={element}>
        <div className="container">
          <motion.div
            className="title-container"
            variants={textAnimation}
            animate={controls}
            transition={{ duration: 1 }}
          >
            <Title title="Blogs" color="pink" lineCenter={true} />
            <p>Blog Tâm sự cá nhân.</p>
          </motion.div>
          <div className="blogs">
            <Blog
              image={BlogImage1}
              title="Khi bạn căng thẳng thì bạn sẽ làm gì ?"
              subTitle="Với tôi khi căng thẳng tôi sẽ đi chơi thư giãn cùng với bạn bè thân nhất với tôi,và sum họp với gia đình đó là những điều vô giá và tuyệt vời nhất..."
              variants={cardAnimation}
              animate={controls}
            />
            <Blog
              image={BlogImage2}
              title="1 ngày đẹp cũng nhưng người bạn  ở đà lạt 2021."
              subTitle="Tôi luôn có một cảm giác thật tuyệt vời khi được thư giãn và hít thở không khí se se lanh  ở đà lạt,đây là bức hình năm 2021 của tôi ... "
              variants={cardAnimation}
              animate={controls}
            />
            <Blog
              image={BlogImage3}
              title="Đây là những người bạn thân cũng là những người giỏi về IT !"
              subTitle="Người ở giữa là Dev React người tạo ra web này ,bên phải là AI trí tuệ nhân tạo,bên trái là lập trình chip,ở sau là designer,còn tôi các bạn đã biết..."
              variants={cardAnimation}
              animate={controls}
            />
          </div>
          <div
            className="button-container"
            variants={textAnimation}
            animate={controls}
          >
            <Button
              content="Xem Thêm "
              color="lightBlue"
              link="https://www.facebook.com/hoang.p.tran.12"
              facebook={facebook}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
