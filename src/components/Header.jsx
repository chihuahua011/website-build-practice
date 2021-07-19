import React from 'react'
import styled from 'styled-components'
import Logo from "../images/logo.svg"

const Header = () => {
    return (
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
        </HeaderCont>
    )
}

//STYLING

const HeaderCont = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 165px 0 165px;
    display: grid;
    grid-template-columns: 140px auto 160px;
    grid-template-rows: 100%;
    column-gap: 5px;
    align-items: center;
    border-bottom: black 2px solid;

    & img {
        height: 1.25rem;
    }
`

const Links = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    & button {
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }
    & button:not(:last-child) {
        margin-right: 30px;
    }
    & button:hover {
        color: hsl(233, 26%, 24%);
    }
`
        

const Request = styled.button`
    width: 160px;
    height: 40px;
    font-weight: 700;
    color: hsl(0, 0%, 100%);
    background: linear-gradient(90deg, hsl(136, 65%, 51%) 0%, hsl(192, 70%, 51%) 100%);
    border-radius: 20px;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;

    &:hover {
        opacity: 0.6;
    }
`

export default Header
