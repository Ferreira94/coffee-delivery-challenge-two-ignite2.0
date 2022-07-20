import styled from "styled-components";

const STATUS_COLORS = {
  gold: "yellow-700",
  yellow: "yellow-500",
  gray: "gray-700",
  purple: "purple-500",
} as const;

interface IStatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const IntroductionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  section {
    max-width: 60%;
    margin: 5.875rem auto;

    h2 {
      font-size: 2.5rem;
      font-weight: 800;
      font-family: "Baloo 2";
      line-height: 4.025rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  img {
    max-width: 40%;
  }

  @media ${(props) => props.theme.desktop} {
    flex-direction: column-reverse;

    section {
      max-width: 100%;
      margin: 2rem auto;
    }

    img {
      max-width: 100%;
    }
  }

  @media ${(props) => props.theme.laptop} {
    section {
      text-align: center;

      h2 {
        font-size: 1.8rem;
        line-height: 2.5rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.25rem;
        margin-top: 0.5rem;
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    section {
      margin-top: 1rem;

      h2 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }

      p {
        font-size: 0.8rem;
        line-height: 1rem;
        margin-top: 0.5rem;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-top: 3rem;

  @media ${(props) => props.theme.laptop} {
    justify-content: center;
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 1.5rem;
  }
`;

export const InfoItem = styled.div<IStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.825rem;
  min-width: 14.5rem;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  @media ${(props) => props.theme.laptop} {
    width: 295px;
  }

  @media ${(props) => props.theme.mobile} {
    min-width: 100%;

    span {
      font-size: 0.8rem;
    }
  }
`;
