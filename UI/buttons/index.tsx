import styled from "styled-components" 

export const PrimaryButton = styled.button`
background: var(--azul);
border-radius: var(--radius);
width:163px;
height:37px;
border: none;
display:flex;
justify-content:center;
align-items:center;
margin:5px;
`
export const SecondaryButton = styled(PrimaryButton)`
background-color: var(--naranja)
`
export const ButtonIngresar = styled(PrimaryButton)`
background-color: var(--fucsia)
`