"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-footnote";
exports.ids = ["vendor-chunks/mdast-util-gfm-footnote"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-footnote/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-footnote/lib/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmFootnoteFromMarkdown: () => (/* binding */ gfmFootnoteFromMarkdown),\n/* harmony export */   gfmFootnoteToMarkdown: () => (/* binding */ gfmFootnoteToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-normalize-identifier */ \"(ssr)/./node_modules/micromark-util-normalize-identifier/dev/index.js\");\n/**\n * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition\n * @typedef {import('mdast').FootnoteReference} FootnoteReference\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Map} Map\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n */\n\n\n\n\nfootnoteReference.peek = footnoteReferencePeek\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM footnotes\n * in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */\nfunction gfmFootnoteFromMarkdown() {\n  return {\n    enter: {\n      gfmFootnoteDefinition: enterFootnoteDefinition,\n      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,\n      gfmFootnoteCall: enterFootnoteCall,\n      gfmFootnoteCallString: enterFootnoteCallString\n    },\n    exit: {\n      gfmFootnoteDefinition: exitFootnoteDefinition,\n      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,\n      gfmFootnoteCall: exitFootnoteCall,\n      gfmFootnoteCallString: exitFootnoteCallString\n    }\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM footnotes\n * in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */\nfunction gfmFootnoteToMarkdown() {\n  return {\n    // This is on by default already.\n    unsafe: [{character: '[', inConstruct: ['phrasing', 'label', 'reference']}],\n    handlers: {footnoteDefinition, footnoteReference}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteDefinition(token) {\n  this.enter(\n    {type: 'footnoteDefinition', identifier: '', label: '', children: []},\n    token\n  )\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteDefinitionLabelString() {\n  this.buffer()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteDefinitionLabelString(token) {\n  const label = this.resume()\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'footnoteDefinition')\n  node.label = label\n  node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__.normalizeIdentifier)(\n    this.sliceSerialize(token)\n  ).toLowerCase()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteDefinition(token) {\n  this.exit(token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteCall(token) {\n  this.enter({type: 'footnoteReference', identifier: '', label: ''}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteCallString() {\n  this.buffer()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteCallString(token) {\n  const label = this.resume()\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'footnoteReference')\n  node.label = label\n  node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__.normalizeIdentifier)(\n    this.sliceSerialize(token)\n  ).toLowerCase()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteCall(token) {\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {FootnoteReference} node\n */\nfunction footnoteReference(node, _, state, info) {\n  const tracker = state.createTracker(info)\n  let value = tracker.move('[^')\n  const exit = state.enter('footnoteReference')\n  const subexit = state.enter('reference')\n  value += tracker.move(\n    state.safe(state.associationId(node), {\n      ...tracker.current(),\n      before: value,\n      after: ']'\n    })\n  )\n  subexit()\n  exit()\n  value += tracker.move(']')\n  return value\n}\n\n/** @type {ToMarkdownHandle} */\nfunction footnoteReferencePeek() {\n  return '['\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {FootnoteDefinition} node\n */\nfunction footnoteDefinition(node, _, state, info) {\n  const tracker = state.createTracker(info)\n  let value = tracker.move('[^')\n  const exit = state.enter('footnoteDefinition')\n  const subexit = state.enter('label')\n  value += tracker.move(\n    state.safe(state.associationId(node), {\n      ...tracker.current(),\n      before: value,\n      after: ']'\n    })\n  )\n  subexit()\n  value += tracker.move(\n    ']:' + (node.children && node.children.length > 0 ? ' ' : '')\n  )\n  tracker.shift(4)\n  value += tracker.move(\n    state.indentLines(state.containerFlow(node, tracker.current()), map)\n  )\n  exit()\n\n  return value\n}\n\n/** @type {Map} */\nfunction map(line, index, blank) {\n  if (index === 0) {\n    return line\n  }\n\n  return (blank ? '' : '    ') + line\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tZm9vdG5vdGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsb0NBQW9DO0FBQ2pELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEseUNBQXlDO0FBQ3RELGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsMENBQTBDO0FBQ3ZEOztBQUVtQztBQUNvQzs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGNBQWMsZ0VBQWdFO0FBQzlFLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9FQUFvRTtBQUN6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkNBQU07QUFDUjtBQUNBLG9CQUFvQix3RkFBbUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWMscURBQXFEO0FBQ25FOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJDQUFNO0FBQ1I7QUFDQSxvQkFBb0Isd0ZBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLWZvb3Rub3RlL2xpYi9pbmRleC5qcz9iODFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Gb290bm90ZURlZmluaXRpb259IEZvb3Rub3RlRGVmaW5pdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Gb290bm90ZVJlZmVyZW5jZX0gRm9vdG5vdGVSZWZlcmVuY2VcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkNvbXBpbGVDb250ZXh0fSBDb21waWxlQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuRXh0ZW5zaW9ufSBGcm9tTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkhhbmRsZX0gRnJvbU1hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuTWFwfSBNYXBcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7bm9ybWFsaXplSWRlbnRpZmllcn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXInXG5cbmZvb3Rub3RlUmVmZXJlbmNlLnBlZWsgPSBmb290bm90ZVJlZmVyZW5jZVBlZWtcblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIGZvb3Rub3Rlc1xuICogaW4gbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge0Zyb21NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbUZvb3Rub3RlRnJvbU1hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIGVudGVyOiB7XG4gICAgICBnZm1Gb290bm90ZURlZmluaXRpb246IGVudGVyRm9vdG5vdGVEZWZpbml0aW9uLFxuICAgICAgZ2ZtRm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmc6IGVudGVyRm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmcsXG4gICAgICBnZm1Gb290bm90ZUNhbGw6IGVudGVyRm9vdG5vdGVDYWxsLFxuICAgICAgZ2ZtRm9vdG5vdGVDYWxsU3RyaW5nOiBlbnRlckZvb3Rub3RlQ2FsbFN0cmluZ1xuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgZ2ZtRm9vdG5vdGVEZWZpbml0aW9uOiBleGl0Rm9vdG5vdGVEZWZpbml0aW9uLFxuICAgICAgZ2ZtRm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmc6IGV4aXRGb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZyxcbiAgICAgIGdmbUZvb3Rub3RlQ2FsbDogZXhpdEZvb3Rub3RlQ2FsbCxcbiAgICAgIGdmbUZvb3Rub3RlQ2FsbFN0cmluZzogZXhpdEZvb3Rub3RlQ2FsbFN0cmluZ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIGZvb3Rub3Rlc1xuICogaW4gbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtRm9vdG5vdGVUb01hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIC8vIFRoaXMgaXMgb24gYnkgZGVmYXVsdCBhbHJlYWR5LlxuICAgIHVuc2FmZTogW3tjaGFyYWN0ZXI6ICdbJywgaW5Db25zdHJ1Y3Q6IFsncGhyYXNpbmcnLCAnbGFiZWwnLCAncmVmZXJlbmNlJ119XSxcbiAgICBoYW5kbGVyczoge2Zvb3Rub3RlRGVmaW5pdGlvbiwgZm9vdG5vdGVSZWZlcmVuY2V9XG4gIH1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckZvb3Rub3RlRGVmaW5pdGlvbih0b2tlbikge1xuICB0aGlzLmVudGVyKFxuICAgIHt0eXBlOiAnZm9vdG5vdGVEZWZpbml0aW9uJywgaWRlbnRpZmllcjogJycsIGxhYmVsOiAnJywgY2hpbGRyZW46IFtdfSxcbiAgICB0b2tlblxuICApXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJGb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZygpIHtcbiAgdGhpcy5idWZmZXIoKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRGb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZyh0b2tlbikge1xuICBjb25zdCBsYWJlbCA9IHRoaXMucmVzdW1lKClcbiAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICBhc3NlcnQobm9kZS50eXBlID09PSAnZm9vdG5vdGVEZWZpbml0aW9uJylcbiAgbm9kZS5sYWJlbCA9IGxhYmVsXG4gIG5vZGUuaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgKS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdEZvb3Rub3RlRGVmaW5pdGlvbih0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJGb290bm90ZUNhbGwodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ2Zvb3Rub3RlUmVmZXJlbmNlJywgaWRlbnRpZmllcjogJycsIGxhYmVsOiAnJ30sIHRva2VuKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyRm9vdG5vdGVDYWxsU3RyaW5nKCkge1xuICB0aGlzLmJ1ZmZlcigpXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdEZvb3Rub3RlQ2FsbFN0cmluZyh0b2tlbikge1xuICBjb25zdCBsYWJlbCA9IHRoaXMucmVzdW1lKClcbiAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICBhc3NlcnQobm9kZS50eXBlID09PSAnZm9vdG5vdGVSZWZlcmVuY2UnKVxuICBub2RlLmxhYmVsID0gbGFiZWxcbiAgbm9kZS5pZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICApLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0Rm9vdG5vdGVDYWxsKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7Rm9vdG5vdGVSZWZlcmVuY2V9IG5vZGVcbiAqL1xuZnVuY3Rpb24gZm9vdG5vdGVSZWZlcmVuY2Uobm9kZSwgXywgc3RhdGUsIGluZm8pIHtcbiAgY29uc3QgdHJhY2tlciA9IHN0YXRlLmNyZWF0ZVRyYWNrZXIoaW5mbylcbiAgbGV0IHZhbHVlID0gdHJhY2tlci5tb3ZlKCdbXicpXG4gIGNvbnN0IGV4aXQgPSBzdGF0ZS5lbnRlcignZm9vdG5vdGVSZWZlcmVuY2UnKVxuICBjb25zdCBzdWJleGl0ID0gc3RhdGUuZW50ZXIoJ3JlZmVyZW5jZScpXG4gIHZhbHVlICs9IHRyYWNrZXIubW92ZShcbiAgICBzdGF0ZS5zYWZlKHN0YXRlLmFzc29jaWF0aW9uSWQobm9kZSksIHtcbiAgICAgIC4uLnRyYWNrZXIuY3VycmVudCgpLFxuICAgICAgYmVmb3JlOiB2YWx1ZSxcbiAgICAgIGFmdGVyOiAnXSdcbiAgICB9KVxuICApXG4gIHN1YmV4aXQoKVxuICBleGl0KClcbiAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKCddJylcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX0gKi9cbmZ1bmN0aW9uIGZvb3Rub3RlUmVmZXJlbmNlUGVlaygpIHtcbiAgcmV0dXJuICdbJ1xufVxuXG4vKipcbiAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICogQHBhcmFtIHtGb290bm90ZURlZmluaXRpb259IG5vZGVcbiAqL1xuZnVuY3Rpb24gZm9vdG5vdGVEZWZpbml0aW9uKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gIGNvbnN0IHRyYWNrZXIgPSBzdGF0ZS5jcmVhdGVUcmFja2VyKGluZm8pXG4gIGxldCB2YWx1ZSA9IHRyYWNrZXIubW92ZSgnW14nKVxuICBjb25zdCBleGl0ID0gc3RhdGUuZW50ZXIoJ2Zvb3Rub3RlRGVmaW5pdGlvbicpXG4gIGNvbnN0IHN1YmV4aXQgPSBzdGF0ZS5lbnRlcignbGFiZWwnKVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoXG4gICAgc3RhdGUuc2FmZShzdGF0ZS5hc3NvY2lhdGlvbklkKG5vZGUpLCB7XG4gICAgICAuLi50cmFja2VyLmN1cnJlbnQoKSxcbiAgICAgIGJlZm9yZTogdmFsdWUsXG4gICAgICBhZnRlcjogJ10nXG4gICAgfSlcbiAgKVxuICBzdWJleGl0KClcbiAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKFxuICAgICddOicgKyAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyAnICcgOiAnJylcbiAgKVxuICB0cmFja2VyLnNoaWZ0KDQpXG4gIHZhbHVlICs9IHRyYWNrZXIubW92ZShcbiAgICBzdGF0ZS5pbmRlbnRMaW5lcyhzdGF0ZS5jb250YWluZXJGbG93KG5vZGUsIHRyYWNrZXIuY3VycmVudCgpKSwgbWFwKVxuICApXG4gIGV4aXQoKVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKiogQHR5cGUge01hcH0gKi9cbmZ1bmN0aW9uIG1hcChsaW5lLCBpbmRleCwgYmxhbmspIHtcbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgcmV0dXJuIGxpbmVcbiAgfVxuXG4gIHJldHVybiAoYmxhbmsgPyAnJyA6ICcgICAgJykgKyBsaW5lXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-footnote/lib/index.js\n");

/***/ })

};
;