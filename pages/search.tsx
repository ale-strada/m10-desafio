import { Footer } from "components/footer"
import { Header } from "components/header"
import { SearchForm } from "components/searchForm"
import { searchProduct, useSearch } from "lib/hooks"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { Card } from "UI/card"
import { Body, Title } from "UI/text"

export default function Search() {
const [search, setSearch] = useRecoilState(searchProduct)


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

function AddCard(){
    const products:any =  useSearch(search)
    
    if(products){
    const prod = products.results
    const pagination = products.pagination.total
    return <div>
        <Body>resultados totales:{JSON.stringify(pagination)}</Body>
        {prod.map(
            (p: any)=>{
                return <Card 
                key = {p.objectID}
                price={p["Unit cost"]} 
                description={p.Name} 
                src={p.Images[0].url}/>
            })
            }
    </div>
    }else{
        return <div>
            <Title>No se encontraron coincidencias</Title>
        </div>
    }
    }

return <div style={pageStyle}>
    <Header/>
    <SearchForm onSubmit={handleSubmit} />
    <AddCard/>
    <Footer/>
    </div>
}