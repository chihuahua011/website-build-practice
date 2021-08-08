import React from "react";
import styled from "styled-components";
import IcoOnline from "../images/icon-online.svg";
import IcoBudget from "../images/icon-budgeting.svg";
import IcoOnboard from "../images/icon-onboarding.svg";
import IcoApi from "../images/icon-api.svg";

const Introduction = () => {
  return (
    <IntroSect>
      <IntroWrap>
        <Title>Why choose Easybank?</Title>
        <IntroPara>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </IntroPara>
      </IntroWrap>
      <IntroList>
        <ListItem>
          <IntroImgs src={IcoOnline} alt="online" />
          <ListTitle>Online Banking</ListTitle>
          <ListPara>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </ListPara>
        </ListItem>
        <ListItem>
          <IntroImgs src={IcoBudget} alt="budget" />
          <ListTitle>Simple Budgeting</ListTitle>
          <ListPara>
            See exactly where your money goes each month. Recieve notifications
            when you're close to hitting your limits.
          </ListPara>
        </ListItem>
        <ListItem>
          <IntroImgs src={IcoOnboard} alt="onboard" />
          <ListTitle>Fast Onboarding</ListTitle>
          <ListPara>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </ListPara>
        </ListItem>
        <ListItem>
          <IntroImgs src={IcoApi} alt="api" />
          <ListTitle>Open API</ListTitle>
          <ListPara>
            Manage your saving, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </ListPara>
        </ListItem>
      </IntroList>
    </IntroSect>
  );
};

const IntroSect = styled.section`
  width: 100%;
  height: 42.5rem;
  position: relative;
  padding-top: 6.875rem;
  padding-left: 10.3125rem;
  background: hsl(220, 16%, 96%);

  @media screen and (max-width: 1200px) {
    padding-left: 5rem;
    height: 56.25rem;
  }

  @media screen and (max-width: 480px) {
    height: 96.875rem;
    padding: 4.375rem 1.825rem 0 1.825rem;
  }

`;

const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  width: 40rem;
  z-index: 8;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-bottom: 2.0625rem;
  font-size: 2.3125rem;
  color: hsl(233, 26%, 24%);

  @media screen and (max-width: 480px) {
    font-size: 1.875rem;
    text-align: center;
  }
`;

const IntroPara = styled.p`
  font-size: 1.125rem;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 0.9375rem;
    line-height: 1.75rem;
  }
`;

const IntroList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: 265px;
  gap: 30px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 255px);
    grid-template-rows: repeat(2, 265px);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 265px);
  }

`;

const ListItem = styled.div`
  @media screen and (max-width: 1200px) {
    &:last-child {
      grid-column: 2;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    &:last-child {
      grid-column: 1;
    }
  }

`;

const IntroImgs = styled.img`
  width: 70px;
  margin-bottom: 40px;
`;

const ListTitle = styled.h2`
  margin-bottom: 30px;
  color: hsl(233, 26%, 24%);
`;

const ListPara = styled.p`
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export default Introduction;
