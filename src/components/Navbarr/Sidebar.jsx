import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { NavLink, Route, Routes } from "react-router-dom";
// Assets
import CloseIcon from "../../../src/assets/svg/CloseIcon";
import LogoIcon from "../../../src/assets/images/Logo/logo.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate whiteBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <div>
            <img className="h-12 w-auto" src={LogoIcon} alt="Your Company" />
          </div>
          <h1 className="blackColor font20" style={{ marginLeft: "15px" }}>
            E-Tafakna
          </h1>
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="blackColor"
            style={{ padding: "10px 15px" }}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </NavLink>
        </li>
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="blackColor"
            style={{ padding: "10px 15px" }}
            to="/contracts"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contracts
          </NavLink>
        </li>
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="blackColor"
            style={{ padding: "10px 15px" }}
            to="/team"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Team
          </NavLink>
        </li>
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="blackColor"
            style={{ padding: "10px 15px" }}
            to="/contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact us
          </NavLink>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
