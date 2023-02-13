webpackHotUpdate("main",{

/***/ "./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupRemoveTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar PopupWithForm_1 = __webpack_require__(/*! ../PopupWithForm/PopupWithForm */ \"./src/shared/Popups/PopupWithForm/PopupWithForm.tsx\");\nvar ButtonDefault_1 = __webpack_require__(/*! ../../Buttons/ButtonDefault */ \"./src/shared/Buttons/ButtonDefault/index.ts\");\nvar TitleOfContainer_1 = __webpack_require__(/*! ../../Form/TitleOfContainer */ \"./src/shared/Form/TitleOfContainer/index.js\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\"));\nvar popupRemoveTask_css_1 = __importDefault(__webpack_require__(/*! ./popupRemoveTask.css */ \"./src/shared/Popups/PopupRemoveTask/popupRemoveTask.css\"));\nvar cx = bind_1.default.bind(popupRemoveTask_css_1.default);\nvar PopupRemoveTask = function (_a) {\n    var task = _a.task, tasks = _a.tasks, isOpenPopup = _a.isOpenPopup, onClosePopup = _a.onClosePopup, onSetTasks = _a.onSetTasks;\n    var handleSubmit = function (event) {\n        event.preventDefault();\n        onSetTasks(tasks.filter(function (itemOfTasks) { return itemOfTasks.id !== task.id; }));\n        onClosePopup();\n    };\n    var classNameForForm = cx({\n        form: true,\n        formAddTask: true\n    });\n    return (react_1.default.createElement(PopupWithForm_1.PopupWithForm, { styleForForm: classNameForForm, onClosePopup: onClosePopup, onSubmitForm: handleSubmit },\n        react_1.default.createElement(TitleOfContainer_1.TitleOfContainer, { nameForTitleOfForm: task.text }),\n        react_1.default.createElement(ButtonDefault_1.ButtonDefault, { className: popupRemoveTask_css_1.default.buttonRemove, type: 'submit', \"aria-label\": 'Remove Task' }, 'Remove Task')));\n};\nexports.PopupRemoveTask = PopupRemoveTask;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx?");

/***/ })

})