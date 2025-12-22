import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useCart } from '../hooks/useCart'; // Import useCart
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Products() {
  const [list, setList] = useState([])
  const [load, setLoad] = useState(true)
  const { totalItems } = useCart(); // Get totalItems
  const nav = useNavigate(); // Get navigate function

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setList(json)
        setLoad(false)
      })
      .catch(() => setLoad(false))
  }, [])

  if (load) return <p>Loading produk...</p>

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2>Produk</h2>
        <button onClick={() => nav('/cart')}>Keranjang 🛒 ({totalItems})</button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 40
        }}
      >
        {list.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
