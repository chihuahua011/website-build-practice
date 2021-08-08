import React from "react";
import styled from "styled-components";
import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

const Articles = () => {
  return (
    <ArticleSect>
      <ArticleWrap>
        <ArtTitle>Latest Articles</ArtTitle>
        <ArtList>
          <ArtListWrap>
            <ArtImg src={Currency} alt="currency"/>
            <ListBy>By Claire Robinson</ListBy>
            <ListTitle>Recieve money in any currency with no fees</ListTitle>
            <ListPara>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only recieve money in a single ...
            </ListPara>
          </ArtListWrap>
          <ArtListWrap>
            <ArtImg src={Restaurant} alt="restaurant" />
            <ListBy>By Wilson Hutton</ListBy>
            <ListTitle>Treat yourself without worrying about money</ListTitle>
            <ListPara>
              Our sinple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ...
            </ListPara>
          </ArtListWrap>
          <ArtListWrap>
            <ArtImg src={Plane} alt="plane" />
            <ListBy>By Wilson Hutton</ListBy>
            <ListTitle>Take your Easybank card wherever you go</ListTitle>
            <ListPara>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you ...
            </ListPara>
          </ArtListWrap>
          <ArtListWrap>
            <ArtImg src={Confetti} alt="confetti" />
            <ListBy>By Claire Robinson</ListBy>
            <ListTitle>Our invite-only Beta accounts are now live!</ListTitle>
            <ListPara>
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite through the
              site ...
            </ListPara>
          </ArtListWrap>
        </ArtList>
      </ArticleWrap>
    </ArticleSect>
  );
};

const ArticleSect = styled.section`
  width: 100%;
  height: 41.25rem;
  padding-top: 6.875rem;
  padding-left: 10.3125rem;
  background: linear-gradient(
    180deg,
    hsl(0, 0%, 100%) 0%,
    hsl(220, 16%, 96%) 100%
  );

  @media screen and (max-width: 1200px) {
    height: 68.75rem;
    padding-left: 5rem;
  }

  @media screen and (max-width: 480px) {
    height: 1900px;
    padding: 4.375rem 1.825rem 0 1.825rem;
  }
`;

const ArticleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ArtTitle = styled.h1`
  margin-bottom: 2.0625rem;
  font-size: 2.3125rem;
  color: hsl(233, 26%, 24%);

  @media screen and (max-width: 480px) {
    font-size: 1.875rem;
    text-align: center;
  }
`;

const ArtList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: 410px;
  gap: 30px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 255px);
    grid-template-rows: repeat(2, 410px);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 390px);
  }
`;

const ArtListWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    &:last-child {
      grid-column: 2;
    }
  }

  @media screen and (max-width: 480px) {
    &:last-child {
      grid-column: 1;
    }
  }
`;

const ArtImg = styled.img`
  height: 200px;
  margin-bottom: 25px;
  transform: translateX(-7px);

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 225px;
    margin-bottom: 15px;
    transform: translateX(0);
    transform: translateY(-20px);
  }
`;

const ListBy = styled.p`
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 10px;

  @media screen and (max-width: 480px) {
    font-size: 9px;
  }
`;

const ListTitle = styled.a`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 15px;
  padding-left: 20px;
  padding-right: 30px;
  color: hsl(233, 26%, 24%);
  cursor: pointer;
  transition: color 200ms ease-in-out;

  &:hover {
    color: hsl(136, 65%, 51%);
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const ListPara = styled.p`
  padding-right: 15px;
  padding-left: 20px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export default Articles;
