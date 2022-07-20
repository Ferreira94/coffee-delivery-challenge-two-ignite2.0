import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 10rem;

  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.desktop} {
    padding: 0 4rem;
  }

  @media ${(props) => props.theme.laptop} {
    padding: 0 2rem;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 1rem;
  }
`;
