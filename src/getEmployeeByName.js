const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const nome = data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  return nome;
};

module.exports = getEmployeeByName;
