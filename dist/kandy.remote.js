/**
 * Kandy.js
 * kandy.remote.js
 * Version: 4.27.0-beta.645
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

/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@redux-saga/core/dist/io-6de156f3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
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

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
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

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

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

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(arg);
    }, 'fork: argument must not be an effect');
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "../../node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return multicastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return runSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["I"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











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
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
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

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["k"];
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["string"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(pattern) ? array : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["stringableFunc"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(pattern) ? predicate : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["symbol"])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"]
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"];
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["e"])();
  }

  var closed = false;
  var takers = [];

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["buffer"], INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
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
    buffer = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["n"])();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(unsubscribe);

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

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(function () {
      ensureCanMutateNextTakers();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]];

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["undef"])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]) {
    cancelSingleTask(task);
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
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

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["T"]] = runTakeEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["P"]] = runPutEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["A"]] = runAllEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["R"]] = runRaceEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["C"]] = runCallEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["a"]] = runCPSEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["F"]] = runForkEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["J"]] = runJoinEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["b"]] = runCancelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["S"]] = runSelectEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["d"]] = runChannelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["f"]] = runCancelledEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["g"]] = runFlushEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["G"]] = runGetContextEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["h"]] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
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

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(tasks, task);
      task.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["v"])(effect);

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

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('task', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = Object(_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["x"]]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["y"])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]
        };
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
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
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
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
      cb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["B"] : _ref$onError;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"], NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(dispatch)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'dispatch must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(getState)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'getState must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"], MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], MIDDLEWARE_TYPE_ERROR);
      });
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_5__["compose"].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["E"];
  }

  var env = {
    channel: channel,
    dispatch: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["D"])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["channel"], 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
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
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('sagaMiddleware', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "../../node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return takeLeading$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["stringableFunc"])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["q"])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"])(pattern, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"])({
      action: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel),
      debounce: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a pattern or channel");
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a pattern');
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "../../node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeferred", function() { return arrayOfDeferred; });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "../../node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "../../node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

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

/***/ "../../node_modules/babel-runtime/core-js/object/freeze.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("../../node_modules/core-js/library/fn/object/freeze.js"), __esModule: true };

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

/***/ "../../node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("../../node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


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

/***/ "../../node_modules/core-js/library/fn/object/freeze.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.object.freeze.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Object.freeze;


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

/***/ "../../node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("../../node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("../../node_modules/core-js/library/modules/_core.js").Symbol;


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

var core = module.exports = { version: '2.6.12' };
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
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
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
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function e(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;
return!0}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!!(null==n?0:n.length)&&y(n,t,0)>-1}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function p(n){return n.split("")}function _(n){return n.match(Bt)||[]}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function g(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function y(n,t,r){return t===t?q(n,t,r):g(n,b,r)}function d(n,t,r,e){
for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function b(n){return n!==n}function w(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:Sn}function m(n){return function(t){return null==t?Y:t[n]}}function x(n){return function(t){return null==n?Y:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==Y&&(r=r===Y?i:r+i);
}return r}function O(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function I(n,t){return c(t,function(t){return[t,n[t]]})}function R(n){return function(t){return n(t)}}function z(n,t){return c(t,function(t){return n[t]})}function E(n,t){return n.has(t)}function S(n,t){for(var r=-1,e=n.length;++r<e&&y(t,n[r],0)>-1;);return r}function W(n,t){for(var r=n.length;r--&&y(t,n[r],0)>-1;);return r}function L(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function C(n){return"\\"+Gr[n]}function U(n,t){
return null==n?Y:n[t]}function B(n){return Dr.test(n)}function T(n){return Mr.test(n)}function $(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function M(n,t){return function(r){return n(t(r))}}function F(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==un||(n[r]=un,i[u++]=r)}return i}function N(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function P(n){
var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function q(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function Z(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function K(n){return B(n)?G(n):se(n)}function V(n){return B(n)?H(n):p(n)}function G(n){for(var t=Tr.lastIndex=0;Tr.test(n);)++t;return t}function H(n){return n.match(Tr)||[]}function J(n){return n.match($r)||[]}var Y,Q="4.17.20",X=200,nn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",tn="Expected a function",rn="__lodash_hash_undefined__",en=500,un="__lodash_placeholder__",on=1,fn=2,cn=4,an=1,ln=2,sn=1,hn=2,pn=4,_n=8,vn=16,gn=32,yn=64,dn=128,bn=256,wn=512,mn=30,xn="...",jn=800,An=16,kn=1,On=2,In=3,Rn=1/0,zn=9007199254740991,En=1.7976931348623157e308,Sn=NaN,Wn=4294967295,Ln=Wn-1,Cn=Wn>>>1,Un=[["ary",dn],["bind",sn],["bindKey",hn],["curry",_n],["curryRight",vn],["flip",wn],["partial",gn],["partialRight",yn],["rearg",bn]],Bn="[object Arguments]",Tn="[object Array]",$n="[object AsyncFunction]",Dn="[object Boolean]",Mn="[object Date]",Fn="[object DOMException]",Nn="[object Error]",Pn="[object Function]",qn="[object GeneratorFunction]",Zn="[object Map]",Kn="[object Number]",Vn="[object Null]",Gn="[object Object]",Hn="[object Promise]",Jn="[object Proxy]",Yn="[object RegExp]",Qn="[object Set]",Xn="[object String]",nt="[object Symbol]",tt="[object Undefined]",rt="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",it="[object DataView]",ot="[object Float32Array]",ft="[object Float64Array]",ct="[object Int8Array]",at="[object Int16Array]",lt="[object Int32Array]",st="[object Uint8Array]",ht="[object Uint8ClampedArray]",pt="[object Uint16Array]",_t="[object Uint32Array]",vt=/\b__p \+= '';/g,gt=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,bt=/[&<>"']/g,wt=RegExp(dt.source),mt=RegExp(bt.source),xt=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,zt=RegExp(Rt.source),Et=/^\s+|\s+$/g,St=/^\s+/,Wt=/\s+$/,Lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ct=/\{\n\/\* \[wrapped with (.+)\] \*/,Ut=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Tt=/\\(\\)?/g,$t=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dt=/\w*$/,Mt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Nt=/^\[object .+?Constructor\]$/,Pt=/^0o[0-7]+$/i,qt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt=/($^)/,Vt=/['\n\r\u2028\u2029\\]/g,Gt="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Qt=Ht+Jt+Yt,Xt="\\u2700-\\u27bf",nr="a-z\\xdf-\\xf6\\xf8-\\xff",tr="\\xac\\xb1\\xd7\\xf7",rr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",er="\\u2000-\\u206f",ur=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ir="A-Z\\xc0-\\xd6\\xd8-\\xde",or="\\ufe0e\\ufe0f",fr=tr+rr+er+ur,cr="['\u2019]",ar="["+Gt+"]",lr="["+fr+"]",sr="["+Qt+"]",hr="\\d+",pr="["+Xt+"]",_r="["+nr+"]",vr="[^"+Gt+fr+hr+Xt+nr+ir+"]",gr="\\ud83c[\\udffb-\\udfff]",yr="(?:"+sr+"|"+gr+")",dr="[^"+Gt+"]",br="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="["+ir+"]",xr="\\u200d",jr="(?:"+_r+"|"+vr+")",Ar="(?:"+mr+"|"+vr+")",kr="(?:"+cr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+cr+"(?:D|LL|M|RE|S|T|VE))?",Ir=yr+"?",Rr="["+or+"]?",zr="(?:"+xr+"(?:"+[dr,br,wr].join("|")+")"+Rr+Ir+")*",Er="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wr=Rr+Ir+zr,Lr="(?:"+[pr,br,wr].join("|")+")"+Wr,Cr="(?:"+[dr+sr+"?",sr,br,wr,ar].join("|")+")",Ur=RegExp(cr,"g"),Br=RegExp(sr,"g"),Tr=RegExp(gr+"(?="+gr+")|"+Cr+Wr,"g"),$r=RegExp([mr+"?"+_r+"+"+kr+"(?="+[lr,mr,"$"].join("|")+")",Ar+"+"+Or+"(?="+[lr,mr+jr,"$"].join("|")+")",mr+"?"+jr+"+"+kr,mr+"+"+Or,Sr,Er,hr,Lr].join("|"),"g"),Dr=RegExp("["+xr+Gt+Qt+or+"]"),Mr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nr=-1,Pr={};
Pr[ot]=Pr[ft]=Pr[ct]=Pr[at]=Pr[lt]=Pr[st]=Pr[ht]=Pr[pt]=Pr[_t]=!0,Pr[Bn]=Pr[Tn]=Pr[ut]=Pr[Dn]=Pr[it]=Pr[Mn]=Pr[Nn]=Pr[Pn]=Pr[Zn]=Pr[Kn]=Pr[Gn]=Pr[Yn]=Pr[Qn]=Pr[Xn]=Pr[rt]=!1;var qr={};qr[Bn]=qr[Tn]=qr[ut]=qr[it]=qr[Dn]=qr[Mn]=qr[ot]=qr[ft]=qr[ct]=qr[at]=qr[lt]=qr[Zn]=qr[Kn]=qr[Gn]=qr[Yn]=qr[Qn]=qr[Xn]=qr[nt]=qr[st]=qr[ht]=qr[pt]=qr[_t]=!0,qr[Nn]=qr[Pn]=qr[rt]=!1;var Zr={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a",
"\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae",
"\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g",
"\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O",
"\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w",
"\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},Kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Gr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hr=parseFloat,Jr=parseInt,Yr="object"==typeof global&&global&&global.Object===Object&&global,Qr="object"==typeof self&&self&&self.Object===Object&&self,Xr=Yr||Qr||Function("return this")(),ne= true&&exports&&!exports.nodeType&&exports,te=ne&&"object"==typeof module&&module&&!module.nodeType&&module,re=te&&te.exports===ne,ee=re&&Yr.process,ue=function(){
try{var n=te&&te.require&&te.require("util").types;return n?n:ee&&ee.binding&&ee.binding("util")}catch(n){}}(),ie=ue&&ue.isArrayBuffer,oe=ue&&ue.isDate,fe=ue&&ue.isMap,ce=ue&&ue.isRegExp,ae=ue&&ue.isSet,le=ue&&ue.isTypedArray,se=m("length"),he=x(Zr),pe=x(Kr),_e=x(Vr),ve=function p(x){function q(n){if(oc(n)&&!yh(n)&&!(n instanceof Bt)){if(n instanceof H)return n;if(yl.call(n,"__wrapped__"))return to(n)}return new H(n)}function G(){}function H(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,
this.__index__=0,this.__values__=Y}function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Wn,this.__views__=[]}function Gt(){var n=new Bt(this.__wrapped__);return n.__actions__=Uu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Uu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Uu(this.__views__),n}function Ht(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,
n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Jt(){var n=this.__wrapped__.value(),t=this.__dir__,r=yh(n),e=t<0,u=r?n.length:0,i=Ai(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Vl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return du(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==On)g=w;else if(!w){if(b==kn)continue n;break n}}_[h++]=g}return _}function Yt(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qt(){this.__data__=es?es(null):{},this.size=0}function Xt(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function nr(n){var t=this.__data__;if(es){var r=t[n];return r===rn?Y:r}return yl.call(t,n)?t[n]:Y}function tr(n){var t=this.__data__;return es?t[n]!==Y:yl.call(t,n)}function rr(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=es&&t===Y?rn:t,this}function er(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function ur(){this.__data__=[],this.size=0}function ir(n){var t=this.__data__,r=Er(t,n);return!(r<0)&&(r==t.length-1?t.pop():Sl.call(t,r,1),--this.size,!0)}function or(n){var t=this.__data__,r=Er(t,n);return r<0?Y:t[r][1]}function fr(n){return Er(this.__data__,n)>-1}function cr(n,t){var r=this.__data__,e=Er(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function ar(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){
var e=n[t];this.set(e[0],e[1])}}function lr(){this.size=0,this.__data__={hash:new Yt,map:new(Xl||er),string:new Yt}}function sr(n){var t=wi(this,n).delete(n);return this.size-=t?1:0,t}function hr(n){return wi(this,n).get(n)}function pr(n){return wi(this,n).has(n)}function _r(n,t){var r=wi(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function vr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new ar;++t<r;)this.add(n[t])}function gr(n){return this.__data__.set(n,rn),this}function yr(n){
return this.__data__.has(n)}function dr(n){this.size=(this.__data__=new er(n)).size}function br(){this.__data__=new er,this.size=0}function wr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function mr(n){return this.__data__.get(n)}function xr(n){return this.__data__.has(n)}function jr(n,t){var r=this.__data__;if(r instanceof er){var e=r.__data__;if(!Xl||e.length<X-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new ar(e)}return r.set(n,t),this.size=r.size,this}function Ar(n,t){
var r=yh(n),e=!r&&gh(n),u=!r&&!e&&bh(n),i=!r&&!e&&!u&&Ah(n),o=r||e||u||i,f=o?O(n.length,ll):[],c=f.length;for(var a in n)!t&&!yl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Wi(a,c))||f.push(a);return f}function kr(n){var t=n.length;return t?n[Xe(0,t-1)]:Y}function Or(n,t){return Yi(Uu(n),$r(t,0,n.length))}function Ir(n){return Yi(Uu(n))}function Rr(n,t,r){(r===Y||Kf(n[t],r))&&(r!==Y||t in n)||Cr(n,t,r)}function zr(n,t,r){var e=n[t];
yl.call(n,t)&&Kf(e,r)&&(r!==Y||t in n)||Cr(n,t,r)}function Er(n,t){for(var r=n.length;r--;)if(Kf(n[r][0],t))return r;return-1}function Sr(n,t,r,e){return vs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Wr(n,t){return n&&Bu(t,Fc(t),n)}function Lr(n,t){return n&&Bu(t,Nc(t),n)}function Cr(n,t,r){"__proto__"==t&&Ul?Ul(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=el(e),i=null==n;++r<e;)u[r]=i?Y:$c(n,t[r]);return u}function $r(n,t,r){return n===n&&(r!==Y&&(n=n<=r?n:r),
t!==Y&&(n=n>=t?n:t)),n}function Dr(n,t,e,u,i,o){var f,c=t&on,a=t&fn,l=t&cn;if(e&&(f=i?e(n,u,i,o):e(n)),f!==Y)return f;if(!ic(n))return n;var s=yh(n);if(s){if(f=Ii(n),!c)return Uu(n,f)}else{var h=Is(n),p=h==Pn||h==qn;if(bh(n))return ku(n,c);if(h==Gn||h==Bn||p&&!i){if(f=a||p?{}:Ri(n),!c)return a?$u(n,Lr(f,n)):Tu(n,Wr(f,n))}else{if(!qr[h])return i?n:{};f=zi(n,h,c)}}o||(o=new dr);var _=o.get(n);if(_)return _;o.set(n,f),jh(n)?n.forEach(function(r){f.add(Dr(r,t,e,r,n,o))}):mh(n)&&n.forEach(function(r,u){
f.set(u,Dr(r,t,e,u,n,o))});var v=l?a?gi:vi:a?Nc:Fc,g=s?Y:v(n);return r(g||n,function(r,u){g&&(u=r,r=n[u]),zr(f,u,Dr(r,t,e,u,n,o))}),f}function Mr(n){var t=Fc(n);return function(r){return Zr(r,n,t)}}function Zr(n,t,r){var e=r.length;if(null==n)return!e;for(n=cl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===Y&&!(u in n)||!i(o))return!1}return!0}function Kr(n,t,r){if("function"!=typeof n)throw new sl(tn);return Es(function(){n.apply(Y,r)},t)}function Vr(n,t,r,e){var u=-1,i=o,a=!0,l=n.length,s=[],h=t.length;
if(!l)return s;r&&(t=c(t,R(r))),e?(i=f,a=!1):t.length>=X&&(i=E,a=!1,t=new vr(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function Gr(n,t){var r=!0;return vs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===Y?o===o&&!yc(o):r(o,f)))var f=o,c=i}return c}function Qr(n,t,r,e){var u=n.length;for(r=jc(r),r<0&&(r=-r>u?0:u+r),
e=e===Y||e>u?u:jc(e),e<0&&(e+=u),e=r>e?0:Ac(e);r<e;)n[r++]=t;return n}function ne(n,t){var r=[];return vs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function te(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Si),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?te(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function ee(n,t){return n&&ys(n,t,Fc)}function ue(n,t){return n&&ds(n,t,Fc)}function se(n,t){return i(t,function(t){return rc(n[t])})}function ve(n,t){t=ju(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Qi(t[r++])];
return r&&r==e?n:Y}function ye(n,t,r){var e=t(n);return yh(n)?e:a(e,r(n))}function de(n){return null==n?n===Y?tt:Vn:Cl&&Cl in cl(n)?ji(n):qi(n)}function be(n,t){return n>t}function we(n,t){return null!=n&&yl.call(n,t)}function me(n,t){return null!=n&&t in cl(n)}function xe(n,t,r){return n>=Vl(t,r)&&n<Kl(t,r)}function je(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=el(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,R(t))),s=Vl(p.length,s),l[a]=!r&&(t||u>=120&&p.length>=120)?new vr(a&&p):Y}p=n[0];
var _=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?E(v,y):e(h,y,r))){for(a=i;--a;){var d=l[a];if(!(d?E(d,y):e(n[a],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function Ae(n,t,r,e){return ee(n,function(n,u,i){t(e,r(n),u,i)}),e}function ke(t,r,e){r=ju(r,t),t=Ki(t,r);var u=null==t?t:t[Qi(mo(r))];return null==u?Y:n(u,t,e)}function Oe(n){return oc(n)&&de(n)==Bn}function Ie(n){return oc(n)&&de(n)==ut}function Re(n){return oc(n)&&de(n)==Mn}function ze(n,t,r,e,u){
return n===t||(null==n||null==t||!oc(n)&&!oc(t)?n!==n&&t!==t:Ee(n,t,r,e,ze,u))}function Ee(n,t,r,e,u,i){var o=yh(n),f=yh(t),c=o?Tn:Is(n),a=f?Tn:Is(t);c=c==Bn?Gn:c,a=a==Bn?Gn:a;var l=c==Gn,s=a==Gn,h=c==a;if(h&&bh(n)){if(!bh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new dr),o||Ah(n)?si(n,t,r,e,u,i):hi(n,t,c,r,e,u,i);if(!(r&an)){var p=l&&yl.call(n,"__wrapped__"),_=s&&yl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new dr),u(v,g,r,e,i)}}return!!h&&(i||(i=new dr),pi(n,t,r,e,u,i));
}function Se(n){return oc(n)&&Is(n)==Zn}function We(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=cl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===Y&&!(c in n))return!1}else{var s=new dr;if(e)var h=e(a,l,c,n,t,s);if(!(h===Y?ze(l,a,an|ln,e,s):h))return!1}}return!0}function Le(n){return!(!ic(n)||Ti(n))&&(rc(n)?jl:Nt).test(Xi(n))}function Ce(n){return oc(n)&&de(n)==Yn}function Ue(n){return oc(n)&&Is(n)==Qn;
}function Be(n){return oc(n)&&uc(n.length)&&!!Pr[de(n)]}function Te(n){return"function"==typeof n?n:null==n?Sa:"object"==typeof n?yh(n)?Pe(n[0],n[1]):Ne(n):Da(n)}function $e(n){if(!$i(n))return Zl(n);var t=[];for(var r in cl(n))yl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function De(n){if(!ic(n))return Pi(n);var t=$i(n),r=[];for(var e in n)("constructor"!=e||!t&&yl.call(n,e))&&r.push(e);return r}function Me(n,t){return n<t}function Fe(n,t){var r=-1,e=Vf(n)?el(n.length):[];return vs(n,function(n,u,i){
e[++r]=t(n,u,i)}),e}function Ne(n){var t=mi(n);return 1==t.length&&t[0][2]?Mi(t[0][0],t[0][1]):function(r){return r===n||We(r,n,t)}}function Pe(n,t){return Ci(n)&&Di(t)?Mi(Qi(n),t):function(r){var e=$c(r,n);return e===Y&&e===t?Mc(r,n):ze(t,e,an|ln)}}function qe(n,t,r,e,u){n!==t&&ys(t,function(i,o){if(u||(u=new dr),ic(i))Ze(n,t,o,r,qe,e,u);else{var f=e?e(Gi(n,o),i,o+"",n,t,u):Y;f===Y&&(f=i),Rr(n,o,f)}},Nc)}function Ze(n,t,r,e,u,i,o){var f=Gi(n,r),c=Gi(t,r),a=o.get(c);if(a)return Rr(n,r,a),Y;var l=i?i(f,c,r+"",n,t,o):Y,s=l===Y;
if(s){var h=yh(c),p=!h&&bh(c),_=!h&&!p&&Ah(c);l=c,h||p||_?yh(f)?l=f:Gf(f)?l=Uu(f):p?(s=!1,l=ku(c,!0)):_?(s=!1,l=Eu(c,!0)):l=[]:_c(c)||gh(c)?(l=f,gh(f)?l=Oc(f):ic(f)&&!rc(f)||(l=Ri(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),Rr(n,r,l)}function Ke(n,t){var r=n.length;if(r)return t+=t<0?r:0,Wi(t,r)?n[t]:Y}function Ve(n,t,r){t=t.length?c(t,function(n){return yh(n)?function(t){return ve(t,1===n.length?n[0]:n)}:n}):[Sa];var e=-1;return t=c(t,R(bi())),A(Fe(n,function(n,r,u){return{criteria:c(t,function(t){
return t(n)}),index:++e,value:n}}),function(n,t){return Wu(n,t,r)})}function Ge(n,t){return He(n,t,function(t,r){return Mc(n,r)})}function He(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=ve(n,o);r(f,o)&&iu(i,ju(o,n),f)}return i}function Je(n){return function(t){return ve(t,n)}}function Ye(n,t,r,e){var u=e?d:y,i=-1,o=t.length,f=n;for(n===t&&(t=Uu(t)),r&&(f=c(n,R(r)));++i<o;)for(var a=0,l=t[i],s=r?r(l):l;(a=u(f,s,a,e))>-1;)f!==n&&Sl.call(f,a,1),Sl.call(n,a,1);return n}function Qe(n,t){for(var r=n?t.length:0,e=r-1;r--;){
var u=t[r];if(r==e||u!==i){var i=u;Wi(u)?Sl.call(n,u,1):vu(n,u)}}return n}function Xe(n,t){return n+Ml(Jl()*(t-n+1))}function nu(n,t,r,e){for(var u=-1,i=Kl(Dl((t-n)/(r||1)),0),o=el(i);i--;)o[e?i:++u]=n,n+=r;return o}function tu(n,t){var r="";if(!n||t<1||t>zn)return r;do t%2&&(r+=n),t=Ml(t/2),t&&(n+=n);while(t);return r}function ru(n,t){return Ss(Zi(n,t,Sa),n+"")}function eu(n){return kr(na(n))}function uu(n,t){var r=na(n);return Yi(r,$r(t,0,r.length))}function iu(n,t,r,e){if(!ic(n))return n;t=ju(t,n);
for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Qi(t[u]),a=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return n;if(u!=o){var l=f[c];a=e?e(l,c,f):Y,a===Y&&(a=ic(l)?l:Wi(t[u+1])?[]:{})}zr(f,c,a),f=f[c]}return n}function ou(n){return Yi(na(n))}function fu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=el(u);++e<u;)i[e]=n[e+t];return i}function cu(n,t){var r;return vs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function au(n,t,r){
var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Cn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!yc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return lu(n,t,Sa,r)}function lu(n,t,r,e){var u=0,i=null==n?0:n.length;if(0===i)return 0;t=r(t);for(var o=t!==t,f=null===t,c=yc(t),a=t===Y;u<i;){var l=Ml((u+i)/2),s=r(n[l]),h=s!==Y,p=null===s,_=s===s,v=yc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Vl(i,Ln)}function su(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!Kf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function hu(n){return"number"==typeof n?n:yc(n)?Sn:+n}function pu(n){if("string"==typeof n)return n;if(yh(n))return c(n,pu)+"";if(yc(n))return ps?ps.call(n):"";var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function _u(n,t,r){var e=-1,u=o,i=n.length,c=!0,a=[],l=a;if(r)c=!1,u=f;else if(i>=X){var s=t?null:js(n);if(s)return N(s);c=!1,u=E,l=new vr}else l=t?[]:a;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,c&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;
t&&l.push(p),a.push(h)}else u(l,p,r)||(l!==a&&l.push(p),a.push(h))}return a}function vu(n,t){return t=ju(t,n),n=Ki(n,t),null==n||delete n[Qi(mo(t))]}function gu(n,t,r,e){return iu(n,t,r(ve(n,t)),e)}function yu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?fu(n,e?0:i,e?i+1:u):fu(n,e?i+1:0,e?u:i)}function du(n,t){var r=n;return r instanceof Bt&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function bu(n,t,r){var e=n.length;if(e<2)return e?_u(n[0]):[];
for(var u=-1,i=el(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Vr(i[u]||o,n[f],t,r));return _u(te(i,1),t,r)}function wu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){r(o,n[e],e<i?t[e]:Y)}return o}function mu(n){return Gf(n)?n:[]}function xu(n){return"function"==typeof n?n:Sa}function ju(n,t){return yh(n)?n:Ci(n,t)?[n]:Ws(Rc(n))}function Au(n,t,r){var e=n.length;return r=r===Y?e:r,!t&&r>=e?n:fu(n,t,r)}function ku(n,t){if(t)return n.slice();var r=n.length,e=Il?Il(r):new n.constructor(r);
return n.copy(e),e}function Ou(n){var t=new n.constructor(n.byteLength);return new Ol(t).set(new Ol(n)),t}function Iu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.byteLength)}function Ru(n){var t=new n.constructor(n.source,Dt.exec(n));return t.lastIndex=n.lastIndex,t}function zu(n){return hs?cl(hs.call(n)):{}}function Eu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.length)}function Su(n,t){if(n!==t){var r=n!==Y,e=null===n,u=n===n,i=yc(n),o=t!==Y,f=null===t,c=t===t,a=yc(t);
if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Wu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=Su(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Lu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Kl(i-o,0),l=el(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l;
}function Cu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Kl(i-f,0),s=el(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Uu(n,t){var r=-1,e=n.length;for(t||(t=el(e));++r<e;)t[r]=n[r];return t}function Bu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):Y;c===Y&&(c=n[f]),u?Cr(r,f,c):zr(r,f,c)}return r}function Tu(n,t){return Bu(n,ks(n),t)}function $u(n,t){return Bu(n,Os(n),t);
}function Du(n,r){return function(e,u){var i=yh(e)?t:Sr,o=r?r():{};return i(e,n,bi(u,2),o)}}function Mu(n){return ru(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:Y,o=u>2?r[2]:Y;for(i=n.length>3&&"function"==typeof i?(u--,i):Y,o&&Li(r[0],r[1],o)&&(i=u<3?Y:i,u=1),t=cl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Fu(n,t){return function(r,e){if(null==r)return r;if(!Vf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=cl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Nu(n){return function(t,r,e){
for(var u=-1,i=cl(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(r(i[c],c,i)===!1)break}return t}}function Pu(n,t,r){function e(){return(this&&this!==Xr&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&sn,i=Ku(n);return e}function qu(n){return function(t){t=Rc(t);var r=B(t)?V(t):Y,e=r?r[0]:t.charAt(0),u=r?Au(r,1).join(""):t.slice(1);return e[n]()+u}}function Zu(n){return function(t){return l(Oa(oa(t).replace(Ur,"")),n,"")}}function Ku(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=_s(n.prototype),e=n.apply(r,t);return ic(e)?e:r}}function Vu(t,r,e){function u(){for(var o=arguments.length,f=el(o),c=o,a=di(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:F(f,a);
return o-=l.length,o<e?ui(t,r,Ju,u.placeholder,Y,f,l,Y,Y,e-o):n(this&&this!==Xr&&this instanceof u?i:t,this,f)}var i=Ku(t);return u}function Gu(n){return function(t,r,e){var u=cl(t);if(!Vf(t)){var i=bi(r,3);t=Fc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:Y}}function Hu(n){return _i(function(t){var r=t.length,e=r,u=H.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new sl(tn);if(u&&!o&&"wrapper"==yi(i))var o=new H([],!0)}for(e=o?e:r;++e<r;){
i=t[e];var f=yi(i),c="wrapper"==f?As(i):Y;o=c&&Bi(c[0])&&c[1]==(dn|_n|gn|bn)&&!c[4].length&&1==c[9]?o[yi(c[0])].apply(o,c[3]):1==i.length&&Bi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&yh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Ju(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=el(y),b=y;b--;)d[b]=arguments[b];if(_)var w=di(l),m=L(d,w);if(e&&(d=Lu(d,e,u,_)),i&&(d=Cu(d,i,o,_)),
y-=m,_&&y<a){return ui(n,t,Ju,l.placeholder,r,d,F(d,w),f,c,a-y)}var x=h?r:this,j=p?x[n]:n;return y=d.length,f?d=Vi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==Xr&&this instanceof l&&(j=g||Ku(j)),j.apply(x,d)}var s=t&dn,h=t&sn,p=t&hn,_=t&(_n|vn),v=t&wn,g=p?Y:Ku(n);return l}function Yu(n,t){return function(r,e){return Ae(r,n,t(e),{})}}function Qu(n,t){return function(r,e){var u;if(r===Y&&e===Y)return t;if(r!==Y&&(u=r),e!==Y){if(u===Y)return e;"string"==typeof r||"string"==typeof e?(r=pu(r),
e=pu(e)):(r=hu(r),e=hu(e)),u=n(r,e)}return u}}function Xu(t){return _i(function(r){return r=c(r,R(bi())),ru(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ni(n,t){t=t===Y?" ":pu(t);var r=t.length;if(r<2)return r?tu(t,n):t;var e=tu(t,Dl(n/K(t)));return B(t)?Au(V(e),0,n).join(""):e.slice(0,n)}function ti(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=el(l+c),h=this&&this!==Xr&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];
return n(h,o?e:this,s)}var o=r&sn,f=Ku(t);return i}function ri(n){return function(t,r,e){return e&&"number"!=typeof e&&Li(t,r,e)&&(r=e=Y),t=xc(t),r===Y?(r=t,t=0):r=xc(r),e=e===Y?t<r?1:-1:xc(e),nu(t,r,e,n)}}function ei(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=kc(t),r=kc(r)),n(t,r)}}function ui(n,t,r,e,u,i,o,f,c,a){var l=t&_n,s=l?o:Y,h=l?Y:o,p=l?i:Y,_=l?Y:i;t|=l?gn:yn,t&=~(l?yn:gn),t&pn||(t&=~(sn|hn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(Y,v);return Bi(n)&&zs(g,v),g.placeholder=e,
Hi(g,n,t)}function ii(n){var t=fl[n];return function(n,r){if(n=kc(n),r=null==r?0:Vl(jc(r),292),r&&Pl(n)){var e=(Rc(n)+"e").split("e");return e=(Rc(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oi(n){return function(t){var r=Is(t);return r==Zn?D(t):r==Qn?P(t):I(t,n(t))}}function fi(n,t,r,e,u,i,o,f){var c=t&hn;if(!c&&"function"!=typeof n)throw new sl(tn);var a=e?e.length:0;if(a||(t&=~(gn|yn),e=u=Y),o=o===Y?o:Kl(jc(o),0),f=f===Y?f:jc(f),a-=u?u.length:0,t&yn){var l=e,s=u;
e=u=Y}var h=c?Y:As(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Ni(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===Y?c?0:n.length:Kl(p[9]-a,0),!f&&t&(_n|vn)&&(t&=~(_n|vn)),t&&t!=sn)_=t==_n||t==vn?Vu(n,t,f):t!=gn&&t!=(sn|gn)||u.length?Ju.apply(Y,p):ti(n,t,r,e);else var _=Pu(n,t,r);return Hi((h?bs:zs)(_,p),n,t)}function ci(n,t,r,e){return n===Y||Kf(n,_l[r])&&!yl.call(e,r)?t:n}function ai(n,t,r,e,u,i){return ic(n)&&ic(t)&&(i.set(t,n),qe(n,t,Y,ai,i),i.delete(t)),n}function li(n){return _c(n)?Y:n}function si(n,t,r,e,u,i){
var o=r&an,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n),l=i.get(t);if(a&&l)return a==t&&l==n;var s=-1,p=!0,_=r&ln?new vr:Y;for(i.set(n,t),i.set(t,n);++s<f;){var v=n[s],g=t[s];if(e)var y=o?e(g,v,s,t,n,i):e(v,g,s,n,t,i);if(y!==Y){if(y)continue;p=!1;break}if(_){if(!h(t,function(n,t){if(!E(_,t)&&(v===n||u(v,n,r,e,i)))return _.push(t)})){p=!1;break}}else if(v!==g&&!u(v,g,r,e,i)){p=!1;break}}return i.delete(n),i.delete(t),p}function hi(n,t,r,e,u,i,o){switch(r){case it:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;
n=n.buffer,t=t.buffer;case ut:return!(n.byteLength!=t.byteLength||!i(new Ol(n),new Ol(t)));case Dn:case Mn:case Kn:return Kf(+n,+t);case Nn:return n.name==t.name&&n.message==t.message;case Yn:case Xn:return n==t+"";case Zn:var f=D;case Qn:var c=e&an;if(f||(f=N),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=ln,o.set(n,t);var l=si(f(n),f(t),e,u,i,o);return o.delete(n),l;case nt:if(hs)return hs.call(n)==hs.call(t)}return!1}function pi(n,t,r,e,u,i){var o=r&an,f=vi(n),c=f.length;if(c!=vi(t).length&&!o)return!1;
for(var a=c;a--;){var l=f[a];if(!(o?l in t:yl.call(t,l)))return!1}var s=i.get(n),h=i.get(t);if(s&&h)return s==t&&h==n;var p=!0;i.set(n,t),i.set(t,n);for(var _=o;++a<c;){l=f[a];var v=n[l],g=t[l];if(e)var y=o?e(g,v,l,t,n,i):e(v,g,l,n,t,i);if(!(y===Y?v===g||u(v,g,r,e,i):y)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=n.constructor,b=t.constructor;d!=b&&"constructor"in n&&"constructor"in t&&!("function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(n),
i.delete(t),p}function _i(n){return Ss(Zi(n,Y,ho),n+"")}function vi(n){return ye(n,Fc,ks)}function gi(n){return ye(n,Nc,Os)}function yi(n){for(var t=n.name+"",r=is[t],e=yl.call(is,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function di(n){return(yl.call(q,"placeholder")?q:n).placeholder}function bi(){var n=q.iteratee||Wa;return n=n===Wa?Te:n,arguments.length?n(arguments[0],arguments[1]):n}function wi(n,t){var r=n.__data__;return Ui(t)?r["string"==typeof t?"string":"hash"]:r.map;
}function mi(n){for(var t=Fc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Di(u)]}return t}function xi(n,t){var r=U(n,t);return Le(r)?r:Y}function ji(n){var t=yl.call(n,Cl),r=n[Cl];try{n[Cl]=Y;var e=!0}catch(n){}var u=wl.call(n);return e&&(t?n[Cl]=r:delete n[Cl]),u}function Ai(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Vl(t,n+o);break;case"takeRight":n=Kl(n,t-o)}}return{start:n,end:t}}function ki(n){var t=n.match(Ct);
return t?t[1].split(Ut):[]}function Oi(n,t,r){t=ju(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Qi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&uc(u)&&Wi(o,u)&&(yh(n)||gh(n)))}function Ii(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&yl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ri(n){return"function"!=typeof n.constructor||$i(n)?{}:_s(Rl(n))}function zi(n,t,r){var e=n.constructor;switch(t){case ut:return Ou(n);
case Dn:case Mn:return new e(+n);case it:return Iu(n,r);case ot:case ft:case ct:case at:case lt:case st:case ht:case pt:case _t:return Eu(n,r);case Zn:return new e;case Kn:case Xn:return new e(n);case Yn:return Ru(n);case Qn:return new e;case nt:return zu(n)}}function Ei(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Lt,"{\n/* [wrapped with "+t+"] */\n")}function Si(n){return yh(n)||gh(n)||!!(Wl&&n&&n[Wl])}function Wi(n,t){var r=typeof n;
return t=null==t?zn:t,!!t&&("number"==r||"symbol"!=r&&qt.test(n))&&n>-1&&n%1==0&&n<t}function Li(n,t,r){if(!ic(r))return!1;var e=typeof t;return!!("number"==e?Vf(r)&&Wi(t,r.length):"string"==e&&t in r)&&Kf(r[t],n)}function Ci(n,t){if(yh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!yc(n))||(Ot.test(n)||!kt.test(n)||null!=t&&n in cl(t))}function Ui(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Bi(n){
var t=yi(n),r=q[t];if("function"!=typeof r||!(t in Bt.prototype))return!1;if(n===r)return!0;var e=As(r);return!!e&&n===e[0]}function Ti(n){return!!bl&&bl in n}function $i(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||_l)}function Di(n){return n===n&&!ic(n)}function Mi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==Y||n in cl(r)))}}function Fi(n){var t=Wf(n,function(n){return r.size===en&&r.clear(),n}),r=t.cache;return t}function Ni(n,t){var r=n[1],e=t[1],u=r|e,i=u<(sn|hn|dn),o=e==dn&&r==_n||e==dn&&r==bn&&n[7].length<=t[8]||e==(dn|bn)&&t[7].length<=t[8]&&r==_n;
if(!i&&!o)return n;e&sn&&(n[2]=t[2],u|=r&sn?0:pn);var f=t[3];if(f){var c=n[3];n[3]=c?Lu(c,f,t[4]):f,n[4]=c?F(n[3],un):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Cu(c,f,t[6]):f,n[6]=c?F(n[5],un):t[6]),f=t[7],f&&(n[7]=f),e&dn&&(n[8]=null==n[8]?t[8]:Vl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Pi(n){var t=[];if(null!=n)for(var r in cl(n))t.push(r);return t}function qi(n){return wl.call(n)}function Zi(t,r,e){return r=Kl(r===Y?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Kl(u.length-r,0),f=el(o);++i<o;)f[i]=u[r+i];
i=-1;for(var c=el(r+1);++i<r;)c[i]=u[i];return c[r]=e(f),n(t,this,c)}}function Ki(n,t){return t.length<2?n:ve(n,fu(t,0,-1))}function Vi(n,t){for(var r=n.length,e=Vl(t.length,r),u=Uu(n);e--;){var i=t[e];n[e]=Wi(i,r)?u[i]:Y}return n}function Gi(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Hi(n,t,r){var e=t+"";return Ss(n,Ei(e,no(ki(e),r)))}function Ji(n){var t=0,r=0;return function(){var e=Gl(),u=An-(e-r);if(r=e,u>0){if(++t>=jn)return arguments[0]}else t=0;
return n.apply(Y,arguments)}}function Yi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===Y?e:t;++r<t;){var i=Xe(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function Qi(n){if("string"==typeof n||yc(n))return n;var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function Xi(n){if(null!=n){try{return gl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function no(n,t){return r(Un,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function to(n){if(n instanceof Bt)return n.clone();var t=new H(n.__wrapped__,n.__chain__);
return t.__actions__=Uu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function ro(n,t,r){t=(r?Li(n,t,r):t===Y)?1:Kl(jc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=el(Dl(e/t));u<e;)o[i++]=fu(n,u,u+=t);return o}function eo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function uo(){var n=arguments.length;if(!n)return[];for(var t=el(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return a(yh(r)?Uu(r):[r],te(t,1));
}function io(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),fu(n,t<0?0:t,e)):[]}function oo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,0,t<0?0:t)):[]}function fo(n,t){return n&&n.length?yu(n,bi(t,3),!0,!0):[]}function co(n,t){return n&&n.length?yu(n,bi(t,3),!0):[]}function ao(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Li(n,t,r)&&(r=0,e=u),Qr(n,t,r,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);
return u<0&&(u=Kl(e+u,0)),g(n,bi(t,3),u)}function so(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==Y&&(u=jc(r),u=r<0?Kl(e+u,0):Vl(u,e-1)),g(n,bi(t,3),u,!0)}function ho(n){return(null==n?0:n.length)?te(n,1):[]}function po(n){return(null==n?0:n.length)?te(n,Rn):[]}function _o(n,t){return(null==n?0:n.length)?(t=t===Y?1:jc(t),te(n,t)):[]}function vo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function go(n){return n&&n.length?n[0]:Y}function yo(n,t,r){
var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);return u<0&&(u=Kl(e+u,0)),y(n,t,u)}function bo(n){return(null==n?0:n.length)?fu(n,0,-1):[]}function wo(n,t){return null==n?"":ql.call(n,t)}function mo(n){var t=null==n?0:n.length;return t?n[t-1]:Y}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==Y&&(u=jc(r),u=u<0?Kl(e+u,0):Vl(u,e-1)),t===t?Z(n,t,u):g(n,b,u,!0)}function jo(n,t){return n&&n.length?Ke(n,jc(t)):Y}function Ao(n,t){return n&&n.length&&t&&t.length?Ye(n,t):n;
}function ko(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,bi(r,2)):n}function Oo(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,Y,r):n}function Io(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=bi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Qe(n,u),r}function Ro(n){return null==n?n:Yl.call(n)}function zo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Li(n,t,r)?(t=0,r=e):(t=null==t?0:jc(t),r=r===Y?e:jc(r)),fu(n,t,r)):[]}function Eo(n,t){
return au(n,t)}function So(n,t,r){return lu(n,t,bi(r,2))}function Wo(n,t){var r=null==n?0:n.length;if(r){var e=au(n,t);if(e<r&&Kf(n[e],t))return e}return-1}function Lo(n,t){return au(n,t,!0)}function Co(n,t,r){return lu(n,t,bi(r,2),!0)}function Uo(n,t){if(null==n?0:n.length){var r=au(n,t,!0)-1;if(Kf(n[r],t))return r}return-1}function Bo(n){return n&&n.length?su(n):[]}function To(n,t){return n&&n.length?su(n,bi(t,2)):[]}function $o(n){var t=null==n?0:n.length;return t?fu(n,1,t):[]}function Do(n,t,r){
return n&&n.length?(t=r||t===Y?1:jc(t),fu(n,0,t<0?0:t)):[]}function Mo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,t<0?0:t,e)):[]}function Fo(n,t){return n&&n.length?yu(n,bi(t,3),!1,!0):[]}function No(n,t){return n&&n.length?yu(n,bi(t,3)):[]}function Po(n){return n&&n.length?_u(n):[]}function qo(n,t){return n&&n.length?_u(n,bi(t,2)):[]}function Zo(n,t){return t="function"==typeof t?t:Y,n&&n.length?_u(n,Y,t):[]}function Ko(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){
if(Gf(n))return t=Kl(n.length,t),!0}),O(t,function(t){return c(n,m(t))})}function Vo(t,r){if(!t||!t.length)return[];var e=Ko(t);return null==r?e:c(e,function(t){return n(r,Y,t)})}function Go(n,t){return wu(n||[],t||[],zr)}function Ho(n,t){return wu(n||[],t||[],iu)}function Jo(n){var t=q(n);return t.__chain__=!0,t}function Yo(n,t){return t(n),n}function Qo(n,t){return t(n)}function Xo(){return Jo(this)}function nf(){return new H(this.value(),this.__chain__)}function tf(){this.__values__===Y&&(this.__values__=mc(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?Y:this.__values__[this.__index__++]}}function rf(){return this}function ef(n){for(var t,r=this;r instanceof G;){var e=to(r);e.__index__=0,e.__values__=Y,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function uf(){var n=this.__wrapped__;if(n instanceof Bt){var t=n;return this.__actions__.length&&(t=new Bt(this)),t=t.reverse(),t.__actions__.push({func:Qo,args:[Ro],thisArg:Y}),new H(t,this.__chain__)}return this.thru(Ro);
}function of(){return du(this.__wrapped__,this.__actions__)}function ff(n,t,r){var e=yh(n)?u:Gr;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function cf(n,t){return(yh(n)?i:ne)(n,bi(t,3))}function af(n,t){return te(vf(n,t),1)}function lf(n,t){return te(vf(n,t),Rn)}function sf(n,t,r){return r=r===Y?1:jc(r),te(vf(n,t),r)}function hf(n,t){return(yh(n)?r:vs)(n,bi(t,3))}function pf(n,t){return(yh(n)?e:gs)(n,bi(t,3))}function _f(n,t,r,e){n=Vf(n)?n:na(n),r=r&&!e?jc(r):0;var u=n.length;return r<0&&(r=Kl(u+r,0)),
gc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&y(n,t,r)>-1}function vf(n,t){return(yh(n)?c:Fe)(n,bi(t,3))}function gf(n,t,r,e){return null==n?[]:(yh(t)||(t=null==t?[]:[t]),r=e?Y:r,yh(r)||(r=null==r?[]:[r]),Ve(n,t,r))}function yf(n,t,r){var e=yh(n)?l:j,u=arguments.length<3;return e(n,bi(t,4),r,u,vs)}function df(n,t,r){var e=yh(n)?s:j,u=arguments.length<3;return e(n,bi(t,4),r,u,gs)}function bf(n,t){return(yh(n)?i:ne)(n,Lf(bi(t,3)))}function wf(n){return(yh(n)?kr:eu)(n)}function mf(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),
(yh(n)?Or:uu)(n,t)}function xf(n){return(yh(n)?Ir:ou)(n)}function jf(n){if(null==n)return 0;if(Vf(n))return gc(n)?K(n):n.length;var t=Is(n);return t==Zn||t==Qn?n.size:$e(n).length}function Af(n,t,r){var e=yh(n)?h:cu;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function kf(n,t){if("function"!=typeof t)throw new sl(tn);return n=jc(n),function(){if(--n<1)return t.apply(this,arguments)}}function Of(n,t,r){return t=r?Y:t,t=n&&null==t?n.length:t,fi(n,dn,Y,Y,Y,Y,t)}function If(n,t){var r;if("function"!=typeof t)throw new sl(tn);
return n=jc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=Y),r}}function Rf(n,t,r){t=r?Y:t;var e=fi(n,_n,Y,Y,Y,Y,Y,t);return e.placeholder=Rf.placeholder,e}function zf(n,t,r){t=r?Y:t;var e=fi(n,vn,Y,Y,Y,Y,Y,t);return e.placeholder=zf.placeholder,e}function Ef(n,t,r){function e(t){var r=h,e=p;return h=p=Y,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Es(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Vl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===Y||r>=t||r<0||w&&e>=_;
}function f(){var n=ih();return o(n)?c(n):(g=Es(f,i(n)),Y)}function c(n){return g=Y,m&&h?e(n):(h=p=Y,v)}function a(){g!==Y&&xs(g),d=0,h=y=p=g=Y}function l(){return g===Y?v:c(ih())}function s(){var n=ih(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===Y)return u(y);if(w)return xs(g),g=Es(f,t),e(y)}return g===Y&&(g=Es(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new sl(tn);return t=kc(t)||0,ic(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Kl(kc(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),
s.cancel=a,s.flush=l,s}function Sf(n){return fi(n,wn)}function Wf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new sl(tn);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Wf.Cache||ar),r}function Lf(n){if("function"!=typeof n)throw new sl(tn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:
return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Cf(n){return If(2,n)}function Uf(n,t){if("function"!=typeof n)throw new sl(tn);return t=t===Y?t:jc(t),ru(n,t)}function Bf(t,r){if("function"!=typeof t)throw new sl(tn);return r=null==r?0:Kl(jc(r),0),ru(function(e){var u=e[r],i=Au(e,0,r);return u&&a(i,u),n(t,this,i)})}function Tf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new sl(tn);return ic(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),
Ef(n,t,{leading:e,maxWait:t,trailing:u})}function $f(n){return Of(n,1)}function Df(n,t){return sh(xu(t),n)}function Mf(){if(!arguments.length)return[];var n=arguments[0];return yh(n)?n:[n]}function Ff(n){return Dr(n,cn)}function Nf(n,t){return t="function"==typeof t?t:Y,Dr(n,cn,t)}function Pf(n){return Dr(n,on|cn)}function qf(n,t){return t="function"==typeof t?t:Y,Dr(n,on|cn,t)}function Zf(n,t){return null==t||Zr(n,t,Fc(t))}function Kf(n,t){return n===t||n!==n&&t!==t}function Vf(n){return null!=n&&uc(n.length)&&!rc(n);
}function Gf(n){return oc(n)&&Vf(n)}function Hf(n){return n===!0||n===!1||oc(n)&&de(n)==Dn}function Jf(n){return oc(n)&&1===n.nodeType&&!_c(n)}function Yf(n){if(null==n)return!0;if(Vf(n)&&(yh(n)||"string"==typeof n||"function"==typeof n.splice||bh(n)||Ah(n)||gh(n)))return!n.length;var t=Is(n);if(t==Zn||t==Qn)return!n.size;if($i(n))return!$e(n).length;for(var r in n)if(yl.call(n,r))return!1;return!0}function Qf(n,t){return ze(n,t)}function Xf(n,t,r){r="function"==typeof r?r:Y;var e=r?r(n,t):Y;return e===Y?ze(n,t,Y,r):!!e;
}function nc(n){if(!oc(n))return!1;var t=de(n);return t==Nn||t==Fn||"string"==typeof n.message&&"string"==typeof n.name&&!_c(n)}function tc(n){return"number"==typeof n&&Pl(n)}function rc(n){if(!ic(n))return!1;var t=de(n);return t==Pn||t==qn||t==$n||t==Jn}function ec(n){return"number"==typeof n&&n==jc(n)}function uc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=zn}function ic(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function oc(n){return null!=n&&"object"==typeof n}function fc(n,t){
return n===t||We(n,t,mi(t))}function cc(n,t,r){return r="function"==typeof r?r:Y,We(n,t,mi(t),r)}function ac(n){return pc(n)&&n!=+n}function lc(n){if(Rs(n))throw new il(nn);return Le(n)}function sc(n){return null===n}function hc(n){return null==n}function pc(n){return"number"==typeof n||oc(n)&&de(n)==Kn}function _c(n){if(!oc(n)||de(n)!=Gn)return!1;var t=Rl(n);if(null===t)return!0;var r=yl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&gl.call(r)==ml}function vc(n){
return ec(n)&&n>=-zn&&n<=zn}function gc(n){return"string"==typeof n||!yh(n)&&oc(n)&&de(n)==Xn}function yc(n){return"symbol"==typeof n||oc(n)&&de(n)==nt}function dc(n){return n===Y}function bc(n){return oc(n)&&Is(n)==rt}function wc(n){return oc(n)&&de(n)==et}function mc(n){if(!n)return[];if(Vf(n))return gc(n)?V(n):Uu(n);if(Ll&&n[Ll])return $(n[Ll]());var t=Is(n);return(t==Zn?D:t==Qn?N:na)(n)}function xc(n){if(!n)return 0===n?n:0;if(n=kc(n),n===Rn||n===-Rn){return(n<0?-1:1)*En}return n===n?n:0}function jc(n){
var t=xc(n),r=t%1;return t===t?r?t-r:t:0}function Ac(n){return n?$r(jc(n),0,Wn):0}function kc(n){if("number"==typeof n)return n;if(yc(n))return Sn;if(ic(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ic(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Et,"");var r=Ft.test(n);return r||Pt.test(n)?Jr(n.slice(2),r?2:8):Mt.test(n)?Sn:+n}function Oc(n){return Bu(n,Nc(n))}function Ic(n){return n?$r(jc(n),-zn,zn):0===n?n:0}function Rc(n){return null==n?"":pu(n)}function zc(n,t){var r=_s(n);
return null==t?r:Wr(r,t)}function Ec(n,t){return v(n,bi(t,3),ee)}function Sc(n,t){return v(n,bi(t,3),ue)}function Wc(n,t){return null==n?n:ys(n,bi(t,3),Nc)}function Lc(n,t){return null==n?n:ds(n,bi(t,3),Nc)}function Cc(n,t){return n&&ee(n,bi(t,3))}function Uc(n,t){return n&&ue(n,bi(t,3))}function Bc(n){return null==n?[]:se(n,Fc(n))}function Tc(n){return null==n?[]:se(n,Nc(n))}function $c(n,t,r){var e=null==n?Y:ve(n,t);return e===Y?r:e}function Dc(n,t){return null!=n&&Oi(n,t,we)}function Mc(n,t){return null!=n&&Oi(n,t,me);
}function Fc(n){return Vf(n)?Ar(n):$e(n)}function Nc(n){return Vf(n)?Ar(n,!0):De(n)}function Pc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,t(n,e,u),n)}),r}function qc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,e,t(n,e,u))}),r}function Zc(n,t){return Kc(n,Lf(bi(t)))}function Kc(n,t){if(null==n)return{};var r=c(gi(n),function(n){return[n]});return t=bi(t),He(n,r,function(n,r){return t(n,r[0])})}function Vc(n,t,r){t=ju(t,n);var e=-1,u=t.length;for(u||(u=1,n=Y);++e<u;){var i=null==n?Y:n[Qi(t[e])];
i===Y&&(e=u,i=r),n=rc(i)?i.call(n):i}return n}function Gc(n,t,r){return null==n?n:iu(n,t,r)}function Hc(n,t,r,e){return e="function"==typeof e?e:Y,null==n?n:iu(n,t,r,e)}function Jc(n,t,e){var u=yh(n),i=u||bh(n)||Ah(n);if(t=bi(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:ic(n)&&rc(o)?_s(Rl(n)):{}}return(i?r:ee)(n,function(n,r,u){return t(e,n,r,u)}),e}function Yc(n,t){return null==n||vu(n,t)}function Qc(n,t,r){return null==n?n:gu(n,t,xu(r))}function Xc(n,t,r,e){return e="function"==typeof e?e:Y,
null==n?n:gu(n,t,xu(r),e)}function na(n){return null==n?[]:z(n,Fc(n))}function ta(n){return null==n?[]:z(n,Nc(n))}function ra(n,t,r){return r===Y&&(r=t,t=Y),r!==Y&&(r=kc(r),r=r===r?r:0),t!==Y&&(t=kc(t),t=t===t?t:0),$r(kc(n),t,r)}function ea(n,t,r){return t=xc(t),r===Y?(r=t,t=0):r=xc(r),n=kc(n),xe(n,t,r)}function ua(n,t,r){if(r&&"boolean"!=typeof r&&Li(n,t,r)&&(t=r=Y),r===Y&&("boolean"==typeof t?(r=t,t=Y):"boolean"==typeof n&&(r=n,n=Y)),n===Y&&t===Y?(n=0,t=1):(n=xc(n),t===Y?(t=n,n=0):t=xc(t)),n>t){
var e=n;n=t,t=e}if(r||n%1||t%1){var u=Jl();return Vl(n+u*(t-n+Hr("1e-"+((u+"").length-1))),t)}return Xe(n,t)}function ia(n){return Jh(Rc(n).toLowerCase())}function oa(n){return n=Rc(n),n&&n.replace(Zt,he).replace(Br,"")}function fa(n,t,r){n=Rc(n),t=pu(t);var e=n.length;r=r===Y?e:$r(jc(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function ca(n){return n=Rc(n),n&&mt.test(n)?n.replace(bt,pe):n}function aa(n){return n=Rc(n),n&&zt.test(n)?n.replace(Rt,"\\$&"):n}function la(n,t,r){n=Rc(n),t=jc(t);
var e=t?K(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ni(Ml(u),r)+n+ni(Dl(u),r)}function sa(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?n+ni(t-e,r):n}function ha(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?ni(t-e,r)+n:n}function pa(n,t,r){return r||null==t?t=0:t&&(t=+t),Hl(Rc(n).replace(St,""),t||0)}function _a(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),tu(Rc(n),t)}function va(){var n=arguments,t=Rc(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function ga(n,t,r){return r&&"number"!=typeof r&&Li(n,t,r)&&(t=r=Y),
(r=r===Y?Wn:r>>>0)?(n=Rc(n),n&&("string"==typeof t||null!=t&&!xh(t))&&(t=pu(t),!t&&B(n))?Au(V(n),0,r):n.split(t,r)):[]}function ya(n,t,r){return n=Rc(n),r=null==r?0:$r(jc(r),0,n.length),t=pu(t),n.slice(r,r+t.length)==t}function da(n,t,r){var e=q.templateSettings;r&&Li(n,t,r)&&(t=Y),n=Rc(n),t=zh({},t,e,ci);var u,i,o=zh({},t.imports,e.imports,ci),f=Fc(o),c=z(o,f),a=0,l=t.interpolate||Kt,s="__p += '",h=al((t.escape||Kt).source+"|"+l.source+"|"+(l===At?$t:Kt).source+"|"+(t.evaluate||Kt).source+"|$","g"),p="//# sourceURL="+(yl.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nr+"]")+"\n";
n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Vt,C),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=yl.call(t,"variable")&&t.variable;_||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(vt,""):s).replace(gt,"$1").replace(yt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";
var v=Yh(function(){return ol(f,p+"return "+s).apply(Y,c)});if(v.source=s,nc(v))throw v;return v}function ba(n){return Rc(n).toLowerCase()}function wa(n){return Rc(n).toUpperCase()}function ma(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Et,"");if(!n||!(t=pu(t)))return n;var e=V(n),u=V(t);return Au(e,S(e,u),W(e,u)+1).join("")}function xa(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Wt,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,0,W(e,V(t))+1).join("")}function ja(n,t,r){if(n=Rc(n),
n&&(r||t===Y))return n.replace(St,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,S(e,V(t))).join("")}function Aa(n,t){var r=mn,e=xn;if(ic(t)){var u="separator"in t?t.separator:u;r="length"in t?jc(t.length):r,e="omission"in t?pu(t.omission):e}n=Rc(n);var i=n.length;if(B(n)){var o=V(n);i=o.length}if(r>=i)return n;var f=r-K(e);if(f<1)return e;var c=o?Au(o,0,f).join(""):n.slice(0,f);if(u===Y)return c+e;if(o&&(f+=c.length-f),xh(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=al(u.source,Rc(Dt.exec(u))+"g")),
u.lastIndex=0;a=u.exec(l);)var s=a.index;c=c.slice(0,s===Y?f:s)}}else if(n.indexOf(pu(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function ka(n){return n=Rc(n),n&&wt.test(n)?n.replace(dt,_e):n}function Oa(n,t,r){return n=Rc(n),t=r?Y:t,t===Y?T(n)?J(n):_(n):n.match(t)||[]}function Ia(t){var r=null==t?0:t.length,e=bi();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new sl(tn);return[e(n[0]),n[1]]}):[],ru(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e);
}})}function Ra(n){return Mr(Dr(n,on))}function za(n){return function(){return n}}function Ea(n,t){return null==n||n!==n?t:n}function Sa(n){return n}function Wa(n){return Te("function"==typeof n?n:Dr(n,on))}function La(n){return Ne(Dr(n,on))}function Ca(n,t){return Pe(n,Dr(t,on))}function Ua(n,t,e){var u=Fc(t),i=se(t,u);null!=e||ic(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=se(t,Fc(t)));var o=!(ic(e)&&"chain"in e&&!e.chain),f=rc(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){
var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Uu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Ba(){return Xr._===this&&(Xr._=xl),this}function Ta(){}function $a(n){return n=jc(n),ru(function(t){return Ke(t,n)})}function Da(n){return Ci(n)?m(Qi(n)):Je(n)}function Ma(n){return function(t){return null==n?Y:ve(n,t)}}function Fa(){return[]}function Na(){return!1}function Pa(){return{};
}function qa(){return""}function Za(){return!0}function Ka(n,t){if(n=jc(n),n<1||n>zn)return[];var r=Wn,e=Vl(n,Wn);t=bi(t),n-=Wn;for(var u=O(e,t);++r<n;)t(r);return u}function Va(n){return yh(n)?c(n,Qi):yc(n)?[n]:Uu(Ws(Rc(n)))}function Ga(n){var t=++dl;return Rc(n)+t}function Ha(n){return n&&n.length?Yr(n,Sa,be):Y}function Ja(n,t){return n&&n.length?Yr(n,bi(t,2),be):Y}function Ya(n){return w(n,Sa)}function Qa(n,t){return w(n,bi(t,2))}function Xa(n){return n&&n.length?Yr(n,Sa,Me):Y}function nl(n,t){
return n&&n.length?Yr(n,bi(t,2),Me):Y}function tl(n){return n&&n.length?k(n,Sa):0}function rl(n,t){return n&&n.length?k(n,bi(t,2)):0}x=null==x?Xr:ge.defaults(Xr.Object(),x,ge.pick(Xr,Fr));var el=x.Array,ul=x.Date,il=x.Error,ol=x.Function,fl=x.Math,cl=x.Object,al=x.RegExp,ll=x.String,sl=x.TypeError,hl=el.prototype,pl=ol.prototype,_l=cl.prototype,vl=x["__core-js_shared__"],gl=pl.toString,yl=_l.hasOwnProperty,dl=0,bl=function(){var n=/[^.]+$/.exec(vl&&vl.keys&&vl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:"";
}(),wl=_l.toString,ml=gl.call(cl),xl=Xr._,jl=al("^"+gl.call(yl).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Al=re?x.Buffer:Y,kl=x.Symbol,Ol=x.Uint8Array,Il=Al?Al.allocUnsafe:Y,Rl=M(cl.getPrototypeOf,cl),zl=cl.create,El=_l.propertyIsEnumerable,Sl=hl.splice,Wl=kl?kl.isConcatSpreadable:Y,Ll=kl?kl.iterator:Y,Cl=kl?kl.toStringTag:Y,Ul=function(){try{var n=xi(cl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Bl=x.clearTimeout!==Xr.clearTimeout&&x.clearTimeout,Tl=ul&&ul.now!==Xr.Date.now&&ul.now,$l=x.setTimeout!==Xr.setTimeout&&x.setTimeout,Dl=fl.ceil,Ml=fl.floor,Fl=cl.getOwnPropertySymbols,Nl=Al?Al.isBuffer:Y,Pl=x.isFinite,ql=hl.join,Zl=M(cl.keys,cl),Kl=fl.max,Vl=fl.min,Gl=ul.now,Hl=x.parseInt,Jl=fl.random,Yl=hl.reverse,Ql=xi(x,"DataView"),Xl=xi(x,"Map"),ns=xi(x,"Promise"),ts=xi(x,"Set"),rs=xi(x,"WeakMap"),es=xi(cl,"create"),us=rs&&new rs,is={},os=Xi(Ql),fs=Xi(Xl),cs=Xi(ns),as=Xi(ts),ls=Xi(rs),ss=kl?kl.prototype:Y,hs=ss?ss.valueOf:Y,ps=ss?ss.toString:Y,_s=function(){
function n(){}return function(t){if(!ic(t))return{};if(zl)return zl(t);n.prototype=t;var r=new n;return n.prototype=Y,r}}();q.templateSettings={escape:xt,evaluate:jt,interpolate:At,variable:"",imports:{_:q}},q.prototype=G.prototype,q.prototype.constructor=q,H.prototype=_s(G.prototype),H.prototype.constructor=H,Bt.prototype=_s(G.prototype),Bt.prototype.constructor=Bt,Yt.prototype.clear=Qt,Yt.prototype.delete=Xt,Yt.prototype.get=nr,Yt.prototype.has=tr,Yt.prototype.set=rr,er.prototype.clear=ur,er.prototype.delete=ir,
er.prototype.get=or,er.prototype.has=fr,er.prototype.set=cr,ar.prototype.clear=lr,ar.prototype.delete=sr,ar.prototype.get=hr,ar.prototype.has=pr,ar.prototype.set=_r,vr.prototype.add=vr.prototype.push=gr,vr.prototype.has=yr,dr.prototype.clear=br,dr.prototype.delete=wr,dr.prototype.get=mr,dr.prototype.has=xr,dr.prototype.set=jr;var vs=Fu(ee),gs=Fu(ue,!0),ys=Nu(),ds=Nu(!0),bs=us?function(n,t){return us.set(n,t),n}:Sa,ws=Ul?function(n,t){return Ul(n,"toString",{configurable:!0,enumerable:!1,value:za(t),
writable:!0})}:Sa,ms=ru,xs=Bl||function(n){return Xr.clearTimeout(n)},js=ts&&1/N(new ts([,-0]))[1]==Rn?function(n){return new ts(n)}:Ta,As=us?function(n){return us.get(n)}:Ta,ks=Fl?function(n){return null==n?[]:(n=cl(n),i(Fl(n),function(t){return El.call(n,t)}))}:Fa,Os=Fl?function(n){for(var t=[];n;)a(t,ks(n)),n=Rl(n);return t}:Fa,Is=de;(Ql&&Is(new Ql(new ArrayBuffer(1)))!=it||Xl&&Is(new Xl)!=Zn||ns&&Is(ns.resolve())!=Hn||ts&&Is(new ts)!=Qn||rs&&Is(new rs)!=rt)&&(Is=function(n){var t=de(n),r=t==Gn?n.constructor:Y,e=r?Xi(r):"";
if(e)switch(e){case os:return it;case fs:return Zn;case cs:return Hn;case as:return Qn;case ls:return rt}return t});var Rs=vl?rc:Na,zs=Ji(bs),Es=$l||function(n,t){return Xr.setTimeout(n,t)},Ss=Ji(ws),Ws=Fi(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(It,function(n,r,e,u){t.push(e?u.replace(Tt,"$1"):r||n)}),t}),Ls=ru(function(n,t){return Gf(n)?Vr(n,te(t,1,Gf,!0)):[]}),Cs=ru(function(n,t){var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),bi(r,2)):[]}),Us=ru(function(n,t){
var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),Y,r):[]}),Bs=ru(function(n){var t=c(n,mu);return t.length&&t[0]===n[0]?je(t):[]}),Ts=ru(function(n){var t=mo(n),r=c(n,mu);return t===mo(r)?t=Y:r.pop(),r.length&&r[0]===n[0]?je(r,bi(t,2)):[]}),$s=ru(function(n){var t=mo(n),r=c(n,mu);return t="function"==typeof t?t:Y,t&&r.pop(),r.length&&r[0]===n[0]?je(r,Y,t):[]}),Ds=ru(Ao),Ms=_i(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return Qe(n,c(t,function(n){return Wi(n,r)?+n:n}).sort(Su)),e}),Fs=ru(function(n){
return _u(te(n,1,Gf,!0))}),Ns=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),_u(te(n,1,Gf,!0),bi(t,2))}),Ps=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,_u(te(n,1,Gf,!0),Y,t)}),qs=ru(function(n,t){return Gf(n)?Vr(n,t):[]}),Zs=ru(function(n){return bu(i(n,Gf))}),Ks=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),bu(i(n,Gf),bi(t,2))}),Vs=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,bu(i(n,Gf),Y,t)}),Gs=ru(Ko),Hs=ru(function(n){var t=n.length,r=t>1?n[t-1]:Y;return r="function"==typeof r?(n.pop(),
r):Y,Vo(n,r)}),Js=_i(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Bt&&Wi(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qo,args:[u],thisArg:Y}),new H(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(Y),n})):this.thru(u)}),Ys=Du(function(n,t,r){yl.call(n,r)?++n[r]:Cr(n,r,1)}),Qs=Gu(lo),Xs=Gu(so),nh=Du(function(n,t,r){yl.call(n,r)?n[r].push(t):Cr(n,r,[t])}),th=ru(function(t,r,e){var u=-1,i="function"==typeof r,o=Vf(t)?el(t.length):[];
return vs(t,function(t){o[++u]=i?n(r,t,e):ke(t,r,e)}),o}),rh=Du(function(n,t,r){Cr(n,r,t)}),eh=Du(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),uh=ru(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Li(n,t[0],t[1])?t=[]:r>2&&Li(t[0],t[1],t[2])&&(t=[t[0]]),Ve(n,te(t,1),[])}),ih=Tl||function(){return Xr.Date.now()},oh=ru(function(n,t,r){var e=sn;if(r.length){var u=F(r,di(oh));e|=gn}return fi(n,e,t,r,u)}),fh=ru(function(n,t,r){var e=sn|hn;if(r.length){var u=F(r,di(fh));e|=gn;
}return fi(t,e,n,r,u)}),ch=ru(function(n,t){return Kr(n,1,t)}),ah=ru(function(n,t,r){return Kr(n,kc(t)||0,r)});Wf.Cache=ar;var lh=ms(function(t,r){r=1==r.length&&yh(r[0])?c(r[0],R(bi())):c(te(r,1),R(bi()));var e=r.length;return ru(function(u){for(var i=-1,o=Vl(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);return n(t,this,u)})}),sh=ru(function(n,t){return fi(n,gn,Y,t,F(t,di(sh)))}),hh=ru(function(n,t){return fi(n,yn,Y,t,F(t,di(hh)))}),ph=_i(function(n,t){return fi(n,bn,Y,Y,Y,t)}),_h=ei(be),vh=ei(function(n,t){
return n>=t}),gh=Oe(function(){return arguments}())?Oe:function(n){return oc(n)&&yl.call(n,"callee")&&!El.call(n,"callee")},yh=el.isArray,dh=ie?R(ie):Ie,bh=Nl||Na,wh=oe?R(oe):Re,mh=fe?R(fe):Se,xh=ce?R(ce):Ce,jh=ae?R(ae):Ue,Ah=le?R(le):Be,kh=ei(Me),Oh=ei(function(n,t){return n<=t}),Ih=Mu(function(n,t){if($i(t)||Vf(t))return Bu(t,Fc(t),n),Y;for(var r in t)yl.call(t,r)&&zr(n,r,t[r])}),Rh=Mu(function(n,t){Bu(t,Nc(t),n)}),zh=Mu(function(n,t,r,e){Bu(t,Nc(t),n,e)}),Eh=Mu(function(n,t,r,e){Bu(t,Fc(t),n,e);
}),Sh=_i(Tr),Wh=ru(function(n,t){n=cl(n);var r=-1,e=t.length,u=e>2?t[2]:Y;for(u&&Li(t[0],t[1],u)&&(e=1);++r<e;)for(var i=t[r],o=Nc(i),f=-1,c=o.length;++f<c;){var a=o[f],l=n[a];(l===Y||Kf(l,_l[a])&&!yl.call(n,a))&&(n[a]=i[a])}return n}),Lh=ru(function(t){return t.push(Y,ai),n($h,Y,t)}),Ch=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),n[t]=r},za(Sa)),Uh=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),yl.call(n,t)?n[t].push(r):n[t]=[r]},bi),Bh=ru(ke),Th=Mu(function(n,t,r){
qe(n,t,r)}),$h=Mu(function(n,t,r,e){qe(n,t,r,e)}),Dh=_i(function(n,t){var r={};if(null==n)return r;var e=!1;t=c(t,function(t){return t=ju(t,n),e||(e=t.length>1),t}),Bu(n,gi(n),r),e&&(r=Dr(r,on|fn|cn,li));for(var u=t.length;u--;)vu(r,t[u]);return r}),Mh=_i(function(n,t){return null==n?{}:Ge(n,t)}),Fh=oi(Fc),Nh=oi(Nc),Ph=Zu(function(n,t,r){return t=t.toLowerCase(),n+(r?ia(t):t)}),qh=Zu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Zh=Zu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Kh=qu("toLowerCase"),Vh=Zu(function(n,t,r){
return n+(r?"_":"")+t.toLowerCase()}),Gh=Zu(function(n,t,r){return n+(r?" ":"")+Jh(t)}),Hh=Zu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Jh=qu("toUpperCase"),Yh=ru(function(t,r){try{return n(t,Y,r)}catch(n){return nc(n)?n:new il(n)}}),Qh=_i(function(n,t){return r(t,function(t){t=Qi(t),Cr(n,t,oh(n[t],n))}),n}),Xh=Hu(),np=Hu(!0),tp=ru(function(n,t){return function(r){return ke(r,n,t)}}),rp=ru(function(n,t){return function(r){return ke(n,r,t)}}),ep=Xu(c),up=Xu(u),ip=Xu(h),op=ri(),fp=ri(!0),cp=Qu(function(n,t){
return n+t},0),ap=ii("ceil"),lp=Qu(function(n,t){return n/t},1),sp=ii("floor"),hp=Qu(function(n,t){return n*t},1),pp=ii("round"),_p=Qu(function(n,t){return n-t},0);return q.after=kf,q.ary=Of,q.assign=Ih,q.assignIn=Rh,q.assignInWith=zh,q.assignWith=Eh,q.at=Sh,q.before=If,q.bind=oh,q.bindAll=Qh,q.bindKey=fh,q.castArray=Mf,q.chain=Jo,q.chunk=ro,q.compact=eo,q.concat=uo,q.cond=Ia,q.conforms=Ra,q.constant=za,q.countBy=Ys,q.create=zc,q.curry=Rf,q.curryRight=zf,q.debounce=Ef,q.defaults=Wh,q.defaultsDeep=Lh,
q.defer=ch,q.delay=ah,q.difference=Ls,q.differenceBy=Cs,q.differenceWith=Us,q.drop=io,q.dropRight=oo,q.dropRightWhile=fo,q.dropWhile=co,q.fill=ao,q.filter=cf,q.flatMap=af,q.flatMapDeep=lf,q.flatMapDepth=sf,q.flatten=ho,q.flattenDeep=po,q.flattenDepth=_o,q.flip=Sf,q.flow=Xh,q.flowRight=np,q.fromPairs=vo,q.functions=Bc,q.functionsIn=Tc,q.groupBy=nh,q.initial=bo,q.intersection=Bs,q.intersectionBy=Ts,q.intersectionWith=$s,q.invert=Ch,q.invertBy=Uh,q.invokeMap=th,q.iteratee=Wa,q.keyBy=rh,q.keys=Fc,q.keysIn=Nc,
q.map=vf,q.mapKeys=Pc,q.mapValues=qc,q.matches=La,q.matchesProperty=Ca,q.memoize=Wf,q.merge=Th,q.mergeWith=$h,q.method=tp,q.methodOf=rp,q.mixin=Ua,q.negate=Lf,q.nthArg=$a,q.omit=Dh,q.omitBy=Zc,q.once=Cf,q.orderBy=gf,q.over=ep,q.overArgs=lh,q.overEvery=up,q.overSome=ip,q.partial=sh,q.partialRight=hh,q.partition=eh,q.pick=Mh,q.pickBy=Kc,q.property=Da,q.propertyOf=Ma,q.pull=Ds,q.pullAll=Ao,q.pullAllBy=ko,q.pullAllWith=Oo,q.pullAt=Ms,q.range=op,q.rangeRight=fp,q.rearg=ph,q.reject=bf,q.remove=Io,q.rest=Uf,
q.reverse=Ro,q.sampleSize=mf,q.set=Gc,q.setWith=Hc,q.shuffle=xf,q.slice=zo,q.sortBy=uh,q.sortedUniq=Bo,q.sortedUniqBy=To,q.split=ga,q.spread=Bf,q.tail=$o,q.take=Do,q.takeRight=Mo,q.takeRightWhile=Fo,q.takeWhile=No,q.tap=Yo,q.throttle=Tf,q.thru=Qo,q.toArray=mc,q.toPairs=Fh,q.toPairsIn=Nh,q.toPath=Va,q.toPlainObject=Oc,q.transform=Jc,q.unary=$f,q.union=Fs,q.unionBy=Ns,q.unionWith=Ps,q.uniq=Po,q.uniqBy=qo,q.uniqWith=Zo,q.unset=Yc,q.unzip=Ko,q.unzipWith=Vo,q.update=Qc,q.updateWith=Xc,q.values=na,q.valuesIn=ta,
q.without=qs,q.words=Oa,q.wrap=Df,q.xor=Zs,q.xorBy=Ks,q.xorWith=Vs,q.zip=Gs,q.zipObject=Go,q.zipObjectDeep=Ho,q.zipWith=Hs,q.entries=Fh,q.entriesIn=Nh,q.extend=Rh,q.extendWith=zh,Ua(q,q),q.add=cp,q.attempt=Yh,q.camelCase=Ph,q.capitalize=ia,q.ceil=ap,q.clamp=ra,q.clone=Ff,q.cloneDeep=Pf,q.cloneDeepWith=qf,q.cloneWith=Nf,q.conformsTo=Zf,q.deburr=oa,q.defaultTo=Ea,q.divide=lp,q.endsWith=fa,q.eq=Kf,q.escape=ca,q.escapeRegExp=aa,q.every=ff,q.find=Qs,q.findIndex=lo,q.findKey=Ec,q.findLast=Xs,q.findLastIndex=so,
q.findLastKey=Sc,q.floor=sp,q.forEach=hf,q.forEachRight=pf,q.forIn=Wc,q.forInRight=Lc,q.forOwn=Cc,q.forOwnRight=Uc,q.get=$c,q.gt=_h,q.gte=vh,q.has=Dc,q.hasIn=Mc,q.head=go,q.identity=Sa,q.includes=_f,q.indexOf=yo,q.inRange=ea,q.invoke=Bh,q.isArguments=gh,q.isArray=yh,q.isArrayBuffer=dh,q.isArrayLike=Vf,q.isArrayLikeObject=Gf,q.isBoolean=Hf,q.isBuffer=bh,q.isDate=wh,q.isElement=Jf,q.isEmpty=Yf,q.isEqual=Qf,q.isEqualWith=Xf,q.isError=nc,q.isFinite=tc,q.isFunction=rc,q.isInteger=ec,q.isLength=uc,q.isMap=mh,
q.isMatch=fc,q.isMatchWith=cc,q.isNaN=ac,q.isNative=lc,q.isNil=hc,q.isNull=sc,q.isNumber=pc,q.isObject=ic,q.isObjectLike=oc,q.isPlainObject=_c,q.isRegExp=xh,q.isSafeInteger=vc,q.isSet=jh,q.isString=gc,q.isSymbol=yc,q.isTypedArray=Ah,q.isUndefined=dc,q.isWeakMap=bc,q.isWeakSet=wc,q.join=wo,q.kebabCase=qh,q.last=mo,q.lastIndexOf=xo,q.lowerCase=Zh,q.lowerFirst=Kh,q.lt=kh,q.lte=Oh,q.max=Ha,q.maxBy=Ja,q.mean=Ya,q.meanBy=Qa,q.min=Xa,q.minBy=nl,q.stubArray=Fa,q.stubFalse=Na,q.stubObject=Pa,q.stubString=qa,
q.stubTrue=Za,q.multiply=hp,q.nth=jo,q.noConflict=Ba,q.noop=Ta,q.now=ih,q.pad=la,q.padEnd=sa,q.padStart=ha,q.parseInt=pa,q.random=ua,q.reduce=yf,q.reduceRight=df,q.repeat=_a,q.replace=va,q.result=Vc,q.round=pp,q.runInContext=p,q.sample=wf,q.size=jf,q.snakeCase=Vh,q.some=Af,q.sortedIndex=Eo,q.sortedIndexBy=So,q.sortedIndexOf=Wo,q.sortedLastIndex=Lo,q.sortedLastIndexBy=Co,q.sortedLastIndexOf=Uo,q.startCase=Gh,q.startsWith=ya,q.subtract=_p,q.sum=tl,q.sumBy=rl,q.template=da,q.times=Ka,q.toFinite=xc,q.toInteger=jc,
q.toLength=Ac,q.toLower=ba,q.toNumber=kc,q.toSafeInteger=Ic,q.toString=Rc,q.toUpper=wa,q.trim=ma,q.trimEnd=xa,q.trimStart=ja,q.truncate=Aa,q.unescape=ka,q.uniqueId=Ga,q.upperCase=Hh,q.upperFirst=Jh,q.each=hf,q.eachRight=pf,q.first=go,Ua(q,function(){var n={};return ee(q,function(t,r){yl.call(q.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),q.VERSION=Q,r(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){q[n].placeholder=q}),r(["drop","take"],function(n,t){Bt.prototype[n]=function(r){
r=r===Y?1:Kl(jc(r),0);var e=this.__filtered__&&!t?new Bt(this):this.clone();return e.__filtered__?e.__takeCount__=Vl(r,e.__takeCount__):e.__views__.push({size:Vl(r,Wn),type:n+(e.__dir__<0?"Right":"")}),e},Bt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==kn||r==In;Bt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:bi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){
var r="take"+(t?"Right":"");Bt.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[r](1)}}),Bt.prototype.compact=function(){return this.filter(Sa)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=ru(function(n,t){return"function"==typeof n?new Bt(this):this.map(function(r){
return ke(r,n,t)})}),Bt.prototype.reject=function(n){return this.filter(Lf(bi(n)))},Bt.prototype.slice=function(n,t){n=jc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Bt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==Y&&(t=jc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Wn)},ee(Bt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=q[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);
u&&(q.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Bt,c=o[0],l=f||yh(t),s=function(n){var t=u.apply(q,a([n],o));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(f=l=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&l){t=v?t:new Bt(this);var g=n.apply(t,o);return g.__actions__.push({func:Qo,args:[s],thisArg:Y}),new H(g,h)}return _&&v?n.apply(this,o):(g=this.thru(s),_?e?g.value()[0]:g.value():g)})}),r(["pop","push","shift","sort","splice","unshift"],function(n){
var t=hl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);q.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yh(u)?u:[],n)}return this[r](function(r){return t.apply(yh(r)?r:[],n)})}}),ee(Bt.prototype,function(n,t){var r=q[t];if(r){var e=r.name+"";yl.call(is,e)||(is[e]=[]),is[e].push({name:t,func:r})}}),is[Ju(Y,hn).name]=[{name:"wrapper",func:Y}],Bt.prototype.clone=Gt,Bt.prototype.reverse=Ht,Bt.prototype.value=Jt,q.prototype.at=Js,
q.prototype.chain=Xo,q.prototype.commit=nf,q.prototype.next=tf,q.prototype.plant=ef,q.prototype.reverse=uf,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=of,q.prototype.first=q.prototype.head,Ll&&(q.prototype[Ll]=rf),q},ge=ve(); true?(Xr._=ge,!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return ge}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):undefined}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/webpack/buildin/global.js"), __webpack_require__("../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["buffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["channel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["eventChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["isEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["multicastChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["runSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["stdChannel"]; });






/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["effectTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["putResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeMaybe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });




/***/ }),

/***/ "../../node_modules/redux/es/redux.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/symbol-observable/es/index.js");


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

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
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
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
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
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

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
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
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

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

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
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
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
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
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
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
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
  Object.keys(reducers).forEach(function (key) {
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
  var reducerKeys = Object.keys(reducers);
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

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

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

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
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
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
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

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
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
      return _objectSpread2({}, store, {
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




/***/ }),

/***/ "../../node_modules/sdp-transform/lib/grammar.js":
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{
    // o=- 20518 0 IN IP4 203.0.113.1
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
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly...
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  // k: [{}], // outdated thing ignored
  t: [{
    // t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{
    // c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{
    // b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{
    // m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    {
      // a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding)
          ? 'rtpmap:%d %s/%s/%s'
          : o.rate
            ? 'rtpmap:%d %s/%s'
            : 'rtpmap:%d %s';
      }
    },
    {
      // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      // a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    {
      // a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    {
      // a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null)
          ? 'rtcp:%d %s IP%d %s'
          : 'rtcp:%d';
      }
    },
    {
      // a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%s trr-int %d'
    },
    {
      // a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null)
          ? 'rtcp-fb:%s %s %s'
          : 'rtcp-fb:%s %s';
      }
    },
    {
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:1/recvonly URI-gps-string
      // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
      format: function (o) {
        return (
          'extmap:%d' +
          (o.direction ? '/%s' : '%v') +
          (o['encrypt-uri'] ? ' %s' : '%v') +
          ' %s' +
          (o.config ? ' %s' : '')
        );
      }
    },
    {
      // a=extmap-allow-mixed
      name: 'extmapAllowMixed',
      reg: /^(extmap-allow-mixed)/
    },
    {
      // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null)
          ? 'crypto:%d %s %s %s'
          : 'crypto:%d %s %s';
      }
    },
    {
      // a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    {
      // a=connection:new
      name: 'connectionType',
      reg: /^connection:(new|existing)/,
      format: 'connection:%s'
    },
    {
      // a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    {
      // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    {
      // a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*(?:\.\d*)*)/,
      format: 'ptime:%d'
    },
    {
      // a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*(?:\.\d*)*)/,
      format: 'maxptime:%d'
    },
    {
      // a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    {
      // a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    {
      // a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    {
      // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    {
      // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    {
      // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
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
    {
      // a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    {
      // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    {
      // a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    {
      // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
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
    {
      // a=ssrc-group:FEC 1 2
      // a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    {
      // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    {
      // a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    {
      // a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    {
      // a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    {
      // a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null)
          ? 'sctpmap:%s %s %s'
          : 'sctpmap:%s %s';
      }
    },
    {
      // a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    {
      // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    {
      // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      // a=imageattr:* send [x=800,y=640] recv *
      // a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        // a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        // send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        // recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      // a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        // a=simulcast:
        '^simulcast:' +
        // send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        // space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        // end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    {
      // old simulcast draft 03 (implemented by Firefox)
      //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      // a=simulcast: recv pt=97;98 send pt=97
      // a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      // a=framerate:25
      // a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    {
      // RFC4570
      // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    {
      // a=bundle-only
      name: 'bundleOnly',
      reg: /^(bundle-only)/
    },
    {
      // a=label:1
      name: 'label',
      reg: /^label:(.+)/,
      format: 'label:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
      name: 'sctpPort',
      reg: /^sctp-port:(\d+)$/,
      format: 'sctp-port:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
      name: 'maxMessageSize',
      reg: /^max-message-size:(\d+)$/,
      format: 'max-message-size:%s'
    },
    {
      // RFC7273
      // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
      push:'tsRefClocks',
      reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
      names: ['clksrc', 'clksrcExt'],
      format: function (o) {
        return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
      }
    },
    {
      // RFC7273
      // a=mediaclk:direct=963214424
      name:'mediaClk',
      reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
      names: ['id', 'mediaClockName', 'mediaClockValue', 'rateNumerator', 'rateDenominator'],
      format: function (o) {
        var str = 'mediaclk:';
        str += (o.id != null ? 'id=%s %s' : '%v%s');
        str += (o.mediaClockValue != null ? '=%s' : '');
        str += (o.rateNumerator != null ? ' rate=%s' : '');
        str += (o.rateDenominator != null ? '/%s' : '');
        return str;
      }
    },
    {
      // a=keywds:keywords
      name: 'keywords',
      reg: /^keywds:(.+)$/,
      format: 'keywds:%s'
    },
    {
      // a=content:main
      name: 'content',
      reg: /^content:(.+)/,
      format: 'content:%s'
    },
    // BFCP https://tools.ietf.org/html/rfc4583
    {
      // a=floorctrl:c-s
      name: 'bfcpFloorCtrl',
      reg: /^floorctrl:(c-only|s-only|c-s)/,
      format: 'floorctrl:%s'
    },
    {
      // a=confid:1
      name: 'bfcpConfId',
      reg: /^confid:(\d+)/,
      format: 'confid:%s'
    },
    {
      // a=userid:1
      name: 'bfcpUserId',
      reg: /^userid:(\d+)/,
      format: 'userid:%s'
    },
    {
      // a=floorid:1
      name: 'bfcpFloorId',
      reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
      names: ['id', 'mStream'],
      format: 'floorid:%s mstrm:%s'
    },
    {
      // any a= that we don't understand is kept verbatim on media.invalid
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
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().
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
  return str.split(/;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.toString().split(' ').map(Number);
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

/***/ "../../node_modules/uuid/dist/esm-browser/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/md5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/nil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/parse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/regex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/rng.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/sha1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/stringify.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v35.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

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

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

'use strict';

var _adapter_factory = require('./adapter_factory.js');

var adapter = (0, _adapter_factory.adapterFactory)({ window: typeof window === 'undefined' ? undefined : window });
module.exports = adapter; // this is the difference from adapter_core.

},{"./adapter_factory.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFactory = adapterFactory;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _chrome_shim = require('./chrome/chrome_shim');

var chromeShim = _interopRequireWildcard(_chrome_shim);

var _edge_shim = require('./edge/edge_shim');

var edgeShim = _interopRequireWildcard(_edge_shim);

var _firefox_shim = require('./firefox/firefox_shim');

var firefoxShim = _interopRequireWildcard(_firefox_shim);

var _safari_shim = require('./safari/safari_shim');

var safariShim = _interopRequireWildcard(_safari_shim);

var _common_shim = require('./common_shim');

var commonShim = _interopRequireWildcard(_common_shim);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Shimming starts here.
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

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
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimGetStats(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);
      firefoxShim.shimAddTransceiver(window);
      firefoxShim.shimGetParameters(window);
      firefoxShim.shimCreateOffer(window);
      firefoxShim.shimCreateAnswer(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
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

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimGetDisplayMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);

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

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCreateOfferLegacy(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);
      safariShim.shimAudioContext(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

// Browser shims.

},{"./chrome/chrome_shim":3,"./common_shim":6,"./edge/edge_shim":12,"./firefox/firefox_shim":7,"./safari/safari_shim":10,"./utils":11}],3:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimMediaStream = shimMediaStream;
exports.shimOnTrack = shimOnTrack;
exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
exports.shimGetStats = shimGetStats;
exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.fixNegotiationNeeded = fixNegotiationNeeded;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },

      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = { track: te.track };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = { track: track };
            }
            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
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
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        var sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);
        var idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });
        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
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
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _this5 = this;

    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.


    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, selector]);
    }

    // promise-support
    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this5, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        var _this6 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this6;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          utils.filterStats(result, sender.track, true)
        );
      });
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        var _this7 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this7;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return utils.filterStats(result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender = void 0;
      var receiver = void 0;
      var err = void 0;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this8._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
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
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this9.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this10 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          _this10._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (_this10._shimmedLocalStreams[streamId].length === 1) {
          delete _this10._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this11 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this11._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this12 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this12.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    var _this13 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    var streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });
    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(function () {
        _this13.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    var methodObj = _defineProperty({}, method, function () {
      var _this14 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this14, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }
      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this14, description);
      });
    });
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);
      if (description.type === '') {
        return description;
      }
      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this15 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }
    var isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    var stream = void 0;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });
      if (hasTrack) {
        stream = _this15._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  var addIceCandidateNullSupported = window.RTCPeerConnection.prototype.addIceCandidate.length === 0;

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      var methodObj = _defineProperty({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }

  // support for addIceCandidate(null or undefined)
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!addIceCandidateNullSupported && !arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    // Firefox 68+ emits and processes {candidate: "", ...}, ignore
    // in older versions. Native support planned for Chrome M77.
    if (browserDetails.version < 78 && arguments[0] && arguments[0].candidate === '') {
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window) {
  var browserDetails = utils.detectBrowser(window);
  utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
    var pc = e.target;
    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}

},{"../utils.js":11,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
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
}

},{}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logging = utils.log;

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var browserDetails = utils.detectBrowser(window);

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
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
        ['min', 'max'].forEach(function (mix) {
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

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && _typeof(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
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
    if (constraints && _typeof(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches = void 0;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
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

  var shimError_ = function shimError_(e) {
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
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, function (c) {
        return origGetUserMedia(c).then(function (stream) {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function (track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function (e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }
}

},{"../utils.js":11}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimRTCIceCandidate = shimRTCIceCandidate;
exports.shimMaxMessageSize = shimMaxMessageSize;
exports.shimSendThrowTypeError = shimSendThrowTypeError;
exports.shimConnectionState = shimConnectionState;
exports.removeAllowExtmapMixed = removeAllowExtmapMixed;

var _sdp = require('sdp');

var _sdp2 = _interopRequireDefault(_sdp);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    if (!description || !description.sdp) {
      return false;
    }
    var sections = _sdp2.default.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = _sdp2.default.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    var version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
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
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null;
    // Chrome decided to not expose .sctp in plan-b mode.
    // As usual, adapter.js has to do an 'ugly worakaround'
    // to cover up the mess.
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
      var _getConfiguration = this.getConfiguration(),
          sdpSemantics = _getConfiguration.sdpSemantics;

      if (sdpSemantics === 'plan-b') {
        Object.defineProperty(this, 'sctp', {
          get: function get() {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
          },

          enumerable: true,
          configurable: true
        });
      }
    }

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      var canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      var maxMessageSize = void 0;
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
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;
    dc.send = function send() {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}

/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },

    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },

    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];
    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }
    return nativeSRD.apply(this, arguments);
  };
}

},{"./utils":11,"sdp":13}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimSenderGetStats = shimSenderGetStats;
exports.shimReceiverGetStats = shimReceiverGetStats;
exports.shimRemoveStream = shimRemoveStream;
exports.shimRTCDataChannel = shimRTCDataChannel;
exports.shimAddTransceiver = shimAddTransceiver;
exports.shimGetParameters = shimGetParameters;
exports.shimCreateOffer = shimCreateOffer;
exports.shimCreateAnswer = shimCreateAnswer;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      var methodObj = _defineProperty({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }

  // support for addIceCandidate(null or undefined)
  // as well as ignoring {sdpMid, candidate: ""}
  if (browserDetails.version < 68) {
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.
      if (arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }
          // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }
  utils.wrapPeerConnectionEvent(window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    var _this3 = this;

    utils.deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      var initParameters = arguments[1];
      var shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;
      if (shouldPerformCheck) {
        // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach(function (encodingParam) {
          if ('rid' in encodingParam) {
            var ridRegex = /^[a-z0-9]{0,16}$/i;
            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError('Invalid RID value provided.');
            }
          }
          if ('scaleResolutionDownBy' in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
              throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
          }
          if ('maxFramerate' in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError('max_framerate must be >= 0.0');
            }
          }
        });
      }
      var transceiver = origAddTransceiver.apply(this, arguments);
      if (shouldPerformCheck) {
        // Check if the init options were applied. If not we do this in an
        // asynchronous way and save the promise reference in a global object.
        // This is an ugly hack, but at the same time is way more robust than
        // checking the sender parameters before and after the createOffer
        // Also note that after the createoffer we are not 100% sure that
        // the params were asynchronously applied so we might miss the
        // opportunity to recreate offer.
        var sender = transceiver.sender;

        var params = sender.getParameters();
        if (!('encodings' in params) ||
        // Avoid being fooled by patched getParameters() below.
        params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
          params.encodings = initParameters.sendEncodings;
          sender.sendEncodings = initParameters.sendEncodings;
          this.setParametersPromises.push(sender.setParameters(params).then(function () {
            delete sender.sendEncodings;
          }).catch(function () {
            delete sender.sendEncodings;
          }));
        }
      }
      return transceiver;
    };
  }
}

function shimGetParameters(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCRtpSender)) {
    return;
  }
  var origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters = function getParameters() {
      var params = origGetParameters.apply(this, arguments);
      if (!('encodings' in params)) {
        params.encodings = [].concat(this.sendEncodings || [{}]);
      }
      return params;
    };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    var _this4 = this,
        _arguments2 = arguments;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateOffer.apply(_this4, _arguments2);
      }).finally(function () {
        _this4.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    var _this5 = this,
        _arguments3 = arguments;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateAnswer.apply(_this5, _arguments3);
      }).finally(function () {
        _this5.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}

},{"../utils":11,"./getdisplaymedia":8,"./getusermedia":9}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = { mediaSource: preferredMediaSource };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

},{}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimGetUserMedia(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

},{"../utils":11}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
exports.shimCallbacksAPI = shimCallbacksAPI;
exports.shimGetUserMedia = shimGetUserMedia;
exports.shimConstraints = shimConstraints;
exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
exports.shimCreateOfferLegacy = shimCreateOfferLegacy;
exports.shimAudioContext = shimAudioContext;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimLocalStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
      stream.getVideoTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function addTrack(track) {
      var _this2 = this;

      for (var _len = arguments.length, streams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        streams[_key - 1] = arguments[_key];
      }

      if (streams) {
        streams.forEach(function (stream) {
          if (!_this2._localStreams) {
            _this2._localStreams = [stream];
          } else if (!_this2._localStreams.includes(stream)) {
            _this2._localStreams.push(stream);
          }
        });
      }
      return _addTrack.apply(this, arguments);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      var index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this3.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this4 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this4._remoteStreams) {
              _this4._remoteStreams = [];
            }
            if (_this4._remoteStreams.includes(stream)) {
              return;
            }
            _this4._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            _this4.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
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
}

function shimCallbacksAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  var prototype = window.RTCPeerConnection.prototype;
  var origCreateOffer = prototype.createOffer;
  var origCreateAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;
    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  var OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];
      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
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
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'audio';
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
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'video';
      });
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimAudioContext(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractVersion = extractVersion;
exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
exports.disableLog = disableLog;
exports.disableWarnings = disableWarnings;
exports.log = log;
exports.deprecated = deprecated;
exports.detectBrowser = detectBrowser;
exports.compactObject = compactObject;
exports.walkStats = walkStats;
exports.filterStats = filterStats;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  // Returned result object.
  var result = { browser: null, version: null };

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  var navigator = window.navigator;


  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObj = isObject(data[key]);
    var value = isObj ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, _defineProperty({}, key, value));
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
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
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

},{}],12:[function(require,module,exports){

},{}],13:[function(require,module,exports){
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

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3),
  };
};

SDPUtils.writeCryptoLine = function(parameters) {
  return 'a=crypto:' + parameters.tag + ' ' +
    parameters.cryptoSuite + ' ' +
    (typeof parameters.keyParams === 'object'
      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
      : parameters.keyParams) +
    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
    '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
  };
};

SDPUtils.writeCryptoKeyParams = function(keyParams) {
  return keyParams.keyMethod + ':'
    + keyParams.keySalt +
    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
    (keyParams.mkiValue && keyParams.mkiLength
      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
      : '');
};

// Extracts all SDES paramters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10),
  };
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

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }
  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
      .substr(10)
      .split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
  var output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctp-port:' + sctp.port + '\r\n'
    ];
  } else {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
    ];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
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

},{}]},{},[1])(1)
});


/***/ }),

/***/ "../../packages/kandy/node_modules/query-string/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__("../../packages/kandy/node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__("../../node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__("../../node_modules/split-on-first/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
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
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
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
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
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

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
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

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
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
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

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

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
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
exports.forwardAction = forwardAction;
exports.normalizeServices = normalizeServices;

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

var _queryString = __webpack_require__("../../packages/kandy/node_modules/query-string/index.js");

var _queryString2 = _interopRequireDefault(_queryString);

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

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

/**
 * Forwards the actions by directly dispatching them.
 * For example, this can be used with a takeEvery effect to grab actions from a channel and dispatch them.
 * @param {Object} action The action to be forwarded.
 * @example
 * const channel = eventChannel(...)
 * yield takeEvery(channel, forwardAction)
 */
function* forwardAction(action) {
  yield (0, _effects.put)(action);
}

/**
 * Ensures that services are in the same format understood by the server regardless,
 * of whether the client provides services as strings or objects.
 * @param {Array} services The list of services requested by the client.
 * @return {Array} A normalized list of services requested by the client.
 */
function normalizeServices(services = []) {
  return services.map(service => {
    if ((0, _fp.isPlainObject)(service) && service.hasOwnProperty('service')) {
      return service;
    }
    return { service: service };
  });
}

/***/ }),

/***/ "../../packages/kandy/src/common/version.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVersion = getVersion;
/**
 * Returns the version of the currently running SDK.
 *
 * It must be used by any plugins (including the factory) as the unique source of truth when it comes to determine the current SDK version.
 * The actual version value is provided by the build process scripts (aka webpack.config.***.js) which simply do a string substitution
 * for the @@ tag below with actual version value.
 */
function getVersion() {
  return '4.27.0-beta.645';
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
/* Helper function for styling logs based on the log type.
 * This function will inspect the log entry and format the log
 * accordingly.
 */
function styleLog(entry) {
  const { timestamp, level } = entry;
  const logInfo = `${timestamp} - ACTION - ${level}`;

  let [logType, payload] = entry.messages;

  let prefix;
  let style = '';
  if (logType.includes('state')) {
    // If the log is for prev state / next state, display that in the prefix.
    prefix = `${logInfo} - ${logType.toUpperCase()}`;
  } else if (logType.includes('ADDED') || logType.includes('DELETED') || logType.includes('ARRAY')) {
    // If the log has added or removed keys from state, log the operation, keys affected and new values.
    prefix = `${entry.messages[0]}: ${entry.messages[2]}`;
    style = entry.messages[1];
    payload = entry.messages[3];
  } else if (logType.includes('CHANGED')) {
    // If the log has changed keys in state, log the operation, keys, old and new values.
    prefix = `${entry.messages[0]}: ${entry.messages[2]}`;
    style = entry.messages[1];
    payload = `${entry.messages[3]} ${entry.messages[4]} ${entry.messages[5]}`;
  } else if (logType.includes('no diff')) {
    // If action results in no change in state, just log no diff.
    prefix = `${logInfo} - NO DIFF`;
    payload = '';
  } else {
    // Else the log is the action itself, so use the action type.
    prefix = `${logInfo} - ${payload.type} - ${logType}`;
  }

  return { prefix, style, payload };
}

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

  const { prefix, style, payload } = styleLog(entry);
  console[entry.method](prefix, style, payload);
}

/***/ }),

/***/ "../../packages/kandy/src/logs/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partialDefaultLogActions = exports.defaultOptions = undefined;

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
 *    default, the SDK will log information to the console. For more
 *    information, see the {@link logger Logs feature} description.
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
 * @param {Object|boolean} [logs.logActions=false] Options specifically for action logs when
 *    logLevel is at DEBUG+ levels. Set this to false to not output action logs.
 * @param {logger.LogHandler} [logs.logActions.handler] The function to receive action
 *    log entries from the SDK. If not provided, a default handler will be used
 *    that logs actions to the console.
 * @param {boolean} [logs.logActions.actionOnly=false] Only output information
 *    about the action itself. Omits the SDK context for when it occurred.
 * @param {boolean} [logs.logActions.collapsed=false] Whether logs should be
 *    minimized when initially output. The full log is still output and can be
 *    inspected on the console.
 * @param {boolean} [logs.logActions.diff=false] Include a diff of what SDK
 *    context was changed by the action.
 * @param {string}  [logs.logActions.level='debug'] Log level to be set
 *    on the action logs
 * @param {boolean} [logs.logActions.exposePayloads=true] Allow action payloads
 *    to be exposed in the logs, potentially displaying sensitive information.
 */
const defaultOptions = exports.defaultOptions = {
  logLevel: 'debug',
  handler: undefined,
  enableFcsLogs: true,
  logActions: false
};

const partialDefaultLogActions = exports.partialDefaultLogActions = {
  handler: _actionHandler2.default,
  actionOnly: false,
  collapsed: false,
  diff: false,
  level: 'debug',
  exposePayloads: true
  /*
   * TODO: Figure out a way to work around this.
   * Can't use validation in logging because validation uses logging to output errors.
   * Circular dependency, have to refactor.
   * Code:
   ```javascript
  // Parse and/or Validate
  // import { enums, validation as v8n, parse } from '../common/validation'
  const defaultValidation = v8n.schema({
    logLevel: enums(['silent', 'error', 'warn', 'info', 'debug']),
    handler: v8n.optional(v8n.function()),
    enableFcsLogs: v8n.boolean(),
    logActions: v8n.optional(
      v8n.passesAnyOf(
        v8n.schema({
          handler: v8n.optional(v8n.function()),
          actionOnly: v8n.boolean(),
          collapsed: v8n.boolean(),
          diff: v8n.boolean(),
          exposePayloads: v8n.boolean()
        }),
        // OR
        v8n.boolean()
      )
    )
  })
  
  export const parseLogConfig = parse('logger', defaultValidation)
  ```
  */

};

/***/ }),

/***/ "../../packages/kandy/src/logs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logManager = exports.API_LOG_TAG = undefined;

var _kandyLogger = __webpack_require__("../../packages/logger/src/index.js");

var _kandyLogger2 = _interopRequireDefault(_kandyLogger);

var _config = __webpack_require__("../../packages/kandy/src/logs/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Logs generated as a result of invoking the public API will contain this tag
const API_LOG_TAG = exports.API_LOG_TAG = 'API invoked: ';

/**
 * Create the LogManager right away so that it is available. The SDK has not
 *    been instantiated yet, so we have to use the default options until we get
 *    the application's configs.
 */
/**
 * TODO: There is a technical debt associated with having a loggerManager along with it's
 * loggers created at the global scope. Multiple instances of the SDK would end up sharing
 * the log manager and therefore loggers.
 */
const manager = (0, _kandyLogger2.default)(_config2.default);
const logManager = exports.logManager = manager;

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

var _utils = __webpack_require__("../../packages/kandy/src/common/utils.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

/**
 * Listen for events emitted from the webRTC Device Manager.
 * @method watchDeviceEvents
 * @param  {Object} manager The webRTC Device Manager.
 */


// Libraries.
// Webrtc plugin.
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
  yield (0, _effects.takeEvery)(managerChannel, _utils.forwardAction);
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

var _utils = __webpack_require__("../../packages/kandy/src/common/utils.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

/**
 * Sets up event listeners for a Media's events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchMediaEvents
 * @param  {Object} media A Media object.
 * @param  {Object} webRTC The webRTC stack.
 */


// Libraries.
// Webrtc plugin.
function* watchMediaEvents(media, webRTC) {
  /**
   * Create an event channel between the Media and redux-saga.
   * This "forces" the Media events into a redux-saga context.
   */
  const mediaChannel = (0, _reduxSaga.eventChannel)(emit => {
    return setListeners(media, emit, _reduxSaga.END);
  });
  yield (0, _effects.takeEvery)(mediaChannel, _utils.forwardAction);
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

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

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

var _utils = __webpack_require__("../../packages/kandy/src/common/utils.js");

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

/**
 * Sets up event listeners for a Session's events.
 * The events are turned into actions and dispatched
 *    to be handled by redux elsewhere.
 * @method watchSessionEvents
 * @param  {Object} session The Session object.
 * @param  {Object} webRTC The webRTC stack.
 */


// Libraries.
// Webrtc plugin.
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
  yield (0, _effects.takeEvery)(sessionChannel, _utils.forwardAction);
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

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

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

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

var _actions = __webpack_require__("../../packages/kandy/src/webrtc/interface/actions/index.js");

var _utils = __webpack_require__("../../packages/kandy/src/common/utils.js");

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
  yield (0, _effects.takeEvery)(trackChannel, _utils.forwardAction);
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

  // The track source (which affected the track identified by trackId) was muted.
  // An example of a track source is a physical media device such as:
  // microphone or camera.
  const trackSourceMuted = trackData => {
    emit(_actions.trackActions.trackSourceMuted([trackData.trackId]));
  };

  // The track source (which affected the track identified by trackId) was unmuted.
  const trackSourceUnmuted = trackData => {
    emit(_actions.trackActions.trackSourceUnmuted([trackData.trackId]));
  };

  track.on('ended', trackEnded);
  track.on('muted', trackSourceMuted);
  track.on('unmuted', trackSourceUnmuted);

  const unsubscribe = () => {
    track.off('ended', trackEnded);
    track.off('muted', trackSourceMuted);
    track.off('unmuted', trackSourceUnmuted);
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

var _effects = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _reduxSaga = __webpack_require__("../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

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

    // Translate the track state from native WebRTC to SDK style.
    // This is to change the "muted" property to be what people generally know
    //    "muted" to be.
    state.sourceMuted = state.muted;
    state.muted = !state.enabled;

    delete state.enabled;
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
const INITIALIZE_DEVICES = exports.INITIALIZE_DEVICES = prefix + 'INITIALIZE_DEVICES';
const INITIALIZE_DEVICES_FINISH = exports.INITIALIZE_DEVICES_FINISH = prefix + 'INITIALIZE_DEVICES_FINISH';

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

const TRACK_SOURCE_MUTED = exports.TRACK_SOURCE_MUTED = trackPrefix + 'SOURCE_MUTED';
const TRACK_SOURCE_UNMUTED = exports.TRACK_SOURCE_UNMUTED = trackPrefix + 'SOURCE_UNMUTED';

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
exports.initializeDevice = initializeDevice;
exports.initializeDeviceFinish = initializeDeviceFinish;

var _actionTypes = __webpack_require__("../../packages/kandy/src/webrtc/interface/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function devicesChanged(devices) {
  return {
    type: actionTypes.DEVICES_CHANGE,
    payload: devices
  };
} // Webrtc plugin.
function initializeDevice(browserConstraints) {
  return {
    type: actionTypes.INITIALIZE_DEVICES,
    payload: browserConstraints
  };
}

/**
 * The finishing action which follows the INITIALIZE_DEVICES action
 * @param {Object} $0
 * @param {Object} [$0.devices] The device object.
 * @param {Object} [$0.error] An error object. Only present if an error occurred.
 * @returns {Object} A flux standard action representing the INITIALIZE_DEVICES_FINISH action.
 */
function initializeDeviceFinish({ devices, error }) {
  return {
    payload: error || devices,
    error: Boolean(error),
    type: actionTypes.INITIALIZE_DEVICES_FINISH
  };
}

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
exports.trackSourceMuted = trackSourceMuted;
exports.trackSourceUnmuted = trackSourceUnmuted;
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
  return trackHelper(actionTypes.MUTE_TRACKS_FINISH, { trackIds: trackIds });
}

function unmuteTracks(trackIds) {
  return trackHelper(actionTypes.UNMUTE_TRACKS, trackIds);
}

function unmuteTracksFinish(trackIds) {
  return trackHelper(actionTypes.UNMUTE_TRACKS_FINISH, { trackIds: trackIds });
}

function trackSourceMuted(trackIds) {
  return trackHelper(actionTypes.TRACK_SOURCE_MUTED, { trackIds: trackIds });
}

function trackSourceUnmuted(trackIds) {
  return trackHelper(actionTypes.TRACK_SOURCE_UNMUTED, { trackIds: trackIds });
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

var _stringify = __webpack_require__("../../node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

exports.jsonChannel = jsonChannel;
exports.replyChannel = replyChannel;

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = _logs.logManager.getLogger('CHANNEL');

/**
 * Converts a channel's send and receive to serialize messages in JSON before sending and after receiving.
 *
 * @param {Object} innerChannel The channel to convert
 */
// Other plugins.
function jsonChannel(innerChannel) {
  const jsonChannel = {
    receive: undefined,
    send(message) {
      try {
        innerChannel.send((0, _stringify2.default)(message));
      } catch (err) {
        log.error('Failed to send JSON message over channel: ', err);
      }
    }
  };

  innerChannel.receive = function receiveJSONMessage(message) {
    try {
      if (jsonChannel.receive) {
        jsonChannel.receive(JSON.parse(message));
      }
    } catch (err) {
      log.error('Failed to receive JSON message on channel: ', err);
    }
  };

  return jsonChannel;
}

/**
 * Converts a channel with only `send` and `receive` functionality into one that
 *    also has `reply` functionality.
 * This is required by the Proxy Plugin to convert asynchronous code into
 *    synchronous code. The Proxy needs to return a value synchronously when
 *    sending data over the channel.
 * @method replyChannel
 * @param  {Object} channel
 * @return {Object} The same channel, but with a `reply` method as well.
 */
function replyChannel(channel) {
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
      log.debug(`Received reply from message ${messageId}.`);
      sentMessages[messageId].resolve(data);
    } else if (messageId && !sentMessages[messageId]) {
      // If the message has an ID that we don't know about, then the application
      //    will need to handle it.
      if (api.receive) {
        log.debug(`Received new message ${messageId}.`);
        api.receive(messageId, data);
      } else {
        log.error('No listener set for handling received messages.', data);
      }
    } else {
      // If the message didn't have an ID, then it wasn't from our test channel.
      log.warn('Received message without an ID on the channel; ignoring.', message);
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
      };log.debug(`Sending new message ${messageId}.`);
      channel.send(message);
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

    log.debug(`Replying to message ${messageId}.`);
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
 * Receives a webRTC command intended for the Device Manager, performs the webRTC
 *\
 \
 *    operation and returns/resolves a proxy response.
 * @method deviceManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function deviceManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.devices;
  if (operation === 'setupDeviceInitialization') {
    try {
      const devices = await manager.setupDeviceInitialization(...params);
      return devices;
    } catch (err) {
      console.error('Error: ', err);
      return { name: err.name, message: err.message, error: true };
    }
  } else {
    // General case: Don't convert the return.
    return manager[operation](...params);
  }
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
exports.convertLogger = convertLogger;

var _deviceManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/deviceManager.js");

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _mediaManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/mediaManager.js");

var _mediaManager2 = _interopRequireDefault(_mediaManager);

var _sessionManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/sessionManager.js");

var _sessionManager2 = _interopRequireDefault(_sessionManager);

var _trackManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/trackManager.js");

var _trackManager2 = _interopRequireDefault(_trackManager);

var _logManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/logManager.js");

var _logManager2 = _interopRequireDefault(_logManager);

var _webrtcManager = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/webrtcManager.js");

var _webrtcManager2 = _interopRequireDefault(_webrtcManager);

var _media = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/media.js");

var _media2 = _interopRequireDefault(_media);

var _session = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/session.js");

var _session2 = _interopRequireDefault(_session);

var _track = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/track.js");

var _track2 = _interopRequireDefault(_track);

var _logger = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = _logs.logManager.getLogger('PROXY');

// Converters for the webRTC managers.


// Other plugins.
// Proxy plugin.
const managers = {
  media: _mediaManager2.default,
  sessionManager: _sessionManager2.default,
  track: _trackManager2.default,
  devices: _deviceManager2.default,
  logs: _logManager2.default,
  webrtcManager: _webrtcManager2.default

  // Converters for the webRTC models.
};const models = {
  media: _media2.default,
  session: _session2.default,
  track: _track2.default,
  logger: _logger2.default

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
    const result = managers[command.type](webRTC, command);

    // The result is a Promise. Add a .then for debugging after it completes.
    result.then(data => {
      log.debug(`Completed ${command.type} manager operation ${command.operation}.`, data);
    });

    return result;
  } else {
    // Forward the command to the appropriate model converter.
    log.debug(`Performing ${command.type} model operation ${command.operation}.`, command.params);
    const result = models[command.type](webRTC, command);

    // The result is a Promise. Add a .then for debugging after it completes.
    result.then(data => {
      log.debug(`Completed ${command.type} model operation ${command.operation}.`, data);
    });

    return result;
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

/**
 * Converts a Logger object into a serializable object.
 * @method convertLogger
 * @param  {Logger} logger A WebRTC logger.
 * @return {Object}  A serializable object.
 */
function convertLogger(logger) {
  if (logger) {
    return {
      type: 'logger',
      // Use the name as the unique Logger ID (which is what it is).
      id: logger.name
    };
  }
}

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/logManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("../../packages/kandy/src/webrtcProxy/converters/index.js");

/**
 * Log Manager "converter".
 * Defines how received Log Manager commands are performed, and how any data is
 *    returned over the channel (if needed).
 * @method logManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the operation has completed.
 */
exports.default = async function logManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.logs;

  // Handle different APIs differently, depending on what they return.
  if (operation === 'getLogger') {
    const logger = manager.getLogger(...params);
    return (0, _index.convertLogger)(logger);
  } else if (operation === 'getLoggers') {
    const loggers = manager.getLoggers(...params);
    return loggers.map(_index.convertLogger);
  } else if (operation === 'getHandler') {
    // We can't send a function over the channel; return nothing.
    return undefined;
  } else if (operation === 'setLevel') {
    // Set the level on the LogManager itself.
    manager.setLevel(...params);

    // Signature was either setLevel(type, level) or setLevel(level).
    const level = params[1] || params[0];
    // Set the level on all already-created Loggers.
    manager.getLoggers().forEach(logger => logger.setLevel(level));
  } else {
    // General case: Don't convert the return.
    return manager[operation](...params);
  }
};

/***/ }),

/***/ "../../packages/kandy/src/webrtcProxy/converters/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

/**
 * Logger "converter".
 *
 * Defines how received Logger commands are performed, and how any data is
 *    returned over the channel (if needed).
 * @method logger
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the Logger operation has completed.
 */
exports.default = async function logger(webRTC, command) {
  const { id, operation, params } = command;

  /**
   * Special-case: If the operation is for the PROXY or CHANNEL Logger, that is
   *    actually the Remote SDK's own Logger, not the WebRTC stack's Logger.
   */
  if (id === 'PROXY' || id === 'CHANNEL') {
    // Get the logger from the SDK's log manager.
    const logger = _logs.logManager.getLogger(id);
    return logger[operation](...params);
  }

  // Get the logger from the WebRTC Stack's log manager.
  const logger = webRTC.managers.logs.getLogger(id);
  if (operation === 'getHandler') {
    // We can't send a function over the channel; return nothing.
    return undefined;
  } else {
    // General case: Don't convert the return.
    return logger[operation](...params);
  }
};

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
  } else if (operation === 'createLocalScreen') {
    try {
      const media = await manager.createLocalScreen(...params);
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

var _from = __webpack_require__("../../node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    const dscpTrackMapping = params.length === 2 ? params[1] : {};
    return session.addTracks(tracks, dscpTrackMapping);
  }

  if (operation === 'getStats') {
    const getStats = session.getStats(...params);
    return getStats.then(stats => (0, _from2.default)(stats.entries()));
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

/***/ "../../packages/kandy/src/webrtcProxy/converters/webrtcManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * WebRTC Manager "converter".
 * Receives a webRTC command intended for the WebRTC Manager, performs the webRTC
 *    operation and returns/resolves a proxy response.
 * @method webrtcManager
 * @param {Object} webRTC The local webRTC stack.
 * @param {Object} command A webRTC command.
 * @return {Promise} Resolves when the webRTC operation has completed.
 */
exports.default = async function webrtcManager(webRTC, command) {
  const { operation, params } = command;
  const manager = webRTC.managers.webrtcManager;

  // General case: Don't convert the return.
  return manager[operation](...params);
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

var _logs = __webpack_require__("../../packages/kandy/src/logs/index.js");

var _uuid = __webpack_require__("../../node_modules/uuid/dist/esm-browser/index.js");

var _kandyWebrtc = __webpack_require__("../../packages/webrtc/src/interface/index.js");

var _kandyWebrtc2 = _interopRequireDefault(_kandyWebrtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Libraries.
// Proxy Plugin.
const log = _logs.logManager.getLogger('PROXY');

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
    log.debug(`${_logs.API_LOG_TAG}proxy.setChannel`);

    base.channel = (0, _channel.replyChannel)((0, _channel.jsonChannel)(channel));
    base.channel.receive = (id, data) => {
      if (!base.isReady && data.initialize) {
        log.info('Initializing local webRTC stack.', data.config);
        base.webRTC = base.webRTC(data.config);

        // Set the initial log levels if they were provided.
        if (data.logLevels) {
          const { WEBRTC, PROXY, CHANNEL } = data.logLevels;
          // Set the log level in the WebRTC stack's Log Manager.
          base.webRTC.managers.logs.setLevel(WEBRTC);
          // Also set the log level in the Remote SDK's PROXY logger.
          log.setLevel(PROXY);
          // Also also set the log level in the Remote SDK's CHANNEL logger.
          _logs.logManager.getLogger('CHANNEL').setLevel(CHANNEL);
        }

        base.isReady = true;

        // Setup listeners for events from the webRTC stack.
        (0, _webrtcEvents2.default)(base.webRTC, action => {
          // When an event is received (and has already been parsed into an
          //    action), send it over the channel.
          if (typeof action === 'object' && action.type) {
            // Make sure that the action is an actual action, though.
            log.info(`Sending event over channel: ${action.type}.`);
            const messageId = (0, _uuid.v4)().substring(0, 8);
            base.channel.send(messageId, { event: action });
          } else {
            log.debug('Proxy event listeners received unexpected format; ignoring.', action);
          }
        });

        // When responding to the initialize command, include browser details.
        const browser = base.webRTC.getBrowserDetails();
        log.info(`Browser details: ${browser.browser}, version ${browser.version}.`);

        if (api.onInit) {
          api.onInit(base.webRTC);
        }
        base.channel.reply(id, { initialized: true, browser });
        log.info('Finished initializing local webRTC stack.');
      } else if (!base.isReady) {
        // If we received a (non-initialize) message, but haven't yet initialized
        //    the local WebRTC stack, reply that this side is not ready yet.
        log.info('Client not ready! Still needs to be initialized.');
        base.channel.reply(id, { initialized: false });
      } else if (isWebrtcCommand(data)) {
        log.info(`Received ${data.type} ${data.operation} operation, performing...`);
        // WebRTC operations may be async. Need to ensure that
        //    they finish before replying to the command.
        (0, _converters2.default)(base.webRTC, data).then(result => {
          log.info(`Finished ${data.type} ${data.operation} operation, replying with result.`);
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
    log.debug(`${_logs.API_LOG_TAG}proxy.getChannel`);
    return base.channel;
  };

  /**
   * Sends data, over the channel, to the remote side.
   * @method send
   * @param {Any} args Depends on channel used.
   */
  api.send = (...args) => {
    log.debug(`${_logs.API_LOG_TAG}proxy.send`);

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

var _version = __webpack_require__("../../packages/kandy/src/common/version.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Other plugins.
const log = _logs.logManager.getLogger('PROXY');

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
function remoteClient() {
  // Log the SDK's version (templated by webpack) on initialization.
  const version = (0, _version.getVersion)();
  log.info(`Remote SDK version: ${version}`);

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
    getCapabilities: () => [],
    getVersion: () => version
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

const log = _logs.logManager.getLogger('PROXY');

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
  log.debug(`${_logs.API_LOG_TAG}media.getDevices`);

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
  log.debug(`${_logs.API_LOG_TAG}media.getMedia`);

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
  log.debug(`${_logs.API_LOG_TAG}media.getMediaById: ${mediaId}`);

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
  log.debug(`${_logs.API_LOG_TAG}media.getTrackById: ${trackId}`);

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
  log.debug(`${_logs.API_LOG_TAG}media.renderTracks: ${trackIds}, ${cssSelector}`);

  const trackManager = webRTC.managers.track;
  const tracks = trackIds.map(trackManager.get);

  const container = document.querySelector(cssSelector);
  if (!container) {
    log.debug('HTML container not found.');
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
  log.debug(`${_logs.API_LOG_TAG}media.removeTracks: ${trackIds}, ${cssSelector}`);

  const trackManager = webRTC.managers.track;
  const tracks = trackIds.map(trackManager.get);

  const container = document.querySelector(cssSelector);
  if (!container) {
    log.debug('HTML container not found.');
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

/***/ "../../packages/logger/src/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Log levels supported by Loggers.
 * When a level is set, all logs of that level and higher will be logged.
 * @type {Object}
 */
const logLevels = exports.logLevels = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  SILENT: 'SILENT'

  /**
   * Numeric values for each log level.
   * When a level is set, all logs of that level and higher will be logged.
   * @type {Object}
   */
};const levelValues = exports.levelValues = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  SILENT: 5

  /**
   * Supported Log methods and their set log level; `<logMethod>: <logLevel>`
   * Used to construct the logging methods on a Logger.
   * @type {Object}
   */
};const logMethods = exports.logMethods = {
  // Standard methods.
  trace: logLevels.TRACE,
  debug: logLevels.DEBUG,
  info: logLevels.INFO,
  warn: logLevels.WARN,
  error: logLevels.ERROR,
  // Extra console methods.
  log: logLevels.DEBUG,
  group: logLevels.DEBUG,
  groupEnd: logLevels.DEBUG,
  groupCollapsed: logLevels.DEBUG

  /**
   * The log level for all timer methods.
   * @type {string}
   */
};const timeLevel = exports.timeLevel = logLevels.DEBUG;

/***/ }),

/***/ "../../packages/logger/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logFormatter = exports.logLevels = undefined;

var _logManager = __webpack_require__("../../packages/logger/src/logManager.js");

var _logManager2 = _interopRequireDefault(_logManager);

var _logFormatter = __webpack_require__("../../packages/logger/src/logFormatter.js");

var _logFormatter2 = _interopRequireDefault(_logFormatter);

var _constants = __webpack_require__("../../packages/logger/src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Package main.
 */

// Main export is the manager's factory function.
exports.default = _logManager2.default;

// Named export for the log level constants the package uses / expects.

const logLevels = exports.logLevels = _constants.logLevels;

// Default log formatter used by the defaultLogHandler
const logFormatter = exports.logFormatter = _logFormatter2.default;

/***/ }),

/***/ "../../packages/logger/src/logFormatter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultLogFormatter;
/**
 * Default function for the SDK to use for log formatting.
 *    Uses entry information to form a prefix.
 * @method defaultLogFormatter
 * @param  {LogEntry} entry
 */
function defaultLogFormatter(entry) {
  // Compile the meta info of the log for a prefix.
  const { timestamp, level, target } = entry;

  // Find a short name to reference which Logger this log is from.
  //    This is mostly to cut down the ID if it's too long for a human to read.
  const shortId = target.id && target.id.length > 8 ? target.id.substring(0, 6) : target.id;
  const shortName = shortId ? `${target.type}/${shortId}` : target.type;

  const logInfo = `${timestamp} - ${shortName} - ${level}`;

  // Assume that the first message parameter is a string.
  const log = entry.messages[0];

  return `${logInfo} - ${log}`;
}

/***/ }),

/***/ "../../packages/logger/src/logHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultLogHandler;

var _logFormatter = __webpack_require__("../../packages/logger/src/logFormatter.js");

var _logFormatter2 = _interopRequireDefault(_logFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default function for the SDK to use for logging.
 *    Uses entry information to form a prefix, then logs to console.
 * @method defaultLogHandler
 * @param  {LogEntry} entry
 */
function defaultLogHandler(entry) {
  let { method } = entry;

  // For the time-related methods, don't actually use the console methods.
  //    The Logger already did the timing, so simply log out the info.
  if (method.includes('time')) {
    method = 'debug';
  }

  const formattedString = (0, _logFormatter2.default)(entry);
  const tail = entry.messages.slice(1);
  console[method](formattedString, ...tail);
}

/***/ }),

/***/ "../../packages/logger/src/logManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__("../../node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

var _symbol = __webpack_require__("../../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

exports.default = createManager;

var _logger = __webpack_require__("../../packages/logger/src/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _logHandler = __webpack_require__("../../packages/logger/src/logHandler.js");

var _logHandler2 = _interopRequireDefault(_logHandler);

var _constants = __webpack_require__("../../packages/logger/src/constants.js");

var _validation = __webpack_require__("../../packages/logger/src/validation.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultType = (0, _symbol2.default)('Default');

/**
 * Creates a Log Manager.
 * @method createManager
 * @param  {Object}     [options={}]
 * @param  {Function}   [options.handler]      The default log handler used for
 *    Loggers that don't have a handler set.
 * @param  {string}     [options.level='INFO'] The default log level used for
 *    Loggers that don't have a level set.
 * @return {LogManager}
 */
function createManager(options = {}) {
  const loggers = {};

  /**
   * Mapping between a Logger `type` and their default settings. Created Loggers
   *    will use their `type` settings if they exist. Otherwise the "global"
   *    options provided during Manager creation.
   * @type {Object}
   */
  const settings = {
    [defaultType]: {
      handler: options.handler ? (0, _validation.checkHandler)(options.handler) : _logHandler2.default,
      level: options.level ? (0, _validation.checkLevel)(options.level) : _constants.logLevels.INFO
    }

    /**
     * Gets a specific logger. If the logger doesn't exist, a new one will be
     *    created.
     * @method getLogger
     * @param  {string} type Human-readable type/name for the logger.
     * @param  {string} [id] A unique identifier for the logger.
     * @return {Logger}
     */
  };function getLogger(type, id = '') {
    id = String(id);

    // Combine the name and ID to create the "full" logger name.
    const loggerName = id ? `${type}-${id}` : type;

    let logger = loggers[loggerName];
    // If the logger does not exist, create a new one.
    if (!logger) {
      // This logger logs items from a specific "target".
      const target = { type, id, name: loggerName };
      const options = {
        level: getLevel(type),
        handler: getHandler(type)
      };

      logger = (0, _logger2.default)(target, options);

      // Save the new logger to be returned by future getter cals.
      loggers[loggerName] = logger;
    }

    return logger;
  }

  /**
   * Gets all created loggers, or Loggers of a specific type.
   * @method getLoggers
   * @param {string} [type] The type of Loggers to retrieve.
   * @return {Array<Logger>} List of Loggers.
   */
  function getLoggers(type) {
    if (type) {
      return (0, _values2.default)(loggers).filter(logger => logger.type === type);
    } else {
      return (0, _values2.default)(loggers);
    }
  }

  /**
   * Sets the default `level` to be used when creating Loggers.
   *
   * Can set the level "globally" or per `type`, depending if `type` is provided
   *    or not. When set for a specific type, only Loggers of that type will use
   *    the set level. When set "globally", all Loggers without a set type will
   *    use the level as a default.
   *
   * Setting the level only affects Loggers created after that point.
   * @method setLevel
   * @param  {string} type  The type of Logger to set the option for.
   * @param  {string} level The logLevel to be set.
   * @throws Throws an error if level is not a valid log level.
   * @example
   * const manager = createManager({ level: logLevels.WARN })
   *
   * // Setting the level for a type sets it for created Loggers of that type.
   * manager.setLevel('Call', logLevels.DEBUG)
   * const logger1 = manager.getLogger('Call')
   * // logger1.getLevel() === logLevels.DEBUG
   *
   * // Loggers created of types without a set level uses the Manager's level.
   * const logger2 = manager.getLogger('Auth')
   * // logger2.getLevel() === logLevels.WARN
   *
   * // Setting the level without a type changes the Manager's level.
   * manager.setLevel(logLevels.INFO)
   * const logger3 = manager.getLogger('Messaging')
   * // logger3.getLevel() === logLevels.INFO
   *
   * // Setting the level for a type does not affect previously created Loggers.
   * manager.setLevel('Auth', logLevels.INFO)
   * // logger2.getLevel() !== logLevels.INFO
   * // logger2.getLevel() === logLevels.WARN
   */
  function setLevel(type, level) {
    // Signature can be: `setLevel(type, level)` or `setLevel(level)`.
    // Normalize the parameters to always be consistent.
    if (level === undefined) {
      level = type;
      type = defaultType;
    }

    // Ensure `settings[type]` is an object.
    if (!settings[type]) {
      settings[type] = {};
    }

    // Set the level.
    settings[type].level = (0, _validation.checkLevel)(level);
  }

  /**
   * Gets the default `level` that is used when creating Loggers.
   *
   * Can get the level used "globally" or per `type`, depending if `type` is
   *    provided or not.
   *
   * See the `setLevel` API for setting these values.
   * See the Logger APIs for getting this value for an already created Logger.
   * @method getLevel
   * @param  {string} [type] A type of Logger.
   * @return {LogLevel}
   * @example
   * const manager = createManager({ level: logLevels.WARN })
   *
   * // If a type's level has not been set, gets the "global" level.
   * // manager.getLevel('Call') === logLevels.WARN
   *
   * // If a type's level has been set, gets its level.
   * manager.setLevel('Auth', logLevels.DEBUG)
   * // manager.getLevel('Auth') === logLevels.DEBUG
   *
   * // Can get the "global" level.
   * manager.setLevel(logLevels.INFO)
   * // manager.getLevel() === logLevels.INFO
   */
  function getLevel(type) {
    // Signature can be: `getLevel(type)` or `getLevel()`.
    // Normalize the parameters to always be consistent.
    type = type || defaultType;

    return settings[type] && settings[type].level || settings[defaultType].level;
  }

  /**
   * Sets the default `handler` to be used when creating Loggers.
   *
   * Can set the handler "globally" or per `type`, depending if `type` is
   *    provided or not. When set for a specific type, only Loggers of that type
   *    will use the set handler. When set "globally", all Loggers without a set
   *    type will use the handler as a default.
   *
   * Setting the handler only affects Loggers created after that point.
   * @method setHandler
   * @param  {string}     type    The type of Logger to set the option for.
   * @param  {LogHandler} handler The log handler to be set.
   * @throws Throws an error if handler is not a function.
   * @example
   * const manager = createManager({ handler: managerHandler })
   *
   * // Setting the handler for a type sets it for created Loggers of that type.
   * manager.setHandler('Call', callHandler)
   * const logger1 = manager.getLogger('Call')
   * // logger1.getHandler() === callHandler
   *
   * // Loggers created of types without a set handler uses the Manager's handler.
   * const logger2 = manager.getLogger('Auth')
   * // logger2.getHandler() === managerHandler
   *
   * // Setting the handler without a type changes the Manager's handler.
   * manager.setHandler(newHandler)
   * const logger3 = manager.getLogger('Messaging')
   * // logger3.getHandler() === newHandler
   *
   * // Setting the handler for a type does not affect previously created Loggers.
   * manager.setHandler('Auth', authHandler)
   * // logger2.getHandler() !== authHandler
   * // logger2.getHandler() === managerHandler
   */
  function setHandler(type, handler) {
    // Signature can be: `setHandler(type, handler)` or `setHandler(handler)`.
    // Normalize the parameters to always be consistent.
    if (typeof type === 'function' && handler === undefined) {
      handler = type;
      type = defaultType;
    }

    // Ensure `settings[type]` is an object.
    if (!settings[type]) {
      settings[type] = {};
    }

    // Set the handler.
    settings[type].handler = (0, _validation.checkHandler)(handler);
  }

  /**
   * Gets the default `handler` that is used when creating Loggers.
   *
   * Can get the handler used "globally" or per `type`, depending if `type` is
   *    provided or not.
   *
   * See the `setHandler` API for setting these values.
   * See the Logger APIs for getting this value for an already created Logger.
   * @method getHandler
   * @param  {string} [type] A type of Logger.
   * @return {LogHandler}
   * @example
   * const manager = createManager({ handler: managerHandler })
   *
   * // If a type's handler has not been set, gets the "global" handler.
   * // manager.getHandler('Call') === managerHandler
   *
   * // If a type's handler has been set, gets its handler.
   * manager.setHandler('Auth', authHandler)
   * // manager.getHandler('Auth') === authHandler
   *
   * // Can get the "global" handler.
   * manager.setHandler(newHandler)
   * // manager.getHandler() === newHandler
   */
  function getHandler(type) {
    // Signature can be: `getHandler(type)` or `getHandler()`.
    // Normalize the parameters to always be consistent.
    type = type || defaultType;

    return settings[type] && settings[type].handler || settings[defaultType].handler;
  }

  return {
    getLogger,
    getLoggers,
    setLevel,
    getLevel,
    setHandler,
    getHandler
  };
}

/***/ }),

/***/ "../../packages/logger/src/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createLogger;

var _constants = __webpack_require__("../../packages/logger/src/constants.js");

var _validation = __webpack_require__("../../packages/logger/src/validation.js");

var _timer = __webpack_require__("../../packages/logger/src/timer.js");

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a Logger.
 * @method createLogger
 * @param  {Object}   target          The subject of the logs from this logger.
 * @param  {Object}   options
 * @param  {Function} options.handler The function to receive/handle log entries.
 * @param  {string}   options.level   The log level to be set.
 * @return {Logger}
 */
function createLogger(target, options = {}) {
  // Validate provided options. Do not let invalid options be set.
  const level = (0, _validation.checkLevel)(options.level);
  const handler = (0, _validation.checkHandler)(options.handler);

  /**
   * Logger data.
   * @type {Object}
   * @property {Object}   target  Metadata about the "target" of the Logger.
   * @property {LogLevel} level   The currently set log level.
   * @property {Function} handler The currently set Log Handler.
   */
  const logger = {
    target,
    level,
    handler

    /**
     * Currying function to dynamically create the Logger's logging methods.
     * @method logFunc
     * @param  {string} method   Name of the logger method to create.
     * @param  {string} logLevel The log level for the method.
     * @param  {Object} [injectables] Other values to include in the LogEntry.
     * @return {Function} A log method.
     */
  };function logFunc(method, logLevel, injectables) {
    /*
     * Return the function that will be used as `log.<method>`.
     */
    return function (...args) {
      // Compare the logged level and the configured level.
      const shouldLog = _constants.levelValues[logLevel] >= _constants.levelValues[logger.level];
      // If this entry shouldn't be logged, don't do anything.
      if (!shouldLog) {
        return;
      }

      // Create the Log Entry to be handed off to the handler.
      const entry = (0, _extends3.default)({}, injectables, {
        // Meta-info about the log.
        method,
        timestamp: Date.now(),
        level: logLevel,
        target: logger.target,
        // The actual arguments logged.
        messages: [...args]
      });

      logger.handler(entry);
    };
  }

  /**
   * Sets the Logger's current log level.
   * @method setLevel
   * @param  {string} level The logLevel to be set.
   * @throws Throws an error if level is not a valid log level.
   * @example
   * logger.setLevel(logLevels.INFO)
   * logger.info('This will be logged.')
   * logger.debug('This will not be logged.')
   */
  function setLevel(level) {
    logger.level = (0, _validation.checkLevel)(level);
  }

  /**
   * Gets the Logger's current log level.
   * @method getLevel
   * @return {string} The log level.
   * @example
   * logger.setLevel(logLevels.DEBUG)
   * const level = logger.getLevel()
   * // level === logLevels.DEBUG
   */
  function getLevel() {
    return logger.level;
  }

  /**
   * Sets the Logger's current log handler.
   * @method setHandler
   * @param  {Function} handler The log handler to be set.
   * @throws Throws an error if handler is not a function.
   * @example
   * const logger = manager.getLogger('Test', '123')
   * logger.setHandler((logEntry) => {
   *    console.log(logEntry.target.name, ...logEntry.messages)
   * })
   * logger.info('I am a logged message.')
   * // logs: "Test-123 I am a logged message."
   */
  function setHandler(handler) {
    logger.handler = (0, _validation.checkHandler)(handler);
  }

  /**
   * Gets the Logger's current log handler.
   * @method getHandler
   * @return {Function} The log handler.
   * @example
   * logger.setHandler(customHandler)
   * const handler = logger.getHandler()
   * // handler === customHandler.DEBUG
   */
  function getHandler() {
    return logger.handler;
  }

  const api = {
    getHandler,
    setHandler,
    getLevel,
    setLevel,
    get type() {
      return logger.target.type;
    },
    get id() {
      return logger.target.id;
    },
    get name() {
      return logger.target.name;
    }
  };

  // For all supported log methods, create a function on the Logger for it.
  for (const method in _constants.logMethods) {
    api[method] = logFunc(method, _constants.logMethods[method]);
  }

  // Create log functions for the Timer to use.
  // Follows the same style as above logMethods, but curries it once more
  //    to align the timer parameters as needed.
  const timeLog = (message, data) => logFunc(data.event, _constants.timeLevel, { timer: data })(message);
  const timeWarn = (message, data) => logFunc('warn', _constants.logLevels.WARN, { timer: data })(message);
  const timer = (0, _timer2.default)(timeLog, timeWarn);

  return (0, _extends3.default)({}, api, timer);
}

/***/ }),

/***/ "../../packages/logger/src/timer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTimer;

var _validation = __webpack_require__("../../packages/logger/src/validation.js");

/**
 * Timer factory function.
 * The Timer imitates the Console's Time APIs.
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/console#Timers
 * @method createTimer
 * @param  {Function} log  Function for logging timer information.
 * @param  {Function} warn Function for warning about timer misuse.
 * @return {Timer}
 */
function createTimer(log, warn) {
  // Validate that params are a function.
  //    Uses funtions as `log(message, data)`.
  (0, _validation.checkHandler)(log);
  (0, _validation.checkHandler)(warn);

  /**
   * Mapping of on-going timers; <name>: <start>.
   * @type {Object}
   */
  const timers = {};

  /**
   * Starts a timer. Logs a message to indicate it was started.
   * Logs a warning if the timer has already been started.
   * @method timeStart
   * @param  {string} name Name to identify the timer.
   */
  function time(name) {
    const now = Date.now();
    // Base info about this timer call.
    const data = {
      event: 'time',
      name
    };

    if (timers.hasOwnProperty(name)) {
      data.start = timers[name];
      warn(`Timer ${name} already started.`, data);
    } else {
      // Set the new timer.
      timers[name] = now;

      data.start = now;
      log(`Timer ${name} started.`, data);
    }
  }

  /**
   * Ends a timer. Logs a message with the elapsed time.
   * @method timeEnd
   * @param  {string} name Name to identify the timer.
   */
  function timeEnd(name) {
    const now = Date.now();
    // Base info about this timer call.
    const data = {
      event: 'timeEnd',
      name,
      start: timers[name]
    };

    if (timers.hasOwnProperty(name)) {
      const start = timers[name];
      // End the timer.
      delete timers[name];

      const elapsed = now - start;
      data.end = now;
      data.elapsed = elapsed;

      log(`Timer ${name} ended, taking ${elapsed}ms.`, data);
    } else {
      warn(`Timer ${name} has not been started.`, data);
    }
  }

  /**
   * Adds a split to the timer. Logs a message with the elapsed time so far.
   * Logs a warning if the timer has not been started.
   * @method timeSplit
   * @param  {string} name Name to identify the timer.
   */
  function timeLog(name) {
    const now = Date.now();
    // Base info about this timer call.
    const data = {
      event: 'timeLog',
      name,
      start: timers[name]
    };

    if (timers.hasOwnProperty(name)) {
      const elapsed = now - timers[name];
      data.split = now;
      data.elapsed = elapsed;

      log(`Timer ${name} split, at ${elapsed}ms so far.`, data);
    } else {
      warn(`Timer ${name} has not been started.`, data);
    }
  }

  return {
    time,
    timeEnd,
    timeLog
  };
}

/***/ }),

/***/ "../../packages/logger/src/validation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkLevel = checkLevel;
exports.checkHandler = checkHandler;

var _constants = __webpack_require__("../../packages/logger/src/constants.js");

/**
 * Helper function to validate a "log level" string before its used in the library.
 * @method checkLevel
 * @param  {string} level A log level provided by a user.
 * @return {string}       The log level as expected by the library.
 * @throws Will throw an error if the `level` parameter is invalid.
 */
function checkLevel(level) {
  // Ensure: is defined and is a string.
  const upperLevel = level && level.toUpperCase && level.toUpperCase();

  // Ensure: is a supported log level.
  if (upperLevel && _constants.logLevels[upperLevel]) {
    return _constants.logLevels[upperLevel];
  } else {
    throw new Error('Provided level is not a valid log level.');
  }
}

/**
 * Helper function to validate a "log handler".
 * Basically just "is function" that throws an error if false.
 * @method checkHandler
 * @param  {Function} handler A log handler function, ideally.
 * @return {Function}         The same log handler function, ideally.
 * @throws Will throw an error if the `handler` provided is not a function.
 */
function checkHandler(handler) {
  if (handler && typeof handler === 'function') {
    return handler;
  } else {
    throw new Error('Provided log handler is not a function.');
  }
}

/***/ }),

/***/ "../../packages/webrtc/node_modules/eventemitter3/index.js":
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

/***/ "../../packages/webrtc/src/Peer/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

/**
 * Configuration object for a Peer.
 * @typedef {Object} PeerConfig
 * @property {Object} [rtcConfig] Configuration for the native RTCPeerConnection.
 * @property {String} [trickleIceMode=FULL] The initial mode the Peer will use when receiving ICE candidates.
 * @property {Boolean} [removeBundling=false] Remove the a=group attribute to stop media bundling
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
  removeBundling: false,
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

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

/**
 * Event wrapper for `icecandidate` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate
 * @method onicecandidate
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onicecandidate(listener) {
  const { nativePeer, proxyPeer, config, iceTimer, emitter, iceCandidates, log } = this;

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
    log.debug(`ICE candidate received (trickling?: ${config.trickleIceMode === _constants.PEER.TRICKLE_ICE.FULL}): `, event.candidate);

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
      log.debug('ICE collection process complete; ready for negotiation.');

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
        log.debug('Half ICE collection process complete; ready for negotiation.');
        config.trickleIceMode = _constants.PEER.TRICKLE_ICE.FULL;
        emitter.emit('onnegotiationready');
      } else {
        log.debug("Peer's half trickle threshold not reached.");
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
/**
 * Event wrapper for `iceconnectionstatechange` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange
 * @method oniceconnectionstatechange
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function oniceconnectionstatechange(listener) {
  const { nativePeer, log } = this;

  nativePeer.oniceconnectionstatechange = function (event) {
    log.debug(`Peer received iceconnectionstatechange event: ${nativePeer.iceConnectionState}`);
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

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

/**
 * Event wrapper for `icegatheringstatechange` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicegatheringstatechange
 * @method onicegatheringstatechange
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onicegatheringstatechange(listener) {
  const { nativePeer, iceTimer, log } = this;

  /**
   * Intercept the PeerConnection onicegatheringstatechange event.
   * Time how long ICE collection takes and handles scenarios when it takes
   *    too long.
   */
  nativePeer.onicegatheringstatechange = event => {
    const gatheringState = event.target.iceGatheringState;
    log.debug(`Peer iceGatheringState changed to ${gatheringState}.`);

    if (gatheringState === _constants.PEER.ICE_GATHERING_STATE.GATHERING) {
      iceTimer.start();
      // TODO: Handle "ICE collection taking too long" scenario.
    } else if (gatheringState === _constants.PEER.ICE_GATHERING_STATE.COMPLETE) {
      log.debug(`Peer took ${iceTimer.timeFromStart()}ms to collect ICE candidates.`);
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
/**
 * Event wrapper for `negotiationneeded` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onnegotiationneeded
 * @method onnegotiationneeded
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onnegotiationneeded(listener) {
  const { nativePeer, log } = this;

  nativePeer.onnegotiationneeded = function (event) {
    log.debug('Peer received negotiationneeded event.');
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
/**
 * Event wrapper for `signalingstatechange` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onsignalingstatechange
 * @method onsignalingstatechange
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function onsignalingstatechange(listener) {
  const { nativePeer, log } = this;

  nativePeer.onsignalingstatechange = function (event) {
    log.debug(`Peer received signalingstatechange event: ${nativePeer.signalingState}`);
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
/**
 * Event wrapper for `track` event.
 * Reference: developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ontrack
 * @method ontrack
 * @param  {Function} listener The listener function for the event.
 * @return {Boolean}  Whether the assignment succeeded or not.
 */
function ontrack(listener) {
  const { nativePeer, trackManager, log } = this;

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

    log.debug(`Peer received ${nativeTrack.kind} Track ${track.id}.`);
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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _timer = __webpack_require__("../../packages/webrtc/src/Peer/utils/timer.js");

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


// Libraries.
/*
 * Wrapper imports.
 * Events, methods, and properties that we want to wrap/add to the native Peer.
 */
function peer(id, config = {}, trackManager) {
  const log = _logs.logManager.getLogger('Peer', id);
  config = (0, _utils.mergeValues)(_config2.default, config);
  log.info('Creating new Peer.');

  const iceTimer = (0, _timer.createTimer)();
  const emitter = new _eventemitter2.default();

  // Create the native Peer.
  log.debug('Creating native PeerConnection.', config.rtcConfig);
  const nativePeer = new RTCPeerConnection(config.rtcConfig, { optional: [{ googDscp: true }] });

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
     * @property {Object}            log      Logger specific to this Peer.
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
    log,
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
  for (const eventName in _events2.default) {
    base.proxyPeer[eventName] = () => {};
  }

  return base.proxyPeer;
}

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add an ICE candidate to the connection.
 * @method addIceCandidate
 * @param  {RTCIceCandidate} candidate A native candidate object.
 * @return {Promise} Resolves when the candidate is successfully added.
 */
function addIceCandidate(candidate) {
  const { nativePeer, proxyPeer, id, log } = this;
  log.info('Adding ICE candidate.');

  return new _promise2.default((resolve, reject) => {
    if (proxyPeer.remoteDescription.type && proxyPeer.remoteDescription.sdp) {
      nativePeer.addIceCandidate(candidate).then(resolve).catch(reject);
    } else {
      log.info('Cannot set remote ICE candidate without a remote description.');
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
/**
 * Add a Track to the connection.
 * @method addTrack
 * @param  {Track} track A Track object.
 * @return {RTCRtpSender}
 */
function addTrack(track) {
  const { nativePeer, log } = this;
  log.info(`Adding new ${track.track.kind} track.`);

  let sender;
  try {
    sender = nativePeer.addTrack(track.track, track.getStream());
  } catch (err) {
    // TODO: Better error handling.
    log.info(`Failed to add track: ${err.message}`);
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
/**
 * Clean the Peer by closing the RTCPeerConnection.
 * @method close
 */
function close() {
  const { nativePeer, id, emitter, log } = this;
  log.info('Closing Peer.');

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
  const { nativePeer, config, dtlsRole, log } = this;
  log.info('Creating local answer.');

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
        // Modify the answer to claim the Peer doesn't support trickle ICE.
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

      log.info('Finished creating local answer.');
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
  const { nativePeer, config, log } = this;
  log.info('Creating local offer.');

  // If using unified-plan, remove options.mediaDirections.
  // This is because directions are now set in transceivers.
  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    delete options.mediaDirections;
  }

  return new _promise2.default((resolve, reject) => {
    nativePeer.createOffer(options).then(offer => {
      const sdpHandlers = [];
      if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.NONE) {
        // Modify the offer to claim the Peer doesn't support trickle ICE.
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

      log.info('Finished creating local offer.');
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

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

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
  const { proxyPeer, config } = this;

  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    const transceivers = proxyPeer.getTransceivers();
    return transceivers.find(transceiver => transceiver.sender.track == null && transceiver.receiver && transceiver.receiver.track && transceiver.receiver.track.kind === kind && transceiver.currentDirection // If this has been set, then transceiver has been used before.
    );
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve RTCStatsReport for a sender or the peerConnection.
 * @method getStats
 * @param {string} [TrackId] Return stats for peerConnection if trackId is not provided
 * @return {Promise} Resolves with the RTCStatsReport
 */
function getStats(trackId) {
  const { nativePeer, proxyPeer, log } = this;
  log.info(`Getting stats ${trackId ? 'for track.' : '.'}`);
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
        log.info(errMsg);
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
/**
 * Remove a Track from the connection.
 * @method removeTrack
 * @param  {string} trackId An id for a Track object.
 */
function removeTrack(trackId) {
  const { nativePeer, proxyPeer, log } = this;
  log.info(`Removing track ${trackId}.`);

  const track = proxyPeer.senderTracks.find(track => track.id === trackId);
  if (!track) {
    log.info(`Invalid track ID ${trackId}; no such track found.`);
    return;
  } else if (proxyPeer.signalingState === ' closed') {
    log.info('Peer is closed; cannot remove track.');
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
  const { proxyPeer, config, log } = this;
  log.info(`Replacing track ${options.trackId} with new ${newTrack.kind} track.`);

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
      sender.replaceTrack(newTrack).then(resolve).catch(error => {
        log.info(`Failed to replace track; ${error.message}`);
        reject(error);
      });
    } else {
      log.info(`Failed to replace track; could not find track ${options.trackId}.`);
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
  const { proxyPeer, log } = this;
  log.info('Sending DTMF tones.', tone);

  if (!proxyPeer.getSenders) {
    log.info('Failed to send tones; getSenders is not supported by this browser.');
    return false;
  }
  const senders = proxyPeer.getSenders();
  // Use the trackId if it was provided
  if (trackId) {
    const sender = senders.find(sender => sender.track.id === trackId);
    if (!sender) {
      log.info(`Failed to send tones; could not find track ${trackId}.`);
      return false;
    }
    insertDTMF(sender, tone, duration, intertoneGap, callback, log);
    return true;
  } else {
    let result;
    for (let i = 0; i < senders.length; i++) {
      result = insertDTMF(senders[i], tone, duration, intertoneGap, callback, log);
      if (result) {
        return true;
      }
    }

    log.info('Failed to send tones; could not find an appropriate track.');
    return false;
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
function insertDTMF(sender, tone, duration, intertoneGap, callback, log) {
  /**
   * Event handler when tone is played.
   * @private
   * @method handleToneChangeEvent
   * @param  {event} event
   */
  function handleToneChangeEvent(event) {
    if (event.tone !== '') {
      log.debug('Tone played: ' + event.tone);
    } else {
      log.debug('All tones have played.');
    }
  }

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
      log.debug(err.message);
      return false;
    }
  } else {
    log.debug('The sender requires DTMF which is not support by this browser.');
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
  const { nativePeer, proxyPeer, config, id, emitter, iceTimer, log } = this;

  // TODO: SDP pipeline here.
  log.info(`Setting local description ${desc.type} in ${proxyPeer.signalingState} state.`);
  log.debug(`Setting local description ${desc.type}:`, desc.sdp);

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
      log.debug(`Selecting DTLS role ${dtlsMatch[1]}.`);
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
        log.debug(`Took ${iceTimer.timeFromStart()}ms to collect ICE candidates before negotiation.`);
      }
      resolve();
    });

    nativePeer.setLocalDescription(desc).then(() => {
      log.info('Finished setting local description.');
      log.debug(`State is now ${proxyPeer.signalingState}.`);

      if (config.trickleIceMode === _constants.PEER.TRICKLE_ICE.FULL) {
        // Trickling ICE candidates means that we can begin negotiation immediately.
        log.debug('Ready for negotiation (full trickleICE).');
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
            log.debug('Ready for negotiation; ICE candidate collection not needed.');
            emitter.emit('onnegotiationready');
          } else {
            log.debug(`Waiting for ICE collection process (${config.trickleIceMode}).`);
            // If ICE collection never finishes, we need to time it out at some point.
            //    Start the timeout-out loop after an initial delay.
            setTimeout(() => {
              (0, _iceCollectionLoop2.default)(this, config.iceCollectionDelay);
            }, config.iceCollectionDelay);
          }
        }, 25);
      }
    }).catch(err => {
      log.info('Failed to set local description.');
      log.debug(`Peer ${id}: ${err}`);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets an SDP as the remote description of the connection.
 * @method setRemoteDescription
 * @param  {RTCSessionDescription} sessionDesc
 */
function setRemoteDescription(desc) {
  const { nativePeer, proxyPeer, id, log } = this;

  // TODO: SDP pipeline here.
  log.info(`Setting remote description ${desc.type} in ${proxyPeer.signalingState} state.`);
  log.debug(`Setting remote description ${desc.type}:`, desc.sdp);

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
      log.debug(`Selecting DTLS role ${localRole}. Remote Peer selected ${dtlsMatch[1]} DTLS role.`);
      this.dtlsRole = localRole;
    }
  }

  // TODO: Update `config.trickleIceMode` to either NONE or FULL (from HALF)
  //    depending on remote support, since HALF is only needed for initial.
  return new _promise2.default((resolve, reject) => {
    nativePeer.setRemoteDescription(desc).then(() => {
      log.info('Finished setting remote description.');
      log.debug(`State is now ${proxyPeer.signalingState}.`);
      resolve();
    }).catch(err => {
      log.info('Failed to set remote description.');
      log.debug(`Peer ${id}: ${err}`);
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

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

var _transceiverUtils = __webpack_require__("../../packages/webrtc/src/sdpUtils/transceiverUtils.js");

/**
 * Sets the direction of transceivers.
 * @method setTransceiversDirection
 * @param {string} targetDirection The desired direction to set the transceivers to.
 * @param {Object} [options] Options for specifying which transceivers should be affected. They are ordered by priority.
 * @param {Array} [options.trackIds] The optional list of track ids whose transceivers we want to set the direction of.
 * @return {Object} An object containing an `error` flag and  an array `failures` of transceivers whose directions weren't changed.
 */
function setTransceiversDirection(targetDirection, options = {}) {
  const { proxyPeer, config, log } = this;
  log.info(`Setting transceiver direction to ${targetDirection}.`);

  if ((0, _sdpSemantics.isUnifiedPlan)(config.rtcConfig.sdpSemantics)) {
    let transceivers = proxyPeer.getTransceivers();

    if (options.trackIds) {
      transceivers = transceivers.filter(transceiver => {
        return options.trackIds.includes((0, _fp.get)(['sender', 'track', 'id'], transceiver)) || options.trackIds.includes((0, _fp.get)(['receiver', 'track', 'id'], transceiver));
      });
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
    log.info('Transceiver direction modification is only available in unified-plan.');
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

var _remoteTracksActive = __webpack_require__("../../packages/webrtc/src/Peer/properties/remoteTracksActive.js");

var _remoteTracksActive2 = _interopRequireDefault(_remoteTracksActive);

var _remoteTracks = __webpack_require__("../../packages/webrtc/src/Peer/properties/remoteTracks.js");

var _remoteTracks2 = _interopRequireDefault(_remoteTracks);

var _senderTracks = __webpack_require__("../../packages/webrtc/src/Peer/properties/senderTracks.js");

var _senderTracks2 = _interopRequireDefault(_senderTracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { localDescription: _localDescription2.default, localTracks: _localTracks2.default, remoteDescription: _remoteDescription2.default, remoteTracks: _remoteTracksActive2.default, remoteTracksAll: _remoteTracks2.default, senderTracks: _senderTracks2.default };

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/localDescription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocalDescription;
/**
 * The SDP for the local end of the connection.
 * @method getLocalDescription
 */
function getLocalDescription() {
  const { nativePeer, log } = this;
  log.info('Getting local description.');

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
/**
 * @method getLocalTracks
 * @return {Array} List of active Track objects added to the Peer locally.
 */
function localTracks() {
  const { proxyPeer, trackManager, log } = this;
  log.info('Getting local tracks.');

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
/**
 * The SDP for the remote end of the connection.
 * @method getRemoteDescription
 */
function getRemoteDescription() {
  const { nativePeer, log } = this;
  log.info('Getting remote description.');

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
/**
 * @method getRemoteTracks
 * @return {Array} List of active Track objects the Peer has received remotely.
 */
function getRemoteTracks() {
  const { proxyPeer, trackManager, log } = this;
  log.info('Getting remote tracks.');

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
    // Make sure the trackManager has the track
    return track && track.getState().state === 'live';
  });
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/properties/remoteTracksActive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRemoteTracks;
/**
 * @method getRemoteTracks
 * @return {Array} List of active Track objects the Peer has received remotely.
 */
function getRemoteTracks() {
  const { proxyPeer, trackManager, log } = this;
  log.info('Getting remote tracks.');

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
/**
 * This method is similar to the `localTracks` method, however this method returns
 *  all of the sender's tracks (ended or not) rather than just the active/live ones.
 *
 * @method senderTracks
 * @return {Array} List of Track objects added to the Peer locally.
 */
function senderTracks() {
  const { proxyPeer, log } = this;
  log.info('Getting sender tracks.');

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
  const { proxyPeer, iceCandidates, emitter, config, log } = proxyBase;

  // If gathering completed during the delay, we don't need to loop anymore.
  if (proxyPeer.iceGatheringState === 'complete') {
    log.debug('ICE collection completed; stopping candidate check loop.');
    // Gathering completes when the null candidate is received. The "on
    //    negotiation ready" event should be emitted at that time.

    // Clear the candidate array without redefining it (it's a const).
    iceCandidates.length = 0;
    return;
  }

  const enoughCandidates = config.iceCollectionCheck(iceCandidates);
  const hasReachedTimeout = elapsedTime >= config.maxIceTimeout;

  if (hasReachedTimeout) {
    log.debug('ICE collection timeout reached; continuing with negotiation.');
    iceCandidates.length = 0;
    emitter.emit('onnegotiationready');
  } else if (enoughCandidates) {
    log.debug('ICE candidates sufficient for negotiation; continuing.');
    iceCandidates.length = 0;
    emitter.emit('onnegotiationready');
  } else {
    log.debug(`ICE candidates not sufficient for negotiation, delaying another ${config.iceCollectionDelay}ms.`);
    setTimeout(function () {
      iceCollectionLoop(proxyBase, elapsedTime + config.iceCollectionDelay);
    }, config.iceCollectionDelay);
  }
}

/***/ }),

/***/ "../../packages/webrtc/src/Peer/utils/timer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__("../../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

exports.createTimer = createTimer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prototype for a timer object that can keep time and be stopped and started.
 */
const timerPrototype = {
  /**
   * Start the timer
   * @returns {boolean} True if the timer was successfully started, false if it was already started.
   */
  start() {
    if (!this.isStarted()) {
      this._startTime = now();
      return true;
    }
    return false;
  },

  /**
   * Stops the timer
   * @returns {boolean} True if the timer was successfully stopped, false if it was already stopped.
   */
  stop() {
    if (this.isStarted()) {
      this._startTime = undefined;
      return true;
    }

    return false;
  },

  /**
   * @returns {boolean} True if the timer is started, false otherwise.
   */
  isStarted() {
    return Boolean(this._startTime);
  },

  /**
   * @returns {number} The time in milliseconds since the timer was started, or 0 if it wasn't started.
   */
  timeFromStart() {
    return this.isStarted() ? now() - this._startTime : 0;
  }
};

/**
 * @returns A timestamp in milliseconds since the unix-epoch
 */
function now() {
  return new Date().getTime();
}

/**
 * Create a new timer object. Timers are not started when created and need to be started manualy.
 *
 * @returns {Object} The timer object that supports the timer interface.
 */
function createTimer() {
  return (0, _create2.default)(timerPrototype);
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
exports.getWebRTCSupportCapabilities = getWebRTCSupportCapabilities;
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

var _webrtcManager = __webpack_require__("../../packages/webrtc/src/managers/webrtcManager.js");

var _webrtcManager2 = _interopRequireDefault(_webrtcManager);

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _pipeline = __webpack_require__("../../packages/webrtc/src/sdpUtils/pipeline.js");

var _pipeline2 = _interopRequireDefault(_pipeline);

var _handlers = __webpack_require__("../../packages/webrtc/src/sdpUtils/handlers.js");

var sdpHandlers = _interopRequireWildcard(_handlers);

var _utils = __webpack_require__("../../packages/webrtc/src/utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @returns An dictionary of features that are supported on this platform.
 */


// Managers.
function getWebRTCSupportCapabilities() {
  return {
    mediaDevices: Boolean(navigator.mediaDevices),
    peerConnection: Boolean(window.RTCPeerConnection)
  };
}

// Utils


// SDP helpers.
// Models.
function initialize() {
  const log = _logs.logManager.getLogger('WebRTC');

  const browserDetails = (0, _utils.getBrowserDetails)();
  if (browserDetails.version) {
    log.debug(`Browser details: ${browserDetails.browser}, version ${browserDetails.version}.`);
  } else {
    log.debug('Browser details: Not supported by webRTC adapter.');
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
  const webrtcManager = new _webrtcManager2.default();

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
      track: trackManager,
      // Give access to the Log Manager.
      // TODO: Don't include it under managers. It's here now because of
      //    ProxyStack annoyingness.
      logs: _logs.logManager,
      webrtcManager
    },
    sdp: {
      pipeline: _pipeline2.default,
      handlers: sdpHandlers
    },
    // Export this on the webRTC stack for backwards compatibility.
    getBrowserDetails: _utils.getBrowserDetails
  };
}

/***/ }),

/***/ "../../packages/webrtc/src/logs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logManager = undefined;

var _kandyLogger = __webpack_require__("../../packages/logger/src/index.js");

var _kandyLogger2 = _interopRequireDefault(_kandyLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const manager = (0, _kandyLogger2.default)({ level: 'DEBUG' });
const logManager = exports.logManager = manager;

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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * A conversion from MediaDeviceInfo.kind values to their more common terms.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/kind
 * @enum {String}
 */
const WEBRTC_DEVICE_KINDS = exports.WEBRTC_DEVICE_KINDS = {
  audioinput: 'microphone',
  videoinput: 'camera',
  audiooutput: 'speaker'

  /**
   * Manager for connected devices.
   * Keeps an up-to-date list of all devices.
   * @class DeviceManager
   */
};

// Libraries.
function DeviceManager() {
  const log = _logs.logManager.getLogger('Manager', 'Device');

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
    log.info('Media device change detected.');
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
    log.info('Checking media devices.');
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
   * Ask for permission and gets the list of available device(s) available from the end-user's devices.
   * @method setupDeviceInitialization
   * @param browserContraints
   * @return {Object}
   */

  function setupDeviceInitialization(browserContraints) {
    return new _promise2.default((resolve, reject) => {
      navigator.mediaDevices.getUserMedia(browserContraints).then(mediaStream => {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
        const devices = checkDevices();
        resolve(devices);
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
    setupDeviceInitialization,
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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _media = __webpack_require__("../../packages/webrtc/src/models/media.js");

var _media2 = _interopRequireDefault(_media);

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager for Media objects.
 * Allows the creation and retrieval of media objects.
 * @class MediaManager
 */


// Models that this manager directly manages.
function MediaManager(managers) {
  const log = _logs.logManager.getLogger('Manager', 'Media');

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
    log.debug(`Creating Media with ID: ${media.id}.`);

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

    media.on('track:muted', ({ mediaId, trackId }) => {
      // TBD: Add any extra behaviour (if needed) here
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
      log.debug(`No media found with ID: ${mediaId}.`);
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
      log.debug(`Found Media (${media.id}) with Track ${trackId}.`);
      return media.id;
    } else {
      log.debug(`Found no Media with Track ${trackId}.`);
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
}

// Libraries.

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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _Peer = __webpack_require__("../../packages/webrtc/src/Peer/index.js");

var _Peer2 = _interopRequireDefault(_Peer);

var _uuid = __webpack_require__("../../node_modules/uuid/dist/esm-browser/index.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager for Peer objects.
 * Allows the creation and retrieval of peer objects.
 * @method PeerManager
 */


// Libraries.
function PeerManager(managers) {
  const log = _logs.logManager.getLogger('Manager', 'Peer');

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
    const peer = new _Peer2.default((0, _uuid.v4)(), config, trackManager);
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
      log.debug(`No Peer found with ID: ${id}.`);
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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _session = __webpack_require__("../../packages/webrtc/src/models/session.js");

var _session2 = _interopRequireDefault(_session);

var _uuid = __webpack_require__("../../node_modules/uuid/dist/esm-browser/index.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Manager for Session objects.
 * Allows for creation and retrieval of session objects.
 * @method SessionManager
 */


// Libraries.
function SessionManager(managers) {
  const log = _logs.logManager.getLogger('Manager', 'Session');
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
    const session = new _session2.default((0, _uuid.v4)(), managers, config);
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
      log.debug(`No session found with ID: ${sessionId}.`);
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

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

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

/***/ "../../packages/webrtc/src/managers/webrtcManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WebRTCManager;
/**
 * "Manager" for general WebRTC functions.
 * @class WebRTCManager
 */
function WebRTCManager(managers) {
  /**
   * Retrieve the list of available and supported codecs based on the browser's capabilities for sending media.
   * @method getAvailableCodecs
   * @param {string} kind The kind of media of which to get the supported codecs of.
   * @return {Array}
   */
  function getAvailableCodecs(kind) {
    return RTCRtpSender.getCapabilities(kind).codecs;
  }
  /**
   * The exposed API.
   */
  return {
    getAvailableCodecs
  };
}

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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object to represent a "media" object.
 * Wraps a MediaStream object.
 * @class Media
 * TODO: Rename to Stream? Would be more straight-forward since Tracks can be
 *    managed directly (with trackManager), instead of through a "Media" object.
 */
function Media(nativeStream, isLocal) {
  const log = _logs.logManager.getLogger('Media', nativeStream.id);
  log.info(`Creating new ${isLocal ? 'local' : 'remote'} Media.`);

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
      log.debug(`Track (${track.id}) is already in Media (${id}).`);
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

    /**
     * When a track is muted, we generate our own internal event
     */
    track.on('muted', event => {
      const wrappedTrack = getTrack(event.trackId);
      if (wrappedTrack && wrappedTrack.track && wrappedTrack.track.muted) {
        // Emit our internal event.
        // Note that wrappedTrack.id is same as wrappedTrack.track & event.trackId
        emitter.emit('track:muted', {
          mediaId: id,
          trackId: event.trackId
        });
      }
    });

    /**
     * When a track is unmuted, we generate our own internal event
     */
    track.on('unmuted', event => {
      const wrappedTrack = getTrack(event.trackId);
      if (wrappedTrack && wrappedTrack.track && wrappedTrack.track.muted === false) {
        // Emit our internal event.
        // Note that wrappedTrack.id is same as wrappedTrack.track & event.trackId
        emitter.emit('track:unmuted', {
          mediaId: id,
          trackId: event.trackId
        });
      }
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

// Libraries.

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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

var _pipeline = __webpack_require__("../../packages/webrtc/src/sdpUtils/pipeline.js");

var _pipeline2 = _interopRequireDefault(_pipeline);

var _sdpSemantics = __webpack_require__("../../packages/webrtc/src/sdpUtils/sdpSemantics.js");

var _extractors = __webpack_require__("../../packages/webrtc/src/sdpUtils/extractors.js");

var _utils = __webpack_require__("../../packages/webrtc/src/utils.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object to represent a webRTC Session for a single peer.
 * "Session" being an abstraction of a webRTC connection between another peer.
 * Performs logic for initializing and connecting a peer connection.
 * Manages media added to / received from the peer connection.
 * @method Session
 */


// General Utils.


// Helpers.
function Session(id, managers, config = {}) {
  const log = _logs.logManager.getLogger('Session', id);
  log.info('Creating new Session.');
  const sdpSemantics = config.peer && config.peer.rtcConfig && config.peer.rtcConfig.sdpSemantics;
  log.debug(`Session configured for ${sdpSemantics || 'default'} SDP semantics.`);

  // Internal variables.
  const sessionId = id;
  let peerId;
  const peerManager = managers.peerManager;
  const mediaManager = managers.mediaManager;
  const trackManager = managers.trackManager;
  const emitter = new _eventemitter2.default();

  // Session settings
  const settings = {
    dscpControls: {}

    // This structure is used to remember the dtls role of a peer relative to some remote sdp.
    // key: the remote sdp's session id (o= line).
    // value: the dtls role that the current peer's local sdp has.
    // This is needed because a remote SDP with the same sessionId as a previous one may reappear later on
    //  (music-unhold scenario) and the roles will be expected to be the same.
  };const dtlsRoleRecord = new _map2.default();

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
   * @param  {Object} dscpTrackMapping Track - DSCPSettings map
   */
  function addTracks(tracks, dscpTrackMapping) {
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
              log.error(err);
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
          log.info(message);

          // Indicate that the Session has a new Track.
          emitter.emit('new:track', {
            local: true,
            trackId: track.id
          });

          settings.dscpControls = (0, _utils.mergeValues)(settings.dscpControls, dscpTrackMapping);

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
              // Remove track from session dscp settings
              if (settings.dscpControls.hasOwnProperty(track.id)) {
                log.debug(`Removing track ${track.id} from session dscp settings`);
                delete settings.dscpControls[track.id];
              }
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
            const localTrackIds = peer.localTracks.filter(track => track.track.kind === 'audio').map(track => track.id);
            const remoteTrackIds = peer.remoteTracksAll.filter(track => track.track.kind === 'audio').map(track => track.id);

            const result = peer.setTransceiversDirection(audioTransceiverTargetDir, {
              trackIds: [...localTrackIds, ...remoteTrackIds]
            });
            if (result.error) {
              log.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          if (videoTransceiverTargetDir) {
            const localTrackIds = peer.localTracks.filter(track => track.track.kind === 'video').map(track => track.id);
            const remoteTrackIds = peer.remoteTracksAll.filter(track => track.track.kind === 'video').map(track => track.id);

            const result = peer.setTransceiversDirection(videoTransceiverTargetDir, {
              trackIds: [...localTrackIds, ...remoteTrackIds]
            });
            if (result.error) {
              log.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          delete options.mediaDirections;
        }
      }

      peer.createOffer(options).then(offer => {
        if (options.sdpHandlers || _pipeline2.default.getHandlers().length) {
          log.debug('Modifying local offer with SDP pipeline.');
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

        // Set any parameters on the peer's senders if applicable
        setParameters();

        // Resolve with the _current_ local description, which may be
        //    different than the provided description due trickle ICE config.
        resolve(peer.localDescription);
      }).catch(reject);
    });
  }

  /**
   * Sets parameters on the RTCRtpSenders
   * @param {Object} mediaConstraints
   */
  function setParameters(mediaConstraints) {
    // RTCRtpSender.setParameters is currently unsupported on Firefox (or atleast not supported as it should be)
    if ((0, _utils.getBrowserDetails)().browser === 'firefox') {
      log.debug('Setting sender parameters not supported on Firefox; skipping.');
      return;
    }

    const promises = [];

    // Set the DSCPControls (i.e., network priorities) if set in the session's settings
    for (const trackId in settings.dscpControls) {
      promises.push(new _promise2.default((resolve, reject) => {
        log.debug(`Setting networkPriority ${settings.dscpControls[trackId]} for sender with track ${trackId}`);
        setNetworkPriority(trackId, settings.dscpControls[trackId]).then(resolve).catch(reject);
      }));
    }

    return _promise2.default.all(promises);
  }

  /**
   * Sets the networkPriority in the peer connection's sender's encodings.
   * @method setNetworkPriority
   * @param {string} trackId The track ID
   * @param {string} networkPriority The network priority value to set
   * @return {Promise} Resolves with the setParameters()
   */
  function setNetworkPriority(trackId, networkPriority) {
    const peer = peerManager.get(peerId);
    const senders = peer.getSenders();

    // search for a sender associated with the provided track id
    const sender = senders.find(sender => sender.track.id === trackId);
    if (sender) {
      // Need to perform a getParameters() prior to a setParameters()
      const parameters = sender.getParameters();
      parameters.encodings.forEach(encoding => {
        encoding.networkPriority = networkPriority;
      });
      return sender.setParameters(parameters);
    } else {
      const errMsg = `Cannot find sender associated with trackId: ${trackId}`;
      log.info(errMsg);
      return _promise2.default.reject(errMsg);
    }
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
    const track = trackManager.get(newTrack.id);
    return peer.replaceTrack(track.track, options).then(() => {
      // Setup handlers for the replaced track, same as adding a new track
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
          // Remove track from session dscp settings
          if (settings.dscpControls.hasOwnProperty(track.id)) {
            log.debug(`Removing track ${track.id} from session dscp settings`);
            delete settings.dscpControls[track.id];
          }
        }
      });

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
      log.info('Transceiver direction modification is only available in unified-plan.');
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
        log.debug('Modifying remote offer with SDP pipeline.');
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
              log.info(`Failed to process the following transceivers: ${result.failures}`);
            }
          }
          if (videoTransceiverTargetDir) {
            const result = peer.setTransceiversDirection(videoTransceiverTargetDir, {
              trackIds: peer.localTracks.filter(track => track.track.kind === 'video').map(track => track.id)
            });
            if (result.error) {
              log.info(`Failed to process the following transceivers: ${result.failures}`);
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
          log.debug('Modifying local answer with SDP pipeline.');
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
      log.debug('Modifying remote answer with SDP pipeline.');
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
    log.info('Ending Session.');
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
          // Remove the track from the session dscp settings
          if (settings.dscpControls.hasOwnProperty(trackId)) {
            log.debug(`Removing track ${trackId} from session dscp settings`);
            delete settings.dscpControls[trackId];
          }
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
            log.info(`Cleaning up track ${trackId}.`);
          } else {
            log.info(`Track ${trackId} not found.`);
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

      const { kind } = track.getState();
      log.info(`Received new track (${kind} : ${track.id})`);

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
    setParameters,
    // Event APIs.
    on,
    once,
    off
  };
}

// Libraries.


// SDP Helpers.

/***/ }),

/***/ "../../packages/webrtc/src/models/track.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Track;

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _eventemitter = __webpack_require__("../../packages/webrtc/node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _utils = __webpack_require__("../../packages/webrtc/src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper object for a native MediaStreamTrack object.
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack
 * @method Track
 */


// Libraries.
function Track(mediaTrack, mediaStream) {
  const log = _logs.logManager.getLogger('Track', mediaTrack.id);
  log.info(`Creating new ${mediaTrack.kind} Track.`);

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
    log.debug('Event emitted: ', event);
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

  /**
   * When a track is muted, we forward this to any listener.
   * This handler is tipically invoked by actions triggered outside the
   * direct control of the webrtc SDK.
   */
  track.onmute = event => {
    log.debug('Event emitted: ', event);
    emitter.emit('muted', {
      trackId: track.id
    });
  };

  /**
   * When a track is unmuted, we forward this to any listener.
   * This handler is tipically invoked by actions triggered outside the
   * direct control of the webrtc SDK.
   */
  track.onunmute = event => {
    log.debug('Event emitted: ', event);
    emitter.emit('unmuted', {
      trackId: track.id
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
      muted: track.muted,
      enabled: track.enabled,
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
      log.info(`Rendering track in element using selector: ${container}`);

      element = document.querySelector(container);
      if (!element) {
        log.error(`Unable to get container with selector: ${container}.`);
        return false;
      }
    } else {
      log.info('Rendering track in provided HTMLElement.');

      element = container;
    }

    // TODO: Proper error checking.

    if (containers.indexOf(element) > -1) {
      // Already rendered in element.
      log.info('Failed to render track; already rendered in element.');
      return;
    }

    containers.push(element);

    const type = track.kind;
    const renderer = document.createElement(type);

    // Make id safe for css (Firefox ids come wrapped in curly braces)
    // This makes it easier to do other manipulation on the rendering side
    // as we don't need to escape curly braces when doing element.querySelector (See removeFrom).
    renderer.id = `${type}-${(0, _utils.makeSafeForCSS)(id)}`;
    renderer.style.height = '100%';
    renderer.style.width = '100%';

    try {
      renderer.srcObject = stream;
    } catch (error) {
      log.debug('srcObject property not supported; reverting to createObjectURL.');
      // TODO: AdapterJS handles this, we should remove this.
      renderer.src = window.URL.createObjectURL(stream);
    }

    renderer.autoplay = 'true';

    if (type === 'video') {
      renderer.muted = 'true';
      // Needed for IOS autoplay.
      renderer.playsInline = 'true';
      // Needed for Android.
      renderer.play().catch(err => {
        log.debug(`Could not autoplay renderer #${renderer.id}: ${err.message}`);
      });
    }

    // Set speaker if it was provided and it's supported.
    if (speakerId && typeof renderer.setSinkId !== 'undefined') {
      // TODO: Better then/catch handling.
      renderer.setSinkId(speakerId).then(() => {
        log.debug(`Set to use speaker: ${speakerId}.`);
      }).catch(error => {
        log.debug(`Could not set speaker to use ${speakerId}: ${error.message}`);
      });
    } else if (speakerId && typeof renderer.setSinkId === 'undefined') {
      log.info('Failed to set speaker; setSinkId not supported in this browser.');
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
      log.info(`Removing track from element using selector: ${container}`);

      element = document.querySelector(container);
      if (!element) {
        log.error(`Unable to get container with selector: ${container}.`);
        return false;
      }
    } else {
      log.info('Removing track from provided HTMLElement.');

      element = container;
    }

    const index = containers.indexOf(element);
    if (index === -1) {
      // Not rendered in element.
      log.info('Failed to remove track; not rendered in element.');
      return;
    }
    containers.splice(index, 1);

    // TODO: This id may not be unique.
    // Make id safe for css (Firefox ids come wrapped in curly braces)
    // This makes it easier to do other manipulation on the rendering side
    // as we don't need to escape curly braces when doing element.querySelector.
    const rendererId = `${track.kind}-${(0, _utils.makeSafeForCSS)(id)}`;
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
    log.info('Cleaning up track.');
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
}

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

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

var _constants = __webpack_require__("../../packages/webrtc/src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = _logs.logManager.getLogger('SdpPipeline');

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

// Constants.
function removeTrickleIce(sdp, info, originalSdp) {
  sdp.media.forEach(media => {
    if (media.iceOptions === 'trickle') {
      log.debug(`Removing trickle ICE option from ${media.type} media.`);
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
function removeBundling(sdp, info, originalSdp) {
  if (sdp.groups) {
    log.debug('Removing SDP bundling groups.');
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
    for (const mLine of newSdp.media) {
      /**
       * If the generated DTLS role is different than what the Peer expects,
       *    replace it. The Peer expects the DTLS role to stay the same
       *    throughout renegotiations.
       */
      if (mLine.setup && info.dtlsRole && mLine.setup !== info.dtlsRole) {
        log.debug(`Changing DTLS role from ${mLine.setup} to ${info.dtlsRole}.`);
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

var _sdpTransform = __webpack_require__("../../node_modules/sdp-transform/lib/index.js");

var _sdpTransform2 = _interopRequireDefault(_sdpTransform);

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = _logs.logManager.getLogger('SdpPipeline');

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
// Libraries.
function runPipeline(handlers, sdp, info) {
  const objectSdp = _sdpTransform2.default.parse(sdp);

  const originalSdp = (0, _freeze2.default)(objectSdp);
  let newSdp = (0, _fp.cloneDeep)(originalSdp);

  if ((0, _fp.isArray)(handlers)) {
    handlers.forEach(handler => {
      if ((0, _fp.isFunction)(handler)) {
        newSdp = handler(newSdp, info, originalSdp);
      } else {
        log.error('SDP handler not a function; skipping.');
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

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

var _logs = __webpack_require__("../../packages/webrtc/src/logs.js");

const log = _logs.logManager.getLogger('SdpPipeline');

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
    log.info(`Invalid direction "${targetDirection}"`);
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
exports.getBrowserDetails = getBrowserDetails;

var _adapter_no_edge = __webpack_require__("../../node_modules/webrtc-adapter/out/adapter_no_edge.js");

var _adapter_no_edge2 = _interopRequireDefault(_adapter_no_edge);

var _fp = __webpack_require__("../../node_modules/lodash/fp.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * @returns The browser details as provided by webrtc-adapter
 */
function getBrowserDetails() {
  return _adapter_no_edge2.default.browserDetails;
}

/***/ })

/******/ });
});
//# sourceMappingURL=kandy.remote.js.map