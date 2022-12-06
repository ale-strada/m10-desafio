import router from "next/router"
import styled from "styled-components" 
import { LargeText, Subtitle } from "UI/text"

const ProductInfo = styled.div`
width: 100%;
height: 89px;
background-color: var(--fucsia);
display: flex;
-ms-flex-pack: space-around;
justify-content: space-around;
padding: 0 10px;
border-radius: 0 0 4px 4px;
position: relative;
top: -1px;
`

const CardConteiner = styled.div`
width:315px;
height: 321px;
border: 4px solid #000000;
border-radius: var(--radius);
margin: 15px;
cursor: pointer;
`

const ImgConteiner = styled.div`
width: 100%;
height: 225px;
margin: 0;
padding: 0;
position: relative;
top: -1px;
`
const ProductImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
border-radius:4px 4px 0 0;
`

export function Card({src = "",price,description,id, type}: any){
function handleCardClick(e:any){
    e.preventDefault()
    router.push("/item/"+id)
}
return <CardConteiner onClick={handleCardClick}>
        <ImgConteiner>
            <ProductImg src={src}/>
        </ImgConteiner>
        <ProductInfo>
        <LargeText>{description}</LargeText>
        <Subtitle>${price}</Subtitle>
    </ProductInfo>
</CardConteiner>
}

export const GridConteiner = styled.div`
    @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
`