import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { getOrder, useProduct } from 'lib/hooks'
import { useRouter } from 'next/router'
import { ButtonComprar } from 'UI/buttons'
import { Subtitle, Title } from 'UI/text'
import { FormResponsiveConteiner, TextField } from 'UI/text-field'



function ItemData(){
const router = useRouter()
const itemId: any = router.query.itemId;

function handleSubmit(e:any){
e.preventDefault()
const address = e.target.address.value
getOrder(itemId, address).then((res)=>{
    console.log(res, "ORDER");
    router.push(res.url)
})
}


const product= useProduct(itemId)
if(product){
    const item = product.res
return <div style={{display:"flex",
flexDirection: "column",
alignItems: "center",
padding:"30px"}}>
    <img style={{width:"350px", height:"240px"}}src={item.Images[0].url}/>
    <Subtitle>{item.Name}</Subtitle>
    <Title> ${item["Unit cost"]}</Title>
    <FormResponsiveConteiner  onSubmit={handleSubmit}>
      <TextField name="address" label="Envio" width="100%" placeholder="Direccion para enviar el producto"/>
    <ButtonComprar>
        <Subtitle>ir a pagar</Subtitle>
    </ButtonComprar>   
    </FormResponsiveConteiner>
   
</div>
}else{
    return <div></div>
}
}

export default function Item() {

const pageStyle: any={
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
}

return<div style={pageStyle}>
<Header/>
<Title>Tu compra</Title>
<ItemData/>
<Footer/>
</div>
}

