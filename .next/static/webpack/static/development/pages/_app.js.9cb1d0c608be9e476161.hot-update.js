webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: actionTypes, reducer, setDeadline, setPassword, toggleOncePerIP, toggleOncePerDay, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeadline", function() { return setDeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPassword", function() { return setPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOncePerIP", function() { return toggleOncePerIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOncePerDay", function() { return toggleOncePerDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var InitialState = {
  deadline: null,
  password: null,
  oncePerIP: false,
  oncePerDay: false
};
var actionTypes = {
  SET_DEADLINE: 'SET_DEADLINE',
  SET_PASSWORD: 'SET_PASSWORD',
  TOGGLE_ONCE_PER_IP: 'TOGGLE_ONCE_PER_IP',
  TOGGLE_ONCE_PER_DAY: 'TOGGLE_ONCE_PER_DAY' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.SET_DEADLINE:
      return _objectSpread({}, state, {
        deadline: action.value
      });

    case actionTypes.SET_PASSWORD:
      return _objectSpread({}, state, {
        password: action.value
      });

    case actionTypes.TOGGLE_ONCE_PER_IP:
      return _objectSpread({}, state, {
        oncePerIP: !state.oncePerIP
      });

    case actionTypes.TOGGLE_ONCE_PER_DAY:
      return _objectSpread({}, state, {
        oncePerDay: !state.oncePerDay
      });

    default:
      return state;
  }
}; // ACTIONS

var setDeadline = function setDeadline(dispatch) {
  return function (deadline) {
    return dispatch({
      type: actionTypes.SET_DEADLINE,
      value: deadline
    });
  };
};
var setPassword = function setPassword(dispatch) {
  return function (password) {
    return dispatch({
      type: actionTypes.SET_PASSWORD,
      value: password
    });
  };
};
var toggleOncePerIP = function toggleOncePerIP(dispatch) {
  return function () {
    return dispatch({
      type: actionTypes.TOGGLE_ONCE_PER_IP
    });
  };
};
var toggleOncePerDay = function toggleOncePerDay(dispatch) {
  return function () {
    return dispatch({
      type: actionTypes.TOGGLE_ONCE_PER_DAY
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ })

})
//# sourceMappingURL=_app.js.9cb1d0c608be9e476161.hot-update.js.map