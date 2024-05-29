import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import MidChangingNotice from "./MidChangingNotice";
import useNotice from "../hook/useNotice";

const MidBody = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { notice } = useNotice();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MidBodyContainer>
      {/* <MidConMenu></MidConMenu> */}
      <img
        src="https://image.istarbucks.co.kr/upload/common/img/main/2024/2024_summer_promotion_bg.jpg"
        alt="Main-banner"
      />
      <MidServices>
        <NoticeBoxes>
          <NoticeBoxInner>
            <NoticeBoxDuo>
              <NoticeBoxText />
              <ChangingNotice>{notice}</ChangingNotice>
            </NoticeBoxDuo>
            <NoticeButton />
          </NoticeBoxInner>
        </NoticeBoxes>
        <Promotionbox>
          스타벅스프로모션
          <PromotionButton isOpen={isOpen} onClick={toggleOpen} />
          <ExpandedContent isOpen={isOpen}>
            {children}
            <img
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEwMjRfMTE5%2FMDAxNDc3Mjk1NDA1OTM0.2fMLbAyHQjMpAAlQ8L-mIGNw9wssdObjo95iZgQnm34g.v_TiDzuwOEoQI9nCd07i5LhEPQbkT3eNzWBwj9R5o5og.PNG.kyungchul87%2F_%281%29.png&type=sc960_832"
              alt="Expanded Content"
            />
          </ExpandedContent>
        </Promotionbox>
      </MidServices>
    </MidBodyContainer>
  );
};

const MidBodyContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  top: 112px;
`;

const MidServices = styled.div`
  display: flex;
  height: 62px;
`;

const NoticeBoxes = styled.div`
  display: flex;
  background-color: black;
  width: 50vw;
  position: relative;
  justify-content: center;
`;

const NoticeBoxInner = styled.div`
  display: flex;
  align-items: center;
`;

const NoticeBoxDuo = styled.div`
  display: flex;
  justify-content: center;
`;

const NoticeBoxText = styled.div`
  display: flex;
  background: url(https://image.istarbucks.co.kr/common/img/common/notice_ttl.png);
  width: 65px;
  height: 17px;
  background-size: 65px auto;
`;

const ChangingNotice = styled.div`
  display: flex;
  justify-content: start;
  width: 520px;
  color: white;
  div {
    transform: translateY(-100%);
    transition: transform 0.5s ease-in-out;
  }
`;

const NoticeButton = styled.span`
  background-image: url(https://www.starbucks.co.kr/common/img/common/btn_notice_plus.png);
  color: #000;
  width: 36px;
  height: 36px;
  background-size: 36px;
  cursor: pointer;
  justify-self: end;
`;

const Promotionbox = styled.div`
  display: flex;
  background-color: #f6f5ef;
  width: 50vw;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PromotionButton = styled.button`
  height: 35px;
  width: 35px;
  background-image: ${({ isOpen }) =>
    isOpen
      ? "url(https://image.istarbucks.co.kr/common/img/common/btn_prom_up.png)"
      : "url(https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png)"};
  background-size: 35px;
  cursor: pointer;
  padding: 0;
  border: 0;
`;

const ExpandedContent = styled.div`
  position: absolute;
  min-width: 961px;
  width: 100vw;
  height: 658px;
  right: 0px;
  z-index: 10;
  top: 62px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: ${({ isOpen }) => (isOpen ? "beige" : "white")};
`;

export default MidBody;
