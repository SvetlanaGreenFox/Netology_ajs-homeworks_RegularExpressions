export default class Validator {
  validateUsername(name) {
    if (/^[^0-9_-][a-zA-Z-_]*\d{0,3}[a-zA-Z-_]*[^0-9_-]$/.test(name)) {
      this.name = name;
    } else {
      throw new Error('Некорректное имя пользователя!');
    }
    return this.name;
  }
}
