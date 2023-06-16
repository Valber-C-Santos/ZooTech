const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const empregado = data.employees.find((colaborador) => colaborador.id === id).responsibleFor[0];
  const animalVelho = data.species.find((teste) => teste.id === empregado).residents;
  return Object.values(animalVelho.sort((a, b) => b.age - a.age)[0]);
};

module.exports = getOldestFromFirstSpecies;
