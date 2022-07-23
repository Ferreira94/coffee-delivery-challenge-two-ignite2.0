import { useState } from "react";
import { CurrencyDollar, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { CartCard, PaymentCard } from "../../components";
import { useCart } from "../../hooks/useCart";

import {
  CartContainer,
  AddressContainer,
  ProductsContainer,
  Input,
  AddressInput,
  CityInput,
  ContainerInput,
  StateInput,
  ContainerInputs,
  PaymentContainer,
  Line,
  TotalContainer,
  CardContainer,
} from "./style";

export function Cart() {
  const [payment, setPayment] = useState("credit");
  const { cartItems, cartItemsTotal } = useCart();
  const deliveryPrice = 3.5;
  const totalPrice = cartItemsTotal + deliveryPrice;

  const formattedItemsTotal = cartItemsTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const formattedDeliveryPrice = deliveryPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const formattedTotalPrice = totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CartContainer>
      <AddressContainer>
        <strong>Complete seu pedido</strong>
        <section>
          <div>
            <MapPin size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <ContainerInputs>
            <Input placeholder="CEP" />
            <AddressInput placeholder="Endereço" />
            <div>
              <Input placeholder="Número" />
              <ContainerInput>
                <input placeholder="Complemento" />
                <p>Opcional</p>
              </ContainerInput>
            </div>
            <Input placeholder="Bairro" />
            <CityInput placeholder="Cidade" />
            <StateInput placeholder="UF" />
          </ContainerInputs>
        </section>

        <section>
          <div>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <PaymentContainer>
            <PaymentCard
              title="Cartão de Crédito"
              form="credit"
              active={payment === "credit" ? "active" : "not_active"}
              onClick={() => setPayment("credit")}
            />
            <PaymentCard
              title="Cartão de Débito"
              form="debit"
              active={payment === "debit" ? "active" : "not_active"}
              onClick={() => setPayment("debit")}
            />
            <PaymentCard
              title="Dinheiro"
              form="money"
              active={payment === "money" ? "active" : "not_active"}
              onClick={() => setPayment("money")}
            />
          </PaymentContainer>
        </section>
      </AddressContainer>

      <ProductsContainer>
        <strong>Cafés selecionados</strong>
        {cartItems.length > 0 ? (
          <section>
            {cartItems.map((item) => (
              <CardContainer key={item.id}>
                <CartCard
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  description={item.description}
                  label={item.label}
                  value={item.value}
                  quantity={item.quantity}
                />
                <Line />
              </CardContainer>
            ))}

            <TotalContainer>
              <div>
                <span>Total de itens</span>
                <p>{formattedItemsTotal}</p>
              </div>
              <div>
                <span>Entrega</span>
                <p>{formattedDeliveryPrice}</p>
              </div>
              <div>
                <strong>Total</strong>
                <strong>{formattedTotalPrice}</strong>
              </div>

              <NavLink to="/confirm">
                <button>Confirmar pedido</button>
              </NavLink>
            </TotalContainer>
          </section>
        ) : (
          <section>
            <div>
              <strong>Nenhum café selecionado</strong>
              <p>
                Volte para a página inicial e selecione quais cafés você deseja
              </p>
              <NavLink to="/">
                <button>Página Inicial</button>
              </NavLink>
            </div>
          </section>
        )}
      </ProductsContainer>
    </CartContainer>
  );
}
