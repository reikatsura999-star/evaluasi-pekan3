import { useCart } from '../hooks/useCart';

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: 6,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ height: 120, objectFit: 'contain' }}
      />
      <h4 style={{ fontSize: 14, margin: '8px 0' }}>{product.title}</h4>
      <p>Rp{(product.price * 15_000).toLocaleString()}</p>{' '}
      {/* asumsi 1 USD = 15k IDR */}
      <button onClick={() => {
        console.log('Clicked add for:', product);
        add(product);
      }}>+ Keranjang</button>
    </div>
  );
}