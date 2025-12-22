import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, remove, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (!items.length)
    return (
      <div style={{ padding: 16 }}>
        <p>Keranjang kosong</p>
        <button onClick={() => navigate('/products')}>Lanjut Belanja</button>
      </div>
    );

  return (
    <div style={{ padding: 16 }}>
      <h2>
        Keranjang ({totalItems} barang) – Rp{totalPrice.toLocaleString()}
      </h2>
      {items.map((i) => (
        <div
          key={i.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
        >
          <span>{i.title.slice(0, 25)} x{i.qty}</span>
          <button onClick={() => remove(i.id)}>Hapus</button>
        </div>
      ))}
      <div style={{ marginTop: 16 }}>
        <button onClick={() => nav('/checkout')}>Lanjut Checkout</button>
      </div>
    </div>
  );
}