import { useCart } from '../hooks/useCart';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { user } = useContext(AuthContext);
  const { items, totalPrice, clear } = useCart();
  const nav = useNavigate();

  const submit = () => {
    alert(`Pesanan atas nama ${user.name} sebesar Rp${totalPrice} berhasil!`);
    clear();
    nav('/products');
  };

  if (!items.length) return <p>Tidak ada barang untuk checkout</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Checkout</h2>
      <p>Pembeli: {user.name}</p>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.title.slice(0, 30)} x{i.qty} = Rp{(i.price * 15_000 * i.qty).toLocaleString()}
          </li>
        ))}
      </ul>
      <h3>Total: Rp{totalPrice.toLocaleString()}</h3>
      <button onClick={submit}>Bayar</button>
    </div>
  );
}