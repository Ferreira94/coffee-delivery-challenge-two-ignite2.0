import { Trash } from "phosphor-react";

import { CardContainer, CountContainer, InfoCard } from "./style";
import { ICartItem } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";

export function CartCard({ id, title, img, value, quantity }: ICartItem) {
  const { handleCartItemQuantity, handleRemoveCartItem } = useCart();

  const formattedPrice = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardContainer key={id}>
      <InfoCard>
        <img src={img} />
        <div>
          <p>{title}</p>
          <CountContainer>
            <div>
              <span
                onClick={
                  quantity > 1
                    ? () => handleCartItemQuantity(id, "decrement")
                    : () => {}
                }
              >
                -
              </span>
              <strong>{quantity}</strong>
              <span onClick={() => handleCartItemQuantity(id, "increment")}>
                +
              </span>
            </div>

            <div onClick={() => handleRemoveCartItem(id)}>
              <Trash />
              <p>REMOVER</p>
            </div>
          </CountContainer>
        </div>
      </InfoCard>

      <div>
        <strong>{formattedPrice}</strong>
      </div>
    </CardContainer>
  );
}
