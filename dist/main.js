/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  background-color: hsl(205deg, 14%, 28%);\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: white;\\n}\\n\\n.accordion-container {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  margin: 10px;\\n  padding: 10px;\\n  border: 2px solid white;\\n  width: 600px;\\n}\\n\\n.accordion-element {\\n  margin: 5px auto;\\n  padding: 10px;\\n  border: 2px solid yellow;\\n}\\n\\n.accordion-element-header {\\n  border: 1px solid white;\\n  padding: 10px;\\n  font-size: 20px;\\n  line-height: 30px;\\n}\\n\\n.accordion-element-body {\\n  border: 1px solid white;\\n  padding: 5px;\\n  display: none;\\n  font-size: 14px;\\n}\\n\\n.open-element {\\n  display: block;\\n}\\n\\n.pagination-main-container {\\n  width: 700px;\\n  height: 500px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 1px solid white;\\n  font-family: monospace;\\n}\\n\\n.pagination-page {\\n  position: relative;\\n  width: 700px;\\n  height: 400px;\\n  font-size: 48px;\\n  padding-top: 40px;\\n  text-align: center;\\n  color: white;\\n  box-sizing: border-box;\\n}\\n\\n.pagination-bar {\\n  display: flex;\\n  height: 100px;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  justify-content: center;\\n  border: 1px solid white;\\n}\\n\\n.control-group-one {\\n  display: flex;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  padding: 35px 10px;\\n  border: 1px solid white;\\n}\\n\\n.control-index-group {\\n  display: flex;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  padding: 35px 10px;\\n  border: 1px solid white;\\n}\\n\\n.control-group-two {\\n  display: flex;\\n  flex-direction: row;\\n  flex-shrink: 0;\\n  padding: 35px 10px;\\n  border: 1px solid white;\\n}\\n\\n.pagination-index-button {\\n  height: 30px;\\n  width: 30px;\\n  border: 1px solid white;\\n  line-height: 30px;\\n  text-align: center;\\n}\\n\\n.control-button {\\n  height: 30px;\\n  width: 30px;\\n  border: 1px solid white;\\n  line-height: 30px;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://components/./src/assets/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://components/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://components/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.scss":
/*!*******************************!*\
  !*** ./src/assets/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://components/./src/assets/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://components/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/accordion.js":
/*!*************************************!*\
  !*** ./src/components/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n\r\n\r\nconst loadAccordion = (props) => {\r\n\t//#region Constants\r\n\r\n\tconst { accordionData: data } = props;\r\n\r\n\t//#endregion\r\n\r\n\t//#region Static Elements\r\n\r\n\tconst accordionContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['accordion-container'],\r\n\t});\r\n\r\n\t//#endregion\r\n\r\n\t//#region Utility Functions\r\n\r\n\tconst toggleAccordionElement = (element) => {\r\n\t\telement.classList.toggle('open-element');\r\n\t};\r\n\r\n\t//#endregion\r\n\r\n\t//#region Generate Dynamic Elements\r\n\r\n\tdata.forEach((element) => {\r\n\t\tconst accordionElement = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\t\tclassList: ['accordion-element'],\r\n\t\t});\r\n\t\tconst accordionElementHeader = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\t\tclassList: ['accordion-element-header'],\r\n\t\t\tinnerText: element.header,\r\n\t\t});\r\n\t\tconst accordionElementBody = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\t\tclassList: ['accordion-element-body'],\r\n\t\t\tinnerText: element.content,\r\n\t\t});\r\n\r\n\t\taccordionElementHeader.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\ttoggleAccordionElement(accordionElementBody);\r\n\t\t});\r\n\r\n\t\taccordionElement.append(accordionElementHeader, accordionElementBody);\r\n\t\taccordionContainer.append(accordionElement);\r\n\t});\r\n\r\n\t//#endregion\r\n\r\n\treturn accordionContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAccordion);\r\n\n\n//# sourceURL=webpack://components/./src/components/accordion.js?");

/***/ }),

/***/ "./src/components/pagination.js":
/*!**************************************!*\
  !*** ./src/components/pagination.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\n\r\n\r\nconst renderPage = (pageNumber) => {\r\n\tconst paginationPageList = [\r\n\t\t...document.getElementsByClassName('pagination-page'),\r\n\t];\r\n\tif (paginationPageList.length) {\r\n\t\tpaginationPageList[0].innerText = `This is Page ${pageNumber}`;\r\n\t}\r\n};\r\n\r\nconst paginationBar = (pageCount) => {\r\n\tconst paginationBar = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['pagination-bar'] });\r\n\tconst goFirstButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['control-button'],\r\n\t\tinnerText: '<<',\r\n\t});\r\n\tconst goBackwardButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['control-button'],\r\n\t\tinnerText: '<',\r\n\t});\r\n\tconst goForwardButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['control-button'],\r\n\t\tinnerText: '>',\r\n\t});\r\n\tconst goLastButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['control-button'],\r\n\t\tinnerText: '>>',\r\n\t});\r\n\r\n\tconst controlGroupOne = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['control-group-one'] });\r\n\tconst controlIndexGroup = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['control-index-group'],\r\n\t});\r\n\tconst controlGroupTwo = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['control-group-two'] });\r\n\tlet pageIndex = 1;\r\n\r\n\tconst buttonCount = pageCount >= 10 ? 10 : pageCount;\r\n\r\n\tconst updatecontrolIndexGroupForward = (index, pageCount) => {\r\n\t\tconst startingIndex = index + 8 > pageCount ? pageCount - 9 : index - 1;\r\n\t\tupdateControlIndexGroup(startingIndex);\r\n\t};\r\n\tconst updatecontrolIndexGroupBackward = (index) => {\r\n\t\tconst startingIndex = index - 8 < 1 ? 1 : index - 8;\r\n\t\tupdateControlIndexGroup(startingIndex);\r\n\t};\r\n\r\n\tconst updateControlIndexGroup = (index) => {\r\n\t\tconst paginationIndexButtonList = [\r\n\t\t\t...document.getElementsByClassName('pagination-index-button'),\r\n\t\t];\r\n\r\n\t\tif (index < 1) {\r\n\t\t\tindex = 1;\r\n\t\t} else if (index > pageCount - buttonCount + 1) {\r\n\t\t\tindex = pageCount - buttonCount + 1;\r\n\t\t}\r\n\t\tpaginationIndexButtonList.forEach((button, iteratorIndex) => {\r\n\t\t\tbutton.innerText = index + iteratorIndex;\r\n\t\t});\r\n\t};\r\n\r\n\tconst goFirst = () => {\r\n\t\tpageIndex = 1;\r\n\t\trenderPage(1);\r\n\t\tupdateControlIndexGroup(1);\r\n\t};\r\n\tconst goLast = () => {\r\n\t\tpageIndex = pageCount;\r\n\t\trenderPage(pageCount);\r\n\t\tupdateControlIndexGroup(pageIndex - buttonCount + 1);\r\n\t};\r\n\r\n\tconst goBackward = () => {\r\n\t\tpageIndex = pageIndex - 1 < 1 ? 1 : pageIndex - 1;\r\n\t\tconsole.log(pageIndex);\r\n\t\trenderPage(pageIndex);\r\n\t\tupdateControlIndexGroup(pageIndex);\r\n\t};\r\n\r\n\tconst goForward = () => {\r\n\t\tpageIndex = pageIndex + 1 > pageCount ? pageCount : pageIndex + 1;\r\n\t\trenderPage(pageIndex);\r\n\t\tupdateControlIndexGroup(pageIndex - buttonCount + 1);\r\n\t};\r\n\tgoFirstButton.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tgoFirst();\r\n\t});\r\n\tgoLastButton.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tgoLast();\r\n\t});\r\n\tgoForwardButton.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tgoForward();\r\n\t});\r\n\tgoBackwardButton.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tgoBackward();\r\n\t});\r\n\r\n\tfor (let i = 0; i < buttonCount; i++) {\r\n\t\tconst paginationIndexButton = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\t\tclassList: ['pagination-index-button'],\r\n\t\t\tinnerText: i + 1,\r\n\t\t});\r\n\t\tpaginationIndexButton.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tconst index = parseInt(paginationIndexButton.innerText);\r\n\t\t\trenderPage(index);\r\n\t\t\tpageIndex = index;\r\n\t\t\tif (pageCount > 10 && i < 2) {\r\n\t\t\t\tupdatecontrolIndexGroupBackward(index, pageCount);\r\n\t\t\t} else if (pageCount > 10 && i > 7) {\r\n\t\t\t\tupdatecontrolIndexGroupForward(index, pageCount);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tcontrolIndexGroup.append(paginationIndexButton);\r\n\t}\r\n\r\n\tcontrolGroupOne.append(goFirstButton, goBackwardButton);\r\n\tcontrolGroupTwo.append(goForwardButton, goLastButton);\r\n\r\n\tpaginationBar.append(controlGroupOne, controlIndexGroup, controlGroupTwo);\r\n\r\n\treturn paginationBar;\r\n};\r\n\r\nconst loadPagination = (pageCount) => {\r\n\tconst paginationMainContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['pagination-main-container'],\r\n\t});\r\n\tconst paginationPageContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\tclassList: ['pagination-page'],\r\n\t\tinnerText: `This is Page 1`,\r\n\t});\r\n\tconst pagination = paginationBar(pageCount);\r\n\r\n\tpaginationMainContainer.append(paginationPageContainer, pagination);\r\n\r\n\treturn paginationMainContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPagination);\r\n\n\n//# sourceURL=webpack://components/./src/components/pagination.js?");

/***/ }),

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/createElement */ \"./src/utilities/createElement.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../assets/star-regular.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../assets/star-solid.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst loadRating = () => {\r\n\t//#region Constants\r\n\r\n\tconst ratingContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['rating-container'] });\r\n\tconst ratingScaleContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['rating-scale-container'] });\r\n\tconst ratingScaleIconContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['rating-scale-icon-container'] });\r\n\tconst ratingInformationContainer = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ classList: ['rating-information-container'] });\r\n\tconst ratingCountSpan = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ type: 'span', classList: ['rating-count-span'] });\r\n\r\n\t//#endregion\r\n\r\n\tconst changeImage = (event) => {\r\n\t\tconsole.log(event);\r\n\t\tconst element = event.target;\r\n\t\t// const parent = event.path[1];\r\n\t\tconst rect = element.getBoundingClientRect();\r\n\t\tconsole.log(rect);\r\n\t\tevent.fromElement.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../assets/star-solid.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n\t};\r\n\r\n\t//#region Append\r\n\tfor (let i = 0; i < 5; i++) {\r\n\t\tconst ratingIcon = (0,_utilities_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n\t\t\ttype: 'img',\r\n\t\t\tsrc: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../assets/star-regular.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\r\n\t\t\tclassList: ['rating-icon'],\r\n\t\t});\r\n\r\n\t\t// ratingIcon.addEventListener('mouseover',changeImage );\r\n\t\tratingScaleIconContainer.append(ratingIcon);\r\n\t}\r\n\r\n\tratingScaleContainer.addEventListener('mouseover', changeImage);\r\n\r\n\tratingScaleContainer.append(ratingScaleIconContainer);\r\n\tratingInformationContainer.append(ratingCountSpan);\r\n\r\n\tratingContainer.append(ratingScaleContainer, ratingInformationContainer);\r\n\r\n\t//#endregion\r\n\r\n\treturn ratingContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRating);\r\n\n\n//# sourceURL=webpack://components/./src/components/rating.js?");

/***/ }),

/***/ "./src/dumyData/accordionData.js":
/*!***************************************!*\
  !*** ./src/dumyData/accordionData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordionData\": () => (/* binding */ accordionData)\n/* harmony export */ });\nconst accordionData = [\r\n    {\r\n        header : 'Lorem Ipsum 1',\r\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\r\n    },\r\n    {\r\n        header : 'Lorem Ipsum 2',\r\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\r\n    },\r\n    {\r\n        header : 'Lorem Ipsum 3',\r\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\r\n    },\r\n    {\r\n        header : 'Lorem Ipsum 4',\r\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\r\n    },\r\n    {\r\n        header : 'Lorem Ipsum 5',\r\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\r\n    },\r\n    {\r\n        header : 'Lorem Ipsum 6',\r\n        content : '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"'\r\n    }\r\n]\r\n\r\n\n\n//# sourceURL=webpack://components/./src/dumyData/accordionData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.scss */ \"./src/assets/style.scss\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pagination */ \"./src/components/pagination.js\");\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ \"./src/components/accordion.js\");\n/* harmony import */ var _dumyData_accordionData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dumyData/accordionData */ \"./src/dumyData/accordionData.js\");\n/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating */ \"./src/components/rating.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(_dumyData_accordionData__WEBPACK_IMPORTED_MODULE_3__.accordionData);\r\n// const pagination = loadPagination(50)\r\n// const accordion = loadAccordion({accordionData});\r\nconst rating = (0,_components_rating__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\ndocument.body.append(_components_rating__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n//# sourceURL=webpack://components/./src/index.js?");

/***/ }),

/***/ "./src/utilities/createElement.js":
/*!****************************************!*\
  !*** ./src/utilities/createElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createElement = (config) => {\r\n    const {id,classList = [], type = 'div',innerText,innerHTML, src, contentEditable,row, options,optionValues,multiple,size, placeholder} = config\r\n\r\n    const container = document.createElement(type);\r\n    id              ? container.id = id                                                     : '';\r\n    classList       ? classList.forEach(className => {container.classList.add(className)})  : '';\r\n    innerText       ? container.innerText = innerText                                       : '';\r\n    innerHTML       ? container.innerHTML = innerHTML                                       : '';\r\n\r\n \r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://components/./src/utilities/createElement.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;