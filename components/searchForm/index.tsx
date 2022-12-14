import styled from "styled-components" 
import { PrimaryButton, SecondaryButton } from "UI/buttons"
import { BodyBold, BodyBoldWhite } from "UI/text"
import { TextField } from "UI/text-field"


export function SearchForm({onSubmit}:any){
    return <form style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}onSubmit={onSubmit}>
    <TextField name="search" placeholder="EncontrĂ¡ tu producto ideal" width = "255px"/>
    <PrimaryButton style={{width:"255px"}}>
        <BodyBoldWhite>Buscar</BodyBoldWhite>
    </PrimaryButton>        
    </form>
}
export const FormResponsive = styled.form`
@media (min-width: 900px) {
display:flex;
position: absolute;
top: 15px;
align-items: center;
}
`

export function SearchFormLarge({onSubmit}:any){
    return <FormResponsive onSubmit={onSubmit}>
    <TextField name="search" placeholder="EncontrĂ¡ tu producto ideal" width = "330px"/>
    <SecondaryButton>
        <BodyBold>Buscar</BodyBold>
    </SecondaryButton>        
    </FormResponsive>
}