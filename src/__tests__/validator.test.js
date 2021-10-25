import Validator from '../js/validator';

describe('Check the UserName', () => {
  test('Passed the check', () => {
    const user = new Validator();
    user.validateUsername('IvanO');
    expect(user.name).toBe('IvanO');
  });

  test('starts with a number', () => {
    const user = new Validator();
    expect(() => user.validateUsername('2Ivan')).toThrowError('Некорректное имя пользователя!');
  });

  test('starts with _', () => {
    const user = new Validator();
    expect(() => user.validateUsername('_Ivan')).toThrowError('Некорректное имя пользователя!');
  });

  test('numbers at the end', () => {
    const user = new Validator();
    expect(() => user.validateUsername('_Ivan')).toThrowError('Некорректное имя пользователя!');
  });

  test('_ at the end', () => {
    const user = new Validator();
    expect(() => user.validateUsername('Ivan_')).toThrowError('Некорректное имя пользователя!');
  });

  test('more than 3 numbers', () => {
    const user = new Validator();
    expect(() => user.validateUsername('Ivan7897jh')).toThrowError('Некорректное имя пользователя!');
  });
});
