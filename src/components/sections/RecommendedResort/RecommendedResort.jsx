import Card from '../../ui/Card';
import './RecommendedResort.css';

function RecommendedResort({ resort }) {
  if (!resort) return null;

  return (
    <Card
      title="Recommended resort"
      subtitle="Based on popular picks for similar travelers"
      actions={<span className="resort-rating">★ {resort.rating}</span>}
    >
      <div className="resort-card">
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
