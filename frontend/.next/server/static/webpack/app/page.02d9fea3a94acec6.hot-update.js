"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(ssr)/./components/Messages.tsx":
/*!*********************************!*\
  !*** ./components/Messages.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BotCard: () => (/* binding */ BotCard),\n/* harmony export */   BotMessage: () => (/* binding */ BotMessage),\n/* harmony export */   SpinnerMessage: () => (/* binding */ SpinnerMessage),\n/* harmony export */   UserMessage: () => (/* binding */ UserMessage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_hooks_use_streamable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/hooks/use-streamable-text */ \"(ssr)/./lib/hooks/use-streamable-text.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(ssr)/./lib/utils.ts\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"(ssr)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"(ssr)/./node_modules/remark-gfm/lib/index.js\");\n/* harmony import */ var _mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PersonOutlineOutlined */ \"(ssr)/./node_modules/@mui/icons-material/PersonOutlineOutlined.js\");\n/* harmony import */ var _mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Google */ \"(ssr)/./node_modules/@mui/icons-material/Google.js\");\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spinner */ \"(ssr)/./components/Spinner.tsx\");\n/* __next_internal_client_entry_do_not_use__ BotMessage,BotCard,UserMessage,SpinnerMessage auto */ \n\n\n\n\n\n\n\nconst BotMessage = ({ content, className })=>{\n    const text = (0,_lib_hooks_use_streamable_text__WEBPACK_IMPORTED_MODULE_1__.useStreamableText)(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"group relative flex items-start\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-xl p-1 border flex items-center justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-green-800  \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex-1 space-y-2 overflow-hidden px-1 ml\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__.Markdown, {\n                    remarkPlugins: [\n                        remark_gfm__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n                    ],\n                    components: {\n                        strong: ({ node, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"font-bold\",\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, void 0),\n                        ul: ({ node, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-disc ml-4 mt-4\",\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, void 0),\n                        ol: ({ node, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                className: \"list-decimal ml-4 mt-4\",\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, void 0),\n                        li: ({ node, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mb-2\",\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, void 0),\n                        img: ({ node, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"max-w-[10rem] h-auto\",\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, void 0)\n                    },\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\nfunction BotCard({ children, showAvatar = true }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-xl p-1 border flex items-center justify-center mr-1  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-green-800 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 pl-2\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\nfunction UserMessage({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-xl p-1 border flex items-center justify-center mr-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex-1 space-y-2 overflow-hidden pl-2\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\nfunction SpinnerMessage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative flex items-start \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-xl p-1 border flex items-center justify-center mr-3  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" text-green-800 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-4 mt-1 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1\",\n                children: _Spinner__WEBPACK_IMPORTED_MODULE_3__.spinner\n            }, void 0, false, {\n                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Messages.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9jb21wb25lbnRzL01lc3NhZ2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ29FO0FBQ25DO0FBRVU7QUFDUjtBQUMrQztBQUM5QjtBQUNoQjtBQUU3QixNQUFNTyxhQUFhLENBQUMsRUFDdkJDLE9BQU8sRUFDUEMsU0FBUyxFQUlaO0lBQ0csTUFBTUMsT0FBT1YsaUZBQWlCQSxDQUFDUTtJQUUvQixxQkFDSSw4REFBQ0c7UUFBSUYsV0FBV1IsOENBQUVBLENBQUMsbUNBQW1DUTs7MEJBQ2xELDhEQUFDRTtnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNKLGtFQUFVQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQ007Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNQLG9EQUFhQTtvQkFDVlUsZUFBZTt3QkFBQ1Qsa0RBQVNBO3FCQUFDO29CQUMxQlUsWUFBWTt3QkFDUkMsUUFBUSxDQUFDLEVBQUVDLElBQUksRUFBRSxHQUFHQyxPQUFPLGlCQUN2Qiw4REFBQ0Y7Z0NBQU9MLFdBQVU7Z0NBQWEsR0FBR08sS0FBSzs7Ozs7O3dCQUUzQ0MsSUFBSSxDQUFDLEVBQUVGLElBQUksRUFBRSxHQUFHQyxPQUFPLGlCQUNuQiw4REFBQ0M7Z0NBQUdSLFdBQVU7Z0NBQXVCLEdBQUdPLEtBQUs7Ozs7Ozt3QkFFakRFLElBQUksQ0FBQyxFQUFFSCxJQUFJLEVBQUUsR0FBR0MsT0FBTyxpQkFDbkIsOERBQUNFO2dDQUFHVCxXQUFVO2dDQUEwQixHQUFHTyxLQUFLOzs7Ozs7d0JBRXBERyxJQUFJLENBQUMsRUFBRUosSUFBSSxFQUFFLEdBQUdDLE9BQU8saUJBQ25CLDhEQUFDRztnQ0FBR1YsV0FBVTtnQ0FBUSxHQUFHTyxLQUFLOzs7Ozs7d0JBRWxDSSxLQUFLLENBQUMsRUFBRUwsSUFBSSxFQUFFLEdBQUdDLE9BQU8saUJBQ3BCLDhEQUFDSTtnQ0FBSVgsV0FBVTtnQ0FBd0IsR0FBR08sS0FBSzs7Ozs7O29CQUV2RDs4QkFFQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCLEVBQUU7QUFFSyxTQUFTVyxRQUFRLEVBQ3BCQyxRQUFRLEVBQ1JDLGFBQWEsSUFBSSxFQUlwQjtJQUNHLHFCQUNJLDhEQUFDWjtRQUFJRixXQUFVOzswQkFDWCw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNFO29CQUFJRixXQUFVOzhCQUNYLDRFQUFDSixrRUFBVUE7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkIsOERBQUNNO2dCQUFJRixXQUFVOzBCQUFlYTs7Ozs7Ozs7Ozs7O0FBRzFDO0FBRU8sU0FBU0UsWUFBWSxFQUFFRixRQUFRLEVBQWlDO0lBQ25FLHFCQUNJLDhEQUFDWDtRQUFJRixXQUFVOzswQkFDWCw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNMLGlGQUF5QkE7Ozs7Ozs7Ozs7MEJBRTlCLDhEQUFDTztnQkFBSUYsV0FBVTswQkFDVmE7Ozs7Ozs7Ozs7OztBQUlqQjtBQUVPLFNBQVNHO0lBQ1oscUJBQ0ksOERBQUNkO1FBQUlGLFdBQVU7OzBCQUNYLDhEQUFDRTtnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNKLGtFQUFVQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQ007Z0JBQUlGLFdBQVU7MEJBQ1ZILDZDQUFPQTs7Ozs7Ozs7Ozs7O0FBSXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZXMudHN4PzRmYzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdHJlYW1hYmxlVGV4dCB9IGZyb20gXCJAL2xpYi9ob29rcy91c2Utc3RyZWFtYWJsZS10ZXh0XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgU3RyZWFtYWJsZVZhbHVlLCB1c2VTdHJlYW1hYmxlVmFsdWUgfSBmcm9tIFwiYWkvcnNjXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcbmltcG9ydCBQZXJzb25PdXRsaW5lT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbk91dGxpbmVPdXRsaW5lZFwiO1xuaW1wb3J0IEdvb2dsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR29vZ2xlXCI7XG5pbXBvcnQgeyBzcGlubmVyIH0gZnJvbSBcIi4vU3Bpbm5lclwiO1xuXG5leHBvcnQgY29uc3QgQm90TWVzc2FnZSA9ICh7XG4gICAgY29udGVudCxcbiAgICBjbGFzc05hbWUsXG59OiB7XG4gICAgY29udGVudDogc3RyaW5nIHwgU3RyZWFtYWJsZVZhbHVlPHN0cmluZz47XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xufSkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSB1c2VTdHJlYW1hYmxlVGV4dChjb250ZW50KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcImdyb3VwIHJlbGF0aXZlIGZsZXggaXRlbXMtc3RhcnRcIiwgY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgcC0xIGJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWdyZWVuLTgwMCAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtMSBzcGFjZS15LTIgb3ZlcmZsb3ctaGlkZGVuIHB4LTEgbWxcIj5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgICAgICByZW1hcmtQbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJmb250LWJvbGRcIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWw6ICh7IG5vZGUsIC4uLnByb3BzIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIG1sLTQgbXQtNFwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBvbDogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgbWwtNCBtdC00XCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXgtdy1bMTByZW1dIGgtYXV0b1wiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICA8L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBCb3RDYXJkKHtcbiAgICBjaGlsZHJlbixcbiAgICBzaG93QXZhdGFyID0gdHJ1ZSxcbn06IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICAgIHNob3dBdmF0YXI/OiBib29sZWFuO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHAtMSBib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItMSAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1ncmVlbi04MDAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHBsLTJcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyTWVzc2FnZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgcC0xIGJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci0xXCI+XG4gICAgICAgICAgICAgICAgPFBlcnNvbk91dGxpbmVPdXRsaW5lZEljb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC0xIHNwYWNlLXktMiBvdmVyZmxvdy1oaWRkZW4gcGwtMlwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Bpbm5lck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBmbGV4IGl0ZW1zLXN0YXJ0IFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHAtMSBib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItMyAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1ncmVlbi04MDAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBtdC0xIGgtWzI0cHhdIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGZsZXgtMSBzcGFjZS15LTIgb3ZlcmZsb3ctaGlkZGVuIHB4LTFcIj5cbiAgICAgICAgICAgICAgICB7c3Bpbm5lcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0cmVhbWFibGVUZXh0IiwiY24iLCJSZWFjdE1hcmtkb3duIiwicmVtYXJrR2ZtIiwiUGVyc29uT3V0bGluZU91dGxpbmVkSWNvbiIsIkdvb2dsZUljb24iLCJzcGlubmVyIiwiQm90TWVzc2FnZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZGl2IiwicmVtYXJrUGx1Z2lucyIsImNvbXBvbmVudHMiLCJzdHJvbmciLCJub2RlIiwicHJvcHMiLCJ1bCIsIm9sIiwibGkiLCJpbWciLCJCb3RDYXJkIiwiY2hpbGRyZW4iLCJzaG93QXZhdGFyIiwiVXNlck1lc3NhZ2UiLCJTcGlubmVyTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./components/Messages.tsx\n");

/***/ })

});