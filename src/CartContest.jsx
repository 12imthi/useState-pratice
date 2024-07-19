// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalAmount: state.totalAmount + action.payload.price,
          totalQuantity: state.totalQuantity + 1
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalAmount: state.totalAmount + action.payload.price,
          totalQuantity: state.totalQuantity + 1
        };
      }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (itemToRemove.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          totalAmount: state.totalAmount - itemToRemove.price,
          totalQuantity: state.totalQuantity - 1
        };
      } else {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalAmount: state.totalAmount - itemToRemove.price,
          totalQuantity: state.totalQuantity - 1
        };
      }
    default:
      return state;
  }
};

const initialCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
