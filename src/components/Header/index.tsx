import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartContainer, HeaderContainer } from "./style";

import logo from "/assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>

      <CartContainer>
        <div>
          <MapPin size={22} />
          <p>Jaguarão, RS</p>
        </div>

        <NavLink to="/cart">
          <div>
            <ShoppingCart size={22} />
          </div>
        </NavLink>
      </CartContainer>
    </HeaderContainer>
  );
}
