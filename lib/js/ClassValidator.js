'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassValidator = function () {
  function ClassValidator() {
    _classCallCheck(this, ClassValidator);
  }

  _createClass(ClassValidator, null, [{
    key: 'isClass',
    value: function isClass(classType) {
      return typeof classType === 'function' && classType instanceof Function;
    }
  }, {
    key: 'isExtend',
    value: function isExtend(baseClassType, classType) {
      return classType.prototype instanceof baseClassType;
    }
  }, {
    key: 'hasMethod',
    value: function hasMethod(classType, methodName) {
      return ClassValidator.isClass(classType) && ClassValidator._hasMethodFromInherit(classType.prototype, methodName);
    }
  }, {
    key: '_hasMethodFromInherit',
    value: function _hasMethodFromInherit(prototype, methodName) {
      if (prototype != null) {
        return prototype.hasOwnProperty(methodName) ? true : ClassValidator._hasMethodFromInherit(prototype.__proto__, methodName);
      }
      return false;
    }
  }]);

  return ClassValidator;
}();

exports.default = ClassValidator;