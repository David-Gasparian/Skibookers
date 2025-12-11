import './AddOnSelector.css';

function AddOnSelector({ options, selectedIds = [], onChange }) {
  const handleSelectChange = (event) => {
    const values = Array.from(event.target.selectedOptions).map((option) => option.value);
    onChange(values);
  };

  const toggleRemove = (id) => {
    const next = selectedIds.filter((selected) => selected !== id);
    onChange(next);
  };

  return (
    <div className="addon-selector">
      <label className="form-control" htmlFor="add-on-select">
        <span>Add ons</span>
        <select
          id="add-on-select"
          multiple
          value={selectedIds}
          onChange={handleSelectChange}
          size={Math.min(6, options.length)}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name} · €{option.editable.price}
            </option>
          ))}
        </select>
        <span className="form-hint">Hold Ctrl/Cmd to select multiple add ons.</span>
      </label>

      {selectedIds.length > 0 && (
        <div className="addon-chips" aria-label="Selected add ons">
          {selectedIds.map((id) => {
            const addOn = options.find((option) => option.id === id);
            if (!addOn) return null;
            return (
              <button
                key={id}
                type="button"
                className="addon-chip"
                onClick={() => toggleRemove(id)}
                aria-label={`Remove ${addOn.name}`}
              >
                <span>{addOn.name}</span>
                <span className="addon-chip__price">€{addOn.editable.price}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AddOnSelector;
