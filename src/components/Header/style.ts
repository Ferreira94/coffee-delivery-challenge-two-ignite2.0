import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  @media ${(props) => props.theme.mobile} {
    padding: 1rem 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  div {
    padding: 0.5rem;
    border-radius: 0.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media ${(props) => props.theme.mobile} {
      padding: 0.325rem;
    }

    &:first-child {
      gap: 0.25rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme["purple-700"]};
      background-color: ${(props) => props.theme["purple-300"]};

      @media ${(props) => props.theme.mobile} {
        font-size: 0.625rem;
      }
    }

    &:last-child {
      color: ${(props) => props.theme["yellow-700"]};
      background-color: ${(props) => props.theme["yellow-300"]};
    }
  }
`;

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1.25rem;
  max-height: 1.25rem;
  border-radius: 50% !important;
  background-color: ${(props) => props.theme["yellow-700"]} !important;
  color: ${(props) => props.theme.white} !important;
  font-size: 0.625rem;
  font-weight: 700;
  margin-left: -24px;
  margin-top: -8px;

  @media ${(props) => props.theme.mobile} {
    max-width: 1rem;
    max-height: 1rem;
  }
`;
