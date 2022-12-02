import styled from "styled-components"
import { Tiny } from "UI/text"

const Input = styled.input`
border: 3px solid var(--black);
border-radius: var(--radius);
width:100%;
height:40px;
padding: 10px;
margin: 0;
text-align:center;
&::placeholder {
    font-weight: 700;
    color:var(--gris)
}
`

export function TextField({placeholder="",label, width ="160px", name}:any){
return <div style={{width: width, margin:"5px"}}>
    <Tiny>{label}</Tiny>
    <Input placeholder= {placeholder} name={name}/>
    </div>
}