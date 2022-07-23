import styled from "styled-components";

export const CartContainer = styled.main`
  form {
    width: 100%;
    display: flex;
    gap: 2rem;
  }

  strong {
    font-size: 1.125rem;
    font-family: "Baloon 2";
  }

  section {
    padding: 1.5rem;
    background-color: ${(props) => props.theme["gray-100"]};
    margin: 1rem 0;
  }

  @media ${(props) => props.theme.desktopM} {
    form {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const AddressContainer = styled.main`
  width: 38rem;

  div {
    &:first-child {
      display: flex;
      margin-bottom: 2rem;
      gap: 0.5rem;
    }

    h4 {
      font-weight: 400;
    }

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-700"]};
      margin-top: 0.125rem;
    }
  }

  @media ${(props) => props.theme.laptop} {
    width: 100%;

    div {
      &:first-child {
        margin-bottom: 0;
        margin-top: 0.5rem;
      }
    }
  }
`;

export const ProductsContainer = styled.main`
  flex: 1;
  width: 38rem;

  section {
    border-radius: 0.375rem 2.75rem;

    div {
      button {
        width: 100%;
        min-height: 2.875rem;
        border: 0;
        border-radius: 0.625rem;
        background-color: ${(props) => props.theme["yellow-500"]};
        color: ${(props) => props.theme.white};
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 700;
        cursor: pointer;
        margin-top: 1rem;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContainer = styled.div``;

export const Line = styled.div`
  margin: 2rem 0;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme["gray-400"]};
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-700"]};
    }

    p {
      color: ${(props) => props.theme["gray-700"]};
    }
  }
  button {
    width: 100%;
    min-height: 2.875rem;
    border: 0;
    border-radius: 0.625rem;
    background-color: ${(props) => props.theme["yellow-700"]};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
