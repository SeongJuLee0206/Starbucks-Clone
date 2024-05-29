import React, { useState } from "react";
import styled from "styled-components";

const MenuItem = ({ name, contents }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MenuItemContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHovered={isHovered} //prop 전달~
    >
      {isHovered && (
        <ItemName isHovered={isHovered}>
          {contents.map((item, index) => (
            <div key={index}>
              <h2>{item.head}</h2>
              {item.content.map((contentItem, index) => (
                <p key={index}>{contentItem}</p>
              ))}
            </div>
          ))}
        </ItemName>
      )}
      {name}
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 89px;
  margin-left: 30px;
  margin-right: 30px;
  min-height: 66px;
  cursor: pointer;
  color: ${({ isHovered }) => (isHovered ? "lightgreen" : "black")};
  background-color: ${({ isHovered }) => (isHovered ? "#807b76" : "beige")};
  &:hover {
    text-decoration: underline;
  }
`;

const ItemName = styled.div`
  position: absolute;
  top: 113px;
  left: 0;
  cursor: pointer;
  width: 100vw;
  color: ${({ isHovered }) => (isHovered ? "lightgreen" : "black")};
  background-color: ${({ isHovered }) => (isHovered ? "#807b76" : "white")};
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

export default MenuItem;
