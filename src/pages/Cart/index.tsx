import { CurrencyDollar, MapPin } from "phosphor-react";
import { useState } from "react";
import { CartCard, PaymentCard } from "../../components";
import { coffee } from "../../utils";

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
        <section>
          <CartCard
            title={coffee[0].title}
            img={coffee[0].img}
            value={coffee[0].value}
          />
          <Line />
          <CartCard
            title={coffee[1].title}
            img={coffee[1].img}
            value={coffee[1].value}
          />
          <Line />

          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <p>R$ 29,70</p>
            </div>
            <div>
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>

            <button>Confirmar pedido</button>
          </TotalContainer>
        </section>
      </ProductsContainer>
    </CartContainer>
  );
}
