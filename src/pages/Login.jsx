import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    setError('');

    // Validasi nama
    if (!name.trim()) {
      setError('Nama tidak boleh kosong');
      return;
    }

    // Validasi password
    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    login(name);
    nav('/products');
  };

  return (
    <form onSubmit={handle} style={{ maxWidth: 300, margin: '4rem auto' }}>
      <h2>Masuk</h2>
      <input
        placeholder="Nama kamu"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
