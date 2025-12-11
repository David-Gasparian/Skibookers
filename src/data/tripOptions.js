const resorts = [
  {
    id: 'resort-chamonix',
    name: 'Chamonix',
    country: 'France',
    altitude: 1035,
    slopes: 150,
    rating: 4.8,
    editable: {
      basePrice: 450,
      availableDates: ['2025-01-12', '2025-02-02', '2025-03-16'],
      notes: 'Family friendly with glacier views.',
    },
  },
  {
    id: 'resort-st-anton',
    name: 'St. Anton',
    country: 'Austria',
    altitude: 1304,
    slopes: 305,
    rating: 4.7,
    editable: {
      basePrice: 520,
      availableDates: ['2025-01-26', '2025-02-09', '2025-03-02'],
      notes: 'Great après-ski and challenging terrain.',
    },
  },
];

const hotels = [
  {
    id: 'hotel-alpine-lodge',
    name: 'Alpine Lodge',
    resortId: 'resort-chamonix',
    stars: 4,
    distanceToLift: '5 min walk',
    amenities: ['spa', 'wifi', 'breakfast'],
    editable: {
      nightlyRate: 210,
      roomsAvailable: 12,
      cancellationPolicy: 'Free cancellation up to 7 days before arrival.',
    },
  },
  {
    id: 'hotel-mountain-crest',
    name: 'Mountain Crest',
    resortId: 'resort-st-anton',
    stars: 5,
    distanceToLift: 'Ski-in/ski-out',
    amenities: ['spa', 'wifi', 'half-board'],
    editable: {
      nightlyRate: 310,
      roomsAvailable: 8,
      cancellationPolicy: '50% refund up to 14 days before arrival.',
    },
  },
];

const roomBoards = [
  {
    id: 'board-standard',
    label: 'Standard',
    includes: ['Breakfast'],
    editable: {
      surcharge: 0,
      description: 'Continental breakfast and daily room service.',
    },
  },
  {
    id: 'board-half',
    label: 'Half Board',
    includes: ['Breakfast', 'Dinner'],
    editable: {
      surcharge: 35,
      description: 'Two-course dinner with flexible seating times.',
    },
  },
  {
    id: 'board-full',
    label: 'Full Board',
    includes: ['Breakfast', 'Lunch', 'Dinner'],
    editable: {
      surcharge: 60,
      description: 'Three meals daily with mountain picnic options.',
    },
  },
];

const skipasses = [
  {
    id: 'skipass-3day',
    durationDays: 3,
    coverage: 'Local area',
    editable: {
      price: 180,
      refundable: true,
      notes: 'Includes night skiing on Fridays.',
    },
  },
  {
    id: 'skipass-6day',
    durationDays: 6,
    coverage: 'Full region',
    editable: {
      price: 320,
      refundable: false,
      notes: 'Add €20 for insurance upgrade.',
    },
  },
];

const transfers = [
  {
    id: 'transfer-shuttle',
    type: 'Shared Shuttle',
    frequency: 'Every 60 min',
    editable: {
      pricePerPerson: 45,
      pickupLocations: ['Geneva Airport', 'Geneva Train Station'],
      durationMinutes: 80,
    },
  },
  {
    id: 'transfer-private',
    type: 'Private Van',
    frequency: 'On request',
    editable: {
      pricePerVehicle: 220,
      passengerCapacity: 6,
      durationMinutes: 70,
    },
  },
];

const flights = [
  {
    id: 'flight-gva-lhr',
    route: 'London (LHR) → Geneva (GVA)',
    carrier: 'Swiss',
    editable: {
      baseFare: 185,
      baggageAllowanceKg: 23,
      upgradeOptions: ['Extra legroom', 'Premium seat'],
    },
  },
  {
    id: 'flight-nyc-zrh',
    route: 'New York (JFK) → Zurich (ZRH)',
    carrier: 'Delta',
    editable: {
      baseFare: 520,
      baggageAllowanceKg: 23,
      upgradeOptions: ['Comfort+', 'Business'],
    },
  },
];

const insurancePlans = [
  {
    id: 'insurance-basic',
    name: 'Basic Cover',
    coverage: ['Medical', 'Trip delay'],
    editable: {
      price: 28,
      deductible: 150,
      notes: 'Covers on-piste skiing only.',
    },
  },
  {
    id: 'insurance-plus',
    name: 'Adventure Plus',
    coverage: ['Medical', 'Cancellation', 'Off-piste'],
    editable: {
      price: 45,
      deductible: 100,
      notes: 'Includes off-piste with a guide.',
    },
  },
];

const addOns = [
  {
    id: 'addon-lesson',
    name: 'Group Lesson Pack',
    type: 'Lessons',
    editable: {
      price: 95,
      sessions: 3,
      instructorLanguages: ['English', 'French'],
    },
  },
  {
    id: 'addon-gear',
    name: 'Premium Gear Rental',
    type: 'Equipment',
    editable: {
      price: 70,
      durationDays: 3,
      notes: 'Includes skis/snowboard, boots, and helmet.',
    },
  },
  {
    id: 'addon-spa',
    name: 'Spa Access',
    type: 'Wellness',
    editable: {
      price: 30,
      durationDays: 1,
      notes: 'Unlimited access to sauna and pool for one day.',
    },
  },
];

const tripOptions = {
  resorts,
  hotels,
  roomBoards,
  skipasses,
  transfers,
  flights,
  insurancePlans,
  addOns,
};

export default tripOptions;
