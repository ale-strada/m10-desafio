import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { ProductosDestacados } from 'components/productos-destacados'
import { SearchForm } from 'components/searchForm'
import { searchProduct } from 'lib/hooks'
import { useRecoilState } from 'recoil'
import {  Title } from 'UI/text'
import router from 'next/router'
import { PageConteiner } from 'UI/layout'


export default function Home() {
  const [search, setSearch] = useRecoilState(searchProduct)
  
  function handleSubmit(e:any){
    e.preventDefault() 
    setSearch(e.target.search.value)
    router.push("/search")
}

  return <PageConteiner>
    <Header/>
    <Title>El mejor e-commerce</Title>
    <SearchForm onSubmit={handleSubmit}/>
    <ProductosDestacados/>
    <Footer/>
  </PageConteiner>
}
