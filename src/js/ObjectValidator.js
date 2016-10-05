class ObjectValidator {
  static isObj(obj) {
    return typeof obj === 'object';
  }

  static isKindOf(classType, obj) {
    return obj instanceof classType;
  }

  static isValid(obj) {
    return ObjectValidator.isObj(obj) && obj !== null;
  }

  static hasAnyProperty(obj) {
    return ObjectValidator.isValid(obj) && Object.keys(obj).length > 0;
  }

  static hasProperty(obj, propertyName) {
    return ObjectValidator.isValid(obj) && obj.hasOwnProperty(propertyName);
  }
}

export default ObjectValidator;
