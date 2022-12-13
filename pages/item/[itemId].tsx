import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { SearchFormLarge } from 'components/searchForm'
import { searchProduct, useProduct } from 'lib/hooks'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { ItemCard } from 'UI/item'
import { PageConteiner } from 'UI/layout'



export default function Item() {
const [search, setSearch] = useRecoilState(searchProduct)
const router = useRouter()
const itemId: any = router.query.itemId


function AddItem(){
const product= useProduct(itemId)
if(product){
    const item = product.res
return <ItemCard name={item.Name} price= {item["Unit cost"]} description={item.Description} src={item.Images[0].url} id={item.objectID}/> 
}else{
    return <div></div>
}
}

function handleSubmit(e:any){
    e.preventDefault() 
    setSearch(e.target.search.value)
    router.push("/search")
}

return<PageConteiner>
<Header/>
<div style={{backgroundColor:"var(--gris)", width:"100%", display:"Flex", justifyContent:"center", padding:"15px"}}>
<SearchFormLarge onSubmit={handleSubmit} />
</div>
<AddItem/>
<Footer/>
</PageConteiner>
}

