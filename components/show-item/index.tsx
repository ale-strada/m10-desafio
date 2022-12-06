import { getOrder, useMe } from "lib/hooks";
import router from "next/router";
import styled from "styled-components";
import { ButtonComprar } from "UI/buttons";
import { Subtitle, Title } from "UI/text";
import { FormResponsiveConteiner, TextField } from "UI/text-field";

const ShowItemConteiner = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 30px;
`

export function ShowItem({itemId, item}: any){
    const user = useMe()
    function handleSubmit(e:any){
        e.preventDefault()
        if(user){
        const address = e.target.address.value || user.address
        getOrder(itemId, address).then((res)=>{
        router.push(res.url)
        })
        
        }else{
        const address = e.target.address.value 
        getOrder(itemId, address).then((res)=>{
        router.push(res.url)
        })
        }
    }


    return <ShowItemConteiner>
        <img style={{width:"350px", height:"240px"}}src={item.Images[0].url}/>
        <Subtitle>{item.Name}</Subtitle>
        <Title> ${item["Unit cost"]}</Title>
        <FormResponsiveConteiner  onSubmit={handleSubmit}>
            <TextField name="address" label="Envio" width="100%" placeholder={"Direccion para enviar el producto" || user.addres} />
        <ButtonComprar>
            <Subtitle>ir a pagar</Subtitle>
        </ButtonComprar>   
        </FormResponsiveConteiner>
    </ShowItemConteiner>
}