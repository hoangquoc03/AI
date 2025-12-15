import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
  cartItems: number[];
  addToCart: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCartItems((prev) => [...prev, id]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
