import './index.css';

const produtos = [
  { id: 1, nome: 'PRODUTO 1' },
  { id: 2, nome: 'PRODUTO 2' },
  { id: 3, nome: 'PRODUTO 3' },
  { id: 4, nome: 'PRODUTO 4' },
];

export default function App() {
  return (
    <>
      <div className='navbar-wrapper'>
        <header className="store-navbar">
          <a href='/' className='brand'>
            <img src="/logo.png" alt="Logo da empresa" />
            <span className='title'>Minha Empresa</span>
          </a>
          <nav className='nav-links'>
            <a href='#novidades'>Novidades</a>
            <a href='#promocoes'>Promoções</a>
            <a href='#categorias'>Categorias</a>
            <a href='#contato'>Contato</a>
          </nav>
          <div className='actions'>
            <button className='cart-btn'>
              🛒 Carrinho
              <span className='cart-count'>1</span>
            </button>
          </div>
        </header>
      </div>
      <main className="hero-main">
        <div className="hero-bg" />
        <section className="products-grid">
          {produtos.map(produto => (
            <div className="product-card" key={produto.id}>
              <div className="product-image"></div>
              <div className="product-title">{produto.nome}</div>
              <button className="buy-btn">Comprar</button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}