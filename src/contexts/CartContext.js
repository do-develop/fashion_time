import React, { createContext, useState, useEffect } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  // Cart state
  const [cart, setCart] = useState([]);
  // Item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [totalPrice, setTotalPrice] = useState(0);

  // UPDATE ITEM AMOUNT
  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  },[cart])
  // UPDATE TOTAL PRICE
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) =>{
      return accumulator + (currentItem.price * currentItem.amount);
    }, 0);
    setTotalPrice(total);
  })


  // add to the cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1 }
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if cart item is already in the cart
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear the cart
  const clearCart = () => {
    setCart([]);
  }

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if(cartItem) {
      if(cartItem.amount === 1) {
        removeFromCart(id);
      } else {
        const newCart = [...cart].map((item) => {
          if(item.id === id) {
            return {...item, amount: cartItem.amount - 1};
          }
          return item;
        });
        setCart(newCart);
    }
  }
}

  return (
    <CartContext.Provider value={{
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        increaseAmount, 
        decreaseAmount, 
        itemAmount,
        totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
