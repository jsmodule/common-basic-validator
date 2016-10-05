import { expect } from 'chai';
import Validator from '../src/js/Validator';

describe('Validator', () => {
  describe('#isAnyValidValue', () => {
    it('should return true when given a Class', () => {
      expect(Validator.isAnyValidValue(Object)).to.be.true;
    });

    it('should return true when given a function', () => {
      expect(Validator.isAnyValidValue(() => {})).to.be.true;
    });

    it('should return true when given an obj', () => {
      expect(Validator.isAnyValidValue({})).to.be.true;
    });

    it('should return true when given a string', () => {
      expect(Validator.isAnyValidValue('abc')).to.be.true;
    });

    it('should return true when given a number', () => {
      expect(Validator.isAnyValidValue(1)).to.be.true;
    });

    it('should return false when given an undefined', () => {
      expect(Validator.isAnyValidValue(undefined)).to.be.false;
    });

    it('should return false when given a null', () => {
      expect(Validator.isAnyValidValue(null)).to.be.false;
    });
  });
});
