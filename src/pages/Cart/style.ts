import styled from "styled-components";

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;

  strong {
    font-size: 1.125rem;
    font-family: "Baloon 2";
  }

  section {
    padding: 2.5rem;
    background-color: ${(props) => props.theme["gray-100"]};
    margin-top: 1rem;
    margin-bottom: 0.825rem;
  }
`;

export const AddressContainer = styled.main``;

export const ProductsContainer = styled.main``;
