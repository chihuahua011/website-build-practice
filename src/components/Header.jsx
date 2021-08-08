import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const onClick = () => {
    if (toggled === true) {
      setToggled(false);
    } else {
      setToggled(true);
    }
  };

  useEffect(() => {
    const overlay = document.querySelector("#overlay");
    const mobMenu = document.querySelector("#mobMenu");
    const body = document.querySelector("body");

    if (toggled === true) {
      overlay.classList.add("overOpen");
      overlay.classList.remove("overClosed");
      body.classList.add("disable-scroll");

      mobMenu.classList.add("open");
      mobMenu.classList.remove("closed");
    } else {
      overlay.classList.remove("overOpen");
      overlay.classList.add("overClosed");
      body.classList.remove("disable-scroll");

      mobMenu.classList.remove("open");
      mobMenu.classList.add("closed");
    }
  });

  return (
    <HeaderWrap id="header">
      <HeaderCont>
        <img src={Logo} alt="" />
        <Links>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
          <button>Blog</button>
          <button>Careers</button>
        </Links>
        <Request>Request Invite</Request>
        <HamBtn onClick={onClick} className="hamBtn">
          <span></span>
          <span></span>
          <span></span>
        </HamBtn>
      </HeaderCont>
      <HamMenu id="mobMenu">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        <button>Careers</button>
      </HamMenu>
      <Overlay id="overlay" />
    </HeaderWrap>
  );
};

//STYLING

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderCont = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0 10.3125rem;
  display: grid;
  grid-template-columns: 140px auto 160px;
  grid-template-rows: 100%;
  column-gap: 5px;
  align-items: center;
  z-index: 11;

  @media screen and (max-width: 480px) {
    position: fixed;
    height: 4.0625rem;
    padding: 0 1.5625rem;
    grid-template-columns: 140px auto;
    background-color: hsl(0, 0%, 100%);
  }

  & img {
    height: 1.25rem;
  }
`;

const Links = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    display: none;
  }

  & button {
    color: hsl(233, 8%, 62%);
    position: relative;
    cursor: pointer;
    transition: color 200ms ease-in-out;
  }
  & button:not(:last-child) {
    margin-right: 30px;
  }
  & button:hover {
    color: hsl(233, 26%, 24%);
  }
  & button::before {
    content: "";
    position: absolute;
    background: linear-gradient(
      90deg,
      hsl(136, 65%, 51%) 0%,
      hsl(192, 70%, 51%) 100%
    );
    width: 100%;
    height: 5px;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  & button:hover::before {
    opacity: 1;
  }
`;

const Request = styled.button`
  width: 160px;
  height: 40px;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  background: linear-gradient(
    90deg,
    hsl(136, 65%, 51%) 0%,
    hsl(192, 70%, 51%) 100%
  );
  border-radius: 20px;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  @media screen and (max-width: 480px) {
    display: none;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const HamBtn = styled.button`
  width: 25px;
  height: 20px;
  justify-self: flex-end;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
  }

  & span {
    display: block;
    width: 25px;
    height: 2px;
    margin-bottom: 4px;
    background-color: hsl(233, 26%, 24%);
  }
`;

const HamMenu = styled.div`
  display: none;
  position: fixed;
  width: 327px;
  height: 300px;
  margin-top: 89px;
  align-self: center;
  border-radius: 5px;
  background-color: hsl(0, 0%, 100%);
  z-index: 10;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }

  & button {
      font-size: 1.125rem;
      color: hsl(233, 26%, 24%);
      cursor: pointer;
  }
  & button:not(:last-child) {
      margin-bottom: 30px;
  }
  & button:first-child {
      margin-top: 35px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 65px;
  display: none;
  height: calc(100vh - 65px);
  width: 100%;
  z-index: 9;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export default Header;
