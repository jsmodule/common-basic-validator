class NumberValidator {
  static isNumber(num) {
    return typeof num === 'number' || num instanceof Number;
  }
}

export default NumberValidator;
