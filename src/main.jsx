import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>   {/* semua komponen BUTUH cart HARUS di DALAM sini */}
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);