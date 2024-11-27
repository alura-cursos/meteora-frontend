import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 350px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardBody = styled.div`
  border: 1px solid #00000021;
  border-top: none;
`

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardFooter = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;