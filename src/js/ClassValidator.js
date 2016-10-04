class ClassValidator {
  static isClass(classType) {
    return typeof classType === 'function' && classType instanceof Function;
  }

  static isExtend(baseClassType, classType) {
    return classType.prototype instanceof baseClassType;
  }
}

export default ClassValidator;
