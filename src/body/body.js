import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import MidBody from "../Middle/MiddleBody";
const Body = () => {
  return (
    <>
      <div>
        <Main>
          <Header />
          <MidBody />
        </Main>
      </div>
    </>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vw;
`;

export default Body;
