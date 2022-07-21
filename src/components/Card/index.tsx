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
      <div>
        <label>{label[0]}</label>
        {label[1] && <label>{label[1]}</label>}
        {label[2] && <label>{label[2]}</label>}
      </div>
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
