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
export const FormResponsiveConteiner= styled.form`
width:330px;
@media (min-width: 900px) {
width:420px;
}
`
export function TextField({placeholder="",label, width ="160px", name, type, onChange, value}:any){
return <div style={{width: width, margin:"10px"}}>
    <Tiny>{label}</Tiny>
    <Input onChange={onChange} placeholder= {placeholder} name={name} type={type} value={value}/>
    </div>
}