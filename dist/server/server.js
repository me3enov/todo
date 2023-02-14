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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/vendor/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/vendor/normalize.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type='button']::-moz-focus-inner,\\n[type='reset']::-moz-focus-inner,\\n[type='submit']::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type='button']:-moz-focusring,\\n[type='reset']:-moz-focusring,\\n[type='submit']:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type='checkbox'],\\n[type='radio'] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type='number']::-webkit-inner-spin-button,\\n[type='number']::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type='search']::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/vendor/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

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
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.AppComponent = void 0;\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar itemsForContent_1 = __webpack_require__(/*! ./data/itemsForContent */ \"./src/data/itemsForContent.js\");\nvar AppComponent = function () {\n    return (React.createElement(\"div\", { className: 'app' },\n        React.createElement(Content_1.Content, { itemsForContent: itemsForContent_1.itemsForContent })));\n};\nexports.AppComponent = AppComponent;\nexports.App = root_1.hot(exports.AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

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

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./vendor/normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/vendor/normalize.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap);\"]);\n// Module\nexports.push([module.i, \"/* normalize css*/\\n\\n/* fonts */\\n\\n/* root */\\n:root {\\n  --black: #000;\\n  --red: #ff4646;\\n  --green: #4dd599;\\n  --gray: #f4f6f8;\\n  --outline: rgba(0, 102, 255, 0.5);\\n  --black08: rgba(0, 0, 0, 0.8);\\n\\n  --grayPick: #c9d1d3;\\n  --greenPick: #42b883;\\n  --bluePick: #64c4ed;\\n  --pinkPick: #ffbbcc;\\n  --lightGreenPick: #b6e6bd;\\n  --fuchsiaPick: #c355f5;\\n  --blackPick: #09011a;\\n  --coralPick: #ff6464;\\n\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --grayF1: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --grayEF: hsl(0, 0%, calc(var(--whiteLightness) - 6%));\\n  --grayE8: hsl(0, 0%, calc(var(--whiteLightness) - 9%));\\n  --grayE5: hsl(0, 0%, calc(var(--whiteLightness) - 10%));\\n  --grayC7: hsl(0, 0%, calc(var(--whiteLightness) - 22%));\\n  --grayB6: hsl(0, 0%, calc(var(--whiteLightness) - 29.4%));\\n  --gray9C: hsl(0, 0%, calc(var(--whiteLightness) - 38.8%));\\n  --gray46: hsl(0, 0%, calc(var(--whiteLightness) - 54%));\\n  --gray48: hsl(0, 0%, calc(var(--whiteLightness) - 58.8%));\\n  --gray5C: hsl(0, 0%, calc(var(--whiteLightness) - 64%));\\n  --gray52: hsl(0, 0%, calc(var(--whiteLightness) - 68%));\\n}\\n\\n/* body */\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--white);\\n}\\n\\n/* document */\\n* {\\n  color: var(--black);\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n  font-family: 'Lato', serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-rendering: optimizeLegibility;\\n  -webkit-text-size-adjust: 100%;\\n  -ms-text-size-adjust: 100%;\\n  -moz-text-size-adjust: 100%;\\n  -ms-font-feature-settings: 'kern' 1;\\n  -webkit-font-feature-settings: 'kern';\\n  font-feature-settings: 'kern';\\n  font-size: 16px;\\n  line-height: 19px;\\n}\\n\\n/* list */\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n/* link */\\na {\\n  text-decoration: none;\\n}\\n\\n/* button */\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\\n.app {\\n  background-color: var(--white);\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n  -ms-flex-direction: column;\\n  flex-direction: column;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n  align-items: center;\\n  -webkit-box-pack: start;\\n  -ms-flex-pack: start;\\n  justify-content: flex-start;\\n  position: relative;\\n  min-height: 100vh;\\n  height: 100%;\\n  margin: 0 auto;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Solving Programming Problems</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n</body>\\n\\n</html>\\n\"; };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nvar ListOfBoards_1 = __webpack_require__(/*! ../ListOfBoards */ \"./src/shared/ListOfBoards/index.ts\");\nvar Content = function (_a) {\n    var itemsForContent = _a.itemsForContent;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content },\n        react_1.default.createElement(ListOfBoards_1.ListOfBoards, { boards: itemsForContent })));\n};\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ErrorOfForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar errorOfForm_css_1 = __importDefault(__webpack_require__(/*! ./errorOfForm.css */ \"./src/shared/Form/ErrorOfForm/errorOfForm.css\"));\nvar ErrorOfForm = function (_a) {\n    var isDisabledButton = _a.isDisabledButton, errorOfInput = _a.errorOfInput;\n    return isDisabledButton && errorOfInput ? (react_1.default.createElement(\"div\", { className: errorOfForm_css_1.default.errorOfForm }, errorOfInput === null || errorOfInput === void 0 ? void 0 : errorOfInput.message)) : null;\n};\nexports.ErrorOfForm = ErrorOfForm;\n\n\n//# sourceURL=webpack:///./src/shared/Form/ErrorOfForm/ErrorOfForm.tsx?");

/***/ }),

/***/ "./src/shared/Form/ErrorOfForm/errorOfForm.css":
/*!*****************************************************!*\
  !*** ./src/shared/Form/ErrorOfForm/errorOfForm.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"errorOfForm\": \"errorOfForm__errorOfForm--ro-sR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Form/ErrorOfForm/errorOfForm.css?");

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
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Form = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar form_css_1 = __importDefault(__webpack_require__(/*! ./form.css */ \"./src/shared/Form/form.css\"));\nvar Form = function (props) {\n    var children = props.children, rest = __rest(props, [\"children\"]);\n    return (react_1.default.createElement(\"form\", __assign({}, rest),\n        react_1.default.createElement(\"fieldset\", { className: form_css_1.default.fieldset }, children)));\n};\nexports.Form = Form;\n\n\n//# sourceURL=webpack:///./src/shared/Form/Form.tsx?");

/***/ }),

/***/ "./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TitleOfContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar titleOfContainer_css_1 = __importDefault(__webpack_require__(/*! ./titleOfContainer.css */ \"./src/shared/Form/TitleOfContainer/titleOfContainer.css\"));\nvar TitleOfContainer = function (_a) {\n    var nameForTitleOfForm = _a.nameForTitleOfForm;\n    return (react_1.default.createElement(\"div\", { className: titleOfContainer_css_1.default.titleOfContainer },\n        react_1.default.createElement(\"h3\", { className: titleOfContainer_css_1.default.titleOfForm }, \"Do you want to remove \\\"\" + nameForTitleOfForm + \"\\\"?\")));\n};\nexports.TitleOfContainer = TitleOfContainer;\n\n\n//# sourceURL=webpack:///./src/shared/Form/TitleOfContainer/TitleOfContainer.tsx?");

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

/***/ "./src/shared/Form/TitleOfContainer/titleOfContainer.css":
/*!***************************************************************!*\
  !*** ./src/shared/Form/TitleOfContainer/titleOfContainer.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"titleOfContainer\": \"titleOfContainer__titleOfContainer--3O9Ru\",\n\t\"titleOfForm\": \"titleOfContainer__titleOfForm--1js-l\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Form/TitleOfContainer/titleOfContainer.css?");

/***/ }),

/***/ "./src/shared/Form/form.css":
/*!**********************************!*\
  !*** ./src/shared/Form/form.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"fieldset\": \"form__fieldset--3w8c6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Form/form.css?");

/***/ }),

/***/ "./src/shared/Form/ts.js":
/*!*******************************!*\
  !*** ./src/shared/Form/ts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Form */ \"./src/shared/Form/Form.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Form/ts.js?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/Board.tsx":
/*!*************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/Board.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Board = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar board_css_1 = __importDefault(__webpack_require__(/*! ./board.css */ \"./src/shared/ListOfBoards/Board/board.css\"));\nvar HeaderOfBoard_1 = __webpack_require__(/*! ./HeaderOfBoard */ \"./src/shared/ListOfBoards/Board/HeaderOfBoard/index.ts\");\nvar ListOfTasks_1 = __webpack_require__(/*! ../../ListOfTasks */ \"./src/shared/ListOfTasks/index.ts\");\nvar ContainerAddTask_1 = __webpack_require__(/*! ./ContainerAddTask */ \"./src/shared/ListOfBoards/Board/ContainerAddTask/index.ts\");\nvar Board = function (_a) {\n    var board = _a.board;\n    var _b = react_1.useState(board.items), tasks = _b[0], setTasks = _b[1];\n    return (react_1.default.createElement(\"li\", { className: board_css_1.default.board, \"aria-label\": board.title.text },\n        react_1.default.createElement(HeaderOfBoard_1.HeaderOfBoard, { color: board.title.color, text: board.title.text }),\n        react_1.default.createElement(ListOfTasks_1.ListOfTasks, { tasks: tasks, onSetTasks: setTasks }),\n        react_1.default.createElement(ContainerAddTask_1.ContainerAddTask, { tasks: tasks, onSetTasks: setTasks })));\n};\nexports.Board = Board;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/Board.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ContainerAddTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar containerAddTask_css_1 = __importDefault(__webpack_require__(/*! ./containerAddTask.css */ \"./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.css\"));\nvar react_2 = __webpack_require__(/*! react */ \"react\");\nvar Button_1 = __webpack_require__(/*! ../../../Button */ \"./src/shared/Button/index.ts\");\nvar PopupAddTask_1 = __webpack_require__(/*! ../../../Popups/PopupAddTask/PopupAddTask */ \"./src/shared/Popups/PopupAddTask/PopupAddTask.tsx\");\nvar ContainerAddTask = function (_a) {\n    var tasks = _a.tasks, onSetTasks = _a.onSetTasks;\n    var _b = react_2.useState(true), isOpenPopup = _b[0], setIsOpenPopup = _b[1];\n    var handleOpenPopupAddTask = function () {\n        setIsOpenPopup(false);\n    };\n    var handleClosePopupAddTask = function () {\n        setIsOpenPopup(true);\n    };\n    var handleAddTask = function (taskForTasks) {\n        onSetTasks(__spreadArray([taskForTasks], tasks));\n        setIsOpenPopup(false);\n    };\n    return (react_1.default.createElement(\"div\", { className: containerAddTask_css_1.default.containerAddTask }, isOpenPopup ? (react_1.default.createElement(Button_1.Button, { className: containerAddTask_css_1.default.buttonAddTask, type: 'button', \"aria-label\": 'Add task', onClick: handleOpenPopupAddTask },\n        react_1.default.createElement(\"p\", { className: containerAddTask_css_1.default.rubricButtonText }, 'New task'))) : (react_1.default.createElement(PopupAddTask_1.PopupAddTask, { isOpenPopup: isOpenPopup, onAddTask: handleAddTask, onClosePopup: handleClosePopupAddTask }))));\n};\nexports.ContainerAddTask = ContainerAddTask;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/ContainerAddTask/ContainerAddTask.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"containerAddTask\": \"containerAddTask__containerAddTask--3oGDJ\",\n\t\"buttonAddTask\": \"containerAddTask__buttonAddTask--40rLR\",\n\t\"rubric__button-text\": \"containerAddTask__rubric__button-text--3NAuT\",\n\t\"rubricButtonText\": \"containerAddTask__rubricButtonText--3jzyA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/ContainerAddTask/containerAddTask.css?");

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HeaderOfBoard = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar headerOfBoard_css_1 = __importDefault(__webpack_require__(/*! ./headerOfBoard.css */ \"./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.css\"));\nvar cx = bind_1.default.bind(headerOfBoard_css_1.default);\nvar HeaderOfBoard = function (_a) {\n    var _b;\n    var color = _a.color, text = _a.text;\n    var className = cx((_b = {\n            headerText: true\n        },\n        _b[\"\" + color] = color,\n        _b));\n    return (react_1.default.createElement(\"div\", { className: headerOfBoard_css_1.default.headerOfBoard },\n        react_1.default.createElement(\"h2\", { className: className }, text),\n        react_1.default.createElement(\"div\", { className: headerOfBoard_css_1.default.headerLine })));\n};\nexports.HeaderOfBoard = HeaderOfBoard;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/HeaderOfBoard/HeaderOfBoard.tsx?");

/***/ }),

/***/ "./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.css":
/*!***********************************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"headerOfBoard\": \"headerOfBoard__headerOfBoard--3C8wg\",\n\t\"headerLine\": \"headerOfBoard__headerLine--3iMOA\",\n\t\"headerText\": \"headerOfBoard__headerText--3aOWr\",\n\t\"black\": \"headerOfBoard__black--POp0D\",\n\t\"blue\": \"headerOfBoard__blue--2LryS\",\n\t\"coral\": \"headerOfBoard__coral--R5BX3\",\n\t\"fuchsia\": \"headerOfBoard__fuchsia--BV06P\",\n\t\"gray\": \"headerOfBoard__gray--2DPIu\",\n\t\"green\": \"headerOfBoard__green--27a5p\",\n\t\"lightGreen\": \"headerOfBoard__lightGreen--2BxYW\",\n\t\"pink\": \"headerOfBoard__pink--13xD6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/HeaderOfBoard/headerOfBoard.css?");

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

/***/ "./src/shared/ListOfBoards/Board/board.css":
/*!*************************************************!*\
  !*** ./src/shared/ListOfBoards/Board/board.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"board\": \"board__board--1lhSP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/Board/board.css?");

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ListOfBoards = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar listOfBoards_css_1 = __importDefault(__webpack_require__(/*! ./listOfBoards.css */ \"./src/shared/ListOfBoards/listOfBoards.css\"));\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/shared/ListOfBoards/Board/index.ts\");\nvar ListOfBoards = function (_a) {\n    var boards = _a.boards;\n    return (react_1.default.createElement(\"ul\", { className: listOfBoards_css_1.default.listOfBoards }, Object.entries(boards).map(function (_a) {\n        var boardId = _a[0], board = _a[1];\n        return react_1.default.createElement(Board_1.Board, { key: boardId, board: board });\n    })));\n};\nexports.ListOfBoards = ListOfBoards;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/ListOfBoards.tsx?");

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

/***/ "./src/shared/ListOfBoards/listOfBoards.css":
/*!**************************************************!*\
  !*** ./src/shared/ListOfBoards/listOfBoards.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listOfBoards\": \"listOfBoards__listOfBoards--3uyrM\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfBoards/listOfBoards.css?");

/***/ }),

/***/ "./src/shared/ListOfTasks/ListOfTasks.tsx":
/*!************************************************!*\
  !*** ./src/shared/ListOfTasks/ListOfTasks.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ListOfTasks = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar listOfTasks_css_1 = __importDefault(__webpack_require__(/*! ./listOfTasks.css */ \"./src/shared/ListOfTasks/listOfTasks.css\"));\nvar Task_1 = __webpack_require__(/*! ./Task */ \"./src/shared/ListOfTasks/Task/index.ts\");\nvar ListOfTasks = function (_a) {\n    var tasks = _a.tasks, onSetTasks = _a.onSetTasks;\n    return (react_1.default.createElement(\"ul\", { className: listOfTasks_css_1.default.listOfTasks }, tasks.map(function (task) {\n        return react_1.default.createElement(Task_1.Task, { key: task.id, task: task, tasks: tasks, onSetTasks: onSetTasks });\n    })));\n};\nexports.ListOfTasks = ListOfTasks;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/ListOfTasks.tsx?");

/***/ }),

/***/ "./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Checkbox = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar checkbox_css_1 = __importDefault(__webpack_require__(/*! ./checkbox.css */ \"./src/shared/ListOfTasks/Task/Checkbox/checkbox.css\"));\nvar cx = bind_1.default.bind(checkbox_css_1.default);\nvar CheckboxInput_1 = __webpack_require__(/*! ./CheckboxInput */ \"./src/shared/ListOfTasks/Task/Checkbox/CheckboxInput/index.ts\");\nvar CheckboxSpan_1 = __webpack_require__(/*! ./CheckboxSpan */ \"./src/shared/ListOfTasks/Task/Checkbox/CheckboxSpan/index.ts\");\nvar Checkbox = function (_a) {\n    var labelForCheckbox = _a.labelForCheckbox, isChecked = _a.isChecked, onChangeCheckbox = _a.onChangeCheckbox, onKeyDownCheckbox = _a.onKeyDownCheckbox, onFocus = _a.onFocus;\n    var classForSpan = cx({\n        checkboxSpan: true,\n        checkboxSpan_checked: isChecked\n    });\n    return (react_1.default.createElement(\"label\", { \"aria-label\": labelForCheckbox, className: checkbox_css_1.default.checkbox },\n        react_1.default.createElement(CheckboxInput_1.CheckboxInput, { className: checkbox_css_1.default.checkboxInput, checked: isChecked, onChange: onChangeCheckbox, tabIndex: -1, type: 'checkbox' }),\n        react_1.default.createElement(CheckboxSpan_1.CheckboxSpan, { className: classForSpan, onKeyDown: onKeyDownCheckbox, onFocus: onFocus, tabIndex: 0 })));\n};\nexports.Checkbox = Checkbox;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/Checkbox.tsx?");

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

/***/ "./src/shared/ListOfTasks/Task/Checkbox/checkbox.css":
/*!***********************************************************!*\
  !*** ./src/shared/ListOfTasks/Task/Checkbox/checkbox.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"checkbox\": \"checkbox__checkbox--3Qqhe\",\n\t\"checkboxInput\": \"checkbox__checkboxInput--2Sm--\",\n\t\"checkboxSpan\": \"checkbox__checkboxSpan--1xhHZ\",\n\t\"checkboxSpan_checked\": \"checkbox__checkboxSpan_checked--2HD7n\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Checkbox/checkbox.css?");

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
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Task = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar task_css_1 = __importDefault(__webpack_require__(/*! ./task.css */ \"./src/shared/ListOfTasks/Task/task.css\"));\nvar Checkbox_1 = __webpack_require__(/*! ./Checkbox */ \"./src/shared/ListOfTasks/Task/Checkbox/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar PopupRemoveTask_1 = __webpack_require__(/*! ../../Popups/PopupRemoveTask */ \"./src/shared/Popups/PopupRemoveTask/index.ts\");\nvar Task = function (_a) {\n    var task = _a.task, tasks = _a.tasks, onSetTasks = _a.onSetTasks;\n    var _b = react_1.useState(false), isOpenPopup = _b[0], setIsOpenPopup = _b[1];\n    var _c = react_1.useState(task.checked), isChecked = _c[0], setIsChecked = _c[1];\n    var _d = react_1.useState(false), isShown = _d[0], setIsShown = _d[1];\n    var handleOpenPopup = function () {\n        setIsOpenPopup(true);\n    };\n    var handleClosePopup = function () {\n        setIsOpenPopup(false);\n    };\n    var handleChangeCheckbox = function () {\n        setIsChecked(!isChecked);\n    };\n    var handleKeyDown = function (event) {\n        if (event.code === 'Space' || event.code === 'Enter') {\n            setIsChecked(!isChecked);\n        }\n    };\n    var handleBlur = function () {\n        setIsShown(false);\n    };\n    return (react_1.default.createElement(\"li\", { className: task_css_1.default.task, onMouseEnter: function () { return setIsShown(true); }, onMouseLeave: function () { return setIsShown(false); } },\n        react_1.default.createElement(Checkbox_1.Checkbox, { labelForCheckbox: \"Check \" + task.text, isChecked: isChecked, onChangeCheckbox: handleChangeCheckbox, onKeyDownCheckbox: handleKeyDown, onFocus: function () { return setIsShown(true); } }),\n        react_1.default.createElement(\"p\", { className: task_css_1.default.taskText }, task.text),\n        isShown && react_1.default.createElement(Button_1.Button, { className: task_css_1.default.buttonRemoveTask, type: 'button', \"aria-label\": 'Remove task', onClick: handleOpenPopup, onBlur: handleBlur }),\n        isOpenPopup && (react_1.default.createElement(PopupRemoveTask_1.PopupRemoveTask, { task: task, tasks: tasks, isOpenPopup: isOpenPopup, onClosePopup: handleClosePopup, onSetTasks: onSetTasks }))));\n};\nexports.Task = Task;\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/Task.tsx?");

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

/***/ "./src/shared/ListOfTasks/Task/task.css":
/*!**********************************************!*\
  !*** ./src/shared/ListOfTasks/Task/task.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"task\": \"task__task--2YYcJ\",\n\t\"taskText\": \"task__taskText--10t12\",\n\t\"buttonRemoveTask\": \"task__buttonRemoveTask--15i4e\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/Task/task.css?");

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

/***/ "./src/shared/ListOfTasks/listOfTasks.css":
/*!************************************************!*\
  !*** ./src/shared/ListOfTasks/listOfTasks.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listOfTasks\": \"listOfTasks__listOfTasks--6aLjv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ListOfTasks/listOfTasks.css?");

/***/ }),

/***/ "./src/shared/Popups/PopupAddTask/PopupAddTask.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Popups/PopupAddTask/PopupAddTask.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupAddTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar v4_1 = __importDefault(__webpack_require__(/*! uuid/v4 */ \"uuid/v4\"));\nvar ts_1 = __webpack_require__(/*! ../../Form/ts */ \"./src/shared/Form/ts.js\");\nvar ErrorOfForm_1 = __webpack_require__(/*! ../../Form/ErrorOfForm */ \"./src/shared/Form/ErrorOfForm/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar popupAddTask_css_1 = __importDefault(__webpack_require__(/*! ./popupAddTask.css */ \"./src/shared/Popups/PopupAddTask/popupAddTask.css\"));\nvar cx = bind_1.default.bind(popupAddTask_css_1.default);\nvar PopupAddTask = function (_a) {\n    var isOpenPopup = _a.isOpenPopup, onAddTask = _a.onAddTask, onClosePopup = _a.onClosePopup;\n    var _b = react_hook_form_1.useForm({\n        mode: 'onBlur'\n    }), register = _b.register, _c = _b.formState, errors = _c.errors, isValid = _c.isValid, handleSubmit = _b.handleSubmit, reset = _b.reset;\n    var styleForForm = cx({\n        popupAddTask: true,\n        popupAddTaskDisabled: isOpenPopup\n    });\n    var styleForSubmitButton = cx({\n        buttonDefault: true,\n        buttonSubmit: true\n    });\n    var onSubmit = function (data) {\n        onAddTask({\n            id: v4_1.default(),\n            text: (data === null || data === void 0 ? void 0 : data.task) || 'Untitled',\n            checked: false\n        });\n        onClosePopup();\n        reset();\n    };\n    return (react_1.default.createElement(ts_1.Form, { className: styleForForm, noValidate: true, onSubmit: handleSubmit(onSubmit) },\n        react_1.default.createElement(\"input\", __assign({ className: popupAddTask_css_1.default.inputOfForm }, register('task', {\n            required: 'Required field',\n            minLength: {\n                value: 3,\n                message: 'Minimum 3 characters'\n            },\n            maxLength: {\n                value: 50,\n                message: 'Maximum 50 characters'\n            }\n        }))),\n        react_1.default.createElement(ErrorOfForm_1.ErrorOfForm, { isDisabledButton: !isValid, errorOfInput: errors.task }),\n        react_1.default.createElement(\"div\", { className: popupAddTask_css_1.default.buttonsContainer },\n            react_1.default.createElement(Button_1.Button, { className: styleForSubmitButton, type: 'submit', \"aria-label\": 'Add Task', disabled: !isValid }, 'Add Task'),\n            react_1.default.createElement(Button_1.Button, { className: popupAddTask_css_1.default.buttonDefault, type: 'button', \"aria-label\": 'Cancel add task', onClick: onClosePopup }, 'Cancel'))));\n};\nexports.PopupAddTask = PopupAddTask;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupAddTask/PopupAddTask.tsx?");

/***/ }),

/***/ "./src/shared/Popups/PopupAddTask/popupAddTask.css":
/*!*********************************************************!*\
  !*** ./src/shared/Popups/PopupAddTask/popupAddTask.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"popupAddTask\": \"popupAddTask__popupAddTask--rtDPk\",\n\t\"popupAddTaskDisabled\": \"popupAddTask__popupAddTaskDisabled--2ijIl\",\n\t\"inputOfForm\": \"popupAddTask__inputOfForm--2gsn6\",\n\t\"buttonDefault\": \"popupAddTask__buttonDefault--2av8f\",\n\t\"buttonSubmit\": \"popupAddTask__buttonSubmit--2o7g0\",\n\t\"buttonsContainer\": \"popupAddTask__buttonsContainer--3d-H5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupAddTask/popupAddTask.css?");

/***/ }),

/***/ "./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupRemoveTask = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar popupRemoveTask_css_1 = __importDefault(__webpack_require__(/*! ./popupRemoveTask.css */ \"./src/shared/Popups/PopupRemoveTask/popupRemoveTask.css\"));\nvar PopupWithForm_1 = __webpack_require__(/*! ../PopupWithForm/PopupWithForm */ \"./src/shared/Popups/PopupWithForm/PopupWithForm.tsx\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar TitleOfContainer_1 = __webpack_require__(/*! ../../Form/TitleOfContainer */ \"./src/shared/Form/TitleOfContainer/index.ts\");\nvar PopupRemoveTask = function (_a) {\n    var task = _a.task, tasks = _a.tasks, isOpenPopup = _a.isOpenPopup, onClosePopup = _a.onClosePopup, onSetTasks = _a.onSetTasks;\n    var handleSubmit = function (event) {\n        event.preventDefault();\n        onSetTasks(tasks.filter(function (itemOfTasks) { return itemOfTasks.id !== task.id; }));\n        onClosePopup();\n    };\n    return (react_1.default.createElement(PopupWithForm_1.PopupWithForm, { styleForForm: popupRemoveTask_css_1.default.form, isOpenPopup: isOpenPopup, onClosePopup: onClosePopup, onSubmitForm: handleSubmit },\n        react_1.default.createElement(TitleOfContainer_1.TitleOfContainer, { nameForTitleOfForm: task.text }),\n        react_1.default.createElement(Button_1.Button, { className: popupRemoveTask_css_1.default.buttonRemove, type: 'submit', \"aria-label\": 'Remove Task' }, 'Remove Task')));\n};\nexports.PopupRemoveTask = PopupRemoveTask;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupRemoveTask/PopupRemoveTask.tsx?");

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

/***/ "./src/shared/Popups/PopupRemoveTask/popupRemoveTask.css":
/*!***************************************************************!*\
  !*** ./src/shared/Popups/PopupRemoveTask/popupRemoveTask.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"popupRemoveTask__form--1qz_A\",\n\t\"buttonRemove\": \"popupRemoveTask__buttonRemove--3WcYt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupRemoveTask/popupRemoveTask.css?");

/***/ }),

/***/ "./src/shared/Popups/PopupWithForm/PopupWithForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Popups/PopupWithForm/PopupWithForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PopupWithForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar ts_1 = __webpack_require__(/*! ../../Form/ts */ \"./src/shared/Form/ts.js\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar bind_1 = __importDefault(__webpack_require__(/*! classnames/bind */ \"classnames/bind\"));\nvar popupWithForm_css_1 = __importDefault(__webpack_require__(/*! ./popupWithForm.css */ \"./src/shared/Popups/PopupWithForm/popupWithForm.css\"));\nvar cx = bind_1.default.bind(popupWithForm_css_1.default);\nvar PopupWithForm = function (_a) {\n    var styleForForm = _a.styleForForm, isOpenPopup = _a.isOpenPopup, onClosePopup = _a.onClosePopup, onSubmitForm = _a.onSubmitForm, children = _a.children;\n    var classNameForPopup = cx({\n        popup: true,\n        popupOpened: isOpenPopup\n    });\n    var handleClickClosePopup = function (event) {\n        if (event.target === event.currentTarget) {\n            onClosePopup();\n        }\n    };\n    return (react_1.default.createElement(\"div\", { onClick: handleClickClosePopup, className: classNameForPopup },\n        react_1.default.createElement(\"div\", { className: popupWithForm_css_1.default.popupContainer },\n            react_1.default.createElement(Button_1.Button, { className: popupWithForm_css_1.default.buttonClosePopup, type: 'button', \"aria-label\": 'Close popup', onClick: onClosePopup }),\n            react_1.default.createElement(ts_1.Form, { className: styleForForm, noValidate: true, onSubmit: onSubmitForm }, children))));\n};\nexports.PopupWithForm = PopupWithForm;\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupWithForm/PopupWithForm.tsx?");

/***/ }),

/***/ "./src/shared/Popups/PopupWithForm/popupWithForm.css":
/*!***********************************************************!*\
  !*** ./src/shared/Popups/PopupWithForm/popupWithForm.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"popup\": \"popupWithForm__popup--1klhv\",\n\t\"popupOpened\": \"popupWithForm__popupOpened--3jOuE\",\n\t\"popupContainer\": \"popupWithForm__popupContainer--3bqjK\",\n\t\"buttonClosePopup\": \"popupWithForm__buttonClosePopup--b4nKn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Popups/PopupWithForm/popupWithForm.css?");

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