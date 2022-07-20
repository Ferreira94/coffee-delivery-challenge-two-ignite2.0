import { MapPin } from "phosphor-react";
import { CartContainer, AddressContainer, ProductsContainer } from "./style";

export function Cart() {
  return (
    <CartContainer>
      <AddressContainer>
        <strong>Complete seu pedido</strong>
        <section>
          <div>
            <MapPin />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <input placeholder="CEP" />
            <input placeholder="Endereço" />
            <div>
              <input placeholder="Número" />
              <input placeholder="Complemento" />
            </div>
            <div>
              <input placeholder="Bairro" />
              <input placeholder="Cidade" />
              <input placeholder="UF" />
            </div>
          </div>
        </section>

        <section></section>
      </AddressContainer>

      <ProductsContainer>
        <strong>Cafés selecionados</strong>
        <section></section>
      </ProductsContainer>
    </CartContainer>
  );
}
