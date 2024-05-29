import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const autoPlay = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(calc(-40px * 5));
    }
`;

const View = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100px * 5);
  width: 520px;
  margin: 0px;
  list-style-type: none;
  animation: ${autoPlay} 10s linear infinite;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ListItem = styled.li`
  height: 100px;
  color: white;
`;

const MidCarousel = () => {
  const [notices, setItems] = useState([
    "신한카드 앱 주문 서비스 종료안내",
    "개인정보 처리방침 개정안내",
    "시스템 개선 및 서비스 점검 안내",
    "삼성카드 앱 주문 서비스 제휴 종료안내",
    "SCI평가정보 시스템 점검으로 인한 서비스 제한 안내",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevNotices) => {
        const newNotices = prevNotices.shift();
        return [...prevNotices, newNotices];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Slide>
        {notices.map((el, index) => (
          <ListItem key={index}>{el}</ListItem>
        ))}
      </Slide>
    </View>
  );
};

export default MidCarousel;
