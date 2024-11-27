import styled, { css } from "styled-components";
import { Link, LinkProps } from "react-router";

const sharedStyles = css<{ $outline?: boolean }>`
  display: inline-block;
  padding: 8px 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: #9353ff;
  border: 1px solid #9353ff;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  ${({ $outline }) =>
    $outline &&
    css`
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
    `}
`;

export const Button = styled.button<{ $outline?: boolean }>`
  ${sharedStyles}
`;

export const LinkButton = styled(Link)<LinkProps & { $outline?: boolean }>`
  ${sharedStyles}
`;
