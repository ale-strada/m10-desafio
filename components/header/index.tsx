import styled from "styled-components" 
import { LogoWhite } from "UI/logo"
import { Turn as Hamburger } from 'hamburger-react'
import { MenuConteiner, MenuLink, MenuLinkConteiner } from "UI/menu-burguer"
import { useState } from "react"
import { ButtonIngresar } from "UI/buttons"
import { BodyBoldWhite } from "UI/text"
import router from "next/router"
import Link from "next/link"



export const HeaderConteiner = styled.div`
background-color: var(--gris);
height: 84px;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px 10px;
`
const BurguerConteiner = styled.div`
    @media (min-width: 900px) {
        display:none;
}
`
export function Header(){
    const [open, setOpen] = useState("none")
    return<HeaderConteiner>
        <LogoWhite/>
        <ButtonIngresar onClick={()=>{router.push("/login")}}>
            <BodyBoldWhite>Ingresar</BodyBoldWhite>
        </ButtonIngresar>
        <BurguerConteiner>
            <Hamburger color="var(--white)" onToggle={toggled=>{toggled? setOpen(""):  setOpen("none")}}/>
        </BurguerConteiner>
        <MenuConteiner style={{display:open}}>
            <MenuLinkConteiner>
                <MenuLink>
                    <Link style={{textDecoration:"none", color: "inherit"}} href="/login" passHref={true}>Ingresar</Link>
                </MenuLink>
                <MenuLink>Mi Perfil</MenuLink>
                <MenuLink>
                    <Link style={{textDecoration:"none", color: "inherit"}} href="/search" passHref={true}>Buscar</Link> 
                </MenuLink>
            </MenuLinkConteiner>
        </MenuConteiner>
    </HeaderConteiner>
}