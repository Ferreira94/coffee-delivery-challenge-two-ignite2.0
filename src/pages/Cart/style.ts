import styled from "styled-components";

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;

  strong {
    font-size: 1.125rem;
    font-family: "Baloon 2";
  }

  section {
    padding: 1.5rem;
    background-color: ${(props) => props.theme["gray-100"]};
    margin: 1rem 0;
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
`;

export const ProductsContainer = styled.main`
  flex: 1;

  section {
    border-radius: 0.375rem 2.75rem;
  }
`;

export const ContainerInputs = styled.div`
  div {
    display: flex;
  }
`;

export const BaseInput = styled.input`
  height: 2.625rem;
  background-color: ${(props) => props.theme["gray-400"]};
  border: 0;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
`;

export const Input = styled(BaseInput)`
  width: 12.5rem;
`;

export const AddressInput = styled(BaseInput)`
  width: 100%;
`;

export const ContainerInput = styled.div`
  background-color: ${(props) => props.theme["gray-400"]};
  width: 21.75rem;
  height: 2.625rem;
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;

  input {
    background-color: ${(props) => props.theme["gray-400"]};
    border: 0;
  }

  p {
    font-weight: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
  margin: 0 0.75rem;
`;

export const StateInput = styled(BaseInput)`
  width: 3.75rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

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
