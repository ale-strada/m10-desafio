import router from "next/router";
import { BodyBold, Title } from "UI/text";
import { TextField } from "UI/text-field";
import { SecondaryButton } from "UI/buttons";
import styled from "styled-components";
import { meUpdate } from "lib/api";
import { useMe } from "lib/hooks";
import { useState } from "react";

const FormConteiner= styled.div`
display: flex;
flex-direction: column;
padding: 40px;
`

export function Profile(){
    const user = useMe()
   
    function handlerProfileForm(e: any){
        e.preventDefault()
        if(user){
            const profile = {
                name:e.target.name.value || user.name,
                address:e.target.address.value || user.address,
                phone:e.target.phone.value || user.phone,
            }
            meUpdate(profile).then(()=>{router.push("/")})
        }else{
            const profile = {
            name: e.target.name.value,
            address: e.target.address.value,
            phone:e.target.phone.value
        }  
        meUpdate(profile).then(()=>{router.push("/")})
        }
    }
  

    const formStyle:any = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }

    
    return <FormConteiner>
        <Title style={{textAlign:"left", margin:"10px"}}>Perfil</Title>
        {user? <form style={formStyle} onSubmit={handlerProfileForm}>
            <TextField placeholder={user.name} label="Nombre completo" type="text" name="name" width="330px" />
            <TextField placeholder={user.address} label="Dirección" type="text " name="address" width="330px"/>
            <TextField placeholder={user.phone} label="Teléfono" type="tel" name="phone" width="330px" />
            <SecondaryButton style={{width:"330px"}}>
                <BodyBold>Guardar</BodyBold>
            </SecondaryButton>
        </form>:
        <form style={formStyle} onSubmit={handlerProfileForm}>
            <TextField label="Nombre completo" type="text" name="name" width="330px"/>
            <TextField label="Dirección" type="text " name="address" width="330px"/>
            <TextField label="Teléfono" type="tel" name="phone" width="330px"/>
            <SecondaryButton style={{width:"330px"}}>
                <BodyBold>Guardar</BodyBold>
            </SecondaryButton>
        </form>}
    </FormConteiner>
}