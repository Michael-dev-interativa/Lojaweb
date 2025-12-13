import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`store-navbar ${open ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <a href='/' className='brand'>
          <img src="/logo.png" alt="Logo da empresa" />
          <span className='title'>Minha Empresa</span>
        </a>

        <button
          className="hamburger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className='nav-links'>
          <a href='#novidades'>Novidades</a>
          <a href='#promocoes'>Promoções</a>
          <a href='#categorias'>Categorias</a>
          <a href='#contato'>Contato</a>
        </nav>

        <div className='actions'>
          <div className='search'>
            <span role="img" aria-label='buscar'>🔍</span>
            <input type="search" placeholder='Buscar produtos...' />
          </div>
          <button className='cart-btn'>
            🛒 Carrinho
            <span className='cart-count'>1</span>
          </button>
        </div>
      </header>

      <main>
        {/* ...conteúdo da sua página... */}
      </main>
    </>
  );
}