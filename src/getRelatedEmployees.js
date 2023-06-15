const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((teste) => teste.managers
    .find((aidi) => aidi === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((gerente) => gerente.managers.includes(managerId))
    .map((nome) => `${nome.firstName} ${nome.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
