import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "./mainmenu/MenuItem";
import {
  menuCoffee,
  menuDrink,
  menuStore,
  menuRes,
  menuRwds,
  menuSales,
  menuNew,
} from "./mainmenu/contentsMenu";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLogo>
          <a href="/" alt="logo">
            <img
              src="https://www.starbucks.co.kr/common/img/common/logo.png"
              alt="STARBUCKS"
            />
          </a>
        </HeaderLogo>
        <HeaderInner>
          <SubMenu>
            <SubServ>Sign In</SubServ>
            <SubServ>My Starbucks</SubServ>
            <SubServ>Customer Service & Ideas</SubServ>
            <SubServ>Find a Store</SubServ>
            <SearchInput type="text" isOpen={isSearchOpen} />
            <SearchIcon onClick={toggleSearch} isOpen={isSearchOpen}>
              search
            </SearchIcon>
          </SubMenu>
          <MainMenu>
            <MenuItem name="COFFEE" contents={menuCoffee} />
            <MenuItem name="MENU" contents={menuDrink} />
            <MenuItem name="STORE" contents={menuStore} />
            <MenuItem name="RESPONSIBILITY" contents={menuRes} />
            <MenuItem name="STARBUCKS REWARDS" contents={menuRwds} />
            <MenuItem name="CORPORATE SALES" contents={menuSales} />
            <MenuItem name="WHAT'S NEW" contents={menuNew} />
          </MainMenu>
        </HeaderInner>
      </HeaderContainer>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 120px;
  display: flex;
  justify-content: center;
  background-color: beige;
  width: 100vw;
`;

const HeaderContainer = styled.header`
  display: flex;
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 1100px; */
  justify-content: space-around;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: end;
  font-size: 13px;
`;

const SubServ = styled.div`
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const SearchIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const MainMenu = styled.div`
  display: flex;
  font-size: 13px;
`;

export default Header;
