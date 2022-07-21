import { CurrencyDollar, MapPin } from "phosphor-react";
import { useState } from "react";
import { PaymentCard } from "../../components";

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
} from "./style";

export function Cart() {
  const [payment, setPayment] = useState("credit");

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
        <section></section>
      </ProductsContainer>
    </CartContainer>
  );
}
