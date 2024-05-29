import React, { useEffect, useState } from "react";

const useNotice = () => {
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const notices = [
      "신한카드 앱 주문 서비스 종료안내",
      "개인정보 처리방침 개정안내",
      "시스템 개선 및 서비스 점검 안내",
      "삼성카드 앱 주문 서비스 제휴 종료안내",
      "SCI평가정보 시스템 점검으로 인한 서비스 제한 안내",
    ];
    setNotice(notices[0]);

    let index = 0;
    const timer = setInterval(() => {
      setNotice(notices[index]);
      index = (index + 1) % notices.length;
    }, 2000);

    return () => clearInterval(timer);
  }, [setNotice]);

  return { notice };
};

export default useNotice;
