const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especies = data.species.find((especie) => especie.name === animal);
  const junta = especies.residents.every((idade) => idade.age > age);
  return junta;
};

module.exports = getAnimalsOlderThan;
