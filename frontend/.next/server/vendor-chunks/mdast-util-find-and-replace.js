"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-find-and-replace";
exports.ids = ["vendor-chunks/mdast-util-find-and-replace"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findAndReplace: () => (/* binding */ findAndReplace)\n/* harmony export */ });\n/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ \"(ssr)/./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js\");\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').Nodes} Nodes\n * @typedef {import('mdast').Parents} Parents\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast').Text} Text\n * @typedef {import('unist-util-visit-parents').Test} Test\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */\n\n/**\n * @typedef RegExpMatchObject\n *   Info on the match.\n * @property {number} index\n *   The index of the search at which the result was found.\n * @property {string} input\n *   A copy of the search string in the text node.\n * @property {[...Array<Parents>, Text]} stack\n *   All ancestors of the text node, where the last node is the text itself.\n *\n * @typedef {RegExp | string} Find\n *   Pattern to find.\n *\n *   Strings are escaped and then turned into global expressions.\n *\n * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList\n *   Several find and replaces, in array form.\n *\n * @typedef {[Find, Replace?]} FindAndReplaceTuple\n *   Find and replace in tuple form.\n *\n * @typedef {ReplaceFunction | string | null | undefined} Replace\n *   Thing to replace with.\n *\n * @callback ReplaceFunction\n *   Callback called when a search matches.\n * @param {...any} parameters\n *   The parameters are the result of corresponding search expression:\n *\n *   * `value` (`string`) — whole match\n *   * `...capture` (`Array<string>`) — matches from regex capture groups\n *   * `match` (`RegExpMatchObject`) — info on the match\n * @returns {Array<PhrasingContent> | PhrasingContent | string | false | null | undefined}\n *   Thing to replace with.\n *\n *   * when `null`, `undefined`, `''`, remove the match\n *   * …or when `false`, do not replace at all\n *   * …or when `string`, replace with a text node of that value\n *   * …or when `Node` or `Array<Node>`, replace with those nodes\n *\n * @typedef {[RegExp, ReplaceFunction]} Pair\n *   Normalized find and replace.\n *\n * @typedef {Array<Pair>} Pairs\n *   All find and replaced.\n *\n * @typedef Options\n *   Configuration.\n * @property {Test | null | undefined} [ignore]\n *   Test for which nodes to ignore (optional).\n */\n\n\n\n\n\n/**\n * Find patterns in a tree and replace them.\n *\n * The algorithm searches the tree in *preorder* for complete values in `Text`\n * nodes.\n * Partial matches are not supported.\n *\n * @param {Nodes} tree\n *   Tree to change.\n * @param {FindAndReplaceList | FindAndReplaceTuple} list\n *   Patterns to find.\n * @param {Options | null | undefined} [options]\n *   Configuration (when `find` is not `Find`).\n * @returns {undefined}\n *   Nothing.\n */\nfunction findAndReplace(tree, list, options) {\n  const settings = options || {}\n  const ignored = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_1__.convert)(settings.ignore || [])\n  const pairs = toPairs(list)\n  let pairIndex = -1\n\n  while (++pairIndex < pairs.length) {\n    (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_2__.visitParents)(tree, 'text', visitor)\n  }\n\n  /** @type {import('unist-util-visit-parents').BuildVisitor<Root, 'text'>} */\n  function visitor(node, parents) {\n    let index = -1\n    /** @type {Parents | undefined} */\n    let grandparent\n\n    while (++index < parents.length) {\n      const parent = parents[index]\n      /** @type {Array<Nodes> | undefined} */\n      const siblings = grandparent ? grandparent.children : undefined\n\n      if (\n        ignored(\n          parent,\n          siblings ? siblings.indexOf(parent) : undefined,\n          grandparent\n        )\n      ) {\n        return\n      }\n\n      grandparent = parent\n    }\n\n    if (grandparent) {\n      return handler(node, parents)\n    }\n  }\n\n  /**\n   * Handle a text node which is not in an ignored parent.\n   *\n   * @param {Text} node\n   *   Text node.\n   * @param {Array<Parents>} parents\n   *   Parents.\n   * @returns {VisitorResult}\n   *   Result.\n   */\n  function handler(node, parents) {\n    const parent = parents[parents.length - 1]\n    const find = pairs[pairIndex][0]\n    const replace = pairs[pairIndex][1]\n    let start = 0\n    /** @type {Array<Nodes>} */\n    const siblings = parent.children\n    const index = siblings.indexOf(node)\n    let change = false\n    /** @type {Array<PhrasingContent>} */\n    let nodes = []\n\n    find.lastIndex = 0\n\n    let match = find.exec(node.value)\n\n    while (match) {\n      const position = match.index\n      /** @type {RegExpMatchObject} */\n      const matchObject = {\n        index: match.index,\n        input: match.input,\n        stack: [...parents, node]\n      }\n      let value = replace(...match, matchObject)\n\n      if (typeof value === 'string') {\n        value = value.length > 0 ? {type: 'text', value} : undefined\n      }\n\n      // It wasn’t a match after all.\n      if (value === false) {\n        // False acts as if there was no match.\n        // So we need to reset `lastIndex`, which currently being at the end of\n        // the current match, to the beginning.\n        find.lastIndex = position + 1\n      } else {\n        if (start !== position) {\n          nodes.push({\n            type: 'text',\n            value: node.value.slice(start, position)\n          })\n        }\n\n        if (Array.isArray(value)) {\n          nodes.push(...value)\n        } else if (value) {\n          nodes.push(value)\n        }\n\n        start = position + match[0].length\n        change = true\n      }\n\n      if (!find.global) {\n        break\n      }\n\n      match = find.exec(node.value)\n    }\n\n    if (change) {\n      if (start < node.value.length) {\n        nodes.push({type: 'text', value: node.value.slice(start)})\n      }\n\n      parent.children.splice(index, 1, ...nodes)\n    } else {\n      nodes = [node]\n    }\n\n    return index + nodes.length\n  }\n}\n\n/**\n * Turn a tuple or a list of tuples into pairs.\n *\n * @param {FindAndReplaceList | FindAndReplaceTuple} tupleOrList\n *   Schema.\n * @returns {Pairs}\n *   Clean pairs.\n */\nfunction toPairs(tupleOrList) {\n  /** @type {Pairs} */\n  const result = []\n\n  if (!Array.isArray(tupleOrList)) {\n    throw new TypeError('Expected find and replace tuple or list of tuples')\n  }\n\n  /** @type {FindAndReplaceList} */\n  // @ts-expect-error: correct.\n  const list =\n    !tupleOrList[0] || Array.isArray(tupleOrList[0])\n      ? tupleOrList\n      : [tupleOrList]\n\n  let index = -1\n\n  while (++index < list.length) {\n    const tuple = list[index]\n    result.push([toExpression(tuple[0]), toFunction(tuple[1])])\n  }\n\n  return result\n}\n\n/**\n * Turn a find into an expression.\n *\n * @param {Find} find\n *   Find.\n * @returns {RegExp}\n *   Expression.\n */\nfunction toExpression(find) {\n  return typeof find === 'string' ? new RegExp((0,escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(find), 'g') : find\n}\n\n/**\n * Turn a replace into a function.\n *\n * @param {Replace} replace\n *   Replace.\n * @returns {ReplaceFunction}\n *   Function.\n */\nfunction toFunction(replace) {\n  return typeof replace === 'function'\n    ? replace\n    : function () {\n        return replace\n      }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLGtEQUFrRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBLGFBQWEsNkNBQTZDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTs7QUFFeUM7QUFDWTtBQUNoQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLDBDQUEwQztBQUNyRDtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0JBQWtCLHNEQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNFQUFZO0FBQ2hCOztBQUVBLGFBQWEsK0RBQStEO0FBQzVFO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2Qzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQTZDO0FBQ2pFOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQTBDO0FBQ3JEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0VBQU07QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZS9saWIvaW5kZXguanM/YTFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuTm9kZXN9IE5vZGVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlBhcmVudHN9IFBhcmVudHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGhyYXNpbmdDb250ZW50fSBQaHJhc2luZ0NvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5UZXh0fSBUZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5UZXN0fSBUZXN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBSZWdFeHBNYXRjaE9iamVjdFxuICogICBJbmZvIG9uIHRoZSBtYXRjaC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleFxuICogICBUaGUgaW5kZXggb2YgdGhlIHNlYXJjaCBhdCB3aGljaCB0aGUgcmVzdWx0IHdhcyBmb3VuZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpbnB1dFxuICogICBBIGNvcHkgb2YgdGhlIHNlYXJjaCBzdHJpbmcgaW4gdGhlIHRleHQgbm9kZS5cbiAqIEBwcm9wZXJ0eSB7Wy4uLkFycmF5PFBhcmVudHM+LCBUZXh0XX0gc3RhY2tcbiAqICAgQWxsIGFuY2VzdG9ycyBvZiB0aGUgdGV4dCBub2RlLCB3aGVyZSB0aGUgbGFzdCBub2RlIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAqXG4gKiBAdHlwZWRlZiB7UmVnRXhwIHwgc3RyaW5nfSBGaW5kXG4gKiAgIFBhdHRlcm4gdG8gZmluZC5cbiAqXG4gKiAgIFN0cmluZ3MgYXJlIGVzY2FwZWQgYW5kIHRoZW4gdHVybmVkIGludG8gZ2xvYmFsIGV4cHJlc3Npb25zLlxuICpcbiAqIEB0eXBlZGVmIHtBcnJheTxGaW5kQW5kUmVwbGFjZVR1cGxlPn0gRmluZEFuZFJlcGxhY2VMaXN0XG4gKiAgIFNldmVyYWwgZmluZCBhbmQgcmVwbGFjZXMsIGluIGFycmF5IGZvcm0uXG4gKlxuICogQHR5cGVkZWYge1tGaW5kLCBSZXBsYWNlP119IEZpbmRBbmRSZXBsYWNlVHVwbGVcbiAqICAgRmluZCBhbmQgcmVwbGFjZSBpbiB0dXBsZSBmb3JtLlxuICpcbiAqIEB0eXBlZGVmIHtSZXBsYWNlRnVuY3Rpb24gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBSZXBsYWNlXG4gKiAgIFRoaW5nIHRvIHJlcGxhY2Ugd2l0aC5cbiAqXG4gKiBAY2FsbGJhY2sgUmVwbGFjZUZ1bmN0aW9uXG4gKiAgIENhbGxiYWNrIGNhbGxlZCB3aGVuIGEgc2VhcmNoIG1hdGNoZXMuXG4gKiBAcGFyYW0gey4uLmFueX0gcGFyYW1ldGVyc1xuICogICBUaGUgcGFyYW1ldGVycyBhcmUgdGhlIHJlc3VsdCBvZiBjb3JyZXNwb25kaW5nIHNlYXJjaCBleHByZXNzaW9uOlxuICpcbiAqICAgKiBgdmFsdWVgIChgc3RyaW5nYCkg4oCUIHdob2xlIG1hdGNoXG4gKiAgICogYC4uLmNhcHR1cmVgIChgQXJyYXk8c3RyaW5nPmApIOKAlCBtYXRjaGVzIGZyb20gcmVnZXggY2FwdHVyZSBncm91cHNcbiAqICAgKiBgbWF0Y2hgIChgUmVnRXhwTWF0Y2hPYmplY3RgKSDigJQgaW5mbyBvbiB0aGUgbWF0Y2hcbiAqIEByZXR1cm5zIHtBcnJheTxQaHJhc2luZ0NvbnRlbnQ+IHwgUGhyYXNpbmdDb250ZW50IHwgc3RyaW5nIHwgZmFsc2UgfCBudWxsIHwgdW5kZWZpbmVkfVxuICogICBUaGluZyB0byByZXBsYWNlIHdpdGguXG4gKlxuICogICAqIHdoZW4gYG51bGxgLCBgdW5kZWZpbmVkYCwgYCcnYCwgcmVtb3ZlIHRoZSBtYXRjaFxuICogICAqIOKApm9yIHdoZW4gYGZhbHNlYCwgZG8gbm90IHJlcGxhY2UgYXQgYWxsXG4gKiAgICog4oCmb3Igd2hlbiBgc3RyaW5nYCwgcmVwbGFjZSB3aXRoIGEgdGV4dCBub2RlIG9mIHRoYXQgdmFsdWVcbiAqICAgKiDigKZvciB3aGVuIGBOb2RlYCBvciBgQXJyYXk8Tm9kZT5gLCByZXBsYWNlIHdpdGggdGhvc2Ugbm9kZXNcbiAqXG4gKiBAdHlwZWRlZiB7W1JlZ0V4cCwgUmVwbGFjZUZ1bmN0aW9uXX0gUGFpclxuICogICBOb3JtYWxpemVkIGZpbmQgYW5kIHJlcGxhY2UuXG4gKlxuICogQHR5cGVkZWYge0FycmF5PFBhaXI+fSBQYWlyc1xuICogICBBbGwgZmluZCBhbmQgcmVwbGFjZWQuXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtUZXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2lnbm9yZV1cbiAqICAgVGVzdCBmb3Igd2hpY2ggbm9kZXMgdG8gaWdub3JlIChvcHRpb25hbCkuXG4gKi9cblxuaW1wb3J0IGVzY2FwZSBmcm9tICdlc2NhcGUtc3RyaW5nLXJlZ2V4cCdcbmltcG9ydCB7dmlzaXRQYXJlbnRzfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5cbi8qKlxuICogRmluZCBwYXR0ZXJucyBpbiBhIHRyZWUgYW5kIHJlcGxhY2UgdGhlbS5cbiAqXG4gKiBUaGUgYWxnb3JpdGhtIHNlYXJjaGVzIHRoZSB0cmVlIGluICpwcmVvcmRlciogZm9yIGNvbXBsZXRlIHZhbHVlcyBpbiBgVGV4dGBcbiAqIG5vZGVzLlxuICogUGFydGlhbCBtYXRjaGVzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICpcbiAqIEBwYXJhbSB7Tm9kZXN9IHRyZWVcbiAqICAgVHJlZSB0byBjaGFuZ2UuXG4gKiBAcGFyYW0ge0ZpbmRBbmRSZXBsYWNlTGlzdCB8IEZpbmRBbmRSZXBsYWNlVHVwbGV9IGxpc3RcbiAqICAgUGF0dGVybnMgdG8gZmluZC5cbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uICh3aGVuIGBmaW5kYCBpcyBub3QgYEZpbmRgKS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQW5kUmVwbGFjZSh0cmVlLCBsaXN0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICBjb25zdCBpZ25vcmVkID0gY29udmVydChzZXR0aW5ncy5pZ25vcmUgfHwgW10pXG4gIGNvbnN0IHBhaXJzID0gdG9QYWlycyhsaXN0KVxuICBsZXQgcGFpckluZGV4ID0gLTFcblxuICB3aGlsZSAoKytwYWlySW5kZXggPCBwYWlycy5sZW5ndGgpIHtcbiAgICB2aXNpdFBhcmVudHModHJlZSwgJ3RleHQnLCB2aXNpdG9yKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLkJ1aWxkVmlzaXRvcjxSb290LCAndGV4dCc+fSAqL1xuICBmdW5jdGlvbiB2aXNpdG9yKG5vZGUsIHBhcmVudHMpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuICAgIC8qKiBAdHlwZSB7UGFyZW50cyB8IHVuZGVmaW5lZH0gKi9cbiAgICBsZXQgZ3JhbmRwYXJlbnRcblxuICAgIHdoaWxlICgrK2luZGV4IDwgcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbaW5kZXhdXG4gICAgICAvKiogQHR5cGUge0FycmF5PE5vZGVzPiB8IHVuZGVmaW5lZH0gKi9cbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gZ3JhbmRwYXJlbnQgPyBncmFuZHBhcmVudC5jaGlsZHJlbiA6IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIGlnbm9yZWQoXG4gICAgICAgICAgcGFyZW50LFxuICAgICAgICAgIHNpYmxpbmdzID8gc2libGluZ3MuaW5kZXhPZihwYXJlbnQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGdyYW5kcGFyZW50XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZ3JhbmRwYXJlbnQgPSBwYXJlbnRcbiAgICB9XG5cbiAgICBpZiAoZ3JhbmRwYXJlbnQpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKG5vZGUsIHBhcmVudHMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIHRleHQgbm9kZSB3aGljaCBpcyBub3QgaW4gYW4gaWdub3JlZCBwYXJlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7VGV4dH0gbm9kZVxuICAgKiAgIFRleHQgbm9kZS5cbiAgICogQHBhcmFtIHtBcnJheTxQYXJlbnRzPn0gcGFyZW50c1xuICAgKiAgIFBhcmVudHMuXG4gICAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICAgKiAgIFJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZXIobm9kZSwgcGFyZW50cykge1xuICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIGNvbnN0IGZpbmQgPSBwYWlyc1twYWlySW5kZXhdWzBdXG4gICAgY29uc3QgcmVwbGFjZSA9IHBhaXJzW3BhaXJJbmRleF1bMV1cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgLyoqIEB0eXBlIHtBcnJheTxOb2Rlcz59ICovXG4gICAgY29uc3Qgc2libGluZ3MgPSBwYXJlbnQuY2hpbGRyZW5cbiAgICBjb25zdCBpbmRleCA9IHNpYmxpbmdzLmluZGV4T2Yobm9kZSlcbiAgICBsZXQgY2hhbmdlID0gZmFsc2VcbiAgICAvKiogQHR5cGUge0FycmF5PFBocmFzaW5nQ29udGVudD59ICovXG4gICAgbGV0IG5vZGVzID0gW11cblxuICAgIGZpbmQubGFzdEluZGV4ID0gMFxuXG4gICAgbGV0IG1hdGNoID0gZmluZC5leGVjKG5vZGUudmFsdWUpXG5cbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWF0Y2guaW5kZXhcbiAgICAgIC8qKiBAdHlwZSB7UmVnRXhwTWF0Y2hPYmplY3R9ICovXG4gICAgICBjb25zdCBtYXRjaE9iamVjdCA9IHtcbiAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxuICAgICAgICBpbnB1dDogbWF0Y2guaW5wdXQsXG4gICAgICAgIHN0YWNrOiBbLi4ucGFyZW50cywgbm9kZV1cbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZSA9IHJlcGxhY2UoLi4ubWF0Y2gsIG1hdGNoT2JqZWN0KVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aCA+IDAgPyB7dHlwZTogJ3RleHQnLCB2YWx1ZX0gOiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgLy8gSXQgd2FzbuKAmXQgYSBtYXRjaCBhZnRlciBhbGwuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEZhbHNlIGFjdHMgYXMgaWYgdGhlcmUgd2FzIG5vIG1hdGNoLlxuICAgICAgICAvLyBTbyB3ZSBuZWVkIHRvIHJlc2V0IGBsYXN0SW5kZXhgLCB3aGljaCBjdXJyZW50bHkgYmVpbmcgYXQgdGhlIGVuZCBvZlxuICAgICAgICAvLyB0aGUgY3VycmVudCBtYXRjaCwgdG8gdGhlIGJlZ2lubmluZy5cbiAgICAgICAgZmluZC5sYXN0SW5kZXggPSBwb3NpdGlvbiArIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGFydCAhPT0gcG9zaXRpb24pIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBub2RlLnZhbHVlLnNsaWNlKHN0YXJ0LCBwb3NpdGlvbilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbm9kZXMucHVzaCguLi52YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICAgIG5vZGVzLnB1c2godmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IHBvc2l0aW9uICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaW5kLmdsb2JhbCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBtYXRjaCA9IGZpbmQuZXhlYyhub2RlLnZhbHVlKVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIGlmIChzdGFydCA8IG5vZGUudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIG5vZGVzLnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWU6IG5vZGUudmFsdWUuc2xpY2Uoc3RhcnQpfSlcbiAgICAgIH1cblxuICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSwgLi4ubm9kZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzID0gW25vZGVdXG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4ICsgbm9kZXMubGVuZ3RoXG4gIH1cbn1cblxuLyoqXG4gKiBUdXJuIGEgdHVwbGUgb3IgYSBsaXN0IG9mIHR1cGxlcyBpbnRvIHBhaXJzLlxuICpcbiAqIEBwYXJhbSB7RmluZEFuZFJlcGxhY2VMaXN0IHwgRmluZEFuZFJlcGxhY2VUdXBsZX0gdHVwbGVPckxpc3RcbiAqICAgU2NoZW1hLlxuICogQHJldHVybnMge1BhaXJzfVxuICogICBDbGVhbiBwYWlycy5cbiAqL1xuZnVuY3Rpb24gdG9QYWlycyh0dXBsZU9yTGlzdCkge1xuICAvKiogQHR5cGUge1BhaXJzfSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIGlmICghQXJyYXkuaXNBcnJheSh0dXBsZU9yTGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBmaW5kIGFuZCByZXBsYWNlIHR1cGxlIG9yIGxpc3Qgb2YgdHVwbGVzJylcbiAgfVxuXG4gIC8qKiBAdHlwZSB7RmluZEFuZFJlcGxhY2VMaXN0fSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBjb3JyZWN0LlxuICBjb25zdCBsaXN0ID1cbiAgICAhdHVwbGVPckxpc3RbMF0gfHwgQXJyYXkuaXNBcnJheSh0dXBsZU9yTGlzdFswXSlcbiAgICAgID8gdHVwbGVPckxpc3RcbiAgICAgIDogW3R1cGxlT3JMaXN0XVxuXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGNvbnN0IHR1cGxlID0gbGlzdFtpbmRleF1cbiAgICByZXN1bHQucHVzaChbdG9FeHByZXNzaW9uKHR1cGxlWzBdKSwgdG9GdW5jdGlvbih0dXBsZVsxXSldKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFR1cm4gYSBmaW5kIGludG8gYW4gZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge0ZpbmR9IGZpbmRcbiAqICAgRmluZC5cbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAgIEV4cHJlc3Npb24uXG4gKi9cbmZ1bmN0aW9uIHRvRXhwcmVzc2lvbihmaW5kKSB7XG4gIHJldHVybiB0eXBlb2YgZmluZCA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKGVzY2FwZShmaW5kKSwgJ2cnKSA6IGZpbmRcbn1cblxuLyoqXG4gKiBUdXJuIGEgcmVwbGFjZSBpbnRvIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtSZXBsYWNlfSByZXBsYWNlXG4gKiAgIFJlcGxhY2UuXG4gKiBAcmV0dXJucyB7UmVwbGFjZUZ1bmN0aW9ufVxuICogICBGdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbihyZXBsYWNlKSB7XG4gIHJldHVybiB0eXBlb2YgcmVwbGFjZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gcmVwbGFjZVxuICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVwbGFjZVxuICAgICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ escapeStringRegexp)\n/* harmony export */ });\nfunction escapeStringRegexp(string) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\t// Escape characters with special meaning either inside or outside character sets.\n\t// Use a simple backslash escape when it’s always valid, and a `\\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.\n\treturn string\n\t\t.replace(/[|\\\\{}()[\\]^$+*?.]/g, '\\\\$&')\n\t\t.replace(/-/g, '\\\\x2d');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWZpbmQtYW5kLXJlcGxhY2Uvbm9kZV9tb2R1bGVzL2VzY2FwZS1zdHJpbmctcmVnZXhwL2luZGV4LmpzP2YyYzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlU3RyaW5nUmVnZXhwKHN0cmluZykge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0Ly8gRXNjYXBlIGNoYXJhY3RlcnMgd2l0aCBzcGVjaWFsIG1lYW5pbmcgZWl0aGVyIGluc2lkZSBvciBvdXRzaWRlIGNoYXJhY3RlciBzZXRzLlxuXHQvLyBVc2UgYSBzaW1wbGUgYmFja3NsYXNoIGVzY2FwZSB3aGVuIGl04oCZcyBhbHdheXMgdmFsaWQsIGFuZCBhIGBcXHhubmAgZXNjYXBlIHdoZW4gdGhlIHNpbXBsZXIgZm9ybSB3b3VsZCBiZSBkaXNhbGxvd2VkIGJ5IFVuaWNvZGUgcGF0dGVybnPigJkgc3RyaWN0ZXIgZ3JhbW1hci5cblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZywgJ1xcXFwkJicpXG5cdFx0LnJlcGxhY2UoLy0vZywgJ1xcXFx4MmQnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js\n");

/***/ })

};
;