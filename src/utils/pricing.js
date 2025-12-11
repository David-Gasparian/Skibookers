const TRIP_DETAILS = {
  guests: 2,
  nights: 5,
};

const formatCurrency = (value) => `€${value.toLocaleString()}`;

const calcResortPrice = (resort) => resort?.editable?.basePrice ?? 0;

const calcHotelPrice = (hotel) => {
  if (!hotel?.editable?.nightlyRate) return 0;
  return hotel.editable.nightlyRate * TRIP_DETAILS.nights;
};

const calcRoomBoardPrice = (board) => {
  if (!board?.editable?.surcharge) return 0;
  return board.editable.surcharge * TRIP_DETAILS.nights * TRIP_DETAILS.guests;
};

const calcSkipassPrice = (skipass) => skipass?.editable?.price ?? 0;

const calcTransferPrice = (transfer) => {
  if (!transfer) return 0;
  if (transfer.editable?.pricePerPerson) {
    return transfer.editable.pricePerPerson * TRIP_DETAILS.guests;
  }
  return transfer.editable?.pricePerVehicle ?? 0;
};

const calcFlightPrice = (flight) => {
  if (!flight?.editable?.baseFare) return 0;
  return flight.editable.baseFare * TRIP_DETAILS.guests;
};

const calcInsurancePrice = (plan) => (plan?.editable?.price ?? 0) * TRIP_DETAILS.guests;

const calcAddOnPrice = (selectedIds, addOns) => {
  const lookup = new Map(addOns.map((item) => [item.id, item]));
  
  return selectedIds.reduce((total, id) => {
    const addOn = lookup.get(id);
    if (!addOn) return total;
    
    return total + addOn.editable.price * TRIP_DETAILS.guests;
  }, 0);
};

const getTripBreakdown = ({
  resort,
  hotel,
  roomBoard,
  skipass,
  transfer,
  flight,
  insurance,
  addOns = [],
  addOnOptions = [],
}) => {
  const breakdown = {
    resort: calcResortPrice(resort),
    hotel: calcHotelPrice(hotel),
    roomBoard: calcRoomBoardPrice(roomBoard),
    skipass: calcSkipassPrice(skipass),
    transfer: calcTransferPrice(transfer),
    flight: calcFlightPrice(flight),
    insurance: calcInsurancePrice(insurance),
    addOns: calcAddOnPrice(addOns, addOnOptions),
  };

  const total = Object.values(breakdown).reduce((sum, value) => sum + value, 0);
  return { ...breakdown, total };
};

export {
  TRIP_DETAILS,
  calcAddOnPrice,
  calcFlightPrice,
  calcHotelPrice,
  calcInsurancePrice,
  calcResortPrice,
  calcRoomBoardPrice,
  calcSkipassPrice,
  calcTransferPrice,
  formatCurrency,
  getTripBreakdown,
};
