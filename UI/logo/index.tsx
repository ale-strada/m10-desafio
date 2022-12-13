import Logo from "./Logo.svg"
import Twitter from "./twitter (1) 1.svg"
import Insta from "./instagram (1) 1.svg"
import styled from "styled-components"


export function MyLogo({className}:any){
    return<Logo className= {className}/>
}

export const LogoWhite = styled(MyLogo)`
fill: white;
background-color: inherit;
cursor: pointer;
:hover{
    fill: var(--black)
}
`
export function LogoTwiter(){
    return<Twitter/>
}
export function LogoInsta(){
    return<Insta/>
}