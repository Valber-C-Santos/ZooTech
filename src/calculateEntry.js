const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((p) => p.age < 18).length;

  const adult = entrants.filter((p) => p.age >= 18 && p.age < 50).length;

  const senior = entrants.filter((p) => p.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;

  const visitantes = countEntrants(entrants);

  const preçoCriança = visitantes.child * data.prices.child;

  const preçoAdulto = visitantes.adult * data.prices.adult;

  const preçoIdoso = visitantes.senior * data.prices.senior;

  const soma = preçoCriança + preçoAdulto + preçoIdoso;

  return soma;
};

module.exports = { calculateEntry, countEntrants };
