import { expect } from 'chai';
import SubClass from './fixtures/SubClass';
import SuperClass from './fixtures/SuperClass';
import ObjectValidator from '../src/js/ObjectValidator';

describe('ObjectValidator', () => {
  let emptyObj = {};
  let validObj = {a: 1};

  describe('#isObj', () => {
    it('should return true when given an obj', () => {
      expect(ObjectValidator.isObj(validObj)).to.be.true;
    });

    it('should return true when given a null', () => {
      expect(ObjectValidator.isObj(null)).to.be.true;
    });

    it('should return true when given an instance of Class', () => {
      expect(ObjectValidator.isObj(new SuperClass())).to.be.true;
    });

    it('should return false when given an undefined', () => {
      expect(ObjectValidator.isObj(undefined)).to.be.false;
    });

    it('should return false when given a string', () => {
      expect(ObjectValidator.isObj('abc')).to.be.false;
    });

    it('should return false when given a number', () => {
      expect(ObjectValidator.isObj(1)).to.be.false;
    });
  });

  describe('#isKindOf', () => {
    let subObj = new SubClass();
    let superObj = new SuperClass();

    it('sub obj should be SubClass', () => {
      expect(ObjectValidator.isKindOf(SubClass, subObj)).to.be.true;
    });

    it('sub obj also should be SuperClass', () => {
      expect(ObjectValidator.isKindOf(SuperClass, subObj)).to.be.true;
    });

    it('sub obj also should be Object', () => {
      expect(ObjectValidator.isKindOf(Object, subObj)).to.be.true;
    });

    it('super obj should not be SubClass', () => {
      expect(ObjectValidator.isKindOf(SubClass, superObj)).to.be.false;
    });
  });

  describe('#isValid', () => {
    it('should return true when given a valid obj', () => {
      expect(ObjectValidator.isValid(validObj)).to.be.true;
    });

    it('should return false when given a null', () => {
      expect(ObjectValidator.isValid(null)).to.be.false;
    });

    it('should return false when given an undefined', () => {
      expect(ObjectValidator.isValid(undefined)).to.be.false;
    });
  });

  describe('#isEmpty', () => {
    it('should return true when given an empty obj', () => {
      expect(ObjectValidator.isEmpty(emptyObj)).to.be.true;
    });

    it('should return true when given an undefined', () => {
      expect(ObjectValidator.isEmpty(undefined)).to.be.true;
    });

    it('should return true when given a null', () => {
      expect(ObjectValidator.isEmpty(null)).to.be.true;
    });

    it('should return false when given an obj which have some properties', () => {
      expect(ObjectValidator.isEmpty(validObj)).to.be.false;
    });
  });

  describe('#isNotEmpty', () => {
    it('should return true when given an obj which have some properties', () => {
      expect(ObjectValidator.isNotEmpty(validObj)).to.be.true;
    });

    it('should return false when given an empty obj', () => {
      expect(ObjectValidator.isNotEmpty(emptyObj)).to.be.false;
    });
  });
});
