import React from "react";
import styled from "styled-components";
import Logo from "../images/logo-footer.svg";
import Facebook from "../images/icon-facebook.svg";
import Insta from "../images/icon-instagram.svg";
import Youtube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <FooterSect>
      <FooterWrap>
        <LogoIco src={Logo} alt="logo" />
        <IcoCont>
          <SocIcons src={Facebook} alt="facebook" />
          <SocIcons src={Youtube} alt="youtube" />
          <SocIcons src={Twitter} alt="twitter" />
          <SocIcons src={Pinterest} alt="pinterest" />
          <SocIcons src={Insta} alt="instagram" />
        </IcoCont>
        <FooterCont>
          <FooterLinks>About Us</FooterLinks>
          <FooterLinks>Contact</FooterLinks>
          <FooterLinks>Blog</FooterLinks>
        </FooterCont>
        <FooterCont>
          <FooterLinks>Careers</FooterLinks>
          <FooterLinks>Support</FooterLinks>
          <FooterLinks>Privacy Policy</FooterLinks>
        </FooterCont>
        <FooterCont>
          <Request>Request Invite</Request>
          <Rights>© Easybank. All Rights Reserved</Rights>
        </FooterCont>
      </FooterWrap>
    </FooterSect>
  );
};

const FooterSect = styled.section`
  width: 100%;
  height: 190px;
  background-color: hsl(233, 26%, 24%);
  padding: 0 10.3125rem 0 10.3125rem;

  @media screen and (max-width: 480px) {
    height: 32.5rem;
    padding: 2.5rem 1.825rem 0 1.825rem;
  }
`;

const FooterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 255px 190px 190px auto;
  grid-template-rows: 100%;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoIco = styled.img`
  margin: 2.9375rem 0 3.125rem 0;
  grid-column: 1;
  grid-row: 1;

  @media screen and (max-width: 480px) {
    width: 9.0625rem;
    margin: 0;
  }
`;

const FooterCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.375rem 0 0 0;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const FooterLinks = styled.a`
  padding: 0 0 1.0625rem 0;
  color: hsl(0, 0%, 100%);
  transition: color 200ms ease-in-out;
  cursor: pointer;

  &:hover {
      color: hsl(136, 65%, 51%);
  }

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

const IcoCont = styled.div`
  display: flex;
  width: 100%;
  height: 1.875rem;
  margin-top: 7.3125rem;
  grid-column: 1;
  grid-row: 1;
  gap: 0.8125rem;

  @media screen and (max-width: 480px) {
    margin: 1.875rem 0 1.875rem 0;
    justify-content: center;
  }
`;

const SocIcons = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: invert(0.4) sepia(1) saturate(3.25) hue-rotate(75.6deg)
      brightness(1.01);
  }
`;

const Request = styled.button`
  width: 10rem;
  height: 2.5rem;
  margin-bottom: 1.875rem;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  align-self: flex-end;
  background: linear-gradient(
    90deg,
    hsl(136, 65%, 51%) 0%,
    hsl(192, 70%, 51%) 100%
  );
  border-radius: 20px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: 480px) {
    align-self: center;
    margin: 1.25rem 0 1.875rem 0;
  }

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(133, 207, 153, 1) 0%,
      rgba(136, 205, 222, 1) 100%
    );
  }
`;

const Rights = styled.p`
  align-self: flex-end;
  font-size: 0.875rem;
`;

export default Footer;
