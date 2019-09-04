const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => {return journey.startLocation});
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => {return journey.endLocation})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => {return journey.transport === transport})
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => {return journey.distance >= minDistance})
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, journey) => {
    return accumulator += journey.distance }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports =[]
  this.journeys.map(journey => {
    if(!transports.includes(journey.transport)) {
      transports.push(journey.transport)
    }
  })
  return transports
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const modesOfTransport = [...new Set(this.journeys.map(journey => {
//     return journey.transport}))]
//   return modesOfTransport
// };


module.exports = Traveller;
