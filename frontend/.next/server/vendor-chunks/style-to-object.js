"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-to-object/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-object/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar inline_style_parser_1 = __importDefault(__webpack_require__(/*! inline-style-parser */ \"(ssr)/./node_modules/inline-style-parser/index.js\"));\n/**\n * Parses inline style to object.\n *\n * @param style - Inline style.\n * @param iterator - Iterator.\n * @returns - Style object or null.\n *\n * @example Parsing inline style to object:\n *\n * ```js\n * import parse from 'style-to-object';\n * parse('line-height: 42;'); // { 'line-height': '42' }\n * ```\n */\nfunction StyleToObject(style, iterator) {\n    var styleObject = null;\n    if (!style || typeof style !== 'string') {\n        return styleObject;\n    }\n    var declarations = (0, inline_style_parser_1.default)(style);\n    var hasIterator = typeof iterator === 'function';\n    declarations.forEach(function (declaration) {\n        if (declaration.type !== 'declaration') {\n            return;\n        }\n        var property = declaration.property, value = declaration.value;\n        if (hasIterator) {\n            iterator(property, value, declaration);\n        }\n        else if (value) {\n            styleObject = styleObject || {};\n            styleObject[property] = value;\n        }\n    });\n    return styleObject;\n}\nexports[\"default\"] = StyleToObject;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDRDQUE0QyxtQkFBTyxDQUFDLDhFQUFxQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLElBQUksS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9zdHlsZS10by1vYmplY3QvY2pzL2luZGV4LmpzPzdmYTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5saW5lX3N0eWxlX3BhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpbmxpbmUtc3R5bGUtcGFyc2VyXCIpKTtcbi8qKlxuICogUGFyc2VzIGlubGluZSBzdHlsZSB0byBvYmplY3QuXG4gKlxuICogQHBhcmFtIHN0eWxlIC0gSW5saW5lIHN0eWxlLlxuICogQHBhcmFtIGl0ZXJhdG9yIC0gSXRlcmF0b3IuXG4gKiBAcmV0dXJucyAtIFN0eWxlIG9iamVjdCBvciBudWxsLlxuICpcbiAqIEBleGFtcGxlIFBhcnNpbmcgaW5saW5lIHN0eWxlIHRvIG9iamVjdDpcbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHBhcnNlIGZyb20gJ3N0eWxlLXRvLW9iamVjdCc7XG4gKiBwYXJzZSgnbGluZS1oZWlnaHQ6IDQyOycpOyAvLyB7ICdsaW5lLWhlaWdodCc6ICc0MicgfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIFN0eWxlVG9PYmplY3Qoc3R5bGUsIGl0ZXJhdG9yKSB7XG4gICAgdmFyIHN0eWxlT2JqZWN0ID0gbnVsbDtcbiAgICBpZiAoIXN0eWxlIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICB2YXIgZGVjbGFyYXRpb25zID0gKDAsIGlubGluZV9zdHlsZV9wYXJzZXJfMS5kZWZhdWx0KShzdHlsZSk7XG4gICAgdmFyIGhhc0l0ZXJhdG9yID0gdHlwZW9mIGl0ZXJhdG9yID09PSAnZnVuY3Rpb24nO1xuICAgIGRlY2xhcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWNsYXJhdGlvbikge1xuICAgICAgICBpZiAoZGVjbGFyYXRpb24udHlwZSAhPT0gJ2RlY2xhcmF0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLnByb3BlcnR5LCB2YWx1ZSA9IGRlY2xhcmF0aW9uLnZhbHVlO1xuICAgICAgICBpZiAoaGFzSXRlcmF0b3IpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHByb3BlcnR5LCB2YWx1ZSwgZGVjbGFyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZU9iamVjdCA9IHN0eWxlT2JqZWN0IHx8IHt9O1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVRvT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/style-to-object/esm/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/style-to-object/esm/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cjs/index.js */ \"(ssr)/./node_modules/style-to-object/cjs/index.js\");\n\n\n// ensure compatibility with rollup umd build\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || _cjs_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2VzbS9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0EsaUVBQWUscURBQXFCLElBQUksMENBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9lc20vaW5kZXgubWpzPzhmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlVG9PYmplY3QgZnJvbSAnLi4vY2pzL2luZGV4LmpzJztcblxuLy8gZW5zdXJlIGNvbXBhdGliaWxpdHkgd2l0aCByb2xsdXAgdW1kIGJ1aWxkXG5leHBvcnQgZGVmYXVsdCBTdHlsZVRvT2JqZWN0LmRlZmF1bHQgfHwgU3R5bGVUb09iamVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/esm/index.mjs\n");

/***/ })

};
;