webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./modules/formAttrs/index.tsx":
/*!*************************************!*\
  !*** ./modules/formAttrs/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _deadline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deadline */ "./modules/formAttrs/deadline.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ducks */ "./modules/formAttrs/ducks/index.ts");
var _jsxFileName = "/Users/shawnhu/projects/shimo-exam/modules/formAttrs/index.tsx";









var FormAttrs = function FormAttrs(_ref) {
  var url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_3__["Zoom"],
    autoClose: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    readOnly: true,
    value: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])('复制成功', {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.TOP_CENTER
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u590D\u5236\u94FE\u63A5"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'mt-3 mx-4 d-flex',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: url,
    size: 96,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u626B\u4E00\u626B\u5206\u4EAB\u7ED9\u670B\u53CB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u8868\u5355\u4FE1\u606F\u5C06\u6C47\u603B\u5230\u5173\u8054\u7684\u5DE5\u4F5C\u8868"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deadline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state;
}, function (dispatch) {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])({
    setDeadline: _ducks__WEBPACK_IMPORTED_MODULE_7__["setDeadline"],
    setPassword: _ducks__WEBPACK_IMPORTED_MODULE_7__["setPassword"],
    toggleOncePerIP: _ducks__WEBPACK_IMPORTED_MODULE_7__["toggleOncePerIP"],
    toggleOncePerDay: _ducks__WEBPACK_IMPORTED_MODULE_7__["toggleOncePerDay"]
  }, dispatch);
})(FormAttrs));

/***/ })

})
//# sourceMappingURL=doc.js.fc695f3972b90f22e819.hot-update.js.map