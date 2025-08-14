import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemExist = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemExist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        ...state,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
