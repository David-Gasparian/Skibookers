import { Select } from '../../ui';
import './TripRow.css';

function TripRow({ label, helper, value, options, onChange, priceHint }) {
  return (
    <div className="trip-row">
      <div className="trip-row__info">
        <p className="trip-row__label">{label}</p>
        {helper && <p className="trip-row__helper">{helper}</p>}
      </div>
      <div className="trip-row__actions">
        <Select
          id={`select-${label}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          options={options}
        />
        {priceHint && <span className="trip-row__price">{priceHint}</span>}
      </div>
    </div>
  );
}

export default TripRow;
