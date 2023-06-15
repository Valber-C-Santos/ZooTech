const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testar se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
});
describe('Testes da função getOpeningHours', () => {
  it('Teste não recebe nenhum parâmetro, deve retornar undefined', () => {
    expect(getOpeningHours()).toEqual({ Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 }, Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 }, Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 } });
  });
});
describe('Testes da função getOpen', () => {
  it('Teste not open', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
});
describe('Testes da função getOpen', () => {
  it('Teste opening', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
});
describe('Testes função getOpe', () => {
  it('Teste no opening', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
describe('Testes função getOpe', () => {
  it('Teste no opening', () => {
    expect(() => (getOpeningHours('Thu', '09:00-AM'))).toThrow('The day must be valid. Example: Monday');
  });
});
describe('Testes da função getOpe', () => {
  it('Teste not opening', () => {
    expect(() => (getOpeningHours('Friday', '09:00-ZM'))).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
describe('Testes da função getOpe', () => {
  it('Teste not opening', () => {
    expect(() => (getOpeningHours('Saturday', 'C9:00-AM'))).toThrow('The hour should represent a number');
  });
});
describe('Testes função getO', () => {
  it('Teste n opening', () => {
    expect(() => (getOpeningHours('Sunday', '09:c0-AM'))).toThrow('The minutes should represent a number');
  });
});
describe('Testes função getO', () => {
  it('Teste n opening', () => {
    expect(() => (getOpeningHours('Monday', '13:00-AM'))).toThrow('The hour must be between 0 and 12');
  });
});
describe('Testes função get', () => {
  it('Teste non opening', () => {
    expect(() => (getOpeningHours('Tuesday', '09:60-AM'))).toThrow('The minutes must be between 0 and 59');
  });
});
