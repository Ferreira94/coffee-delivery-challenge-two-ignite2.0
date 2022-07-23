import { ShoppingCart } from "phosphor-react";
import { useState } from "react";

import { ICoffeeProps } from "../../interfaces";
import { useCart } from "../../hooks/useCart";

import {
  CardContainer,
  Footer,
  CountContainer,
  ButtonContainer,
} from "./style";

export function Card({
  id,
  title,
  img,
  label,
  description,
  value,
}: ICoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addNewProduct } = useCart();

  function handleAddToCart() {
    const coffee = {
      id,
      title,
      img,
      label,
      description,
      value,
    };

    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addNewProduct(coffeeToAdd);
  }

  return (
    <CardContainer>
      <img src={img} />
      <div>
        {label && (
          <>
            <label>{label[0]}</label>
            {label[1] && <label>{label[1]}</label>}
            {label[2] && <label>{label[2]}</label>}
          </>
        )}
      </div>
      <strong>{title}</strong>
      <p>{description}</p>
      <Footer>
        <div>
          <p>R$ </p>
          <strong>{value}0</strong>
        </div>
        <CountContainer>
          <span
            onClick={quantity > 1 ? () => setQuantity(quantity - 1) : () => {}}
          >
            -
          </span>
          <p>{quantity}</p>
          <span onClick={() => setQuantity(quantity + 1)}>+</span>
        </CountContainer>
        <ButtonContainer onClick={handleAddToCart}>
          <ShoppingCart />
        </ButtonContainer>
      </Footer>
    </CardContainer>
  );
}
