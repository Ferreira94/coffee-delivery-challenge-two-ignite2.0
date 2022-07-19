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

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  section {
    max-width: 60%;
    margin: 5.875rem 0;

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

  @media ${(props) => props.theme.desktop} {
    flex-direction: column-reverse;

    section {
      margin: 2rem 0;
    }
  }

  img {
    max-width: 40%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-top: 3rem;
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
`;
