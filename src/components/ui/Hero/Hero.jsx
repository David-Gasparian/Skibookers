import './Hero.css';

function Hero({ brand, tagline }) {
  return (
    <header className="hero">
      <div className="brand">{brand}</div>
      <p className="tagline">{tagline}</p>
    </header>
  );
}

export default Hero;
