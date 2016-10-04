class StringValidator {
  static isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  static isEmpty(str) {
    return !StringValidator.isString(str) || str.length === 0;
  }

  static isNotEmpty(str) {
    return StringValidator.isString(str) && str.length > 0;
  }

  static isBlank(str) {
    return !StringValidator.isString(str) || str.trim().length === 0;
  }

  static isNotBlank(str) {
    return StringValidator.isString(str) && str.trim().length > 0;
  }
}

export default StringValidator;
