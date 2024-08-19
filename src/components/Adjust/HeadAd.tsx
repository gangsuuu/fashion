import styled from "styled-components"


const HeadADBox = styled.div`
 width : 100vw;
 background-color : red;
 height : 5vh
`
const HeadeAdButton = styled.button`

`
export default function  HeadAD() : JSX.Element{
    return  (
        <HeadADBox>
            앱에서 브랜드를 제대로 즐겨보세요!
            <HeadeAdButton></HeadeAdButton>
        </HeadADBox>
    )
}