import { Card, GridConteiner } from "UI/card"
import { Body } from "UI/text"



export function SearchResults({prod, pagination}:any){
    return <div>
    <Body>resultados totales:{JSON.stringify(pagination)}</Body>
    <GridConteiner>
        {prod.map(
        (p: any)=>{
            return <Card
            key = {p.objectID}
            id = {p.objectID}
            price={p["Unit cost"]} 
            description={p.Name} 
            src={p.Images[0].url}/>
        })
        } 
    </GridConteiner>
</div>  
}