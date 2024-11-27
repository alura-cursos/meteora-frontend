import styled from "styled-components";

export const FeatureStyled = styled.section`
    display: flex;
    align-items: center;
    gap: 24px;
    ul {
        max-width: 200px;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        li {
            color: #FFF;
            strong {
                color: #DAFF01;
            }
        }
    }
`