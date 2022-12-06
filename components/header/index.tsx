import styled from "styled-components" 
import { LogoWhite } from "UI/logo"
import { Turn as Hamburger } from 'hamburger-react'
import { MenuConteiner, MenuLink, MenuLinkConteiner } from "UI/menu-burguer"
import { useState } from "react"
import { ButtonIngresar } from "UI/buttons"
import { Body, BodyBoldWhite, LargeText } from "UI/text"
import router, { Router } from "next/router"
import Link from "next/link"
import { useMe } from "lib/hooks"
import { UserDataConteiner } from "UI/Layout"



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
function clickLogout(){
router.push("logout")
}
function SessionManager(){
const user = useMe()

    if(user){
        console.log(user, "USERR");
        return <UserDataConteiner>
                    <LargeText style={{color:"var(--white)"}}>{user.email}</LargeText>
                    <Body onClick={clickLogout} style={{color:"var(--fucsia)", cursor:"pointer"}}>Cerrar sesión</Body>
                </UserDataConteiner>
        
    }else{
        return <ButtonIngresar onClick={()=>{router.push("/login")}}>
                    <BodyBoldWhite>Ingresar</BodyBoldWhite>
                </ButtonIngresar>
    }
}
export function Header(){
    const [open, setOpen] = useState("none")
    return<HeaderConteiner>
        <div onClick={()=>{router.push("/")}}>
        <LogoWhite />
        </div>
        <SessionManager/>
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