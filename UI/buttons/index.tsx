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
cursor: pointer;
`
export const SecondaryButton = styled(PrimaryButton)`
background-color: var(--naranja);
width:330px;
@media (min-width: 900px) {
width:150px;
}
`
export const ButtonIngresar = styled(PrimaryButton)`
background-color: var(--fucsia);
@media (max-width: 900px) {
        display:none;
}
`
export const ButtonComprar = styled(PrimaryButton)`
background-color: var(--celeste);
width: 330px;
height:60px;
@media (min-width: 900px) {
       width: 420px;
}
`

export const ButtonPagination = styled.button`
border:none;
background: none;
color:var(--azul);
margin:15px;
cursor: pointer;
`

export const PaginationConteiner = styled.div`
margin: 20px auto;
display: flex;
justify-content: space-between;
width: 300px
`