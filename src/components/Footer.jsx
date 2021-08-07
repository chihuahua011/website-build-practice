import React from 'react'
import styled from 'styled-components'
import Logo from "../images/logo-footer.svg"
import Facebook from "../images/icon-facebook.svg"
import Insta from "../images/icon-instagram.svg"
import Youtube from "../images/icon-youtube.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"

const Footer = () => {
    return (
        <FooterSect>
            <FooterWrap>
                <LogoIco src={Logo} />
                <IcoCont>
                    <SocIcons src={Facebook} />
                    <SocIcons src={Youtube} />
                    <SocIcons src={Twitter} />
                    <SocIcons src={Pinterest} />
                    <SocIcons src={Insta} />
                </IcoCont>
            </FooterWrap>
        </FooterSect>
    )
}

const FooterSect = styled.section`
    width: 100%;
    height: 190px;
    background-color: hsl(233, 26%, 24%);
    padding: 0 10.3125rem 0 10.3125rem;
`

const FooterWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 255px 190px 190px auto;
    grid-template-rows: 100%;
`

const LogoIco = styled.img`
    margin: 47px 0 50px 0;
    grid-column: 1;
    grid-row: 1;
`

const IcoCont = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    margin-top: 117px;
    grid-column: 1;
    grid-row: 1;
    gap: 13px;
`

const SocIcons = styled.img`
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        fill: hsl(136, 65%, 51%);
        filter: invert(0.4) sepia(1) saturate(3.25) hue-rotate(75.6deg) brightness(1.01);
    }
`

export default Footer
