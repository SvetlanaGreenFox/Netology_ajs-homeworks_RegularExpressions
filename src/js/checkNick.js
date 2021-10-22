export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername(name) {
    return /^\s*(\w+)\s*$/.test(str);

  }
}

//TRUE латинские буквы, -, _, цифры 0-9
//FALSE 3 цифры подряд, начинаться и заканчиваться цифрами, _ и -