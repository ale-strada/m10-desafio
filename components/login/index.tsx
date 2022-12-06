import { useState } from "react"
import { sendCode, getToken } from "lib/api";
import router from "next/router";
import { Body, BodyBold, Title } from "UI/text";
import { TextField } from "UI/text-field";
import { SecondaryButton } from "UI/buttons";
import styled from "styled-components";
import { useMe } from "lib/hooks";

const FormConteiner= styled.div`
display: flex;
flex-direction: column;
padding: 40px;
`

export function Login(){
    const [email, setEmail]= useState("")
    function handlerEmailForm(e: any){
        e.preventDefault()
        const email = e.target.email.value;
        sendCode(email)
        setEmail(email)
    }
    async function handlerCodeForm(e: any){
        e.preventDefault()
        const code = e.target.code.value;
        try {
            getToken(email,code).then(()=>{
               router.push("/") 
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }
    const emailFormStyle = {
        display: email? "none":"",
        margin:"40px"
    };
    const codeFormStyle = {
        display: email? "":"none",
        margin:"40px"
    };

    const title = email? "Código":"Ingresar"

    return <FormConteiner>
        <Title>{title}</Title>
        <form style={emailFormStyle} onSubmit={handlerEmailForm}>
            <TextField label="Email" type="email" name="email" width="330px"/>
            <SecondaryButton style={{width:"330px"}}>
                <BodyBold>Continuar</BodyBold>
            </SecondaryButton>
        </form>
        <form style={codeFormStyle} onSubmit={handlerCodeForm}>
            <TextField  type="text" name="code" width="330px" placeholder="12345"/>
            <Body style={{textAlign:"center"}}>Te envíamos un código a tu email</Body>
            <SecondaryButton style={{width:"330px"}}>
                <BodyBold>Ingresar</BodyBold>
            </SecondaryButton>
        </form>
    </FormConteiner>
}