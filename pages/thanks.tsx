import { Footer } from "components/footer";
import { Header } from "components/header";
import Router from "next/router";
import { PrimaryButton } from "UI/buttons";
import { PageConteiner } from "UI/layout";
import { BodyBold, Subtitle, Title } from "UI/text";

export default function Thanks() {
    function handleClick(){
        Router.push("/")
    }
    return <PageConteiner>
        <Header/>
        <div style={{
            margin:"100px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
            }}>
            <Title> Gracias por su compra! </Title>
            <Subtitle>su producto será enviado lo antes posible</Subtitle>
            <PrimaryButton onClick={handleClick}>
                <BodyBold> Ir a Home</BodyBold>
            </PrimaryButton>
        </div>
        <Footer/>
    </PageConteiner>
}