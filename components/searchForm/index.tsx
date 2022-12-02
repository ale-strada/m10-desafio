import styled from "styled-components" 
import { PrimaryButton } from "UI/buttons"
import { BodyBoldWhite } from "UI/text"
import { TextField } from "UI/text-field"


export function SearchForm({onSubmit}:any){
    return <form onSubmit={onSubmit}>
    <TextField name="search" placeholder="Encontrá tu producto ideal" width = "255px"/>
    <PrimaryButton style={{width:"255px"}}>
        <BodyBoldWhite>Buscar</BodyBoldWhite>
    </PrimaryButton>        
    </form>
}