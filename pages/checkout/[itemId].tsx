import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { ShowItem } from 'components/show-item'
import { useProduct } from 'lib/hooks'
import { useRouter } from 'next/router'
import { PageConteiner } from 'UI/layout'
import { Title } from 'UI/text'




function ItemData(){
const router = useRouter()
const itemId: any = router.query.itemId;

const product= useProduct(itemId)
if(product){
    const item = product.res
return <ShowItem item={item} itemId ={itemId} />
}else{
    return <div></div>
}
}
export default function Item() {
return<PageConteiner>
<Header/>
<Title>Tu compra</Title>
<ItemData/>
<Footer/>
</PageConteiner>
}

