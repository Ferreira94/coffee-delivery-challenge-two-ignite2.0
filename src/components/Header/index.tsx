import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartContainer, HeaderContainer, CartQuantity } from "./style";

import { useCart } from "../../hooks/useCart";
import logo from "/assets/logo.svg";

export function Header() {
  const { cartQuantity } = useCart();

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
        {cartQuantity > 0 && (
          <CartQuantity>
            <p>{cartQuantity}</p>
          </CartQuantity>
        )}
      </CartContainer>
    </HeaderContainer>
  );
}
