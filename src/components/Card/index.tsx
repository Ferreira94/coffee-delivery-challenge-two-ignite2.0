import { ShoppingCart } from "phosphor-react";
import { useState } from "react";

import { ICardProps } from "../../interfaces";

import {
  CardContainer,
  Footer,
  CountContainer,
  ButtonContainer,
} from "./style";

export function Card({ title, img, label, description, value }: ICardProps) {
  const [count, setCount] = useState(1);

  return (
    <CardContainer>
      <img src={img} />
      <span>{label}</span>
      <strong>{title}</strong>
      <p>{description}</p>
      <Footer>
        <div>
          <p>R$ </p>
          <strong>{value}</strong>
        </div>
        <CountContainer>
          <span onClick={count > 1 ? () => setCount(count - 1) : () => {}}>
            -
          </span>
          <p>{count}</p>
          <span onClick={() => setCount(count + 1)}>+</span>
        </CountContainer>
        <ButtonContainer>
          <ShoppingCart />
        </ButtonContainer>
      </Footer>
    </CardContainer>
  );
}
