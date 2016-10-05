'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectValidator = function () {
  function ObjectValidator() {
    _classCallCheck(this, ObjectValidator);
  }

  _createClass(ObjectValidator, null, [{
    key: 'isObj',
    value: function isObj(obj) {
      return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
    }
  }, {
    key: 'isKindOf',
    value: function isKindOf(classType, obj) {
      return obj instanceof classType;
    }
  }, {
    key: 'isValid',
    value: function isValid(obj) {
      return ObjectValidator.isObj(obj) && obj !== null;
    }
  }, {
    key: 'hasAnyProperty',
    value: function hasAnyProperty(obj) {
      return ObjectValidator.isValid(obj) && Object.keys(obj).length > 0;
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(obj, propertyName) {
      return ObjectValidator.isValid(obj) && obj.hasOwnProperty(propertyName);
    }
  }]);

  return ObjectValidator;
}();

exports.default = ObjectValidator;