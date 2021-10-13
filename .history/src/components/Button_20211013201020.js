import React from "react";
import "../styles/components/Button.scss";
import styled, { keyframes } from "styled-components";
// const move = keyframes`
// 0% { transform: translateY(-5px)  }
//     50% { transform: translateY(10px) }
//     100% { transform: translateY(-5px) }
// `;
// const MobileSvg = styled.a`
//   animation: ${move} 2.5s ease infinite;
// `;
export default function Button({ content, icon = "", color = "blue", link }) {
  return (
    <>
      {/* <MobileSvg href={link} target="_blank">
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </MobileSvg> */}
      <a href={link} target="_blank">
        <button className={`${color}`}>
          {content} {icon}
        </button>
      </a>
    </>
  );
}
