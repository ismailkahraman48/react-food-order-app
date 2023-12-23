import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // Eklenmek istenen ürün state içerisinde bulunuyorsa index yoksa -1 verir.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];

        // Daha önceden eklenmiş ürünü quantity propu vererek gönderecek. (örn : Margarita x2)
        const updatedItem = {
            ...existingItem, // halihazırda ekli olan ürünü bulur
            quantity : existingItem.quantity + 1
        }

        updatedItems[existingCartItemIndex] = updatedItem; // 1 den fazla eklenen ürünü güncelle.

    } else {
        updatedItems.push({...action.item, qunatity : 1}) // eklenememiş ürünü al quntity 1 olarak gönder.
    }

    return {...state, items: updatedItems}
  }

  if (action.type === "REMOVE_ITEM") {
    // delete meal from the state
  }

  // if any action
  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
