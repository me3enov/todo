/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.AppComponent = void 0;\n__webpack_require__(/*! ./main.global.less */ \"./src/main.global.less\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Sidebar_1 = __webpack_require__(/*! ./shared/Sidebar */ \"./src/shared/Sidebar/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar itemsForContent_1 = __webpack_require__(/*! ./data/itemsForContent */ \"./src/data/itemsForContent.js\");\nvar AppComponent = function () {\n    return (React.createElement(Layout_1.Layout, null,\n        React.createElement(Sidebar_1.Sidebar, { rubrics: itemsForContent_1.itemsForContent }),\n        React.createElement(Content_1.Content, { itemsForContent: itemsForContent_1.itemsForContent })));\n};\nexports.AppComponent = AppComponent;\nexports.App = root_1.hot(exports.AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/data/itemsForContent.js":
/*!*************************************!*\
  !*** ./src/data/itemsForContent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.itemsForContent = void 0;\nvar v4_1 = __importDefault(__webpack_require__(/*! uuid/v4 */ \"uuid/v4\"));\nexports.itemsForContent = (_a = {},\n    _a[v4_1.default()] = {\n        title: {\n            text: 'Purchases',\n            color: 'green'\n        },\n        items: [\n            {\n                id: v4_1.default(),\n                text: 'Pasta',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'Potatoes',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'Bitcoins',\n                checked: false\n            }\n        ]\n    },\n    _a[v4_1.default()] = {\n        title: {\n            text: 'Frontend',\n            color: 'blue'\n        },\n        items: [\n            {\n                id: v4_1.default(),\n                text: 'Learn JavaScript',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'Explore Design Patterns',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'ReactJS Hooks (useState, useReducer, useEffect etc',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'Redux (redux-observable, redux-saga)',\n                checked: false\n            }\n        ]\n    },\n    _a[v4_1.default()] = {\n        title: {\n            text: 'Films and TV series',\n            color: 'pink'\n        },\n        items: [\n            {\n                id: v4_1.default(),\n                text: 'The Lord of the Rings: The Rings of Power',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'House of the Dragon',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'Elvis',\n                checked: false\n            }\n        ]\n    },\n    _a[v4_1.default()] = {\n        title: {\n            text: 'Books',\n            color: 'lightGreen'\n        },\n        items: [\n            {\n                id: v4_1.default(),\n                text: 'Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People',\n                checked: false\n            },\n            {\n                id: v4_1.default(),\n                text: 'Powerful: Building a Culture of Freedom and Responsibility',\n                checked: false\n            }\n        ]\n    },\n    _a[v4_1.default()] = {\n        title: {\n            text: 'Private',\n            color: 'gray'\n        },\n        items: []\n    },\n    _a);\n\n\n//# sourceURL=webpack:///./src/data/itemsForContent.js?");

/***/ }),

/***/ "./src/main.global.less":
/*!******************************!*\
  !*** ./src/main.global.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* fonts */\\n@import (css) url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\\n@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\\n\\n/* root */\\n:root {\\n  --black: #000;\\n  --red: #ff4646;\\n  --green: #4dd599;\\n  --dark-green: #30bd80;\\n  --gray: #f4f6f8;\\n  --outline: rgba(0, 102, 255, 0.5);\\n  --sidebar: #F4F6F8;\\n  --black08: rgba(0, 0, 0, 0.8);\\n\\n  --grayPick: #c9d1d3;\\n  --greenPick: #42b883;\\n  --bluePick: #64c4ed;\\n  --pinkPick: #ffbbcc;\\n  --lightGreenPick: #b6e6bd;\\n  --fuchsiaPick: #c355f5;\\n  --blackPick: #09011a;\\n  --coralPick: #ff6464;\\n\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --grayF8: hsl(0, 0%, calc(var(--whiteLightness) - 3%));\\n  --grayF1: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --grayEF: hsl(0, 0%, calc(var(--whiteLightness) - 6%));\\n  --grayE8: hsl(0, 0%, calc(var(--whiteLightness) - 9%));\\n  --grayE5: hsl(0, 0%, calc(var(--whiteLightness) - 10%));\\n  --grayC7: hsl(0, 0%, calc(var(--whiteLightness) - 22%));\\n  --grayB6: hsl(0, 0%, calc(var(--whiteLightness) - 29.4%));\\n  --gray9C: hsl(0, 0%, calc(var(--whiteLightness) - 38.8%));\\n  --gray46: hsl(0, 0%, calc(var(--whiteLightness) - 54%));\\n  --gray48: hsl(0, 0%, calc(var(--whiteLightness) - 58.8%));\\n  --gray5C: hsl(0, 0%, calc(var(--whiteLightness) - 64%));\\n  --gray52: hsl(0, 0%, calc(var(--whiteLightness) - 68%));\\n}\\n\\n/* body */\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--white);\\n}\\n\\n/* document */\\n* {\\n  color: var(--black);\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  font-family: 'Lato', serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-rendering: optimizeLegibility;\\n  -webkit-text-size-adjust: 100%;\\n  -ms-text-size-adjust: 100%;\\n  -moz-text-size-adjust: 100%;\\n  -ms-font-feature-settings: 'kern' 1;\\n  -webkit-font-feature-settings: 'kern';\\n  font-feature-settings: 'kern';\\n  font-size: 16px;\\n  line-height: 19px;\\n}\\n\\n/* list */\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n/* link */\\na {\\n  text-decoration: none;\\n}\\n\\n/* button */\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.less?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>todo list</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n</body>\\n\\n</html>\\n\"; };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.listen(3000, function () {\n    console.log('server started on port http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Button/Button.tsx":
/*!**************************************!*\
  !*** ./src/shared/Button/Button.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Button = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Button = function (props) {\n    var children = props.children, rest = __rest(props, [\"children\"]);\n    return react_1.default.createElement(\"button\", __assign({}, rest), children);\n};\nexports.Button = Button;\n\n\n//# sourceURL=webpack:///./src/shared/Button/Button.tsx?");

/***/ }),

/***/ "./src/shared/Button/index.ts":
/*!************************************!*\
  !*** ./src/shared/Button/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Button */ \"./src/shared/Button/Button.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Button/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_less_1 = __importDefault(__webpack_require__(/*! ./content.less */ \"./src/shared/Content/content.less\"));\nvar ListOfBoards_1 = __webpack_require__(/*! ../ListOfBoards */ \"./src/shared/ListOfBoards/index.ts\");\nvar Content = function (_a) {\n    var itemsForContent = _a.itemsForContent;\n    return (react_1.default.createElement(\"main\", { className: content_less_1.default.content },\n        react_1.default.createElement(ListOfBoards_1.ListOfBoards, { boards: itemsForContent })));\n};\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.less":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--3fgq5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.less?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Form/ErrorOfForm/ErrorOfForm.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Form/ErrorOfForm/ErrorOfForm.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ErrorOfForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar errorOfForm_less_1 = __importDefault(__webpack_require__(/*! ./errorOfForm.less */ \"./src/shared/Form/ErrorOfForm/errorOfForm.less\"));\nvar ErrorOfForm = function (_a) {\n    var isDisabledButton = _a.isDisabledButton, errorOfInput = _a.errorOfInput;\n    return isDisabledButton && errorOfInput ? (react_1.default.createElement(\"div\", { className: errorOfForm_less_1.default.errorOfForm }, errorOfInput === null || errorOfInput === void 0 ? void 0 : errorOfInput.message)) : null;\n};\nexports.ErrorOfForm = ErrorOfForm;\n\n\n//# sourceURL=webpack:///./src/shared/Form/ErrorOfForm/ErrorOfForm.tsx?");

/***/ }),

/***/ "./src/shared/Form/ErrorOfForm/errorOfForm.less":
/*!******************************************************!*\
  !*** ./src/shared/Form/ErrorOfForm/errorOfForm.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"errorOfForm\": \"errorOfForm__errorOfForm--1bxIC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Form/ErrorOfForm/errorOfForm.less?");

/***/ }),

/***/ "./src/shared/Form/ErrorOfForm/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Form/ErrorOfForm/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ErrorOfForm */ \"./src/shared/Form/ErrorOfForm/ErrorOfForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Form/ErrorOfForm/index.ts?");

/***/ }),

/***/ "./src/shared/Form/Form.tsx":
/*!**********************************!*\
  !*** ./src/shared/Form/Form.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Form = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar form_less_1 = __importDefault(__webpack_require__(/*! ./form.less */ \"./src/shared/Form/form.less\"));\nvar Form = function (props) {\n    var children = props.children, rest = __rest(props, [\"children\"]);\n    return (react_1.default.createElement(\"form\", __assign({}, rest),\n        react_1.default.createElement(\"fieldset\", { className: form_less_1.default.fieldset }, children)));\n};\nexports.Form = Form;\n\n\n//# sourceURL=webpack:///./src/shared/Form/Form.tsx?");

/***/ }),

/***/ "./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TitleOfContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar titleOfContainer_less_1 = __importDefault(__webpack_require__(/*! ./titleOfContainer.less */ \"./src/shared/Form/TitleOfContainer/titleOfContainer.less\"));\nvar TitleOfContainer = function (_a) {\n    var nameForTitleOfForm = _a.nameForTitleOfForm;\n    return (react_1.default.createElement(\"div\", { className: titleOfContainer_less_1.default.titleOfContainer },\n        react_1.default.createElement(\"h3\", { className: titleOfContainer_less_1.default.titleOfForm }, \"Do you want to remove \\\"\" + nameForTitleOfForm + \"\\\"?\")));\n};\nexports.TitleOfContainer = TitleOfContainer;\n\n\n//# sourceURL=webpack:///./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx?");

/***/ }),

/***/ "./src/shared/Form/TitleOfContainer/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/Form/TitleOfContainer/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TitleOfContainer */ \"./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Form/TitleOfContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Form/TitleOfContainer/titleOfContainer.less":
/*!****************************************************************!*\
  !*** ./src/shared/Form/TitleOfContainer/titleOfContainer.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"titleOfContainer\": \"titleOfContainer__titleOfContainer--3fp5O\",\n\t\"titleOfForm\": \"titleOfContainer__titleOfForm--3WYVS\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Form/TitleOfContainer/titleOfContainer.less?");

/***/ }),

/***/ "./src/shared/Form/form.less":
/*!***********************************!*\
  !*** ./src/shared/Form/form.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"fieldset\": \"form__fieldset--2NUmb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Form/form.less?");

/***/ }),

/***/ "./src/shared/Form/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Form/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Form */ \"./src/shared/Form/Form.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Form/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_less_1 = __importDefault(__webpack_require__(/*! ./layout.less */ \"./src/shared/Layout/layout.less\"));\nvar Layout = function (_a) {\n    var children = _a.children;\n    return react_1.default.createElement(\"div\", { className: layout_less_1.default.layout }, children);\n};\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.less":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--1XuYy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.less?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/Board.tsx":
/*!*************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/Board.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Board = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar board_less_1 = __importDefault(__webpack_require__(/*! ./board.less */ \"./src/shared/ListOfBoards/Board/board.less\"));\nvar HeaderOfBoard_1 = __webpack_require__(/*! ./HeaderOfBoard */ \"./src/shared/ListOfBoards/Board/HeaderOfBoard/index.ts\");\nvar ListOfTasks_1 = __webpack_require__(/*! ../../ListOfTasks */ \"./src/shared/ListOfTasks/index.ts\");\nvar ContainerAddTask_1 = __webpack_require__(/*! ./ContainerAddTask */ \"./src/shared/ListOfBoards/Board/ContainerAddTask/index.ts\");\nvar Board = function (_a) {\n    var board = _a.board;\n    var _b = react_1.useState(board.items), tasks = _b[0], setTasks = _b[1];\n    return (react_1.default.createElement(\"li\", { className: board_less_1.default.board, \"aria-label\": board.title.text },\n        react_1.default.createElement(HeaderOfBoard_1.HeaderOfBoard, { color: board.title.color, text: board.title.text }),\n        react_1.default.createElement(ListOfTasks_1.ListOfTasks, { tasks: tasks, onSetTasks: setTasks }),\n        react_1.default.createElement(ContainerAddTask_1.ContainerAddTask, { tasks: tasks, onSetTasks: setTasks })));\n};\nexports.Board = Board;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/Board.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ContainerAddTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar containerAddTask_less_1 = __importDefault(__webpack_require__(/*! ./containerAddTask.less */ \"./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.less\"));\nvar react_2 = __webpack_require__(/*! react */ \"react\");\nvar Button_1 = __webpack_require__(/*! ../../../Button */ \"./src/shared/Button/index.ts\");\nvar PopupAddTask_1 = __webpack_require__(/*! ../../../Popups/PopupAddTask/PopupAddTask */ \"./src/shared/Popups/PopupAddTask/PopupAddTask.tsx\");\nvar ContainerAddTask = function (_a) {\n    var tasks = _a.tasks, onSetTasks = _a.onSetTasks;\n    var _b = react_2.useState(true), isOpenPopup = _b[0], setIsOpenPopup = _b[1];\n    var handleOpenPopupAddTask = function () {\n        setIsOpenPopup(false);\n    };\n    var handleClosePopupAddTask = function () {\n        setIsOpenPopup(true);\n    };\n    var handleAddTask = function (taskForTasks) {\n        onSetTasks(__spreadArray([taskForTasks], tasks));\n        setIsOpenPopup(false);\n    };\n    return (react_1.default.createElement(\"div\", { className: containerAddTask_less_1.default.containerAddTask }, isOpenPopup ? (react_1.default.createElement(Button_1.Button, { className: containerAddTask_less_1.default.buttonAddTask, type: 'button', \"aria-label\": 'Add task', onClick: handleOpenPopupAddTask },\n        react_1.default.createElement(\"p\", { className: containerAddTask_less_1.default.rubricButtonText }, 'New task'))) : (react_1.default.createElement(PopupAddTask_1.PopupAddTask, { isOpenPopup: isOpenPopup, onAddTask: handleAddTask, onClosePopup: handleClosePopupAddTask }))));\n};\nexports.ContainerAddTask = ContainerAddTask;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.less":
/*!******************************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"containerAddTask\": \"containerAddTask__containerAddTask--yoajC\",\n\t\"buttonAddTask\": \"containerAddTask__buttonAddTask--1XUWq\",\n\t\"rubricButtonText\": \"containerAddTask__rubricButtonText--1s3Xz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.less?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/ContainerAddTask/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/ContainerAddTask/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ContainerAddTask */ \"./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/ContainerAddTask/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/HeaderOfBoard/HeaderOfBoard.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/HeaderOfBoard/HeaderOfBoard.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HeaderOfBoard = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar headerOfBoard_less_1 = __importDefault(__webpack_require__(/*! ./headerOfBoard.less */ \"./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.less\"));\nvar cx = bind_1.default.bind(headerOfBoard_less_1.default);\nvar HeaderOfBoard = function (_a) {\n    var _b;\n    var color = _a.color, text = _a.text;\n    var className = cx((_b = {\n            headerText: true\n        },\n        _b[\"\" + color] = color,\n        _b));\n    return (react_1.default.createElement(\"div\", { className: headerOfBoard_less_1.default.headerOfBoard },\n        react_1.default.createElement(\"h2\", { className: className }, text),\n        react_1.default.createElement(\"div\", { className: headerOfBoard_less_1.default.headerLine })));\n};\nexports.HeaderOfBoard = HeaderOfBoard;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/HeaderOfBoard/HeaderOfBoard.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.less":
/*!************************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"headerOfBoard\": \"headerOfBoard__headerOfBoard--3zSf2\",\n\t\"headerLine\": \"headerOfBoard__headerLine--3QF_A\",\n\t\"headerText\": \"headerOfBoard__headerText--2kvtY\",\n\t\"black\": \"headerOfBoard__black--3yNeA\",\n\t\"blue\": \"headerOfBoard__blue--3Tjez\",\n\t\"coral\": \"headerOfBoard__coral--1LmeM\",\n\t\"fuchsia\": \"headerOfBoard__fuchsia--3qmpU\",\n\t\"gray\": \"headerOfBoard__gray--3akT2\",\n\t\"green\": \"headerOfBoard__green--9yZT4\",\n\t\"lightGreen\": \"headerOfBoard__lightGreen--3U-GQ\",\n\t\"pink\": \"headerOfBoard__pink--1sNl5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.less?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/HeaderOfBoard/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/HeaderOfBoard/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./HeaderOfBoard */ \"./src/shared/ListOfBoards/Board/HeaderOfBoard/HeaderOfBoard.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/HeaderOfBoard/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/board.less":
/*!**************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/board.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"board\": \"board__board--1I16e\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/board.less?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/index.ts":
/*!************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Board */ \"./src/shared/ListOfBoards/Board/Board.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfBoards/ListOfBoards.tsx":
/*!**************************************************!*\
  !*** ./src/shared/ListOfBoards/ListOfBoards.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ListOfBoards = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar listOfBoards_less_1 = __importDefault(__webpack_require__(/*! ./listOfBoards.less */ \"./src/shared/ListOfBoards/listOfBoards.less\"));\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/shared/ListOfBoards/Board/index.ts\");\nvar ListOfBoards = function (_a) {\n    var boards = _a.boards;\n    return (react_1.default.createElement(\"ul\", { className: listOfBoards_less_1.default.listOfBoards }, Object.entries(boards).map(function (_a) {\n        var boardId = _a[0], board = _a[1];\n        return react_1.default.createElement(Board_1.Board, { key: boardId, board: board });\n    })));\n};\nexports.ListOfBoards = ListOfBoards;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/ListOfBoards.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/index.ts":
/*!******************************************!*\
  !*** ./src/shared/ListOfBoards/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ListOfBoards */ \"./src/shared/ListOfBoards/ListOfBoards.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfBoards/listOfBoards.less":
/*!***************************************************!*\
  !*** ./src/shared/ListOfBoards/listOfBoards.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listOfBoards\": \"listOfBoards__listOfBoards--2KxJL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/listOfBoards.less?");

/***/ }),

/***/ "./src/shared/ListOfTasks/ListOfTasks.tsx":
/*!************************************************!*\
  !*** ./src/shared/ListOfTasks/ListOfTasks.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ListOfTasks = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar listOfTasks_less_1 = __importDefault(__webpack_require__(/*! ./listOfTasks.less */ \"./src/shared/ListOfTasks/listOfTasks.less\"));\nvar Task_1 = __webpack_require__(/*! ./Task */ \"./src/shared/ListOfTasks/Task/index.ts\");\nvar ListOfTasks = function (_a) {\n    var tasks = _a.tasks, onSetTasks = _a.onSetTasks;\n    return (react_1.default.createElement(\"ul\", { className: listOfTasks_less_1.default.listOfTasks }, tasks.map(function (task) {\n        return react_1.default.createElement(Task_1.Task, { key: task.id, task: task, tasks: tasks, onSetTasks: onSetTasks });\n    })));\n};\nexports.ListOfTasks = ListOfTasks;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/ListOfTasks.tsx?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Checkbox = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar checkbox_less_1 = __importDefault(__webpack_require__(/*! ./checkbox.less */ \"./src/shared/ListOfTasks/Task/Checkbox/checkbox.less\"));\nvar cx = bind_1.default.bind(checkbox_less_1.default);\nvar CheckboxInput_1 = __webpack_require__(/*! ./CheckboxInput */ \"./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/index.ts\");\nvar CheckboxSpan_1 = __webpack_require__(/*! ./CheckboxSpan */ \"./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/index.ts\");\nvar Checkbox = function (_a) {\n    var labelForCheckbox = _a.labelForCheckbox, isChecked = _a.isChecked, onChange = _a.onChange, onKeyDown = _a.onKeyDown, onFocus = _a.onFocus;\n    var classForSpan = cx({\n        checkboxSpan: true,\n        checkboxSpan_checked: isChecked\n    });\n    return (react_1.default.createElement(\"label\", { \"aria-label\": labelForCheckbox, className: checkbox_less_1.default.checkbox },\n        react_1.default.createElement(CheckboxInput_1.CheckboxInput, { className: checkbox_less_1.default.checkboxInput, checked: isChecked, onChange: onChange, tabIndex: -1, type: 'checkbox' }),\n        react_1.default.createElement(CheckboxSpan_1.CheckboxSpan, { className: classForSpan, onKeyDown: onKeyDown, onFocus: onFocus, tabIndex: 0 })));\n};\nexports.Checkbox = Checkbox;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/CheckboxInput.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/CheckboxInput.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CheckboxInput = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar CheckboxInput = function (props) {\n    return react_1.default.createElement(\"input\", __assign({}, props));\n};\nexports.CheckboxInput = CheckboxInput;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/CheckboxInput.tsx?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CheckboxInput */ \"./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/CheckboxInput.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/CheckboxSpan.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/CheckboxSpan.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CheckboxSpan = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar CheckboxSpan = function (props) {\n    return react_1.default.createElement(\"span\", __assign({}, props));\n};\nexports.CheckboxSpan = CheckboxSpan;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/CheckboxSpan.tsx?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CheckboxSpan */ \"./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/CheckboxSpan.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/checkbox.less":
/*!************************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/checkbox.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"checkboxSpan\": \"checkbox__checkboxSpan--1l_6_\",\n\t\"checkboxInput\": \"checkbox__checkboxInput--2tsfk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/checkbox.less?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Checkbox */ \"./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Task.tsx":
/*!**********************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Task.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Task = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar task_less_1 = __importDefault(__webpack_require__(/*! ./task.less */ \"./src/shared/ListOfTasks/Task/task.less\"));\nvar Checkbox_1 = __webpack_require__(/*! ./Checkbox */ \"./src/shared/ListOfTasks/Task/Checkbox/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar PopupRemoveTask_1 = __webpack_require__(/*! ../../Popups/PopupRemoveTask */ \"./src/shared/Popups/PopupRemoveTask/index.ts\");\nvar Task = function (_a) {\n    var task = _a.task, tasks = _a.tasks, onSetTasks = _a.onSetTasks;\n    var _b = react_1.useState(false), isOpenPopup = _b[0], setIsOpenPopup = _b[1];\n    var _c = react_1.useState(task.checked), isChecked = _c[0], setIsChecked = _c[1];\n    var _d = react_1.useState(false), isShown = _d[0], setIsShown = _d[1];\n    var handleOpenPopup = function () {\n        setIsOpenPopup(true);\n    };\n    var handleClosePopup = function () {\n        setIsOpenPopup(false);\n    };\n    var handleChange = function () {\n        setIsChecked(!isChecked);\n    };\n    var handleKeyDown = function (event) {\n        if (event.code === 'Space' || event.code === 'Enter') {\n            setIsChecked(!isChecked);\n        }\n    };\n    var handleBlur = function () {\n        setIsShown(false);\n    };\n    return (react_1.default.createElement(\"li\", { className: task_less_1.default.task, onMouseEnter: function () { return setIsShown(true); }, onMouseLeave: function () { return setIsShown(false); } },\n        react_1.default.createElement(Checkbox_1.Checkbox, { labelForCheckbox: \"Check \" + task.text, isChecked: isChecked, onChange: handleChange, onKeyDown: handleKeyDown, onFocus: function () { return setIsShown(true); } }),\n        react_1.default.createElement(\"p\", { className: task_less_1.default.taskText }, task.text),\n        isShown && react_1.default.createElement(Button_1.Button, { className: task_less_1.default.buttonRemoveTask, type: 'button', \"aria-label\": 'Remove task', onClick: handleOpenPopup, onBlur: handleBlur }),\n        isOpenPopup && (react_1.default.createElement(PopupRemoveTask_1.PopupRemoveTask, { task: task, tasks: tasks, isOpenPopup: isOpenPopup, onClosePopup: handleClosePopup, onSetTasks: onSetTasks }))));\n};\nexports.Task = Task;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Task.tsx?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/ListOfTasks/Task/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Task */ \"./src/shared/ListOfTasks/Task/Task.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/task.less":
/*!***********************************************!*\
  !*** ./src/shared/ListOfTasks/Task/task.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"task\": \"task__task--fW6Ww\",\n\t\"taskText\": \"task__taskText--3dfbP\",\n\t\"buttonRemoveTask\": \"task__buttonRemoveTask--cRL_w\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/task.less?");

/***/ }),

/***/ "./src/shared/ListOfTasks/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/ListOfTasks/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ListOfTasks */ \"./src/shared/ListOfTasks/ListOfTasks.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/index.ts?");

/***/ }),

/***/ "./src/shared/ListOfTasks/listOfTasks.less":
/*!*************************************************!*\
  !*** ./src/shared/ListOfTasks/listOfTasks.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listOfTasks\": \"listOfTasks__listOfTasks--43fL3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/listOfTasks.less?");

/***/ }),

/***/ "./src/shared/Popups/PopupAddTask/PopupAddTask.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Popups/PopupAddTask/PopupAddTask.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupAddTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar v4_1 = __importDefault(__webpack_require__(/*! uuid/v4 */ \"uuid/v4\"));\nvar Form_1 = __webpack_require__(/*! ../../Form */ \"./src/shared/Form/index.ts\");\nvar ErrorOfForm_1 = __webpack_require__(/*! ../../Form/ErrorOfForm */ \"./src/shared/Form/ErrorOfForm/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar popupAddTask_less_1 = __importDefault(__webpack_require__(/*! ./popupAddTask.less */ \"./src/shared/Popups/PopupAddTask/popupAddTask.less\"));\nvar cx = bind_1.default.bind(popupAddTask_less_1.default);\nvar PopupAddTask = function (_a) {\n    var isOpenPopup = _a.isOpenPopup, onAddTask = _a.onAddTask, onClosePopup = _a.onClosePopup;\n    var _b = react_hook_form_1.useForm({\n        mode: 'onBlur'\n    }), register = _b.register, _c = _b.formState, errors = _c.errors, isValid = _c.isValid, handleSubmit = _b.handleSubmit, reset = _b.reset;\n    var styleForForm = cx({\n        popupAddTask: true,\n        popupAddTaskDisabled: isOpenPopup\n    });\n    var styleForSubmitButton = cx({\n        buttonDefault: true,\n        buttonSubmit: true\n    });\n    var onSubmit = function (data) {\n        onAddTask({\n            id: v4_1.default(),\n            text: (data === null || data === void 0 ? void 0 : data.task) || 'Untitled',\n            checked: false\n        });\n        onClosePopup();\n        reset();\n    };\n    return (react_1.default.createElement(Form_1.Form, { className: styleForForm, noValidate: true, onSubmit: handleSubmit(onSubmit) },\n        react_1.default.createElement(\"input\", __assign({ className: popupAddTask_less_1.default.inputOfForm }, register('task', {\n            required: 'Required field',\n            minLength: {\n                value: 3,\n                message: 'Minimum 3 characters'\n            },\n            maxLength: {\n                value: 50,\n                message: 'Maximum 50 characters'\n            }\n        }))),\n        react_1.default.createElement(ErrorOfForm_1.ErrorOfForm, { isDisabledButton: !isValid, errorOfInput: errors.task }),\n        react_1.default.createElement(\"div\", { className: popupAddTask_less_1.default.buttonsContainer },\n            react_1.default.createElement(Button_1.Button, { className: styleForSubmitButton, type: 'submit', \"aria-label\": 'Add Task', disabled: !isValid }, 'Add Task'),\n            react_1.default.createElement(Button_1.Button, { className: popupAddTask_less_1.default.buttonDefault, type: 'button', \"aria-label\": 'Cancel add task', onClick: onClosePopup }, 'Cancel'))));\n};\nexports.PopupAddTask = PopupAddTask;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupAddTask/PopupAddTask.tsx?");

/***/ }),

/***/ "./src/shared/Popups/PopupAddTask/popupAddTask.less":
/*!**********************************************************!*\
  !*** ./src/shared/Popups/PopupAddTask/popupAddTask.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"popupAddTask\": \"popupAddTask__popupAddTask--2U6ID\",\n\t\"popupAddTaskDisabled\": \"popupAddTask__popupAddTaskDisabled--3JSm5\",\n\t\"inputOfForm\": \"popupAddTask__inputOfForm--1r622\",\n\t\"buttonDefault\": \"popupAddTask__buttonDefault--1WhAN\",\n\t\"buttonSubmit\": \"popupAddTask__buttonSubmit--2I2-4\",\n\t\"buttonsContainer\": \"popupAddTask__buttonsContainer--1wQu2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupAddTask/popupAddTask.less?");

/***/ }),

/***/ "./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupRemoveTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar popupRemoveTask_less_1 = __importDefault(__webpack_require__(/*! ./popupRemoveTask.less */ \"./src/shared/Popups/PopupRemoveTask/popupRemoveTask.less\"));\nvar PopupWithForm_1 = __webpack_require__(/*! ../PopupWithForm/PopupWithForm */ \"./src/shared/Popups/PopupWithForm/PopupWithForm.tsx\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar TitleOfContainer_1 = __webpack_require__(/*! ../../Form/TitleOfContainer */ \"./src/shared/Form/TitleOfContainer/index.ts\");\nvar preventDefault_1 = __webpack_require__(/*! ../../../utils/react/preventDefault */ \"./src/utils/react/preventDefault.tsx\");\nvar PopupRemoveTask = function (_a) {\n    var task = _a.task, tasks = _a.tasks, isOpenPopup = _a.isOpenPopup, onClosePopup = _a.onClosePopup, onSetTasks = _a.onSetTasks;\n    var handleSubmit = function (event) {\n        onSetTasks(tasks.filter(function (itemOfTasks) { return itemOfTasks.id !== task.id; }));\n        onClosePopup();\n    };\n    return (react_1.default.createElement(PopupWithForm_1.PopupWithForm, { styleForForm: popupRemoveTask_less_1.default.form, isOpenPopup: isOpenPopup, onClosePopup: onClosePopup, onSubmitForm: preventDefault_1.preventDefault(handleSubmit) },\n        react_1.default.createElement(TitleOfContainer_1.TitleOfContainer, { nameForTitleOfForm: task.text }),\n        react_1.default.createElement(Button_1.Button, { className: popupRemoveTask_less_1.default.buttonRemove, type: 'submit', \"aria-label\": 'Remove Task' }, 'Remove Task')));\n};\nexports.PopupRemoveTask = PopupRemoveTask;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx?");

/***/ }),

/***/ "./src/shared/Popups/PopupRemoveTask/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/Popups/PopupRemoveTask/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PopupRemoveTask */ \"./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupRemoveTask/index.ts?");

/***/ }),

/***/ "./src/shared/Popups/PopupRemoveTask/popupRemoveTask.less":
/*!****************************************************************!*\
  !*** ./src/shared/Popups/PopupRemoveTask/popupRemoveTask.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"popupRemoveTask__form--2fuBA\",\n\t\"buttonRemove\": \"popupRemoveTask__buttonRemove--1b39D\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupRemoveTask/popupRemoveTask.less?");

/***/ }),

/***/ "./src/shared/Popups/PopupWithForm/PopupWithForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Popups/PopupWithForm/PopupWithForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupWithForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Form_1 = __webpack_require__(/*! ../../Form */ \"./src/shared/Form/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar popupWithForm_less_1 = __importDefault(__webpack_require__(/*! ./popupWithForm.less */ \"./src/shared/Popups/PopupWithForm/popupWithForm.less\"));\nvar cx = bind_1.default.bind(popupWithForm_less_1.default);\nvar PopupWithForm = function (_a) {\n    var styleForForm = _a.styleForForm, isOpenPopup = _a.isOpenPopup, onClosePopup = _a.onClosePopup, onSubmitForm = _a.onSubmitForm, children = _a.children;\n    var classNameForPopup = cx({\n        popup: true,\n        popupOpened: isOpenPopup\n    });\n    var handleClickClosePopup = function (event) {\n        if (event.target === event.currentTarget) {\n            onClosePopup();\n        }\n    };\n    return (react_1.default.createElement(\"div\", { onClick: handleClickClosePopup, className: classNameForPopup },\n        react_1.default.createElement(\"div\", { className: popupWithForm_less_1.default.popupContainer },\n            react_1.default.createElement(Button_1.Button, { className: popupWithForm_less_1.default.buttonClosePopup, type: 'button', \"aria-label\": 'Close popup', onClick: onClosePopup }),\n            react_1.default.createElement(Form_1.Form, { className: styleForForm, noValidate: true, onSubmit: onSubmitForm }, children))));\n};\nexports.PopupWithForm = PopupWithForm;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupWithForm/PopupWithForm.tsx?");

/***/ }),

/***/ "./src/shared/Popups/PopupWithForm/popupWithForm.less":
/*!************************************************************!*\
  !*** ./src/shared/Popups/PopupWithForm/popupWithForm.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"popup\": \"popupWithForm__popup--2sRz1\",\n\t\"popupOpened\": \"popupWithForm__popupOpened--LWEf2\",\n\t\"popupContainer\": \"popupWithForm__popupContainer--2hk8B\",\n\t\"buttonClosePopup\": \"popupWithForm__buttonClosePopup--23BC6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupWithForm/popupWithForm.less?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/ListOfRubrics.tsx":
/*!************************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/ListOfRubrics.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ListOfRubrics = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar listOfRubrics_less_1 = __importDefault(__webpack_require__(/*! ./listOfRubrics.less */ \"./src/shared/Sidebar/ListOfRubrics/listOfRubrics.less\"));\nvar Rubric_1 = __webpack_require__(/*! ./Rubric */ \"./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts\");\nvar ListOfRubrics = function (_a) {\n    var rubrics = _a.rubrics;\n    return (react_1.default.createElement(\"ul\", { className: listOfRubrics_less_1.default.listOfRubrics }, Object.entries(rubrics).map(function (_a) {\n        var rubricId = _a[0], rubric = _a[1];\n        return react_1.default.createElement(Rubric_1.Rubric, { key: rubricId, rubric: rubric });\n    })));\n};\nexports.ListOfRubrics = ListOfRubrics;\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/ListOfRubrics.tsx?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx":
/*!************************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Rubric = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Button_1 = __webpack_require__(/*! ../../../Button */ \"./src/shared/Button/index.ts\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar rubric_less_1 = __importDefault(__webpack_require__(/*! ./rubric.less */ \"./src/shared/Sidebar/ListOfRubrics/Rubric/rubric.less\"));\nvar cx = bind_1.default.bind(rubric_less_1.default);\nvar Rubric = function (_a) {\n    var _b;\n    var rubric = _a.rubric;\n    var _c = react_1.useState(true), isShown = _c[0], setIsShown = _c[1];\n    var classNameForMark = cx((_b = {\n            mark: true\n        },\n        _b[\"\" + rubric.title.color] = rubric.title.color,\n        _b));\n    return (react_1.default.createElement(\"li\", { className: rubric_less_1.default.rubric, \"aria-label\": rubric.title.text },\n        react_1.default.createElement(Button_1.Button, { className: rubric_less_1.default.buttonSelect, type: 'button', \"aria-label\": 'Rubric selection' },\n            react_1.default.createElement(\"div\", { className: classNameForMark }),\n            react_1.default.createElement(\"p\", { className: rubric_less_1.default.buttonText }, rubric.title.text),\n            isShown && react_1.default.createElement(\"span\", { className: rubric_less_1.default.buttonUnselect, role: 'button', \"aria-label\": 'Remove task', tabIndex: 0 }))));\n};\nexports.Rubric = Rubric;\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Rubric */ \"./src/shared/Sidebar/ListOfRubrics/Rubric/Rubric.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/Rubric/index.ts?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/Rubric/rubric.less":
/*!*************************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/Rubric/rubric.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"rubric\": \"rubric__rubric--5YDir\",\n\t\"buttonSelect\": \"rubric__buttonSelect--3730u\",\n\t\"buttonText\": \"rubric__buttonText--2hmkE\",\n\t\"buttonUnselect\": \"rubric__buttonUnselect--4C4Kl\",\n\t\"mark\": \"rubric__mark--2QlEe\",\n\t\"black\": \"rubric__black--24Wka\",\n\t\"blue\": \"rubric__blue--1gstg\",\n\t\"coral\": \"rubric__coral--2_I4p\",\n\t\"fuchsia\": \"rubric__fuchsia--3Sfjl\",\n\t\"gray\": \"rubric__gray--LD_HZ\",\n\t\"green\": \"rubric__green--6UVZg\",\n\t\"lightGreen\": \"rubric__lightGreen--15BsW\",\n\t\"pink\": \"rubric__pink--1pHt_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/Rubric/rubric.less?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ListOfRubrics */ \"./src/shared/Sidebar/ListOfRubrics/ListOfRubrics.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/index.ts?");

/***/ }),

/***/ "./src/shared/Sidebar/ListOfRubrics/listOfRubrics.less":
/*!*************************************************************!*\
  !*** ./src/shared/Sidebar/ListOfRubrics/listOfRubrics.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listOfRubrics\": \"listOfRubrics__listOfRubrics--3vX6D\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/ListOfRubrics/listOfRubrics.less?");

/***/ }),

/***/ "./src/shared/Sidebar/Sidebar.tsx":
/*!****************************************!*\
  !*** ./src/shared/Sidebar/Sidebar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Sidebar = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sidebar_less_1 = __importDefault(__webpack_require__(/*! ./sidebar.less */ \"./src/shared/Sidebar/sidebar.less\"));\nvar ListOfRubrics_1 = __webpack_require__(/*! ./ListOfRubrics */ \"./src/shared/Sidebar/ListOfRubrics/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/Button/index.ts\");\nvar Sidebar = function (_a) {\n    var rubrics = _a.rubrics;\n    return (react_1.default.createElement(\"div\", { className: sidebar_less_1.default.sidebar },\n        react_1.default.createElement(\"h3\", { className: sidebar_less_1.default.sidebarTitle }, 'All tasks'),\n        react_1.default.createElement(ListOfRubrics_1.ListOfRubrics, { rubrics: rubrics }),\n        react_1.default.createElement(Button_1.Button, { className: sidebar_less_1.default.buttonAddFolder, type: 'button', \"aria-label\": 'Add task' },\n            react_1.default.createElement(\"p\", { className: sidebar_less_1.default.buttonText }, 'New task'))));\n};\nexports.Sidebar = Sidebar;\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/Sidebar.tsx?");

/***/ }),

/***/ "./src/shared/Sidebar/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Sidebar/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Sidebar */ \"./src/shared/Sidebar/Sidebar.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/index.ts?");

/***/ }),

/***/ "./src/shared/Sidebar/sidebar.less":
/*!*****************************************!*\
  !*** ./src/shared/Sidebar/sidebar.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sidebar\": \"sidebar__sidebar--2C6KH\",\n\t\"sidebarTitle\": \"sidebar__sidebarTitle--sAicw\",\n\t\"buttonAddFolder\": \"sidebar__buttonAddFolder--1MskY\",\n\t\"buttonText\": \"sidebar__buttonText--2KhUW\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Sidebar/sidebar.less?");

/***/ }),

/***/ "./src/utils/react/preventDefault.tsx":
/*!********************************************!*\
  !*** ./src/utils/react/preventDefault.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.preventDefault = void 0;\nfunction preventDefault(fn) {\n    return function (e) {\n        e.preventDefault();\n        fn(e);\n    };\n}\nexports.preventDefault = preventDefault;\n;\n\n\n//# sourceURL=webpack:///./src/utils/react/preventDefault.tsx?");

/***/ }),

/***/ "classnames/bind":
/*!**********************************!*\
  !*** external "classnames/bind" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames/bind\");\n\n//# sourceURL=webpack:///external_%22classnames/bind%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ })

/******/ });