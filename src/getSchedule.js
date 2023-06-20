const data = require('../data/zoo_data');

const scheduleAnimal = (animal) => data.species
  .find(({ name }) => name === animal)
  .availability;

const scheduleByDay = (...days) => {
  const agenda = {};
  days.flat().forEach((day) => {
    if (day !== 'Monday') {
      agenda[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: data.species
          .filter(({ availability }) => availability.includes(day))
          .map(({ name }) => name),
      };
    }
    if (day === 'Monday') {
      agenda[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return agenda;
};
const getSchedule = (event) => {
  const diasSemana = Object.keys(data.hours);
  const AnimaisZoo = data.species.map(({ name }) => name);

  if (AnimaisZoo.includes(event)) {
    return scheduleAnimal(event);
  }
  if (diasSemana.includes(event)) {
    return scheduleByDay(event);
  }
  return scheduleByDay(diasSemana);
};

module.exports = getSchedule;
