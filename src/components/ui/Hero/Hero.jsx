import Button from '../Button';
import './Hero.css';

function Hero({ brand, tagline, ctaLabel }) {
  return (
    <header className="hero">
      <div className="brand">{brand}</div>
      <p className="tagline">{tagline}</p>
      <Button>{ctaLabel}</Button>
    </header>
  );
}

export default Hero;
