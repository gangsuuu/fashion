import styled, { css } from "styled-components"
import { flexAllCenter, Button, colors } from "../../shared/Theme"



const HeadADBox = styled.div`
 width : 100vw;
 background-color : ${colors.black};
 height : 5vh;
 ${flexAllCenter}
 p{
    color: ${colors.white};
 }
`


const HeadeAdButton = styled(Button)`
    background-color : ${colors.blueButton};
    padding : 8px 10px;
    border-radius : 20px;
    font-size : 14px;
    color: ${colors.white};
    margin-left:20px;
    font-weight : 500;
`
export default function  HeadAD() : JSX.Element{
    return  (
        <HeadADBox>
            <p>앱에서 브랜드를 제대로 즐겨보세요!</p>
            <HeadeAdButton>앱 다운로드</HeadeAdButton>
        </HeadADBox>
    )
}