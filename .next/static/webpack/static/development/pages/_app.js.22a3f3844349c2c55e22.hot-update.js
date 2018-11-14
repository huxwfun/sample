webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./modules/formAttrs/ducks/index.ts":
/*!******************************************!*\
  !*** ./modules/formAttrs/ducks/index.ts ***!
  \******************************************/
/*! exports provided: default, setDeadline, setPassword, toggleOncePerIP, toggleOncePerDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeadline", function() { return setDeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPassword", function() { return setPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOncePerIP", function() { return toggleOncePerIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOncePerDay", function() { return toggleOncePerDay; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InitialState = {
  deadline: null,
  password: null,
  oncePerIP: false,
  oncePerDay: false // Actions

};
var SET_DEADLINE = 'formAttrs/setDeadline';
var SET_PASSWORD = 'formAttrs/setPassword';
var TOGGLE_ONCE_PER_IP = 'formAttrs/toggleOncePerIP';
var TOGGLE_ONCE_PER_DAY = 'formAttrs/toggleOncePerDay'; // Reducer

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_DEADLINE:
      return _objectSpread({}, state, {
        deadline: action.value
      });

    case SET_PASSWORD:
      return _objectSpread({}, state, {
        password: action.value
      });

    case TOGGLE_ONCE_PER_IP:
      return _objectSpread({}, state, {
        oncePerIP: !state.oncePerIP
      });

    case TOGGLE_ONCE_PER_DAY:
      return _objectSpread({}, state, {
        oncePerDay: !state.oncePerDay
      });

    default:
      return state;
  }
} // Action Creators

var setDeadline = function setDeadline(deadline) {
  return {
    type: SET_DEADLINE,
    value: deadline
  };
};
var setPassword = function setPassword(password) {
  return {
    type: SET_PASSWORD,
    value: password
  };
};
var toggleOncePerIP = function toggleOncePerIP() {
  return {
    type: TOGGLE_ONCE_PER_IP
  };
};
var toggleOncePerDay = function toggleOncePerDay() {
  return {
    type: TOGGLE_ONCE_PER_DAY
  };
};

/***/ }),

/***/ "./modules/index.ts":
/*!**************************!*\
  !*** ./modules/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formAttrs_ducks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formAttrs/ducks */ "./modules/formAttrs/ducks/index.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  formAttrs: _formAttrs_ducks__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./modules/index.ts");



function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_modules__WEBPACK_IMPORTED_MODULE_2__["default"]), initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ })

})
//# sourceMappingURL=_app.js.22a3f3844349c2c55e22.hot-update.js.map