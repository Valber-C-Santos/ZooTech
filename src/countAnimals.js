const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, especie) => {
      acc[especie.name] = especie.residents.length;
      return acc;
    }, {});
  }
  if (animal.species && !animal.sex) {
    return data.species
      .find((especie) => especie.name === animal.species).residents.length;
  }
  return data.species.find((especie) => especie.name === animal.species)
    .residents.filter((bicho) => bicho.sex === animal.sex).length;
};

module.exports = countAnimals;
