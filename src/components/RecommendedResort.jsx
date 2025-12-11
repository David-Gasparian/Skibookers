import Card from './ui/Card';
import './RecommendedResort.css';

function RecommendedResort({ resort }) {
  if (!resort) return null;

  const heroImages = {
    'resort-chamonix':
      'https://images.unsplash.com/photo-1517824748781-dc10658c9d62?auto=format&fit=crop&w=900&q=80',
    'resort-st-anton':
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=900&q=80',
  };

  return (
    <Card
      title="Recommended resort"
      subtitle="Based on popular picks for similar travelers"
      actions={<span className="resort-rating">★ {resort.rating}</span>}
    >
      <div className="resort-card">
        <img src={heroImages[resort.id]} alt={resort.name} className="resort-card__image" />
        <div className="resort-card__content">
          <h3>{resort.name}</h3>
          <p>
            {resort.country} · {resort.slopes} km of slopes · {resort.altitude}m base altitude
          </p>
          <p className="resort-card__note">{resort.editable.notes}</p>
        </div>
      </div>
    </Card>
  );
}

export default RecommendedResort;
