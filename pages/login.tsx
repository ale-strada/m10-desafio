import type {NextPage} from "next";
import {Login} from "components/login";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { PageConteiner } from "UI/layout";

const LoginPage : NextPage = () => {

return <PageConteiner>
   <Header/>
   <Login/>
   <Footer/>
</PageConteiner>
}

export default LoginPage