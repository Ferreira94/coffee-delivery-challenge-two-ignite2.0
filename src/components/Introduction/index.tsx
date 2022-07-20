import { InfoContainer, InfoItem, IntroductionContainer } from "./style";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import imgBanner from "/assets/banner.svg";

export function Introduction() {
  return (
    <IntroductionContainer>
      <section>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <InfoContainer>
          <InfoItem statusColor="gold">
            <div>
              <ShoppingCart />
            </div>
            <span>Compra simples e segura</span>
          </InfoItem>

          <InfoItem statusColor="gray">
            <div>
              <Package />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </InfoItem>

          <InfoItem statusColor="yellow">
            <div>
              <Timer />
            </div>
            <span>Entrega rápida e rastreada</span>
          </InfoItem>

          <InfoItem statusColor="purple">
            <div>
              <Coffee />
            </div>
            <span>O café chega fresquinho até você</span>
          </InfoItem>
        </InfoContainer>
      </section>

      <img src={imgBanner} alt="" />
    </IntroductionContainer>
  );
}
