import styled from "styled-components";

const IS_ACTIVE = {
  active: "purple-300",
  not_active: "gray-400",
} as const;

interface ICardPaymentProps {
  active: keyof typeof IS_ACTIVE;
}

export const ContainerCard = styled.div<ICardPaymentProps>`
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 11.125rem;
  height: 3.125rem;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme[IS_ACTIVE[props.active]]};
  border-radius: 0.375rem;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`;
