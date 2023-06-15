const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('Testar se HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
});
describe('Testes da função handler.', () => {
  it('Teste do count', () => {
    expect(handlerElephants('count')).toStrictEqual(4);
  });
});
describe('Testes da função Handler.', () => {
  it('Teste do names', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
describe('Testes da função hand', () => {
  it('Teste do averege', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
describe('Testes da função Hand', () => {
  it('Teste do averege', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
describe('Testes da função HandlerElephants', () => {
  it('Teste não recebe nenhum parâmetro, deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
describe('Testes da função HandlerElephants', () => {
  it('Teste', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
});
describe('Testes da função HandlerEl', () => {
  it('Teste', () => {
    expect(handlerElephants('xablau')).toBe(null);
  });
});
