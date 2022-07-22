import styled from "styled-components";

const STATUS_COLORS = {
  gold: "yellow-700",
  yellow: "yellow-500",
  purple: "purple-500",
} as const;

interface IStatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const ConfirmContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  section {
    max-width: 60%;

    h2 {
      font-size: 2.5rem;
      font-weight: 800;
      font-family: "Baloo 2";
      line-height: 4.025rem;
      color: ${(props) => props.theme["yellow-700"]};
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

export const InfoDelivery = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2.5rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["yellow-500"]},
        ${(props) => props.theme["purple-500"]}
      )
      border-box;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      p,
      strong {
        font-size: 1rem;
        margin: 0;
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1rem;
    margin-top: 1rem;
    gap: 1rem;

    div {
      div {
        p,
        strong {
          font-size: 0.625rem;
        }
      }
    }
  }
`;

export const IconContainer = styled.div<IStatusProps>`
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};

  @media ${(props) => props.theme.mobile} {
    padding: 0.25rem;
  }
`;
