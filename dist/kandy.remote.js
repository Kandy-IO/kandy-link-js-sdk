/**
 * Kandy.js
 * kandy.remote.js
 * Version: 4.11.0-beta.239
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kandy"] = factory();
	else
		root["Kandy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../packages/kandy/src/webrtcProxy/remote/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/define-properties.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/freeze.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/freeze.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/get-own-property-symbols.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/get-own-property-symbols.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/values.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/reflect/set.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/reflect/set.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol/for.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/symbol/for.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "../../node_modules/core-js/library/fn/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("../../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/freeze.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.freeze.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.freeze;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("../../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/reflect/set.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.reflect.set.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Reflect.set;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/for.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Symbol['for'];


/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("../../node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-from-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("../../node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("../../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("../../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-methods.js":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__("../../node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__("../../node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__("../../node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__("../../node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-species-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("../../node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("../../node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_collection-strong.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__("../../node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__("../../node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__("../../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("../../node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__("../../node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__("../../node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__("../../node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__("../../node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__("../../node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_collection-to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("../../node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__("../../node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__("../../node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__("../../node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__("../../node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__("../../node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__("../../node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__("../../node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__("../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__("../../node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.8' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("../../node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("../../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("../../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("../../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("../../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("../../node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("../../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__("../../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("../../node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__("../../node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__("../../node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("../../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("../../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("../../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("../../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("../../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("../../node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("../../node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("../../node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("../../node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("../../node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("../../node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("../../node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("../../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("../../node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("../../node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("../../node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("../../node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("../../node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__("../../node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("../../node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("../../node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("../../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("../../node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("../../node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("../../node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("../../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("../../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("../../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("../../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("../../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("../../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("../../node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("../../node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("../../node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("../../node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("../../node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("../../node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("../../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("../../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("../../node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__("../../node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("../../node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("../../node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-collection-from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__("../../node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__("../../node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-collection-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("../../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("../../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("../../node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__("../../node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("../../node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("../../node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__("../../node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__("../../node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__("../../node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("../../node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("../../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("../../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("../../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("../../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("../../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_user-agent.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_validate-collection.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("../../node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("../../node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("../../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("../../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("../../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("../../node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("../../node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__("../../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("../../node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__("../../node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__("../../node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__("../../node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("../../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("../../node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("../../node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("../../node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("../../node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("../../node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("../../node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("../../node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__("../../node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.freeze.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var meta = __webpack_require__("../../node_modules/core-js/library/modules/_meta.js").onFreeze;

__webpack_require__("../../node_modules/core-js/library/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__("../../node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__("../../node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("../../node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__("../../node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("../../node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("../../node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__("../../node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__("../../node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__("../../node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__("../../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("../../node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__("../../node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__("../../node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__("../../node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("../../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("../../node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__("../../node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__("../../node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("../../node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("../../node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("../../node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("../../node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("../../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.reflect.set.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js");
var gOPD = __webpack_require__("../../node_modules/core-js/library/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__("../../node_modules/core-js/library/modules/_object-gpo.js");
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var createDesc = __webpack_require__("../../node_modules/core-js/library/modules/_property-desc.js");
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("../../node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("../../node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("../../node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("../../node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("../../node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("../../node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("../../node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("../../node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("../../node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("../../node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("../../node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("../../node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("../../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("../../node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__("../../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("../../node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("../../node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("../../node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("../../node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("../../node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__("../../node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__("../../node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("../../node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("../../node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("../../node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("../../node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("../../node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("../../node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("../../node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("../../node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__("../../node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__("../../node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("../../node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("../../node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__("../../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("../../node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("../../node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("../../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("../../node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("../../node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../../node_modules/decode-uri-component/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "../../node_modules/eventemitter3/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "../../node_modules/events/events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "../../node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../node_modules/lodash/fp.js":
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__("../../node_modules/lodash/lodash.min.js").runInContext();
module.exports = __webpack_require__("../../node_modules/lodash/fp/_baseConvert.js")(_, _);


/***/ }),

/***/ "../../node_modules/lodash/fp/_baseConvert.js":
/***/ (function(module, exports, __webpack_require__) {

var mapping = __webpack_require__("../../node_modules/lodash/fp/_mapping.js"),
    fallbackHolder = __webpack_require__("../../node_modules/lodash/fp/placeholder.js");

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function flatSpread(func, start) {
  return function() {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var defaultHolder = isLib ? func : fallbackHolder,
      forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : flatSpread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null &&
          !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func, placeholder) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;

    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  _.placeholder = _;

  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),

/***/ "../../node_modules/lodash/fp/_mapping.js":
/***/ (function(module, exports) {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1],
  'reduceRight': [1, 0]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),

/***/ "../../node_modules/lodash/fp/placeholder.js":
/***/ (function(module, exports) {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),

/***/ "../../node_modules/lodash/lodash.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Ln[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function U(n,t){return function(r){return n(t(r))}}function B(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Un={};
Un["[object Float32Array]"]=Un["[object Float64Array]"]=Un["[object Int8Array]"]=Un["[object Int16Array]"]=Un["[object Int32Array]"]=Un["[object Uint8Array]"]=Un["[object Uint8ClampedArray]"]=Un["[object Uint16Array]"]=Un["[object Uint32Array]"]=true,Un["[object Arguments]"]=Un["[object Array]"]=Un["[object ArrayBuffer]"]=Un["[object Boolean]"]=Un["[object DataView]"]=Un["[object Date]"]=Un["[object Error]"]=Un["[object Function]"]=Un["[object Map]"]=Un["[object Number]"]=Un["[object Object]"]=Un["[object RegExp]"]=Un["[object Set]"]=Un["[object String]"]=Un["[object WeakMap]"]=false;
var Bn={};Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,
Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object WeakMap]"]=false;var Ln={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn= true&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
try{var n=Nn&&Nn.require&&Nn.require("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e",
"\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a",
"\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I",
"\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r",
"\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ",
"\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Ln)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Ln(n){
this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
}function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Lr(n),pt(t,0,n.length))}function ut(n){return De(Lr(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
}function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Uu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
}function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Lr(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Bn[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Zn),
i=o.get(n))return i;if(o.set(n,f),pf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(sf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Uu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
}return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function kt(n,t){return i(t,function(t){return _u(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)return n===T?"[object Undefined]":"[object Null]";if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ci(p.length,s),
l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ut(n,t,r,e){return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Bt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Lt(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)return true;if(null==n||null==t||!yu(n)&&!yu(t))return n!==n&&t!==t;n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
}else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Un[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(du(i)){u||(u=new Zn);var f=u,c=Be(n,o),a=Be(t,o),l=f.get(a);if(!l){var l=e?e(c,a,o+"",n,t,f):T,s=l===T;
if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Lr(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a))}it(n,o,l)}else f=e?e(Be(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Uu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],E(ye())),n=Gt(n,function(n,r,u){return{a:c(t,function(t){return t(n)}),
b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){if(e>=f){e=c;break n}e=c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Lr(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),
xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}return n}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Ue(n,t,$u),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){var r=Lu(n);return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){
var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i;
}return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){
if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return L(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),
n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Ln&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));return br(wt(i,1),t,r)}function Ar(n,t,r){
for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return hu(n)?n:[]}function Er(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length);
}function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Ur(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Br(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Ku(l+a);
for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Lr(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t)}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o);
}}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
}return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:B(f,a),o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f);
}var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Ur(y,e,u,_)),i&&(y=Br(y,i,o,_)),d-=x,_&&d<a)return j=B(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Lr(y);w--;){
var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Ut(r,n,t(e),{})}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Li(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
var t=Yu[n];return function(n,r){if(n=Su(n),r=null==r?0:Ci(ku(r),292)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(ku(o),0),f=f===T?f:ku(f),a-=u?u.length:0,64&t){
var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Ur(e,r,h[4]):r,i[4]=e?B(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Br(e,r,h[6]):r,i[6]=e?B(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),c=t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),Le((h?co:yo)(c,i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=L),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
return false}function pe(n){return xo(Ue(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Uu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function Ee(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
}function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Ln.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Ue(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Be(n,t){if("__proto__"!=t)return n[t]}function Le(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),
t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];
t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Ln)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Lr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=ku(r),u=0>r?Li(e+u,0):Ci(u,e-1)),_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[];
}function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n;
}function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=ku(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,
n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),
s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
r.cache=i.set(u,e)||i,e)};return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;
var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==ku(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object";
}function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n)}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Lr(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);
return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?L:Lu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function ku(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function Eu(n){return n?pt(ku(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n;
}function Ou(n){return Cr(n,Uu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Uu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){
return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=kt(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,Wu(t)));
var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Lr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){
var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.allocUnsafe:T,di=U(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){try{var n=je(Qu,"defineProperty");
return n({},"",{}),n}catch(n){}}(),ki=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,Ei=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Ui=ri.join,Bi=U(Qu.keys,Qu),Li=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=eo(kn.prototype),On.prototype.constructor=On,Ln.prototype=eo(kn.prototype),Ln.prototype.constructor=Ln,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
--this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
},Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=ki||function(n){
return $n.clearTimeout(n)},so=Zi&&1/L(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),ko=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),Eo=fr(function(n){var t=Ve(n),r=c(n,kr);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Uo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,hu))}),Lo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return ht(t,n)};return!(1<t||this.__actions__.length)&&e instanceof Ln&&Se(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qe,args:[u],thisArg:T}),new On(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(T),
n})):this.thru(u)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Bt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
Xt(n,wt(t,1),[])}),Go=Ei||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=B(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=B(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,B(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,B(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Lt(function(){return arguments}())?Lt:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?E(Vn):Ct,af=zi||Vu,lf=Kn?E(Kn):Dt,sf=Gn?E(Gn):Tt,hf=Hn?E(Hn):Nt,pf=Jn?E(Jn):Pt,_f=Yn?E(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Uu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Uu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Uu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),kf=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),Ef=fr(Bt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
}),zf=oe(Wu),Wf=oe(Uu),Uf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Bt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Bt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
return n=ku(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(ku(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Lr(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
},An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=ku(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:ku(e),0>e&&(e+=u),e=r>e?0:Eu(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:ku(r),
wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:ku(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Uu(n))},An.groupBy=Po,An.initial=function(n){
return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=ko,An.intersectionBy=Eo,An.intersectionWith=So,An.invert=Af,An.invertBy=kf,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Uu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=ku(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Bu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Bu,An.property=Zu,
An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:ku(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
r=e):(t=null==t?0:ku(t),r=r===T?e:ku(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Li(ku(r),0),
fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:ku(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Lr(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
}return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),void 0)),n},An.updateWith=function(n,t,r,e){
return e=typeof e=="function"?e:T,null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Uu(n))},An.without=Uo,An.words=Mu,An.wrap=function(n,t){return nf(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Uf,An.capitalize=Cu,
An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(ku(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
},An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Uu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Uu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Lu(n),r=r&&!e?ku(r):0,e=n.length,0>r&&(r=Li(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
},An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Li(t,r)},An.invoke=Ef,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Ui.call(n,t)},An.kebabCase=Bf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=ku(r),u=0>u?Li(e+u,0):Ci(u,e-1)),
t===t)n:{for(r=u+1;r--;)if(n[r]===t){n=r;break n}n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){
return{}},An.stubString=function(){return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,ku(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n;
},An.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){
var e=ff(n)?s:j,u=3>arguments.length;return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;
if(su(n))return ju(n)?D(n):n.length;var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){
return vr(n,t,ye(r,2),true)},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(ku(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);
var u,i,o=Wu(r),f=S(r,o),c=0;r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=ku(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,An.toInteger=ku,An.toLength=Eu,An.toLower=function(n){
return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(ku(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?ku(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),
u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.11",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
An[n].placeholder=An}),r(["drop","take"],function(n,t){Ln.prototype[n]=function(r){r=r===T?1:Li(ku(r),0);var e=this.__filtered__&&!t?new Ln(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Ln.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Ln.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Ln.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Ln.prototype[n]=function(){return this.__filtered__?new Ln(this):this[r](1)}}),Ln.prototype.compact=function(){return this.filter($u)},Ln.prototype.find=function(n){return this.filter(n).head()},Ln.prototype.findLast=function(n){return this.reverse().find(n);
},Ln.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Ln(this):this.map(function(r){return Bt(r,n,t)})}),Ln.prototype.reject=function(n){return this.filter(au(ye(n)))},Ln.prototype.slice=function(n,t){n=ku(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Ln(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=ku(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Ln.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ln.prototype.toArray=function(){return this.take(4294967295);
},mt(Ln.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Ln,c=o[0],l=f||ff(t),s=function(n){return n=u.apply(An,a([n],o)),e&&h?n[0]:n};l&&r&&typeof c=="function"&&1!=c.length&&(f=l=false);var h=this.__chain__,p=!!this.__actions__.length,c=i&&!h,f=f&&!p;return!i&&l?(t=f?t:new Ln(this),t=n.apply(t,o),t.__actions__.push({
func:Qe,args:[s],thisArg:T}),new On(t,h)):c&&f?n.apply(this,o):(t=this.thru(s),c?e?t.value()[0]:t.value():t)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)})}}),mt(Ln.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
(Gi[e]||(Gi[e]=[])).push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Ln.prototype.clone=function(){var n=new Ln(this.__wrapped__);return n.__actions__=Lr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lr(this.__views__),n},Ln.prototype.reverse=function(){if(this.__filtered__){var n=new Ln(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
},Ln.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=0;for(var o=i,f=this.__views__,c=-1,a=f.length;++c<a;){var l=f[c],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":o-=s;break;case"take":o=Ci(o,n+s);break;case"takeRight":n=Li(n,o-s)}}if(n={start:n,end:o},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ln?(this.__actions__.length&&(n=new Ln(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,wi&&(An.prototype[wi]=Xe),
An}(); true?($n._=rt, !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return rt}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):undefined}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js"), __webpack_require__("../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/loglevel/lib/loglevel.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));


/***/ }),

/***/ "../../node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/redux-logger/dist/redux-logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _defineProperties = __webpack_require__("../../node_modules/babel-runtime/core-js/object/define-properties.js");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _iterator = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _assign = __webpack_require__("../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__("../../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__("../../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (e, t) {
   true ? t(exports) : undefined;
}(undefined, function (e) {
  "use strict";
  function t(e, t) {
    e.super_ = t, e.prototype = (0, _create2.default)(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
  }function r(e, t) {
    Object.defineProperty(this, "kind", { value: e, enumerable: !0 }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 });
  }function n(e, t, r) {
    n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: r, enumerable: !0 });
  }function o(e, t) {
    o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
  }function i(e, t) {
    i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
  }function a(e, t, r) {
    a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: !0 }), Object.defineProperty(this, "item", { value: r, enumerable: !0 });
  }function f(e, t, r) {
    var n = e.slice((r || t) + 1 || e.length);return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
  }function u(e) {
    var t = "undefined" == typeof e ? "undefined" : N(e);return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }function l(e, t, r, c, s, d, p) {
    s = s || [], p = p || [];var g = s.slice(0);if ("undefined" != typeof d) {
      if (c) {
        if ("function" == typeof c && c(g, d)) return;if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
          if (c.prefilter && c.prefilter(g, d)) return;if (c.normalize) {
            var h = c.normalize(g, d, e, t);h && (e = h[0], t = h[1]);
          }
        }
      }g.push(d);
    }"regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());var y = "undefined" == typeof e ? "undefined" : N(e),
        v = "undefined" == typeof t ? "undefined" : N(t),
        b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
        m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
      if (p.filter(function (t) {
        return t.lhs === e;
      }).length) e !== t && r(new n(g, e, t));else {
        if (p.push({ lhs: e, rhs: t }), Array.isArray(e)) {
          var w;e.length;for (w = 0; w < e.length; w++) w >= t.length ? r(new a(g, w, new i(void 0, e[w]))) : l(e[w], t[w], r, c, g, w, p);for (; w < t.length;) r(new a(g, w, new o(void 0, t[w++])));
        } else {
          var x = (0, _keys2.default)(e),
              S = (0, _keys2.default)(t);x.forEach(function (n, o) {
            var i = S.indexOf(n);i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], void 0, r, c, g, n, p);
          }), S.forEach(function (e) {
            l(void 0, t[e], r, c, g, e, p);
          });
        }p.length = p.length - 1;
      }
    } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
  }function c(e, t, r, n) {
    return n = n || [], l(e, t, function (e) {
      e && n.push(e);
    }, r), n.length ? n : void 0;
  }function s(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) o = o[r.path[n]];switch (r.kind) {case "A":
          s(o[r.path[n]], r.index, r.item);break;case "D":
          delete o[r.path[n]];break;case "E":case "N":
          o[r.path[n]] = r.rhs;}
    } else switch (r.kind) {case "A":
        s(e[t], r.index, r.item);break;case "D":
        e = f(e, t);break;case "E":case "N":
        e[t] = r.rhs;}return e;
  }function d(e, t, r) {
    if (e && t && r && r.kind) {
      for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];switch (r.kind) {case "A":
          s(r.path ? n[r.path[o]] : n, r.index, r.item);break;case "D":
          delete n[r.path[o]];break;case "E":case "N":
          n[r.path[o]] = r.rhs;}
    }
  }function p(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) o = o[r.path[n]];switch (r.kind) {case "A":
          p(o[r.path[n]], r.index, r.item);break;case "D":
          o[r.path[n]] = r.lhs;break;case "E":
          o[r.path[n]] = r.lhs;break;case "N":
          delete o[r.path[n]];}
    } else switch (r.kind) {case "A":
        p(e[t], r.index, r.item);break;case "D":
        e[t] = r.lhs;break;case "E":
        e[t] = r.lhs;break;case "N":
        e = f(e, t);}return e;
  }function g(e, t, r) {
    if (e && t && r && r.kind) {
      var n,
          o,
          i = e;for (o = r.path.length - 1, n = 0; n < o; n++) "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];switch (r.kind) {case "A":
          p(i[r.path[n]], r.index, r.item);break;case "D":
          i[r.path[n]] = r.lhs;break;case "E":
          i[r.path[n]] = r.lhs;break;case "N":
          delete i[r.path[n]];}
    }
  }function h(e, t, r) {
    if (e && t) {
      var n = function (n) {
        r && !r(e, t, n) || d(e, t, n);
      };l(e, t, n);
    }
  }function y(e) {
    return "color: " + F[e].color + "; font-weight: bold";
  }function v(e) {
    var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;switch (t) {case "E":
        return [r.join("."), n, "→", o];case "N":
        return [r.join("."), o];case "D":
        return [r.join(".")];case "A":
        return [r.join(".") + "[" + i + "]", a];default:
        return [];}
  }function b(e, t, r, n) {
    var o = c(e, t);try {
      n ? r.groupCollapsed("diff") : r.group("diff");
    } catch (e) {
      r.log("diff");
    }o ? o.forEach(function (e) {
      var t = e.kind,
          n = v(e);r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
    }) : r.log("—— no diff ——");try {
      r.groupEnd();
    } catch (e) {
      r.log("—— diff end —— ");
    }
  }function m(e, t, r, n) {
    switch ("undefined" == typeof e ? "undefined" : N(e)) {case "object":
        return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];case "function":
        return e(t);default:
        return e;}
  }function w(e) {
    var t = e.timestamp,
        r = e.duration;return function (e, n, o) {
      var i = ["action"];return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
    };
  }function x(e, t) {
    var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = void 0 === o ? w(t) : o,
        a = t.collapsed,
        f = t.colors,
        u = t.level,
        l = t.diff,
        c = "undefined" == typeof t.titleFormatter;e.forEach(function (o, s) {
      var d = o.started,
          p = o.startedTime,
          g = o.action,
          h = o.prevState,
          y = o.error,
          v = o.took,
          w = o.nextState,
          x = e[s + 1];x && (w = x.prevState, v = x.started - d);var S = n(g),
          k = "function" == typeof a ? a(function () {
        return w;
      }, g, o) : a,
          j = D(p),
          E = f.title ? "color: " + f.title(S) + ";" : "",
          A = ["color: gray; font-weight: lighter;"];A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");var O = i(S, j, v);try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
      } catch (e) {
        r.log(O);
      }var N = m(u, S, [h], "prevState"),
          P = m(u, S, [S], "action"),
          C = m(u, S, [y, h], "error"),
          F = m(u, S, [w], "nextState");if (N) if (f.prevState) {
        var L = "color: " + f.prevState(h) + "; font-weight: bold";r[N]("%c prev state", L, h);
      } else r[N]("prev state", h);if (P) if (f.action) {
        var T = "color: " + f.action(S) + "; font-weight: bold";r[P]("%c action    ", T, S);
      } else r[P]("action    ", S);if (y && C) if (f.error) {
        var M = "color: " + f.error(y, h) + "; font-weight: bold;";r[C]("%c error     ", M, y);
      } else r[C]("error     ", y);if (F) if (f.nextState) {
        var _ = "color: " + f.nextState(w) + "; font-weight: bold";r[F]("%c next state", _, w);
      } else r[F]("next state", w);l && b(h, w, r, k);try {
        r.groupEnd();
      } catch (e) {
        r.log("—— log end ——");
      }
    });
  }function S() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, _assign2.default)({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        f = t.diffPredicate;if ("undefined" == typeof r) return function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };var u = [];return function (e) {
      var r = e.getState;return function (e) {
        return function (l) {
          if ("function" == typeof i && !i(r, l)) return e(l);var c = {};u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;var s = void 0;if (a) try {
            s = e(l);
          } catch (e) {
            c.error = o(e);
          } else s = e(l);c.took = O.now() - c.started, c.nextState = n(r());var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;if (x(u, (0, _assign2.default)({}, t, { diff: d })), u.length = 0, c.error) throw c.error;return s;
        };
      };
    };
  }var k,
      j,
      E = function (e, t) {
    return new Array(t + 1).join(e);
  },
      A = function (e, t) {
    return E("0", t - e.toString().length) + e;
  },
      D = function (e) {
    return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
  },
      O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      N = "function" == typeof _symbol2.default && "symbol" == typeof _iterator2.default ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof _symbol2.default && e.constructor === _symbol2.default && e !== _symbol2.default.prototype ? "symbol" : typeof e;
  },
      P = function (e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];return r;
    }return (0, _from2.default)(e);
  },
      C = [];k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
    "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0);
  }), t(n, r), t(o, r), t(i, r), t(a, r), (0, _defineProperties2.default)(c, { diff: { value: c, enumerable: !0 }, observableDiff: { value: l, enumerable: !0 }, applyDiff: { value: h, enumerable: !0 }, applyChange: { value: d, enumerable: !0 }, revertChange: { value: g, enumerable: !0 }, isConflict: { value: function () {
        return "undefined" != typeof j;
      }, enumerable: !0 }, noConflict: { value: function () {
        return C && (C.forEach(function (e) {
          e();
        }), C = null), c;
      }, enumerable: !0 } });var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } },
      L = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function (e) {
      return e;
    }, actionTransformer: function (e) {
      return e;
    }, errorTransformer: function (e) {
      return e;
    }, colors: { title: function () {
        return "inherit";
      }, prevState: function () {
        return "#9E9E9E";
      }, action: function () {
        return "#03A9F4";
      }, nextState: function () {
        return "#4CAF50";
      }, error: function () {
        return "#F20404";
      } }, diff: !1, diffPredicate: void 0, transformer: void 0 },
      T = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.dispatch,
        r = e.getState;return "function" == typeof t || "function" == typeof r ? S()({ dispatch: t, getState: r }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
  };e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: !0 });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/redux-saga/es/effects.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

Object.defineProperty(exports, 'take', {
  enumerable: true,
  get: function () {
    return _io.take;
  }
});
Object.defineProperty(exports, 'takeMaybe', {
  enumerable: true,
  get: function () {
    return _io.takeMaybe;
  }
});
Object.defineProperty(exports, 'put', {
  enumerable: true,
  get: function () {
    return _io.put;
  }
});
Object.defineProperty(exports, 'putResolve', {
  enumerable: true,
  get: function () {
    return _io.putResolve;
  }
});
Object.defineProperty(exports, 'all', {
  enumerable: true,
  get: function () {
    return _io.all;
  }
});
Object.defineProperty(exports, 'race', {
  enumerable: true,
  get: function () {
    return _io.race;
  }
});
Object.defineProperty(exports, 'call', {
  enumerable: true,
  get: function () {
    return _io.call;
  }
});
Object.defineProperty(exports, 'apply', {
  enumerable: true,
  get: function () {
    return _io.apply;
  }
});
Object.defineProperty(exports, 'cps', {
  enumerable: true,
  get: function () {
    return _io.cps;
  }
});
Object.defineProperty(exports, 'fork', {
  enumerable: true,
  get: function () {
    return _io.fork;
  }
});
Object.defineProperty(exports, 'spawn', {
  enumerable: true,
  get: function () {
    return _io.spawn;
  }
});
Object.defineProperty(exports, 'join', {
  enumerable: true,
  get: function () {
    return _io.join;
  }
});
Object.defineProperty(exports, 'cancel', {
  enumerable: true,
  get: function () {
    return _io.cancel;
  }
});
Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function () {
    return _io.select;
  }
});
Object.defineProperty(exports, 'actionChannel', {
  enumerable: true,
  get: function () {
    return _io.actionChannel;
  }
});
Object.defineProperty(exports, 'cancelled', {
  enumerable: true,
  get: function () {
    return _io.cancelled;
  }
});
Object.defineProperty(exports, 'flush', {
  enumerable: true,
  get: function () {
    return _io.flush;
  }
});
Object.defineProperty(exports, 'getContext', {
  enumerable: true,
  get: function () {
    return _io.getContext;
  }
});
Object.defineProperty(exports, 'setContext', {
  enumerable: true,
  get: function () {
    return _io.setContext;
  }
});
Object.defineProperty(exports, 'takeEvery', {
  enumerable: true,
  get: function () {
    return _io.takeEvery;
  }
});
Object.defineProperty(exports, 'takeLatest', {
  enumerable: true,
  get: function () {
    return _io.takeLatest;
  }
});
Object.defineProperty(exports, 'takeLeading', {
  enumerable: true,
  get: function () {
    return _io.takeLeading;
  }
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function () {
    return _io.throttle;
  }
});
Object.defineProperty(exports, 'delay', {
  enumerable: true,
  get: function () {
    return _io.delay;
  }
});

/***/ }),

/***/ "../../node_modules/redux-saga/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffers = exports.utils = exports.effects = exports.detach = exports.SAGA_LOCATION = exports.CANCEL = exports.stdChannel = exports.multicastChannel = exports.channel = exports.eventChannel = exports.END = exports.runSaga = undefined;

var _runSaga = __webpack_require__("../../node_modules/redux-saga/es/internal/runSaga.js");

Object.defineProperty(exports, 'runSaga', {
  enumerable: true,
  get: function () {
    return _runSaga.runSaga;
  }
});

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

Object.defineProperty(exports, 'END', {
  enumerable: true,
  get: function () {
    return _channel.END;
  }
});
Object.defineProperty(exports, 'eventChannel', {
  enumerable: true,
  get: function () {
    return _channel.eventChannel;
  }
});
Object.defineProperty(exports, 'channel', {
  enumerable: true,
  get: function () {
    return _channel.channel;
  }
});
Object.defineProperty(exports, 'multicastChannel', {
  enumerable: true,
  get: function () {
    return _channel.multicastChannel;
  }
});
Object.defineProperty(exports, 'stdChannel', {
  enumerable: true,
  get: function () {
    return _channel.stdChannel;
  }
});

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

Object.defineProperty(exports, 'CANCEL', {
  enumerable: true,
  get: function () {
    return _symbols.CANCEL;
  }
});
Object.defineProperty(exports, 'SAGA_LOCATION', {
  enumerable: true,
  get: function () {
    return _symbols.SAGA_LOCATION;
  }
});

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

Object.defineProperty(exports, 'detach', {
  enumerable: true,
  get: function () {
    return _io.detach;
  }
});

var _middleware = __webpack_require__("../../node_modules/redux-saga/es/internal/middleware.js");

var _middleware2 = _interopRequireDefault(_middleware);

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var effects = _interopRequireWildcard(_effects);

var _utils = __webpack_require__("../../node_modules/redux-saga/es/utils.js");

var utils = _interopRequireWildcard(_utils);

var _buffers = __webpack_require__("../../node_modules/redux-saga/es/internal/buffers.js");

var buffers = _interopRequireWildcard(_buffers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _middleware2.default;
exports.effects = effects;
exports.utils = utils;
exports.buffers = buffers;

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/buffers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expanding = exports.sliding = exports.dropping = exports.fixed = exports.none = undefined;

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: _utils.kTrue,
  put: _utils.noop,
  take: _utils.noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = exports.none = function none() {
  return zeroBuffer;
};
var fixed = exports.fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = exports.dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = exports.sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = exports.expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/channel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEnd = exports.END = undefined;
exports.channel = channel;
exports.eventChannel = eventChannel;
exports.multicastChannel = multicastChannel;
exports.stdChannel = stdChannel;

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var _buffers = __webpack_require__("../../node_modules/redux-saga/es/internal/buffers.js");

var buffers = _interopRequireWildcard(_buffers);

var _scheduler = __webpack_require__("../../node_modules/redux-saga/es/internal/scheduler.js");

var _matcher = __webpack_require__("../../node_modules/redux-saga/es/internal/matcher.js");

var matchers = _interopRequireWildcard(_matcher);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var END = exports.END = {
  type: _symbols.CHANNEL_END_TYPE
};
var isEnd = exports.isEnd = function isEnd(a) {
  return a && a.type === _symbols.CHANNEL_END_TYPE;
};
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer) {
  if (buffer === void 0) {
    buffer = buffers.expanding();
  }

  var closed = false;
  var takers = [];

  if (true) {
    (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
    }

    if (takers.length && !buffer.isEmpty()) {
      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();

    if (true) {
      (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (!takers.length) {
      return buffer.put(input);
    }

    var cb = takers[0];
    takers.splice(0, 1);
    cb(input);
  }

  function take(cb) {
    checkForbiddenStates();

    if (true) {
      (0, _utils.check)(cb, _utils.is.func, "channel.take's callback must be a function");
    }

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        return (0, _utils.remove)(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now

    if (true) {
      (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");
    }

    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();

    if (!closed) {
      closed = true;

      if (takers.length) {
        var arr = takers;
        takers = [];

        for (var i = 0, len = arr.length; i < len; i++) {
          var taker = arr[i];
          taker(END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = buffers.none();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (_utils.is.func(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      closed = true;
      return;
    }

    chan.put(input);
  });

  if (!_utils.is.func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = (0, _utils.once)(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  }; // TODO: check if its possible to extract closing function and reuse it in both unicasts and multicasts


  var close = function close() {
    closed = true;
    var takers = currentTakers = nextTakers;

    for (var i = 0; i < takers.length; i++) {
      var taker = takers[i];
      taker(END);
    }

    nextTakers = [];
  };

  return _ref = {}, _ref[_symbols.MULTICAST] = true, _ref.put = function put(input) {
    // TODO: should I check forbidden state here? 1 of them is even impossible
    // as we do not possibility of buffer here
    if (true) {
      (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0; i < takers.length; i++) {
      var taker = takers[i];

      if (taker[_symbols.MATCH](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = matchers.wildcard;
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_symbols.MATCH] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = (0, _utils.once)(function () {
      ensureCanMutateNextTakers();
      (0, _utils.remove)(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_symbols.SAGA_ACTION]) {
      put(input);
      return;
    }

    (0, _scheduler.asap)(function () {
      return put(input);
    });
  };

  return chan;
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/error-utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;
exports.sagaStackToString = sagaStackToString;
exports.addSagaStack = addSagaStack;

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function getLocation(instrumented) {
  return instrumented[_symbols.SAGA_LOCATION];
}

function effectLocationAsString(effect) {
  var location = getLocation(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

var flatMap = function flatMap(arr, getter) {
  if (getter === void 0) {
    getter = function getter(f) {
      return f;
    };
  }

  return arr.reduce(function (acc, i) {
    return acc.concat(getter(i));
  }, []);
};

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = flatMap(sagaStack, function (i) {
    return i.cancelledTasks;
  });

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}
/**
    @param {saga, effect}[] sagaStack
    @returns {string}

    @example
    The above error occurred in task errorInPutSaga {pathToFile}
    when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
        created by fetchSaga {pathToFile}
        created by rootSaga {pathToFile}
*/

function sagaStackToString(sagaStack) {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.effect ? effectLocationAsString(firstSaga.effect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
}
function addSagaStack(errorObject, errorStack) {
  if (typeof errorObject === 'object') {
    if (typeof errorObject.sagaStack === 'undefined') {
      // property is used as a stack of descriptors for failed sagas
      // after formatting to string it will be re-written
      // to pass sagaStack as a string in user land
      Object.defineProperty(errorObject, 'sagaStack', {
        value: [],
        writable: true,
        enumerable: false
      });
    }

    errorObject.sagaStack.push(errorStack);
  }
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/io.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asEffect = exports.delay = exports.putResolve = exports.takeMaybe = exports.detach = undefined;
exports.take = take;
exports.put = put;
exports.all = all;
exports.race = race;
exports.call = call;
exports.apply = apply;
exports.cps = cps;
exports.fork = fork;
exports.spawn = spawn;
exports.join = join;
exports.cancel = cancel;
exports.select = select;
exports.actionChannel = actionChannel;
exports.cancelled = cancelled;
exports.flush = flush;
exports.getContext = getContext;
exports.setContext = setContext;
exports.takeEvery = takeEvery;
exports.takeLatest = takeLatest;
exports.takeLeading = takeLeading;
exports.throttle = throttle;

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var _sagaHelpers = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/index.js");

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';
var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_symbols.IO] = true, _ref[type] = payload, _ref;
};

var detach = exports.detach = function detach(eff) {
  if (true) {
    (0, _utils.check)(asEffect.fork(eff), _utils.is.object, 'detach(eff): argument must be a fork effect');
  }

  eff[FORK].detached = true;
  return eff;
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (_utils.is.pattern(patternOrChannel)) {
    return effect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (_utils.is.multicast(patternOrChannel) && _utils.is.notUndef(multicastPattern) && _utils.is.pattern(multicastPattern)) {
    return effect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (_utils.is.channel(patternOrChannel)) {
    return effect(TAKE, {
      channel: patternOrChannel
    });
  }

  throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
}

var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

exports.takeMaybe = takeMaybe;
function put(channel, action) {
  if (true) {
    if (arguments.length > 1) {
      (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
      (0, _utils.check)(channel, _utils.is.channel, "put(channel, action): argument " + channel + " is not a valid channel");
      (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
    } else {
      (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
    }
  }

  if (_utils.is.undef(action)) {
    action = channel;
    channel = null;
  }

  return effect(PUT, {
    channel: channel,
    action: action
  });
}

var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff[PUT].resolve = true;
  return eff;
};

exports.putResolve = putResolve;
function all(effects) {
  return effect(ALL, effects);
}
function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  if (true) {
    (0, _utils.check)(fn, _utils.is.notUndef, meth + ": argument fn is undefined");
  }

  var context = null;

  if (_utils.is.array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }

  if (context && _utils.is.string(fn) && _utils.is.func(context[fn])) {
    fn = context[fn];
  }

  if (true) {
    (0, _utils.check)(fn, _utils.is.func, meth + ": argument " + fn + " is not a function");
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

function call(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  return effect(CALL, getFnCallDesc('apply', {
    context: context,
    fn: fn
  }, args));
}
function cps(fn) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}
function fork(fn) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}
function spawn(fn) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fn].concat(args)));
}
function join() {
  for (var _len5 = arguments.length, tasks = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }

  var task = tasks[0];

  if (true) {
    (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
    (0, _utils.check)(task, _utils.is.task, "join(task): argument " + task + " is not a valid Task object " + TEST_HINT);
  }

  return effect(JOIN, task);
}
function cancel() {
  for (var _len6 = arguments.length, tasks = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }

  var task = tasks[0];

  if ( true && tasks.length === 1) {
    (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
    (0, _utils.check)(task, _utils.is.task, "cancel(task): argument " + task + " is not a valid Task object " + TEST_HINT);
  }

  return effect(CANCEL, task || _symbols.SELF_CANCELLATION);
}
function select(selector) {
  if (selector === void 0) {
    selector = _utils.identity;
  }

  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if ( true && arguments.length) {
    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'select(selector, [...]): argument selector is undefined');
    (0, _utils.check)(selector, _utils.is.func, "select(selector, [...]): argument " + selector + " is not a function");
  }

  return effect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern, buffer) {
  if (true) {
    (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');

    if (arguments.length > 1) {
      (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
      (0, _utils.check)(buffer, _utils.is.buffer, "actionChannel(pattern, buffer): argument " + buffer + " is not a valid buffer");
    }
  }

  return effect(ACTION_CHANNEL, {
    pattern: pattern,
    buffer: buffer
  });
}
function cancelled() {
  return effect(CANCELLED, {});
}
function flush(channel) {
  if (true) {
    (0, _utils.check)(channel, _utils.is.channel, "flush(channel): argument " + channel + " is not valid channel");
  }

  return effect(FLUSH, channel);
}
function getContext(prop) {
  if (true) {
    (0, _utils.check)(prop, _utils.is.string, "getContext(prop): argument " + prop + " is not a string");
  }

  return effect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)(null, props));
  }

  return effect(SET_CONTEXT, props);
}
function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(void 0, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
}
function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(void 0, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
}
function takeLeading(patternOrChannel, worker) {
  for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
    args[_key10 - 2] = arguments[_key10];
  }

  return fork.apply(void 0, [_sagaHelpers.takeLeadingHelper, patternOrChannel, worker].concat(args));
}
function throttle(ms, pattern, worker) {
  for (var _len11 = arguments.length, args = new Array(_len11 > 3 ? _len11 - 3 : 0), _key11 = 3; _key11 < _len11; _key11++) {
    args[_key11 - 3] = arguments[_key11];
  }

  return fork.apply(void 0, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
}
var delay =
/*#__PURE__*/
exports.delay = call.bind(null, _utils.delay);

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[_symbols.IO] && effect[type];
  };
};

var asEffect = exports.asEffect = {
  take:
  /*#__PURE__*/
  createAsEffectType(TAKE),
  put:
  /*#__PURE__*/
  createAsEffectType(PUT),
  all:
  /*#__PURE__*/
  createAsEffectType(ALL),
  race:
  /*#__PURE__*/
  createAsEffectType(RACE),
  call:
  /*#__PURE__*/
  createAsEffectType(CALL),
  cps:
  /*#__PURE__*/
  createAsEffectType(CPS),
  fork:
  /*#__PURE__*/
  createAsEffectType(FORK),
  join:
  /*#__PURE__*/
  createAsEffectType(JOIN),
  cancel:
  /*#__PURE__*/
  createAsEffectType(CANCEL),
  select:
  /*#__PURE__*/
  createAsEffectType(SELECT),
  actionChannel:
  /*#__PURE__*/
  createAsEffectType(ACTION_CHANNEL),
  cancelled:
  /*#__PURE__*/
  createAsEffectType(CANCELLED),
  flush:
  /*#__PURE__*/
  createAsEffectType(FLUSH),
  getContext:
  /*#__PURE__*/
  createAsEffectType(GET_CONTEXT),
  setContext:
  /*#__PURE__*/
  createAsEffectType(SET_CONTEXT)
};

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/matcher.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wildcard = exports.symbol = exports.string = exports.predicate = exports.array = undefined;
exports.default = matcher;

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var array = exports.array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = exports.predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = exports.string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = exports.symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = exports.wildcard = function wildcard() {
  return _utils.kTrue;
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : _utils.is.string(pattern) ? string : _utils.is.array(pattern) ? array : _utils.is.stringableFunc(pattern) ? string : _utils.is.func(pattern) ? predicate : _utils.is.symbol(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/middleware.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertySymbols = __webpack_require__("../../node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _keys = __webpack_require__("../../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

exports.default = sagaMiddlewareFactory;

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

var _runSaga = __webpack_require__("../../node_modules/redux-saga/es/internal/runSaga.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = (0, _keys2.default)(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }if (_getOwnPropertySymbols2.default) {
    var sourceSymbolKeys = (0, _getOwnPropertySymbols2.default)(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function sagaMiddlewareFactory(_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? {} : _ref2$context,
      options = _objectWithoutProperties(_ref2, ["context"]);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError,
      effectMiddlewares = options.effectMiddlewares;

  if (true) {
    if (_utils.is.notUndef(logger)) {
      (0, _utils.check)(logger, _utils.is.func, 'options.logger passed to the Saga middleware is not a function!');
    }

    if (_utils.is.notUndef(onError)) {
      (0, _utils.check)(onError, _utils.is.func, 'options.onError passed to the Saga middleware is not a function!');
    }

    if (_utils.is.notUndef(options.emitter)) {
      (0, _utils.check)(options.emitter, _utils.is.func, 'options.emitter passed to the Saga middleware is not a function!');
    }
  }

  function sagaMiddleware(_ref3) {
    var getState = _ref3.getState,
        dispatch = _ref3.dispatch;
    var channel = (0, _channel.stdChannel)();
    channel.put = (options.emitter || _utils.identity)(channel.put);
    sagaMiddleware.run = _runSaga.runSaga.bind(null, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor,
      logger: logger,
      onError: onError,
      effectMiddlewares: effectMiddlewares
    });
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)('sagaMiddleware', props));
    }

    _utils.object.assign(context, props);
  };

  return sagaMiddleware;
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/proc.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TASK_CANCEL = exports.CHANNEL_END = undefined;

var _keys = __webpack_require__("../../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__("../../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _assign = __webpack_require__("../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.getMetaInfo = getMetaInfo;
exports.default = proc;

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var _errorUtils = __webpack_require__("../../node_modules/redux-saga/es/internal/error-utils.js");

var _scheduler = __webpack_require__("../../node_modules/redux-saga/es/internal/scheduler.js");

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

var _matcher = __webpack_require__("../../node_modules/redux-saga/es/internal/matcher.js");

var _matcher2 = _interopRequireDefault(_matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: (0, _errorUtils.getLocation)(fn)
  };
}

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return getMetaInfo(fn);
} // TODO: check if this hacky toString stuff is needed
// also check again whats the difference between CHANNEL_END and CHANNEL_END_TYPE
// maybe this could become MAYBE_END
// I guess this gets exported so takeMaybe result can be checked


var CHANNEL_END = exports.CHANNEL_END = {
  toString: function toString() {
    return _symbols.CHANNEL_END;
  }
};
var TASK_CANCEL = exports.TASK_CANCEL = {
  toString: function toString() {
    return _symbols.TASK_CANCEL;
  }
};
/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/

function forkQueue(mainTask, onAbort, cb) {
  var tasks = [],
      result,
      completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  var getTaskNames = function getTaskNames() {
    return tasks.map(function (t) {
      return t.meta.name;
    });
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      (0, _utils.remove)(tasks, task);
      task.cont = _utils.noop;

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    }; // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _utils.noop;
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks,
    getTaskNames: getTaskNames
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (_utils.is.iterator(fn)) {
    return fn;
  } // catch synchronous failures; see #152 and #441


  var result, error;

  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  } // i.e. a generator function returns an iterator


  if (_utils.is.iterator(result)) {
    return result;
  } // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441


  return error ? (0, _utils.makeIterator)(function () {
    throw error;
  }) : (0, _utils.makeIterator)(function () {
    var pc;
    var eff = {
      done: false,
      value: result
    };

    var ret = function ret(value) {
      return {
        done: true,
        value: value
      };
    };

    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

function proc(iterator, stdChannel, dispatch, getState, parentContext, options, parentEffectId, meta, cont) {
  if (dispatch === void 0) {
    dispatch = _utils.noop;
  }

  if (getState === void 0) {
    getState = _utils.noop;
  }

  if (parentContext === void 0) {
    parentContext = {};
  }

  if (options === void 0) {
    options = {};
  }

  if (parentEffectId === void 0) {
    parentEffectId = 0;
  }

  var _options = options,
      sagaMonitor = _options.sagaMonitor,
      logger = _options.logger,
      onError = _options.onError,
      middleware = _options.middleware;
  var log = logger || _utils.log;

  var logError = function logError(err) {
    log('error', err);

    if (err.sagaStack) {
      log('error', err.sagaStack);
    }
  };

  var taskContext = (0, _create2.default)(parentContext);
  var crashedEffect = null;
  var cancelledDueToErrorTasks = [];
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _utils.noop;
  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/

  var task = newTask(parentEffectId, meta, iterator, cont);
  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    isRunning: true
  };
  var taskQueue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, taskQueue.getTaskNames());
  }, end);
  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/

  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }
  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/

  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/

      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/

  cont && (cont.cancel = cancel); // tracks the running status

  iterator._isRunning = true; // kicks up the generator

  next(); // then return the task descriptor to the caller

  return task;
  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/

  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result;

      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : {
          done: true,
          value: TASK_CANCEL
        };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = _utils.is.func(iterator.return) ? iterator.return() : {
          done: true
        };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        logError(error);
      }

      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false; // stdChannel.close()

    if (!isErr) {
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      (0, _errorUtils.addSagaStack)(result, {
        meta: meta,
        effect: crashedEffect,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (!task.cont) {
        if (result.sagaStack) {
          result.sagaStack = (0, _errorUtils.sagaStackToString)(result.sagaStack);
        }

        if (result instanceof Error && onError) {
          onError(result);
        } else {
          // TODO: could we skip this when _deferredEnd is attached?
          logError(result);
        }
      }

      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }

    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data; // prettier-ignore

    return (// Non declarative effect
      _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, meta, currCb) // declarative effects
      : (data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : (data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : (data = _io.asEffect.all(effect)) ? runAllEffect(data, effectId, currCb) : (data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : (data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : (data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : (data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : (data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : (data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : (data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = _io.asEffect.getContext(effect)) ? runGetContextEffect(data, currCb) : (data = _io.asEffect.setContext(effect)) ? runSetContextEffect(data, currCb) :
      /* anything else returned as is */
      currCb(effect)
    );
  }

  function digestEffect(effect, parentEffectId, label, cb) {
    if (label === void 0) {
      label = '';
    }

    var effectId = (0, _utils.uid)();
    sagaMonitor && sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _utils.noop; // defensive measure

      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }

      if (isErr) {
        crashedEffect = effect;
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _utils.noop; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/

      try {
        currCb.cancel();
      } catch (err) {
        logError(err);
      }

      currCb.cancel = _utils.noop; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    }; // if one can find a way to decouple runEffect from closure variables
    // so it could be the call to it could be referentially transparent
    // this potentially could be simplified, finalRunEffect created beforehand
    // and this part of the code wouldnt have to know about middleware stuff


    if (_utils.is.func(middleware)) {
      middleware(function (eff) {
        return runEffect(eff, effectId, currCb);
      })(effect);
      return;
    }

    runEffect(effect, effectId, currCb);
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[_symbols.CANCEL];

    if (_utils.is.func(cancelPromise)) {
      cb.cancel = cancelPromise;
    } else if (_utils.is.func(promise.abort)) {
      cb.cancel = function () {
        return promise.abort();
      };
    }

    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, meta, cb) {
    proc(iterator, stdChannel, dispatch, getState, taskContext, options, effectId, meta, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var _ref2$channel = _ref2.channel,
        channel = _ref2$channel === void 0 ? stdChannel : _ref2$channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    var takeCb = function takeCb(input) {
      if (input instanceof Error) {
        cb(input, true);
        return;
      }

      if ((0, _channel.isEnd)(input) && !maybe) {
        cb(CHANNEL_END);
        return;
      }

      cb(input);
    };

    try {
      channel.take(takeCb, _utils.is.notUndef(pattern) ? (0, _matcher2.default)(pattern) : null);
    } catch (err) {
      cb(err, true);
      return;
    }

    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    (0, _scheduler.asap)(function () {
      var result;

      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        cb(error, true);
        return;
      }

      if (resolve && _utils.is.promise(result)) {
        resolvePromise(result, cb);
      } else {
        cb(result);
        return;
      }
    }); // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;
    var result; // catch synchronous failures; see #152

    try {
      result = fn.apply(context, args);
    } catch (error) {
      cb(error, true);
      return;
    }

    return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, getMetaInfo(fn), cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb
    // catch synchronous failures; see #152
    try {
      var cpsCb = function cpsCb(err, res) {
        return _utils.is.undef(err) ? cb(res) : cb(err, true);
      };

      fn.apply(context, args.concat(cpsCb));

      if (cpsCb.cancel) {
        cb.cancel = function () {
          return cpsCb.cancel();
        };
      }
    } catch (error) {
      cb(error, true);
      return;
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;
    var taskIterator = createTaskIterator({
      context: context,
      fn: fn,
      args: args
    });
    var meta = getIteratorMetaInfo(taskIterator, fn);

    try {
      (0, _scheduler.suspend)();

      var _task = proc(taskIterator, stdChannel, dispatch, getState, taskContext, options, effectId, meta, detached ? null : _utils.noop);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      (0, _scheduler.flush)();
    } // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        return (0, _utils.remove)(t.joiners, joiner);
      };

      t.joiners.push(joiner);
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(taskToCancel, cb) {
    if (taskToCancel === _symbols.SELF_CANCELLATION) {
      taskToCancel = task;
    }

    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }

    cb(); // cancel effects are non cancellables
  }

  function runAllEffect(effects, effectId, cb) {
    var keys = (0, _keys2.default)(effects);

    if (!keys.length) {
      cb(_utils.is.array(effects) ? [] : {});
      return;
    }

    var completedCount = 0;
    var completed;
    var results = {};
    var childCbs = {};

    function checkEffectEnd() {
      if (completedCount === keys.length) {
        completed = true;
        cb(_utils.is.array(effects) ? _utils.array.from(_extends({}, results, {
          length: keys.length
        })) : results);
      }
    }

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEffectEnd();
        }
      };

      chCbAtKey.cancel = _utils.noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      return digestEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed;
    var keys = (0, _keys2.default)(effects);
    var childCbs = {};
    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          var _response;

          cb.cancel();
          completed = true;
          var response = (_response = {}, _response[key] = res, _response);
          cb(_utils.is.array(effects) ? [].slice.call(_extends({}, response, {
            length: keys.length
          })) : response);
        }
      };

      chCbAtKey.cancel = _utils.noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      if (completed) {
        return;
      }

      digestEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(void 0, [getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;
    // TODO: rethink how END is handled
    var chan = (0, _channel.channel)(buffer);
    var match = (0, _matcher2.default)(pattern);

    var taker = function taker(action) {
      if (!(0, _channel.isEnd)(action)) {
        stdChannel.take(taker, match);
      }

      chan.put(action);
    };

    stdChannel.take(taker, match);
    cb(chan);
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function runGetContextEffect(prop, cb) {
    cb(taskContext[prop]);
  }

  function runSetContextEffect(props, cb) {
    _utils.object.assign(taskContext, props);
    cb();
  }

  function newTask(id, meta, iterator, cont) {
    var _ref9;

    iterator._deferredEnd = null;
    return _ref9 = {}, _ref9[_symbols.TASK] = true, _ref9.id = id, _ref9.meta = meta, _ref9.toPromise = function toPromise() {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      }

      var def = (0, _utils.deferred)();
      iterator._deferredEnd = def;

      if (!iterator._isRunning) {
        if (iterator._isAborted) {
          def.reject(iterator._error);
        } else {
          def.resolve(iterator._result);
        }
      }

      return def.promise;
    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
      return iterator._isRunning;
    }, _ref9.isCancelled = function isCancelled() {
      return iterator._isCancelled;
    }, _ref9.isAborted = function isAborted() {
      return iterator._isAborted;
    }, _ref9.result = function result() {
      return iterator._result;
    }, _ref9.error = function error() {
      return iterator._error;
    }, _ref9.setContext = function setContext(props) {
      if (true) {
        (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)('task', props));
      }

      _utils.object.assign(taskContext, props);
    }, _ref9;
  }
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/runSaga.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSaga = runSaga;

var _redux = __webpack_require__("../../node_modules/redux-saga/node_modules/redux/es/redux.js");

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var _proc = __webpack_require__("../../node_modules/redux-saga/es/internal/proc.js");

var _proc2 = _interopRequireDefault(_proc);

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(options, saga) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (true) {
    (0, _utils.check)(saga, _utils.is.func, NON_GENERATOR_ERR);
  }

  var iterator = saga.apply(void 0, args);

  if (true) {
    (0, _utils.check)(iterator, _utils.is.iterator, NON_GENERATOR_ERR);
  }

  var _options$channel = options.channel,
      channel = _options$channel === void 0 ? (0, _channel.stdChannel)() : _options$channel,
      dispatch = options.dispatch,
      getState = options.getState,
      context = options.context,
      sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      effectMiddlewares = options.effectMiddlewares,
      onError = options.onError;
  var effectId = (0, _utils.uid)();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils.noop;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils.noop;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils.noop;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils.noop;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils.noop;
    sagaMonitor.effectTriggered({
      effectId: effectId,
      root: true,
      parentEffectId: 0,
      effect: {
        root: true,
        saga: saga,
        args: args
      }
    });
  }

  if (( true) && _utils.is.notUndef(effectMiddlewares)) {
    var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
    (0, _utils.check)(effectMiddlewares, _utils.is.array, MIDDLEWARE_TYPE_ERROR);
    effectMiddlewares.forEach(function (effectMiddleware) {
      return (0, _utils.check)(effectMiddleware, _utils.is.func, MIDDLEWARE_TYPE_ERROR);
    });
  }

  var middleware = effectMiddlewares && _redux.compose.apply(void 0, effectMiddlewares);
  var task = (0, _proc2.default)(iterator, channel, (0, _utils.wrapSagaDispatch)(dispatch), getState, context, {
    sagaMonitor: sagaMonitor,
    logger: logger,
    onError: onError,
    middleware: middleware
  }, effectId, (0, _proc.getMetaInfo)(saga));

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qEnd = undefined;
exports.safeName = safeName;
exports.default = fsmIterator;

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

var done = {
  done: true,
  value: undefined
};
var qEnd = exports.qEnd = {};
function safeName(patternOrChannel) {
  if (_utils.is.channel(patternOrChannel)) {
    return 'channel';
  }

  if (_utils.is.stringableFunc(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (_utils.is.func(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, q0, name) {
  var updateState,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return (0, _utils.makeIterator)(next, function (error) {
    return next(null, error);
  }, name);
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/sagaHelpers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleHelper = exports.takeLeadingHelper = exports.takeLatestHelper = exports.takeEveryHelper = undefined;

var _takeEvery = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js");

var _takeEvery2 = _interopRequireDefault(_takeEvery);

var _takeLatest = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js");

var _takeLatest2 = _interopRequireDefault(_takeLatest);

var _takeLeading = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/takeLeading.js");

var _takeLeading2 = _interopRequireDefault(_takeLeading);

var _throttle = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.takeEveryHelper = _takeEvery2.default;
exports.takeLatestHelper = _takeLatest2.default;
exports.takeLeadingHelper = _takeLeading2.default;
exports.throttleHelper = _throttle2.default;

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = takeEvery;

var _fsmIterator = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0, _io.take)(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io.fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [_fsmIterator.qEnd] : ['q1', yFork(action)];
    }
  }, 'q1', "takeEvery(" + (0, _fsmIterator.safeName)(patternOrChannel) + ", " + worker.name + ")");
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = takeLatest;

var _fsmIterator = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0, _io.take)(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io.fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: (0, _io.cancel)(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [_fsmIterator.qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', "takeLatest(" + (0, _fsmIterator.safeName)(patternOrChannel) + ", " + worker.name + ")");
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/sagaHelpers/takeLeading.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = takeLeading;

var _fsmIterator = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: (0, _io.take)(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io.call.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [_fsmIterator.qEnd] : ['q1', yCall(action)];
    }
  }, 'q1', "takeLeading(" + (0, _fsmIterator.safeName)(patternOrChannel) + ", " + worker.name + ")");
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/sagaHelpers/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;

var _fsmIterator = __webpack_require__("../../node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");

var _fsmIterator2 = _interopRequireDefault(_fsmIterator);

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

var _channel = __webpack_require__("../../node_modules/redux-saga/es/internal/channel.js");

var _buffers = __webpack_require__("../../node_modules/redux-saga/es/internal/buffers.js");

var buffers = _interopRequireWildcard(_buffers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: (0, _io.actionChannel)(pattern, buffers.sliding(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: (0, _io.take)(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io.fork.apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: (0, _io.delay)(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return (0, _fsmIterator2.default)({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel.END ? [_fsmIterator.qEnd] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', "throttle(" + (0, _fsmIterator.safeName)(pattern) + ", " + worker.name + ")");
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/scheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = asap;
exports.suspend = suspend;
exports.flush = flush;
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/

function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/

function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/

function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/symbols.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SAGA_LOCATION = exports.TASK_CANCEL = exports.TASK = exports.SELF_CANCELLATION = exports.SAGA_ACTION = exports.MULTICAST = exports.MATCH = exports.IO = exports.CHANNEL_END_TYPE = exports.CHANNEL_END = exports.CANCEL = undefined;

var _for = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol/for.js");

var _for2 = _interopRequireDefault(_for);

var _symbol = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createName = function createName(name) {
  return "@@redux-saga/" + name;
};

var createSymbol = function createSymbol(id) {
  id = createName(id);
  return typeof _symbol2.default === 'function' ? (0, _symbol2.default)(id) : id;
};

var createGlobalSymbol = function createGlobalSymbol(id) {
  id = createName(id);
  return typeof _symbol2.default === 'function' && typeof _for2.default === 'function' ? (0, _for2.default)(id) : id;
};

var CANCEL =
/*#__PURE__*/
exports.CANCEL = createSymbol('CANCEL_PROMISE');
var CHANNEL_END =
/*#__PURE__*/
exports.CHANNEL_END = createSymbol('CHANNEL_END');
var CHANNEL_END_TYPE =
/*#__PURE__*/
exports.CHANNEL_END_TYPE = createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
exports.IO = createSymbol('IO');
var MATCH =
/*#__PURE__*/
exports.MATCH = createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
exports.MULTICAST = createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
exports.SAGA_ACTION = createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
exports.SELF_CANCELLATION = createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
exports.TASK = createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
exports.TASK_CANCEL = createSymbol('TASK_CANCEL');
var SAGA_LOCATION =
/*#__PURE__*/
exports.SAGA_LOCATION = createGlobalSymbol('LOCATION');

/***/ }),

/***/ "../../node_modules/redux-saga/es/internal/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneableGenerator = exports.wrapSagaDispatch = exports.createSetContextWarning = exports.internalErr = exports.updateIncentive = exports.uid = exports.array = exports.object = exports.is = exports.identity = exports.noop = exports.kFalse = exports.kTrue = exports.konst = undefined;

var _defineProperty = __webpack_require__("../../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _iterator = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _assign = __webpack_require__("../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.check = check;
exports.hasOwn = hasOwn;
exports.remove = remove;
exports.once = once;
exports.deferred = deferred;
exports.arrayOfDeferred = arrayOfDeferred;
exports.delay = delay;
exports.createMockTask = createMockTask;
exports.autoInc = autoInc;
exports.makeIterator = makeIterator;
exports.log = log;
exports.deprecate = deprecate;

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var konst = exports.konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
exports.kTrue = konst(true);
var kFalse =
/*#__PURE__*/
exports.kFalse = konst(false);
var noop = exports.noop = function noop() {};
var identity = exports.identity = function identity(v) {
  return v;
};
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}
var is = exports.is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && typeof obj === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(_symbol2.default) ? is.func(it[_iterator2.default]) : is.array(it);
  },
  task: function task(t) {
    return t && t[_symbols.TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || is.symbol(pat) || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  },
  symbol: function symbol(sym) {
    return Boolean(sym) && typeof _symbol2.default === 'function' && sym.constructor === _symbol2.default && sym !== _symbol2.default.prototype;
  },
  multicast: function multicast(ch) {
    return is.channel(ch) && ch[_symbols.MULTICAST];
  }
};
var object = exports.object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
var array = exports.array = {
  from: function from(obj) {
    var arr = Array(obj.length);

    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }

    return arr;
  }
};
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}
function deferred(props) {
  if (props === void 0) {
    props = {};
  }

  var def = _extends({}, props);

  var promise = new _promise2.default(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}
function delay(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new _promise2.default(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[_symbols.CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}
function createMockTask() {
  var _ref;

  var running = true;

  var _result, _error;

  return _ref = {}, _ref[_symbols.TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}
function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}
var uid =
/*#__PURE__*/
exports.uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof _symbol2.default !== 'undefined') {
    iterator[_iterator2.default] = function () {
      return iterator;
    };
  }

  return iterator;
}
/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/

function log(level, message, error) {
  if (error === void 0) {
    error = '';
  }

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log("redux-saga " + level + ": " + message + "\n" + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}
function deprecate(fn, deprecationWarning) {
  return function () {
    if (true) log('warn', deprecationWarning);
    return fn.apply(void 0, arguments);
  };
}
var updateIncentive = exports.updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + " has been deprecated in favor of " + preferred + ", please update your code";
};
var internalErr = exports.internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = exports.createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var wrapSagaDispatch = exports.wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch((0, _defineProperty2.default)(action, _symbols.SAGA_ACTION, {
      value: true
    }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(void 0, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(void 0, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};

exports.cloneableGenerator = cloneableGenerator;

/***/ }),

/***/ "../../node_modules/redux-saga/es/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__("../../node_modules/redux-saga/es/internal/utils.js");

Object.defineProperty(exports, 'delay', {
  enumerable: true,
  get: function () {
    return _utils.delay;
  }
});
Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function () {
    return _utils.noop;
  }
});
Object.defineProperty(exports, 'is', {
  enumerable: true,
  get: function () {
    return _utils.is;
  }
});
Object.defineProperty(exports, 'deferred', {
  enumerable: true,
  get: function () {
    return _utils.deferred;
  }
});
Object.defineProperty(exports, 'arrayOfDeferred', {
  enumerable: true,
  get: function () {
    return _utils.arrayOfDeferred;
  }
});
Object.defineProperty(exports, 'createMockTask', {
  enumerable: true,
  get: function () {
    return _utils.createMockTask;
  }
});
Object.defineProperty(exports, 'cloneableGenerator', {
  enumerable: true,
  get: function () {
    return _utils.cloneableGenerator;
  }
});

var _symbols = __webpack_require__("../../node_modules/redux-saga/es/internal/symbols.js");

Object.defineProperty(exports, 'SAGA_ACTION', {
  enumerable: true,
  get: function () {
    return _symbols.SAGA_ACTION;
  }
});
Object.defineProperty(exports, 'TASK', {
  enumerable: true,
  get: function () {
    return _symbols.TASK;
  }
});

var _io = __webpack_require__("../../node_modules/redux-saga/es/internal/io.js");

Object.defineProperty(exports, 'asEffect', {
  enumerable: true,
  get: function () {
    return _io.asEffect;
  }
});

var _proc = __webpack_require__("../../node_modules/redux-saga/es/internal/proc.js");

Object.defineProperty(exports, 'CHANNEL_END', {
  enumerable: true,
  get: function () {
    return _proc.CHANNEL_END;
  }
});

/***/ }),

/***/ "../../node_modules/redux-saga/node_modules/redux/es/redux.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__DO_NOT_USE__ActionTypes = exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("../../node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertySymbols = __webpack_require__("../../node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _defineProperty2 = __webpack_require__("../../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__("../../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__("../../node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _symbolObservable = __webpack_require__("../../node_modules/symbol-observable/es/index.js");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while ((0, _getPrototypeOf2.default)(proto) !== null) {
    proto = (0, _getPrototypeOf2.default)(proto);
  }

  return (0, _getPrototypeOf2.default)(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */

  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */

  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = (0, _keys2.default)(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = (0, _keys2.default)(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  (0, _keys2.default)(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */

function combineReducers(reducers) {
  var reducerKeys = (0, _keys2.default)(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = (0, _keys2.default)(finalReducers);
  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = (0, _keys2.default)(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    (0, _defineProperty3.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = (0, _keys2.default)(source);

    if (typeof _getOwnPropertySymbols2.default === 'function') {
      ownKeys = ownKeys.concat((0, _getOwnPropertySymbols2.default)(source).filter(function (sym) {
        return (0, _getOwnPropertyDescriptor2.default)(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = createStore;
exports.combineReducers = combineReducers;
exports.bindActionCreators = bindActionCreators;
exports.applyMiddleware = applyMiddleware;
exports.compose = compose;
exports.__DO_NOT_USE__ActionTypes = ActionTypes;

/***/ }),

/***/ "../../node_modules/sdp-transform/lib/grammar.js":
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{ //c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{ //b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          'rtpmap:%d %s/%s/%s':
          o.rate ?
          'rtpmap:%d %s/%s':
          'rtpmap:%d %s';
      }
    },
    { //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    { //a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          'rtcp:%d %s IP%d %s':
          'rtcp:%d';
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%d trr-int %d'
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          'rtcp-fb:%s %s %s':
          'rtcp-fb:%s %s';
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'uri', 'config'],
      format: function (o) {
        return 'extmap:%d' + (o.direction ? '/%s' : '%v') + ' %s' + (o.config ? ' %s' : '');
      }
    },
    { //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          'crypto:%d %s %s %s':
          'crypto:%d %s %s';
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: 'ptime:%d'
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: 'maxptime:%d'
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    { //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    { //a=ssrc-group:FEC 1 2
      //a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { //a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null) ?
          'sctpmap:%s %s %s' :
          'sctpmap:%s %s';
      }
    },
    { //a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    { //a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    { //a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      //a=imageattr:* send [x=800,y=640] recv *
      //a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        //a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        //send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        //recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      //a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        //a=simulcast:
        '^simulcast:' +
        //send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        //space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        //end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //Old simulcast draft 03 (implemented by Firefox)
      //  https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      //a=simulcast: recv pt=97;98 send pt=97
      //a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      //a=framerate:25
      //a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    { // RFC4570
      //a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    { //a=bundle-only
      name: 'bundleOnly',
      reg: /^(bundle-only)/
    },
    { //a=label:1
      name: 'label',
      reg: /^label:(.+)/,
      format: 'label:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
      name:'sctpPort',
      reg: /^sctp-port:(\d+)$/,
      format: 'sctp-port:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
      name:'maxMessageSize',
      reg: /^max-message-size:(\d+)$/,
      format: 'max-message-size:%s'
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ }),

/***/ "../../node_modules/sdp-transform/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__("../../node_modules/sdp-transform/lib/parser.js");
var writer = __webpack_require__("../../node_modules/sdp-transform/lib/writer.js");

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parseParams = parser.parseParams;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;


/***/ }),

/***/ "../../node_modules/sdp-transform/lib/parser.js":
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__("../../node_modules/sdp-transform/lib/grammar.js");
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  } else if (s.length === 1 && expr.length > 1) {
    acc[s[0]] = undefined;
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/\;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ }),

/***/ "../../node_modules/sdp-transform/lib/writer.js":
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__("../../node_modules/sdp-transform/lib/grammar.js");

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),

/***/ "../../node_modules/split-on-first/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "../../node_modules/symbol-observable/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js"), __webpack_require__("../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../node_modules/symbol-observable/es/ponyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "../../node_modules/timer-machine/lib/timer.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var EventEmitter = __webpack_require__("../../node_modules/events/events.js").EventEmitter
var inherits     = __webpack_require__("../../node_modules/util/util.js").inherits

/**
 * Expose `Timer`.
 */
module.exports = Timer

/**
 * Stores named timers.
 */
var timers = {}

/**
 * Initialize a `Timer` object
 * @param {Boolean} start
 * @api public
 */
function Timer(start) {
  EventEmitter.call(this)
  this._total = 0
  this._start = null
  this._startCount = 0
  if (start) {
    this.start()
  }
}

/**
 * Timer extends EventEmitter.
 */
inherits(Timer, EventEmitter)

/**
 * Get a named timer, initialize a new one if it does not exist.
 * @param {String} name
 * @return {Timer}
 * @api public
 */
Timer.get = function (name) {
  if (!timers[name]) {
    timers[name] = new Timer()
  }
  return timers[name]
}

/**
 * Destroy an existing named timer.
 * @param {String} name
 * @return {Boolean}
 * @api public
 */
Timer.destroy = function (name) {
  if (timers[name]) {
    return delete timers[name]
  }
  return false
}

/**
 * Get the total milliseconds the timer has run.
 * @return {Number}
 * #api public
 */
Timer.prototype.time = function () {
  var total = this._total
  total += this.timeFromStart()
  return total
}

/**
 * Get the total millisseonds the time has run and emit time event.
 * @return {Number}
 */
Timer.prototype.emitTime = function () {
  var time = this.time()
  this.emit('time', time)
  return time
}

/**
 * Get the time in milliseconds since the timer was last started.
 * @return {Number}
 * @api public
 */
Timer.prototype.timeFromStart = function () {
  return this.isStarted() ? now() - this._start : 0
}

/**
 * Check to see if the timer object is currently started.
 * @return {Boolean}
 * @api public
 */
Timer.prototype.isStarted = function () {
  return !this.isStopped()
}

/**
 * Check to see if the timer object is currently stopped.
 * @return {Boolean}
 * @api public
 */
Timer.prototype.isStopped = function () {
  return this._start === null
}

/**
 * Start the timer if it was not already started.
 * @return {Boolean}
 * @api public
 */
Timer.prototype.start = function () {
  ++this._startCount
  if (this.isStopped()) {
    this._start = now()
    this.emit('start')
    return true
  }
  return false
}

/**
 * Stop the timer if it was not already stopped.
 * @return {Boolean}
 * @api public
 */
Timer.prototype.stop = function () {
  if (this.isStarted()) {
    this._total += this.timeFromStart()
    this._start = null
    this._stopCount = 0
    this.emit('stop')
    return true
  }
  return false
}

/**
 * Stop the timer if once called equal to the number of times start was called.
 * @return {Boolean} true if timer was stopped
 * @api public
 */
Timer.prototype.stopParallel = function () {
  if (this.isStarted()) {
    --this._startCount
    if (this._startCount === 0) {
      return this.stop()
    }
  }
  return false
}

/**
 * Start or stop the timer depending on current state.
 * @return {Boolean}
 * @api public
 */
Timer.prototype.toggle = function () {
  return this.start() || this.stop()
}

/**
 * Return a string representation of the timer.
 * @return {String}
 */
Timer.prototype.toString = function () {
  return this.time() + 'ms'
}

/**
 * Return a numeric value of the timer in milliseconds.
 * @return {Number}
 */
Timer.prototype.valueOf = function () {
  return this.time()
}

/**
 * Get the current time in milliseconds.
 * @return {Number}
 * @api private
 */
function now() {
  return new Date().getTime();
}


/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("../../node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__("../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../node_modules/webrtc-adapter/out/adapter_no_edge.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
 /* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (typeof module === 'object') {
  module.exports = SDPUtils;
}

},{}],3:[function(require,module,exports){
(function (global){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var adapterFactory = require('./adapter_factory.js');
module.exports = adapterFactory({window: global.window});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./adapter_factory.js":4}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var utils = require('./utils');
// Shimming starts here.
module.exports = function(dependencies, opts) {
  var window = dependencies && dependencies.window;

  var options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true,
  };

  for (var key in opts) {
    if (hasOwnProperty.call(opts, key)) {
      options[key] = opts[key];
    }
  }

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = require('./chrome/chrome_shim') || null;
  var edgeShim = require('./edge/edge_shim') || null;
  var firefoxShim = require('./firefox/firefox_shim') || null;
  var safariShim = require('./safari/safari_shim') || null;
  var commonShim = require('./common_shim') || null;

  // Export to the adapter global object visible in the browser.
  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;
      commonShim.shimCreateObjectURL(window);

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimSourceObject(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;
      commonShim.shimCreateObjectURL(window);

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimSourceObject(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;
      commonShim.shimCreateObjectURL(window);

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);
      edgeShim.shimGetDisplayMedia(window);

      // the edge shim implements the full RTCIceCandidate object.

      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;
      commonShim.shimCreateObjectURL(window);

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCreateOfferLegacy(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
};

},{"./chrome/chrome_shim":5,"./common_shim":7,"./edge/edge_shim":1,"./firefox/firefox_shim":8,"./safari/safari_shim":10,"./utils":11}],5:[function(require,module,exports){

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var utils = require('../utils.js');
var logging = utils.log;

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function(name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function(id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  var trackStats = [];
  result.forEach(function(value) {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function(trackStat) {
    result.forEach(function(stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

module.exports = {
  shimGetUserMedia: require('./getusermedia'),
  shimMediaStream: function(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
          }
          this.addEventListener('track', this._ontrack = f);
        },
        enumerable: true,
        configurable: true
      });
      var origSetRemoteDescription =
          window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        if (!pc._ontrackpoly) {
          pc._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === te.track.id;
                });
              } else {
                receiver = {track: te.track};
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = {receiver: receiver};
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === track.id;
                });
              } else {
                receiver = {track: track};
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = {receiver: receiver};
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
          };
          pc.addEventListener('addstream', pc._ontrackpoly);
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    } else {
      // even if RTCRtpTransceiver is in window, it is only used and
      // emitted in unified-plan. Unfortunately this means we need
      // to unconditionally wrap the event.
      utils.wrapPeerConnectionEvent(window, 'track', function(e) {
        if (!e.transceiver) {
          Object.defineProperty(e, 'transceiver',
            {value: {receiver: e.receiver}});
        }
        return e;
      });
    }
  },

  shimGetSendersWithDtmf: function(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection &&
        !('getSenders' in window.RTCPeerConnection.prototype) &&
        'createDTMFSender' in window.RTCPeerConnection.prototype) {
      var shimSenderWithDtmf = function(pc, track) {
        return {
          track: track,
          get dtmf() {
            if (this._dtmf === undefined) {
              if (track.kind === 'audio') {
                this._dtmf = pc.createDTMFSender(track);
              } else {
                this._dtmf = null;
              }
            }
            return this._dtmf;
          },
          _pc: pc
        };
      };

      // augment addTrack when getSenders is not available.
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function() {
          this._senders = this._senders || [];
          return this._senders.slice(); // return a copy of the internal state.
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          var sender = origAddTrack.apply(pc, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(pc, track);
            pc._senders.push(sender);
          }
          return sender;
        };

        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          origRemoveTrack.apply(pc, arguments);
          var idx = pc._senders.indexOf(sender);
          if (idx !== -1) {
            pc._senders.splice(idx, 1);
          }
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          pc._senders.push(shimSenderWithDtmf(pc, track));
        });
      };

      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [stream]);

        stream.getTracks().forEach(function(track) {
          var sender = pc._senders.find(function(s) {
            return s.track === track;
          });
          if (sender) {
            pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
          }
        });
      };
    } else if (typeof window === 'object' && window.RTCPeerConnection &&
               'getSenders' in window.RTCPeerConnection.prototype &&
               'createDTMFSender' in window.RTCPeerConnection.prototype &&
               window.RTCRtpSender &&
               !('dtmf' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };

      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
  },

  shimSenderReceiverGetStats: function(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection &&
        window.RTCRtpSender && window.RTCRtpReceiver)) {
      return;
    }

    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      if (origGetSenders) {
        window.RTCPeerConnection.prototype.getSenders = function() {
          var pc = this;
          var senders = origGetSenders.apply(pc, []);
          senders.forEach(function(sender) {
            sender._pc = pc;
          });
          return senders;
        };
      }

      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      if (origAddTrack) {
        window.RTCPeerConnection.prototype.addTrack = function() {
          var sender = origAddTrack.apply(this, arguments);
          sender._pc = this;
          return sender;
        };
      }
      window.RTCRtpSender.prototype.getStats = function() {
        var sender = this;
        return this._pc.getStats().then(function(result) {
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          return filterStats(result, sender.track, true);
        });
      };
    }

    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
      var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
      if (origGetReceivers) {
        window.RTCPeerConnection.prototype.getReceivers = function() {
          var pc = this;
          var receivers = origGetReceivers.apply(pc, []);
          receivers.forEach(function(receiver) {
            receiver._pc = pc;
          });
          return receivers;
        };
      }
      utils.wrapPeerConnectionEvent(window, 'track', function(e) {
        e.receiver._pc = e.srcElement;
        return e;
      });
      window.RTCRtpReceiver.prototype.getStats = function() {
        var receiver = this;
        return this._pc.getStats().then(function(result) {
          return filterStats(result, receiver.track, false);
        });
      };
    }

    if (!('getStats' in window.RTCRtpSender.prototype &&
        'getStats' in window.RTCRtpReceiver.prototype)) {
      return;
    }

    // shim RTCPeerConnection.getStats(track).
    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function() {
      var pc = this;
      if (arguments.length > 0 &&
          arguments[0] instanceof window.MediaStreamTrack) {
        var track = arguments[0];
        var sender;
        var receiver;
        var err;
        pc.getSenders().forEach(function(s) {
          if (s.track === track) {
            if (sender) {
              err = true;
            } else {
              sender = s;
            }
          }
        });
        pc.getReceivers().forEach(function(r) {
          if (r.track === track) {
            if (receiver) {
              err = true;
            } else {
              receiver = r;
            }
          }
          return r.track === track;
        });
        if (err || (sender && receiver)) {
          return Promise.reject(new DOMException(
            'There are more than one sender or receiver for the track.',
            'InvalidAccessError'));
        } else if (sender) {
          return sender.getStats();
        } else if (receiver) {
          return receiver.getStats();
        }
        return Promise.reject(new DOMException(
          'There is no sender or receiver for the track.',
          'InvalidAccessError'));
      }
      return origGetStats.apply(pc, arguments);
    };
  },

  shimSourceObject: function(window) {
    var URL = window && window.URL;

    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return undefined;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimAddTrackRemoveTrackWithNative: function(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams).map(function(streamId) {
        return pc._shimmedLocalStreams[streamId][0];
      });
    };

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      var sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.',
              'InvalidAccessError');
        }
      });
      var existingSenders = pc.getSenders();
      origAddStream.apply(this, arguments);
      var newSenders = pc.getSenders().filter(function(newSender) {
        return existingSenders.indexOf(newSender) === -1;
      });
      this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

    var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(function(streamId) {
          var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            pc._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (pc._shimmedLocalStreams[streamId].length === 1) {
            delete pc._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
  },

  shimAddTrackRemoveTrack: function(window) {
    if (!window.RTCPeerConnection) {
      return;
    }
    var browserDetails = utils.detectBrowser(window);
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack &&
        browserDetails.version >= 65) {
      return this.shimAddTrackRemoveTrackWithNative(window);
    }

    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    var origGetLocalStreams = window.RTCPeerConnection.prototype
        .getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var pc = this;
      var nativeStreams = origGetLocalStreams.apply(this);
      pc._reverseStreams = pc._reverseStreams || {};
      return nativeStreams.map(function(stream) {
        return pc._reverseStreams[stream.id];
      });
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.',
              'InvalidAccessError');
        }
      });
      // Add identity mapping for consistency with addTrack.
      // Unless this is being used with a stream from addTrack.
      if (!pc._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(pc, [stream]);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);
      delete pc._reverseStreams[(pc._streams[stream.id] ?
          pc._streams[stream.id].id : stream.id)];
      delete pc._streams[stream.id];
    };

    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      var streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(function(t) {
            return t === track;
          })) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      var alreadyExists = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      var oldStream = pc._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(function() {
          pc.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        var newStream = new window.MediaStream([track]);
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        pc.addStream(newStream);
      }
      return pc.getSenders().find(function(s) {
        return s.track === track;
      });
    };

    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
            externalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    function replaceExternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
            internalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    ['createOffer', 'createAnswer'].forEach(function(method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function() {
        var pc = this;
        var args = arguments;
        var isLegacyCall = arguments.length &&
            typeof arguments[0] === 'function';
        if (isLegacyCall) {
          return nativeMethod.apply(pc, [
            function(description) {
              var desc = replaceInternalStreamId(pc, description);
              args[0].apply(null, [desc]);
            },
            function(err) {
              if (args[1]) {
                args[1].apply(null, err);
              }
            }, arguments[2]
          ]);
        }
        return nativeMethod.apply(pc, arguments)
        .then(function(description) {
          return replaceInternalStreamId(pc, description);
        });
      };
    });

    var origSetLocalDescription =
        window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function() {
      var pc = this;
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(pc, arguments);
      }
      arguments[0] = replaceExternalStreamId(pc, arguments[0]);
      return origSetLocalDescription.apply(pc, arguments);
    };

    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

    var origLocalDescription = Object.getOwnPropertyDescriptor(
        window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype,
        'localDescription', {
          get: function() {
            var pc = this;
            var description = origLocalDescription.get.apply(this);
            if (description.type === '') {
              return description;
            }
            return replaceInternalStreamId(pc, description);
          }
        });

    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      var isLocal = sender._pc === pc;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      pc._streams = pc._streams || {};
      var stream;
      Object.keys(pc._streams).forEach(function(streamid) {
        var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
          return sender.track === track;
        });
        if (hasTrack) {
          stream = pc._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          pc.removeStream(pc._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        pc.dispatchEvent(new Event('negotiationneeded'));
      }
    };
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (window.webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    }
    if (!window.RTCPeerConnection) {
      return;
    }

    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(selector,
        successCallback, errorCallback) {
      var pc = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 ||
          typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function(stats) {
        return new Map(Object.keys(stats).map(function(key) {
          return [key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_,
          arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        origGetStats.apply(pc, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function(method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function() {
              var args = arguments;
              var pc = this;
              var promise = new Promise(function(resolve, reject) {
                nativeMethod.apply(pc, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var pc = this;
          if (arguments.length < 1 || (arguments.length === 1 &&
              typeof arguments[0] === 'object')) {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(pc, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  },

  fixNegotiationNeeded: function(window) {
    utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function(e) {
      var pc = e.target;
      if (pc.signalingState !== 'stable') {
        return;
      }
      return e;
    });
  },

  shimGetDisplayMedia: function(window, getSourceId) {
    if (!window.navigator || !window.navigator.mediaDevices ||
        'getDisplayMedia' in window.navigator.mediaDevices) {
      return;
    }
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== 'function') {
      console.error('shimGetDisplayMedia: getSourceId argument is not ' +
          'a function');
      return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
      return getSourceId(constraints)
        .then(function(sourceId) {
          var widthSpecified = constraints.video && constraints.video.width;
          var heightSpecified = constraints.video && constraints.video.height;
          var frameRateSpecified = constraints.video &&
            constraints.video.frameRate;
          constraints.video = {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: sourceId,
              maxFrameRate: frameRateSpecified || 3
            }
          };
          if (widthSpecified) {
            constraints.video.mandatory.maxWidth = widthSpecified;
          }
          if (heightSpecified) {
            constraints.video.mandatory.maxHeight = heightSpecified;
          }
          return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
    window.navigator.getDisplayMedia = function(constraints) {
      utils.deprecated('navigator.getDisplayMedia',
          'navigator.mediaDevices.getDisplayMedia');
      return window.navigator.mediaDevices.getDisplayMedia(constraints);
    };
  }
};

},{"../utils.js":11,"./getusermedia":6}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var utils = require('../utils.js');
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;

  var constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      var remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function(d) {
              return matches.some(function(match) {
                return d.label.toLowerCase().indexOf(match) !== -1;
              });
            });
            if (!dev && devices.length && matches.indexOf('back') !== -1) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function() {
        return new Promise(function(resolve) {
          var kinds = {audio: 'audioinput', video: 'videoinput'};
          return window.MediaStreamTrack.getSources(function(devices) {
            resolve(devices.map(function(device) {
              return {label: device.label,
                kind: kinds[device.kind],
                deviceId: device.id,
                groupId: ''};
            }));
          });
        });
      },
      getSupportedConstraints: function() {
        return {
          deviceId: true, echoCancellation: true, facingMode: true,
          frameRate: true, height: true, width: true
        };
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(function(stream) {
          if (c.audio && !stream.getAudioTracks().length ||
              c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function(e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};

},{"../utils.js":11}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');
var utils = require('./utils');

module.exports = {
  shimRTCIceCandidate: function(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
        window.RTCIceCandidate.prototype)) {
      return;
    }

    var NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function(args) {
      // Remove the a= which shouldn't be part of the candidate string.
      if (typeof args === 'object' && args.candidate &&
          args.candidate.indexOf('a=') === 0) {
        args = JSON.parse(JSON.stringify(args));
        args.candidate = args.candidate.substr(2);
      }

      if (args.candidate && args.candidate.length) {
        // Augment the native candidate with the parsed fields.
        var nativeCandidate = new NativeRTCIceCandidate(args);
        var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
        var augmentedCandidate = Object.assign(nativeCandidate,
            parsedCandidate);

        // Add a serializer that does not serialize the extra attributes.
        augmentedCandidate.toJSON = function() {
          return {
            candidate: augmentedCandidate.candidate,
            sdpMid: augmentedCandidate.sdpMid,
            sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
            usernameFragment: augmentedCandidate.usernameFragment,
          };
        };
        return augmentedCandidate;
      }
      return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    utils.wrapPeerConnectionEvent(window, 'icecandidate', function(e) {
      if (e.candidate) {
        Object.defineProperty(e, 'candidate', {
          value: new window.RTCIceCandidate(e.candidate),
          writable: 'false'
        });
      }
      return e;
    });
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function(window) {
    var URL = window && window.URL;

    if (!(typeof window === 'object' && window.HTMLMediaElement &&
          'srcObject' in window.HTMLMediaElement.prototype &&
        URL.createObjectURL && URL.revokeObjectURL)) {
      // Only shim CreateObjectURL using srcObject if srcObject exists.
      return undefined;
    }

    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(), newId = 0;

    URL.createObjectURL = function(stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + (++newId);
        streams.set(url, stream);
        utils.deprecated('URL.createObjectURL(stream)',
            'elem.srcObject = stream');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                              'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });

    var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
    window.HTMLMediaElement.prototype.setAttribute = function() {
      if (arguments.length === 2 &&
          ('' + arguments[0]).toLowerCase() === 'src') {
        this.srcObject = streams.get(arguments[1]) || null;
      }
      return nativeSetAttribute.apply(this, arguments);
    };
  },

  shimMaxMessageSize: function(window) {
    if (window.RTCSctpTransport || !window.RTCPeerConnection) {
      return;
    }
    var browserDetails = utils.detectBrowser(window);

    if (!('sctp' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
        get: function() {
          return typeof this._sctp === 'undefined' ? null : this._sctp;
        }
      });
    }

    var sctpInDescription = function(description) {
      var sections = SDPUtils.splitSections(description.sdp);
      sections.shift();
      return sections.some(function(mediaSection) {
        var mLine = SDPUtils.parseMLine(mediaSection);
        return mLine && mLine.kind === 'application'
            && mLine.protocol.indexOf('SCTP') !== -1;
      });
    };

    var getRemoteFirefoxVersion = function(description) {
      // TODO: Is there a better solution for detecting Firefox?
      var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (match === null || match.length < 2) {
        return -1;
      }
      var version = parseInt(match[1], 10);
      // Test for NaN (yes, this is ugly)
      return version !== version ? -1 : version;
    };

    var getCanSendMaxMessageSize = function(remoteIsFirefox) {
      // Every implementation we know can send at least 64 KiB.
      // Note: Although Chrome is technically able to send up to 256 KiB, the
      //       data does not reach the other peer reliably.
      //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
      var canSendMaxMessageSize = 65536;
      if (browserDetails.browser === 'firefox') {
        if (browserDetails.version < 57) {
          if (remoteIsFirefox === -1) {
            // FF < 57 will send in 16 KiB chunks using the deprecated PPID
            // fragmentation.
            canSendMaxMessageSize = 16384;
          } else {
            // However, other FF (and RAWRTC) can reassemble PPID-fragmented
            // messages. Thus, supporting ~2 GiB when sending.
            canSendMaxMessageSize = 2147483637;
          }
        } else if (browserDetails.version < 60) {
          // Currently, all FF >= 57 will reset the remote maximum message size
          // to the default value when a data channel is created at a later
          // stage. :(
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
          canSendMaxMessageSize =
            browserDetails.version === 57 ? 65535 : 65536;
        } else {
          // FF >= 60 supports sending ~2 GiB
          canSendMaxMessageSize = 2147483637;
        }
      }
      return canSendMaxMessageSize;
    };

    var getMaxMessageSize = function(description, remoteIsFirefox) {
      // Note: 65536 bytes is the default value from the SDP spec. Also,
      //       every implementation we know supports receiving 65536 bytes.
      var maxMessageSize = 65536;

      // FF 57 has a slightly incorrect default remote max message size, so
      // we need to adjust it here to avoid a failure when sending.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
      if (browserDetails.browser === 'firefox'
           && browserDetails.version === 57) {
        maxMessageSize = 65535;
      }

      var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');
      if (match.length > 0) {
        maxMessageSize = parseInt(match[0].substr(19), 10);
      } else if (browserDetails.browser === 'firefox' &&
                  remoteIsFirefox !== -1) {
        // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
      }
      return maxMessageSize;
    };

    var origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
      var pc = this;
      pc._sctp = null;

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        var isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        var canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        var maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        var sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get: function() {
            return maxMessageSize;
          }
        });
        pc._sctp = sctp;
      }

      return origSetRemoteDescription.apply(pc, arguments);
    };
  },

  shimSendThrowTypeError: function(window) {
    if (!(window.RTCPeerConnection &&
        'createDataChannel' in window.RTCPeerConnection.prototype)) {
      return;
    }

    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

    function wrapDcSend(dc, pc) {
      var origDataChannelSend = dc.send;
      dc.send = function() {
        var data = arguments[0];
        var length = data.length || data.size || data.byteLength;
        if (dc.readyState === 'open' &&
            pc.sctp && length > pc.sctp.maxMessageSize) {
          throw new TypeError('Message too large (can send a maximum of ' +
            pc.sctp.maxMessageSize + ' bytes)');
        }
        return origDataChannelSend.apply(dc, arguments);
      };
    }
    var origCreateDataChannel =
      window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function() {
      var pc = this;
      var dataChannel = origCreateDataChannel.apply(pc, arguments);
      wrapDcSend(dataChannel, pc);
      return dataChannel;
    };
    utils.wrapPeerConnectionEvent(window, 'datachannel', function(e) {
      wrapDcSend(e.channel, e.target);
      return e;
    });
  }
};

},{"./utils":11,"sdp":2}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var utils = require('../utils');

module.exports = {
  shimGetUserMedia: require('./getusermedia'),
  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            e.stream.getTracks().forEach(function(track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = {track: track};
              event.transceiver = {receiver: event.receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        },
        enumerable: true,
        configurable: true
      });
    }
    if (typeof window === 'object' && window.RTCTrackEvent &&
        ('receiver' in window.RTCTrackEvent.prototype) &&
        !('transceiver' in window.RTCTrackEvent.prototype)) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function() {
          return {receiver: this.receiver};
        }
      });
    }
  },

  shimSourceObject: function(window) {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
        window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
          // .urls is not supported in FF < 38.
          // create RTCIceServers with a single url.
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty('urls')) {
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = {
                    url: server.urls[j]
                  };
                  if (server.urls[j].indexOf('turn') === 0) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
        }
        return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (window.mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = window.mozRTCSessionDescription;
      window.RTCIceCandidate = window.mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(
      selector,
      onSucc,
      onErr
    ) {
      return nativeGetStats.apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) {
            stats = makeMapStats(stats);
          }
          if (browserDetails.version < 53 && !onSucc) {
            // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
              stats.forEach(function(stat) {
                stat.type = modernStatsTypes[stat.type] || stat.type;
              });
            } catch (e) {
              if (e.name !== 'TypeError') {
                throw e;
              }
              // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
              stats.forEach(function(stat, i) {
                stats.set(i, Object.assign({}, stat, {
                  type: modernStatsTypes[stat.type] || stat.type
                }));
              });
            }
          }
          return stats;
        })
        .then(onSucc, onErr);
    };
  },

  shimSenderGetStats: function(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection &&
        window.RTCRtpSender)) {
      return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
      return;
    }
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function() {
      return this.track ? this._pc.getStats(this.track) :
          Promise.resolve(new Map());
    };
  },

  shimReceiverGetStats: function(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection &&
        window.RTCRtpSender)) {
      return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
      return;
    }
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function() {
        var pc = this;
        var receivers = origGetReceivers.apply(pc, []);
        receivers.forEach(function(receiver) {
          receiver._pc = pc;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function(e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function() {
      return this._pc.getStats(this.track);
    };
  },

  shimRemoveStream: function(window) {
    if (!window.RTCPeerConnection ||
        'removeStream' in window.RTCPeerConnection.prototype) {
      return;
    }
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      utils.deprecated('removeStream', 'removeTrack');
      this.getSenders().forEach(function(sender) {
        if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
          pc.removeTrack(sender);
        }
      });
    };
  },

  shimRTCDataChannel: function(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) {
      window.RTCDataChannel = window.DataChannel;
    }
  },

  shimGetDisplayMedia: function(window, preferredMediaSource) {
    if (!window.navigator || !window.navigator.mediaDevices ||
        'getDisplayMedia' in window.navigator.mediaDevices) {
      return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
      if (!(constraints && constraints.video)) {
        var err = new DOMException('getDisplayMedia without video ' +
            'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = {mediaSource: preferredMediaSource};
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    };
    window.navigator.getDisplayMedia = function(constraints) {
      utils.deprecated('navigator.getDisplayMedia',
          'navigator.mediaDevices.getDisplayMedia');
      return window.navigator.mediaDevices.getDisplayMedia(constraints);
    };
  }
};

},{"../utils":11,"./getusermedia":9}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var utils = require('../utils');
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  var shimError_ = function(e) {
    return {
      name: {
        InternalError: 'NotReadableError',
        NotSupportedError: 'TypeError',
        PermissionDeniedError: 'NotAllowedError',
        SecurityError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' +
        'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r. min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
        return new Promise(function(resolve) {
          var infos = [
            {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
            {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
          ];
          resolve(infos);
        });
      };

  if (browserDetails.version < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(function(stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          throw new DOMException('The object can not be found here.',
                                 'NotFoundError');
        }
        return stream;
      }, function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};

},{"../utils":11}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';
var utils = require('../utils');

module.exports = {
  shimLocalStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getStreamById = function(id) {
        var result = null;
        if (this._localStreams) {
          this._localStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        if (this._remoteStreams) {
          this._remoteStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        return result;
      };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (this._localStreams.indexOf(stream) === -1) {
          this._localStreams.push(stream);
        }
        var pc = this;
        stream.getTracks().forEach(function(track) {
          _addTrack.call(pc, track, stream);
        });
      };

      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (stream) {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (this._localStreams.indexOf(stream) === -1) {
            this._localStreams.push(stream);
          }
        }
        return _addTrack.call(this, track, stream);
      };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        var index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        var pc = this;
        var tracks = stream.getTracks();
        this.getSenders().forEach(function(sender) {
          if (tracks.indexOf(sender.track) !== -1) {
            pc.removeTrack(sender);
          }
        });
      };
    }
  },
  shimRemoteStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
        get: function() {
          return this._onaddstream;
        },
        set: function(f) {
          if (this._onaddstream) {
            this.removeEventListener('addstream', this._onaddstream);
          }
          this.addEventListener('addstream', this._onaddstream = f);
        }
      });
      var origSetRemoteDescription =
          window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            e.streams.forEach(function(stream) {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              var event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    }
  },
  shimCallbacksAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;

    prototype.createOffer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    prototype.createAnswer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    var withCallback = function(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;

    withCallback = function(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;

    withCallback = function(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  },
  shimGetUserMedia: function(window) {
    var navigator = window && window.navigator;

    if (!navigator.getUserMedia) {
      if (navigator.webkitGetUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      } else if (navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = function(constraints, cb, errcb) {
          navigator.mediaDevices.getUserMedia(constraints)
          .then(cb, errcb);
        }.bind(navigator);
      }
    }
  },
  shimRTCIceServerUrls: function(window) {
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in window.RTCPeerConnection) {
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }
  },
  shimTrackEventTransceiver: function(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === 'object' && window.RTCPeerConnection &&
        ('receiver' in window.RTCTrackEvent.prototype) &&
        // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
        // defined for some reason even when window.RTCTransceiver is not.
        !window.RTCTransceiver) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function() {
          return {receiver: this.receiver};
        }
      });
    }
  },

  shimCreateOfferLegacy: function(window) {
    var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
      var pc = this;
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
        }
        var audioTransceiver = pc.getTransceivers().find(function(transceiver) {
          return transceiver.sender.track &&
              transceiver.sender.track.kind === 'audio';
        });
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true &&
            !audioTransceiver) {
          pc.addTransceiver('audio');
        }


        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
        }
        var videoTransceiver = pc.getTransceivers().find(function(transceiver) {
          return transceiver.sender.track &&
              transceiver.sender.track.kind === 'video';
        });
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            videoTransceiver.setDirection('sendonly');
          } else if (videoTransceiver.direction === 'recvonly') {
            videoTransceiver.setDirection('inactive');
          }
        } else if (offerOptions.offerToReceiveVideo === true &&
            !videoTransceiver) {
          pc.addTransceiver('video');
        }
      }
      return origCreateOffer.apply(pc, arguments);
    };
  }
};

},{"../utils":11}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var logDisabled_ = true;
var deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function() {
      return this['_on' + eventNameToWrap];
    },
    set: function(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

// Utility methods.
module.exports = {
  extractVersion: extractVersion,
  wrapPeerConnectionEvent: wrapPeerConnectionEvent,
  disableLog: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return (bool) ? 'adapter.js logging disabled' :
        'adapter.js logging enabled';
  },

  /**
   * Disable or enable deprecation warnings
   * @param {!boolean} bool set to true to disable warnings.
   */
  disableWarnings: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
  },

  log: function() {
    if (typeof window === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Shows a deprecation warning suggesting the modern and spec-compatible API.
   */
  deprecated: function(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
        ' instead.');
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function(window) {
    var navigator = window && window.navigator;

    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    if (navigator.mozGetUserMedia) { // Firefox.
      result.browser = 'firefox';
      result.version = extractVersion(navigator.userAgent,
          /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera.
      // Version matches Chrome/WebRTC version.
      result.browser = 'chrome';
      result.version = extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
      result.browser = 'edge';
      result.version = extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);
    } else if (window.RTCPeerConnection &&
        navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
      result.browser = 'safari';
      result.version = extractVersion(navigator.userAgent,
          /AppleWebKit\/(\d+)\./, 1);
    } else { // Default fallthrough: not supported.
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  }
};

},{}]},{},[3])(3)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/kandy/node_modules/query-string/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__("../../packages/kandy/node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__("../../node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__("../../node_modules/split-on-first/index.js");

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
			return key => (result, value, index) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (index === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(',')];
			};

		default:
			return key => (result, value) => {
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
				const newValue = isArray ? value.split(',') : value;
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		arrayFormat: 'none'
	}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(param.replace(/\+/g, ' '), '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);

		formatter(decode(key, options), value, ret);
	}

	return Object.keys(ret).sort().reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none'
	}, options);

	const formatter = encoderForArrayFormat(options);
	const keys = Object.keys(object);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	return {
		url: removeHash(input).split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ "../../packages/kandy/node_modules/strict-uri-encode/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "../../packages/kandy/src/common/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("../../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

exports.mergeValues = mergeValues;
exports.toQueryString = toQueryString;
exports.autoRestart = autoRestart;

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

var _queryString = __webpack_require__("../../packages/kandy/node_modules/query-string/index.js");

var _queryString2 = _interopRequireDefault(_queryString);

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Deeply merges the values of multiple objects. Objects on the left receive the values from objects on their right.
 * Unlike lodash's default merge behavior this doesn't merge arrays.
 *
 * @name mergeValues
 * @param {...Object} objects - Objects to merge
 * @return {Object} A new object containing the merged values.
 */
function mergeValues(...objects) {
  return (0, _fp.mergeAllWith)((leftValue, rightValue) => {
    // Overwrite the default behavior of lodash's merge for arrays and simply
    // clobber what's on the left so we don't end up with merged arrays.
    if ((0, _fp.isArray)(leftValue)) {
      return rightValue;
    }
  }, objects);
}

/**
 * Utility function to convert an object to a query string.
 *
 * @param {Object} params An object of query parameters to be parsed and converted for use in a URL string
 * @param {Object} [options] Options to be passed to the query-string library
 * * @param {String} [options.arrayFormat] Format in which to compose array values which were passed as query parameters
 */
// Libraries.
function toQueryString(params = {}, options = {}) {
  if ((0, _keys2.default)(params).length > 0) {
    const stringifiedParams = _queryString2.default.stringify(params, options);
    return '?' + stringifiedParams;
  }
  return '';
}

/**
 * Higher-order function to auto-restart sagas when they crash.
 * Based on: https://github.com/redux-saga/redux-saga/pull/644#issuecomment-266454875
 * @method autoRestart
 * @param  {Generator} saga The saga to wrap.
 * @return {Generator} Wrapped saga.
 */
function autoRestart(saga) {
  return function* autoRestarting(...args) {
    // Only restart the saga if it crashed; avoid restarting it if
    //      it returned normally.
    let shouldRestart = false;
    do {
      try {
        yield (0, _effects.call)(saga, ...args);
        shouldRestart = false;
      } catch (e) {
        // TODO: Re-add this log line.
        // Importing the LogManager in this file breaks tests for an unknown
        //    reason. Should find out why so that we can log in our utils.
        // log.error(`Unhandled error in saga ${saga.name}.`, e)
        console.log(`Unhandled error in saga ${saga.name}.`, e);
        shouldRestart = true;
      }
    } while (shouldRestart);
  };
}

/***/ }),

/***/ "../../packages/kandy/src/config/interface/actionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const PREFIX = '@@KANDY/';

const CONFIG_UPDATE = exports.CONFIG_UPDATE = PREFIX + 'CONFIG_UPDATE';

/***/ }),

/***/ "../../packages/kandy/src/config/interface/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;

var _actionTypes = __webpack_require__("../../packages/kandy/src/config/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Add or update a specific key within the store.config.
 *
 * @param {Object} values The values that will be placed in the store.
 * @param {string} [pluginName] The plugin name of the config being set.
 * @return {Action} action A redux action.
 */
function update(values, pluginName = '') {
  var payload;
  // Use the plugin name as a substate key, if present.
  if (pluginName) {
    payload = {
      [pluginName]: values
    };
  } else {
    payload = values;
  }

  return {
    type: actionTypes.CONFIG_UPDATE,
    payload: payload
  };
}

/***/ }),

/***/ "../../packages/kandy/src/events/eventEmitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.default = eventEmitter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Event emitter module. Can be used as a standalone factory or as a mixin.
 *
 * @private
 * @class emitter
 * @example
 * ``` javascript
 * var eventEmitter = emitter(); // Create a new emitter.
 * emitter(myEmittingObject.prototype); // Mixin to an existing object.
 * ```
 */
function eventEmitter(prototype = {}) {
  var eventMap = [];
  var subscribeMap = [];
  var strictMode = false;

  /*
   * Check if the event is a valid event type.
   */
  function checkEvent(type) {
    if (strictMode && !eventMap[type]) {
      throw new Error('Invalid event type: ' + type);
    }
  }

  return (0, _assign2.default)(prototype, {
    /*
     * Define an event type with the event emitter.
     *
     * @method define
     * @param {String} type The name for the event type.
     */
    define: function (type) {
      eventMap[type] = eventMap[type] || [];
    },

    /*
     * Define an alias for an event type.
     *
     * @method alias
     * @param {String} type The event type for which to add an alias.
     * @param {String} alias The alias name for the event type.
     * @throws {Error} Invalid event type
     */
    alias: function (type, alias) {
      checkEvent(type);

      eventMap[alias] = eventMap[type] = eventMap[type] || [];
    },

    /*
     * Add an event listener for the specified event type.
     *
     * @method on
     * @param {String} type The event type for which to add the listener.
     * @param {Function} listener The listener for the event type. The parameters
     *                            of the listener depend on the event type.
     * @throws {Error} Invalid event type
     */
    on: function (type, listener) {
      checkEvent(type);(eventMap[type] = eventMap[type] || []).push(listener);
    },

    /*
     * Removes an event listener for the specified event type.
     *
     * @method off
     * @param {String} type The event type for which to remote the listener.
     * @param {Function} listener The listener to remove.
     * @throws {Error} Invalid event type
     */
    off: function (type, listener) {
      checkEvent(type);

      var list = eventMap[type] || [];
      var i = list.length;
      while (i--) {
        if (listener === list[i]) {
          list.splice(i, 1);
        }
      }
    },

    /*
     * Emits an event of the specified type.
     *
     * @method emit
     * @param {String} type The event type to emit.
     * @param {any} [...args] The arguments to pass to the listeners of the event.
     * @throws {Error} Invalid event type
     */
    emit: function (type) {
      checkEvent(type);

      var args = Array.prototype.slice.call(arguments, 1);
      var list = eventMap[type] || [];
      var i = 0;

      for (; i < list.length; i++) {
        list[i].apply(undefined, args);
      }
      for (var j = 0; j < subscribeMap.length; j++) {
        subscribeMap[j].call(undefined, type, args);
      }
    },

    /*
     * Add a subscription for all event types.
     *
     * @method subscribe
     * @param {Function} listener The listener for all event types.
     * @throws {Error} Listener not a function
     */
    subscribe: function (listener) {
      if (typeof listener === 'function') {
        subscribeMap.push(listener);
      } else {
        throw new Error('Listener not a function');
      }
    },

    /*
     * Remove a subscription for all event types.
     *
     * @method unsubscribe
     * @param {Function} listener The listener for all event types.
     * @throws {Error} Listener not a function
     */
    unsubscribe: function (listener) {
      if (typeof listener === 'function') {
        var i = subscribeMap.length;
        while (i--) {
          if (listener === subscribeMap[i]) {
            subscribeMap.splice(i, 1);
          }
        }
      } else {
        throw new Error('Listener not a function');
      }
    },

    /*
     * Sets the emitter in strict mode where it only allows events that have been defined or aliases.
     *
     * @method setStrictMode
     * @param {Boolean} strict Whether to set strict mode for the emitter.
     */
    setStrictMode: function (strict) {
      strictMode = strict;
    }
  });
}

/***/ }),

/***/ "../../packages/kandy/src/logs/actions/actionHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultActionHandler;
/**
 * Default function for the SDK to use for logging actions.
 * Action entries come in 4 different types:
 *    1. start: Log the message directly and "open the group".
 *    2. state: Log a prefix, state type, and state itself.
 *      (prev state and next state)
 *    3. payload: Log a prefix, action type, and payload.
 *    4. end: Close the group.
 * @method defaultActionHandler
 * @param  {LogEntry} entry
 */
function defaultActionHandler(entry) {
  // Handle the "start" and "stop" action log entries specifically.
  if (['group', 'groupCollapsed'].includes(entry.method)) {
    console[entry.method](...entry.messages);
    return;
  } else if (entry.method === 'groupEnd') {
    console.groupEnd();
    return;
  }

  const { timestamp, level } = entry;
  const logInfo = `${timestamp} - ACTION - ${level}`;

  const [logType, payload] = entry.messages;

  let prefix;
  if (logType.includes('state')) {
    // If the log is for prev state / next state, display that in the prefix.
    prefix = `${logInfo} - ${logType.toUpperCase()}`;
  } else {
    // Else the log is the action itself, so use the action type.
    prefix = `${logInfo} - ${payload.type}`;
  }

  console[entry.method](prefix, payload);
}

/***/ }),

/***/ "../../packages/kandy/src/logs/actions/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createActionLogger;

var _index = __webpack_require__("../../packages/kandy/src/logs/index.js");

var _constants = __webpack_require__("../../packages/kandy/src/logs/constants.js");

var _transformers = __webpack_require__("../../packages/kandy/src/logs/actions/transformers.js");

var _transformers2 = _interopRequireDefault(_transformers);

var _utils = __webpack_require__("../../packages/kandy/src/logs/actions/utils.js");

var _reduxLogger = __webpack_require__("../../node_modules/redux-logger/dist/redux-logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a redux middleware for logging actions.
 * @method createActionLogger
 * @param  {Object}     options
 * @return {Middleware}
 */
function createActionLogger(options) {
  const logManager = (0, _index.getLogManager)();
  // Create a Logger for handling the action logs.
  const logger = logManager.getLogger('ACTION');
  logger.logHandler = options.logActions.handler;
  logger.level = options.logActions.level;

  const setLevel = _constants.logLevels[options.logLevel];

  let actionOptions = {};
  // Use different options for redux-logger depending on log level.
  if (setLevel === _constants.logLevels.INFO) {
    // At the INFO level, hide everything except the action name.
    actionOptions.level = false;
    actionOptions.diff = false;
  } else {
    // At the DEBUG+ levels, use the configs.
    actionOptions = (0, _extends3.default)({}, options.logActions);
  }

  if (options.logActions.actionOnly) {
    // Hide prevState and nextState.
    // Log action and error at info level, so the browser won't hide it by default.
    actionOptions.level = {
      prevState: false,
      action: 'info',
      error: 'info',
      nextState: false
    };
  }

  if (options.logActions.excludeActions) {
    actionOptions.predicate = excludeActions(options.logActions.excludeActions);
  }

  // ALWAYS use our own logger
  actionOptions.logger = logger;
  // ALWAYS remove theming/styling from the action log messages
  actionOptions.titleFormatter = _utils.titleFormatter;
  actionOptions.colors = false;

  // Setup the transformers based on the options.
  let transformers = (0, _transformers2.default)(options.logActions);
  // Create the logger middleware.

  return (0, _reduxLogger.createLogger)((0, _extends3.default)({}, actionOptions, transformers));
}

/**
 * Logger predicate function that will take an array of action types
 * and exclude them from logs
 * @param {Array} actions An array of action types to exclude from logs
 * @returns {function} A predicate function
 */


// Libraries.

// Action specific.
// Logs plugin.
function excludeActions(actions) {
  return (getState, action) => !actions.includes(action.type);
}

/***/ }),

/***/ "../../packages/kandy/src/logs/actions/transformers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupTransformers;

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

/**
 * Determines which redux-logger transformers we need based on options.
 * @method setupTransformers
 * @param  {Object} options
 * @return {Object} An object of transformers to be provided to redux-logger.
 */
function setupTransformers(options) {
  // A "pipeline" of all redux-logger action transformers.
  function actionPipeline(transformers) {
    return function (action) {
      transformers.forEach(function (transformer) {
        action = transformer(action);
      });
      return action;
    };
  }

  const transformers = {};
  const actionTransformers = [];
  if (!options.exposePayloads) {
    // If exposePayloads is disabled, include the removePayloads transformer
    actionTransformers.push(removePayloads);
  } else {
    // Otherwise, we should still hide passwords
    actionTransformers.push(passwordHider);
  }
  // Create the actionTransformer pipeline with the included transformers.
  transformers.actionTransformer = actionPipeline(actionTransformers);

  return transformers;
}

// Redux-logger actionTransformer to prevent passwords from being logged.
// Libraries
function passwordHider(action) {
  if (action.meta && action.meta.isSensitive) {
    // Only log the action name for actions that have sensitive data in them.
    return (0, _fp.omit)('payload', action);
  }
  return action;
}

/**
 * Helper function removes secure data if secure mode is enabled
 * @param {Object} action
 */
function removePayloads(action) {
  if (!(action.meta && action.meta.isSafe)) {
    return (0, _fp.omit)('payload', action);
  }
  return action;
}

/***/ }),

/***/ "../../packages/kandy/src/logs/actions/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleFormatter = titleFormatter;
/**
 * Standard title formatter function is almost identical to the defaultTitleFormatter found in redux-logger
 * but removes placeholder characters previously used for styling, which is not being used in the logging
 * configuration
 *
 * @param action
 * @param time
 * @param took
 * @returns {string}
 */
function titleFormatter(action, time, took) {
  var parts = ['action'];
  parts.push(action.type);
  parts.push('@ ' + time);
  parts.push('(in ' + took.toFixed(2) + ' ms)');

  return parts.join(' ');
}

/***/ }),

/***/ "../../packages/kandy/src/logs/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logHandler = __webpack_require__("../../packages/kandy/src/logs/logHandler.js");

var _logHandler2 = _interopRequireDefault(_logHandler);

var _actionHandler = __webpack_require__("../../packages/kandy/src/logs/actions/actionHandler.js");

var _actionHandler2 = _interopRequireDefault(_actionHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configuration options for the Logs feature.
 *
 * The SDK will log information about the operations it is performing. The
 *    amount of information will depend on how the Logs feature is configured.
 *
 * The format of logs can also be customized by providing a
 *    {@link logger.LogHandler LogHandler}. This function will receive a
 *    {@link logger.LogEntry LogEntry} which it can handle as it sees fit. By
 *    default, the SDK will log information to the console.
 *
 * @public
 * @static
 * @name config.logs
 * @memberof config
 * @requires logs
 * @instance
 * @param {Object} logs Logs configs.
 * @param {string} [logs.logLevel='debug'] Log level to be set. See {@link logger.levels}.
 * @param {logger.LogHandler} [logs.handler] The function to receive log entries from the
 *    SDK. If not provided, a default handler will be used that logs entries
 *    to the console.
 * @param  {boolean} [logs.enableFcsLogs=true] Enable the detailed call logger
 *    for v3.X. Requires log level debug.
 * @param {Object} [logs.logActions] Options specifically for action logs when
 *    logLevel is at DEBUG+ levels. Set this to false to not output action logs.
 * @param {logger.LogHandler} [logs.logActions.handler] The function to receive action
 *    log entries from the SDK. If not provided, a default handler will be used
 *    that logs actions to the console.
 * @param {boolean} [logs.logActions.actionOnly=true] Only output information
 *    about the action itself. Omits the SDK context for when it occurred.
 * @param {boolean} [logs.logActions.collapsed=false] Whether logs should be
 *    minimized when initially output. The full log is still output and can be
 *    inspected on the console.
 * @param {boolean} [logs.logActions.diff=false] Include a diff of what SDK
 *    context was changed by the action.
 * @param {boolean} [logs.logActions.exposePayloads=false] Allow action payloads
 *    to be exposed in the logs, potentially displaying sensitive information.
 */
exports.default = {
  logLevel: 'debug',
  handler: _logHandler2.default,
  enableFcsLogs: true,

  // Action-specific configs.
  logActions: {
    handler: _actionHandler2.default,
    actionOnly: true,
    collapsed: false,
    diff: false,
    level: 'debug',
    exposePayloads: false
  }
};

/***/ }),

/***/ "../../packages/kandy/src/logs/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Log levels used by the SDK.
 * When a level is set, all logs of that level and higher will be logged.
 */
const logLevels = exports.logLevels = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  SILENT: 5
};

/***/ }),

/***/ "../../packages/kandy/src/logs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_LOG_TAG = undefined;

var _values = __webpack_require__("../../node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

exports.getLogManager = getLogManager;
exports.default = logPlugin;

var _api = __webpack_require__("../../packages/kandy/src/logs/interface/api.js");

var _api2 = _interopRequireDefault(_api);

var _config = __webpack_require__("../../packages/kandy/src/logs/config.js");

var _config2 = _interopRequireDefault(_config);

var _constants = __webpack_require__("../../packages/kandy/src/logs/constants.js");

var _actions = __webpack_require__("../../packages/kandy/src/logs/actions/index.js");

var _actions2 = _interopRequireDefault(_actions);

var _logManager = __webpack_require__("../../packages/kandy/src/logs/logManager.js");

var _logManager2 = _interopRequireDefault(_logManager);

var _actions3 = __webpack_require__("../../packages/kandy/src/config/interface/actions.js");

var _utils = __webpack_require__("../../packages/kandy/src/common/utils.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the LogManager right away so that it is available. The SDK has not
 *    been instantiated yet, so we have to use the default options until we get
 *    the application's configs.
 */
// Logs plugin.
const logManager = (0, _logManager2.default)('SDK', _config2.default);

// Libraries.


// Other plugins.
function getLogManager() {
  return logManager;
}

// Logs generated as a result of invoking the public API will contain this tag
const API_LOG_TAG = exports.API_LOG_TAG = 'API invoked: ';

function logPlugin(options = {}) {
  const name = 'logs';

  options = (0, _utils.mergeValues)(_config2.default, options);
  options.logLevel = options.logLevel.toUpperCase();

  // Now that we have the application's log configs, update everything to
  //    use those values instead of default values.
  logManager.level = options.logLevel;
  logManager.logHandler = options.handler;

  (0, _values2.default)(logManager.getLoggers()).forEach(logger => {
    logger.level = options.logLevel;
    logger.logHandler = options.handler;
  });

  function* init() {
    // Send the provided options to the store.
    // This will be `state.config[name]`.
    yield (0, _effects.put)((0, _actions3.update)(options, name));
  }

  const components = {
    name,
    capabilities: ['logs'],
    init,
    api: _api2.default
  };

  const setLevel = _constants.logLevels[options.logLevel];
  // Consider actions to be at the INFO log level.
  // Only export a middleware (for actions) at the appropriate levels.
  if (setLevel <= _constants.logLevels.INFO && options.logActions !== false) {
    components.middleware = (0, _actions2.default)(options);
  }

  return components;
}

/***/ }),

/***/ "../../packages/kandy/src/logs/interface/api.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = api;
/**
 * The internal logger is used to provide information about the SDK's behaviour.
 * The logger can provide two types of logs: basic logs and action logs. Basic
 * logs are simple lines of information about what the SDK is doing during operations.
 * Action logs are complete information about a specific action that occurred
 * within the SDK, providing debug information describing it.
 * The amount of information logged can be configured as part of the SDK configuration.
 * See {@link #configconfiglogs config.logs} .
 *
 * @public
 * @namespace logger
 * @requires logs
 */

function api() {
  let api = {
    /**
     * Possible levels for the SDK logger.
     * @public
     * @static
     * @memberof logger
     * @property {string} SILENT Log nothing.
     * @property {string} ERROR Log only unhandled errors.
     * @property {string} WARN Log issues that may cause problems or unexpected behaviour.
     * @property {string} INFO Log useful information and messages to indicate the SDK's internal operations.
     * @property {string} DEBUG Log information to help diagnose problematic behaviour.
     */
    levels: {
      SILENT: 'silent',
      ERROR: 'error',
      WARN: 'warn',
      INFO: 'info',
      DEBUG: 'debug'
    }
  };

  return {
    logger: api
  };
}

/***/ }),

/***/ "../../packages/kandy/src/logs/logHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultLogHandler;
/**
 * A LogHandler can be used to customize how the SDK should log information. By
 *    default, the SDK will log information to the console, but a LogHandler can
 *    be configured to change this behaviour.
 *
 * A LogHandler can be provided to the SDK as part of its configuration (see
 *    {@link #configconfiglogs config.logs}). The SDK will then provide this
 *    function with the logged information.
 *
 * @public
 * @static
 * @typedef {Function} LogHandler
 * @memberof logger
 * @requires logs
 * @param {Object} LogEntry The LogEntry to be logged.
 * @example
 * // Define a custom function to handle logs.
 * function logHandler (logEntry) {
 *   // Compile the meta info of the log for a prefix.
 *   const { timestamp, level, method, target } = logEntry
 *   const logInfo = `${timestamp} - ${target.name} - ${level}`
 *
 *   // Assume that the first message parameter is a string.
 *   const [log, ...extra] = logEntry.messages
 *
 *   console[method](`${logInfo} - ${log}`, ...extra)
 * }
 *
 * // Provide the LogHandler as part of the SDK configurations.
 * const configs = { ... }
 * configs.logs.handler = logHandler
 * const client = create(configs)
 */

/**
 * Default function for the SDK to use for logging.
 *    Uses entry information to form a prefix, then logs to console.
 * @method defaultLogHandler
 * @param  {LogEntry} entry
 */
function defaultLogHandler(entry) {
  // Compile the meta info of the log for a prefix.
  const { timestamp, level, method, target } = entry;
  const logInfo = `${timestamp} - ${target.name} - ${level}`;

  // Assume that the first message parameter is a string.
  const [log, ...extra] = entry.messages;

  console[method](`${logInfo} - ${log}`, ...extra);
}

/***/ }),

/***/ "../../packages/kandy/src/logs/logManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createManager;

var _logger = __webpack_require__("../../packages/kandy/src/logs/logger.js");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a Log Manager.
 * @method createManager
 * @param  {string}     managerName
 * @param  {Object}     [options={}]
 * @return {LogManager}
 */
function createManager(managerName, options = {}) {
  /*
   * This log is pointless, but is here to workaround a weird issue in Chrome.
   * The Chrome console will lag when it is loading the sourcemap for a file.
   *    Logging from the SDK will force Chrome to load its sourcemap (if its
   *    not already loaded). So this ensures that /something/ is logged from the
   *    SDK file as early as possible, to help avoid this lag being visible to
   *    a developer.
   */
  console.debug(`Creating LogManager ${managerName}.`);

  let logHandler = options.handler;
  let level = options.logLevel;
  const loggers = {};

  /**
   * Gets a specific logger. If the logger doesn't exist, a new one will be
   *    created.
   * @method getLogger
   * @param  {string} name Human-readable name for the logger.
   * @param  {string} [id] A unique identifier for the logger.
   * @return {Logger}
   */
  function getLogger(name, id) {
    // Combine the name and ID to create the "full" logger name.
    const loggerName = id ? `${name}-${id}` : name;

    let logger = loggers[loggerName];
    // If the logger does not exist, create a new one.
    if (!logger) {
      // This logger logs items from a specific "target".
      const target = { name, id };
      logger = (0, _logger2.default)(target, logHandler, { level });

      // Save the new logger to be returned by future getter cals.
      loggers[loggerName] = logger;
    }

    return logger;
  }

  /**
   * Gets all created loggers.
   * @method getLoggers
   * @return {Object} Object of loggers, keyed by logger name-id.
   */
  function getLoggers() {
    return loggers;
  }

  return {
    getLogger,
    getLoggers,
    get logHandler() {
      return logHandler;
    },
    set logHandler(handler) {
      logHandler = handler;
    },
    set level(newLevel) {
      level = newLevel.toUpperCase();
    }
  };
}

/***/ }),

/***/ "../../packages/kandy/src/logs/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLogger;

var _constants = __webpack_require__("../../packages/kandy/src/logs/constants.js");

/**
 * A LogEntry object is the data that the SDK compiles when information is
 *    logged. It contains both the logged information and meta-info about when
 *    and who logged it.
 *
 * A {@link logger.LogHandler LogHandler} provided to the SDK (see
 *    {@link #configconfiglogs config.logs}) will need to handle LogEntry
 *    objects.
 *
 * @public
 * @static
 * @typedef {Object} LogEntry
 * @memberof logger
 * @requires logs
 * @property {number} timestamp When the log was created, based on UNIX epoch.
 * @property {string} method The log function that was used to create the log.
 * @property {string} level The level of severity the log.
 * @property {Object} target The subject that the log is about.
 * @property {string} target.name The name of the target. This is also
 *    used as the name of the Logger.
 * @property {string} [target.id] A unique identifer for the target.
 * @property {Array} messages The logged information, given to the Logger
 *    method as parameters.
 * @example
 * function defaultLogHandler (logEntry) {
 *   // Compile the meta info of the log for a prefix.
 *   const { timestamp, level, method, target } = logEntry
 *   const logInfo = `${timestamp} - ${target.name} - ${level}`
 *
 *   // Assume that the first message parameter is a string.
 *   const [log, ...extra] = logEntry.messages
 *
 *   console[method](`${logInfo} - ${log}`, ...extra)
 * }
 */

/**
 * Creates a Logger.
 * @method createLogger
 * @param  {Object}   target       The subject of the logs from this logger.
 * @param  {Function} handler      The function to receive/handle log entries.
 * @param  {Object}   [options={}]
 * @return {Logger}
 */
function createLogger(target, handler, options = {}) {
  /**
   * Currying function to dynamically create the Logger's logging methods.
   * @method logFunc
   * @param  {string} method Name of the logger method to create.
   * @return {Function} A log method.
   */
  function logFunc(method) {
    // The level that this function logs at.
    let logLevel;
    // Consider non-standard log levels to be debug.
    if (['group', 'groupEnd', 'groupCollapsed', 'log'].includes(method)) {
      logLevel = 'DEBUG';
    } else {
      // Otherwise, the method and log level match directly.
      logLevel = method.toUpperCase();
    }

    /*
     * Return the function that will be used as `log.<method>`.
     */
    return function (...args) {
      // Compare the logged level and the configured level.
      const setLevel = logger.level.toUpperCase();
      const shouldLog = _constants.logLevels[logLevel] >= _constants.logLevels[setLevel];
      // If this entry shouldn't be logged, don't do anything.
      if (!shouldLog) {
        return;
      }

      // Create the Log Entry to be handed off to the handler.

      const entry = {
        // Meta-info about the log.
        method,
        timestamp: Date.now(),
        level: logLevel,
        target: logger.target,
        // The actual arguments logged.
        messages: [...args]
      };

      logger.logHandler(entry);
    };
  }

  const logger = {
    target,
    level: options.level,
    logHandler: handler,
    name: target.name

    // Supported console methods.
  };const consoleMethods = ['trace', 'debug', 'warn', 'info', 'error', 'log', 'group', 'groupEnd', 'groupCollapsed'];

  const api = {
    get logHandler() {
      return logger.logHandler;
    },
    set logHandler(handler) {
      logger.logHandler = handler;
    },
    get level() {
      return logger.level;
    },
    set level(newLevel) {
      logger.level = newLevel;
    }
  };

  // For all supported log methods, create a function on the Logger for it.
  consoleMethods.forEach(method => {
    api[method] = logFunc(method);
  });

  return api;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/devices.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchDeviceEvents;
exports.setListeners = setListeners;

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

/**
 * Listen for events emitted from the webRTC Device Manager.
 * @method watchDeviceEvents
 * @param  {Object} manager The webRTC Device Manager.
 */


// Libraries.
function* watchDeviceEvents(manager) {
  /**
   * Create an event channel between the Device Manager and redux-saga.
   * This pushes its events into the redux-saga context.
   * */
  const managerChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(manager, emit);
  });

  // managerChannel will emit the Manager's events as actions,
  //  so they can be directly dispatched.
  yield (0, _effects.takeEvery)(managerChannel, _effects.put);
}

/**
 * Function to set-up listeners for the Device Manager events.
 * Contains the logic for how a webRTC event should be parsed
 *    before being sent elsewhere. Split into a stand-alone
 *    function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   manager The Device Manager.
 * @param  {Function} emit    Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
// Webrtc plugin.
function setListeners(manager, emit, END = 'END') {
  // Manager event handlers.
  const change = () => {
    // Get the latest devices after they changed, then emit the device list
    //  upwards.
    manager.checkDevices().then(devices => {
      emit(_actions.deviceActions.devicesChanged(devices));
    });
  };

  manager.on('change', change);

  // Return an unsubscribe function that removes all event listeners.
  const unsubscribe = () => {
    manager.off('change', change);
  };

  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/media.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchMediaEvents;
exports.setListeners = setListeners;

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

/**
 * Sets up event listeners for a Media's events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchMediaEvents
 * @param  {Object} media A Media object.
 * @param  {Object} webRTC The webRTC stack.
 */


// Libraries.
function* watchMediaEvents(media, webRTC) {
  /**
   * Create an event channel between the Media and redux-saga.
   * This "forces" the Media events into a redux-saga context.
   */
  const mediaChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(media, emit, _reduxSaga.END);
  });
  yield (0, _effects.takeEvery)(mediaChannel, _effects.put);
}

/**
 * Function to set-up listeners for a Media object's events.
 * Contains the logic for how a webRTC event should be parsed
 *    before being sent elsewhere. Split into a stand-alone
 *    function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   media A Media object.
 * @param  {Function} emit  Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
// Webrtc plugin.
function setListeners(media, emit, END = 'END') {
  // Media received a new track.
  const newTrack = ({ mediaId, trackId }) => {
    /**
     * When a new track has been added,
     * update redux state's webrtc.media.tracks array with the new trackId.
     */
    emit(_actions.mediaActions.mediaNewTrack(mediaId, { trackId }));
  };

  // TODO: Handle media's 'track:removed' event here.
  //  In unified-plan, when a track is removed this event is triggered.
  const trackRemoved = trackId => {
    emit(_actions.mediaActions.mediaTrackRemoved(media.id, { trackId }));
  };

  const trackEnded = ({ mediaId, trackId }) => {
    /**
     * When a track has ended,
     * update redux state's webrtc.media.tracks array
     * by removing the specified trackId.
     */
    emit(_actions.mediaActions.mediaTrackEnded(mediaId, { trackId }));
  };
  const mediaStopped = id => {
    /**
     * When the media is stopped, its channel should be ended (via `END`).
     * The mediaManager channel will handle updating state for this event.
     */
    emit(END);
  };

  media.on('track:new', newTrack);
  media.on('track:removed', trackRemoved);
  media.on('track:ended', trackEnded);
  media.on('media:stopped', mediaStopped);

  const unsubscribe = () => {
    media.off('track:new', newTrack);
    media.off('track:removed', trackRemoved);
    media.off('track:ended', trackEnded);
    media.off('media:stopped', mediaStopped);
  };
  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/mediaManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchMediaManagerEvents;
exports.setListeners = setListeners;

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _media = __webpack_require__("../../packages/kandy/src/webrtc/channels/media.js");

var _media2 = _interopRequireDefault(_media);

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets up event listeners for Media Manager events. The events are turned into
 *    actions and dispatched to be handled by redux elsewhere.
 * @method watchMediaManagerEvents
 * @param  {Object} manager The Media Manager.
 */


// Libraries.
function* watchMediaManagerEvents(manager) {
  /**
   * Create an event channel between the Media Manager and redux-saga.
   * This pushes its events into the redux-saga context.
   */
  const managerChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(manager, emit);
  });

  yield (0, _effects.takeEvery)(managerChannel, mediaManagerEventsHandler);
} // Webrtc plugin.


function* mediaManagerEventsHandler({ media, action }) {
  // If it is a new Media, watch for its events.
  if (action.type === actionTypes.MEDIA_NEW) {
    yield (0, _effects.fork)(_media2.default, media);
  }

  // Dispatch the action
  yield (0, _effects.put)(action);
}

/**
 * Function to set-up listeners for the Media Manager events.
 * Contains the logic for how a webRTC event should be parsed
 *    before being sent elsewhere. Split into a stand-alone
 *    function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   manager The Media Manager.
 * @param  {Function} emit    Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
function setListeners(manager, emit, END = 'END') {
  const newMedia = id => {
    const media = manager.get(id);
    /**
     * When a new media has been added,
     * update redux state's webrtc.media array by adding in the new media object
     * (List of tracks will just be a list of track ids).
     */
    emit({
      media,
      action: _actions.mediaActions.newMedia(id, {
        local: media.getState().isLocal,
        tracks: media.getTracks().map(track => track.id)
      })
    });
  };

  const removedMedia = id => {
    /**
     * When a media has been removed,
     * update redux state's webrtc.media array
     * by removing the media with the specified media id.
     */
    emit({
      action: _actions.mediaActions.removedMedia(id)
    });
  };

  manager.on('media:new', newMedia);
  manager.on('media:removed', removedMedia);

  const unsubscribe = () => {
    manager.off('media:new', newMedia);
    manager.off('media:removed', removedMedia);
  };
  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/session.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchSessionEvents;
exports.setListeners = setListeners;

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

/**
 * Sets up event listeners for a Session's events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchSessionEvents
 * @param  {Object} session The Session object.
 * @param  {Object} webRTC The webRTC stack.
 */


// Libraries.
function* watchSessionEvents(session, webRTC) {
  /**
   * Create an event channel between the Session and redux-saga.
   * This "forces" the Session events into a redux-saga context.
   */
  const sessionChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(session, emit);
  });
  // sessionChannel will emit the Session's events as actions, so dispatch
  //    them to be handled by sagas.
  // TODO: If the event is "Session gone", should close/unsubscribe the channel.
  yield (0, _effects.takeEvery)(sessionChannel, _effects.put);
}

/**
 * Function to set-up listeners for a Session object's events.
 * Contains the logic for how a webRTC event should be parsed
 *    before being sent elsewhere. Split into a stand-alone
 *    function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   session A Session object.
 * @param  {Function} emit  Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
// Webrtc plugin.
function setListeners(session, emit, END = 'END') {
  // Session received a new track.
  const newTrack = ({ local, trackId }) => {
    /**
     * When a new track has been added,
     * update redux state's webrtc.session.localTracks/remoteTracks array
     * with the new trackId.
     * ('local' boolean will determine whether to update localTracks or remoteTracks)
     */
    emit(_actions.sessionActions.sessionNewTrack(session.id, {
      local,
      trackId
    }));
  };

  const trackRemoved = ({ local, trackId }) => {
    emit(_actions.sessionActions.sessionTrackRemoved(session.id, {
      local,
      trackId
    }));
  };

  const trackEnded = ({ local, trackId, performRenegotiation }) => {
    /**
     * When a track has ended,
     * update redux state's webrtc.session.localTracks/remoteTracks array
     * by removing the specified trackId.
     * ('local' boolean will determine whether to update localTracks or remoteTracks)
     */
    emit(_actions.sessionActions.sessionTrackEnded(session.id, {
      local,
      trackId,
      performRenegotiation
    }));
  };

  const trackReplaced = ({ oldTrackId, trackId }) => {
    emit(_actions.sessionActions.sessionTrackReplaced(session.id, {
      oldTrackId,
      trackId
    }));
  };

  // Generic "something changed" handler.
  // TODO: Either use this for other events or remove it.
  // eslint-disable-next-line no-unused-vars
  const onChange = () => {
    const state = session.getState();

    emit(_actions.sessionActions.sessionChange(session.id, {
      id: state.id,
      localTracks: state.localTracks.map(track => track.id),
      remoteTracks: state.remoteTracks.map(track => track.id)
    }));
  };

  session.on('new:track', newTrack);
  session.on('track:removed', trackRemoved);
  session.on('track:ended', trackEnded);
  session.on('track:replaced', trackReplaced);

  const unsubscribe = () => {
    session.off('new:track', newTrack);
    session.off('track:removed', trackRemoved);
    session.off('track:ended', trackEnded);
    session.off('track:replaced', trackReplaced);
  };
  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/sessionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchSessionManagerEvents;
exports.setListeners = setListeners;

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _session = __webpack_require__("../../packages/kandy/src/webrtc/channels/session.js");

var _session2 = _interopRequireDefault(_session);

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets up event listeners for Session Manager Events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchSessionManagerEvents
 * @param  {Object} manager The webRTC Session Manager.
 * @param  {Object} webRTC The webRTC stack.
 */


// Libraries.
function* watchSessionManagerEvents(manager, webRTC) {
  /**
   * Create an event channel between the Session Manager and redux-saga.
   * This pushes its events into the redux-saga context.
   */
  const managerChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(manager, emit);
  });

  while (true) {
    const { session, action } = yield (0, _effects.take)(managerChannel);

    // If it is a new Session, watch for its events.
    if (action.type === actionTypes.SESSION_ADDED) {
      yield (0, _effects.fork)(_session2.default, session, webRTC);
    }

    // Dispatch the action directly.
    yield (0, _effects.put)(action);
  }
}

/**
 * Sets up listeners for the Session Manager events.
 * Contains logic for how specific webRTC events should be
 *    parsed before being sent elsewhere. Split into a
 *    stand-alone function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   manager The Session Manager.
 * @param  {Function} emit    Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
// Webrtc plugin.
function setListeners(manager, emit, END = 'END') {
  // Handle new Session.
  const sessionAdded = id => {
    const session = manager.get(id);
    const state = session.getState();
    delete state.id;

    emit({
      session: session,
      action: _actions.sessionActions.sessionAdded(id, state)
    });
  };

  // Handle Sessions ending.
  const sessionRemoved = id => {
    emit({
      action: _actions.sessionActions.sessionRemoved(id)
    });
  };

  manager.on('session:new', sessionAdded);
  manager.on('session:removed', sessionRemoved);
  const unsubscribe = () => {
    manager.off('session:new', sessionAdded);
    manager.off('session:removed', sessionRemoved);
  };
  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/track.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchTrackEvents;
exports.setListeners = setListeners;

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

/**
 * Sets up event listeners for a Track's events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchTrackEvents
 * @param  {Object} track A Track object.
 * @param  {Object} webRTC The webRTC stack.
 */
// Libraries.
function* watchTrackEvents(track, webRTC) {
  /**
   * Create an event channel between the Track and redux-saga.
   * This "forces" the Track events into a redux-saga context.
   */
  const trackChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(track, emit, _reduxSaga.END);
  });
  yield (0, _effects.takeEvery)(trackChannel, _effects.put);
}

/**
 * Function to set-up listeners for a Track object's events.
 * Contains the logic for how a webRTC event should be parsed
 *    before being sent elsewhere. Split into a stand-alone
 *    function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   track A Track object.
 * @param  {Function} emit  Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
function setListeners(track, emit, END = 'END') {
  // Track ended
  const trackEnded = trackData => {
    /**
     * When the track ends, its channel should be ended (via `END`).
     * The trackManager channel will handle updating state for this event.
     */
    emit(END);
  };

  track.on('ended', trackEnded);

  const unsubscribe = () => {
    track.off('ended', trackEnded);
  };
  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/channels/trackManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchTrackManagerEvents;
exports.setListeners = setListeners;

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _track = __webpack_require__("../../packages/kandy/src/webrtc/channels/track.js");

var _track2 = _interopRequireDefault(_track);

var _effects = __webpack_require__("../../node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets up event listeners for Track Manager Events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchTrackManagerEvents
 * @param  {Object} manager The webRTC Track Manager.
 */


// Libraries.
function* watchTrackManagerEvents(manager) {
  /**
   * Create an event channel between the Track Manager and redux-saga.
   * This pushes its events into the redux-saga context.
   * */
  const managerChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(manager, emit);
  });

  // https://github.com/redux-saga/redux-saga/issues/684
  // See user "kuy"'s second comment.
  // Using takeEvery to handle actions.
  // That way they are handled in a forked process and other actions don't get dropped.
  yield (0, _effects.takeEvery)(managerChannel, trackManagerEventsHandler);
} // Call plugin.


function* trackManagerEventsHandler({ track, action }) {
  // If it is a new Track, watch for its events.
  if (action.type === actionTypes.TRACK_ADDED) {
    yield (0, _effects.fork)(_track2.default, track);
  }

  // Dispatch the action
  yield (0, _effects.put)(action);
}

/**
 * Sets up listeners for the Track Manager events.
 * Contains logic for how specific webRTC events should be
 *    parsed before being sent elsewhere. Splut into a
 *    stand-alone function in order to be re-usable.
 * @method setListeners
 * @param  {Object}   manager The Track Manager.
 * @param  {Function} emit    Function that receives the parsed events.
 * @param  {Any}      [END='END'] The "end of lifetime" symbol.
 * @return {Function} The unsubscribe function.
 */
function setListeners(manager, emit, END = 'END') {
  // Handle new Tracks.
  const trackAdded = id => {
    const track = manager.get(id);
    const state = track.getState();
    delete state.id;

    /**
     * When a new track is added,
     * update redux state's webrtc.tracks array by adding track's state into it.
     */
    emit({
      track,
      action: _actions.trackActions.trackAdded(id, state)
    });
  };

  // Handle Tracks ending.
  const trackRemoved = id => {
    /**
     * When a track has ended,
     * update redux state's webrtc.tracks array
     * by specifying which track to remove by providing a track id.
     */
    emit({
      action: _actions.trackActions.trackRemoved(id)
    });
  };

  manager.on('add', trackAdded);
  manager.on('remove', trackRemoved);
  const unsubscribe = () => {
    manager.off('add', trackAdded);
    manager.off('remove', trackRemoved);
  };
  return unsubscribe;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const prefix = '@@KANDY/WEBRTC/';

/**
 * Device action types.
 */
const DEVICES_CHANGE = exports.DEVICES_CHANGE = prefix + 'DEVICES/CHANGE';

/**
 * Track action types.
 */
const trackPrefix = prefix + 'TRACK/';

const TRACK_ADDED = exports.TRACK_ADDED = trackPrefix + 'ADDED';
const TRACK_REMOVED = exports.TRACK_REMOVED = trackPrefix + 'REMOVED';

const RENDER_TRACKS = exports.RENDER_TRACKS = trackPrefix + 'RENDER';
const RENDER_TRACKS_FINISH = exports.RENDER_TRACKS_FINISH = trackPrefix + 'RENDER_FINISH';

const REMOVE_TRACKS = exports.REMOVE_TRACKS = trackPrefix + 'REMOVE';
const REMOVE_TRACKS_FINISH = exports.REMOVE_TRACKS_FINISH = trackPrefix + 'REMOVE_FINISH';

const MUTE_TRACKS = exports.MUTE_TRACKS = trackPrefix + 'MUTE';
const MUTE_TRACKS_FINISH = exports.MUTE_TRACKS_FINISH = trackPrefix + 'MUTE_FINISH';
const UNMUTE_TRACKS = exports.UNMUTE_TRACKS = trackPrefix + 'UNMUTE';
const UNMUTE_TRACKS_FINISH = exports.UNMUTE_TRACKS_FINISH = trackPrefix + 'UNMUTE_FINISH';

/**
 * Session action types.
 */
const sessionPrefix = prefix + 'SESSION/';

const SESSION_ADDED = exports.SESSION_ADDED = sessionPrefix + 'ADDED';
const SESSION_REMOVED = exports.SESSION_REMOVED = sessionPrefix + 'REMOVED';

const SESSION_NEW_TRACK = exports.SESSION_NEW_TRACK = sessionPrefix + 'NEW_TRACK';
const SESSION_TRACK_REMOVED = exports.SESSION_TRACK_REMOVED = sessionPrefix + 'TRACK_REMOVED';
const SESSION_TRACK_ENDED = exports.SESSION_TRACK_ENDED = sessionPrefix + 'TRACK_ENDED';
const SESSION_CHANGE = exports.SESSION_CHANGE = sessionPrefix + 'CHANGE';
const SESSION_TRACK_REPLACED = exports.SESSION_TRACK_REPLACED = sessionPrefix + 'TRACK_REPLACED';

/**
 * Media action types.
 */
const mediaPrefix = prefix + 'MEDIA/';

const MEDIA_NEW = exports.MEDIA_NEW = mediaPrefix + 'NEW';
const MEDIA_REMOVED = exports.MEDIA_REMOVED = mediaPrefix + 'REMOVED';
const MEDIA_CHANGE = exports.MEDIA_CHANGE = mediaPrefix + 'CHANGE';

const MEDIA_NEW_TRACK = exports.MEDIA_NEW_TRACK = mediaPrefix + 'NEW_TRACK';
const MEDIA_TRACK_REMOVED = exports.MEDIA_TRACK_REMOVED = mediaPrefix + 'TRACK_REMOVED';
const MEDIA_TRACK_ENDED = exports.MEDIA_TRACK_ENDED = mediaPrefix + 'TRACK_ENDED';

/**
 * Misc. action types.
 */
const SET_BROWSER_DETAILS = exports.SET_BROWSER_DETAILS = prefix + 'SET_BROWSER_DETAILS';

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actions/devices.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devicesChanged = devicesChanged;

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function devicesChanged(devices) {
  return {
    type: actionTypes.DEVICES_CHANGE,
    payload: devices
  };
} // Webrtc plugin.

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actions/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.miscActions = exports.mediaActions = exports.sessionActions = exports.trackActions = exports.deviceActions = undefined;

var _devices = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/devices.js");

var deviceActionsImport = _interopRequireWildcard(_devices);

var _tracks = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/tracks.js");

var trackActionsImport = _interopRequireWildcard(_tracks);

var _sessions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/sessions.js");

var sessionActionsImport = _interopRequireWildcard(_sessions);

var _media = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/media.js");

var mediaActionsImport = _interopRequireWildcard(_media);

var _misc = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/misc.js");

var miscActionsImport = _interopRequireWildcard(_misc);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Apparently the following doesn't work:
//      export * as newName from './place';
// So import everything from each file, then re-export.
const deviceActions = exports.deviceActions = deviceActionsImport;
const trackActions = exports.trackActions = trackActionsImport;
const sessionActions = exports.sessionActions = sessionActionsImport;
const mediaActions = exports.mediaActions = mediaActionsImport;
const miscActions = exports.miscActions = miscActionsImport;

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actions/media.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.newMedia = newMedia;
exports.removedMedia = removedMedia;
exports.mediaNewTrack = mediaNewTrack;
exports.mediaTrackRemoved = mediaTrackRemoved;
exports.mediaTrackEnded = mediaTrackEnded;

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Webrtc plugin.
function mediaActionHelper(type, id, payload = {}, meta = {}) {
  const action = {
    type,
    payload: (0, _extends3.default)({}, payload, {
      id
    })

    // Only have meta and error properties on the action if they're needed.
  };if (!(0, _fp.isEmpty)(meta)) {
    action.meta = meta;
  }
  if (payload.error) {
    action.error = true;
  }
  return action;
}

// Libraries.
function newMedia(id, params) {
  return mediaActionHelper(actionTypes.MEDIA_NEW, id, params);
}

function removedMedia(id, params) {
  return mediaActionHelper(actionTypes.MEDIA_REMOVED, id, params);
}

function mediaNewTrack(id, params) {
  return mediaActionHelper(actionTypes.MEDIA_NEW_TRACK, id, params);
}

function mediaTrackRemoved(id, params) {
  return mediaActionHelper(actionTypes.MEDIA_TRACK_REMOVED, id, params);
}

function mediaTrackEnded(id, params) {
  return mediaActionHelper(actionTypes.MEDIA_TRACK_ENDED, id, params);
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actions/misc.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBrowserDetails = setBrowserDetails;

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Action creator
 * @method setBrowserDetails
 * @param  {Object} details
 * @param  {string} details.browser
 * @param  {number} details.version
 * @return {Object} A Flux-Standard-action.
 */
function setBrowserDetails(details) {
  return {
    type: actionTypes.SET_BROWSER_DETAILS,
    payload: details
  };
} // Webrtc plugin.

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actions/sessions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.sessionAdded = sessionAdded;
exports.sessionRemoved = sessionRemoved;
exports.sessionNewTrack = sessionNewTrack;
exports.sessionTrackRemoved = sessionTrackRemoved;
exports.sessionTrackEnded = sessionTrackEnded;
exports.sessionChange = sessionChange;
exports.sessionTrackReplaced = sessionTrackReplaced;

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Call plugin.
function sessionActionHelper(type, id, payload = {}, meta = {}) {
  const action = {
    type,
    payload: (0, _extends3.default)({}, payload, {
      id
    })

    // Only have meta and error properties on the action if they're needed.
  };if (!(0, _fp.isEmpty)(meta)) {
    action.meta = meta;
  }
  if (payload.error) {
    action.error = true;
  }
  return action;
}

// Libraries.
function sessionAdded(id, params) {
  return sessionActionHelper(actionTypes.SESSION_ADDED, id, params);
}

function sessionRemoved(id, params) {
  return sessionActionHelper(actionTypes.SESSION_REMOVED, id, params);
}

function sessionNewTrack(id, params) {
  return sessionActionHelper(actionTypes.SESSION_NEW_TRACK, id, params);
}

function sessionTrackRemoved(id, params) {
  return sessionActionHelper(actionTypes.SESSION_TRACK_REMOVED, id, params);
}

function sessionTrackEnded(id, params) {
  return sessionActionHelper(actionTypes.SESSION_TRACK_ENDED, id, params);
}

function sessionChange(id, params) {
  return sessionActionHelper(actionTypes.SESSION_CHANGE, id, params);
}

function sessionTrackReplaced(id, params) {
  return sessionActionHelper(actionTypes.SESSION_TRACK_REPLACED, id, params);
}

/***/ }),

/***/ "../../packages/kandy/src/webrtc/interface/actions/tracks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.trackAdded = trackAdded;
exports.trackRemoved = trackRemoved;
exports.muteTracks = muteTracks;
exports.muteTracksFinish = muteTracksFinish;
exports.unmuteTracks = unmuteTracks;
exports.unmuteTracksFinish = unmuteTracksFinish;
exports.renderTracks = renderTracks;
exports.renderTracksFinish = renderTracksFinish;
exports.removeTracks = removeTracks;
exports.removeTracksFinish = removeTracksFinish;

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trackManagerHelper(type, trackId, payload = {}, meta = {}) {
  return {
    type,
    payload: (0, _extends3.default)({}, payload, {
      trackId
    }),
    meta
  };
} // Call plugin.
function trackAdded(trackId, params) {
  return trackManagerHelper(actionTypes.TRACK_ADDED, trackId, params);
}

function trackRemoved(trackId, params) {
  return trackManagerHelper(actionTypes.TRACK_REMOVED, trackId, params);
}

function trackHelper(type, payload = {}, meta = {}) {
  return {
    type,
    payload,
    meta
  };
}

function muteTracks(trackIds) {
  return trackHelper(actionTypes.MUTE_TRACKS, trackIds);
}

function muteTracksFinish(trackIds) {
  return trackHelper(actionTypes.MUTE_TRACKS_FINISH, trackIds);
}

function unmuteTracks(trackIds) {
  return trackHelper(actionTypes.UNMUTE_TRACKS, trackIds);
}

function unmuteTracksFinish(trackIds) {
  return trackHelper(actionTypes.UNMUTE_TRACKS_FINISH, trackIds);
}

function renderTracks(trackIds, params) {
  return trackHelper(actionTypes.RENDER_TRACKS, (0, _extends3.default)({
    trackIds
  }, params));
}

function renderTracksFinish(trackIds, params) {
  return trackHelper(actionTypes.RENDER_TRACKS_FINISH, (0, _extends3.default)({
    trackIds
  }, params));
}

function removeTracks(trackIds, params) {
  return trackHelper(actionTypes.REMOVE_TRACKS, (0, _extends3.default)({
    trackIds
  }, params));
}

function removeTracksFinish(trackIds, params) {
  return trackHelper(actionTypes.REMOVE_TRACKS_FINISH, (0, _extends3.default)({
    trackIds
  }, params));
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/channel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = wrapChannel;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wraps a channel with only `send` and `receive` functionality into one that
 *    also has `reply` functionality.
 * This is required by the Proxy Plugin to convert asynchronous code into
 *    synchronous code. The Proxy needs to return a value synchronously when
 *    sending data over the channel.
 * @method wrapChannel
 * @param  {Object} channel
 * @return {Object} The same channel, but with a `reply` method as well.
 */
function wrapChannel(channel) {
  /**
   * Track sent messages by their ID.
   * @type {Object}
   */
  const sentMessages = {};

  channel.receive = function receiveMessage(message) {
    const { messageId, data } = message;

    // Determine how the message needs to be handled.
    if (messageId && sentMessages[messageId]) {
      // If the message has an ID from a sent message, then it is a reply to
      //    that message. Resolve the promise associated with it.
      sentMessages[messageId].resolve(data);
    } else if (messageId && !sentMessages[messageId]) {
      // If the message has an ID that we don't know about, then the application
      //    will need to handle it.
      if (api.receive) {
        api.receive(messageId, data);
      } else {
        console.warn('No listener for receiving messages.', data);
      }
    } else {
      // If the message didn't have an ID, then it wasn't from our test channel.
      console.log('Unknown message.');
    }
  };

  /*
   * The interface that the Proxy Plugin will use.
   */
  const api = {};

  /**
   * Send a message over the channel.
   * @method send
   * @param {string} messageId A unique ID to track the sent message.
   * @param {Object} data
   * @param {Function} callback Function called when a reply is received.
   */
  api.send = (messageId, data, callback) => {
    if (sentMessages[messageId]) {
      // The ID has already been used for sending a message.
      callback(null, new Error('Cannot send message; ID already used.'));
      return;
    }

    // Attach a messageId to the message.
    // This lets the remote side reply to this message by using the messageId.
    const message = {
      data,
      messageId

      // Wrap `send` is a promise so that we can correlate receiving a reply
      //    to the callback.
    };new _promise2.default(resolve => {
      // Store `resolve` so we can call it call it when we receive a reply.
      sentMessages[messageId] = {
        resolve
        // Send the message over the channel.
      };channel.send(message);
    }).then(data => {
      // The message received a reply, so remove the reference.
      delete sentMessages[messageId];

      if (typeof callback === 'function') {
        callback(data);
      }
    });
  };

  /**
   * Listener for receiving a message from the channel.
   * @method receive
   * @param {string} messageId
   * @param {Object} data
   */
  // eslint-disable-next-line
  api.receive = undefined;

  /**
   * Send a reply to a specific received message over the channel.
   * @method reply
   * @param {string} messageId
   * @param {Object} data
   */
  api.reply = (messageId, data) => {
    // Attach the messageId to the message.
    const message = {
      data,
      messageId
    };

    channel.send(message);
  };

  return api;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/deviceManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Device Manager "converter".
 * Receives a webRTC command intended for the Media Manager, performs the webRTC
 *    operation and returns/resolves a proxy response.
 * @method mediaManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function deviceManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.devices;

  // General case: Don't convert the return.
  return manager[operation](...params);
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = convertCommand;
exports.convertTrack = convertTrack;
exports.convertMedia = convertMedia;
exports.convertSession = convertSession;

var _deviceManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/deviceManager.js");

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _mediaManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/mediaManager.js");

var _mediaManager2 = _interopRequireDefault(_mediaManager);

var _sessionManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/sessionManager.js");

var _sessionManager2 = _interopRequireDefault(_sessionManager);

var _trackManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/trackManager.js");

var _trackManager2 = _interopRequireDefault(_trackManager);

var _media = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/media.js");

var _media2 = _interopRequireDefault(_media);

var _session = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/session.js");

var _session2 = _interopRequireDefault(_session);

var _track = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/track.js");

var _track2 = _interopRequireDefault(_track);

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Proxy plugin.
const log = (0, _logs.getLogManager)().getLogger('PROXY');

// Converters for the webRTC managers.


// Other plugins.
const managers = {
  media: _mediaManager2.default,
  sessionManager: _sessionManager2.default,
  track: _trackManager2.default,
  devices: _deviceManager2.default

  // Converters for the webRTC models.
};const models = {
  media: _media2.default,
  session: _session2.default,
  track: _track2.default

  /**
   * Forwards a webRTC command to the appropriate "converter".
   * The converter will perform the webRTC operation and return
   *    a response that can be returned over the channel.
   * @method convertCommand
   * @param {Object} webRTC The local webRTC stack.
   * @param {Object} command The webRTC command.
   * @return {Promise} Promise resolving with the operation result.
   */
};function convertCommand(webRTC, command) {
  if (command.id === 'manager') {
    // Forward the command to the appropriate manager converter.
    log.debug(`Performing ${command.type} manager operation ${command.operation}.`, command.params);
    return managers[command.type](webRTC, command);
  } else {
    // Forward the command to the appropriate model converter.
    log.debug(`Performing ${command.type} model operation ${command.operation}.`, command.params);
    return models[command.type](webRTC, command);
  }
}

/**
 * Converts a Track object into a serializable object
 *    that the Proxy Plugin can use.
 * @method convertTrack
 * @param  {Track} track
 * @return {Object}  A serializable object.
 */
function convertTrack(track) {
  if (track) {
    return (0, _extends3.default)({
      type: 'track'
    }, track.getState());
  }
}

/**
 * Converts a Media object into something that can be
 *    returned over the channel.
 * @method convertMedia
 * @param {Media} media
 * @return {Object} A serializable object.
 */
function convertMedia(media) {
  if (media) {
    return {
      type: 'media',
      id: media.id
    };
  }
}

/**
 * Converts a Session object into a serializable object
 *    that the Proxy Plugin can use.
 * @method convertSession
 * @param  {Session} session
 * @return {Object}  A serializable object.
 */
function convertSession(session) {
  if (session) {
    const sessionState = session.getState();

    return (0, _extends3.default)({
      type: 'session'
    }, sessionState, {
      localTracks: sessionState.localTracks.map(convertTrack),
      remoteTracks: sessionState.remoteTracks.map(convertTrack)
    });
  }
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/media.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/index.js");

/**
 * Media "converter".
 * Receives webRTC commands intended for a Media object.
 * Converts the command into the actual operation, and converts
 *    the operation's return value into a format that the Proxy
 *    Stack can use.
 * @method media
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function media(webRTC, command) {
  const { id, operation, params } = command;
  const media = webRTC.managers.media.get(id);

  if (!media) {
    // Media not found.
    return;
  }

  if (operation === 'getTracks') {
    return media.getTracks().map(_index.convertTrack);
  } else {
    // General case: Don't convert the return.
    return media[operation](...params);
  }
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/mediaManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/index.js");

/**
 * Media Manager "converter".
 * Receives a webRTC command intended for the Media Manager, performs the webRTC
 *    operation and returns/resolves a proxy response.
 * @method mediaManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function mediaManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.media;

  // Handle different APIs differently, depending on what they return.
  if (operation === 'get') {
    const media = manager.get(...params);
    return (0, _index.convertMedia)(media);
  } else if (operation === 'createLocal') {
    try {
      const media = await manager.createLocal(...params);
      return (0, _index.convertMedia)(media);
    } catch (err) {
      console.error('Error: ', err);
      return err;
    }
  } else {
    // General case: Don't convert the return.
    return manager[operation](...params);
  }
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/session.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Session "converter".
 * Receives webRTC commands intended for a Session object.
 * Converts the command into the actual operation, and converts
 *    the operation's return value into a format that the Proxy
 *    Stack can use.
 * @method session
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function session(webRTC, command) {
  const { id, operation, params } = command;
  const session = webRTC.managers.sessionManager.get(id);

  if (!session) {
    // Session not found.
    return;
  }

  if (operation === 'addTracks') {
    const trackIds = params[0].map(track => track.id);
    const tracks = webRTC.managers.track.getTracks(trackIds);
    return session.addTracks(tracks);
  }

  // General case: Don't convert the return.
  return session[operation](...params);
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/sessionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/index.js");

/**
 * Session Manager "converter".
 * Receives webRTC commands intended for the Session Manager.
 * Converts the command into the actual operation, and converts
 *    the operation's return value into a format that the Proxy
 *    Stack can use.
 * @method sessionManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function sessionManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.sessionManager;

  // Handle different APIs differently, depending on what they return.
  if (operation === 'create') {
    const session = manager.create(...params);
    return (0, _index.convertSession)(session);
  } else if (operation === 'get') {
    const session = manager.get(...params);
    return (0, _index.convertSession)(session);
  } else if (operation === 'getAll') {
    const sessions = manager.getAll(...params);
    return sessions.map(_index.convertSession);
  } else {
    // General case: Don't convert the return.
    return manager[operation](...params);
  }
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/track.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Track "converter".
 * Receives webRTC commands intended for a Track object.
 * Handles performing the operation and converting the operation's
 *    return value into a format the Proxy Stack can use.
 * @method track
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function track(webRTC, command) {
  const { id, operation, params } = command;
  const track = webRTC.managers.track.get(id);

  if (!track) {
    // Track not found.
    return;
  }

  // Handle different APIs differently, depending on what they return.
  if (operation === 'getContainers') {
    return track.getContainers().map(ele => ele.id);
  } else {
    // General case: Don't handle the return.
    return track[operation](...params);
  }
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/trackManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/index.js");

/**
 * Track Manager "converter".
 * Receives webRTC commands intended for the Track Manager.
 * Converts the command into the actual operation, and converts
 *    the operation's return value into a format that the Proxy
 *    Stack can use.
 * @method trackManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function trackManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.track;

  // Handle different APIs differently, depending on what the return.
  if (operation === 'get') {
    const track = manager.get(...params);
    return (0, _index.convertTrack)(track);
  } else if (operation === 'getTracks') {
    const tracks = manager.getTracks(...params);
    return tracks.map(_index.convertTrack);
  } else {
    // General case: Don't convert the return.
    return manager[operation](...params);
  }
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/remote/clientProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clientProxy;

var _converters = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/index.js");

var _converters2 = _interopRequireDefault(_converters);

var _webrtcEvents = __webpack_require__("../../packages/kandy/src/webrtcProxy/webrtcEvents.js");

var _webrtcEvents2 = _interopRequireDefault(_webrtcEvents);

var _channel = __webpack_require__("../../packages/kandy/src/webrtcProxy/channel.js");

var _channel2 = _interopRequireDefault(_channel);

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

var _v = __webpack_require__("../../node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

var _kandyWebrtc = __webpack_require__("../../packages/webrtc/src/interface/index.js");

var _kandyWebrtc2 = _interopRequireDefault(_kandyWebrtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Libraries.
// Proxy Plugin.
const log = (0, _logs.getLogManager)().getLogger('PROXY');

/**
 * The Remote SDK's Proxy module provides the connection point for the remote end of the channel. After being provide with a channel, the Remote SDK will use it to receive and reply to messages from the main SDK on the other end.
 *
 * @public
 * @module Proxy
 */

/**
 * The Channel object that needs to be provided to the the Proxy module.
 *
 * @public
 * @module Channel
 * @example
 * // The channel the application uses for communicating with a remote endpoint.
 * const appChannel = ...
 *
 * // The channel the application will provide to the Proxy module for use.
 * const channel = {
 *    send: function (data) {
 *      // Any encoding / wrapping needed for a Proxy message being sent
 *      //    over the channel.
 *      appChannel.sendMessage(data)
 *    },
 *    // The Proxy module will set this function.
 *    receive: undefined
 * }
 * appChannel.on('message', data => {
 *    // Any decoding / unwrapping needed for the received message.
 *    channel.receive(data)
 * })
 *
 * client.proxy.setChannel(channel)
 */

/**
 * Creates the Client side of the Proxy.
 * The Client Proxy handles the remote side of the proxy channel. It contains
 *    the local webRTC stack, and is provided a channel by the application. It
 *    handles receiving SDK messages from the channel and performing any
 *    webRTC operations needed (and replying).
 * @method clientProxy
 * @return {Object} The Client Proxy.
 */


// Other plugins.
function clientProxy() {
  const base = {
    // Whether the Client Proxy is ready for use.
    isReady: false,
    // The local webRTC stack.
    webRTC: _kandyWebrtc2.default,
    // The channel to use for proxying operations.
    channel: undefined

    /*
     * The interface for an application to use the Client Proxy.
     */
  };const api = {};

  /**
   * Provides the Channel to the Remote SDK.
   * The SDK will use this channel to communicate with the main SDK.
   * @public
   * @memberof Proxy
   * @method setChannel
   * @param {Channel} channel See the `Channel` module for information.
   */
  api.setChannel = channel => {
    base.channel = (0, _channel2.default)(channel);

    base.channel.receive = (id, data) => {
      log.debug(`Received message ${id}.`);

      if (!base.isReady && data.initialize) {
        log.info('Initializing local webRTC stack.', data.config);
        base.webRTC = base.webRTC(data.config);
        base.isReady = true;

        // Setup listeners for events from the webRTC stack.
        (0, _webrtcEvents2.default)(base.webRTC, action => {
          // When an event is received (and has already been parsed into an
          //    action), send it over the channel.
          if (typeof action === 'object' && action.type) {
            // Make sure that the action is an actual action, though.
            log.debug(`Sending event over channel: ${action.type}.`);
            const messageId = (0, _v2.default)();
            base.channel.send(messageId, { event: action });
          } else {
            log.debug(`Proxy event listeners received unexpected format; ignoring.`, action);
          }
        });

        // When responding to the initialize command, include browser details.
        const browser = base.webRTC.getBrowserDetails();
        log.info(`Browser details: ${browser.browser}, version ${browser.version}.`);

        if (api.onInit) {
          api.onInit(base.webRTC);
        }
        base.channel.reply(id, { initialized: true, browser });
      } else if (!base.isReady) {
        log.info('Client not ready! Still needs to be initialized.');
        base.channel.reply(id, { initialized: false });
      } else if (isWebrtcCommand(data)) {
        log.info('Received Webrtc command.');
        // WebRTC operations may be async. Need to ensure that
        //    they finish before replying to the command.
        (0, _converters2.default)(base.webRTC, data).then(result => {
          log.debug(`Completed operation, sending reply to ${id}.`, result);
          base.channel.reply(id, result);
        });
      } else {
        log.error('Unknown data format; ignoring.', data);
        // TODO: Reply with a (better?) error.
        const response = { error: 'Unknown format.', data };
        base.channel.reply(id, response);
      }
    };
  };

  /**
   * Retreives the current channel being used.
   * @method getChannel
   * @return {Channel}
   */
  api.getChannel = () => {
    return base.channel;
  };

  /**
   * Sends data, over the channel, to the remote side.
   * @method send
   * @param {Any} args Depends on channel used.
   */
  api.send = (...args) => {
    if (base.channel && base.channel.send) {
      base.channel.send(...args);
    } else {
      log.error('Cannot send without a channel to use.');
    }
  };

  /**
   * Listener for the webRTC stack is initialized.
   * @method onInit
   * @param {Object} webRTC The initialized webRTC stack.
   */
  api.onInit = undefined;

  return api;
}

/**
 * Ensures that an object represents a webRTC command.
 * @method isWebrtcCommand
 * @param {Object} data
 * @return {boolean}
 */
function isWebrtcCommand(data) {
  return data.type && data.id && data.operation;
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/remote/events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = setupEvents;

var _eventEmitter = __webpack_require__("../../packages/kandy/src/events/eventEmitter.js");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets up an Event Emitter for the Remote SDK.
 * @method setupEvents
 * @return {Emitter}
 */
function setupEvents() {
  const emitter = (0, _eventEmitter2.default)();

  /**
   * Sets up listeners for webRTC events.
   * @method setWebrtcListeners
   * @param  {Object} webRTC The initialized webRTC stack.
   */
  function setWebrtcListeners(webRTC) {
    const mediaMan = webRTC.managers.media;
    const deviceMan = webRTC.managers.devices;

    /**
     * Media devices available for use have changed.
     * Use the {@link media.getDevices} API to retrieve the lists of devices.
     * @public
     * @memberof media
     * @event devices:change
     * @param {Object} params
     * @param {Array<string>}  microphone The list of available audio input devices.
     * @param {Array<string>}  camera     The list of available video input devices.
     * @param {Array<string>}  speaker    The list of available audio output devices.
     * @example
     * // Listen for changes to available media devices.
     * remoteClient.on('devices:change', function () {
     *    // Retrieve the latest media device lists.
     *    const devices = remoteClient.media.getDevices()
     * })
     */
    deviceMan.on('change', () => {
      deviceMan.checkDevices().then(devices => {
        emitter.emit('devices:change', devices);
      });
    });

    /**
     * A new Media object is available.
     * It may represent either the local or remote media for a call.
     * @public
     * @memberof media
     * @event media:new
     * @param {Object} params
     * @param {string} params.mediaId The ID of the new Media object.
     */
    mediaMan.on('media:new', mediaId => {
      const media = mediaMan.get(mediaId);

      /**
       * A new Track object is available.
       * The Track will be within a Media object that is already available.
       * @public
       * @memberof media
       * @event track:new
       * @param {Object} params
       * @param {string} params.trackId The ID of the new Track object.
       * @param {string} params.mediaId The ID of the Media object the Track belongs to.
       */
      media.on('track:new', ({ mediaId, trackId }) => {
        emitter.emit('track:new', { mediaId, trackId });
      });

      /**
       * An existing Track object has stopped being available.
       * @public
       * @memberof media
       * @event track:removed
       * @param {Object} params
       * @param {string} params.trackId The ID of the removed Track object.
       * @param {string} params.mediaId The ID of the Media object the Track belonged to.
       */
      media.on('track:removed', trackId => {
        emitter.emit('track:removed', { trackId, mediaId: media.id });
      });

      emitter.emit('media:new', mediaId);
    });

    /**
     * An existing Media object has stopped being available.
     * @public
     * @memberof media
     * @event media:removed
     * @param {Object} params
     * @param {string} params.mediaId The ID of the removed Media object.
     */
    mediaMan.on('media:removed', mediaId => {
      emitter.emit('media:removed', { mediaId });
    });
  }

  return (0, _extends3.default)({}, emitter, {
    setWebrtcListeners
  });
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/remote/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _objectWithoutProperties2 = __webpack_require__("../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _clientProxy = __webpack_require__("../../packages/kandy/src/webrtcProxy/remote/clientProxy.js");

var _clientProxy2 = _interopRequireDefault(_clientProxy);

var _media = __webpack_require__("../../packages/kandy/src/webrtcProxy/remote/media.js");

var mediaApis = _interopRequireWildcard(_media);

var _events = __webpack_require__("../../packages/kandy/src/webrtcProxy/remote/events.js");

var _events2 = _interopRequireDefault(_events);

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = (0, _logs.getLogManager)().getLogger('PROXY');

/**
 * The Remote SDK creation factory. Create an instance of the Remote SDK by calling this factory with the desired configurations.
 * @public
 * @method create
 * @example
 * // Instantiate the Remote SDK.
 * const remoteClient = remoteKandy.create();
 *
 * // Use the SDK's APIs.
 * remoteClient.on( ... );
 */

/**
 * Entrypoint for the "Remote SDK".
 * Is equivalent to an `index.remote.js` file.
 * @method remoteClient
 * @return {Object} The remote SDK's API.
 */


// Other plugins.
function remoteClient() {
  // Setup the Client Proxy.
  const proxy = (0, _clientProxy2.default)();
  // The webRTC stack ...when initialized.
  let webRTC;
  // Event emitter.
  const emitter = (0, _events2.default)();

  // When Client Proxy is initialized, finish setting up
  //    for webRTC events and notify the application.
  proxy.onInit = function (stack) {
    webRTC = stack;
    emitter.setWebrtcListeners(stack);
    // Emit the stack for backwards compatibility until
    //    the example is updated to use the APIs.
    emitter.emit('initialize', stack);
  };

  // Exclude onInit from the public Proxy API.
  const { onInit } = proxy,
        proxyApi = (0, _objectWithoutProperties3.default)(proxy, ['onInit']);

  /**
   * Wrapper function to ensure that Media APIs aren't used before the webRTC
   *    has been initialized.
   * @method hasDefinedStack
   * @param  {Function} api The API function to wrap.
   * @return {Function} The wrapped API function.
   */
  function hasDefinedStack(api) {
    return function stackCheck(...args) {
      if (webRTC) {
        return api(webRTC, ...args);
      } else {
        log.info('Remote Proxy not yet initialized; cannot use media APIs yet.');
      }
    };
  }

  const mediaApi = {};
  // Wrap each Media API before adding it to the public API.
  for (const name in mediaApis) {
    mediaApi[name] = hasDefinedStack(mediaApis[name]);
  }

  /**
   * The Remote SDK is comprised of three APIs:
   *   - proxy: Interface to the Client Proxy (the channel).
   *   - media: API interface to the webRTC stack.
   *   - events: Event interface to the webRTC stack.
   */
  return {
    proxy: proxyApi,
    media: mediaApi,
    on: emitter.on,
    off: emitter.off,
    getCapabilities: () => []
  };
}

// Alias 'create' to be equal to the root function
remoteClient.create = remoteClient;

// Export this way as a work-around, so it can be used as `<export>();`.
// See: https://github.com/webpack/webpack/issues/706
module.exports = remoteClient;

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/remote/media.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDevices = getDevices;
exports.getMedia = getMedia;
exports.getMediaById = getMediaById;
exports.getTrackById = getTrackById;
exports.renderTracks = renderTracks;
exports.removeTracks = removeTracks;

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

const log = (0, _logs.getLogManager)().getLogger('PROXY');

/**
 * Retrieves the available media devices for use.
 * @public
 * @memberof media
 * @method getDevices
 * @return {Object} The lists of camera, microphone, and speaker devices.
 */
/**
 * The Remote SDK's public Media APIs.
 * As similar as possible to the webRTC plugin's Media APIs.
 */

/**
 * The media features are used to interact with media that the SDK is
 * currently using.
 *
 * Media functions are all part of the 'media' namespace.
 *
 * @public
 * @module Media
 */

/**
 * The state representation of a Media object.
 * Media is a collection of Track objects.
 *
 * @public
 * @module MediaObject
 * @property {string} id The ID of the Media object.
 * @property {boolean} local Indicator on whether this media is local or remote.
 * @property {Array<TrackObject>} tracks A list of Track objects that are contained in this Media object.
 */

/**
 * A Track is a stream of audio or video media from a single source.
 * Tracks can be retrieved using the Media module's `getTrackById` API.
 *
 * @public
 * @module TrackObject
 * @property {Array<string>} containers The list of CSS selectors that were used to render this Track.
 * @property {boolean} disabled Indicator of whether this Track is disabled or not. If disabled, it cannot be re-enabled.
 * @property {string} id The ID of the Track.
 * @property {string} kind The kind of Track this is (audio, video).
 * @property {string} label The label of the device this Track uses.
 * @property {boolean} muted Indicator on whether this Track is muted or not.
 * @property {string} state The state of this Track. Can be 'live' or 'ended'.
 * @property {string} streamId The ID of the Media object that includes this Track.
 */

// Other plugins.
function getDevices(webRTC) {
  const manager = webRTC.managers.devices;
  return manager.get();
}

/**
 * Retrieves a list of all existing Media object's IDs.
 * Use the `getMediaById` API to retrieve a specific Media object.
 * @public
 * @memberof media
 * @method getMedia
 * @return {Array} List of Media IDs.
 */
function getMedia(webRTC) {
  const manager = webRTC.managers.media;
  return manager.getAll();
}

/**
 * Retrieves a media object from state with a specific media ID.
 * @public
 * @memberof media
 * @method getMediaById
 * @param  {string} mediaId The ID of the media to retrieve.
 * @return {MediaObject} A media object.
 */
function getMediaById(webRTC, mediaId) {
  const manager = webRTC.managers.media;
  return manager.get(mediaId).getState();
}

/**
 * Retrieves a Track object from state with a specific ID.
 * @public
 * @memberof media
 * @method getTrackById
 * @param  {string} trackId The ID of the track to retrieve.
 * @return {TrackObject} A track object.
 */
function getTrackById(webRTC, trackId) {
  const manager = webRTC.managers.track;
  return manager.get(trackId);
}

/**
 * Render media Tracks in a container.
 * The container is specified by providing a CSS selector string that corresponds to the HTMLElement to act as the container.
 * @public
 * @memberof media
 * @method renderTracks
 * @param  {Array}  tracks List of Track IDs to be rendered.
 * @param  {string} cssSelector A CSS selector string that uniquely identifies an element. Ensure that special characters are properly escaped.
 * @example
 * // When a new track is available, render it in specific container.
 * remoteClient.on('track:new', function (params) {
 *     // Render the new track.
 *     remoteClient.media.renderTracks([ params.trackId ], container)
 * })
 */
function renderTracks(webRTC, trackIds, cssSelector) {
  const trackManager = webRTC.managers.track;
  const tracks = trackIds.map(trackManager.get);

  const container = document.querySelector(cssSelector);
  if (!container) {
    log.debug(`HTML container not found.`);
    return false;
  }

  tracks.forEach(track => {
    if (track) {
      track.renderIn(container);
    }
  });
}

/**
 * Remove media Tracks from a container.
 * The container is specified by providing a CSS selector string that corresponds to the HTMLElement to act as the container.
 * @public
 * @memberof media
 * @method removeTracks
 * @param  {Array}  tracks List of Track IDs to stop being rendered.
 * @param  {string} cssSelector A CSS selector string that uniquely identifies an element. Ensure that special characters are properly escaped.
 */
function removeTracks(webRTC, trackIds, cssSelector) {
  const trackManager = webRTC.managers.track;
  const tracks = trackIds.map(trackManager.get);

  const container = document.querySelector(cssSelector);
  if (!container) {
    log.debug(`HTML container not found.`);
    return false;
  }

  tracks.forEach(track => {
    if (track) {
      track.removeFrom(container);
    }
  });
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/webrtcEvents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupListeners;

var _mediaManager = __webpack_require__("../../packages/kandy/src/webrtc/channels/mediaManager.js");

var _media = __webpack_require__("../../packages/kandy/src/webrtc/channels/media.js");

var _sessionManager = __webpack_require__("../../packages/kandy/src/webrtc/channels/sessionManager.js");

var _session = __webpack_require__("../../packages/kandy/src/webrtc/channels/session.js");

var _trackManager = __webpack_require__("../../packages/kandy/src/webrtc/channels/trackManager.js");

var _track = __webpack_require__("../../packages/kandy/src/webrtc/channels/track.js");

var _devices = __webpack_require__("../../packages/kandy/src/webrtc/channels/devices.js");

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets up event listeners for webRTC events. The events are turned into
 *    actions and emitted to be handled elsewhere.
 * @method setupListeners
 * @param  {Object} webRTC The webRTC stack.
 * @param  {Function} emit Function that receives the parsed events.
 */
// Webrtc plugin.
function setupListeners(webRTC, emit) {
  // How to handle a Media Manager event.
  const mediaManagerHandler = ({ action, media }) => {
    // If it is a new Media, watch for its events.
    if (action.type === actionTypes.MEDIA_NEW) {
      // Handle session events by emiting them directly.
      (0, _media.setListeners)(media, emit);
    }

    // Dispatch the action directly.
    emit(action);
  };

  // How to handle a Session Manager event.
  const sessionManagerHandler = ({ action, session }) => {
    // If it is a new Session, watch for its events.
    if (action.type === actionTypes.SESSION_ADDED) {
      // Handle session events by emiting them directly.
      (0, _session.setListeners)(session, emit);
    }

    // Dispatch the action directly.
    emit(action);
  };

  // How to handle a Track Manager event.
  const trackManagerHandler = ({ action, track }) => {
    // If it is a new Track, watch for its events.
    if (action.type === actionTypes.TRACK_ADDED) {
      // Handle track events by emiting them directly.
      (0, _track.setListeners)(track, emit);
    }

    // Dispatch the action directly.
    emit(action);
  };

  // How to handle a Device Manager event.
  //    ...just emit them directly.
  const devicesHandler = emit;

  // Setup listeners for each Manager.
  (0, _mediaManager.setListeners)(webRTC.managers.media, mediaManagerHandler);
  (0, _sessionManager.setListeners)(webRTC.managers.sessionManager, sessionManagerHandler);
  (0, _trackManager.setListeners)(webRTC.managers.track, trackManagerHandler);
  (0, _devices.setListeners)(webRTC.managers.devices, devicesHandler);
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configuration object for a Peer.
 * @typedef {Object} PeerConfig
 * @property {Object} [rtcConfig] Configuration for the native RTCPeerConnection.
 * @property {String} [trickleIceMode=FULL] The initial mode the Peer will use when receiving ICE candidates.
 * @property {Function} [halfTrickleThreshold] Function that determines whether the threshold has been met when in HALF trickle mode.
 * @property {Number} [iceCollectionDelay=1000] The time (in ms) between ICE collection checks.
 * @property {Number} [maxIceTimeout=3000] Duration (in ms) that the Peer should wait for ICE candidate collection.
 * @property {Function} [iceCollectionCheck] The function to check whether enough ICE candidates
 *    have been collected to continue with negotiation. Must return a boolean value.
 */
exports.default = {
  rtcConfig: {
    sdpSemantics: _constants.PEER.SDP_SEMANTICS.PLAN_B
  },
  trickleIceMode: _constants.PEER.TRICKLE_ICE.FULL,
  removeBundling: true,
  halfTrickleThreshold: isPassedHalfTrickleThreshold,
  iceCollectionDelay: 1000,
  maxIceTimeout: 3000,
  iceCollectionCheck: iceCollectionCheck

  /**
   * Default function for determining whether the HALF trickle ICE threshold has
   *    been met, to start trickling ICE candidates.
   * Defines the threshold as one relay candidate being gathered.
   * @method isPassedHalfTrickleThreshold
   * @param  {String}             sdp          The local SDP of the Peer.
   * @param  {RTCIceCandidate}    iceCandidate The native candidate object that triggered this check.
   * @param  {Number}             time         The amount of time (ms) since ICE collection began.
   * @return {Boolean} Whether the "half trickle" threshold has been passed.
   */
};
function isPassedHalfTrickleThreshold({ sdp, iceCandidate, time }) {
  const passedHalf = iceCandidate.candidate.indexOf('relay') !== -1;
  _loglevel2.default.debug(`Peer's half trickle threshold ${!passedHalf ? 'not ' : ''}reached.`);
  return passedHalf;
}

/**
 * Default function to determine if the ice candidates is enough to negotiate.
 * We assume that: at least one relay candidate is good enough to try negotiation.
 * @method iceCollectionCheck
 * @param {Array<RTCIceCandidate>} iceCandidates List of collected ICE candidates.
 * @return {Boolean} Whether the ice Candidates is enough for negotiation.
 */
function iceCollectionCheck(iceCandidates) {
  return iceCandidates.some(candidate => candidate.type === 'relay');
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/icecandidate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onicecandidate;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event wrapper for `icecandidate` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate
 * @method onicecandidate
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onicecandidate(listener) {
  const { nativePeer, proxyPeer, config, iceTimer, emitter, iceCandidates } = this;

  /**
   * Intercept the PeerConnection onicecandidate event.
   * Handle the candidate as defined by the current trickle ICE mode config.
   * Trickle ICE scenarios:
   *   - FULL: Trickle.
   *   - HALF, pre-half: Wait for "half" or null candidate.
   *   - HALF, post-half: Trickle.
   *   - NONE: Wait for null candidate.
   */
  nativePeer.onicecandidate = event => {
    _loglevel2.default.debug(`ICE candidate received (trickling?: ${config.trickleIceMode === _constants.PEER.TRICKLE_ICE.FULL}): `, event.candidate);

    // Keep track of all candidates gathered by this collection process.
    if (event.candidate !== null) {
      iceCandidates.push(event.candidate);
    }

    if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.FULL) {
      // If trickling is enabled, emit an event for every ICE candidate. The
      //    Peer is already ready for negotiation at this point.
      if (event.candidate) {
        // Only trickle non-null (ie. actual) candidates.
        listener(event);
      }
    } else if (event.candidate === null) {
      // If we received the last candidate (null), then gathering is done and
      //    Peer is ready for negotiation (no matter the scenario).
      _loglevel2.default.debug('ICE collection process complete; ready for negotiation.');

      // Clear the candidate array without redefining it (it's a const).
      iceCandidates.length = 0;

      emitter.emit('onnegotiationready');
    } else if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.HALF) {
      // For half trickle, only start trickling after a certain threshold.
      //    Peer will be considered ready for negotiation after that point.
      const haveHalf = config.halfTrickleThreshold({
        sdp: proxyPeer.localDescription.sdp,
        iceCandidate: event.candidate,
        time: iceTimer.timeFromStart()
      });

      if (haveHalf) {
        _loglevel2.default.debug('Half ICE collection process complete; ready for negotiation.');
        config.trickleIceMode = _constants.PEER.TRICKLE_ICE.FULL;
        emitter.emit('onnegotiationready');
      }
    }
  };

  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/iceconnectionstatechange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = oniceconnectionstatechange;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event wrapper for `iceconnectionstatechange` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange
 * @method oniceconnectionstatechange
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function oniceconnectionstatechange(listener) {
  const { nativePeer, id } = this;

  nativePeer.oniceconnectionstatechange = function (event) {
    _loglevel2.default.debug(`Peer ${id} received iceconnectionstatechange event: ${nativePeer.iceConnectionState}`);
    listener(event);
  };

  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/icegatheringstatechange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onicegatheringstatechange;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event wrapper for `icegatheringstatechange` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicegatheringstatechange
 * @method onicegatheringstatechange
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onicegatheringstatechange(listener) {
  const { nativePeer, id, iceTimer } = this;

  /**
   * Intercept the PeerConnection onicegatheringstatechange event.
   * Time how long ICE collection takes and handles scenarios when it takes
   *    too long.
   */
  nativePeer.onicegatheringstatechange = event => {
    const gatheringState = event.target.iceGatheringState;
    _loglevel2.default.debug(`Peer ${id} iceGatheringState changed to ${gatheringState}.`);

    if (gatheringState === _constants.PEER.ICE_GATHERING_STATE.GATHERING) {
      iceTimer.start();
      // TODO: Handle "ICE collection taking too long" scenario.
    } else if (gatheringState === _constants.PEER.ICE_GATHERING_STATE.COMPLETE) {
      _loglevel2.default.debug(`Peer took ${iceTimer.timeFromStart()}ms to collect ICE candidates.`);
      iceTimer.stop();
    }
    // Bubble the event up.
    listener(event);
  };

  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icecandidate = __webpack_require__("../../packages/webrtc/src/Peer/events/icecandidate.js");

var _icecandidate2 = _interopRequireDefault(_icecandidate);

var _iceconnectionstatechange = __webpack_require__("../../packages/webrtc/src/Peer/events/iceconnectionstatechange.js");

var _iceconnectionstatechange2 = _interopRequireDefault(_iceconnectionstatechange);

var _icegatheringstatechange = __webpack_require__("../../packages/webrtc/src/Peer/events/icegatheringstatechange.js");

var _icegatheringstatechange2 = _interopRequireDefault(_icegatheringstatechange);

var _negotiationneeded = __webpack_require__("../../packages/webrtc/src/Peer/events/negotiationneeded.js");

var _negotiationneeded2 = _interopRequireDefault(_negotiationneeded);

var _signalingstatechange = __webpack_require__("../../packages/webrtc/src/Peer/events/signalingstatechange.js");

var _signalingstatechange2 = _interopRequireDefault(_signalingstatechange);

var _track = __webpack_require__("../../packages/webrtc/src/Peer/events/track.js");

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  onicecandidate: _icecandidate2.default,
  oniceconnectionstatechange: _iceconnectionstatechange2.default,
  onicegatheringstatechange: _icegatheringstatechange2.default,
  onnegotiationneeded: _negotiationneeded2.default,
  onsignalingstatechange: _signalingstatechange2.default,
  ontrack: _track2.default
};

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/negotiationneeded.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onnegotiationneeded;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event wrapper for `negotiationneeded` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded
 * @method onnegotiationneeded
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onnegotiationneeded(listener) {
  const { nativePeer, id } = this;

  nativePeer.onnegotiationneeded = function (event) {
    _loglevel2.default.debug(`Peer ${id} received negotiationneeded event.`);
    listener(event);
  };

  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/signalingstatechange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onsignalingstatechange;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event wrapper for `signalingstatechange` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onsignalingstatechange
 * @method onsignalingstatechange
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onsignalingstatechange(listener) {
  const { nativePeer, id } = this;

  nativePeer.onsignalingstatechange = function (event) {
    _loglevel2.default.debug(`Peer ${id} received signalingstatechange event: ${nativePeer.signalingState}`);
    listener(event);
  };

  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/events/track.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ontrack;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event wrapper for `track` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ontrack
 * @method ontrack
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function ontrack(listener) {
  const { nativePeer, id, trackManager } = this;

  nativePeer.ontrack = event => {
    /**
     * transceiver: The RTCRtpTransceiver for this remote track. (Available in unified-plan)
     * receiver: The RTCRtpReceiver for this remote track.
     * track: The remote MediaStreamTrack.
     * streams: Array of MediaStreams the track is in.
     */
    // event object contains transceiver which already has track attached to its receiver
    const { track: nativeTrack, streams } = event;

    // When remote side adds track on a previously unused transceiver sender via `replaceTrack`,
    //  a stream is not associated with it so we get no stream here.
    // So we create our own stream here.
    // In the future, support will be available for `sender.setStreams` on the remote side
    //  so this is a temporary workaround.
    let targetStream;
    if (streams.length === 0) {
      targetStream = new MediaStream([nativeTrack]);
    } else {
      targetStream = streams[0];
    }

    // Convert the native MediaStreamTrack into a Track object.
    const track = trackManager.add(nativeTrack, targetStream);

    _loglevel2.default.debug(`Peer ${id} received ${nativeTrack.kind} Track ${track.id}.`);
    listener(track);
  };

  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__("../../node_modules/babel-runtime/core-js/reflect/set.js");

var _set2 = _interopRequireDefault(_set);

var _keys = __webpack_require__("../../node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = peer;

var _events = __webpack_require__("../../packages/webrtc/src/Peer/events/index.js");

var _events2 = _interopRequireDefault(_events);

var _methods = __webpack_require__("../../packages/webrtc/src/Peer/methods/index.js");

var _methods2 = _interopRequireDefault(_methods);

var _properties = __webpack_require__("../../packages/webrtc/src/Peer/properties/index.js");

var _properties2 = _interopRequireDefault(_properties);

var _utils = __webpack_require__("../../packages/webrtc/src/utils.js");

var _config = __webpack_require__("../../packages/webrtc/src/Peer/config.js");

var _config2 = _interopRequireDefault(_config);

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _timerMachine = __webpack_require__("../../node_modules/timer-machine/lib/timer.js");

var _timerMachine2 = _interopRequireDefault(_timerMachine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a Proxied Peer.
 * This Peer is a native PeerConnection that has had some new functionality
 *    added and some existing functionality "augmented". Where an event, a
 *    method, or a property has been defined (see folders), we intercept/add
 *    that functionality.
 * @method peer
 * @return {Peer}
 */
/*
 * Wrapper imports.
 * Events, methods, and properties that we want to wrap/add to the native Peer.
 */
function peer(id, config = {}, trackManager) {
  config = (0, _utils.mergeValues)(_config2.default, config);

  const iceTimer = _timerMachine2.default.get(`ice-${id}`);
  const emitter = new _eventemitter2.default();

  // Create the native Peer.
  _loglevel2.default.info(`Creating peer connection with ID: ${id}.`, config);
  const nativePeer = new RTCPeerConnection(config.rtcConfig);

  // Add the event emitter methods to the wrapped methods as well.
  const customMethods = (0, _extends3.default)({}, _methods2.default, {
    on: emitter.on.bind(emitter),
    off: emitter.off.bind(emitter),
    once: emitter.once.bind(emitter)

    /**
     * The Peer model.
     * @typedef {Peer}
     * @property {RTCPeerConnection} peer     The native PeerConnection.
     * @property {string}            id       The unique identifier for the Peer.
     * @property {boolean}           dtlsRole The DTLS role selected for this PeerConnection. Set after the initial negotiation is completed.
     * @property {Object}            trackManager Manager that tracks all MediaStreamTracks.
     * @property {Object}            iceTimer Timer tool (specifically for ICE collection).
     * @property {EventEmitter}      emitter
     * @property {Array<RTCIceCandidate>} iceCandidates Gathered candidates.
     */
  });const base = {
    nativePeer,
    proxyPeer: undefined,
    id,
    dtlsRole: null,
    config,
    trackManager,
    iceTimer,
    emitter,
    iceCandidates: []

    /**
     * Create the Proxy object that will be used as the PeerConnection.
     *
     * This will intercept all `get` and `set` operations and either forward them
     *    directly to the real PeerConnection or to our wrapped operations.
     * This allows us to shim part or all of the PeerConnection's API. We can
     *    decide which operations we want to intercept while allowing others to
     *    pass through unchanged.
     */
  };base.proxyPeer = new Proxy(base, {
    /**
     * Intercept "get" calls on the Proxy.
     * This function is called anytime a property on `base` is accessed,
     *    eg. `base.someProp`
     * @param {Object} target    base
     * @param {string} prop      Property being accessed.
     * @param {Object} receiver  The Proxy object.
     */
    get: function (target, prop, receiver) {
      if (typeof base.nativePeer[prop] === 'function') {
        /*
         * If a function is being accessed, determine whether we want to
         *    return the native function or our own.
         */
        if ((0, _keys2.default)(customMethods).includes(prop)) {
          // Return our wrapped version of the original function.
          return customMethods[prop].bind(base);
        } else {
          // Return the original function, bound to have the original context.
          return base.nativePeer[prop].bind(base.nativePeer);
        }
      } else if (customMethods[prop] && typeof customMethods[prop] === 'function') {
        /*
         * If a non-native function is being accessed, return our custom method.
         * These are methods that are not on the native RTCPeerConnection
         *    object, but we added to the old Peer model.
         */
        // TODO: Move all of this functionality to a higher level of abstraction.
        return customMethods[prop].bind(base);
      } else if (_properties2.default[prop]) {
        /*
         * If a PeerConnection property is being accessed, and we have a
         *    wrapping for it, return our wrapper property.
         */
        if (typeof _properties2.default[prop] === 'function') {
          // If our property wrapper is a function, call the function and return
          //    the results.
          return _properties2.default[prop].bind(base)();
        } else {
          // Otherwise, just return the original results.
          return base.nativePeer[prop];
        }
      } else if (prop !== 'nativePeer' && base[prop]) {
        /*
         * If a Peer model property, other than the peer, is being accessed,
         *    return it. The Peer model shouldn't have any properties that the
         *    PeerConnection also has (to avoid conflicts).
         */
        return base[prop];
      } else {
        // Otherwise, return the property from the PeerConnection itself.
        return base.nativePeer[prop];
      }
    },

    /**
     * Intercept "set" calls on the Proxy.
     * This function is called anytime a property on `base` is assigned,
     *    eg. `base.someProp = value`
     * @method
     * @param  {Object} target   base
     * @param  {string} prop     Property being set.
     * @param  {Any}    value    The value being set.
     * @param  {Proxy}  receiver The Proxy object.
     * @return {boolean}         Whether the assignment succeeded or not.
     */
    set: function (target, prop, value, receiver) {
      if (_events2.default[prop]) {
        // If a value is being set on one of our "wrapped events", then call
        //    the "event function".
        return _events2.default[prop].bind(base)(value);
      } else if (prop === 'dtlsRole') {
        /**
         * Only allow the `dtlsRole` property of the Peer model be set. The
         *    Session needs to be able to get/set this property, in the case
         *    where it recreates the Peer multiple times, so it needs to set the
         *    role to something specific.
         * Reference: KAA-1816
         */
        base.dtlsRole = value;
        return true;
      } else {
        // Otherwise, try to set the value on the native Peer.
        return (0, _set2.default)(base.nativePeer, prop, value);
      }
    }
  });

  /**
   * For event debugging purposes, start with a dummy listener for every event.
   *    This ensures our Proxy is listening for the events (in the case nothing
   *    else is listening), so that debug information from the event wrappers
   *    are logged.
   */
  for (let eventName in _events2.default) {
    base.proxyPeer[eventName] = () => {};
  }

  return base.proxyPeer;
}

// Libraries.

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/addIceCandidate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = addIceCandidate;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add an ICE candidate to the connection.
 * @method addIceCandidate
 * @param  {RTCIceCandidate} candidate A native candidate object.
 * @return {Promise} Resolves when the candidate is successfully added.
 */
function addIceCandidate(candidate) {
  const { nativePeer, proxyPeer, id } = this;
  _loglevel2.default.info(`Peer ${id} adding ICE candidate.`);

  return new _promise2.default((resolve, reject) => {
    if (proxyPeer.remoteDescription.type && proxyPeer.remoteDescription.sdp) {
      nativePeer.addIceCandidate(candidate).then(resolve).catch(reject);
    } else {
      _loglevel2.default.debug(`Peer ${id} cannot set remote ICE candidate without a remote description.`);
      // TODO: Better error.
      reject(new Error(`Peer ${id} cannot set remote ICE candidate without a remote description.`));
    }
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/addTrack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addTrack;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add a Track to the connection.
 * @method addTrack
 * @param  {Track} track A Track object.
 * @return {RTCRtpSender}
 */
function addTrack(track) {
  const { nativePeer, id } = this;

  _loglevel2.default.info(`Peer ${id} adding new track.`);

  let sender;
  try {
    sender = nativePeer.addTrack(track.track, track.getStream());
  } catch (err) {
    // TODO: Better error handling.
    _loglevel2.default.debug(err.message);
  }
  // TODO: What to return here? Probably shouldn't expose the rtpSender itself.
  return sender;
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = close;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clean the Peer by closing the RTCPeerConnection.
 * @method close
 */
function close() {
  const { nativePeer, id, emitter } = this;
  _loglevel2.default.debug(`Peer ${id} closing.`);

  nativePeer.close();
  emitter.emit('peer:closed', id);
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/createAnswer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = createAnswer;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

var _pipeline = __webpack_require__("../../packages/webrtc/src/sdpUtils/pipeline.js");

var _handlers = __webpack_require__("../../packages/webrtc/src/sdpUtils/handlers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an SDP answer, given that a remote offer has been set.
 * @method createAnswer
 * @param  {RTCAnswerOptions} [options={}] Options used to customize the answer.
 * @param  {Object} [options.mediaDirections] Directions to use for media.
 * @param  {string} [options.mediaDirections.audio]
 * @param  {string} [options.mediaDirections.video]
 * @return {Promise} Resolves with the answer.
 */
function createAnswer(options = {}) {
  const { nativePeer, id, config, dtlsRole } = this;

  _loglevel2.default.info(`Peer ${id} creating local answer.`);

  // If using unified-plan, remove options.mediaDirections.
  // This is because directions are now set in transceivers.
  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    delete options.mediaDirections;
  }

  return new _promise2.default((resolve, reject) => {
    nativePeer.createAnswer(options).then(answer => {
      const sdpHandlers = [];

      /*
       * Always include the `preventDtlsRoleChange` handler. This ensures
       *    that the SDP's DTLS role does not change during a renegotiation.
       */
      sdpHandlers.push(_handlers.preventDtlsRoleChange);

      if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.NONE) {
        // Modify the answer to claim the Peer doesn't suport trickle ICE.
        sdpHandlers.push(_handlers.removeTrickleIce);
      }
      if (config.removeBundling) {
        // Modify the offer to remove media bundling
        sdpHandlers.push(_handlers.removeBundling);
      }
      if (options.mediaDirections) {
        // Modify the answer to set media directions as desired.
        sdpHandlers.push((0, _handlers.changeMediaDirection)(options.mediaDirections));
      }
      if (sdpHandlers.length > 0) {
        // Run the SDP pipeline with only these handlers.
        answer.sdp = (0, _pipeline.runPipeline)(sdpHandlers, answer.sdp, {
          type: answer.type,
          endpoint: _constants.PEER.ENDPOINT.LOCAL,
          dtlsRole: dtlsRole
        });
      }
      resolve(answer);
    }).catch(reject);
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/createOffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = createOffer;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

var _pipeline = __webpack_require__("../../packages/webrtc/src/sdpUtils/pipeline.js");

var _handlers = __webpack_require__("../../packages/webrtc/src/sdpUtils/handlers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an SDP offer.
 * @method createOffer
 * @param  {RTCOfferOptions} [options={}] Options used to customize the offer.
 * @param  {Object} [options.mediaDirections] Directions to use for media.
 * @param  {string} [options.mediaDirections.audio]
 * @param  {string} [options.mediaDirections.video]
 * @return {Promise} Resolves with the offer.
 */
function createOffer(options = {}) {
  const { nativePeer, id, config } = this;

  _loglevel2.default.info(`Peer ${id} creating local offer.`);

  // If using unified-plan, remove options.mediaDirections.
  // This is because directions are now set in transceivers.
  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    delete options.mediaDirections;
  }

  return new _promise2.default((resolve, reject) => {
    nativePeer.createOffer(options).then(offer => {
      const sdpHandlers = [];
      if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.NONE) {
        // Modify the offer to claim the Peer doesn't suport trickle ICE.
        sdpHandlers.push(_handlers.removeTrickleIce);
      }
      if (config.removeBundling) {
        // Modify the offer to remove media bundling
        sdpHandlers.push(_handlers.removeBundling);
      }
      if (options.mediaDirections) {
        // Modify the offer to set media directions as desired.
        sdpHandlers.push((0, _handlers.changeMediaDirection)(options.mediaDirections));
      }
      if (sdpHandlers.length > 0) {
        // Run the SDP pipeline with only these handlers.
        offer.sdp = (0, _pipeline.runPipeline)(sdpHandlers, offer.sdp, {
          type: offer.type,
          endpoint: _constants.PEER.ENDPOINT.LOCAL
        });
      }
      resolve(offer);
    }).catch(reject);
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/findReusableTransceiver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findReusableTransceiver;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Finds a transceiver that can be reused.
 * A transceiver can be reused if it satisfies the following conditions:
 *   - it does not have a track on its sender
 *   - it has the same kind (audio or video) as what we specified
 *   - it has been used before (if it has not been used then we are not "reusing" it)
 * @method findReusableTransceiver
 * @param {string} kind The kind of transceiver to find (audio or video)
 * @returns {Object} Transceiver object that matches kind, has no sender track, and has currentDirection. Otherwise undefined.
 */
function findReusableTransceiver(kind) {
  const { proxyPeer, config, id } = this;
  _loglevel2.default.info(`Peer ${id} finding reusable transceiver.`);

  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    const transceivers = proxyPeer.getTransceivers();
    return transceivers.find(transceiver => transceiver.sender.track == null && transceiver.receiver && transceiver.receiver.track && transceiver.receiver.track.kind === kind && transceiver.currentDirection // If this has been set, then transceiver has been used before.
    );
  } else {
    _loglevel2.default.info(`Transceivers are only available in unified-plan.`);
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/getState.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getState;
/**
 * Retrieve a snapshot of the Peer object's current state.
 * @method getState
 * @return {Object}
 */
function getState() {
  const { proxyPeer, config, id } = this;

  return {
    id,
    config: config,
    localDesc: proxyPeer.localDescription,
    signalingState: proxyPeer.signalingState,
    localTracks: proxyPeer.localTracks,
    remoteTracks: proxyPeer.remoteTracks,
    senderTracks: proxyPeer.senderTracks
  };
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/getStats.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = getStats;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve RTCStatsReport for a sender or the peerConnection.
 * @method getStats
 * @param {string} [TrackId] Return stats for peerConnection if trackId is not provided
 * @return {Promise} Resolves with the RTCStatsReport
 */
function getStats(trackId) {
  const { nativePeer, proxyPeer, id } = this;
  _loglevel2.default.info(`Peer ${id} getting stats ${trackId ? 'for track.' : '.'}`);
  // If no trackId is supplied, get the stats from the RTCPeerConnection. Otherwise, find an RTCSender
  // associated with the trackId and get the stats from it.

  // Use the trackId if it was provided
  if (trackId) {
    return new _promise2.default((resolve, reject) => {
      const senders = proxyPeer.getSenders();
      // search for a sender associated with the trackId
      const sender = senders.find(sender => sender.track.id === trackId);
      if (sender) {
        sender.getStats().then(resolve).catch(reject);
      } else {
        const errMsg = `Cannot find sender with trackId: ${trackId}`;
        _loglevel2.default.debug(errMsg);
        reject(new Error(errMsg));
      }
    });
  } else {
    // get the stats associated with the peerConnection if no trackId is supplied
    return nativePeer.getStats();
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addIceCandidate = __webpack_require__("../../packages/webrtc/src/Peer/methods/addIceCandidate.js");

var _addIceCandidate2 = _interopRequireDefault(_addIceCandidate);

var _addTrack = __webpack_require__("../../packages/webrtc/src/Peer/methods/addTrack.js");

var _addTrack2 = _interopRequireDefault(_addTrack);

var _close = __webpack_require__("../../packages/webrtc/src/Peer/methods/close.js");

var _close2 = _interopRequireDefault(_close);

var _createAnswer = __webpack_require__("../../packages/webrtc/src/Peer/methods/createAnswer.js");

var _createAnswer2 = _interopRequireDefault(_createAnswer);

var _createOffer = __webpack_require__("../../packages/webrtc/src/Peer/methods/createOffer.js");

var _createOffer2 = _interopRequireDefault(_createOffer);

var _findReusableTransceiver = __webpack_require__("../../packages/webrtc/src/Peer/methods/findReusableTransceiver.js");

var _findReusableTransceiver2 = _interopRequireDefault(_findReusableTransceiver);

var _getState = __webpack_require__("../../packages/webrtc/src/Peer/methods/getState.js");

var _getState2 = _interopRequireDefault(_getState);

var _getStats = __webpack_require__("../../packages/webrtc/src/Peer/methods/getStats.js");

var _getStats2 = _interopRequireDefault(_getStats);

var _removeTrack = __webpack_require__("../../packages/webrtc/src/Peer/methods/removeTrack.js");

var _removeTrack2 = _interopRequireDefault(_removeTrack);

var _replaceTrack = __webpack_require__("../../packages/webrtc/src/Peer/methods/replaceTrack.js");

var _replaceTrack2 = _interopRequireDefault(_replaceTrack);

var _sendDTMF = __webpack_require__("../../packages/webrtc/src/Peer/methods/sendDTMF.js");

var _sendDTMF2 = _interopRequireDefault(_sendDTMF);

var _setLocalDescription = __webpack_require__("../../packages/webrtc/src/Peer/methods/setLocalDescription.js");

var _setLocalDescription2 = _interopRequireDefault(_setLocalDescription);

var _setRemoteDescription = __webpack_require__("../../packages/webrtc/src/Peer/methods/setRemoteDescription.js");

var _setRemoteDescription2 = _interopRequireDefault(_setRemoteDescription);

var _setTransceiversDirection = __webpack_require__("../../packages/webrtc/src/Peer/methods/setTransceiversDirection.js");

var _setTransceiversDirection2 = _interopRequireDefault(_setTransceiversDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const methods = {
  addIceCandidate: _addIceCandidate2.default,
  addTrack: _addTrack2.default,
  close: _close2.default,
  createAnswer: _createAnswer2.default,
  createOffer: _createOffer2.default,
  findReusableTransceiver: _findReusableTransceiver2.default,
  getState: _getState2.default,
  getStats: _getStats2.default,
  removeTrack: _removeTrack2.default,
  replaceTrack: _replaceTrack2.default,
  sendDTMF: _sendDTMF2.default,
  setLocalDescription: _setLocalDescription2.default,
  setRemoteDescription: _setRemoteDescription2.default,
  setTransceiversDirection: _setTransceiversDirection2.default
};

exports.default = methods;

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/removeTrack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTrack;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove a Track from the connection.
 * @method removeTrack
 * @param  {string} trackId An id for a Track object.
 */
function removeTrack(trackId) {
  const { nativePeer, proxyPeer, id } = this;
  _loglevel2.default.info(`Peer ${id} removing track ${trackId}.`);

  const track = proxyPeer.senderTracks.find(track => track.id === trackId);
  if (!track) {
    _loglevel2.default.debug(`Invalid track ID ${trackId}; cannot remove track.`);
    return;
  } else if (proxyPeer.signalingState === ' closed') {
    _loglevel2.default.debug(`Peer ${id} is closed; cannot remove track.`);
    return;
  }

  // Get the RtpSender for the Track we want to remove.
  const sender = proxyPeer.getSenders().filter(sender => sender.track !== null).find(sender => sender.track.id === trackId);
  nativePeer.removeTrack(sender);
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/replaceTrack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = replaceTrack;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replaces a specified transceiver's sender.track.
 * @method replaceTrack
 * @param {Object} newTrack The MediaStreamTrack we want to place into the sender.
 * @param {Object} options Options for specifying which transceiver's sender should be replaced. They are ordered by priority.
 * @param {Array} [options.trackId] The track id whose transceivers we want to set the direction of.
 * @return {Object} A Promise object which is fulfilled once the track has been replaced
 */
function replaceTrack(newTrack, options) {
  const { proxyPeer, id, config } = this;
  _loglevel2.default.info(`Peer ${id} replacing track ${options.trackId}.`);

  return new _promise2.default((resolve, reject) => {
    let sender;
    if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
      // Find the transceiver related to the provided track ID.
      const targetTransceiver = proxyPeer.getTransceivers().find(transceiver => transceiver.sender.track && transceiver.sender.track.id === options.trackId);

      sender = targetTransceiver ? targetTransceiver.sender : undefined;
    } else {
      sender = proxyPeer.getSenders().find(sender => sender.track.id === options.trackId);
    }

    if (sender) {
      sender.replaceTrack(newTrack).then(resolve).catch(reject);
    } else {
      reject(new Error(`Sender for track ${options.trackId} not found.`));
    }
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/sendDTMF.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendDTMF;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Send DTMF tones.
 * @method sendDTMF
 * @param {Object} DTMFOptions The DTMF options.
 * @param {string} DTMFOptions.tone DTMF tone to send. Valid values are [0,1,2,3,4,5,6,7,8,9,#].
 * @param {number} DTMFOptions.duration=100 The amount of time, in milliseconds, that each DTMF tone should last.
 * @param {number} DTMFOptions.intertoneGap=70 The length of time, in milliseconds, to wait between tones.
 * @param {Object} [sendOptions] The send options.
 * @param {func} [sendOptions.callback] Optional callback for tone event .
 * @param {string} [sendOptions.trackId] The trackId of the sender to use.
 * @return {Boolean} Whether the DTMF tones were inserted
 */
function sendDTMF({ tone, duration = 100, intertoneGap = 70 }, { callback, trackId }) {
  const { proxyPeer, id } = this;
  _loglevel2.default.info(`Peer ${id} sending DTMF tones.`);

  if (!proxyPeer.getSenders) {
    _loglevel2.default.debug('RTCPeerConnection method getSenders() is required which is not support by this browser.');
    return false;
  }
  const senders = proxyPeer.getSenders();
  // Use the trackId if it was provided
  if (trackId) {
    let sender = senders.find(sender => sender.track.id === trackId);
    if (!sender) {
      _loglevel2.default.debug('No sender with that trackId');
      return false;
    }
    insertDTMF(sender, tone, duration, intertoneGap, callback);
    return true;
  } else {
    let result;
    for (let i = 0; i < senders.length; i++) {
      result = insertDTMF(senders[i], tone, duration, intertoneGap, callback);
      if (result) {
        return true;
      }
    }
    _loglevel2.default.debug('No appropriate senders were found');
    return false;
  }
}

/**
 * Event handler when tone is played.
 * @private
 * @method handleToneChangeEvent
 * @param  {event} event
 */
function handleToneChangeEvent(event) {
  if (event.tone !== '') {
    _loglevel2.default.debug('Tone played: ' + event.tone);
  } else {
    _loglevel2.default.debug('All tones have played.');
  }
}

/**
 * Helper function to sendDTMF tones .
 * @private
 * @method insertDTMF
 * @param {sender} object
 * @param {string} tone
 * @param {number} duration
 * @param {number} intertoneGap
 * @param {Function} callback
 */
function insertDTMF(sender, tone, duration, intertoneGap, callback) {
  if (sender.dtmf) {
    const dtmfSender = sender.dtmf;
    if (callback) {
      dtmfSender.ontonechange = callback;
    } else {
      dtmfSender.ontonechange = handleToneChangeEvent;
    }
    try {
      dtmfSender.insertDTMF(tone, duration, intertoneGap);
      return true;
    } catch (err) {
      _loglevel2.default.debug(err.message);
      return false;
    }
  } else {
    _loglevel2.default.debug('The sender requires DTMF which is not support by this browser.');
    return false;
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/setLocalDescription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = setLocalDescription;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _iceCollectionLoop = __webpack_require__("../../packages/webrtc/src/Peer/utils/iceCollectionLoop.js");

var _iceCollectionLoop2 = _interopRequireDefault(_iceCollectionLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets an SDP as the local description of the connection.
 * The returned Promise will resolve when the Peer is ready for negotiation,
 *    taking into account the Peer's `trickleIceMode` configuration.
 * @method setLocalDescription
 * @param  {RTCSessionDescription} sessionDesc
 * @return {Promise}
 */
function setLocalDescription(desc) {
  const { nativePeer, proxyPeer, config, id, emitter, iceTimer } = this;

  // TODO: SDP pipeline here.
  _loglevel2.default.debug(`Peer ${id} setting local description ${desc.type}:`, desc.sdp);

  /**
   * Scenario: A local answer SDP is being applied to the Peer, but it does
   *    not have a selected DTLS role yet. This should occur during initial
   *    negotiation, before responding with this Peer's answer.
   * Set the local Peer's DTLS role depending on what role was generated. This
   *    role will be kept throughout all renegotiations.
   */
  if (!this.dtlsRole && desc.type === 'answer') {
    const dtlsMatch = desc.sdp.match(/a=setup:(\w*?)[\r\n]/);
    if (dtlsMatch) {
      _loglevel2.default.debug(`Peer ${id} selecting DTLS role ${dtlsMatch[1]}.`);
      this.dtlsRole = dtlsMatch[1];
    }
  }

  return new _promise2.default((resolve, reject) => {
    // We always want to wait for the PeerConnection to be ready for
    //    negotiation before resolving setLocalDescription.
    // Each trickle ICE option (FULL/HALF/NONE) emits "negotiation ready" event once.
    emitter.once('onnegotiationready', () => {
      if (iceTimer.isStarted()) {
        // In a HALF trickle scenario, the Peer will be ready for negotiation
        //    before ICE collection has completed. Log that timing.
        _loglevel2.default.debug(`Peer ${id} took ${iceTimer.timeFromStart()}ms to collect ICE candidates before negotiation.`);
      }
      resolve();
    });

    nativePeer.setLocalDescription(desc).then(() => {
      _loglevel2.default.info(`Peer ${id} set local description.`);
      _loglevel2.default.debug(`Peer ${id} state is now ${proxyPeer.signalingState}.`);

      if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.FULL) {
        // Trickling ICE candidates means that we can begin negotiation immediately.
        _loglevel2.default.debug(`Peer ${id} ready for negotiation (full trickleICE).`);
        emitter.emit('onnegotiationready');
      } else {
        // ICE candidates aren't always gathered (only initially and when something
        //    changes), but we rely on "gathering complete" to know when the Peer is
        //    ready for negotiation. Give the Peer some time to start gathering
        //    before deciding if we need to wait for gathering to complete or not.
        // The timeout is needed because of a bug in Chrome:
        //    https://bugs.chromium.org/p/webrtc/issues/detail?id=1873
        // Known issue: If candidate collection takes less time than this timeout,
        //    the logged message will be incorrect, but will functionally still work.
        setTimeout(() => {
          if (proxyPeer.iceGatheringState === 'complete') {
            // Gathering is "complete", so we are ready for negotiation.
            _loglevel2.default.debug(`Peer ${id} ready for negotiation; ICE candidate collection not needed.`);
            emitter.emit('onnegotiationready');
          } else {
            _loglevel2.default.debug(`Peer ${id} waiting for ICE collection process (${config.trickleIceMode}).`);
            // If ICE collection never finishes, we need to time it out at some point.
            //    Start the timeout-out loop after an initial delay.
            setTimeout(() => {
              (0, _iceCollectionLoop2.default)(this, config.iceCollectionDelay);
            }, config.iceCollectionDelay);
          }
        }, 25);
      }
    }).catch(err => {
      _loglevel2.default.info(`Peer ${id} failed to set local description.`);
      _loglevel2.default.debug(`Peer ${id}: ${err}`);
      // Parse native error. Make it more understand and/or
      //    provide a better log about what went wrong.
      reject(err);
    });
  });
}

// Utils.

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/setRemoteDescription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = setRemoteDescription;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets an SDP as the remote description of the connection.
 * @method setRemoteDescription
 * @param  {RTCSessionDescription} sessionDesc
 */
function setRemoteDescription(desc) {
  const { nativePeer, proxyPeer, id } = this;

  /**
   * Scenario: A remote answer SDP is being applied to the Peer, but it does
   *    not have a selected DTLS role yet. This should occur only when the
   *    initial negotiation is being completed.
   * Set the local Peer's DTLS role depending on what the remote Peer
   *    selected. This role will be kept throughout all renegotiations.
   */
  if (!this.dtlsRole && desc.type === 'answer') {
    const dtlsMatch = desc.sdp.match(/a=setup:(\w*?)[\r\n]/);
    if (dtlsMatch) {
      const localRole = dtlsMatch[1] === 'active' ? 'passive' : 'active';
      _loglevel2.default.debug(`Peer ${id} selecting DTLS role ${localRole}. Remote Peer selected ${dtlsMatch[1]} DTLS role.`);
      this.dtlsRole = localRole;
    }
  }

  // TODO: Update `config.trickleIceMode` to either NONE or FULL (from HALF)
  //    depending on remote support, since HALF is only needed for initial.
  return new _promise2.default((resolve, reject) => {
    _loglevel2.default.debug(`Peer ${id} setting remote description ${desc.type}:`, desc.sdp);
    nativePeer.setRemoteDescription(desc).then(() => {
      _loglevel2.default.info(`Peer ${id} set remote description.`);
      _loglevel2.default.debug(`Peer ${id} state is now ${proxyPeer.signalingState}.`);
      resolve();
    }).catch(err => {
      _loglevel2.default.info(`Peer ${id} failed to set remote description.`);
      _loglevel2.default.debug(`Peer ${id}: ${err}`);
      // Parse native error. Make it more understand and/or
      //    provide a better log about what went wrong.
      reject(err);
    });
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/methods/setTransceiversDirection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTransceiversDirection;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

var _transceiverUtils = __webpack_require__("../../packages/webrtc/src/sdpUtils/transceiverUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the direction of transceivers.
 * @method setTransceiversDirection
 * @param {string} targetDirection The desired direction to set the transceivers to.
 * @param {Object} [options] Options for specifying which transceivers should be affected. They are ordered by priority.
 * @param {Array} [options.trackIds] The optional list of track ids whose transceivers we want to set the direction of.
 * @return {Object} An object containing an `error` flag and  an array `failures` of transceivers whose directions weren't changed.
 */
function setTransceiversDirection(targetDirection, options = {}) {
  const { proxyPeer, config, id } = this;
  _loglevel2.default.info(`Peer ${id} setting transceiver direction to ${targetDirection}.`);

  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    let transceivers = proxyPeer.getTransceivers();

    if (options.trackIds) {
      transceivers = transceivers.filter(transceiver => options.trackIds.includes(transceiver.sender.track.id));
    }

    const failures = [];
    transceivers.forEach(transceiver => {
      if (!(0, _transceiverUtils.setTransceiverDirection)(transceiver, targetDirection)) {
        failures.push(transceiver);
      }
    });
    return {
      error: failures.length !== 0,
      failures
    };
  } else {
    _loglevel2.default.info(`Transceiver direction modification is only available in unified-plan.`);
    return {
      error: true
    };
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localDescription = __webpack_require__("../../packages/webrtc/src/Peer/properties/localDescription.js");

var _localDescription2 = _interopRequireDefault(_localDescription);

var _localTracks = __webpack_require__("../../packages/webrtc/src/Peer/properties/localTracks.js");

var _localTracks2 = _interopRequireDefault(_localTracks);

var _remoteDescription = __webpack_require__("../../packages/webrtc/src/Peer/properties/remoteDescription.js");

var _remoteDescription2 = _interopRequireDefault(_remoteDescription);

var _remoteTracks = __webpack_require__("../../packages/webrtc/src/Peer/properties/remoteTracks.js");

var _remoteTracks2 = _interopRequireDefault(_remoteTracks);

var _senderTracks = __webpack_require__("../../packages/webrtc/src/Peer/properties/senderTracks.js");

var _senderTracks2 = _interopRequireDefault(_senderTracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { localDescription: _localDescription2.default, localTracks: _localTracks2.default, remoteDescription: _remoteDescription2.default, remoteTracks: _remoteTracks2.default, senderTracks: _senderTracks2.default };

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/localDescription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocalDescription;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The SDP for the local end of the connection.
 * @method getLocalDescription
 */
function getLocalDescription() {
  const { nativePeer, id } = this;
  _loglevel2.default.debug(`Peer ${id} getting local description.`);

  const localDesc = nativePeer.localDescription;
  /*
   * Ensure it is a RTCSessionDescription object.
   * In some scenarios (based on browser?), it may return an empty object
   *    instead of undefined when there is no local description.
   * TODO: Determine if this is still needed, or if we can use the native
   *    property directly.
   */
  if (localDesc && localDesc.sdp && localDesc.type) {
    return localDesc;
  } else {
    return undefined;
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/localTracks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localTracks;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method getLocalTracks
 * @return {Array} List of active Track objects added to the Peer locally.
 */
function localTracks() {
  const { proxyPeer, id, trackManager } = this;
  _loglevel2.default.info(`Peer ${id} getting local tracks.`);

  // Return the list of Tracks from active senders.
  return proxyPeer.getSenders()
  /**
   * Remove any Senders that do not have an associated track.
   * We only want to retrieve Senders that do have tracks, because those are
   *    the local tracks that have been added to the Peer.
   * Senders without tracks are part of a Transceiver where the Receiver has
   *    a remote track, but no local track has been added to it. We don't
   *    care about this for the "get local tracks" operation.
   */
  .filter(sender => Boolean(sender.track)).map(sender => trackManager.get(sender.track.id)).filter(track => {
    // Make sure the trackManager has the track and that its active.
    // It's possble that Peer has the sender but not the actual track yet.
    return track && track.getState().state === 'live' && track.getStream().active;
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/remoteDescription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRemoteDescription;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The SDP for the remote end of the connection.
 * @method getRemoteDescription
 */
function getRemoteDescription() {
  const { nativePeer, id } = this;
  _loglevel2.default.debug(`Peer ${id} getting remote description.`);

  const remoteDesc = nativePeer.remoteDescription;
  /*
   * Ensure it is a RTCSessionDescription object.
   * In some scenarios (based on browser?), it may return an empty object
   *    instead of undefined when there is no local description.
   * TODO: Determine if this is still needed, or if we can use the native
   *    property directly.
   */
  if (remoteDesc && remoteDesc.sdp && remoteDesc.type) {
    return remoteDesc;
  } else {
    return undefined;
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/remoteTracks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRemoteTracks;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method getRemoteTracks
 * @return {Array} List of active Track objects the Peer has received remotely.
 */
function getRemoteTracks() {
  const { proxyPeer, id, trackManager } = this;
  _loglevel2.default.info(`Peer ${id} getting remote tracks.`);

  // Return the list of Tracks from active receivers.
  return proxyPeer.getReceivers()
  /**
   * Remove any Receivers that do not have an associated track.
   * We only want to retrieve Receivers that do have tracks, because those are
   *    the remote tracks that have been added to the Peer.
   * Receivers without tracks are part of a Transceiver where the Sender has
   *    a local track, but no remote track has been added to it. We don't
   *    care about this for the "get remote tracks" operation.
   */
  .filter(receiver => Boolean(receiver.track)).map(receiver => trackManager.get(receiver.track.id)).filter(track => {
    // Make sure the trackManager has the track and that its active.
    // It's possble that Peer has the receiver but not the actual track yet.
    return track && track.getState().state === 'live' && track.getStream().active;
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/senderTracks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = senderTracks;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is similar to the `localTracks` method, however this method returns
 *  all of the sender's tracks (ended or not) rather than just the active/live ones.
 *
 * @method senderTracks
 * @return {Array} List of Track objects added to the Peer locally.
 */
function senderTracks() {
  const { proxyPeer, id } = this;
  _loglevel2.default.info(`Peer ${id} getting sender tracks.`);

  // Return the list of Tracks from senders.
  return proxyPeer.getSenders()
  /**
   * Remove any Senders that do not have an associated track.
   * We only want to retrieve Senders that do have tracks, because those are
   *    the local tracks that have been added to the Peer.
   * Senders without tracks are part of a Transceiver where the Receiver has
   *    a remote track, but no local track has been added to it. We don't
   *    care about this for the "get local tracks" operation.
   */
  .filter(sender => Boolean(sender.track)).map(sender => sender.track);
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/utils/iceCollectionLoop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iceCollectionLoop;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursive function for checking whether the ICE collection process should
 *    be timed-out.
 *
 * If the ICE collection process does not complete normally (or is just taking
 *    too long), there are two conditions where we want to timeout:
 *      1. ICE candidates collected so far are "good enough".
 *      2. We have reached the "max timeout".
 *
 * This function checks for these conditions at a configured interval. If either
 *    are met, "manually" triggers the "ready for negotiation" event.
 * @method iceCollectionLoop
 * @param {Object} proxyBase The "base" of the Proxy Peer object.
 * @param {number} elapsedTime The time, in milliseconds, that ICE collection has taken so far.
 */
function iceCollectionLoop(proxyBase, elapsedTime) {
  const { proxyPeer, iceCandidates, emitter, config } = proxyBase;

  // If gathering completed during the delay, we don't need to loop anymore.
  if (proxyPeer.iceGatheringState === 'complete') {
    _loglevel2.default.debug('ICE collection completed; stopping candidate check loop.');
    // Gathering completes when the null candidate is received. The "on
    //    negotiation ready" event should be emitted at that time.

    // Clear the candidate array without redefining it (it's a const).
    iceCandidates.length = 0;
    return;
  }

  const enoughCandidates = config.iceCollectionCheck(iceCandidates);
  const hasReachedTimeout = elapsedTime >= config.maxIceTimeout;

  if (hasReachedTimeout) {
    _loglevel2.default.debug('ICE collection timeout reached; continuing with negotiation.');
    iceCandidates.length = 0;
    emitter.emit('onnegotiationready');
  } else if (enoughCandidates) {
    _loglevel2.default.debug('ICE candidates sufficient for negotiation; continuing.');
    iceCandidates.length = 0;
    emitter.emit('onnegotiationready');
  } else {
    _loglevel2.default.debug(`ICE candidates not sufficient for negotiation, delaying another ${config.iceCollectionDelay}ms.`);
    setTimeout(function () {
      iceCollectionLoop(proxyBase, elapsedTime + config.iceCollectionDelay);
    }, config.iceCollectionDelay);
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Constants relating to the Peer model.
 */
const PEER = exports.PEER = {
  TRICKLE_ICE: {
    FULL: 'FULL',
    HALF: 'HALF',
    NONE: 'NONE'
  },
  // Defined by the RTCPeerConnection.iceGatheringState spec.
  ICE_GATHERING_STATE: {
    NEW: 'new',
    GATHERING: 'gathering',
    COMPLETE: 'complete'
  },
  ENDPOINT: {
    LOCAL: 'local',
    REMOTE: 'remote'
  },
  SDP_SEMANTICS: {
    PLAN_B: 'plan-b',
    UNIFIED_PLAN: 'unified-plan'
  }

  /**
   * SDP constants for media direction.
   * @type {Object}
   */
};const MEDIA_DIR = exports.MEDIA_DIR = {
  INACTIVE: 'inactive',
  SEND_ONLY: 'sendonly',
  RECV_ONLY: 'recvonly',
  SEND_RECV: 'sendrecv'
};

/***/ }),

/***/ "../../packages/webrtc/src/interface/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _track = __webpack_require__("../../packages/webrtc/src/models/track.js");

var _track2 = _interopRequireDefault(_track);

var _media = __webpack_require__("../../packages/webrtc/src/models/media.js");

var _media2 = _interopRequireDefault(_media);

var _Peer = __webpack_require__("../../packages/webrtc/src/Peer/index.js");

var _Peer2 = _interopRequireDefault(_Peer);

var _mediaManager = __webpack_require__("../../packages/webrtc/src/managers/mediaManager.js");

var _mediaManager2 = _interopRequireDefault(_mediaManager);

var _peerManager = __webpack_require__("../../packages/webrtc/src/managers/peerManager.js");

var _peerManager2 = _interopRequireDefault(_peerManager);

var _sessionManager = __webpack_require__("../../packages/webrtc/src/managers/sessionManager.js");

var _sessionManager2 = _interopRequireDefault(_sessionManager);

var _deviceManager = __webpack_require__("../../packages/webrtc/src/managers/deviceManager.js");

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _trackManager = __webpack_require__("../../packages/webrtc/src/managers/trackManager.js");

var _trackManager2 = _interopRequireDefault(_trackManager);

var _pipeline = __webpack_require__("../../packages/webrtc/src/sdpUtils/pipeline.js");

var _pipeline2 = _interopRequireDefault(_pipeline);

var _handlers = __webpack_require__("../../packages/webrtc/src/sdpUtils/handlers.js");

var sdpHandlers = _interopRequireWildcard(_handlers);

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _adapter_no_edge = __webpack_require__("../../node_modules/webrtc-adapter/out/adapter_no_edge.js");

var _adapter_no_edge2 = _interopRequireDefault(_adapter_no_edge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SDP helpers.
// Models.
function initialize() {
  const browserDetails = _adapter_no_edge2.default.browserDetails;
  if (browserDetails.version) {
    _loglevel2.default.debug(`Browser details: ${browserDetails.browser}, version ${browserDetails.version}.`);
  } else {
    _loglevel2.default.debug('Browser details: Not supported by webRTC adapter.');
  }

  const deviceManager = new _deviceManager2.default();
  const trackManager = new _trackManager2.default();
  const mediaManager = new _mediaManager2.default({ trackManager });
  const peerManager = new _peerManager2.default({ trackManager });
  const sessionManager = new _sessionManager2.default({
    peerManager,
    mediaManager,
    trackManager
  });

  return {
    models: {
      Track: _track2.default,
      Media: _media2.default,
      Peer: _Peer2.default
    },
    // TODO: Make naming consistent.
    managers: {
      devices: deviceManager,
      media: mediaManager,
      peerManager: peerManager,
      sessionManager,
      track: trackManager
    },
    sdp: {
      pipeline: _pipeline2.default,
      handlers: sdpHandlers
    },
    getBrowserDetails: () => {
      return browserDetails;
    }
  };
}

// Managers.

/***/ }),

/***/ "../../packages/webrtc/src/managers/deviceManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEBRTC_DEVICE_KINDS = undefined;

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = DeviceManager;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * A conversion from MediaDeviceInfo.kind values to their more common terms.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/kind
 * @enum {String}
 */
// Libraries.
const WEBRTC_DEVICE_KINDS = exports.WEBRTC_DEVICE_KINDS = {
  audioinput: 'microphone',
  videoinput: 'camera',
  audiooutput: 'speaker'

  /**
   * Manager for connected devices.
   * Keeps an up-to-date list of all devices.
   * @class DeviceManager
   */
};function DeviceManager() {
  // Internal variables.
  const emitter = new _eventemitter2.default();
  // Store each device type separately, so that `deviceId` is unique
  //    per kind (there is a `default` deviceId per kind).
  let microphone = [];
  let camera = [];
  let speaker = [];

  // Check devices on initialization.
  checkDevices().then(() => {
    // Emit an initial event to notify that devices are available.
    emitter.emit('change');
  });

  // Check devices whenever they change.
  let recentDeviceChange = false;
  navigator.mediaDevices.addEventListener('devicechange', () => {
    _loglevel2.default.info('Media device change detected.');
    // A physical device change results in one event per
    // device "kind". Group the events together.
    if (!recentDeviceChange) {
      recentDeviceChange = true;
      setTimeout(() => {
        recentDeviceChange = false;
        checkDevices().then(() => {
          // Emit an event to notify of the change.
          emitter.emit('change');
        });
      }, 50);
    }
  });

  /**
   * Updates the stored device lists with the latest devices.
   * @method checkDevices
   * @return {Promise}
   */
  function checkDevices() {
    _loglevel2.default.info('Checking media devices.');
    return new _promise2.default((resolve, reject) => {
      navigator.mediaDevices.enumerateDevices().then(devices => {
        // Clear the stored devices, to prevent duplicates.
        microphone = [];
        camera = [];
        speaker = [];
        devices.forEach(device => {
          const kind = WEBRTC_DEVICE_KINDS[device.kind];
          switch (kind) {
            case 'microphone':
              microphone.push(device);
              break;
            case 'camera':
              camera.push(device);
              break;
            case 'speaker':
              speaker.push(device);
              break;
          }
        });
        resolve(get());
      }).catch(reject);
    });
  }

  /**
   * Retrieves the stored device lists.
   * @method get
   * @return {Object}
   */
  function get() {
    return {
      microphone,
      camera,
      speaker
    };
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    checkDevices,
    get,
    on,
    once,
    off
  };
}

/***/ }),

/***/ "../../packages/webrtc/src/managers/mediaManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _map = __webpack_require__("../../node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = MediaManager;

var _media = __webpack_require__("../../packages/webrtc/src/models/media.js");

var _media2 = _interopRequireDefault(_media);

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager for Media objects.
 * Allows the creation and retrieval of media objects.
 * @class MediaManager
 */


// Libraries.
function MediaManager(managers) {
  // Internal variables.
  const trackManager = managers.trackManager;
  const medias = new _map2.default();
  const emitter = new _eventemitter2.default();

  /**
   * Retrieve a snapshot of all Media objects' current state.
   * @method getState
   * @return {Array}
   */
  function getState() {
    return getAll().map(id => get(id).getState());
  }

  /**
   * Workaround to get Firefox to behave similarly to Chrome regarding device permission prompts.
   * @method browserContraintsWorkaround
   * @param  {MediaStreamConstraints}  constraints
   * @return {Object}  media contraints
   */

  function browserContraintsWorkaround(constraints) {
    /**
     * Firefox workaround.
     *
     * Issue Summary: Browser behaviour for prompting the user for device
     *    permissions is not consistent for consecutive gUM calls. The following
     *    workaround makes it consistent if the less-specific constraint is
     *    provided.
     *
     * Context: The `deviceId` constraint format can be either a string or an
     *    object. The object format allows precise control over how the browser
     *    should try to get the track. It can be specified to fail if it can't
     *    fulfill the constraint (exact), or whether the constraint is "best
     *    effort" (ideal). When the string format is given, it follows the
     *    "ideal" behaviour.
     * See: https://developer.mozilla.org/en-US/docs/Web/API/ConstrainDOMString
     *
     *  - When the "ideal" behaviour is followed and the user has not given
     *      permission (and not disallowed), the browswer will prompt the user
     *      for permission.
     *  - [Issue] When the "ideal" behaviour is followed and the user has given
     *      permission previously, the browser will not prompt the user for
     *      permission.
     *
     * Problem: When gUM is called for a different device (ideal behaviour) than
     *    permission was granted for previously, the browser will not prompt the
     *    user to give permission for the (new) device. This results in gUM
     *    using the original device for the new track.
     *
     * This happens on Firefox because the prompt for media permissions is
     *    specific to a single device. For Chrome, the prompt is generic to any
     *    device.
     * If permissions are always allowed ("remember my decision" on Firefox or
     *    default on Chrome), this issue wouldn't be seen.
     *
     * Workaround: When the behaviour (idea / exact) isn't specified, default
     *    to exact (instead of letting the browser default to ideal; as per the
     *    specification).
     *
     * This ensures that the browser always prompts the user to give permissions
     *    for the device (if not already granted). It is also more in-line with
     *    what might be expected when you ask for a certain device (ie. don't
     *    return a different device unless it was specified that it's okay).
     */
    for (const kind in constraints) {
      if (constraints[kind] && typeof constraints[kind] === 'object' && typeof constraints[kind].deviceId === 'string') {
        // Don't allow a "bare" value be provided for deviceId. Change it to use
        //    "exact".
        const id = constraints[kind].deviceId;
        constraints[kind].deviceId = { exact: id };
      }
    }
    return constraints;
  }

  /**
   * Wraps native mediaStream, adds tracks to trackManager and Media, and sets up event handlers on a given media.
   * @method setupMedia
   * @param {MediaStream} mediaStream Creating a Media object with it.
   * @return {Media}
   */

  function setupMedia(mediaStream) {
    const media = new _media2.default(mediaStream, true);
    _loglevel2.default.debug(`Creating Media with ID: ${media.id}.`);

    // Only add tracks to a Media objects using the `addTrack` method.
    mediaStream.getTracks().forEach(nativeTrack => {
      const wrappedTrack = trackManager.add(nativeTrack, mediaStream);
      media.addTrack(wrappedTrack);
    });

    media.once('media:stopped', mediaId => {
      remove(mediaId);
    });

    media.on('track:removed', trackId => {
      if (media.tracks.size === 0) {
        remove(media.id);
      }
    });

    media.on('track:ended', ({ mediaId, trackId }) => {
      if (media.getTracks().length === 0) {
        remove(mediaId);
      }
    });

    return media;
  }

  /**
   * Create a new local Media object.
   * Use the provided constraints to get user media as the base MediaStream.
   * @method createLocal
   * @param  {MediaStreamConstraints}  constraints
   * @return {Promise}
   */
  function createLocal(constraints) {
    const constraintsWorkaround = browserContraintsWorkaround(constraints);

    // Get user media, ...
    return new _promise2.default((resolve, reject) => {
      // TODO: Proper error checking.
      // TODO: Use the WebAPI directly here? Probably not.
      navigator.mediaDevices.getUserMedia(constraintsWorkaround).then(mediaStream => {
        const media = setupMedia(mediaStream);

        medias.set(media.id, media);
        // TODO: Better event. Include metadata?
        emitter.emit('media:new', media.id);

        resolve(media);
      }).catch(reject);
    });
  }

  /**
   * Creates a new local Screen Media object.
   * Use the provided constraints to get user media as the base MediaStream.
   * @method createLocalScreen
   * @param {MediaStreamConstraints} constraints
   * @return {promise}
   */

  function createLocalScreen(constraints) {
    const constraintsWorkaround = browserContraintsWorkaround(constraints);

    return new _promise2.default((resolve, reject) => {
      navigator.mediaDevices.getDisplayMedia(constraintsWorkaround).then(mediaStream => {
        const media = setupMedia(mediaStream);

        medias.set(media.id, media);
        // TODO: Better event. Include metadata?
        emitter.emit('media:new', media.id);

        resolve(media);
      }).catch(reject);
    });
  }

  /**
   * Create a new remote Media object.
   * Use provided stream/tracks as the base media objects.
   * @method createRemote
   * @param  {MediaStream} mediaStream Native MediaStream object.
   * @param  {Tracks[]} tracks Array of Track objects.
   * @return {Media}
   */
  function createRemote(stream, tracks = []) {
    const media = new _media2.default(stream, false);

    tracks.forEach(track => {
      media.addTrack(track);
    });

    media.once('media:stopped', mediaId => {
      remove(mediaId);
    });

    media.on('track:removed', trackId => {
      if (media.tracks.size === 0) {
        remove(media.id);
      }
    });

    media.on('track:ended', ({ mediaId, trackId }) => {
      if (media.getTracks().length === 0) {
        remove(mediaId);
      }
    });

    medias.set(media.id, media);
    // TODO: Better event. Include metadata?
    emitter.emit('media:new', media.id);
    return media;
  }

  /**
   * Removes a Media object from the medias array.
   * @private
   * @method remove
   * @param {String} mediaId
   */
  function remove(mediaId) {
    const media = get(mediaId);
    if (media) {
      medias.delete(mediaId);
      emitter.emit('media:removed', mediaId);
    }
  }

  /**
   * Retrieve an existing Media object.
   * @method get
   * @param  {String} mediaId ID of the desired Media object.
   * @return {Media}
   */
  function get(mediaId) {
    const media = medias.get(mediaId);
    if (!media) {
      _loglevel2.default.debug(`No media found with ID: ${mediaId}.`);
    }
    return media;
  }

  /**
   * Retrieve a list of all existing Media object's IDs.
   * @method getAll
   * @return {Array} List of Media IDs.
   */
  function getAll() {
    return (0, _from2.default)(medias.keys());
  }

  /**
   * Finds the Media object that contains the specified Track.
   * @method findTrack
   * @param  {string}  trackId The ID of the Track to find.
   * @return {string} The ID of the Media object that contains the Track.
   */
  function findTrack(trackId) {
    // Search through all Media objects for the one that has the desired track.
    const allMedia = (0, _from2.default)(medias.values());
    const media = allMedia.find(media => media.getTrack(trackId));
    if (media) {
      _loglevel2.default.debug(`Found Media (${media.id}) with Track ${trackId}.`);
      return media.id;
    } else {
      _loglevel2.default.debug(`Found no Media with Track ${trackId}.`);
    }
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    // Getter APIs.
    get,
    getAll,
    getState,
    findTrack,
    // Create APIs.
    createLocal,
    createLocalScreen,
    createRemote,
    // Event APIs.
    on,
    once,
    off
  };
} // Models that this manager directly manages.

/***/ }),

/***/ "../../packages/webrtc/src/managers/peerManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _map = __webpack_require__("../../node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = PeerManager;

var _Peer = __webpack_require__("../../packages/webrtc/src/Peer/index.js");

var _Peer2 = _interopRequireDefault(_Peer);

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _v = __webpack_require__("../../node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager for Peer objects.
 * Allows the creation and retrieval of peer objects.
 * @method PeerManager
 */
function PeerManager(managers) {
  // Internal variables.
  const trackManager = managers.trackManager;
  const peers = new _map2.default();
  const emitter = new _eventemitter2.default();

  /**
   * Retrieve a snapshot of all Peer objects' current state.
   * @method getState
   * @return {Array}
   */
  function getState() {
    return getAll().map(id => get(id).getState());
  }

  /**
   * Create a new Peer using the provided configs.
   * @method create
   * @param  {Object} [config={}]
   * @return {Peer}
   */
  function create(config = {}) {
    const peer = new _Peer2.default((0, _v2.default)(), config, trackManager);
    peer.once('peer:closed', id => peers.delete(id));
    peers.set(peer.id, peer);
    emitter.emit('peer:new', peer.id);
    return peer;
  }

  /**
   * Retrieves an existing Peer object.
   * @method get
   * @param  {String} id ID of the desired Peer object.
   * @return {Peer}
   */
  function get(id) {
    const peer = peers.get(id);
    if (!peer) {
      _loglevel2.default.debug(`No Peer found with ID: ${id}.`);
    }
    return peer;
  }

  /**
   * Retrieve a list of all existing Peer object's IDs.
   * @method getAll
   * @return {Array} List of Peer IDs.
   */
  function getAll() {
    return (0, _from2.default)(peers.keys());
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    getState,
    get,
    getAll,
    create,
    // Event APIs.
    on,
    once,
    off
  };
}

// Libraries.

/***/ }),

/***/ "../../packages/webrtc/src/managers/sessionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _map = __webpack_require__("../../node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = SessionManager;

var _session = __webpack_require__("../../packages/webrtc/src/models/session.js");

var _session2 = _interopRequireDefault(_session);

var _v = __webpack_require__("../../node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager for Session objects.
 * Allows for creation and retrieval of session objects.
 * @method SessionManager
 */
function SessionManager(managers) {
  // Internal variables.
  const sessions = new _map2.default();
  const emitter = new _eventemitter2.default();

  /**
   * Create a new Session object.
   * @method create
   * @param {Object} [config]
   * @param {Object} [config.peer] Configs for the Session's Peer object.
   * @return {Session}
   */
  function create(config = {}) {
    const session = new _session2.default((0, _v2.default)(), managers, config);
    session.once('session:ended', id => {
      sessions.delete(id);
      emitter.emit('session:removed', id);
    });
    sessions.set(session.id, session);
    emitter.emit('session:new', session.id);
    return session;
  }

  /**
   * Retrieve an existing Session object.
   * @method get
   * @param  {String} sessionId ID of the desired Session object.
   * @return {Session}
   */
  function get(sessionId) {
    const session = sessions.get(sessionId);
    if (!session) {
      _loglevel2.default.debug(`No session found with ID: ${sessionId}.`);
    }
    return session;
  }

  /**
   * Retrieve a list of all existing Sessions.
   * @method getAll
   * @return {Array} List of Media IDs.
   */
  function getAll() {
    return (0, _from2.default)(sessions.values());
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    create,
    get,
    getAll,
    on,
    once,
    off
  };
}

// Libraries.

/***/ }),

/***/ "../../packages/webrtc/src/managers/trackManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _map = __webpack_require__("../../node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = TrackManager;

var _track = __webpack_require__("../../packages/webrtc/src/models/track.js");

var _track2 = _interopRequireDefault(_track);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager / store for Track objects.
 * @method TrackManager
 */
function TrackManager() {
  /**
   * The Track objects being managed.
   * @type {Map}
   */
  const tracks = new _map2.default();
  const emitter = new _eventemitter2.default();

  /**
   * Retrieve a Track object.
   * @method get
   * @param  {string} trackId
   * @return {Track}
   */
  function get(trackId) {
    return tracks.get(trackId);
  }

  /**
   * Retrieve a list of Track objects.
   * If no tracks are specified, will return all tracks.
   * @method getTracks
   * @param  {Array} [trackIds] List of tracks to retrieve.
   * @return {Array}
   */
  function getTracks(trackIds) {
    if (trackIds) {
      return trackIds.map(trackId => tracks.get(trackId));
    } else {
      return (0, _from2.default)(tracks.values());
    }
  }

  /**
   * Wraps a MediaStreamTrack into a Track object and adds
   *    it to the manager.
   * @method add
   * @param  {MediaStreamTrack} track A native track object.
   * @param  {MediaStream} stream
   * @return {Track} The added/wrapped Track object.
   */
  function add(track, stream) {
    const targetTrack = tracks.get(track.id);

    // Chrome issue: track.stream is outdated and needs to be updated to newStream.
    // targetTrack.stream.active is false & targetTrack.stream.getTracks() gives us an empty array.
    // stream.active is true & stream.getTracks() gives us the correct array of tracks.
    // Set/update the new stream as the track's stream
    if (targetTrack && !targetTrack.getStream().active && stream.active) {
      // The track was previously registered and is being re-added with new stream
      targetTrack.setStream(stream);
      return targetTrack;
    } else if (targetTrack) {
      // This track is already registered.
      return targetTrack;
    } else {
      // Wrap the track as a Track object.
      const wrappedTrack = new _track2.default(track, stream);
      tracks.set(track.id, wrappedTrack);

      // Remove the track from the manager when it ends.
      wrappedTrack.once('ended', remove);

      emitter.emit('add', wrappedTrack.id);
      return wrappedTrack;
    }
  }

  /**
   * Remove a Track from the manager.
   * @method remove
   * @param  {string} trackId
   * @return {Boolean} Whether the Track existed (and hence removed).
   */
  function remove({ trackId }) {
    const track = get(trackId);
    if (track) {
      tracks.delete(trackId);
      // Clean up any listeners.
      track.off('ended', remove);
      emitter.emit('remove', trackId);
    }

    return Boolean(track);
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    get,
    getTracks,
    add,
    remove,
    on,
    once,
    off
  };
}

// Libraries.

/***/ }),

/***/ "../../packages/webrtc/src/models/media.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _map = __webpack_require__("../../node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = Media;

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object to represent a "media" object.
 * Wraps a MediaStream object.
 * @class Media
 * TODO: Rename to Stream? Would be more straight-forward since Tracks can be
 *    managed directly (with trackManager), instead of through a "Media" object.
 */
// Libraries.
function Media(nativeStream, isLocal) {
  // Internal variables.
  const id = nativeStream.id;
  const stream = nativeStream;
  const emitter = new _eventemitter2.default();

  /**
   * Mapping of the IDs of this Media object's tracks to the Track object.
   * @type {Map}
   */
  const tracks = new _map2.default();

  stream.onremovetrack = event => {
    tracks.delete(event.track.id);
    emitter.emit('track:removed', event.track.id);
  };

  /**
   * Retrieve a snapshot of the Media object's current state.
   * @method getState
   * @return {Object}
   */
  function getState() {
    return {
      id: id,
      tracks: (0, _from2.default)(tracks.values()).map(track => track.getState()),
      isLocal: isLocal
    };
  }

  /**
   * Add a track to this Media object.
   * @method addTrack
   * @param {Track} track The Track object to add to the Media object.
   */
  function addTrack(track) {
    if (tracks.has(track.id)) {
      _loglevel2.default.debug(`Track (${track.id}) is already in Media (${id}).`);
      return;
    }

    // Add the native MediaStreamTrack to the MediaStream.
    stream.addTrack(track.track);
    // Add the Track to the Media object.
    tracks.set(track.id, track);

    /**
     * When a track ends, remove it from the Media object then clean it up.
     */
    track.on('ended', () => {
      const removedTrack = removeTrack(track.id);
      // Might be from old already deleted media which has no tracks anymore.
      if (removedTrack) {
        removedTrack.cleanup();
        emitter.emit('track:ended', {
          mediaId: id,
          trackId: removedTrack.id
        });
      }
    });
    // TODO: Emit event or return result?
    emitter.emit('track:new', {
      mediaId: id,
      trackId: track.id
    });
  }

  /**
   * Remove a track from the Media object.
   * @private
   * @method removeTrack
   * @param  {string} trackId The Track to remove.
   */
  function removeTrack(trackId) {
    const track = getTrack(trackId);
    if (track) {
      tracks.delete(trackId);
      return track;
    }
  }

  /**
   * Render all tracks of this Media object inside the specified element.
   * @method renderIn
   * @param  {HTMLElement} element The DOM element to be rendered in.
   * @param  {String} [speakerId] The device ID to be used for audio output.
   */
  function renderIn(element, speakerId) {
    getTracks().forEach(track => {
      track.renderIn(element, speakerId);
    });
  }

  /**
   * Stop rendering all tracks of this Media object from the specified element.
   * @method removeFrom
   * @param  {HTMLElement} element The DOM element to be removed from.
   */
  function removeFrom(element) {
    getTracks().forEach(track => {
      track.removeFrom(element);
    });
  }

  /**
   * Moves the rendered Media object to only the specified element.
   * @method moveTo
   * @param  {HTMLElement} element The DOM element to be move to.
   */
  function moveTo(element) {
    getTracks().forEach(track => {
      track.moveTo(element);
    });
  }

  /**
   * Stop all Tracks within this Media object.
   * @method stop
   */
  function stop() {
    getTracks().forEach(track => {
      track.stop();
    });
    emitter.emit('media:stopped', this.id);
  }

  /**
   * Clean-up the Media object by stopping all Tracks and removing any rendered media.
   * @method cleanup
   */
  function cleanup() {
    getTracks().forEach(track => {
      track.cleanup();
    });
    emitter.emit('media:stopped', this.id);
  }

  /**
   * Retrieve the list of Track object this this Media object manages.
   * @method getTracks
   * @return {Array} The list of Track objects.
   */
  function getTracks() {
    return (0, _from2.default)(tracks.values());
  }

  /**
   * Retrieve a specific Track object from within the Media object.
   * @method getTrack
   * @param  {String} trackId ID of the Track to retrieve.
   * @return {Track}
   */
  function getTrack(trackId) {
    return tracks.get(trackId);
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    id,
    tracks,
    isLocal,
    // Getter APIs.
    getState,
    getTracks,
    getTrack,
    // Create APIs.
    addTrack,
    // Render APIs.
    renderIn,
    removeFrom,
    moveTo,
    // Cleanup APIs.
    stop,
    cleanup,
    // Event APIs.
    on,
    once,
    off
  };
}

/***/ }),

/***/ "../../packages/webrtc/src/models/session.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _map = __webpack_require__("../../node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

exports.default = Session;

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _pipeline = __webpack_require__("../../packages/webrtc/src/sdpUtils/pipeline.js");

var _pipeline2 = _interopRequireDefault(_pipeline);

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

var _extractors = __webpack_require__("../../packages/webrtc/src/sdpUtils/extractors.js");

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object to represent a webRTC Session for a single peer.
 * "Session" being an abstraction of a webRTC connection between another peer.
 * Performs logic for initializing and connecting a peer connection.
 * Manages media added to / received from the peer connection.
 * @method Session
 */


// Libraries.
// Helpers.
function Session(id, managers, config = {}) {
  // Internal variables.
  const sessionId = id;
  let peerId;
  const peerManager = managers.peerManager;
  const mediaManager = managers.mediaManager;
  const trackManager = managers.trackManager;
  const emitter = new _eventemitter2.default();

  // This structure is used to remember the dtls role of a peer relative to some remote sdp.
  // key: the remote sdp's session id (o= line).
  // value: the dtls role that the current peer's local sdp has.
  // This is needed because a remote SDP with the same sessionId as a previous one may reappear later on
  //  (music-unhold scenario) and the roles will be expected to be the same.
  const dtlsRoleRecord = new _map2.default();

  // The latest remote description successfully set, even if the Peer has
  //    been recreated since it was set.
  let latestRemoteDescription;

  // Create and initialize the peer
  let peer = peerManager.create(config.peer);
  if (peer) {
    // The id of the created peer
    peerId = peer.id;
    setupPeerEventHandlers(peer);
  } else {
    throw new Error(`Peer creation error in Session ${sessionId}.`);
  }

  /**
   * Records the peer's dtlsRole if it hasn't been recorded yet and associates it with a remote sdp's sessionId.
   * @method recordNewDtlsRole
   */
  function recordNewDtlsRole() {
    const remoteSdpSessionId = (0, _extractors.getSdpSessionId)(peer.remoteDescription.sdp);
    if (!dtlsRoleRecord.get(remoteSdpSessionId)) {
      dtlsRoleRecord.set(remoteSdpSessionId, peer.dtlsRole);
    }
  }

  /**
   * @property {Array} getLocalTracks List of active Track objects the Session has added locally.
   */
  function getLocalTracks() {
    const peer = peerManager.get(peerId);
    if (peer) {
      return peer.localTracks;
    } else {
      return [];
    }
  }

  /**
   * @property {Array} getRemoteTracks List of active Track objects the Session has received remotely.
   */
  function getRemoteTracks() {
    const peer = peerManager.get(peerId);
    if (peer) {
      return peer.remoteTracks;
    } else {
      return [];
    }
  }

  /**
   * Retrieve a snapshot of the Session object's current state.
   * @method getState
   * @return {Object}
   */
  function getState() {
    return {
      id: sessionId,
      localTracks: getLocalTracks(),
      remoteTracks: getRemoteTracks()
    };
  }

  /**
   * Setup a warm PeerConnection.
   * @method warmup
   */
  function warmup() {}

  /**
   * Add Track objects to the Session.
   * @method addTracks
   * @param  {Array} tracks List of Track objects.
   */
  function addTracks(tracks) {
    const peer = peerManager.get(peerId);
    // TODO: Better error handling?
    if (peer) {
      const addTrackOrReuseTransceiverPromises = tracks.map(track => {
        return new _promise2.default((resolve, reject) => {
          // We try to find a reusable transceiver that we can attach the track to achieve the following:
          // - Avoid transceiver pollution and needing to create a brand new transceiver to attach the track to.
          // - Allow re-adding of the same track type that has been previously removed.
          //   (This is so that we can still have re-adding of tracks when using the "basic" media API which imposes a 1-audio & 1-video limit)
          const reusableTransceiver = peer.findReusableTransceiver(track.track.kind);

          // If we can find a reusable transceiver, reuse it.
          if ((0, _sdpSemantics.isUnifiedPlan)(config.peer.rtcConfig.sdpSemantics) && reusableTransceiver) {
            // Current limitations of transceiver reuse method:
            // - We cannot attach the track's associated stream to the sender (lack of `sender.setStreams` support atm)
            // So the local transceiver's sender track & remote transceiver's receiver track must have been used before so that it already has a stream attached to the sender.
            // If the local transceiver's sender has not been used before, we should ideally be able to do the following:
            // transceiver.sender.setStreams([<someStream>]) <- Not yet supported
            // transceiver.sender.replaceTrack(<someTrack>)
            // However, because of lack of support for `setStreams`, if we just tried to do `replaceTrack` on a transceiver that has not been used before,
            //  the sender will not have a stream and the SDP generated will have no associated stream which can cuase issues such as not triggering events on the local stream during renegotiation.
            // Once `setStreams` is supported, we can use the transceiver reuse method above even on transceivers that have not been used to send data before.
            reusableTransceiver.sender.replaceTrack(track.track).then(() => {
              reusableTransceiver.direction = reusableTransceiver.direction === 'recvonly' ? 'sendrecv' : 'sendonly';
              resolve(`Track (${track.track.kind} : ${track.id}) reused transceiver (mid: ${reusableTransceiver.mid}).`);
            }).catch(err => {
              _loglevel2.default.error(err);
              reject(err);
            });
          } else {
            // To get around the current limitation described above, we use peerConnection's `addTrack` when we can't find a reusable transceiver.
            // `addTrack` does one of the following when called:
            // - Create a new transceiver and attaches the track and stream to the sender
            // - Find and use an existing transceiver that has never been used to send data before and attach the track and stream to the sender.
            peer.addTrack(track);
            resolve(`Added track (${track.track.kind} : ${track.id}).`);
          }
        }).then(message => {
          // Set event emitters and handlers
          _loglevel2.default.info(message);

          // Indicate that the Session has a new Track.
          emitter.emit('new:track', {
            local: true,
            trackId: track.id
          });

          const media = mediaManager.get(track.getStream().id);
          if (media) {
            media.on('track:removed', trackId => {
              emitter.emit('track:removed', {
                local: true,
                trackId: trackId
              });
            });
          }

          track.once('ended', ({ performRenegotiation }) => {
            // If the PeerConnection is closed, we don't need to worry about
            //    removing the track (and it would throw an error anyway).
            if (peer.signalingState !== 'closed') {
              peer.removeTrack(track.id);
              emitter.emit('track:ended', {
                local: true,
                trackId: track.id,
                performRenegotiation: performRenegotiation
              });
            }
          });
        });
      });

      return _promise2.default.all(addTrackOrReuseTransceiverPromises);
    }
  }

  /**
   * Creates a local SDP offer.
   * @method createOffer
   * @param  {Object} [options] Options for configuring the SDP.
   * @param  {Object} [options.mediaDirections] Directions to use for media.
   * @param  {Array}  [options.sdpHandlers] SDP handlers for modifying the local offer.
   * @return {Promise} Resolves with the offer.
   */
  function createOffer(options = {}) {
    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
      }

      // If using unified-plan, remove options.mediaDirections.
      // This is because directions are now set in transceivers.
      if ((0, _sdpSemantics.isUnifiedPlan)(config.peer.rtcConfig.sdpSemantics)) {
        if (options.mediaDirections) {
          const audioTransceiverTargetDir = options.mediaDirections.audio;
          const videoTransceiverTargetDir = options.mediaDirections.video;

          if (audioTransceiverTargetDir) {
            const result = peer.setTransceiversDirection(audioTransceiverTargetDir, {
              trackIds: peer.localTracks.filter(track => track.track.kind === 'audio').map(track => track.id)
            });
            if (result.error) {
              _loglevel2.default.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          if (videoTransceiverTargetDir) {
            const result = peer.setTransceiversDirection(videoTransceiverTargetDir, {
              trackIds: peer.localTracks.filter(track => track.track.kind === 'video').map(track => track.id)
            });
            if (result.error) {
              _loglevel2.default.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          delete options.mediaDirections;
        }
      }

      peer.createOffer(options).then(offer => {
        if (options.sdpHandlers || _pipeline2.default.getHandlers().length) {
          _loglevel2.default.debug('Modifying local offer with SDP pipeline.');
          offer.sdp = _pipeline2.default.run(options.sdpHandlers, offer.sdp, {
            type: offer.type,
            endpoint: _constants.PEER.ENDPOINT.LOCAL
          });
        }

        resolve(offer);
      }).catch(reject);
    });
  }

  /**
   * Sets a local SDP.
   * @method setLocalDescription
   * @param  {Object} description The description containing the SDP to set as the local description.
   * @return {Promise} Resolves with the description.
   */
  function setLocalDescription(description) {
    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
      }

      peer.setLocalDescription(description).then(() => {
        // Record the peer's dtls role if setting a local answer.
        if (description.type === 'answer') {
          recordNewDtlsRole();
        }

        // Resolve with the _current_ local description, which may be
        //    different than the provided description due trickle ICE config.
        resolve(peer.localDescription);
      }).catch(reject);
    });
  }

  /**
   * Generates (and sets) a local SDP offer.
   * @method generateOffer
   * @param  {Object} [options] Options for configuring the SDP.
   * @param  {Object} [options.mediaDirections] Directions to use for media.
   * @param  {Array}  [options.sdpHandlers] SDP handlers for modifying the local offer.
   * @return {Promise} Resolves with the offer.
   */
  function generateOffer(options = {}) {
    // Backwards compatibility: Create the offer and set it as one operation.
    return new _promise2.default((resolve, reject) => {
      createOffer(options).then(setLocalDescription).then(resolve).catch(reject);
    });
  }

  /**
   * Replaces a specified transceiver's sender.track.
   * @method replaceTrack
   * @param {Object} newTrack The MediaStreamTrack we want to place into the sender.
   * @param {Object} options Options for specifying which transceiver's sender should be replaced. They are ordered by priority.
   * @param {String} [options.trackId] The transceiver with the specific sender.track.id.
   * @param {String} [options.mid] The transceiver with the specific media id.
   * @return {Object} A Promise object which is fulfilled once the track has been replaced
   */
  function replaceTrack(newTrack, options) {
    const peer = peerManager.get(peerId);
    return peer.replaceTrack(newTrack, options).then(() => {
      emitter.emit('track:replaced', {
        oldTrackId: options.trackId,
        trackId: newTrack.id
      });
    }).catch(err => err);
  }

  /**
   * Sets the direction of transceivers.
   * @method setTransceiversDirection
   * @param {String} targetDirection The desired direction to set the transceivers to.
   * @param {Object} [options] Options for specifying which transceivers should be affected.
   *  trackIds option has priority
   * @param {Array} [options.trackIds] The optional list of track ids whose transceivers we want to set the direction of.
   * @return {Object} An object containing an `error` flag and  an array `failures` of transceiver "mid"s whose directions weren't changed.
   */
  function setTransceiversDirection(targetDirection, options = {}) {
    if ((0, _sdpSemantics.isUnifiedPlan)(config.peer.rtcConfig.sdpSemantics)) {
      const peer = peerManager.get(peerId);
      return peer.setTransceiversDirection(targetDirection, options);
    } else {
      _loglevel2.default.info(`Transceiver direction modification is only available in unified-plan.`);
      return { error: true };
    }
  }

  /**
   * Processes (and sets) a remote SDP offer.
   * @method processOffer
   * @param  {RTCSessionDescription} offer
   * @param  {Object} [options] Options for configuring the SDP.
   * @param  {Array}  [options.sdpHandlers] SDP handlers for modifying the remote offer.
   * @return {Promise}
   */
  function processOffer(offer, options = {}) {
    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
      }

      if (options.sdpHandlers || _pipeline2.default.getHandlers().length) {
        _loglevel2.default.debug('Modifying remote offer with SDP pipeline.');
        offer.sdp = _pipeline2.default.run(options.sdpHandlers, offer.sdp, {
          type: offer.type,
          endpoint: _constants.PEER.ENDPOINT.REMOTE
        });
      }

      peer.setRemoteDescription(offer).then(() => {
        // Set the offer as the latest remote description.
        latestRemoteDescription = offer;
        resolve();
      }).catch(reject);
    });
  }

  /**
   * Creates a local SDP answer.
   * @method createAnswer
   * @param  {Object} [options] Options for configuring the SDP.
   * @param  {Object} [options.mediaDirections] Directions to use for media.
   * @param  {Array}  [options.sdpHandlers] SDP handlers for modifying the local answer.
   * @return {Promise} Resolves with the answer.
   */
  function createAnswer(options = {}) {
    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
      }

      // If using unified-plan, remove options.mediaDirections.
      // This is because directions are now set in transceivers.
      if ((0, _sdpSemantics.isUnifiedPlan)(config.peer.rtcConfig.sdpSemantics)) {
        if (options.mediaDirections) {
          const audioTransceiverTargetDir = options.mediaDirections.audio;
          const videoTransceiverTargetDir = options.mediaDirections.video;

          if (audioTransceiverTargetDir) {
            const result = peer.setTransceiversDirection(audioTransceiverTargetDir, {
              trackIds: peer.localTracks.filter(track => track.track.kind === 'audio').map(track => track.id)
            });
            if (result.error) {
              _loglevel2.default.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          if (videoTransceiverTargetDir) {
            const result = peer.setTransceiversDirection(videoTransceiverTargetDir, {
              trackIds: peer.localTracks.filter(track => track.track.kind === 'video').map(track => track.id)
            });
            if (result.error) {
              _loglevel2.default.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          delete options.mediaDirections;
        }
      }

      // Set the dtlsRole here if the following are true:
      // - It previously existed for this specific remote sdp.
      // - It hasn't been set on a recreated peer yet.
      const remoteSdpSessionId = (0, _extractors.getSdpSessionId)(peer.remoteDescription.sdp);
      const previousDtlsRole = dtlsRoleRecord.get(remoteSdpSessionId);
      if (!peer.dtlsRole && previousDtlsRole) {
        peer.dtlsRole = previousDtlsRole;
      }

      peer.createAnswer(options).then(answer => {
        if (options.sdpHandlers || _pipeline2.default.getHandlers().length) {
          _loglevel2.default.debug('Modifying local answer with SDP pipeline.');
          answer.sdp = _pipeline2.default.run(options.sdpHandlers, answer.sdp, {
            type: answer.type,
            endpoint: _constants.PEER.ENDPOINT.LOCAL
          });
        }
        resolve(answer);
      }).catch(reject);
    });
  }

  /**
   * Generates (and sets) a local SDP answer.
   * @method generateAnswer
   * @param  {Object} [options] Options for configuring the SDP.
   * @param  {Object} [options.mediaDirections] Directions to use for media.
   * @param  {Array}  [options.sdpHandlers] SDP handlers for modifying the local answer.
   * @return {Promise} Resolves with the answer.
   */
  function generateAnswer(options = {}) {
    // For backwards compatibility: Should use other APIs directly.
    return new _promise2.default((resolve, reject) => {
      createAnswer(options).then(setLocalDescription).then(resolve).catch(reject);
    });
  }

  /**
   * Processes (and sets) a remote SDP answer.
   * @method processAnswer
   * @param  {RTCSessionDescription} answer
   * @param  {Object} [options] Options for configuring the SDP.
   * @param  {Array}  [options.sdpHandlers] SDP handlers for modifying the remote answer.
   * @return {Promise}
   */
  function processAnswer(answer, options = {}) {
    if (options.sdpHandlers || _pipeline2.default.getHandlers().length) {
      _loglevel2.default.debug('Modifying remote answer with SDP pipeline.');
      answer.sdp = _pipeline2.default.run(options.sdpHandlers, answer.sdp, {
        type: answer.type,
        endpoint: _constants.PEER.ENDPOINT.REMOTE
      });
    }

    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
      }

      peer.setRemoteDescription(answer).then(() => {
        // Record the peer's dtls role.
        recordNewDtlsRole();

        // Set the answer as the latest remote description.
        latestRemoteDescription = answer;

        resolve();
      }).catch(reject);
    });
  }

  /**
   * Add an ICE candidate from the remote endpoint.
   * @method addIceCandidate
   * @param  {RTCIceCandidate} candidate
   * @param  {Object} [options]
   * @param  {string} [options.label] The Peer to perform the operation on.
   * @return {Promise}
   */
  function addIceCandidate(candidate, options = {}) {
    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
      }

      peer.addIceCandidate(candidate).then(resolve).catch(reject);
    });
  }

  /**
   * End the Session.
   * @method end
   */
  function end() {
    const peer = peerManager.get(peerId);
    if (peer) {
      peer.close();
    }
    emitter.emit('session:ended', sessionId);
  }

  /**
   * Removes specified Track objects from the Session.
   * @method removeTrack
   * @param  {Array} trackIds List of IDs of Track objects to remove.
   */
  function removeTracks(trackIds) {
    const peer = peerManager.get(peerId);
    if (peer) {
      trackIds.forEach(trackId => {
        if (getLocalTracks().findIndex(track => track.id === trackId) > -1) {
          peer.removeTrack(trackId);
        }
      });
    }
  }

  /**
   * Send DTMF tones on specified Track object from the Session.
   * @method sendDTMF
   * @param {Object} options The DTMF options.
   * @param {string} options.tone DTMF tone to send. Valid values are [0,1,2,3,4,5,6,7,8,9,#].
   * @param {number} [options.duration=100] The amount of time, in milliseconds, that each DTMF tone should last.
   * @param {number} [options.intertoneGap=70] The length of time, in milliseconds, to wait between tones.
   * @param {Object} [sendOptions] The send options.
   * @param {func} [sendOptions.callback] Optional callback for tone event .
   * @param {string} [sendOptions.trackId] The trackId of the sender to use.
   * @return {boolean} The success or fail indicator
   */
  function sendDTMF(DTMFOptions, sendOptions = {}) {
    const peer = peerManager.get(peerId);
    if (peer) {
      return peer.sendDTMF(DTMFOptions, sendOptions);
    } else {
      return false;
    }
  }

  /**
   * Retrieve RTCStatsReport from a sender.
   * @method getStats
   * @param  {string} trackId The track id associated with a sender.
   * @return {Promise}
   */
  function getStats(trackId) {
    return new _promise2.default((resolve, reject) => {
      const peer = peerManager.get(peerId);
      if (!peer) {
        reject(new Error(`Peer not found in Session ${sessionId}.`));
        return;
      }
      peer.getStats(trackId).then(resolve).catch(reject);
    });
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * Sets up event handlers on a given peer.
   * @method setupPeerEventHandlers
   * @param {PeerConnection} targetPeer The peer to set event handlers on.
   */
  function setupPeerEventHandlers(targetPeer) {
    // TODO: Use `uniqueLabel` when setting event listeners (and bubbling events).
    // When the peer gets an ICE candidate, emit it as
    //  a message to be sent to the other end.
    targetPeer.onicecandidate = event => {
      emitter.emit('onicecandidate', {
        candidate: event.candidate
      });
    };

    // Handle when the Peer receives a new remote track.
    targetPeer.ontrack = track => {
      let media = mediaManager.get(track.getStream().id);
      if (media) {
        // Add the new Track to its Media object.
        media.addTrack(track);
      } else {
        // Create a new Media object using the Track.
        media = mediaManager.createRemote(track.getStream(), [track]);
      }

      media.on('track:removed', trackId => {
        // This is used as a workaround for an issue that was noticed on Chrome 76 plan-b
        //  (it may have already been happening in previous versions):
        //  - the remote audio track's `ended` event does not fire when remote sdp comes in with `inactive` media (hold).
        //  - the remote audio track's `ended` event fires when sdp comes in with `sendrecv` media (unhold).
        // Only do manual remote track cleanup when plan-b.
        // Doing so for unified-plan will make the new track in `ontrack` event come in an `ended` state.
        if (!(0, _sdpSemantics.isUnifiedPlan)(config.peer.rtcConfig.sdpSemantics)) {
          const trackToCleanup = trackManager.get(trackId);
          if (trackToCleanup) {
            trackToCleanup.cleanup();
            _loglevel2.default.info(`Cleaning up track ${trackId}.`);
          } else {
            _loglevel2.default.info(`Track ${trackId} not found.`);
          }
        }

        emitter.emit('track:removed', {
          local: false,
          trackId: trackId
        });
      });

      track.once('ended', () => {
        emitter.emit('track:ended', {
          local: false,
          trackId: track.id,
          // If a remote track is ended, we don't want to manually perform a renegotiation
          performRenegotiation: false
        });
      });

      // Indicate that the Session has a new Track.
      emitter.emit('new:track', {
        local: false,
        trackId: track.id
      });
    };
  }

  /**
   * Creates a new peer and replaces the current peer being used by this session.
   *     This will close the previous Peer, stopping any media being sent/received on it.
   * @method recreatePeer
   */
  function recreatePeer() {
    const oldPeer = peer;
    const newPeer = peerManager.create(config.peer);
    if (newPeer) {
      // The id of the created peer
      peerId = newPeer.id;
      peer = newPeer;

      // Copy tracks
      oldPeer.localTracks.forEach(oldLocalTrack => {
        newPeer.addTrack(oldLocalTrack);
      });

      // Set event handlers
      setupPeerEventHandlers(newPeer);

      // Close the old peer
      oldPeer.close();
    } else {
      throw new Error(`Peer creation error in Session ${sessionId}.`);
    }
  }

  function getPeer() {
    return peer;
  }

  function getRemoteDescription() {
    return peer.remoteDescription;
  }

  function getLatestRemoteDesc() {
    return latestRemoteDescription;
  }

  /**
   * The exposed API.
   */
  return {
    id: sessionId,
    config,
    // Getter APIs.
    get peer() {
      return getPeer();
    },
    getState,
    get localTracks() {
      return getLocalTracks();
    },
    get remoteTracks() {
      return getRemoteTracks();
    },
    warmup,
    addTracks,
    removeTracks,
    replaceTrack,
    setTransceiversDirection,
    // Negotiation APIs.
    createOffer,
    createAnswer,
    setLocalDescription,
    getRemoteDescription,
    getLatestRemoteDesc,
    generateOffer,
    processOffer,
    generateAnswer,
    processAnswer,
    // Other APIs.
    recreatePeer,
    addIceCandidate,
    end,
    sendDTMF,
    getStats,
    // Event APIs.
    on,
    once,
    off
  };
}

// SDP Helpers.

/***/ }),

/***/ "../../packages/webrtc/src/models/track.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Track;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _eventemitter = __webpack_require__("../../node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _utils = __webpack_require__("../../packages/webrtc/src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper object for a native MediaStreamTrack object.
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack
 * @method Track
 */
function Track(mediaTrack, mediaStream) {
  // Internal variables.
  const id = mediaTrack.id;
  const track = mediaTrack;
  let stream = mediaStream;
  const containers = [];
  let constraints = {};
  const emitter = new _eventemitter2.default();

  /**
   * When a track ends, the Track itself doesn't do anything about it.
   * It "bubbles" the event up to be handled at a higher level.
   */
  track.onended = event => {
    _loglevel2.default.debug('Event emitted: ', event);
    emitter.emit('ended', {
      trackId: track.id,
      // If the event is defined:
      //   The event is triggered either from a remote notification or browser action.
      //   In case of browser action (e.g. "Stop sharing" screenshare on chrome), SDK will (eventually) receive a SESSION_TRACK_REMOVED action.
      //   This action is dispatched when the session picks up on this ended event and triggers a 'track:ended' event.
      //   When dispatching this action, we need to tell the SDK to perform renegotiation (but for browser actions only)
      // If the event is undefined:
      //   `track.onended` is manually triggered and the saga that eventually triggered this function will handle the renegotiation itself.
      performRenegotiation: !!event
    });
  };

  function setStream(newStream) {
    stream = newStream;
  }
  function getStream() {
    return stream;
  }

  /**
   * Retrieve a snapshot of the Track object's current state.
   * @method getState
   * @return {Object}
   */
  function getState() {
    return {
      id,
      streamId: stream.id,
      kind: track.kind,
      label: track.label,
      muted: !track.enabled,
      disabled: track.muted,
      state: track.readyState,
      containers: containers.map(element => element.id)
    };
  }

  /**
   * Renders this Track as a subelement of the specified element.
   * @method renderIn
   * @param  {HTMLElement|String} container The DOM element to be rendered in,
   *    or a unique CSS selector for the DOM element.
   * @param  {String} [speakerId] The device ID to be used for audio output.
   */
  function renderIn(container, speakerId) {
    let element;
    // If a string was provided, use it as a CSS selector to find the element.
    if (typeof container === 'string') {
      _loglevel2.default.debug(`Track ${id} rendering in element using selector: ${container}`);

      element = document.querySelector(container);
      if (!element) {
        _loglevel2.default.error(`Unable to get container with selector: ${container}.`);
        return false;
      }
    } else {
      _loglevel2.default.debug(`Track ${id} rendering in provided HTMLElement.`);

      element = container;
    }

    // TODO: Proper error checking.

    if (containers.indexOf(element) > -1) {
      // Already rendered in element.
      _loglevel2.default.debug(`Track ${id} already rendered in element.`, element);
      return;
    }

    containers.push(element);

    let type = track.kind;
    let renderer = document.createElement(type);

    // Make id safe for css (Firefox ids come wrapped in curly braces)
    // This makes it easier to do other manipulation on the rendering side
    // as we don't need to escape curly braces when doing element.querySelector (See removeFrom).
    renderer.id = `${type}-${(0, _utils.makeSafeForCSS)(id)}`;
    renderer.style.height = '100%';
    renderer.style.width = '100%';

    try {
      renderer.srcObject = stream;
    } catch (error) {
      _loglevel2.default.debug('srcObject property not supported; reverting to createObjectURL.');
      // TODO: AdapterJS handles this, we should remove this.
      renderer.src = window.URL.createObjectURL(stream);
    }

    renderer.autoplay = 'true';

    if (type === 'video') {
      renderer.muted = 'true';
      // Needed for Android.
      renderer.play().catch(err => _loglevel2.default.error(`video tag (#${renderer.id}) - play() - ${err}`));
    }

    // Set speaker if it was provided and it's supported.
    if (speakerId && typeof renderer.setSinkId !== 'undefined') {
      // TODO: Better then/catch handling.
      renderer.setSinkId(speakerId).then(() => {
        _loglevel2.default.debug('Set to use speaker: ', speakerId);
      }).catch(error => {
        _loglevel2.default.debug('Could not set speaker to use. ' + speakerId, error);
      });
    }

    element.appendChild(renderer);

    // TODO: Emit event to notify of changes?
    return true;
  }

  /**
   * Stop rendering this Track from the specified element.
   * @method removeFrom
   * @param  {HTMLElement} container The DOM element to be removed from, or
   *     a unique CSS selector for the DOM element.
   */
  function removeFrom(container) {
    let element;
    // If a string was provided, use it as a CSS selector to find the element.
    if (typeof container === 'string') {
      _loglevel2.default.debug(`Track ${id} removing from element using selector: ${container}`);

      element = document.querySelector(container);
      if (!element) {
        _loglevel2.default.error(`Unable to get container with selector: ${container}.`);
        return false;
      }
    } else {
      _loglevel2.default.debug(`Track ${id} removing from provided HTMLElement.`);

      element = container;
    }

    let index = containers.indexOf(element);
    if (index === -1) {
      // Not rendered in element.
      _loglevel2.default.debug(`Track ${id} not rendered in element.`, element);
      return;
    }
    containers.splice(index, 1);

    // TODO: This id may not be unique.
    // Make id safe for css (Firefox ids come wrapped in curly braces)
    // This makes it easier to do other manipulation on the rendering side
    // as we don't need to escape curly braces when doing element.querySelector.
    let rendererId = `${track.kind}-${(0, _utils.makeSafeForCSS)(id)}`;
    const renderer = element.querySelector(`#${rendererId}`);

    if (renderer.srcObject) {
      renderer.srcObject = null;
    } else if (renderer.src) {
      renderer.src = null;
    }
    element.removeChild(renderer);

    // TODO: Emit event to notify of changes?
    return true;
  }

  /**
   * Moves the rendered track to only the specified element.
   * @method moveTo
   * @param  {HTMLElement} element The DOM element to be moved to.
   */
  function moveTo(element) {
    // Iterate over the array backwards since `removeFrom` changes the length
    //    of the array. This ensures that indexes aren't skipped.
    for (let i = containers.length; i > 0; i--) {
      removeFrom(containers[i - 1]);
    }
    renderIn(element);
  }

  /**
   * Clean-up the Track by removing it wherever it is rendered and stopping the
   *    track itself.
   * @method cleanup
   */
  function cleanup() {
    // Iterate over the array backwards since `removeFrom` changes the length
    //    of the array. This ensures that indexes aren't skipped.
    for (let i = containers.length; i > 0; i--) {
      removeFrom(containers[i - 1]);
    }
    // Stop the track if it isn't already stopped.
    if (track.readyState === 'live') {
      stop();
    }
  }

  /**
   * Set this Track to be disabled and disallow the Track to render the source stream.
   * @method mute
   */
  function mute() {
    track.enabled = false;
  }

  /**
   * Set this Track to be enabled and allow the Track to render the source stream.
   * @method unmute
   */
  function unmute() {
    track.enabled = true;
  }

  /**
   * Calls native stop() function to deassociate the source and the track.
   * @method stop
   */
  function stop() {
    track.stop();
    /**
     * Treat stopping the track the same as it being ended.
     * Noramlly, onended is not triggered when `stop` is called, only when it is
     *    "remotely ended".
     */
    track.onended();
  }

  /**
   * Gets the currently set constraints for the track.
   * @method getConstraints
   * @return {Object}
   */
  function getConstraints() {
    return constraints;
  }

  /**
   * Set the values for constrainable properties of the track.
   * @method applyConstraints
   * @param  {Object} constraints The list of constrainable properties.
   */
  function setConstraints(constr) {
    constraints = constr;
  }

  /**
   * Retrieves the list of containers where the Track is rendered.
   * @method getContainers
   * @return {Array} List of HTMLElements.
   */
  function getContainers() {
    return containers;
  }

  function on(...args) {
    return emitter.on(...args);
  }

  function once(...args) {
    return emitter.once(...args);
  }

  function off(...args) {
    return emitter.off(...args);
  }

  /**
   * The exposed API.
   */
  return {
    id,
    // Track APIs.
    getState,
    renderIn,
    removeFrom,
    moveTo,
    cleanup,
    mute,
    unmute,
    stop,
    getConstraints,
    setConstraints,
    getContainers,
    // Event APIs.
    on,
    off,
    once,
    // The native track and stream was accessible before, so it was
    //    used when it probably shouldn't have been.
    // TODO: Find a better solution.
    track,
    setStream,
    getStream
  };
} // Libraries.

/***/ }),

/***/ "../../packages/webrtc/src/sdpUtils/extractors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSdpSessionId = getSdpSessionId;
/**
 * Extracts the session ID from the SDP.
 * Session ID is located in the o= line.
 * Ref: https://tools.ietf.org/html/rfc4566#section-5.2
 * @method getSdpSessionId
 * @param  {string} sdp A valid SDP string.
 * @return {string} The SDP's session ID.
 */
function getSdpSessionId(sdp) {
  const oLine = sdp.match(/o=.*/gm);

  if (oLine && oLine[0]) {
    return oLine[0].split(' ')[1];
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/sdpUtils/handlers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__("../../node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

exports.removeTrickleIce = removeTrickleIce;
exports.removeBundling = removeBundling;
exports.changeMediaDirection = changeMediaDirection;
exports.preventDtlsRoleChange = preventDtlsRoleChange;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SDP handler to remove the trickle ICE option from media groups.
 * Modifies the SDP so it claims to not support trickle ICE.
 * @method removeTrickleIce
 * @param  {Object} sdp
 * @param  {Object} info
 * @param  {String} info.type
 * @param  {String} info.endpoint
 * @param  {Object} originalSdp
 * @return {Object}
 */
// Libraries.
function removeTrickleIce(sdp, info, originalSdp) {
  sdp.media.forEach(media => {
    if (media.iceOptions === 'trickle') {
      _loglevel2.default.debug(`Removing trickle ICE option from ${media.type} media.`);
      delete media.iceOptions;
    }
  });

  return sdp;
}

/**
 * SDP handler to delete the bundle groupings line from the SDP.
 * PeerConnections do not have an option to completely disable bundling, so
 *    manually removing the line from the SDP is needed to prevent bundling.
 * @method removeBundling
 * @param  {Object}     sdp           The session description.
 * @param  {Object}     info          Information about the session description.
 * @param  {RTCSdpType} info.type     The session description's type.
 * @param  {String}     info.endpoint Which end of the connection created the SDP.
 * @param  {Object}     originalSdp   The original SDP before any modifications.
 * @return {Object}
 */


// Constants.
function removeBundling(sdp, info, originalSdp) {
  if (sdp.groups) {
    delete sdp.groups;
  }

  return sdp;
}

/**
 * Currying function to create an SDP handler.
 * The SDP handler modifies the SDP to change the direction of media.
 * @method changeMediaDirection
 * @param  {Object} mediaDirections
 * @param  {string} [audio] Direction to set for audio.
 * @param  {string} [video] Direction to set for video.
 * @return {Function} SDP handler.
 */
function changeMediaDirection({ audio, video }) {
  function isValid(direction) {
    return (0, _values2.default)(_constants.MEDIA_DIR).includes(direction);
  }

  /**
   * SDP handler to change the direction of media a-lines.
   */
  return (sdp, info, originalSdp) => {
    sdp.media.forEach(media => {
      if (media.type === 'audio' && isValid(audio)) {
        media.direction = audio;
      } else if (media.type === 'video' && isValid(video)) {
        media.direction = video;
      }
    });
    return sdp;
  };
}

/**
 * SDP handler to modify the DTLS role of a locally generated answer SDP.
 *
 * The point of this SDP handler is to avoid a DTLS role conflict during a
 *    renegotiation. A role conflict occurs when DTLS roles have been selected
 *    during initial negotiation, but during renegotiation, the answerer selects
 *    the opposite role than previously used.
 *
 * This handler only needs to be used when the Peer is generating an answer SDP.
 *    That is the only point when a conflicting role can be chosen.
 *
 * This handler prevents the role changing by comparing the SDP's role with the
 *    role that the Peer previously selected. If they conflict, the Peer's
 *    previous role is used.
 *
 * Related stories: KAA-1426, KAA-1562.
 * References: https://groups.google.com/forum/#!topic/discuss-webrtc/gsw3OEAwNKo
 * @method preventDtlsRoleChange
 * @param  {Object}     newSdp          The session description.
 * @param  {Object}     info            Information about the session description.
 * @param  {RTCSdpType} info.type       The session description's type.
 * @param  {string}     info.endpoint   Which end of the connection created the SDP.
 * @param  {string}     [info.dtlsRole] The previously select DTLS role of the Peer.
 * @param  {Object}     originalSdp     The sdp in its initial state.
 * @return {Object}                     The modified SDP.
 */
function preventDtlsRoleChange(newSdp, info, originalSdp) {
  /**
   * This SDP handler only affects local answer SDPs.
   *  - Only local because we are trying to prevent role conflict issues caused
   *        by the answerer choosing the "wrong" role during a renegotiation.
   *  - Only answer because offers are always actpass.
   */
  if (info.endpoint === 'local' && info.type === 'answer') {
    for (let mLine of newSdp.media) {
      /**
       * If the generated DTLS role is different than what the Peer expects,
       *    replace it. The Peer expects the DTLS role to stay the same
       *    throughout renegotiations.
       */
      if (mLine.setup && info.dtlsRole && mLine.setup !== info.dtlsRole) {
        _loglevel2.default.debug(`Changing DTLS role from ${mLine.setup} to ${info.dtlsRole}.`);
        mLine.setup = info.dtlsRole;
      }
    }
  }
  return newSdp;
}

/***/ }),

/***/ "../../packages/webrtc/src/sdpUtils/pipeline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freeze = __webpack_require__("../../node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

exports.runPipeline = runPipeline;

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _sdpTransform = __webpack_require__("../../node_modules/sdp-transform/lib/index.js");

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Basic SDP pipeline runner.
 * Does not include any default handlers.
 * @method sdpPipeline
 * @param  {Array}      handlers       List of functions that transform the SDP.
 * @param  {String}     sdp            The session description.
 * @param  {RTCSdpType} info           Information about the session description.
 * @param  {RTCSdpType} info.type      The session description's type.
 * @param  {String}     info.endpoint  Which end of the connection created the SDP.
 * @param  {Boolean}    info.isInitiator Whether this session initiated the connection or not.
 * @return {String}     The modified session description.

 */
function runPipeline(handlers, sdp, info) {
  let objectSdp = _sdpTransform2.default.parse(sdp);

  const originalSdp = (0, _freeze2.default)(objectSdp);
  let newSdp = (0, _fp.cloneDeep)(originalSdp);

  if ((0, _fp.isArray)(handlers)) {
    handlers.forEach(handler => {
      if ((0, _fp.isFunction)(handler)) {
        newSdp = handler(newSdp, info, originalSdp);
      } else {
        _loglevel2.default.error(`SDP handler not a function; skipping.`);
      }
    });
  }

  return _sdpTransform2.default.write(newSdp);
}

/**
 * Create an instance of the SDP pipeline.
 * Allows for persistent SDP handlers to be set and implictly used.
 * @method createPipeline
 * @return {Object} An SDP pipeline.
 */
// Libraries.
function createPipeline() {
  /**
   * SDP handlers that should be included with every pipeline run.
   * @type {Array}
   */
  let defaultHandlers = [];

  /**
   * Use the pipeline to process an SDP.
   * @method run
   * @param  {Array}      handlers      List of functions that transform the SDP.
   * @param  {String}     sdp           The session description.
   * @param  {RTCSdpType} info          Information about the session description.
   * @param  {RTCSdpType} info.type     The session description's type.
   * @param  {String}     info.endpoint Which end of the connection created the SDP.
   * @return {String}     The modified session description.
   */
  function run(handlers = [], sdp, info) {
    return runPipeline(handlers.concat(defaultHandlers), sdp, info);
  }

  /**
   * Set the SDP handlers that should be included with every pipeline run.
   * @method setHandlers
   * @param  {Array} handlers List of SDP handler functions.
   */
  function setHandlers(handlers) {
    if ((0, _fp.isArray)(handlers)) {
      defaultHandlers = defaultHandlers.concat(handlers);
    }
  }

  /**
   * Get the SDP handlers that are included with every pipeline run.
   * @method getHandlers
   * @return {Array} List of SDP handler functions.
   */
  function getHandlers() {
    return defaultHandlers;
  }

  return {
    run,
    setHandlers,
    getHandlers
  };
}

// Export an instance of the pipeline to be used by everything.
exports.default = createPipeline();

/***/ }),

/***/ "../../packages/webrtc/src/sdpUtils/sdpSemantics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUnifiedPlan = isUnifiedPlan;
exports.getSdpSemanticsList = getSdpSemanticsList;

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

/**
 * Checks whether the current sdp semantics is unified-plan
 * @method isUnifiedPlan
 * @param {String} sdpSemantics The current sdp semantics being used
 * @return {Boolean}
 */
function isUnifiedPlan(sdpSemantics) {
  return sdpSemantics === _constants.PEER.SDP_SEMANTICS.UNIFIED_PLAN;
}

/**
 * Generates a list of sdp semantics.
 * @method getSdpSemanticsList
 * @return {Array}
 */
function getSdpSemanticsList() {
  return (0, _fp.values)(_constants.PEER.SDP_SEMANTICS);
}

/***/ }),

/***/ "../../packages/webrtc/src/sdpUtils/transceiverUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransceiverDirection = setTransceiverDirection;

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");

var _loglevel2 = _interopRequireDefault(_loglevel);

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets a transceiver's direction.
 * Checks that the desired direction is a valid one.
 * @method setTransceiverDirection
 * @param {Object} transceiver The transceiver that we want to modify.
 * @param {String} targetDirection The desired direction we want to change to.
 * @return {Boolean} Indicator on whether the transceiver direction was successfully changed.
 */
function setTransceiverDirection(transceiver, targetDirection) {
  if (!(0, _fp.includes)(targetDirection, (0, _fp.values)(_constants.MEDIA_DIR))) {
    _loglevel2.default.info(`Invalid direction "${targetDirection}"`);
    return false;
  }

  // Only in Safari:
  //  - has transceiver.setDirection
  //  - transceiver.direction is readOnly
  if (transceiver.setDirection) {
    transceiver.setDirection(targetDirection);
  } else {
    transceiver.direction = targetDirection;
  }
  return true;
}

/***/ }),

/***/ "../../packages/webrtc/src/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeValues = mergeValues;
exports.makeSafeForCSS = makeSafeForCSS;

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

// TODO: This function was copied from Kandy, we should eventually create a common project that
// can contain all of these utils that are useful in multiple packages.

/**
 * Deeply merges the values of multiple objects. Objects on the left receive the values from objects on their right.
 * Unlike lodash's default merge behavior this doesn't merge arrays.
 *
 * @name mergeValues
 * @param {...Object} objects - Objects to merge
 * @return {Object} A new object containing the merged values.
 */
function mergeValues(...objects) {
  return (0, _fp.mergeAllWith)((leftValue, rightValue) => {
    // Overwrite the default behavior of lodash's merge for arrays and simply
    // clobber what's on the left so we don't end up with merged arrays.
    if ((0, _fp.isArray)(leftValue)) {
      return rightValue;
    }
  }, objects);
}

function makeSafeForCSS(name) {
  if (!name) {
    return name;
  } else {
    return name.replace(/[^a-z0-9]/g, '');
  }
}

/***/ })

/******/ });
});
//# sourceMappingURL=kandy.remote.js.map