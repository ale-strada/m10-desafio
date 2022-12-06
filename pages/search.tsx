import { Footer } from "components/footer"
import { Header } from "components/header"
import { SearchResults } from "components/search-results"
import { SearchFormLarge } from "components/searchForm"
import { searchProduct, useSearch } from "lib/hooks"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { ButtonPagination, PaginationConteiner } from "UI/buttons"
import { PageConteiner } from "UI/Layout"
import { Title } from "UI/text"

export default function Search() {
const [search, setSearch] = useRecoilState(searchProduct)
const [offset, setOffset] = useState(0)
const products:any =  useSearch(search, offset)


function handleSubmit(e:any){
    e.preventDefault() 
    setSearch(e.target.search.value) 
}

function handleClickMas(){
    setOffset(offset+10)
}
function handleClickMenos(){
    setOffset(offset-10) 
}



function AddCard(){
    if(products){    
        const prod = products.results
        const pagination = products.pagination.total
        var offMas = false
        var offMenos = false
        
        if ((offset + 10) > pagination || (offset + 10) === pagination){
                console.log("tope");
                offMas= true
            }

        if(offset === 0){
                console.log("minimo");
                offMenos = true
            }
const paginationStyleMas: any = {display: offMas? "none":"", position: "relative", left: "280px"}
const paginationStyleMenos: any = {display: offMenos? "none":""}
    if(pagination !== 0){
        return <div>
            <SearchResults prod={prod} pagination={pagination}/>
            <PaginationConteiner> 
                <ButtonPagination style = {paginationStyleMenos} onClick={handleClickMenos}>Menos -</ButtonPagination> 
                <ButtonPagination style = {paginationStyleMas} onClick={handleClickMas}> Mas +</ButtonPagination>  
            </PaginationConteiner>
            </div>
    }else{
        return <div style={{margin:"60px"}}>
        <Title>No se encontraron coincidencias</Title>
    </div>
    }
    }else{
        return <div style={{margin:"60px"}}>
            <Title>No se encontraron coincidencias</Title>
        </div>
    }
    }

return <PageConteiner>
    <Header/>
    <div style={{backgroundColor:"var(--gris)", width:"100%", display:"Flex", justifyContent:"center", padding:"15px"}}>
    <SearchFormLarge onSubmit={handleSubmit} />
    </div>
    <AddCard/>
    <Footer/>
    </PageConteiner>
}