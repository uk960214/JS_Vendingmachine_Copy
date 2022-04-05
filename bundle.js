/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _domain_VendingMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/VendingMachine */ "./src/js/domain/VendingMachine.ts");
/* harmony import */ var _domain_Authorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/Authorization */ "./src/js/domain/Authorization.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/js/view/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _view_generalTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/generalTemplate */ "./src/js/view/generalTemplate.js");
/* harmony import */ var _view_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/Snackbar */ "./src/js/view/Snackbar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./src/js/constants/index.ts");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }









var _vendingMachine = /*#__PURE__*/new WeakMap();

var _authorization = /*#__PURE__*/new WeakMap();

var _userButtonContainer = /*#__PURE__*/new WeakMap();

var _userRenderList = /*#__PURE__*/new WeakMap();

var _nonUserRenderList = /*#__PURE__*/new WeakMap();

var _headerContainer = /*#__PURE__*/new WeakMap();

var _appContainer = /*#__PURE__*/new WeakMap();

var _tabMenuNavigation = /*#__PURE__*/new WeakMap();

var _initRoutes = /*#__PURE__*/new WeakSet();

var _render = /*#__PURE__*/new WeakMap();

var _renderUser = /*#__PURE__*/new WeakSet();

var _renderNonUser = /*#__PURE__*/new WeakSet();

var _renderNav = /*#__PURE__*/new WeakSet();

var _renderTab = /*#__PURE__*/new WeakSet();

var _handleUserButtonContainerClick = /*#__PURE__*/new WeakMap();

var _handleSelectBoxToggle = /*#__PURE__*/new WeakMap();

var _handleLogout = /*#__PURE__*/new WeakMap();

var _handleTabMenuChange = /*#__PURE__*/new WeakMap();

var App = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function App() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

  _classPrivateMethodInitSpec(this, _renderTab);

  _classPrivateMethodInitSpec(this, _renderNav);

  _classPrivateMethodInitSpec(this, _renderNonUser);

  _classPrivateMethodInitSpec(this, _renderUser);

  _classPrivateMethodInitSpec(this, _initRoutes);

  _classPrivateFieldInitSpec(this, _vendingMachine, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _authorization, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _userButtonContainer, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _userRenderList, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _nonUserRenderList, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _headerContainer, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _appContainer, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _tabMenuNavigation, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _authorization).isLoggedIn) {
        _classPrivateMethodGet(_this, _renderUser, _renderUser2).call(_this);

        return;
      }

      _classPrivateMethodGet(_this, _renderNonUser, _renderNonUser2).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _handleUserButtonContainerClick, {
    writable: true,
    value: function value(_ref) {
      var target = _ref.target;
      if (target.id === 'user-button') (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _handleSelectBoxToggle).call(_this, target);
      if (target.id === 'logout-button') (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _handleLogout).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _handleSelectBoxToggle, {
    writable: true,
    value: function value(target) {
      var selectBox = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-button-select-box');

      if (selectBox) {
        selectBox === null || selectBox === void 0 ? void 0 : selectBox.remove();
        return;
      }

      target.insertAdjacentHTML('afterend', _view_generalTemplate__WEBPACK_IMPORTED_MODULE_8__.userButtonSelectBoxTemplate);
    }
  });

  _classPrivateFieldInitSpec(this, _handleLogout, {
    writable: true,
    value: function value() {
      var _selectDom;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _authorization).logout();

      (_selectDom = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-button-select-box')) === null || _selectDom === void 0 ? void 0 : _selectDom.remove();
      window.location.href = _constants__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_ROUTE.NON_USER;
      window.location.reload();
    }
  });

  _classPrivateFieldInitSpec(this, _handleTabMenuChange, {
    writable: true,
    value: function value(e) {
      e.preventDefault();
      var newHash = e.target.hash;
      var previousHash = window.location.hash;

      if (!Object.keys((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _userRenderList)).includes(newHash) && !Object.keys((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _nonUserRenderList)).includes(newHash) || newHash === previousHash) {
        return;
      }

      window.history.pushState({}, null, newHash);

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _render).call(_this);
    }
  });

  this.snackBar = new _view_Snackbar__WEBPACK_IMPORTED_MODULE_9__["default"]();

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _vendingMachine, new _domain_VendingMachine__WEBPACK_IMPORTED_MODULE_4__["default"]());

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _authorization, new _domain_Authorization__WEBPACK_IMPORTED_MODULE_5__["default"]());

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _appContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#app'));

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userButtonContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.user-button-container'));

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _headerContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('header'));

  _classPrivateMethodGet(this, _initRoutes, _initRoutes2).call(this);

  window.addEventListener('popstate', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _render));
  window.addEventListener('DOMContentLoaded', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _render));

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleUserButtonContainerClick));
});

function _initRoutes2() {
  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userRenderList, {
    '#/user-info': new _view__WEBPACK_IMPORTED_MODULE_6__.UserInfoPage((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _authorization), this.snackBar),
    '#/product': new _view__WEBPACK_IMPORTED_MODULE_6__.ProductTab((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _vendingMachine), this.snackBar),
    '#/charge': new _view__WEBPACK_IMPORTED_MODULE_6__.ChargeTab((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _vendingMachine), this.snackBar),
    '#/purchase': new _view__WEBPACK_IMPORTED_MODULE_6__.PurchaseTab((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _vendingMachine), this.snackBar)
  });

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _nonUserRenderList, {
    '#/login': new _view__WEBPACK_IMPORTED_MODULE_6__.LoginPage((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _authorization), this.snackBar),
    '#/register': new _view__WEBPACK_IMPORTED_MODULE_6__.RegisterPage((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _authorization), this.snackBar),
    '#/purchase': new _view__WEBPACK_IMPORTED_MODULE_6__.PurchaseTab((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _vendingMachine), this.snackBar)
  });
}

function _renderUser2() {
  var _selectDom2, _selectDom3;

  var path = window.location.hash || _constants__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_ROUTE.USER;

  _classPrivateMethodGet(this, _renderNav, _renderNav2).call(this, path);

  (_selectDom2 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#login-link-button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer))) === null || _selectDom2 === void 0 ? void 0 : _selectDom2.remove();

  _classPrivateMethodGet(this, _renderTab, _renderTab2).call(this, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userRenderList), path);

  (_selectDom3 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-button-select-box')) === null || _selectDom3 === void 0 ? void 0 : _selectDom3.remove();
  if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer))) return;

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer).insertAdjacentHTML('afterbegin', (0,_view_generalTemplate__WEBPACK_IMPORTED_MODULE_8__.userButtonTemplate)((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _authorization).name));
}

function _renderNonUser2() {
  var _selectDom4, _selectDom5;

  var path = window.location.hash || _constants__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_ROUTE.NON_USER;
  (_selectDom4 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#tab-menu-navigation')) === null || _selectDom4 === void 0 ? void 0 : _selectDom4.remove();
  (_selectDom5 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer))) === null || _selectDom5 === void 0 ? void 0 : _selectDom5.remove();

  if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#login-link-button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer))) {
    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _userButtonContainer).insertAdjacentHTML('afterbegin', _view_generalTemplate__WEBPACK_IMPORTED_MODULE_8__.loginLinkButtonTemplate);
  }

  _classPrivateMethodGet(this, _renderTab, _renderTab2).call(this, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _nonUserRenderList), path);
}

function _renderNav2(path) {
  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _tabMenuNavigation, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#tab-menu-navigation'));

  if (!(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNavigation)) {
    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _headerContainer).insertAdjacentHTML('beforeend', _view_generalTemplate__WEBPACK_IMPORTED_MODULE_8__.navigationTemplate);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _tabMenuNavigation, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#tab-menu-navigation', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _headerContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNavigation).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleTabMenuChange));
  }

  var previousMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.current', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNavigation));
  previousMenuButton === null || previousMenuButton === void 0 ? void 0 : previousMenuButton.classList.remove('current');
  var currentMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)("[href=\"".concat(path, "\"]"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNavigation));
  currentMenuButton === null || currentMenuButton === void 0 ? void 0 : currentMenuButton.classList.add('current');
}

function _renderTab2(routeList, path) {
  if (!routeList[path]) {
    var notFoundContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.createMainElement)(_view_generalTemplate__WEBPACK_IMPORTED_MODULE_8__.notFoundTabTemplate);

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _appContainer).replaceChild(notFoundContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('main'));

    return;
  }

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _appContainer).replaceChild(routeList[path].tabElements, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('main'));
}

new App();

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectDom": () => (/* binding */ selectDom),
/* harmony export */   "createMainElement": () => (/* binding */ createMainElement),
/* harmony export */   "getInputValuesFromForm": () => (/* binding */ getInputValuesFromForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

function selectDom(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelector(selector);
}
function createMainElement(template) {
  var mainElement = document.createElement('main');
  mainElement.insertAdjacentHTML('beforeend', template);
  return mainElement;
}
function getInputValuesFromForm(form) {
  var inputArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelectorAll('input', form));

  var inputData = inputArray.reduce(function (dataObject, _ref) {
    var name = _ref.name,
        value = _ref.value;
    dataObject[name] = value;
    return dataObject;
  }, {});
  return inputData;
}

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickNumberInRange": () => (/* binding */ pickNumberInRange),
/* harmony export */   "generateUniqueId": () => (/* binding */ generateUniqueId)
/* harmony export */ });
function pickNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomHexString() {
  return Array.from({
    length: 3
  }).reduce(function (prev) {
    return "".concat(prev).concat(pickNumberInRange(0, 255).toString(16));
  }, '');
}

function generateUniqueId(list) {
  var newId = generateRandomHexString();

  while (list.includes(newId)) {
    newId = generateRandomHexString();
  }

  return newId;
}

/***/ }),

/***/ "./src/js/view/ChargeTab/ChargeTab.js":
/*!********************************************!*\
  !*** ./src/js/view/ChargeTab/ChargeTab.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChargeTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _ChargeTabTemplates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChargeTabTemplates */ "./src/js/view/ChargeTab/ChargeTabTemplates.js");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _vendingMachine = /*#__PURE__*/new WeakMap();

var _ChargeTabContainer = /*#__PURE__*/new WeakMap();

var _addChangeForm = /*#__PURE__*/new WeakMap();

var _moneyInput = /*#__PURE__*/new WeakMap();

var _totalChange = /*#__PURE__*/new WeakMap();

var _coinStatusTable = /*#__PURE__*/new WeakMap();

var _handleAddChange = /*#__PURE__*/new WeakMap();

var _renderCoinStatus = /*#__PURE__*/new WeakSet();

var _resetInput = /*#__PURE__*/new WeakSet();

var ChargeTab = /*#__PURE__*/function () {
  function ChargeTab(machine, snackbar) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChargeTab);

    _classPrivateMethodInitSpec(this, _resetInput);

    _classPrivateMethodInitSpec(this, _renderCoinStatus);

    _classPrivateFieldInitSpec(this, _vendingMachine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _ChargeTabContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addChangeForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _moneyInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalChange, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _coinStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleAddChange, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var money = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _moneyInput).valueAsNumber;

        try {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _vendingMachine).addChange(money);

          _classPrivateMethodGet(_this, _renderCoinStatus, _renderCoinStatus2).call(_this);

          _classPrivateMethodGet(_this, _resetInput, _resetInput2).call(_this);
        } catch (_ref) {
          var message = _ref.message;

          _this.snackbar.addToMessageList(message);
        }
      }
    });

    this.snackbar = snackbar;

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _vendingMachine, machine);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _ChargeTabContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createMainElement)(_ChargeTabTemplates__WEBPACK_IMPORTED_MODULE_5__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addChangeForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#add-change-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _ChargeTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _moneyInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#money-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _ChargeTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _totalChange, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#total-change', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _ChargeTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _coinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('.coin-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _ChargeTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleAddChange));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChargeTab, [{
    key: "tabElements",
    get: function get() {
      _classPrivateMethodGet(this, _renderCoinStatus, _renderCoinStatus2).call(this);

      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _ChargeTabContainer);
    }
  }]);

  return ChargeTab;
}();

function _renderCoinStatus2() {
  var _this2 = this;

  var _classPrivateFieldGet2 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _vendingMachine),
      coinStatusList = _classPrivateFieldGet2.coinStatusList;

  coinStatusList.forEach(function (_ref2) {
    var name = _ref2.name,
        count = _ref2.count;
    var coinTableData = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)("td[data-coin-name=\"".concat(name, "\"]"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2, _coinStatusTable));
    coinTableData.textContent = "".concat(count, "\uAC1C");
  });
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _totalChange).textContent = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _vendingMachine).totalChange;
}

function _resetInput2() {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _moneyInput).value = '';
}



/***/ }),

/***/ "./src/js/view/ChargeTab/ChargeTabTemplates.js":
/*!*****************************************************!*\
  !*** ./src/js/view/ChargeTab/ChargeTabTemplates.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");

var chargeTabTemplate =
/* html */
"\n<section class=\"form-section\" aria-labelledby=\"charge-tab-title\">\n  <h2 class=\"tab-title\" id=\"charge-tab-title\">\uC794\uB3C8 \uCDA9\uC804\uD558\uAE30</h2>\n  <form id=\"add-change-form\">\n    <div class=\"instructions\">\n      <h3>\uD83D\uDCB0 \uC794\uB3C8 \uCDA9\uC804 \uC2DC \uC720\uC758 \uC0AC\uD56D</h3>\n      <ul class=\"instructions-list\">\n        <li>\uCD5C\uC18C \uCDA9\uC804 \uAE08\uC561: 10\uC6D0</li>\n        <li>\uCD5C\uB300 \uCDA9\uC804 \uAC00\uB2A5 \uAE08\uC561: 100,000\uC6D0</li>\n      </ul>\n    </div>\n    <label for=\"change\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n    <div class=\"input-form-wrapper\">\n      <input type=\"number\" id=\"money-input\" placeholder=\"\uAE08\uC561\" name=\"change\" min=\"10\" max=\"100000\" step=\"10\" required/>\n      <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n    </div>\n  </form>\n  <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"total-change\">0</span>\uC6D0</p>\n</section>\n<table class=\"coin-status-table\">\n  <caption>\n    \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n  </caption>\n  <tr>\n    <th>\uB3D9\uC804</th>\n    <th>\uAC1C\uC218</th>\n  </tr>\n  <tr>\n    <td>500\uC6D0</td>\n    <td data-coin-name='".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_500_WON, "'>0\uAC1C</td>\n  </tr>\n  <tr>\n    <td>100\uC6D0</td>\n    <td data-coin-name='").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_100_WON, "'>0\uAC1C</td>\n  </tr>\n  <tr>\n    <td>50\uC6D0</td>\n    <td data-coin-name='").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_50_WON, "'>0\uAC1C</td>\n  </tr>\n  <tr>\n    <td>10\uC6D0</td>\n    <td data-coin-name='").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_10_WON, "'>0\uAC1C</td>\n  </tr>\n</table>\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chargeTabTemplate);

/***/ }),

/***/ "./src/js/view/LoginPage/LoginPage.js":
/*!********************************************!*\
  !*** ./src/js/view/LoginPage/LoginPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _LoginPageTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginPageTemplate */ "./src/js/view/LoginPage/LoginPageTemplate.js");







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _snackbar = /*#__PURE__*/new WeakMap();

var _authorization = /*#__PURE__*/new WeakMap();

var _loginPage = /*#__PURE__*/new WeakMap();

var _handleLogin = /*#__PURE__*/new WeakMap();

var LoginPage = /*#__PURE__*/function () {
  function LoginPage(authorization, snackBar) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPage);

    _classPrivateFieldInitSpec(this, _snackbar, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _authorization, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _loginPage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleLogin, {
      writable: true,
      value: function () {
        var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(e) {
          var _getInputValuesFromFo, email, password, message;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _getInputValuesFromFo = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.getInputValuesFromForm)(e.target), email = _getInputValuesFromFo.email, password = _getInputValuesFromFo.password;
                  _context.prev = 2;
                  _context.next = 5;
                  return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _authorization).login({
                    email: email,
                    password: password
                  });

                case 5:
                  window.location.href = _constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ROUTE.USER;
                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  message = _context.t0.message;

                  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _snackbar).addToMessageList(message);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 8]]);
        }));

        function value(_x) {
          return _value.apply(this, arguments);
        }

        return value;
      }()
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _snackbar, snackBar);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _authorization, authorization);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _loginPage, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.createMainElement)(_LoginPageTemplate__WEBPACK_IMPORTED_MODULE_8__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _loginPage).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleLogin));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginPage, [{
    key: "tabElements",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _loginPage);
    }
  }]);

  return LoginPage;
}();



/***/ }),

/***/ "./src/js/view/LoginPage/LoginPageTemplate.js":
/*!****************************************************!*\
  !*** ./src/js/view/LoginPage/LoginPageTemplate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var loginPageTemplate =
/* html */
"\n  <h2>\uB85C\uADF8\uC778</h2>\n  <form class=\"auth-form\">\n    <label for=\"email\">\uC774\uBA54\uC77C</label>\n    <input\n      type=\"email\"\n      name=\"email\"\n      id=\"email-input\"\n      placeholder=\"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n      required\n    />\n    <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n    <input\n      type=\"password\"\n      name=\"password\"\n      id=\"password-input\"\n      placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n      required\n    />\n    <button type=\"submit\" class=\"submit-button\">\uB85C\uADF8\uC778</button>\n    <p>\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <a href=\"#/register\" id=\"register-page-link\">\uD68C\uC6D0\uAC00\uC785</a></p>\n  </form>\n";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginPageTemplate);

/***/ }),

/***/ "./src/js/view/ProductTab/ProductTab.js":
/*!**********************************************!*\
  !*** ./src/js/view/ProductTab/ProductTab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductTabTemplate */ "./src/js/view/ProductTab/ProductTabTemplate.js");







function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _vendingMachine = /*#__PURE__*/new WeakMap();

var _productContainer = /*#__PURE__*/new WeakMap();

var _addProductForm = /*#__PURE__*/new WeakMap();

var _addProductNameInput = /*#__PURE__*/new WeakMap();

var _addProductPriceInput = /*#__PURE__*/new WeakMap();

var _addProductStockInput = /*#__PURE__*/new WeakMap();

var _productStatusTable = /*#__PURE__*/new WeakMap();

var _renderInitialProducts = /*#__PURE__*/new WeakSet();

var _handleAddProductForm = /*#__PURE__*/new WeakMap();

var _resetInput = /*#__PURE__*/new WeakSet();

var _handleProductStatus = /*#__PURE__*/new WeakMap();

var _handleProductUpdate = /*#__PURE__*/new WeakMap();

var _handleProductUpdateConfirm = /*#__PURE__*/new WeakMap();

var _handleProductUpdateCancel = /*#__PURE__*/new WeakMap();

var _handleProductRemove = /*#__PURE__*/new WeakMap();

var ProductTab = /*#__PURE__*/function () {
  function ProductTab(machine, snackbar) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProductTab);

    _classPrivateMethodInitSpec(this, _resetInput);

    _classPrivateMethodInitSpec(this, _renderInitialProducts);

    _classPrivateFieldInitSpec(this, _vendingMachine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _productContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductNameInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductPriceInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductStockInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _productStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleAddProductForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var name = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addProductNameInput).value;

        var price = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addProductPriceInput).valueAsNumber;

        var stock = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addProductStockInput).valueAsNumber;

        try {
          var id = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).addProduct({
            name: name,
            price: price,
            stock: stock
          });

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _productStatusTable).insertAdjacentHTML('beforeend', (0,_ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__.productTableRowTemplate)({
            name: name,
            price: price,
            stock: stock,
            id: id
          }));

          _classPrivateMethodGet(_this, _resetInput, _resetInput2).call(_this);
        } catch (_ref) {
          var message = _ref.message;

          _this.snackbar.addToMessageList(message);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductStatus, {
      writable: true,
      value: function value(_ref2) {
        var target = _ref2.target;
        var classList = target.classList;

        if (classList.contains('update-product-button')) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _handleProductUpdate).call(_this, target);
        }

        if (classList.contains('remove-product-button')) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _handleProductRemove).call(_this, target);
        }

        if (classList.contains('confirm-update-button')) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _handleProductUpdateConfirm).call(_this, target);
        }

        if (classList.contains('cancel-update-button')) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _handleProductUpdateCancel).call(_this, target);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdate, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var name = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-name', targetTableRow).textContent;
        var price = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-price', targetTableRow).textContent;
        var stock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-stock', targetTableRow).textContent;
        var id = target.dataset.productId;
        targetTableRow.insertAdjacentHTML('afterend', (0,_ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__.productUpdateTableRowTemplate)({
          name: name,
          price: price,
          stock: stock,
          id: id
        }));
        targetTableRow.remove();
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdateConfirm, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var name = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.update-product-name-input', targetTableRow).value;
        var price = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.update-product-price-input', targetTableRow).valueAsNumber;
        var stock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.update-product-stock-input', targetTableRow).valueAsNumber;
        var id = target.dataset.productId;

        try {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).updateProduct(id, {
            name: name,
            price: price,
            stock: stock
          });

          targetTableRow.insertAdjacentHTML('afterend', (0,_ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__.productTableRowTemplate)({
            name: name,
            price: price,
            stock: stock,
            id: id
          }));
          targetTableRow.remove();
        } catch (_ref3) {
          var message = _ref3.message;

          _this.snackbar.addToMessageList(message);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdateCancel, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var id = target.dataset.productId;

        try {
          var _classPrivateFieldGet2 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).productList[id],
              name = _classPrivateFieldGet2.name,
              price = _classPrivateFieldGet2.price,
              stock = _classPrivateFieldGet2.stock;

          targetTableRow.insertAdjacentHTML('afterend', (0,_ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__.productTableRowTemplate)({
            name: name,
            price: price,
            stock: stock,
            id: id
          }));
          targetTableRow.remove();
        } catch (_ref4) {
          var message = _ref4.message;

          _this.snackbar.addToMessageList(message);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductRemove, {
      writable: true,
      value: function value(target) {
        var productRow = target.closest('tr');
        var productName = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-name', productRow).textContent;
        var confirmProductDeleteMessage = "".concat(productName, ": ").concat(_constants__WEBPACK_IMPORTED_MODULE_6__.CONFIRM_DELETE_MESSAGE);

        if (window.confirm(confirmProductDeleteMessage)) {
          var id = target.dataset.productId;

          try {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).removeProduct(id);

            productRow.remove();
          } catch (_ref5) {
            var message = _ref5.message;

            _this.snackbar.addToMessageList(message);
          }
        }
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _vendingMachine, machine);

    this.snackbar = snackbar;

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _productContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.createMainElement)(_ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__.productTabTemplate));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _addProductForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#add-product-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _addProductNameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#add-product-name-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _addProductPriceInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#add-product-price-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _addProductStockInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#add-product-stock-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _productStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _handleAddProductForm));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productStatusTable).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _handleProductStatus));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductTab, [{
    key: "tabElements",
    get: function get() {
      _classPrivateMethodGet(this, _renderInitialProducts, _renderInitialProducts2).call(this);

      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer);
    }
  }]);

  return ProductTab;
}();

function _renderInitialProducts2() {
  var _classPrivateFieldGet3 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _vendingMachine),
      productList = _classPrivateFieldGet3.productList;

  var productTableRows = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(productList)).reduce(function (htmlString, _ref6) {
    var _ref7 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 2),
        id = _ref7[0],
        _ref7$ = _ref7[1],
        name = _ref7$.name,
        price = _ref7$.price,
        stock = _ref7$.stock;

    return "".concat(htmlString).concat((0,_ProductTabTemplate__WEBPACK_IMPORTED_MODULE_8__.productTableRowTemplate)({
      name: name,
      price: price,
      stock: stock,
      id: id
    }));
  }, '');

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productContainer).querySelectorAll('.product-table-row').forEach(function (element) {
    return element.remove();
  });

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productStatusTable).insertAdjacentHTML('beforeend', productTableRows);
}

function _resetInput2() {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductNameInput).value = '';
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductPriceInput).value = '';
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductStockInput).value = '';

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductNameInput).focus();
}



/***/ }),

/***/ "./src/js/view/ProductTab/ProductTabTemplate.js":
/*!******************************************************!*\
  !*** ./src/js/view/ProductTab/ProductTabTemplate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productTabTemplate": () => (/* binding */ productTabTemplate),
/* harmony export */   "productTableRowTemplate": () => (/* binding */ productTableRowTemplate),
/* harmony export */   "productUpdateTableRowTemplate": () => (/* binding */ productUpdateTableRowTemplate)
/* harmony export */ });
var productTabTemplate =
/* html */
"\n<section class=\"form-section\" aria-labelledby=\"product-tab-title\">\n  <h2 class=\"tab-title\" id=\"product-tab-title\">\uC0C1\uD488 \uCD94\uAC00\uD558\uAE30</h2>\n  <form id=\"add-product-form\">\n    <div class=\"instructions\">\n      <h3>\uD83D\uDED2\uC0C1\uD488 \uCD94\uAC00 \uC2DC \uC720\uC758 \uC0AC\uD56D</h3>\n      <ul class=\"instructions-list\">\n        <li>\uC0C1\uD488\uBA85: 1\uC790 \uC774\uC0C1 10\uC790 \uC774\uD558</li>\n        <li>\uAC00\uACA9: 100\uC6D0 \uC774\uC0C1 10000\uC6D0 \uC774\uD558, 10\uC6D0 \uB2E8\uC704</li>\n        <li>\uC218\uB7C9: 1\uAC1C \uC774\uC0C1 20\uAC1C \uC774\uD558</li>\n      </ul>\n    </div>\n    <fieldset>\n      <legend>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n      <div class=\"input-wrapper\">\n        <label for=\"add-product-name\">\uC0C1\uD488\uBA85\n        <input type=\"text\" name=\"add-product-name\" id=\"add-product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" required/>\n        </label>\n      </div>\n      <div class=\"input-wrapper\">\n        <label for=\"add-product-price\">\uC0C1\uD488 \uAC00\uACA9</label>\n        <input type=\"number\" name=\"add-product-price\" id=\"add-product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required/>\n      </div>\n      <div class=\"input-wrapper\">\n        <label for=\"add-product-stock\">\uC0C1\uD488 \uC218\uB7C9</label>\n        <input type=\"number\" name=\"add-product-stock\" id=\"add-product-stock-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required/>\n      </div>\n      <button type=\"submit\" class=\"submit-button\">\uCD94\uAC00</button>\n    </fieldset>\n  </form>\n</section>\n<table class=\"product-status-table\">\n  <caption>\n    \uC0C1\uD488 \uD604\uD669\n  </caption>\n  <tr>\n    <th>\uC0C1\uD488\uBA85</th>\n    <th>\uAC00\uACA9</th>\n    <th>\uC218\uB7C9</th>\n    <th>\uAD00\uB9AC</th>\n  </tr>\n</table>\n";
var productTableRowTemplate = function productTableRowTemplate(_ref) {
  var name = _ref.name,
      price = _ref.price,
      stock = _ref.stock,
      id = _ref.id;
  return (
    /* html */
    "\n<tr class=\"product-table-row\">\n  <td class=\"product-name\">".concat(name, "</td>\n  <td class=\"product-price\">").concat(price, "</td>\n  <td class=\"product-stock\">").concat(stock, "</td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"update-product-button\" data-product-id=").concat(id, ">\uC218\uC815</button>\n      <button type=\"button\" class=\"remove-product-button\" data-product-id=").concat(id, ">\uC0AD\uC81C</button>\n    </div>\n  </td>\n</tr>\n")
  );
};
var productUpdateTableRowTemplate = function productUpdateTableRowTemplate(_ref2) {
  var name = _ref2.name,
      price = _ref2.price,
      stock = _ref2.stock,
      id = _ref2.id;
  return (
    /* html */
    "\n<tr>\n  <td><input type=\"text\" class=\"update-product-name-input\" value=\"".concat(name, "\" /></td>\n  <td><input type=\"number\" class=\"update-product-price-input\" value=\"").concat(price, "\" /></td>\n  <td><input type=\"number\" class=\"update-product-stock-input\" value=\"").concat(stock, "\" /></td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"confirm-update-button\" data-product-id=").concat(id, ">\n      \uD655\uC778\n      </button>\n      <button type=\"button\" class=\"cancel-update-button\" data-product-id=").concat(id, ">\n      \uCDE8\uC18C\n      </button>\n    </div>\n  </td>\n</tr>\n")
  );
};

/***/ }),

/***/ "./src/js/view/PurchaseTab/PurchaseTab.js":
/*!************************************************!*\
  !*** ./src/js/view/PurchaseTab/PurchaseTab.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _PurchaseTabTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PurchaseTabTemplate */ "./src/js/view/PurchaseTab/PurchaseTabTemplate.js");







function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _vendingMachine = /*#__PURE__*/new WeakMap();

var _snackbar = /*#__PURE__*/new WeakMap();

var _purchaseContainer = /*#__PURE__*/new WeakMap();

var _userMoneyForm = /*#__PURE__*/new WeakMap();

var _userMoneyInput = /*#__PURE__*/new WeakMap();

var _totalUserMoney = /*#__PURE__*/new WeakMap();

var _productStatusTable = /*#__PURE__*/new WeakMap();

var _returnChangeButton = /*#__PURE__*/new WeakMap();

var _coinStatusTable = /*#__PURE__*/new WeakMap();

var _attachEventListeners = /*#__PURE__*/new WeakSet();

var _renderInitialProducts = /*#__PURE__*/new WeakSet();

var _handleUserMoney = /*#__PURE__*/new WeakMap();

var _handlePurchase = /*#__PURE__*/new WeakMap();

var _renderProductPurchase = /*#__PURE__*/new WeakSet();

var _handleChangeReturn = /*#__PURE__*/new WeakMap();

var PurchaseTab = /*#__PURE__*/function () {
  function PurchaseTab(machine, snackbar) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PurchaseTab);

    _classPrivateMethodInitSpec(this, _renderProductPurchase);

    _classPrivateMethodInitSpec(this, _renderInitialProducts);

    _classPrivateMethodInitSpec(this, _attachEventListeners);

    _classPrivateFieldInitSpec(this, _vendingMachine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _snackbar, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _purchaseContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userMoneyForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userMoneyInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalUserMoney, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _productStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _returnChangeButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _coinStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleUserMoney, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var userMoney = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _userMoneyInput).valueAsNumber;

        try {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).addUserMoney(userMoney);

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _totalUserMoney).textContent = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).userMoney;
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _userMoneyInput).value = '';
        } catch (_ref) {
          var message = _ref.message;

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _snackbar).addToMessageList(message);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handlePurchase, {
      writable: true,
      value: function value(_ref2) {
        var target = _ref2.target;
        if (!target.classList.contains('purchase-product-button')) return;
        var targetTableRow = target.closest('tr');
        var id = target.dataset.productId;

        try {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).purchaseProduct(id);

          _classPrivateMethodGet(_this, _renderProductPurchase, _renderProductPurchase2).call(_this, id, targetTableRow);
        } catch (_ref3) {
          var message = _ref3.message;

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _snackbar).addToMessageList(message);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleChangeReturn, {
      writable: true,
      value: function value() {
        try {
          var returnCoins = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).returnChange();

          returnCoins.forEach(function (_ref4) {
            var name = _ref4.name,
                count = _ref4.count;
            var coinTableData = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)("td[data-coin-name=\"".concat(name, "\"]"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _coinStatusTable));
            coinTableData.textContent = "".concat(count, "\uAC1C");
          });
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _totalUserMoney).textContent = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).userMoney;

          if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _vendingMachine).userMoney !== 0) {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _snackbar).addToMessageList(_constants__WEBPACK_IMPORTED_MODULE_6__.NOT_ENOUGH_CHANGE_MESSAGE);
          }
        } catch (_ref5) {
          var message = _ref5.message;

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _snackbar).addToMessageList(message);
        }
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _vendingMachine, machine);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _snackbar, snackbar);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _purchaseContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.createMainElement)(_PurchaseTabTemplate__WEBPACK_IMPORTED_MODULE_8__.purchaseTabTemplate));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _userMoneyForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-money-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _userMoneyInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#user-money-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _userMoneyForm)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _totalUserMoney, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#total-insert', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _productStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _returnChangeButton, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('#return-change-button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _coinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.coin-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer)));

    _classPrivateMethodGet(this, _attachEventListeners, _attachEventListeners2).call(this);

    _classPrivateMethodGet(this, _renderInitialProducts, _renderInitialProducts2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PurchaseTab, [{
    key: "tabElements",
    get: function get() {
      _classPrivateMethodGet(this, _renderInitialProducts, _renderInitialProducts2).call(this);

      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer);
    }
  }]);

  return PurchaseTab;
}();

function _attachEventListeners2() {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _userMoneyForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _handleUserMoney));

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productStatusTable).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _handlePurchase));

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _returnChangeButton).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _handleChangeReturn));
}

function _renderInitialProducts2() {
  var _classPrivateFieldGet2 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _vendingMachine),
      productList = _classPrivateFieldGet2.productList;

  var productTableRows = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(productList)).reduce(function (htmlString, _ref6) {
    var _ref7 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 2),
        id = _ref7[0],
        _ref7$ = _ref7[1],
        name = _ref7$.name,
        price = _ref7$.price,
        stock = _ref7$.stock;

    return "".concat(htmlString).concat((0,_PurchaseTabTemplate__WEBPACK_IMPORTED_MODULE_8__.purchaseProductTableRowTemplate)({
      name: name,
      price: price,
      stock: stock,
      id: id
    }));
  }, '');

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer).querySelectorAll('.product-table-row').forEach(function (element) {
    return element.remove();
  });

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productStatusTable).insertAdjacentHTML('beforeend', productTableRows);
}

function _renderProductPurchase2(id, tableRow) {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _totalUserMoney).textContent = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _vendingMachine).userMoney;
  var stockTableData = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.product-stock', tableRow);

  var updatedProduct = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _vendingMachine).productList[id];

  if (!updatedProduct) {
    tableRow.remove();
    return;
  }

  stockTableData.textContent = updatedProduct.stock;
}



/***/ }),

/***/ "./src/js/view/PurchaseTab/PurchaseTabTemplate.js":
/*!********************************************************!*\
  !*** ./src/js/view/PurchaseTab/PurchaseTabTemplate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "purchaseTabTemplate": () => (/* binding */ purchaseTabTemplate),
/* harmony export */   "purchaseProductTableRowTemplate": () => (/* binding */ purchaseProductTableRowTemplate)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");

var purchaseTabTemplate =
/* html */
"\n<section class=\"form-section\" aria-labelledby=\"purchase-tab-title\">\n  <h2 class=\"tab-title\" id=\"purchase-tab-title\">\uC0C1\uD488 \uAD6C\uB9E4\uD558\uAE30</h2>\n  \n  <form id=\"user-money-form\">\n    <div class=\"instructions\">\n      <h3>\uD83D\uDED2\uAE08\uC561 \uD22C\uC785 \uC2DC \uC720\uC758 \uC0AC\uD56D</h3>\n      <ul class=\"instructions-list\">\n        <li>\uAE08\uC561\uC740 \uCD5C\uC18C 10\uC6D0, \uCD5C\uB300 10000\uC6D0\uAE4C\uC9C0 \uD22C\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li>\n        <li>\uD22C\uC785\uD55C \uAE08\uC561\uC73C\uB85C \uC0C1\uD488 \uAD6C\uB9E4 \uD6C4 \uC794\uC561\uC774 \uB0A8\uC740 \uACBD\uC6B0 \uD558\uB2E8\uC758 \uC794\uB3C8 \uBC18\uD658 \uBC84\uD2BC\uC73C\uB85C \uBC18\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li>\n        <li>\uC790\uD310\uAE30\uC758 \uC794\uB3C8\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC794\uC561\uC744 \uBAA8\uB450 \uBC18\uD658\uD558\uC9C0 \uBABB\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li>\n      </ul>\n    </div>\n    <label for=\"user-money\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n    <div class=\"input-form-wrapper\">\n      <input type=\"number\" id=\"user-money-input\" placeholder=\"\uAE08\uC561\" name=\"user-money\" min=\"10\" max=\"10000\" step=\"10\" required/>\n      <button type=\"submit\" class=\"submit-button\">\uD22C\uC785</button>\n    </div>\n  </form>\n  <p>\uD22C\uC785\uD55C \uAE08\uC561: <span id=\"total-insert\">0</span>\uC6D0</p>\n</section>\n<table class=\"product-status-table\">\n  <caption>\n    \uAD6C\uB9E4 \uAC00\uB2A5\uD55C \uC0C1\uD488 \uD604\uD669\n  </caption>\n  <tr>\n    <th>\uC0C1\uD488\uBA85</th>\n    <th>\uAC00\uACA9</th>\n    <th>\uC218\uB7C9</th>\n    <th>\uAD00\uB9AC</th>\n  </tr>\n</table>\n<table class=\"coin-status-table\">\n  <caption>\n    \uC794\uB3C8 \uBC18\uD658\n  </caption>\n  <tr>\n    <th>\uB3D9\uC804</th>\n    <th>\uAC1C\uC218</th>\n  </tr>\n  <tr>\n    <td>500\uC6D0</td>\n    <td data-coin-name='".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_500_WON, "'>0\uAC1C</td>\n  </tr>\n  <tr>\n    <td>100\uC6D0</td>\n    <td data-coin-name='").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_100_WON, "'>0\uAC1C</td>\n  </tr>\n  <tr>\n    <td>50\uC6D0</td>\n    <td data-coin-name='").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_50_WON, "'>0\uAC1C</td>\n  </tr>\n  <tr>\n    <td>10\uC6D0</td>\n    <td data-coin-name='").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_NAME_STRING.COIN_10_WON, "'>0\uAC1C</td>\n  </tr>\n</table>\n<button type=\"button\" id=\"return-change-button\">\uBC18\uD658</button>\n");
var purchaseProductTableRowTemplate = function purchaseProductTableRowTemplate(_ref) {
  var name = _ref.name,
      price = _ref.price,
      stock = _ref.stock,
      id = _ref.id;
  return (
    /* html */
    "\n  <tr class=\"product-table-row\">\n    <td class=\"product-name\">".concat(name, "</td>\n    <td class=\"product-price\">").concat(price, "</td>\n    <td class=\"product-stock\">").concat(stock, "</td>\n    <td>\n      <div class=\"table-button-wrapper\">\n        <button type=\"button\" class=\"purchase-product-button\" data-product-id=\"").concat(id, "\">\uAD6C\uB9E4</button>\n      </div>\n    </td>\n  </tr>\n  ")
  );
};

/***/ }),

/***/ "./src/js/view/RegisterPage/RegisterPage.js":
/*!**************************************************!*\
  !*** ./src/js/view/RegisterPage/RegisterPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _RegisterPageTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RegisterPageTemplate */ "./src/js/view/RegisterPage/RegisterPageTemplate.js");







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _snackbar = /*#__PURE__*/new WeakMap();

var _authorization = /*#__PURE__*/new WeakMap();

var _registerPage = /*#__PURE__*/new WeakMap();

var _registerForm = /*#__PURE__*/new WeakMap();

var _handleRegister = /*#__PURE__*/new WeakMap();

var RegisterPage = /*#__PURE__*/function () {
  function RegisterPage(authorization, snackBar) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RegisterPage);

    _classPrivateFieldInitSpec(this, _snackbar, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _authorization, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _registerPage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _registerForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleRegister, {
      writable: true,
      value: function () {
        var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(e) {
          var _getInputValuesFromFo, email, name, password, passwordConfirm, message;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _getInputValuesFromFo = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.getInputValuesFromForm)(e.target), email = _getInputValuesFromFo.email, name = _getInputValuesFromFo.name, password = _getInputValuesFromFo.password, passwordConfirm = _getInputValuesFromFo['password-confirm'];
                  _context.prev = 2;
                  _context.next = 5;
                  return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _authorization).register({
                    email: email,
                    name: name,
                    password: password,
                    passwordConfirm: passwordConfirm
                  });

                case 5:
                  window.location.href = _constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ROUTE.USER;
                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  message = _context.t0.message;

                  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _snackbar).addToMessageList(message);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 8]]);
        }));

        function value(_x) {
          return _value.apply(this, arguments);
        }

        return value;
      }()
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _snackbar, snackBar);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _authorization, authorization);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _registerPage, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.createMainElement)(_RegisterPageTemplate__WEBPACK_IMPORTED_MODULE_8__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _registerForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_7__.selectDom)('.auth-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _registerPage)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _registerForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleRegister));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RegisterPage, [{
    key: "tabElements",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _registerPage);
    }
  }]);

  return RegisterPage;
}();



/***/ }),

/***/ "./src/js/view/RegisterPage/RegisterPageTemplate.js":
/*!**********************************************************!*\
  !*** ./src/js/view/RegisterPage/RegisterPageTemplate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var registerPageTemplate =
/* html */
"\n  <h2>\uD68C\uC6D0\uAC00\uC785</h2>\n  <div class=\"instructions\">\n    <h3>\uD83D\uDC68\u200D\uD83C\uDFEB \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC720\uC758 \uC0AC\uD56D</h3>\n    <ul class=\"instructions-list\">\n      <li>\uBAA8\uB4E0 \uD56D\uBAA9\uC740 \uD544\uC218\uB85C \uC791\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.</li>\n      <li>\uC774\uBA54\uC77C\uC740 \uC911\uBCF5\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li>\n      <li>\uC774\uB984\uC740 2\uC790-6\uC790 \uAE38\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.</li>\n      <li>\uBE44\uBC00\uBC88\uD638\uB294 8\uC790 \uC774\uC0C1 20\uC790 \uC774\uD558\uC758 \uAE38\uC774\uB85C \uC601\uC18C\uBB38\uC790, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4.</li>\n    </ul>\n  </div>\n  <form class=\"auth-form\">\n    <label for=\"email\">\uC774\uBA54\uC77C</label>\n    <input\n      type=\"email\"\n      name=\"email\"\n      id=\"email-input\"\n      placeholder=\"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n    />\n    <label for=\"name\">\uC774\uB984</label>\n    <input\n      type=\"text\"\n      name=\"name\"\n      id=\"name-input\"\n      placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n    />\n    <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n    <input\n      type=\"password\"\n      name=\"password\"\n      id=\"password-input\"\n      placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n    />\n    <label for=\"password-confirm\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n    <input\n      type=\"password\"\n      name=\"password-confirm\"\n      id=\"password-confirm-input\"\n      placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n    />\n    <button type=\"submit\" class=\"submit-button\">\uD68C\uC6D0\uAC00\uC785</button>\n    <p>\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694? <a href=\"#/login\">\uB85C\uADF8\uC778</a></p>\n  </form>\n";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerPageTemplate);

/***/ }),

/***/ "./src/js/view/Snackbar.js":
/*!*********************************!*\
  !*** ./src/js/view/Snackbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snackbar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _app = /*#__PURE__*/new WeakMap();

var _messageList = /*#__PURE__*/new WeakMap();

var _canShow = /*#__PURE__*/new WeakMap();

var _handleSnackbarUpdate = /*#__PURE__*/new WeakMap();

var _renderSnackbar = /*#__PURE__*/new WeakMap();

var _fadeOutSnackbar = /*#__PURE__*/new WeakSet();

var _removeSnackbarWithDelay = /*#__PURE__*/new WeakSet();

var Snackbar = /*#__PURE__*/function () {
  function Snackbar() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Snackbar);

    _classPrivateMethodInitSpec(this, _removeSnackbarWithDelay);

    _classPrivateMethodInitSpec(this, _fadeOutSnackbar);

    _classPrivateFieldInitSpec(this, _app, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _messageList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _canShow, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleSnackbarUpdate, {
      writable: true,
      value: function value() {
        if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _messageList).length > 0 && (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _canShow)) {
          var nextMessage = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _messageList).shift();

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _renderSnackbar).call(_this, nextMessage);
        }

        window.requestAnimationFrame((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _handleSnackbarUpdate));
      }
    });

    _classPrivateFieldInitSpec(this, _renderSnackbar, {
      writable: true,
      value: function value(message) {
        (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _canShow, false);

        var snackbar = document.createElement('div');
        snackbar.className = 'snackbar';
        snackbar.textContent = message;

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _app).append(snackbar);

        snackbar.classList.toggle('show');

        _classPrivateMethodGet(_this, _fadeOutSnackbar, _fadeOutSnackbar2).call(_this, snackbar).then(function () {
          return _classPrivateMethodGet(_this, _removeSnackbarWithDelay, _removeSnackbarWithDelay2).call(_this, snackbar);
        });
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _app, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#app'));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _messageList, []);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _canShow, true);

    window.requestAnimationFrame((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleSnackbarUpdate));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Snackbar, [{
    key: "addToMessageList",
    value: function addToMessageList(message) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _messageList).push(message);
    }
  }]);

  return Snackbar;
}();

function _fadeOutSnackbar2(snackbar) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(snackbar.classList.toggle('show'));
    }, 1000);
  });
}

function _removeSnackbarWithDelay2(snackbar) {
  var _this2 = this;

  new Promise(function () {
    setTimeout(function () {
      snackbar.remove();

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2, _canShow, true);
    }, 500);
  });
}



/***/ }),

/***/ "./src/js/view/UserInfoPage/UserInfoPage.js":
/*!**************************************************!*\
  !*** ./src/js/view/UserInfoPage/UserInfoPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfoPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _UserInfoPageTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserInfoPageTemplate */ "./src/js/view/UserInfoPage/UserInfoPageTemplate.js");







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _snackbar = /*#__PURE__*/new WeakMap();

var _authorization = /*#__PURE__*/new WeakMap();

var _userInfoPage = /*#__PURE__*/new WeakMap();

var _userInfoForm = /*#__PURE__*/new WeakMap();

var _handleUpdateUserInfo = /*#__PURE__*/new WeakMap();

var UserInfoPage = /*#__PURE__*/function () {
  function UserInfoPage(authorization, snackBar) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserInfoPage);

    _classPrivateFieldInitSpec(this, _snackbar, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _authorization, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userInfoPage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userInfoForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleUpdateUserInfo, {
      writable: true,
      value: function () {
        var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(e) {
          var _getInputValuesFromFo, email, name, password, passwordConfirm, updateData, message;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _getInputValuesFromFo = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.getInputValuesFromForm)(e.target), email = _getInputValuesFromFo.email, name = _getInputValuesFromFo.name, password = _getInputValuesFromFo.password, passwordConfirm = _getInputValuesFromFo['password-confirm'];
                  _context.prev = 2;
                  updateData = {
                    email: email,
                    name: name
                  };

                  if (password !== '') {
                    updateData.password = password;
                    updateData.passwordConfirm = passwordConfirm;
                  }

                  _context.next = 7;
                  return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _authorization).update(updateData);

                case 7:
                  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _snackbar).addToMessageList(_constants__WEBPACK_IMPORTED_MODULE_7__.USER_DATA_CHANGED_MESSAGE);

                  _context.next = 14;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  message = _context.t0.message;

                  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _snackbar).addToMessageList(message);

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 10]]);
        }));

        function value(_x) {
          return _value.apply(this, arguments);
        }

        return value;
      }()
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _snackbar, snackBar);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _authorization, authorization);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _userInfoPage, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.createMainElement)((0,_UserInfoPageTemplate__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _authorization))));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _userInfoForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.auth-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userInfoPage)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userInfoForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleUpdateUserInfo));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserInfoPage, [{
    key: "tabElements",
    get: function get() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#email-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userInfoForm)).value = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _authorization).email;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#name-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userInfoForm)).value = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _authorization).name;
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userInfoPage);
    }
  }]);

  return UserInfoPage;
}();



/***/ }),

/***/ "./src/js/view/UserInfoPage/UserInfoPageTemplate.js":
/*!**********************************************************!*\
  !*** ./src/js/view/UserInfoPage/UserInfoPageTemplate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var userInfoPageTemplate = function userInfoPageTemplate(_ref) {
  var email = _ref.email,
      name = _ref.name;
  return (
    /* html */
    "\n  <h2>\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</h2>\n  <form class=\"auth-form\">\n    <label for=\"email\">\uC774\uBA54\uC77C</label>\n    <input\n      type=\"email\"\n      name=\"email\"\n      id=\"email-input\"\n      value=\"".concat(email, "\"\n      disabled\n    />\n    <label for=\"name\">\uC774\uB984</label>\n    <input\n      type=\"text\"\n      name=\"name\"\n      id=\"name-input\"\n      value=\"").concat(name, "\"\n    />\n    <label for=\"password\">\uBE44\uBC00\uBC88\uD638</label>\n    <input\n      type=\"password\"\n      name=\"password\"\n      id=\"password-input\"\n      placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n    />\n    <label for=\"password-confirm\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n    <input\n      type=\"password\"\n      name=\"password-confirm\"\n      id=\"password-confirm-input\"\n      placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.\"\n    />\n    <button type=\"submit\" class=\"submit-button\">\uC218\uC815\uD558\uAE30</button>\n  </form>\n")
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInfoPageTemplate);

/***/ }),

/***/ "./src/js/view/generalTemplate.js":
/*!****************************************!*\
  !*** ./src/js/view/generalTemplate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginLinkButtonTemplate": () => (/* binding */ loginLinkButtonTemplate),
/* harmony export */   "userButtonTemplate": () => (/* binding */ userButtonTemplate),
/* harmony export */   "userButtonSelectBoxTemplate": () => (/* binding */ userButtonSelectBoxTemplate),
/* harmony export */   "notFoundTabTemplate": () => (/* binding */ notFoundTabTemplate),
/* harmony export */   "navigationTemplate": () => (/* binding */ navigationTemplate)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");

var loginLinkButtonTemplate =
/* html */
"\n<a class=\"tab-menu-button\" id=\"login-link-button\" href=\"#/login\">\uB85C\uADF8\uC778</a>\n";

var getUserImage = function getUserImage(userName) {
  return (
    /* html */
    "\n<svg width=\"50px\" height=\"50px\" id=\"user-button-image\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n  viewBox=\"0 0 50 50\">\n  <circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"#d6f4f8\" stroke-width=\"0\" />\n  <text id=\"user-name-text\" x=\"50%\" y=\"36\" text-anchor=\"middle\" font-size=\"36\">\n    ".concat(userName[0], "\n  </text>\n</svg>\n")
  );
};

var userButtonTemplate = function userButtonTemplate(userName) {
  return (
    /* html */
    "\n  <button id=\"user-button\">".concat(getUserImage(userName), "</button>\n")
  );
};
var userButtonSelectBoxTemplate =
/* html */
"\n  <ul id=\"user-button-select-box\">\n    <li class=\"select-box-item\" >\n      <a href=\"#/user-info\" id=\"user-info-link\">\uC0AC\uC6A9\uC790 \uC815\uBCF4</a>\n    </li>\n    <li class=\"select-box-item\">\n      <button type=\"button\" id=\"logout-button\">\uB85C\uADF8\uC544\uC6C3</button>\n    </li>\n  </ul>\n";
var notFoundTabTemplate =
/* html */
"\n<section title=\"\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD398\uC774\uC9C0\" class=\"not-found-section\">\n  <h2>\uD83D\uDEAB <br> \uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098 <br> \uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</h2>\n  <a href=\"".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ROUTE.NON_USER, "\" class=\"tab-menu-button\">\uC2DC\uC791 \uD398\uC774\uC9C0\uB85C</a>\n</section>");
var navigationTemplate =
/* html */
"\n  <nav id=\"tab-menu-navigation\">\n    <a id=\"product-tab-menu\" class=\"tab-menu-button\" href=\"#/product\">\uC0C1\uD488 \uAD00\uB9AC</a>\n    <a id=\"charge-tab-menu\" class=\"tab-menu-button\" href=\"#/charge\">\uC794\uB3C8 \uCDA9\uC804</a>\n    <a id=\"purchase-tab-menu\" class=\"tab-menu-button\" href=\"#/purchase\">\n      \uC0C1\uD488 \uAD6C\uB9E4\n    </a>\n  </nav>\n";

/***/ }),

/***/ "./src/js/view/index.js":
/*!******************************!*\
  !*** ./src/js/view/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTab": () => (/* reexport safe */ _ProductTab_ProductTab__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ChargeTab": () => (/* reexport safe */ _ChargeTab_ChargeTab__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PurchaseTab": () => (/* reexport safe */ _PurchaseTab_PurchaseTab__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "LoginPage": () => (/* reexport safe */ _LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "RegisterPage": () => (/* reexport safe */ _RegisterPage_RegisterPage__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "UserInfoPage": () => (/* reexport safe */ _UserInfoPage_UserInfoPage__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _ProductTab_ProductTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductTab/ProductTab */ "./src/js/view/ProductTab/ProductTab.js");
/* harmony import */ var _ChargeTab_ChargeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChargeTab/ChargeTab */ "./src/js/view/ChargeTab/ChargeTab.js");
/* harmony import */ var _PurchaseTab_PurchaseTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseTab/PurchaseTab */ "./src/js/view/PurchaseTab/PurchaseTab.js");
/* harmony import */ var _LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginPage/LoginPage */ "./src/js/view/LoginPage/LoginPage.js");
/* harmony import */ var _RegisterPage_RegisterPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegisterPage/RegisterPage */ "./src/js/view/RegisterPage/RegisterPage.js");
/* harmony import */ var _UserInfoPage_UserInfoPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserInfoPage/UserInfoPage */ "./src/js/view/UserInfoPage/UserInfoPage.js");







/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  word-break: keep-all;\r\n  line-height: 1.5;\r\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\r\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\r\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\r\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\r\n}\r\n\r\n:root {\r\n  --button-bg-color: #f5f5f5;\r\n  --button-bg-highlight-color: #00bcd429;\r\n  --button-text-default-color: #000000;\r\n  --border-preset: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nbody {\r\n  background-color: #f9f9f9;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#app {\r\n  width: 600px;\r\n  min-height: 800px;\r\n  margin-top: 32px;\r\n  background-color: #ffffff;\r\n  border: var(--border-preset);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 45px 60px;\r\n  gap: 52px;\r\n  position: relative;\r\n}\r\n\r\n.user-button-container {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.tab-title {\r\n  text-align: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 52px;\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  padding: 8px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  background-color: var(--button-bg-color);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--button-bg-highlight-color);\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n/* 숫자 입력란 화살표 숨김 */\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type='number'] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.not-found-section {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.not-found-section h2 {\r\n  text-align: center;\r\n}\r\n\r\n#login-link-button {\r\n  display: block\r\n}\r\n\r\n#user-button {\r\n  background-color: transparent;\r\n  z-index: 0;\r\n}\r\n\r\n#user-button::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n#user-button-select-box {\r\n  position:absolute;\r\n  \r\n  width: 100px;\r\n  top: 64px;\r\n  right: -15px;\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#user-button-select-box li {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border: var(--border-preset);\r\n  background-color: #f3f3f3;\r\n  text-align: center;\r\n}\r\n\r\n#user-button-select-box li:hover {\r\n  background-color: var(--button-bg-highlight-color);\r\n}\r\n\r\n#user-info-link {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  color: #000000;\r\n}\r\n\r\n#user-info-link:visited {\r\n  color: #000000;\r\n}\r\n\r\n#logout-button {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  font-size: 1rem;\r\n  border-radius: 0;\r\n}\r\n\r\n#logout-button:hover {\r\n  background-color: transparent;\r\n}", "",{"version":3,"sources":["webpack://./src/css/base.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oBAAoB;EACpB,gBAAgB;EAChB,0BAA0B;EAC1B;;wEAEsE;AACxE;;AAEA;EACE,0BAA0B;EAC1B,sCAAsC;EACtC,oCAAoC;EACpC,8CAA8C;AAChD;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,aAAa;AACf;;AAEA,kBAAkB;AAClB,gCAAgC;AAChC;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA,YAAY;AACZ;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;AACF;;AAEA;EACE,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,iBAAiB;;EAEjB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,4BAA4B;EAC5B,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  word-break: keep-all;\r\n  line-height: 1.5;\r\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\r\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\r\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\r\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\r\n}\r\n\r\n:root {\r\n  --button-bg-color: #f5f5f5;\r\n  --button-bg-highlight-color: #00bcd429;\r\n  --button-text-default-color: #000000;\r\n  --border-preset: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nbody {\r\n  background-color: #f9f9f9;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#app {\r\n  width: 600px;\r\n  min-height: 800px;\r\n  margin-top: 32px;\r\n  background-color: #ffffff;\r\n  border: var(--border-preset);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 45px 60px;\r\n  gap: 52px;\r\n  position: relative;\r\n}\r\n\r\n.user-button-container {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.tab-title {\r\n  text-align: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 52px;\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  padding: 8px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  background-color: var(--button-bg-color);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--button-bg-highlight-color);\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n/* 숫자 입력란 화살표 숨김 */\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type='number'] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.not-found-section {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.not-found-section h2 {\r\n  text-align: center;\r\n}\r\n\r\n#login-link-button {\r\n  display: block\r\n}\r\n\r\n#user-button {\r\n  background-color: transparent;\r\n  z-index: 0;\r\n}\r\n\r\n#user-button::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n#user-button-select-box {\r\n  position:absolute;\r\n  \r\n  width: 100px;\r\n  top: 64px;\r\n  right: -15px;\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#user-button-select-box li {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border: var(--border-preset);\r\n  background-color: #f3f3f3;\r\n  text-align: center;\r\n}\r\n\r\n#user-button-select-box li:hover {\r\n  background-color: var(--button-bg-highlight-color);\r\n}\r\n\r\n#user-info-link {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  color: #000000;\r\n}\r\n\r\n#user-info-link:visited {\r\n  color: #000000;\r\n}\r\n\r\n#logout-button {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  font-size: 1rem;\r\n  border-radius: 0;\r\n}\r\n\r\n#logout-button:hover {\r\n  background-color: transparent;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  gap: 5px;\r\n}\r\n\r\nlegend {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.input-wrapper {\r\n  width: 120px;\r\n}\r\n\r\n.input-form-wrapper {\r\n  margin: 0 auto;\r\n}\r\n\r\ninput {\r\n  width: 110px;\r\n  border: 1px solid #b4b4b4;\r\n  border-radius: 4px;\r\n  padding: 8px;\r\n}\r\n\r\n.submit-button {\r\n  height: 40px;\r\n  padding: 10px 15px;\r\n  background-color: #00bcd4;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\n.submit-button:hover {\r\n  background-color: #80deea;\r\n  color: #424242;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n#add-change-form input,\r\n#user-money-form input {\r\n  width: 300px;\r\n}\r\n\r\n.instructions {\r\n  background-color: #f3f3f3;\r\n  padding: 10px 20px;\r\n  border-radius: 4px;\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.instructions-list {\r\n  text-align: left;\r\n  padding-left: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;;AAGA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV","sourcesContent":[".form-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  gap: 5px;\r\n}\r\n\r\nlegend {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.input-wrapper {\r\n  width: 120px;\r\n}\r\n\r\n.input-form-wrapper {\r\n  margin: 0 auto;\r\n}\r\n\r\ninput {\r\n  width: 110px;\r\n  border: 1px solid #b4b4b4;\r\n  border-radius: 4px;\r\n  padding: 8px;\r\n}\r\n\r\n.submit-button {\r\n  height: 40px;\r\n  padding: 10px 15px;\r\n  background-color: #00bcd4;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\n.submit-button:hover {\r\n  background-color: #80deea;\r\n  color: #424242;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n#add-change-form input,\r\n#user-money-form input {\r\n  width: 300px;\r\n}\r\n\r\n.instructions {\r\n  background-color: #f3f3f3;\r\n  padding: 10px 20px;\r\n  border-radius: 4px;\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.instructions-list {\r\n  text-align: left;\r\n  padding-left: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./table.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/table.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auth-form {\r\n  width: 70%;\r\n}\r\n\r\n.auth-form input {\r\n  width: 100%\r\n}", "",{"version":3,"sources":["webpack://./src/css/login.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE;AACF","sourcesContent":[".auth-form {\r\n  width: 70%;\r\n}\r\n\r\n.auth-form input {\r\n  width: 100%\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 32px;\r\n}\r\n\r\n#app-title {\r\n  font-size: 34px;\r\n  font-weight: 600;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.tab-menu-button {\r\n  color: var(--button-text-default-color);\r\n  padding: 10px 0;\r\n  width: 120px;\r\n  font-size: 1rem;\r\n  padding: 8px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  background-color: var(--button-bg-color);\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.tab-menu-button.current {\r\n  background-color: var(--button-bg-highlight-color);\r\n  cursor: default;\r\n}\r\n\r\n.tab-menu-button:hover {\r\n  background-color: var(--button-bg-highlight-color);\r\n}\r\n\r\n.tab-menu-button:visited {\r\n  color: var(--button-text-default-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,uCAAuC;EACvC,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,wCAAwC;EACxC,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,kDAAkD;EAClD,eAAe;AACjB;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,uCAAuC;AACzC","sourcesContent":["header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 32px;\r\n}\r\n\r\n#app-title {\r\n  font-size: 34px;\r\n  font-weight: 600;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.tab-menu-button {\r\n  color: var(--button-text-default-color);\r\n  padding: 10px 0;\r\n  width: 120px;\r\n  font-size: 1rem;\r\n  padding: 8px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  background-color: var(--button-bg-color);\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.tab-menu-button.current {\r\n  background-color: var(--button-bg-highlight-color);\r\n  cursor: default;\r\n}\r\n\r\n.tab-menu-button:hover {\r\n  background-color: var(--button-bg-highlight-color);\r\n}\r\n\r\n.tab-menu-button:visited {\r\n  color: var(--button-text-default-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".snackbar {\r\n  position: fixed;\r\n  width: 540px;\r\n  bottom: 0;\r\n  opacity: 0;\r\n  padding: 15px 20px;\r\n  background-color: #3f3f3f;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  box-shadow: 0 5px 5px #00000055;\r\n  transition: all 500ms;\r\n}\r\n\r\n.show {\r\n  opacity: 1;\r\n  bottom: 15px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/snackbar.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,+BAA+B;EAC/B,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,YAAY;AACd","sourcesContent":[".snackbar {\r\n  position: fixed;\r\n  width: 540px;\r\n  bottom: 0;\r\n  opacity: 0;\r\n  padding: 15px 20px;\r\n  background-color: #3f3f3f;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  box-shadow: 0 5px 5px #00000055;\r\n  transition: all 500ms;\r\n}\r\n\r\n.show {\r\n  opacity: 1;\r\n  bottom: 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/table.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/table.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "caption {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-bottom: 16px;\r\n}\r\n\r\ntd,\r\nth {\r\n  border-bottom: var(--border-preset);\r\n  padding: 8px 0;\r\n  text-align: center;\r\n}\r\n\r\ntd {\r\n  height: 65px;\r\n}\r\n\r\nth {\r\n  border-top: var(--border-preset);\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  margin: 0 auto;\r\n}\r\n\r\n.table-button-wrapper {\r\n  width: 90px;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\n.confirm-update-button {\r\n  width: 100%;\r\n}\r\n\r\n.product-status-table tr input {\r\n  width: 90%;\r\n  margin: auto;\r\n  font-size: 1rem;\r\n}\r\n\r\n.product-status-table th:nth-child(1) {\r\n  width: 160px;\r\n}\r\n.product-status-table th:nth-child(2) {\r\n  width: 60px;\r\n}\r\n.product-status-table th:nth-child(3) {\r\n  width: 50px;\r\n}\r\n.product-status-table th:nth-child(4) {\r\n  width: 140px;\r\n}\r\n\r\n.coin-status-table td {\r\n  width: 100px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/table.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;EAEE,mCAAmC;EACnC,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd","sourcesContent":["caption {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-bottom: 16px;\r\n}\r\n\r\ntd,\r\nth {\r\n  border-bottom: var(--border-preset);\r\n  padding: 8px 0;\r\n  text-align: center;\r\n}\r\n\r\ntd {\r\n  height: 65px;\r\n}\r\n\r\nth {\r\n  border-top: var(--border-preset);\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  margin: 0 auto;\r\n}\r\n\r\n.table-button-wrapper {\r\n  width: 90px;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n\r\n.confirm-update-button {\r\n  width: 100%;\r\n}\r\n\r\n.product-status-table tr input {\r\n  width: 90%;\r\n  margin: auto;\r\n  font-size: 1rem;\r\n}\r\n\r\n.product-status-table th:nth-child(1) {\r\n  width: 160px;\r\n}\r\n.product-status-table th:nth-child(2) {\r\n  width: 60px;\r\n}\r\n.product-status-table th:nth-child(3) {\r\n  width: 50px;\r\n}\r\n.product-status-table th:nth-child(4) {\r\n  width: 140px;\r\n}\r\n\r\n.coin-status-table td {\r\n  width: 100px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/constants/index.ts":
/*!***********************************!*\
  !*** ./src/js/constants/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_RULES": () => (/* binding */ PRODUCT_RULES),
/* harmony export */   "VENDING_MACHINE_RULES": () => (/* binding */ VENDING_MACHINE_RULES),
/* harmony export */   "USER_REGISTER_RULES": () => (/* binding */ USER_REGISTER_RULES),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "USER_DATA_CHANGED_MESSAGE": () => (/* binding */ USER_DATA_CHANGED_MESSAGE),
/* harmony export */   "NOT_ENOUGH_CHANGE_MESSAGE": () => (/* binding */ NOT_ENOUGH_CHANGE_MESSAGE),
/* harmony export */   "CONFIRM_DELETE_MESSAGE": () => (/* binding */ CONFIRM_DELETE_MESSAGE),
/* harmony export */   "MONEY_NAME_STRING": () => (/* binding */ MONEY_NAME_STRING),
/* harmony export */   "AUTH_URL_BASE": () => (/* binding */ AUTH_URL_BASE),
/* harmony export */   "POST_REQUEST_OPTIONS": () => (/* binding */ POST_REQUEST_OPTIONS),
/* harmony export */   "DEFAULT_ROUTE": () => (/* binding */ DEFAULT_ROUTE),
/* harmony export */   "ACCESS_TOKEN": () => (/* binding */ ACCESS_TOKEN)
/* harmony export */ });
const PRODUCT_RULES = {
    MAX_NAME_LENGTH: 10,
    MIN_PRICE: 100,
    MAX_PRICE: 10000,
    PRICE_UNIT: 10,
    MIN_STOCK: 1,
    MAX_STOCK: 20,
};
const VENDING_MACHINE_RULES = {
    CHANGE_UNIT: 10,
    MAX_TOTAL_CHANGE: 100000,
    USER_MONEY_UNIT: 10,
    MAX_TOTAL_USER_MONEY: 10000,
};
const USER_REGISTER_RULES = {
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 6,
    PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()[\]{}\-:;',?/~^+=<>]).{8,20}$/,
};
const ERROR_MESSAGE = {
    CONTAIN_EMPTY_FIELD_IN_FORM: '상품명, 가격, 수량을 모두 입력해주세요.',
    PRODUCT_NAME: {
        EXCEED_MAX_LENGTH: `상품명은 ${PRODUCT_RULES.MAX_NAME_LENGTH}글자를 초과해서는 안됩니다.`,
        DUPLICATE_VALUE: '중복된 상품명의 상품은 등록할 수 없습니다.',
    },
    PRODUCT_PRICE: {
        OUT_OF_RANGE: `상품 가격은 ${PRODUCT_RULES.MIN_PRICE}원 미만이거나 ${PRODUCT_RULES.MAX_PRICE}원 초과할 수 없습니다.`,
        INVALID_UNIT: `상품 가격은 ${PRODUCT_RULES.PRICE_UNIT}원 단위여야 합니다.`,
    },
    PRODUCT_STOCK: {
        INVALID_VALUE: '올바른 수량을 입력해주세요',
        OUT_OF_RANGE: `상품 수량은 ${PRODUCT_RULES.MIN_STOCK}개 미만이거나 ${PRODUCT_RULES.MAX_STOCK}개 초과할 수 없습니다.`,
    },
    PRODUCT_ID_NOT_FOUND: '존재하지 않는 상품입니다.',
    CHANGE: {
        BELOW_MIN: '충전 금액은 0원 이하일 수 없습니다.',
        INVALID_UNIT: `충전 금액은 ${VENDING_MACHINE_RULES.CHANGE_UNIT}원 단위이어야 합니다.`,
        EXCEED_MAX_TOTAL: `최대 보유 금액은 ${VENDING_MACHINE_RULES.MAX_TOTAL_CHANGE}원을 초과할 수 없습니다.`,
    },
    USER_MONEY: {
        BELOW_MIN: '투입 금액은 0원 이하일 수 없습니다.',
        INVALID_UNIT: `투입 금액은 ${VENDING_MACHINE_RULES.USER_MONEY_UNIT}원 단위이어야 합니다.`,
        EXCEED_MAX_TOTAL: `최대 보유 금액은 ${VENDING_MACHINE_RULES.MAX_TOTAL_USER_MONEY}원을 초과할 수 없습니다.`,
    },
    PURCHASE: {
        INSUFFICIENT_MONEY: '구매하려는 상품 가격보다 투입 금액이 적습니다.',
    },
    RETURN_CHANGE: {
        NO_USER_MONEY: '반환할 금액이 없습니다.',
    },
    USER_DATA: {
        MISSING_REQUIRED_DATA: '모든 항목은 필수적으로 작성해야 합니다.',
        NAME_LENGTH_OUT_OF_RANGE: `이름은 ${USER_REGISTER_RULES.NAME_MIN_LENGTH}자-${USER_REGISTER_RULES.NAME_MAX_LENGTH}자여야 합니다.`,
        INVALID_PASSWORD: '비밀번호가 올바르지 않습니다. 비밀번호 규칙을 다시 확인 해주세요.',
        NO_MATCH_PASSWORD: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        DUPLICATE_EMAIL: '이미 가입 내역이 존재하는 이메일입니다.',
        INCORRECT_LOGIN_DATA: '가입 내역이 없는 이메일이거나 비밀번호가 바르지 않습니다.',
        SERVER_FAILURE: '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    },
};
const USER_DATA_CHANGED_MESSAGE = '개인 정보 수정이 완료되었습니다.';
const NOT_ENOUGH_CHANGE_MESSAGE = '자판기가 보유한 잔돈이 부족합니다. 관리자에게 문의해주세요.';
const CONFIRM_DELETE_MESSAGE = '해당 상품을 정말 삭제하시겠습니까?';
const MONEY_NAME_STRING = {
    COIN_500_WON: 'FIVE_HUNDRED_WON',
    COIN_100_WON: 'ONE_HUNDRED_WON',
    COIN_50_WON: 'FIFTY_WON',
    COIN_10_WON: 'TEN_WON',
};
const AUTH_URL_BASE = 'https://vendingmachine-auth-server.herokuapp.com';
const POST_REQUEST_OPTIONS = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};
const DEFAULT_ROUTE = {
    USER: '#/product',
    NON_USER: '#/purchase',
};
const ACCESS_TOKEN = 'accessToken';


/***/ }),

/***/ "./src/js/domain/Authorization.ts":
/*!****************************************!*\
  !*** ./src/js/domain/Authorization.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Authorization)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Authorization_instances, _Authorization_isLoggedIn, _Authorization_userId, _Authorization_name, _Authorization_email, _Authorization_accessToken, _Authorization_handleServerError, _Authorization_getUserData, _Authorization_saveUserData, _Authorization_getAccessToken, _Authorization_validateRegisterData, _Authorization_validateUpdateData;


class Authorization {
    constructor() {
        _Authorization_instances.add(this);
        _Authorization_isLoggedIn.set(this, void 0);
        _Authorization_userId.set(this, void 0);
        _Authorization_name.set(this, void 0);
        _Authorization_email.set(this, void 0);
        _Authorization_accessToken.set(this, void 0);
        __classPrivateFieldSet(this, _Authorization_userId, null, "f");
        __classPrivateFieldSet(this, _Authorization_name, null, "f");
        __classPrivateFieldSet(this, _Authorization_email, null, "f");
        __classPrivateFieldSet(this, _Authorization_accessToken, __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_getAccessToken).call(this), "f");
        __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_getUserData).call(this);
        __classPrivateFieldSet(this, _Authorization_isLoggedIn, !!__classPrivateFieldGet(this, _Authorization_userId, "f") && !!__classPrivateFieldGet(this, _Authorization_accessToken, "f"), "f");
    }
    get isLoggedIn() {
        return __classPrivateFieldGet(this, _Authorization_isLoggedIn, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Authorization_name, "f");
    }
    get email() {
        return __classPrivateFieldGet(this, _Authorization_email, "f");
    }
    register(userInputData) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_validateRegisterData).call(this, userInputData);
            const registerData = userInputData;
            delete registerData.passwordConfirm;
            const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH_URL_BASE}/users`, Object.assign(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_0__.POST_REQUEST_OPTIONS), { body: JSON.stringify(registerData) }));
            if (!response.ok)
                yield __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_handleServerError).call(this, response);
            const { accessToken, user: { id: userId, name, email }, } = yield response.json();
            __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_saveUserData).call(this, { accessToken, userId, name, email });
            __classPrivateFieldSet(this, _Authorization_isLoggedIn, true, "f");
        });
    }
    update(userInputData) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_validateUpdateData).call(this, userInputData);
            const updateData = userInputData;
            delete updateData.passwordConfirm;
            const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH_URL_BASE}/users/${__classPrivateFieldGet(this, _Authorization_userId, "f")}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${__classPrivateFieldGet(this, _Authorization_accessToken, "f")}`,
                },
                body: JSON.stringify(updateData),
            });
            if (!response.ok)
                yield __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_handleServerError).call(this, response);
            const { id: userId, name, email } = yield response.json();
            __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_saveUserData).call(this, { userId, name, email });
        });
    }
    login(userInputData) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH_URL_BASE}/login`, Object.assign(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_0__.POST_REQUEST_OPTIONS), { body: JSON.stringify(userInputData) }));
            if (!response.ok)
                yield __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_handleServerError).call(this, response);
            const { accessToken, user: { id: userId, name, email }, } = yield response.json();
            __classPrivateFieldGet(this, _Authorization_instances, "m", _Authorization_saveUserData).call(this, { accessToken, userId, name, email });
            __classPrivateFieldSet(this, _Authorization_isLoggedIn, true, "f");
        });
    }
    logout() {
        window.sessionStorage.removeItem('userData');
        document.cookie = `${_constants__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        __classPrivateFieldSet(this, _Authorization_userId, null, "f");
        __classPrivateFieldSet(this, _Authorization_name, null, "f");
        __classPrivateFieldSet(this, _Authorization_email, null, "f");
        __classPrivateFieldSet(this, _Authorization_isLoggedIn, false, "f");
    }
}
_Authorization_isLoggedIn = new WeakMap(), _Authorization_userId = new WeakMap(), _Authorization_name = new WeakMap(), _Authorization_email = new WeakMap(), _Authorization_accessToken = new WeakMap(), _Authorization_instances = new WeakSet(), _Authorization_handleServerError = function _Authorization_handleServerError(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const rejectMessage = yield response.json();
        if (rejectMessage === 'Email already exists') {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.DUPLICATE_EMAIL);
        }
        if (rejectMessage === 'Cannot find user' || rejectMessage === 'Incorrect password') {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.INCORRECT_LOGIN_DATA);
        }
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.SERVER_FAILURE);
    });
}, _Authorization_getUserData = function _Authorization_getUserData() {
    const savedUserData = JSON.parse(window.sessionStorage.getItem('userData'));
    if (!savedUserData)
        return;
    const { userId, name, email } = savedUserData;
    __classPrivateFieldSet(this, _Authorization_userId, userId, "f");
    __classPrivateFieldSet(this, _Authorization_name, name, "f");
    __classPrivateFieldSet(this, _Authorization_email, email, "f");
}, _Authorization_saveUserData = function _Authorization_saveUserData({ accessToken, userId, name, email }) {
    window.sessionStorage.setItem('userData', JSON.stringify({ userId, name, email }));
    if (accessToken) {
        document.cookie = `${_constants__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN}=${accessToken}; path=/;`;
        __classPrivateFieldSet(this, _Authorization_accessToken, accessToken, "f");
    }
    __classPrivateFieldSet(this, _Authorization_userId, userId, "f");
    __classPrivateFieldSet(this, _Authorization_name, name, "f");
    __classPrivateFieldSet(this, _Authorization_email, email, "f");
}, _Authorization_getAccessToken = function _Authorization_getAccessToken() {
    var _a;
    const accessToken = (_a = document.cookie
        .split('; ')
        .find((row) => row.startsWith(_constants__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN))) === null || _a === void 0 ? void 0 : _a.split('=')[1];
    return accessToken;
}, _Authorization_validateRegisterData = function _Authorization_validateRegisterData(registerData) {
    const registerDataValidator = [
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.hasEmptyInput,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.MISSING_REQUIRED_DATA,
        },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.isOutOfRangeUserNameLength,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.NAME_LENGTH_OUT_OF_RANGE,
        },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.isInvalidPassword, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.INVALID_PASSWORD },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.isDifferentPassword,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.NO_MATCH_PASSWORD,
        },
    ];
    (0,_validator__WEBPACK_IMPORTED_MODULE_1__.validateData)(registerData, registerDataValidator);
}, _Authorization_validateUpdateData = function _Authorization_validateUpdateData(updateData) {
    const updateDataValidator = [
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.isOutOfRangeUserNameLength,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.NAME_LENGTH_OUT_OF_RANGE,
        },
    ];
    if (updateData.password) {
        updateDataValidator.push({
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.isInvalidPassword,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.INVALID_PASSWORD,
        }, {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_1__.isDifferentPassword,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_DATA.NO_MATCH_PASSWORD,
        });
    }
    (0,_validator__WEBPACK_IMPORTED_MODULE_1__.validateData)(updateData, updateDataValidator);
};


/***/ }),

/***/ "./src/js/domain/MoneyBox.ts":
/*!***********************************!*\
  !*** ./src/js/domain/MoneyBox.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoneyBox)
/* harmony export */ });
/* harmony import */ var _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomStrategy */ "./src/js/domain/RandomStrategy.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MoneyBox_coinStatusList, _MoneyBox_coinDistributeStrategy;


class MoneyBox {
    constructor() {
        _MoneyBox_coinStatusList.set(this, void 0);
        _MoneyBox_coinDistributeStrategy.set(this, void 0);
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, [
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_500_WON, value: 500, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_100_WON, value: 100, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_50_WON, value: 50, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_10_WON, value: 10, count: 0 },
        ], "f");
        __classPrivateFieldSet(this, _MoneyBox_coinDistributeStrategy, _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__["default"], "f");
    }
    set strategy(strategy) {
        __classPrivateFieldSet(this, _MoneyBox_coinDistributeStrategy, strategy, "f");
    }
    get totalChange() {
        return __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").reduce((totalAmount, { value, count }) => totalAmount + value * count, 0);
    }
    get coinStatusList() {
        return __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f");
    }
    addChange(inputMoney) {
        const newCoins = __classPrivateFieldGet(this, _MoneyBox_coinDistributeStrategy, "f").distribute(inputMoney);
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").map((coin, index) => {
            const addedCoin = Object.assign({}, coin);
            addedCoin.count += newCoins[index].count;
            return addedCoin;
        }), "f");
    }
    returnChange(inputMoney) {
        const newCoinStatusList = [...__classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f")];
        let moneyLeft = inputMoney;
        const returnCoinList = __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").map((coin, index) => {
            const coinCopy = Object.assign({}, coin);
            const returnCount = Math.min(Math.floor(moneyLeft / coin.value), coin.count);
            newCoinStatusList[index].count = coin.count - returnCount;
            moneyLeft -= coin.value * returnCount;
            coinCopy.count = returnCount;
            return coinCopy;
        });
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, newCoinStatusList, "f");
        return returnCoinList;
    }
}
_MoneyBox_coinStatusList = new WeakMap(), _MoneyBox_coinDistributeStrategy = new WeakMap();


/***/ }),

/***/ "./src/js/domain/RandomStrategy.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/RandomStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");


function getRandomCoin(moneyLeft, value) {
    const maxCount = Math.floor(moneyLeft / value);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pickNumberInRange)(0, maxCount);
}
const RandomStrategy = {
    distribute(inputMoney) {
        const coinStatusList = [
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_500_WON, value: 500, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_100_WON, value: 100, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_50_WON, value: 50, count: 0 },
            { name: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_NAME_STRING.COIN_10_WON, value: 10, count: 0 },
        ];
        let moneyLeft = inputMoney;
        return coinStatusList.map((coin) => {
            const coinObject = Object.assign({}, coin);
            if (coinObject.name === 'TEN_WON') {
                coinObject.count = moneyLeft / coin.value;
                return coinObject;
            }
            const randomCount = getRandomCoin(moneyLeft, coin.value);
            moneyLeft -= coin.value * randomCount;
            coinObject.count = randomCount;
            return coinObject;
        });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomStrategy);


/***/ }),

/***/ "./src/js/domain/VendingMachine.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/VendingMachine.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachine)
/* harmony export */ });
/* harmony import */ var _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendingMachineProduct */ "./src/js/domain/VendingMachineProduct.ts");
/* harmony import */ var _MoneyBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyBox */ "./src/js/domain/MoneyBox.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VendingMachine_instances, _VendingMachine_productList, _VendingMachine_moneyBox, _VendingMachine_userMoney, _VendingMachine_validateUniqueProductName, _VendingMachine_validateProductIdInList, _VendingMachine_validateChange, _VendingMachine_validateUserMoney, _VendingMachine_validatePurchase;





class VendingMachine {
    constructor() {
        _VendingMachine_instances.add(this);
        _VendingMachine_productList.set(this, void 0);
        _VendingMachine_moneyBox.set(this, void 0);
        _VendingMachine_userMoney.set(this, void 0);
        __classPrivateFieldSet(this, _VendingMachine_productList, {}, "f");
        __classPrivateFieldSet(this, _VendingMachine_moneyBox, new _MoneyBox__WEBPACK_IMPORTED_MODULE_1__["default"](), "f");
        __classPrivateFieldSet(this, _VendingMachine_userMoney, 0, "f");
    }
    get productList() {
        return __classPrivateFieldGet(this, _VendingMachine_productList, "f");
    }
    get totalChange() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").totalChange;
    }
    get coinStatusList() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").coinStatusList;
    }
    get userMoney() {
        return __classPrivateFieldGet(this, _VendingMachine_userMoney, "f");
    }
    addChange(money) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateChange).call(this, money);
        __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").addChange(money);
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").coinStatusList;
    }
    addProduct(data) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUniqueProductName).call(this, data.name);
        const newId = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateUniqueId)(Object.keys(__classPrivateFieldGet(this, _VendingMachine_productList, "f")));
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[newId] = new _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__["default"](data);
        return newId;
    }
    updateProduct(productId, data) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
        if (data.name !== __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].name) {
            __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUniqueProductName).call(this, data.name);
        }
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].modify(data);
    }
    removeProduct(productId) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
        delete __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId];
    }
    addUserMoney(money) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUserMoney).call(this, money);
        __classPrivateFieldSet(this, _VendingMachine_userMoney, __classPrivateFieldGet(this, _VendingMachine_userMoney, "f") + money, "f");
    }
    purchaseProduct(productId) {
        const product = __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId];
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validatePurchase).call(this, product);
        const { name, price, stock } = product;
        __classPrivateFieldSet(this, _VendingMachine_userMoney, __classPrivateFieldGet(this, _VendingMachine_userMoney, "f") - price, "f");
        if (stock === 1) {
            delete __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId];
            return;
        }
        const newData = { name, price, stock: stock - 1 };
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].modify(newData);
    }
    returnChange() {
        if (__classPrivateFieldGet(this, _VendingMachine_userMoney, "f") === 0) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.RETURN_CHANGE.NO_USER_MONEY);
        }
        const changeCoins = __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").returnChange(__classPrivateFieldGet(this, _VendingMachine_userMoney, "f"));
        const totalChangeAmount = changeCoins.reduce((totalReturn, { value, count }) => totalReturn + value * count, 0);
        __classPrivateFieldSet(this, _VendingMachine_userMoney, __classPrivateFieldGet(this, _VendingMachine_userMoney, "f") - totalChangeAmount, "f");
        return changeCoins;
    }
}
_VendingMachine_productList = new WeakMap(), _VendingMachine_moneyBox = new WeakMap(), _VendingMachine_userMoney = new WeakMap(), _VendingMachine_instances = new WeakSet(), _VendingMachine_validateUniqueProductName = function _VendingMachine_validateUniqueProductName(name) {
    if (Object.values(__classPrivateFieldGet(this, _VendingMachine_productList, "f")).some((product) => product.name === name)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.PRODUCT_NAME.DUPLICATE_VALUE);
    }
}, _VendingMachine_validateProductIdInList = function _VendingMachine_validateProductIdInList(productId) {
    if (__classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId] === undefined) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.PRODUCT_ID_NOT_FOUND);
    }
}, _VendingMachine_validateChange = function _VendingMachine_validateChange(money) {
    const changeValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isBelowMinCharge, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.CHANGE.BELOW_MIN },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.inValidUnitChange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.CHANGE.INVALID_UNIT },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isExceedMaxTotalChange,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.CHANGE.EXCEED_MAX_TOTAL,
        },
    ];
    (0,_validator__WEBPACK_IMPORTED_MODULE_4__.validateData)({ money, totalChange: this.totalChange }, changeValidator);
}, _VendingMachine_validateUserMoney = function _VendingMachine_validateUserMoney(money) {
    const userMoneyValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isBelowMinCharge, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.USER_MONEY.BELOW_MIN },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.inValidUnitChange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.USER_MONEY.INVALID_UNIT },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isExceedMaxTotalUserMoney,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.USER_MONEY.EXCEED_MAX_TOTAL,
        },
    ];
    (0,_validator__WEBPACK_IMPORTED_MODULE_4__.validateData)({ money, userMoney: this.userMoney }, userMoneyValidator);
}, _VendingMachine_validatePurchase = function _VendingMachine_validatePurchase(product) {
    if (!product)
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.PRODUCT_ID_NOT_FOUND);
    if (product.price > __classPrivateFieldGet(this, _VendingMachine_userMoney, "f")) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.PURCHASE.INSUFFICIENT_MONEY);
    }
};


/***/ }),

/***/ "./src/js/domain/VendingMachineProduct.ts":
/*!************************************************!*\
  !*** ./src/js/domain/VendingMachineProduct.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachineProduct)
/* harmony export */ });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _VendingMachineProduct_instances, _VendingMachineProduct_name, _VendingMachineProduct_price, _VendingMachineProduct_stock, _VendingMachineProduct_validateProduct;


class VendingMachineProduct {
    constructor({ name, price, stock }) {
        _VendingMachineProduct_instances.add(this);
        _VendingMachineProduct_name.set(this, void 0);
        _VendingMachineProduct_price.set(this, void 0);
        _VendingMachineProduct_stock.set(this, void 0);
        __classPrivateFieldGet(this, _VendingMachineProduct_instances, "m", _VendingMachineProduct_validateProduct).call(this, { name, price, stock });
        __classPrivateFieldSet(this, _VendingMachineProduct_name, name, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_price, price, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_stock, stock, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_name, "f");
    }
    get price() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_price, "f");
    }
    get stock() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_stock, "f");
    }
    modify({ name, price, stock }) {
        __classPrivateFieldGet(this, _VendingMachineProduct_instances, "m", _VendingMachineProduct_validateProduct).call(this, { name, price, stock });
        __classPrivateFieldSet(this, _VendingMachineProduct_name, name, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_price, price, "f");
        __classPrivateFieldSet(this, _VendingMachineProduct_stock, stock, "f");
    }
}
_VendingMachineProduct_name = new WeakMap(), _VendingMachineProduct_price = new WeakMap(), _VendingMachineProduct_stock = new WeakMap(), _VendingMachineProduct_instances = new WeakSet(), _VendingMachineProduct_validateProduct = function _VendingMachineProduct_validateProduct(data) {
    const productValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.hasEmptyInput, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.CONTAIN_EMPTY_FIELD_IN_FORM },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isOverMaxLengthName,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.PRODUCT_NAME.EXCEED_MAX_LENGTH,
        },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isPriceOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.PRODUCT_PRICE.OUT_OF_RANGE },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isInvalidUnitPrice, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.PRODUCT_PRICE.INVALID_UNIT },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isStockOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.PRODUCT_STOCK.OUT_OF_RANGE },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isNotIntegerStock, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.PRODUCT_STOCK.INVALID_VALUE },
    ];
    (0,_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(data, productValidator);
};


/***/ }),

/***/ "./src/js/domain/validator.ts":
/*!************************************!*\
  !*** ./src/js/domain/validator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasEmptyInput": () => (/* binding */ hasEmptyInput),
/* harmony export */   "isOutOfRangeUserNameLength": () => (/* binding */ isOutOfRangeUserNameLength),
/* harmony export */   "isInvalidPassword": () => (/* binding */ isInvalidPassword),
/* harmony export */   "isDifferentPassword": () => (/* binding */ isDifferentPassword),
/* harmony export */   "isOverMaxLengthName": () => (/* binding */ isOverMaxLengthName),
/* harmony export */   "isPriceOutOfRange": () => (/* binding */ isPriceOutOfRange),
/* harmony export */   "isInvalidUnitPrice": () => (/* binding */ isInvalidUnitPrice),
/* harmony export */   "isStockOutOfRange": () => (/* binding */ isStockOutOfRange),
/* harmony export */   "isNotIntegerStock": () => (/* binding */ isNotIntegerStock),
/* harmony export */   "isBelowMinCharge": () => (/* binding */ isBelowMinCharge),
/* harmony export */   "inValidUnitChange": () => (/* binding */ inValidUnitChange),
/* harmony export */   "isExceedMaxTotalChange": () => (/* binding */ isExceedMaxTotalChange),
/* harmony export */   "isExceedMaxTotalUserMoney": () => (/* binding */ isExceedMaxTotalUserMoney),
/* harmony export */   "validateData": () => (/* binding */ validateData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");

// general data validation
function hasEmptyInput(data) {
    return Object.keys(data).some((key) => {
        if (typeof data[key] === 'string')
            return !data[key].trim();
        return !data[key];
    });
}
// user data validation
function isOutOfRangeUserNameLength({ name }) {
    return (name.length < _constants__WEBPACK_IMPORTED_MODULE_0__.USER_REGISTER_RULES.NAME_MIN_LENGTH ||
        name.length > _constants__WEBPACK_IMPORTED_MODULE_0__.USER_REGISTER_RULES.NAME_MAX_LENGTH);
}
function isInvalidPassword({ password }) {
    return !_constants__WEBPACK_IMPORTED_MODULE_0__.USER_REGISTER_RULES.PASSWORD_REGEX.test(password);
}
function isDifferentPassword({ password, passwordConfirm, }) {
    return password !== passwordConfirm;
}
// product data validation
function isOverMaxLengthName({ name }) {
    return name.length > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_NAME_LENGTH;
}
function isPriceOutOfRange({ price }) {
    return price < _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MIN_PRICE || price > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_PRICE;
}
function isInvalidUnitPrice({ price }) {
    return price % _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.PRICE_UNIT !== 0;
}
function isStockOutOfRange({ stock }) {
    return stock > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_STOCK || stock < _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MIN_STOCK;
}
function isNotIntegerStock({ stock }) {
    return !Number.isInteger(stock);
}
// change, userMoney data validation
function isBelowMinCharge({ money, }) {
    return money <= 0;
}
function inValidUnitChange({ money, }) {
    return money % _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.CHANGE_UNIT !== 0;
}
function isExceedMaxTotalChange({ money, totalChange, }) {
    return totalChange + money > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.MAX_TOTAL_CHANGE;
}
function isExceedMaxTotalUserMoney({ money, userMoney, }) {
    return userMoney + money > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.MAX_TOTAL_USER_MONEY;
}
// validator function
function validateData(data, validator) {
    validator.forEach(({ testFunc, errorMsg }) => {
        if (testFunc(data)) {
            throw new Error(errorMsg);
        }
    });
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ "./src/js/index.js");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map