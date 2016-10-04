import { expect } from 'chai';
import FunctionValidator from '../src/js/FunctionValidator';

describe('FunctionValidator', () => {
  let validFun = () => {};

  describe('#isFunction', () => {
    it('should return true when give a valid function', () => {
      expect(FunctionValidator.isFunction(validFun)).to.be.true;
    });

    it('should return false when give an undefined', () => {
      expect(FunctionValidator.isFunction(undefined)).to.be.false;
    });

    it('should return false when give a null', () => {
      expect(FunctionValidator.isFunction(null)).to.be.false;
    });
  });
});
