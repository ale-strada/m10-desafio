import { useDestacados, useProducts } from "lib/hooks";
import styled from "styled-components" 
import { Card } from "UI/card";
import { Subtitle } from "UI/text"




const DestacadosConteiner = styled.div`
margin-top:30px;
background-color: var(--fucsia);
min-width: 300px;
min-height: 700px;
padding:10px;
width: 100%;
text-align: center;
@media (min-width: 900px) {
 background-color: var(--celeste);
}
`
export const CardConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 900px) {
flex-direction:row;
justify-content: center;
}
`

function AddCard(){
const destacados = useDestacados()
console.log(destacados);

if(destacados){
   return <CardConteiner >
    {destacados.map(
        (p: any)=>{
            return <Card
            key = {p.objectID}
            id = {p.objectID}
            price={p["Unit cost"]} 
            description={p.Name} 
            src={p.Images[0].url}/>
        })
        }
    </CardConteiner> 
}else{
    return <div></div>
}
}


export function ProductosDestacados(){
    return <DestacadosConteiner>
        <Subtitle style={{color: "var(--white)", padding:"20px"}}>Productos destacados</Subtitle>
        <AddCard/>
    </DestacadosConteiner>
}