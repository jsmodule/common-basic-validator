import { expect } from 'chai';
import NumberValidator from '../src/js/NumberValidator';

describe('NumberValidator', () => {
  let validNumObj = new Number(1);

  describe('#isNumber', () => {
    it('should return true when give a number', () => {
      expect(NumberValidator.isNumber(1)).to.be.true;
    });

    it('should return true when give an instance of Number', () => {
      expect(NumberValidator.isNumber(validNumObj)).to.be.true;
    });

    it('should return false when give an undefined', () => {
      expect(NumberValidator.isNumber(undefined)).to.be.false;
    });

    it('should return false when give a null', () => {
      expect(NumberValidator.isNumber(null)).to.be.false;
    });
  });
});
