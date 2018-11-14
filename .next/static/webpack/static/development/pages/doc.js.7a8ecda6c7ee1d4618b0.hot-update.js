webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./modules/formAttrs/deadline.tsx":
/*!****************************************!*\
  !*** ./modules/formAttrs/deadline.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "./node_modules/react-datetime/css/react-datetime.css");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shawnhu/projects/shimo-exam/modules/formAttrs/deadline.tsx";





var Deadline = function Deadline(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox",
    checked: !!value,
    onChange: function onChange(e) {
      console.log(e.target.checked);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), ' ', "\u9650\u5236\u8868\u5355\u63D0\u4EA4\u65E5\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_2___default.a, {
    dateFormat: "YYYY-MM-DD",
    timeFormat: "HH:mm",
    locale: "zh-cn",
    value: new Date(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Deadline);

/***/ })

})
//# sourceMappingURL=doc.js.7a8ecda6c7ee1d4618b0.hot-update.js.map