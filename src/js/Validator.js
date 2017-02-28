class Validator {
  static isAnyValidValue(anything) {
    return typeof anything !== 'undefined' && anything != null;
  }
}

export default Validator;
