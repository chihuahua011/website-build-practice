import React from "react";
import styled from "styled-components";
import desktopBg from "../images/bg-intro-desktop.svg";
import Mockups from "../images/image-mockups.png";
import mobileBg from "../images/bg-intro-mobile.svg";

const Hero = () => {
  return (
    <HeroSect id="hero">
      <HeroWrap>
        <Title>Next generation digital banking</Title>
        <HeroPara>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </HeroPara>
        <Request>Request Invite</Request>
      </HeroWrap>
      <MobileBg src={mobileBg} alt="mobile background" />
      <HeroImg src={desktopBg} alt="hero" />
      <MockupImg src={Mockups} alt="mockups" />
    </HeroSect>
  );
};

//STYLING
const HeroSect = styled.section`
  width: 100%;
  height: 652px;
  position: relative;
  padding-top: 11.25rem;
  padding-left: 10.3125rem;
  background: linear-gradient(
    180deg,
    hsl(220, 16%, 96%) 0%,
    hsl(0, 0%, 100%) 100%
  );

  @media screen and (max-width: 1200px) {
      padding-left: 5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 20.625rem 1.825rem 0 1.825rem;
  }
`;

const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  z-index: 8;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-bottom: 2.0625rem;
  font-size: 3.125rem;
  color: hsl(233, 26%, 24%);

  @media screen and (max-width: 480px) {
    font-size: 1.875rem;
    text-align: center;
  }
`;

const HeroPara = styled.p`
  font-size: 1.125rem;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 0.9375rem;
    line-height: 1.75rem;
  }
`;

const Request = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 2.5rem;
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
    align-self: center;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 743px;
  height: 652px;
  object-fit: none;
  object-position: 0 70%;

  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 600px;
    object-position: 8% 70%;
  }
`;

const MockupImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 777px;
  object-fit: none;
  object-position: 0 100%;

  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 600px;
    object-position: -32% 100%;
  }
  @media screen and (max-width: 480px) {
    height: 285px;
    width: 100%;
    object-fit: cover;
  }
`;

const MobileBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 285px;
  object-fit: cover;
  object-position: 0 55%;

  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export default Hero;
