import styled from "styled-components"

export const Nav = styled.nav`
    background-color: #000;
    padding: 10px 24px;
`

export const Ul = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 16px;
    li {
        color: #fff;
        font-size: 16px;
        font-weight: 300;
        a {
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
        }
    }
`

export const Form = styled.form`
    display: flex;
    gap: 16px;
    margin-right: 100px;
`

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`