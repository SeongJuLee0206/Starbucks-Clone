import React from "react";
// import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Header from "./header/Header";
import Body from "./body/body";
import MidBody from "./Middle/MiddleBody";

function Starbucks() {
  return (
    // <GlobalStyles>
    <div>
      <Body>
        <Header />
        <MidBody />
      </Body>
    </div>
    // </GlobalStyles>
  );
}

export default Starbucks;
