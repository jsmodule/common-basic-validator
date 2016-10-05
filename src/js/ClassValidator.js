class ClassValidator {
  static isClass(classType) {
    return typeof classType === 'function' && classType instanceof Function;
  }

  static isExtend(baseClassType, classType) {
    return classType.prototype instanceof baseClassType;
  }

  static hasMethod(classType, methodName) {
    return ClassValidator.isClass(classType) && ClassValidator._hasMethodFromInherit(classType.prototype, methodName);
  }

  static _hasMethodFromInherit(prototype, methodName) {
    if (prototype != null) {
      return prototype.hasOwnProperty(methodName)? true : ClassValidator._hasMethodFromInherit(prototype.__proto__, methodName);
    }
    return false;
  }
}

export default ClassValidator;
