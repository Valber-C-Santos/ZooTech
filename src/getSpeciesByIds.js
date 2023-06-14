const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const arrVazio = [];
  if (ids.length === 0) {
    return arrVazio;
  }
  return ids.map((aidi) => data.species.find((especie) => especie.id === aidi));
};

module.exports = getSpeciesByIds;
