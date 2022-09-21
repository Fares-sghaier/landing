import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../../src/assets/images/Logo/logo.png";
import BurgerIcon from "../../../src/assets/svg/BurgerIcon";
import { NavLink, Route, Routes } from "react-router-dom";
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  // window.scrollTo(0, 0)
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <div>
              <img className="h-12 w-auto" src={LogoIcon} alt="Your Company" />
            </div>
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              E-Tafakna
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter mr-40">
            <li className="semiBold font15 pointer">
              <NavLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </NavLink>
            </li>
            <li className="semiBold font15 pointer">
              <NavLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/contracts"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contracts
              </NavLink>
            </li>
            <li className="semiBold font15 pointer">
              <NavLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/team"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Team
              </NavLink>
            </li>
            <li className="semiBold font15 pointer">
              <NavLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact us
              </NavLink>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                {/* Log in */}
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a className="radius8 " style={{ padding: "10px 15px" }}>
                {/* Get Started */}
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
