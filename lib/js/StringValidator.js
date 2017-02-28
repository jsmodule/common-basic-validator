'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringValidator = function () {
  function StringValidator() {
    _classCallCheck(this, StringValidator);
  }

  _createClass(StringValidator, null, [{
    key: 'isString',
    value: function isString(str) {
      return typeof str === 'string' || str instanceof String;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(str) {
      return !StringValidator.isString(str) || str.length === 0;
    }
  }, {
    key: 'isNotEmpty',
    value: function isNotEmpty(str) {
      return StringValidator.isString(str) && str.length > 0;
    }
  }, {
    key: 'isBlank',
    value: function isBlank(str) {
      return !StringValidator.isString(str) || str.trim().length === 0;
    }
  }, {
    key: 'isNotBlank',
    value: function isNotBlank(str) {
      return StringValidator.isString(str) && str.trim().length > 0;
    }
  }]);

  return StringValidator;
}();

exports.default = StringValidator;