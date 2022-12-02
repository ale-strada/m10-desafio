import styled from "styled-components" 

export const MenuConteiner = styled.div`
    position: absolute;
    width: 375px;
    height: 624px;
    right: 0px;
    top: 60px;
    background-color: var(--gris);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: width 2s, height 4s;
    z-index: 20;
`
export const MenuLinkConteiner = styled.div`
    width: 375px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const MenuLink = styled.a`
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: var(--white);
`

