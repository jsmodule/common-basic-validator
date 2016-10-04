# common-basic-validator
This is a unit of basic validators.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/common-basic-validator.svg)](https://npmjs.org/package/common-basic-validator)
[![NPM Downloads](https://img.shields.io/npm/dm/common-basic-validator.svg)](https://npmjs.org/package/common-basic-validator)
[![Build Status](https://travis-ci.org/jsmodule/common-basic-validator.svg?branch=master)](https://travis-ci.org/jsmodule/common-basic-validator)

[![NPM](https://nodei.co/npm/common-basic-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/common-basic-validator/)

## Installation

```
$ npm install common-basic-validator
```

## Usage

```js
import * from 'common-basic-validator';

ClassValidator.isExtend(Class, obj);
```

## API

### ClassValidator

* **isClass**

  Defined: `function isClass(classType: Class): Boolean`

  Describe: Check the class type is a Class.

  Examples:

  ```js
  ClassValidator.isClass(undefined);  //return false;
  ClassValidator.isClass(null);       //return false;
  ClassValidator.isClass(1);          //return false;
  ClassValidator.isClass('abc');      //return false;
  ClassValidator.isClass({a: 1});     //return false;
  ClassValidator.isClass(Object);     //return true;
  ClassValidator.isClass(String);     //return true;
  ```

* **isExtend**

  Defined: `function isExtend(baseClassType: Class, classType: Class): Boolean`

  Describe: Check the class type is extends from base class type.

  Examples:

  ```js
  class A{};
  class B extends A{};

  ClassValidator.isExtend(Object, String);  //return true;
  ClassValidator.isExtend(A, B);            //return true;
  ClassValidator.isExtend(Object, B);       //return true;
  ```

### FunctionValidator

* **isFunction**

  Defined: `function isFunction(fun: Function): Boolean`

  Describe: Check the fun is a Function.

  Examples:
  ```js
  FunctionValidator.isFunction(undefined);  //return false;
  FunctionValidator.isFunction(null);       //return false;
  FunctionValidator.isFunction(() => {});   //return true;
  ```

### NumberValidator

* **isNumber**

  Defined: `function isNumber(num: Number): Boolean`

  Describe: Check the num is a Number.

  Examples:

  ```js
  NumberValidator.isNumber(undefined);      //return false;
  NumberValidator.isNumber(null);           //return false;
  NumberValidator.isNumber(1);              //return true;
  NumberValidator.isNumber(new Number(1));  //return true;
  ```

### ObjectValidator

* **isObj**

  Defined: `function isObj(obj: Object): Boolean`

  Describe: Check the obj is a instance of Object;

  Examples:

  ```js
  ObjectValidator.isObj(undefined);     //return false;
  ObjectValidator.isObj(1);             //return false;
  ObjectValidator.isObj('abc');         //return false;
  ObjectValidator.isObj(null);          //return true;  *NOTE* very special. just follow js default behavior.
  ObjectValidator.isObj({a: 1});        //return true;
  ObjectValidator.isObj(new Object());  //return true;
  ```

* **isKindOf**

  Defined: `function isKindOf(classType: Class, obj: Object): Boolean`

  Describe: Check the obj is belong this class type.

  Examples:

  ```js
  class A{};
  class B extends A{};

  ObjectValidator.isKindOf(B, new A());       //return false;
  ObjectValidator.isKindOf(Object, 1);        //return false;
  ObjectValidator.isKindOf(Object, 'abc');    //return false;
  ObjectValidator.isKindOf(A, new A());       //return true;
  ObjectValidator.isKindOf(A, new B());       //return true;
  ObjectValidator.isKindOf(Object, new B());  //return true;
  ```

* **isValid**

  Defined: `function isValid(obj: Object): Boolean`

  Describe: Check the obj is a valid object.

  Examples:

  ```js
  ObjectValidator.isValid(undefined);     //return false;
  ObjectValidator.isValid(null);          //return false;
  ObjectValidator.isValid({});            //return true;
  ObjectValidator.isValid({a: 1});        //return true;
  ObjectValidator.isValid(new Object());  //return true;
  ```

* **hasAnyProperty**

  Defined: `function hasAnyProperty(obj: Object): Boolean`

  Describe: Check the obj is not a empty object.

  Examples:

  ```js
  ObjectValidator.hasAnyProperty(undefined);  //return false;
  ObjectValidator.hasAnyProperty(null);       //return false;
  ObjectValidator.hasAnyProperty({});         //return false;
  ObjectValidator.hasAnyProperty({a: 1});     //return true;
  ```

### StringValidator

* **isString**

  Defined: `function isString(str: String): Boolean`

  Describe: Check the str is a string.

  Examples:

  ```js
  StringValidator.isString(undefined);        //return false;
  StringValidator.isString(null);             //return false;
  StringValidator.isString('abc');            //return false;
  StringValidator.isString(new String('a'));  //return false;
  ```

* **isEmpty**

  Defined: `function isEmpty(str: String): Boolean`

  Describe: Check the str is a empty string.

  Examples:

  ```js
  StringValidator.isEmpty(undefined);         //return true;
  StringValidator.isEmpty(null);              //return true;
  StringValidator.isEmpty('');                //return true;
  StringValidator.isEmpty(new String());      //return true;
  StringValidator.isEmpty('abc');             //return false;
  StringValidator.isEmpty(new String('a'));   //return false;
  ```

* **isNotEmpty**

  Defined: `function isNotEmpty(str: String): Boolean`

  Describe: Check the str is not a empty string.

  Examples:

  ```js
  StringValidator.isEmpty(undefined);         //return false;
  StringValidator.isEmpty(null);              //return false;
  StringValidator.isEmpty('');                //return false;
  StringValidator.isEmpty(new String());      //return false;
  StringValidator.isEmpty('abc');             //return true;
  StringValidator.isEmpty(new String('a'));   //return true;
  ```

* **isBlank**

  Defined: `function isBlank(str: String): Boolean`

  Describe: Check the str is a blank string.

  Examples:

  ```js
  StringValidator.isEmpty(undefined);         //return true;
  StringValidator.isEmpty(null);              //return true;
  StringValidator.isEmpty('');                //return true;
  StringValidator.isEmpty('   ');             //return true;
  StringValidator.isEmpty(new String());      //return true;
  StringValidator.isEmpty(new String('  '));  //return true;
  StringValidator.isEmpty('abc');             //return false;
  StringValidator.isEmpty(new String('a'));   //return false;
  ```

* **isNotBlank**

  Defined: `function isNotBlank(str: String): Boolean`

  Describe: Check the str is not a blank string.

  Examples:

  ```js
  StringValidator.isEmpty(undefined);         //return false;
  StringValidator.isEmpty(null);              //return false;
  StringValidator.isEmpty('');                //return false;
  StringValidator.isEmpty('   ');             //return false;
  StringValidator.isEmpty(new String());      //return false;
  StringValidator.isEmpty(new String('  '));  //return false;
  StringValidator.isEmpty('abc');             //return true;
  StringValidator.isEmpty(new String('a'));   //return true;
  ```

## License

common-basic-validator is released under the MIT license.
