class FunctionValidator {
  static isFunction(fun) {
    return typeof fun === 'function' || fun instanceof Function;
  }
}

export default FunctionValidator;
