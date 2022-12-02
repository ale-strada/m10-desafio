import styled from "styled-components" 

export const Title = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: var(--black);
text-align: center;
`
export const Subtitle = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: var(--black);
`

export const LargeText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: var(--black);
`

export const LargeBold = styled(LargeText)`
font-weight: 700;
`

export const Body = styled(LargeText)`
font-size: 16px;
line-height: 19px;
`
export const BodyWhite = styled(Body)`
color:white;
`
export const BodyBold = styled(Body)`
font-weight: 700;
`
export const BodyBoldWhite = styled(BodyBold)`
color:white;
`

export const Tiny =  styled(LargeText)`
font-size: 12px;
line-height: 15px;
margin: 0 5px;

`