import styled from "styled-components" 
import { LogoWhite } from "UI/logo"
import { Turn as Hamburger } from 'hamburger-react'
import { MenuConteiner, MenuLink, MenuLinkConteiner } from "UI/menu-burguer"
import { useState } from "react"



export const HeaderConteiner = styled.div`
background-color: var(--gris);
height: 84px;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px 10px;
`

export function Header(){
    const [open, setOpen] = useState("none")
    return<HeaderConteiner>
        <LogoWhite/>
        <Hamburger color="var(--white)" onToggle={toggled=>{toggled? setOpen(""):  setOpen("none")}}/>
        <MenuConteiner style={{display:open}}>
            <MenuLinkConteiner>
                <MenuLink>Ingresar</MenuLink>
                <MenuLink>Mi Perfil</MenuLink>
                <MenuLink>Buscar</MenuLink>  
            </MenuLinkConteiner>
        </MenuConteiner>
    </HeaderConteiner>
}