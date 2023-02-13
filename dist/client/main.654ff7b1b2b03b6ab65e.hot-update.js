webpackHotUpdate("main",{

/***/ "./src/shared/Popups/PopupWithForm/PopupWithForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Popups/PopupWithForm/PopupWithForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupWithForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ButtonClosePopup_1 = __webpack_require__(/*! ../../Buttons/ButtonClosePopup */ \"./src/shared/Buttons/ButtonClosePopup/index.js\");\nvar ts_1 = __webpack_require__(/*! ../../Form/ts */ \"./src/shared/Form/ts.js\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\"));\nvar popupWithForm_css_1 = __importDefault(__webpack_require__(/*! ./popupWithForm.css */ \"./src/shared/Popups/PopupWithForm/popupWithForm.css\"));\nvar cx = bind_1.default.bind(popupWithForm_css_1.default);\nvar PopupWithForm = function (_a) {\n    var styleForForm = _a.styleForForm, isOpenPopup = _a.isOpenPopup, onClosePopup = _a.onClosePopup, onSubmitForm = _a.onSubmitForm, children = _a.children;\n    var classNameForPopup = cx({\n        popup: true,\n        popupOpened: isOpenPopup\n    });\n    var handleClickClosePopup = function (event) {\n        if (event.target === event.currentTarget) {\n            onClosePopup();\n        }\n    };\n    return (react_1.default.createElement(\"div\", { onClick: handleClickClosePopup, className: classNameForPopup },\n        react_1.default.createElement(\"div\", { className: popupWithForm_css_1.default.popupContainer },\n            react_1.default.createElement(ButtonClosePopup_1.ButtonClosePopup, { onClosePopup: handleClickClosePopup }),\n            react_1.default.createElement(ts_1.Form, { className: classNameForPopup, noValidate: true, onSubmit: onSubmitForm }, children))));\n};\nexports.PopupWithForm = PopupWithForm;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupWithForm/PopupWithForm.tsx?");

/***/ })

})