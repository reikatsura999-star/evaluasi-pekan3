import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Debug log: pantau perubahan state items
  useEffect(() => {
    console.log('Current Cart Items:', items);
  }, [items]);

  const add = (product) => {
    console.log('Adding product:', product);
    setItems((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        console.log('Increasing quantity');
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      console.log('New item');
      return [...prev, { ...product, qty: 1 }];
    });
    alert('Berhasil masuk keranjang!'); // Feedback untuk user
  };

  const remove = (id) => {
    console.log('Removing id:', id);
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clear = () => setItems([]);
  const totalPrice = items.reduce((s, i) => s + (i.price * 15_000) * i.qty, 0);
  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, add, remove, clear, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};