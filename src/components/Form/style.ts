import styled from "styled-components";

export const FormContainer = styled.div`
  div {
    display: flex;
  }

  span {
    color: red;
    display: block;
  }

  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
    margin-top: 1rem;

    div {
      flex-direction: column;
    }

    input {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const BaseInput = styled.input`
  height: 2.625rem;
  background-color: ${(props) => props.theme["gray-400"]};
  border: 0;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;

  :focus {
    border: 1px solid ${(props) => props.theme["yellow-500"]};
  }
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
  border-radius: 0.25rem;

  input {
    background-color: ${(props) => props.theme["gray-400"]};
    border: 0;
  }

  p {
    font-weight: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-600"]};
  }

  @media ${(props) => props.theme.laptop} {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1rem;

    p {
      position: relative;
      top: -1.15rem;
      left: 40%;
    }
  }
`;

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
  margin: 0 0.75rem;
`;

export const StateInput = styled(BaseInput)`
  width: 3.75rem;

  @media ${(props) => props.theme.laptop} {
    margin-top: 1rem;
  }
`;

export const ErrorsContainer = styled.div`
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.875rem;
  color: red;

  div {
    margin: 0 !important;
    gap: 0.5rem;
  }

  @media ${(props) => props.theme.laptop} {
    div {
      flex-direction: row;
    }
  }
`;
