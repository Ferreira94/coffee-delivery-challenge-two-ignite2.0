import { Trash } from "phosphor-react";
import { useState } from "react";

import { ICardProps } from "../../interfaces";

import { CardContainer, CountContainer, InfoCard } from "./style";

export function CartCard({ title, img, value }: ICardProps) {
  const [count, setCount] = useState(1);

  return (
    <CardContainer>
      <InfoCard>
        <img src={img} />
        <div>
          <p>{title}</p>
          <CountContainer>
            <div>
              <span onClick={count > 1 ? () => setCount(count - 1) : () => {}}>
                -
              </span>
              <strong>{count}</strong>
              <span onClick={() => setCount(count + 1)}>+</span>
            </div>

            <div>
              <Trash />
              <p>REMOVER</p>
            </div>
          </CountContainer>
        </div>
      </InfoCard>

      <div>
        <strong>R$ {value}</strong>
      </div>
    </CardContainer>
  );
}
