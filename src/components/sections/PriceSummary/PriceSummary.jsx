import { Button, PricePill } from '../../ui';
import './PriceSummary.css';

function PriceSummary({ breakdown, tripDetails, onCheckout }) {
  const entries = Object.entries(breakdown).filter(([key]) => key !== 'total');

  const suffixFor = (key) => {
    const nights = tripDetails?.nights;
    const guests = tripDetails?.guests;

    if (key === 'roomBoard' && nights && guests) return ` (${nights} nights · ${guests} travelers)`;
    if (key === 'hotel' && nights) return ` (${nights} nights)`;
    if (['flight', 'insurance', 'addOns'].includes(key) && guests > 1) return ` (${guests} travelers)`;
    return '';
  };

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
            <dd>
              €{value.toLocaleString()}
              {suffixFor(key)}
            </dd>
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
