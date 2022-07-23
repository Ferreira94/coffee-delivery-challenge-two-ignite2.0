import { useState } from "react";
import { CurrencyDollar, MapPin } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import { CartCard, Form, PaymentCard } from "../../components";
import { useCart } from "../../hooks/useCart";

import {
  CartContainer,
  AddressContainer,
  ProductsContainer,
  PaymentContainer,
  Line,
  TotalContainer,
  CardContainer,
} from "./style";

export type IConfirmFormData = zod.infer<typeof confirmFormValidationSchema>;

const confirmFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe um CEP válido"),
  address: zod.string().min(1, "Informe o Endereço"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod
    .string()
    .min(2, "Informe uma UF válida")
    .max(2, "Informe uma UF válida"),
});

export function Cart() {
  const {
    cartItems,
    cartItemsTotal,
    cartPaymentMethod,
    changePaymentMethod,
    cleanCart,
  } = useCart();
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

  const confirmForm = useForm<IConfirmFormData>({
    resolver: zodResolver(confirmFormValidationSchema),
  });

  const { handleSubmit } = confirmForm;
  const navigate = useNavigate();

  function handleConfirm(data: IConfirmFormData) {
    cleanCart();

    navigate("/confirm", {
      state: data,
    });
  }

  return (
    <CartContainer>
      <form onSubmit={handleSubmit(handleConfirm)}>
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
            <FormProvider {...confirmForm}>
              <Form />
            </FormProvider>
          </section>

          <section>
            <div>
              <CurrencyDollar size={22} />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <PaymentContainer>
              <PaymentCard
                title="Cartão de Crédito"
                form="credit"
                active={
                  cartPaymentMethod === "credit" ? "active" : "not_active"
                }
                onClick={() => changePaymentMethod("credit")}
              />
              <PaymentCard
                title="Cartão de Débito"
                form="debit"
                active={cartPaymentMethod === "debit" ? "active" : "not_active"}
                onClick={() => changePaymentMethod("debit")}
              />
              <PaymentCard
                title="Dinheiro"
                form="money"
                active={cartPaymentMethod === "money" ? "active" : "not_active"}
                onClick={() => changePaymentMethod("money")}
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

                <button type="submit">Confirmar pedido</button>
              </TotalContainer>
            </section>
          ) : (
            <section>
              <div>
                <strong>Nenhum café selecionado</strong>
                <p>
                  Volte para a página inicial e selecione quais cafés você
                  deseja
                </p>
                <NavLink to="/">
                  <button>Página Inicial</button>
                </NavLink>
              </div>
            </section>
          )}
        </ProductsContainer>
      </form>
    </CartContainer>
  );
}
