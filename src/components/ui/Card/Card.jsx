import './Card.css';

function Card({ title, children }) {
  return (
    <section className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{children}</p>
    </section>
  );
}

export default Card;
