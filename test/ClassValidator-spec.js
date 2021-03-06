import { expect } from 'chai';
import SubClass from './fixtures/SubClass';
import SuperClass from './fixtures/SuperClass';
import ClassValidator from '../src/js/ClassValidator';

describe('ClassValidator', () => {
  describe('#isClass', () => {
    it('should return true when given a valid class', () => {
      expect(ClassValidator.isClass(SuperClass)).to.be.true;
    });

    it('should return false when given a null', () => {
      expect(ClassValidator.isClass(null)).to.be.false;
    });

    it('should return false when given a undefined', () => {
      expect(ClassValidator.isClass(undefined)).to.be.false;
    });

    it('should return false when given a obj', () => {
      expect(ClassValidator.isClass({a: 1})).to.be.false;
    });
  });

  describe('#isExtend', () => {
    it('SubClass should extends from SuperClass', () => {
      expect(ClassValidator.isExtend(SuperClass, SubClass)).to.be.true;
    });

    it('SubClass should extends from Object class', () => {
      expect(ClassValidator.isExtend(Object, SubClass)).to.be.true;
    });

    it('SubClass should not extends from SubClass', () => {
      expect(ClassValidator.isExtend(SubClass, SubClass)).to.be.false;
    });
  });

  describe('#hasMethod', () => {
    it('SubClass should has subMethod', () => {
      expect(ClassValidator.hasMethod(SubClass, 'subMethod')).to.be.true;
    });

    it('SubClass should has superMethod', () => {
      expect(ClassValidator.hasMethod(SubClass, 'superMethod')).to.be.true;
    });

    it('SubClass should not have unknown method', () => {
      expect(ClassValidator.hasMethod(SubClass, 'unknownMethod')).to.be.false;
    });

    it('SuperClass should not have subMethod', () => {
      expect(ClassValidator.hasMethod(SuperClass, 'subMethod')).to.be.false;
    });
  });
});
