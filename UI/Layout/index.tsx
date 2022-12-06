import styled from "styled-components";

export const PageConteiner = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`

export const UserDataConteiner = styled.div`
    position: relative;
    bottom: 30px;
    margin: 0 10px;
    @media (max-width: 900px) {
        display:none;
}
`