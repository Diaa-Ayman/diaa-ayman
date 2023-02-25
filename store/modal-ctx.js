import React, { useState } from "react";

export const ModalContext = React.createContext({
  toggleModal: false,
  showModal: () => {},
  hideModal: () => {},
});

const ModalProvider = (props) => {
  const [toggleAbout, setToggleAbout] = useState(false);
  const showAboutMe = () => {
    setToggleAbout(true);
  };
  const hideAboutMe = () => {
    setToggleAbout(false);
  };

  const modalCtx = {
    toggleModal: toggleAbout,
    showModal: showAboutMe,
    hideModal: hideAboutMe,
  };
  return (
    <ModalContext.Provider value={modalCtx}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
// import CartContext from './cart-context'
// import { useReducer } from 'react'
// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
//   orderDone: false,
// }

// const cartReducer = (state, action) => {

//   if (action.type === 'DONE') {
//     const updatedOrderDone = true
//     return {
//       items: state.items,
//       totalAmount: state.totalAmount,
//       orderDone: updatedOrderDone,
//     }
//   }
//   if (action.type === 'CLEAR') {
//     return defaultCartState
//   }
//   return defaultCartState
// }
// const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   )
//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({ type: 'ADD', item })
//   }
//   const removeFromCartHanlder = (id) => {
//     dispatchCartAction({ type: 'REMOVE', id })
//   }
//   const makeOrderDoneHandler = () => {
//     dispatchCartAction({ type: 'DONE' })
//   }
//   const clearCart = () => {
//     dispatchCartAction({ type: 'CLEAR' })
//   }
//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     orderDone: cartState.orderDone,
//     makeOrderDone: makeOrderDoneHandler,
//     addItem: addItemToCartHandler,
//     removeItem: removeFromCartHanlder,
//     clear: clearCart,
//   }

//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider
