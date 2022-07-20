import styled from "styled-components";

export const HomeContainer = styled.main`
  h2 {
    margin-bottom: 3.375rem;

    @media ${(props) => props.theme.laptop} {
      text-align: center;
    }
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${(props) => props.theme.laptop} {
    justify-content: center;
  }
`;
