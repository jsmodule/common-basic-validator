import { expect } from 'chai';
import StringValidator from '../src/js/StringValidator';

describe('StringValidator', () => {
  let emptyStrObj = new String('');
  let blankStrObj = new String('   ');
  let validStrObj = new String('abc');

  describe('#isString', () => {
    it('should return true when give a string', () => {
      expect(StringValidator.isString('abc')).to.be.true;
    });

    it('should return true when give an instance of String', () => {
      expect(StringValidator.isString(validStrObj)).to.be.true;
    });

    it('should return false when give an undefined', () => {
      expect(StringValidator.isString(undefined)).to.be.false;
    });

    it('should return false when give a null', () => {
      expect(StringValidator.isString(null)).to.be.false;
    });
  });

  describe('#isEmpty', () => {
    it('should return true when give an undefined', () => {
      expect(StringValidator.isEmpty(undefined)).to.be.true;
    });

    it('should return true when give a null', () => {
      expect(StringValidator.isEmpty(null)).to.be.true;
    });

    it('should return true when give an empty string', () => {
      expect(StringValidator.isEmpty('')).to.be.true;
    });

    it('should return true when give an empty instance of String', () => {
      expect(StringValidator.isEmpty(emptyStrObj)).to.be.true;
    });

    it('should return true when give a not empty string', () => {
      expect(StringValidator.isEmpty('abc')).to.be.false;
    });

    it('should return false when give a not empty instance of String', () => {
      expect(StringValidator.isEmpty(validStrObj)).to.be.false;
    });
  });

  describe('#isNotEmpty', () => {
    it('should return true when give a not empty string', () => {
      expect(StringValidator.isNotEmpty('abc')).to.be.true;
    });

    it('should return true when give a not empty instance of String', () => {
      expect(StringValidator.isNotEmpty(validStrObj)).to.be.true;
    });

    it('should return false when give a empty string', () => {
      expect(StringValidator.isNotEmpty('')).to.be.false;
    });

    it('should return false when give a empty instance of String', () => {
      expect(StringValidator.isNotEmpty(emptyStrObj)).to.be.false;
    });
  });

  describe('#isBlank', () => {
    it('should return true when give an undefined', () => {
      expect(StringValidator.isBlank(undefined)).to.be.true;
    });

    it('should return true when give a null', () => {
      expect(StringValidator.isBlank(null)).to.be.true;
    });

    it('should return true when give an blank string', () => {
      expect(StringValidator.isBlank('   ')).to.be.true;
    });

    it('should return true when give an blank instance of String', () => {
      expect(StringValidator.isBlank(blankStrObj)).to.be.true;
    });

    it('should return true when give a not blank string', () => {
      expect(StringValidator.isBlank('abc')).to.be.false;
    });

    it('should return false when give a not blank instance of String', () => {
      expect(StringValidator.isBlank(validStrObj)).to.be.false;
    });
  });

  describe('#isNotBlank', () => {
    it('should return true when give a not blank string', () => {
      expect(StringValidator.isNotBlank('abc')).to.be.true;
    });

    it('should return true when give a not blank instance of String', () => {
      expect(StringValidator.isNotBlank(validStrObj)).to.be.true;
    });

    it('should return false when give a blank string', () => {
      expect(StringValidator.isNotBlank('   ')).to.be.false;
    });

    it('should return false when give a blank instance of String', () => {
      expect(StringValidator.isNotBlank(blankStrObj)).to.be.false;
    });
  });
});
