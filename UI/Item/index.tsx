import styled from "styled-components" 
import { ButtonComprar } from "UI/buttons"
import { Body, Subtitle, Title } from "UI/text"

const ItemConteiner = styled.div`
display: flex;
margin: 90px auto;
flex-direction:column;
@media (min-width: 1000px) {
    flex-direction:row;
    margin: 60px auto;
}
`
const ItemImg = styled.img`
width:320px;
height:240px;
margin:20px auto;
@media (min-width: 900px) {
    width:800px;
    height:380px;
    margin:30px 0;
}

`
const ItemDataConteiner = styled.div`
display:flex;
align-items: flex-start;
flex-direction: column;
margin:0 30px;
@media (min-width: 900px) {
    width: 420px;
    padding:0 40px;
    margin:0;
}
`

export function ItemCard({src = "",price,description,name}: any){
return <ItemConteiner>
<ItemImg src={src}/>
<ItemDataConteiner>
    <Subtitle>{name}</Subtitle>
    <Title>${price}</Title>
    <ButtonComprar>
    <Subtitle>Comprar</Subtitle>
    </ButtonComprar>
    <Body>{description}</Body>
</ItemDataConteiner>
</ItemConteiner>
}


`
// export const GridConteiner = styled.div`
//     @media (min-width: 900px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
// }