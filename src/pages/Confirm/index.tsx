import { ConfirmContainer, InfoDelivery, IconContainer } from "./style";

import imgBanner from "/assets/bannerConfirm.svg";
import { MapPin, Timer, Money } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { IConfirmFormData } from "../Cart/index";
import { useCart } from "../../hooks/useCart";

interface ILocationProps {
  state: IConfirmFormData;
}

export function Confirm() {
  const { state } = useLocation() as unknown as ILocationProps;
  const { cartPaymentMethod } = useCart();

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
                Entrega em{" "}
                <strong>
                  {state.address}, {state.number}
                </strong>
              </p>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
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
              {cartPaymentMethod === "credit" && (
                <strong>Cartão de Crédito</strong>
              )}
              {cartPaymentMethod === "debit" && (
                <strong>Cartão de Débito</strong>
              )}
              {cartPaymentMethod === "money" && <strong>Dinheiro</strong>}
            </div>
          </div>
        </InfoDelivery>
      </section>

      <img src={imgBanner} alt="" />
    </ConfirmContainer>
  );
}
