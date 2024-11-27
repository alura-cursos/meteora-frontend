import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`