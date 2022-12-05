import { Footer } from "components/footer"
import { Header } from "components/header"
import { SearchFormLarge } from "components/searchForm"
import { searchProduct, useSearch } from "lib/hooks"
import next from "next"
import router from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { Card, GridConteiner } from "UI/card"
import { Body, Title } from "UI/text"

export default function Search() {
const [search, setSearch] = useRecoilState(searchProduct)
const [offset, setOffset] = useState(0)

const pageStyle: any={
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
}

function handleSubmit(e:any){
    e.preventDefault() 
    setSearch(e.target.search.value) 
    console.log();
}

function handleClickMas(){
    setOffset(offset+10)
}
function handleClickMenos(){
    setOffset(offset-10)
}


function AddCard(){
    const products:any =  useSearch(search, offset)
    if(products){    
        const prod = products.results
        const pagination = products.pagination.total

    
        
    if ((offset + 10) > pagination || (offset + 10) === pagination){
        console.log("tope");
    }
    if(offset === 0){
        console.log("minimo");
        
    }
    if(pagination !== 0){
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
        
        <div style={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        }}> 
        {/* ver la forma de que estos botones no aparezcan cuando no se puede cambiar el offset */}
           <a style={{color:"var(--azul)", margin:"15px",cursor: "pointer",  }} onClick={handleClickMenos}>Menos -</a> 
           <a style={{color:"var(--azul)", margin:"15px",cursor: "pointer",  }} onClick={handleClickMas}> Mas +</a>  
        </div>
       
    </div>  
    }else{
        return <div>
        <Title>No se encontraron coincidencias</Title>
    </div>
    }
    }else{
        return <div>
            <Title>No se encontraron coincidencias</Title>
        </div>
    }
    }

return <div style={pageStyle}>
    <Header/>
    <div style={{backgroundColor:"var(--gris)", width:"100%", display:"Flex", justifyContent:"center", padding:"15px"}}>
    <SearchFormLarge onSubmit={handleSubmit} />
    </div>
    <AddCard/>
    <Footer/>
    </div>
}