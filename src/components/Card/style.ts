import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem;

  img {
    max-width: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  div {
    display: flex;
    gap: 0.3rem;
    margin-bottom: 1.5rem;

    span {
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      background-color: ${(props) => props.theme["yellow-300"]};
      color: ${(props) => props.theme["yellow-500"]};
      border-radius: 1rem;
    }
  }

  strong {
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-family: "Baloon 2";
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: flex-end;
    gap: 0.3rem;

    strong {
      font-family: "Baloon 2";
      color: ${(props) => props.theme["gray-700"]};
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    p {
      color: ${(props) => props.theme["gray-700"]};
      margin-bottom: 0;
      margin-bottom: 4px;
    }
  }
`;

export const CountContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["purple-300"]};
  border-radius: 0.375rem;
  padding: 0.5rem;

  p {
    margin-bottom: 0;
    color: ${(props) => props.theme["gray-900"]};
    font-weight: 700;
    font-size: 1rem;
  }

  span {
    font-size: 1rem;
    margin-bottom: 0;
    background: none;
    color: ${(props) => props.theme["purple-500"]};
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  background-color: ${(props) => props.theme["purple-700"]};
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
  }
`;
