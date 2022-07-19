import { MapPin, ShoppingCart } from "phosphor-react";
import { CartContainer, HeaderContainer } from "./style";

import logo from "/assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />

      <CartContainer>
        <div>
          <MapPin size={22} />
          <p>Jaguarão, RS</p>
        </div>

        <div>
          <ShoppingCart size={22} />
        </div>
      </CartContainer>
    </HeaderContainer>
  );
}
