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

  describe('#hasAnyProperty', () => {
    it('should return true when given an obj which have some properties', () => {
      expect(ObjectValidator.hasAnyProperty(validObj)).to.be.true;
    });

    it('should return true when given an undefined', () => {
      expect(ObjectValidator.hasAnyProperty(undefined)).to.be.false;
    });

    it('should return true when given a null', () => {
      expect(ObjectValidator.hasAnyProperty(null)).to.be.false;
    });

    it('should return false when given an empty obj', () => {
      expect(ObjectValidator.hasAnyProperty(emptyObj)).to.be.false;
    });
  });

  describe('#hasProperty', () => {
    it('should return true when given an obj which have [a] property', () => {
      validObj.have = 1;
      expect(ObjectValidator.hasProperty(validObj, 'have')).to.be.true;
    });

    it('should return false when given an obj which have not that property', () => {
      expect(ObjectValidator.hasProperty(validObj, 'doNotHave')).to.be.false;
    });

    it('should return false when given an undefined obj', () => {
      expect(ObjectValidator.hasProperty(undefined, 'have')).to.be.false;
    });

    it('should return true when given a null obj', () => {
      expect(ObjectValidator.hasProperty(null, 'have')).to.be.false;
    });
  });
});
