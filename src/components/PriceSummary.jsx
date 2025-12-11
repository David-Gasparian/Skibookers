import { Button, PricePill } from './ui';
import './PriceSummary.css';

function PriceSummary({ breakdown, onCheckout }) {
  const entries = Object.entries(breakdown).filter(([key]) => key !== 'total');

  return (
    <div className="price-summary">
      <div className="price-summary__header">
        <div>
          <p className="price-summary__eyebrow">Price summary</p>
          <h3 className="price-summary__title">Trip total</h3>
        </div>
        <PricePill label="Total" value={`€${breakdown.total.toLocaleString()}`} />
      </div>

      <dl className="price-summary__list">
        {entries.map(([key, value]) => (
          <div key={key} className="price-summary__row">
            <dt>{key}</dt>
            <dd>€{value.toLocaleString()}</dd>
          </div>
        ))}
      </dl>

      <Button className="primary" onClick={onCheckout}>
        Continue to checkout
      </Button>
    </div>
  );
}

export default PriceSummary;
