import { Bank, CreditCard, Money } from "phosphor-react";

import { ContainerCard } from "./style";

interface IPaymentCardProps {
  title: string;
  active: "active" | "not_active";
  form: "credit" | "debit" | "money";
  onClick: () => void;
}

export function PaymentCard({
  title,
  form,
  active,
  onClick,
}: IPaymentCardProps) {
  return (
    <ContainerCard active={active} onClick={onClick}>
      {form === "credit" && <CreditCard />}
      {form === "debit" && <Bank />}
      {form === "money" && <Money />}
      <p>{title}</p>
    </ContainerCard>
  );
}
