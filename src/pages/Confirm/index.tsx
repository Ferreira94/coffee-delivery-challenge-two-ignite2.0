import { ConfirmContainer, InfoDelivery, IconContainer } from "./style";

import imgBanner from "/assets/bannerConfirm.svg";
import { MapPin, Timer, Money } from "phosphor-react";

export function Confirm() {
  return (
    <ConfirmContainer>
      <section>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InfoDelivery>
          <div>
            <IconContainer statusColor="purple">
              <MapPin />
            </IconContainer>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <IconContainer statusColor="yellow">
              <Timer />
            </IconContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </div>
          </div>
          <div>
            <IconContainer statusColor="gold">
              <Money />
            </IconContainer>
            <div>
              <p>Pagamento na entrega </p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </InfoDelivery>
      </section>

      <img src={imgBanner} alt="" />
    </ConfirmContainer>
  );
}
