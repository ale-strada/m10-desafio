import type {NextPage} from "next";
import {Login} from "components/login";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { PageConteiner } from "UI/layout";
import { Profile } from "components/profile-form";

const LoginPage : NextPage = () => {

return <PageConteiner>
   <Header/>
   <Profile/>
   <Footer/>
</PageConteiner>
}

export default LoginPage