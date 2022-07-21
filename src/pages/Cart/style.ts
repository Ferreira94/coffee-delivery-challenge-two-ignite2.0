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

export const AddressContainer = styled.main`
  width: 40rem;

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

export const ProductsContainer = styled.main``;

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
