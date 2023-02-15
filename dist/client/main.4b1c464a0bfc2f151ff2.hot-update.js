webpackHotUpdate("main",{

/***/ "./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx":
/*!************************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Rubric = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Button_1 = __webpack_require__(/*! ../../../Button */ \"./src/shared/Button/index.ts\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\"));\nvar rubric_css_1 = __importDefault(__webpack_require__(/*! ./rubric.css */ \"./src/shared/Sidebar/ListOfRubrics/Rubric/rubric.css\"));\nvar cx = bind_1.default.bind(rubric_css_1.default);\nvar Rubric = function (_a) {\n    var _b;\n    var rubric = _a.rubric;\n    var _c = react_1.useState(true), isShown = _c[0], setIsShown = _c[1];\n    var classNameForMark = cx((_b = {\n            mark: true\n        },\n        _b[\"\" + rubric.title.color] = rubric.title.color,\n        _b));\n    return (react_1.default.createElement(\"li\", { className: rubric_css_1.default.rubric, \"aria-label\": rubric.title.text },\n        react_1.default.createElement(Button_1.Button, { className: rubric_css_1.default.buttonSelect, type: 'button', \"aria-label\": 'Rubric selection' },\n            react_1.default.createElement(\"div\", { className: classNameForMark }),\n            react_1.default.createElement(\"p\", { className: rubric_css_1.default.buttonText }, rubric.title.text),\n            isShown && react_1.default.createElement(\"span\", { className: rubric_css_1.default.buttonUnselect, role: 'button', \"aria-label\": 'Remove task', tabIndex: 0 }))));\n};\nexports.Rubric = Rubric;\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Rubric */ \"./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts?");

/***/ })

})