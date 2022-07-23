import produce from "immer";
import { createContext, ReactNode, useState, useEffect } from "react";
import { ICoffeeProps } from "../interfaces";

export interface ICartItem extends ICoffeeProps {
  quantity: number;
}

interface ICartContextType {
  cartItems: ICartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addNewProduct: (coffee: ICartItem) => void;
  handleCartItemQuantity: (
    cartItemId: number,
    type: "increment" | "decrement"
  ) => void;
  handleRemoveCartItem: (cartItemId: number) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems:1.0.0";

export const CartContext = createContext({} as ICartContextType);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storagedCartItems) {
      return JSON.parse(storagedCartItems);
    }

    return [];
  });
  const cartQuantity = cartItems.length;
  const cartItemsTotal = cartItems.reduce((total, item) => {
    return total + item.value * item.quantity;
  }, 0);

  function addNewProduct(coffee: ICartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (item) => item.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function handleCartItemQuantity(
    cartItemId: number,
    type: "increment" | "decrement"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increment" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function handleRemoveCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addNewProduct,
        handleCartItemQuantity,
        handleRemoveCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
