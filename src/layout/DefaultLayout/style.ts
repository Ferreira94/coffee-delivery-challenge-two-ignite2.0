import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0 10rem;

  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.laptop} {
    padding: 0 2rem;
  }
`;
