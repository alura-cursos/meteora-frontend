import styled from "styled-components";

export const NewsletterBox = styled.section`
    padding: 40px;
    border: 2px solid;
    width: 730px;
    max-width: 90%;
    margin: 0 auto;
`

export const NewsletterHeading = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    strong {
        font-weight: 400;
    }
`

export const NewsletterForm = styled.form`
    padding: 0 40px;
    display: flex;
    input {
        flex-grow: 1;
        border-right: none;
    }
`