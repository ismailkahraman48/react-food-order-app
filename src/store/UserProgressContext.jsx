import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckOut: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState();

  const showCart = () => {
    setUserProgress('cart')
  }
  const hideCart = () => {
    setUserProgress('')
  }
  const showCheckout = () => {
    setUserProgress('checkout')
  }
  const hideCheckOut = () => {
    setUserProgress('')
  }

  const userProgressCtx = {
    progress : userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckOut
  }

  return (
    <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
  );
}

export default UserProgressContext;
