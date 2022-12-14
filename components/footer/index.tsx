import Link from "next/link"
import router from "next/router"
import styled from "styled-components" 
import { LogoInsta, LogoTwiter} from "UI/logo"
import { BodyWhite, LargeText } from "UI/text"

export const FooterConteiner = styled.div`
background-color: var(--gris);
min-height: 400px;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px 10px;
flex-direction:column;
@media (min-width: 900px) {
flex-direction:row;
justify-content: space-between;
padding: 40px;
align-items: center;
}
`
export const RedConteiner = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
width: 160px;
`
function handleLogOut(){
    router.push("/logout")
}
export function Footer(){
    
    return<FooterConteiner>
            <div>
                <BodyWhite>
                    <Link style={{textDecoration:"none", color: "inherit"}} href="/login" passHref={true}>Ingresar</Link>
                </BodyWhite>
                <BodyWhite>
                    <Link style={{textDecoration:"none", color: "inherit"}} href="/profile" passHref={true}> Mi Perfil</Link>
                </BodyWhite>
                <BodyWhite>
                    <Link style={{textDecoration:"none", color: "inherit"}} href="/search" passHref={true}>Buscar</Link> 
                </BodyWhite> 
                <BodyWhite style={{cursor:"pointer"}} onClick={handleLogOut}>Logout</BodyWhite>
            </div>
            <div>
                <LargeText style={{color:"white"}}>Redes</LargeText>
                <RedConteiner><LogoTwiter/><BodyWhite>My E-commerce</BodyWhite></RedConteiner>
                <RedConteiner><LogoInsta/><BodyWhite>My E-commerce</BodyWhite></RedConteiner>
            </div>
    </FooterConteiner>
}