import React, { useMemo, useState } from 'react';
import { Button, Hero } from './components/ui';
import tripOptions from './data/tripOptions';
import TripRow from './components/TripRow';
import AddOnSelector from './components/AddOnSelector';
import PriceSummary from './components/PriceSummary';
import RecommendedResort from './components/RecommendedResort';
import RecommendedForYou from './components/RecommendedForYou';
import { getTripBreakdown, TRIP_DETAILS, formatCurrency } from './utils/pricing';
import './components/ui/ui.css';
import './App.css';

const { resorts, hotels, roomBoards, skipasses, transfers, flights, insurancePlans, addOns } = tripOptions;

const defaultTripState = {
  resort: resorts[0]?.id,
  hotel: hotels[0]?.id,
  roomBoard: roomBoards[0]?.id,
  skipass: skipasses[0]?.id,
  transfer: transfers[0]?.id,
  flight: flights[0]?.id,
  insurance: insurancePlans[0]?.id,
  addOns: [addOns[0]?.id].filter(Boolean),
};

function App() {
  const [trip, setTrip] = useState(defaultTripState);

  const selectedTrip = useMemo(() => {
    const findById = (items, id) => items.find((item) => item.id === id);
    return {
      resort: findById(resorts, trip.resort),
      hotel: findById(hotels, trip.hotel),
      roomBoard: findById(roomBoards, trip.roomBoard),
      skipass: findById(skipasses, trip.skipass),
      transfer: findById(transfers, trip.transfer),
      flight: findById(flights, trip.flight),
      insurance: findById(insurancePlans, trip.insurance),
      addOns: trip.addOns
        .map((id) => findById(addOns, id))
        .filter(Boolean),
    };
  }, [trip]);

  const pricing = useMemo(
    () =>
      getTripBreakdown({
        ...selectedTrip,
        addOns: trip.addOns,
        addOnOptions: addOns,
      }),
    [selectedTrip, trip.addOns]
  );

  const recommendedResort = useMemo(
    () => resorts.reduce((best, current) => (current.rating > (best?.rating ?? 0) ? current : best), null),
    []
  );

  const handleCheckout = () => {
    alert('Checkout flow would start here.');
  };

  return (
    <div className="app">
      <Hero
        brand="Skibookers"
        tagline="Personalize your ski break with live prices and smart suggestions."
        ctaLabel="Start planning"
      />

      <div className="layout">
        <div className="main-area">
          <RecommendedResort resort={recommendedResort} />

          <div className="section-header">
            <div>
              <p className="eyebrow">Trip package overview</p>
              <h1>Customize your winter escape</h1>
              <p className="muted">
                Edit every line item below. {TRIP_DETAILS.nights} nights, {TRIP_DETAILS.guests} travelers by default.
              </p>
            </div>
            <Button className="ghost" onClick={() => setTrip(defaultTripState)}>
              Reset to defaults
            </Button>
          </div>

          <div className="card-grid">
            <TripRow
              label="Resort"
              helper="Change to explore other mountains"
              value={trip.resort}
              options={resorts.map((resort) => ({
                value: resort.id,
                label: `${resort.name} · ${resort.country}`,
              }))}
              onChange={(value) => setTrip({ ...trip, resort: value })}
              priceHint={formatCurrency(selectedTrip.resort?.editable?.basePrice ?? 0)}
            />

            <TripRow
              label="Hotel"
              helper={`Nightly rate · ${TRIP_DETAILS.nights} nights included`}
              value={trip.hotel}
              options={hotels.map((hotel) => ({
                value: hotel.id,
                label: `${hotel.name} · ${hotel.distanceToLift}`,
              }))}
              onChange={(value) => setTrip({ ...trip, hotel: value })}
              priceHint={formatCurrency(selectedTrip.hotel?.editable?.nightlyRate ?? 0) + ' / night'}
            />

            <TripRow
              label="Room & Board"
              helper="Choose your meal plan"
              value={trip.roomBoard}
              options={roomBoards.map((board) => ({ value: board.id, label: board.label }))}
              onChange={(value) => setTrip({ ...trip, roomBoard: value })}
              priceHint={formatCurrency(selectedTrip.roomBoard?.editable?.surcharge ?? 0) + ' pp/night'}
            />

            <TripRow
              label="Skipass"
              helper="Adjust duration and coverage"
              value={trip.skipass}
              options={skipasses.map((pass) => ({
                value: pass.id,
                label: `${pass.durationDays} days · ${pass.coverage}`,
              }))}
              onChange={(value) => setTrip({ ...trip, skipass: value })}
              priceHint={formatCurrency(selectedTrip.skipass?.editable?.price ?? 0)}
            />

            <TripRow
              label="Transfer"
              helper="Select how you get to the resort"
              value={trip.transfer}
              options={transfers.map((transfer) => ({
                value: transfer.id,
                label: `${transfer.type} (${transfer.frequency})`,
              }))}
              onChange={(value) => setTrip({ ...trip, transfer: value })}
              priceHint={formatCurrency(selectedTrip.transfer?.editable?.pricePerPerson ?? selectedTrip.transfer?.editable?.pricePerVehicle ?? 0)}
            />

            <TripRow
              label="Flight"
              helper="Modify route and carrier"
              value={trip.flight}
              options={flights.map((flight) => ({ value: flight.id, label: `${flight.route} · ${flight.carrier}` }))}
              onChange={(value) => setTrip({ ...trip, flight: value })}
              priceHint={formatCurrency(selectedTrip.flight?.editable?.baseFare ?? 0) + ' pp'}
            />

            <TripRow
              label="Insurance"
              helper="Add the right cover"
              value={trip.insurance}
              options={insurancePlans.map((plan) => ({ value: plan.id, label: plan.name }))}
              onChange={(value) => setTrip({ ...trip, insurance: value })}
              priceHint={formatCurrency(selectedTrip.insurance?.editable?.price ?? 0) + ' pp'}
            />

            <div className="add-ons-row">
              <p className="trip-row__label">Add ons</p>
              <AddOnSelector
                options={addOns}
                selectedIds={trip.addOns}
                onChange={(values) => setTrip({ ...trip, addOns: values })}
              />
            </div>
          </div>

          <RecommendedForYou trip={{ ...selectedTrip, addOns: trip.addOns }} />
        </div>

        <aside className="sidebar">
          <PriceSummary breakdown={pricing} onCheckout={handleCheckout} />
        </aside>
      </div>
    </div>
  );
}

export default App;
