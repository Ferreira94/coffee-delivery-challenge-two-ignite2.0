import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    max-width: 4rem;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme["purple-300"]};
    border-radius: 0.375rem;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;

    &:last-child {
      cursor: pointer;
    }

    p {
      margin-bottom: 0;
      font-size: 0.625rem;
      color: ${(props) => props.theme["gray-700"]};
    }

    svg {
      color: ${(props) => props.theme["purple-500"]};
    }

    span {
      font-weight: 700;
      font-size: 1rem;
      color: ${(props) => props.theme["purple-500"]};
      background-color: ${(props) => props.theme["purple-300"]};
      cursor: pointer;
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
