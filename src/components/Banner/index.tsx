import styled from "styled-components"

const Container = styled.figure`
    margin: 0;
    background-color: #895fb5;
    display: flex;
    justify-content: center;
`

const Img = styled.img`
max-width: 100%;
`

interface BannerProps {
    src: string
    alt: string
}

export const Banner = ({ src, alt = ""}: BannerProps) => {
    return <Container>
        <Img src={src} alt={alt} />
    </Container>
}