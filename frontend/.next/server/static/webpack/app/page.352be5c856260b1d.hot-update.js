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

/***/ "(ssr)/./components/Budtender.tsx":
/*!**********************************!*\
  !*** ./components/Budtender.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Budtender)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ai_rsc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ai/rsc */ \"(ssr)/./node_modules/ai/rsc/dist/rsc-shared.mjs\");\n/* harmony import */ var _mui_icons_material_AutoFixHigh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AutoFixHigh */ \"(ssr)/./node_modules/@mui/icons-material/AutoFixHigh.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(ssr)/./lib/utils.ts\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ \"(ssr)/./components/Messages.tsx\");\n/* harmony import */ var _magicui_particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./magicui/particles */ \"(ssr)/./components/magicui/particles.tsx\");\n/* harmony import */ var _mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardVoice */ \"(ssr)/./node_modules/@mui/icons-material/KeyboardVoice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nfunction Budtender() {\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_5__.useUIState)();\n    const { submitUserMessage } = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_5__.useActions)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isListening, setIsListening] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [recognition, setRecognition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if the Web Speech API is supported\n        if (\"SpeechRecognition\" in window || \"webkitSpeechRecognition\" in window) {\n            const SpeechRecognitionConstructor = windowWithSpeechRecognition.SpeechRecognition || windowWithSpeechRecognition.webkitSpeechRecognition;\n            const newRecognition = new SpeechRecognitionConstructor();\n            newRecognition.continuous = true;\n            newRecognition.interimResults = true;\n            newRecognition.lang = \"en-US\";\n            newRecognition.onresult = (event)=>{\n                const transcript = Array.from(event.results).map((result)=>result[0]).map((result)=>result.transcript).join(\"\");\n                setInputValue(transcript);\n            };\n            newRecognition.onspeechend = ()=>{\n                setIsListening(false);\n            };\n            setRecognition(newRecognition);\n        } else {\n            console.warn(\"Web Speech API is not supported in this browser.\");\n        }\n    }, []);\n    const handleVoiceInput = ()=>{\n        if (isListening) {\n            recognition.stop();\n            setIsListening(false);\n        } else {\n            recognition.start();\n            setIsListening(true);\n        }\n    };\n    const handlePromptClick = async (promptText)=>{\n        setIsLoading(true);\n        const id = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.nanoid)();\n        setMessages((currentMessages)=>[\n                ...currentMessages,\n                {\n                    id,\n                    display: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages__WEBPACK_IMPORTED_MODULE_3__.UserMessage, {\n                        children: promptText\n                    }, void 0, false, {\n                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 26\n                    }, this),\n                    role: \"user\"\n                }\n            ]);\n        const responseMessage = await submitUserMessage(promptText);\n        setMessages((currentMessages)=>[\n                ...currentMessages,\n                {\n                    ...responseMessage,\n                    role: \"assistant\"\n                }\n            ]);\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative max-w-[50rem] mx-auto  \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-between\",\n            style: {\n                height: \"calc(100vh - 5.0rem)\"\n            },\n            children: [\n                messages.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex flex-col bg-custom-black rounded-xl p-7  mx-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_magicui_particles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"absolute inset-0\",\n                            quantity: 100,\n                            ease: 80,\n                            refresh: true\n                        }, void 0, false, {\n                            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl\",\n                            children: \"The Greenest Budtender\"\n                        }, void 0, false, {\n                            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-sm  text-white opacity-70 mt-2 mb-5\",\n                            children: \"Your expert guide in the world of CBD, helping you discover the perfect products tailored to your unique preferences and needs.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full overflow-y-scroll space-y-5 pb-20 scrollbar-none \",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: message.display\n                        }, message.id, false, {\n                            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 w-full bg-white md:px-0 px-2 bg-opacity-60 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid sm:grid-cols-2 grid-cols-1\",\n                            children: messages.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"relative bg-custom-gray py-3 mb-2 sm:ml-2 ml-0 px-3 rounded-xl items-center flex flex-row hover:cursor-pointer shadow-sm\",\n                                        onClick: ()=>handlePromptClick(\"What is the best product for me?\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AutoFixHigh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                style: {\n                                                    color: \"black\"\n                                                },\n                                                className: \"animate-pulse\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"ml-2 max-sm:text-xs text-black\",\n                                                children: \"What is the best product for me?\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"relative bg-custom-gray py-3 mb-2 sm:ml-2 ml-0 px-3 rounded-xl items-center flex flex-row hover:cursor-pointer shadow-sm\",\n                                        onClick: ()=>handlePromptClick(\"Show me the cheapest gummies\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AutoFixHigh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                style: {\n                                                    color: \"black\"\n                                                },\n                                                className: \"animate-pulse\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                                lineNumber: 148,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"ml-2 max-sm:text-xs text-black\",\n                                                children: \"Show me the cheapest gummies\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                                lineNumber: 149,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: async (e)=>{\n                                e.preventDefault();\n                                const id = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.nanoid)();\n                                setMessages((currentMessages)=>[\n                                        ...currentMessages,\n                                        {\n                                            id,\n                                            display: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages__WEBPACK_IMPORTED_MODULE_3__.UserMessage, {\n                                                children: inputValue\n                                            }, void 0, false, {\n                                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                                lineNumber: 165,\n                                                columnNumber: 41\n                                            }, void 0),\n                                            role: \"user\"\n                                        }\n                                    ]);\n                                const responseMessage = await submitUserMessage(inputValue);\n                                setMessages((currentMessages)=>[\n                                        ...currentMessages,\n                                        {\n                                            ...responseMessage,\n                                            role: \"assistant\"\n                                        }\n                                    ]);\n                                setInputValue(\"\");\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"bg-white w-full border border-black py-3 px-5 outline-none text-black rounded-xl \",\n                                        placeholder: \"Send a message...\",\n                                        value: inputValue,\n                                        onChange: (event)=>{\n                                            setInputValue(event.target.value);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                        lineNumber: 182,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        style: {\n                                            position: \"absolute\",\n                                            right: \"20px\",\n                                            top: \"50%\",\n                                            transform: \"translateY(-50%)\"\n                                        },\n                                        className: \"opacity-70\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                        lineNumber: 190,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/izayahhudnut/Documents/DOR-15/Budtenders/GreenestBudtender2.0/frontend/components/Budtender.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEMsT0FBTzs0Q0FBRXNCLFVBQVU7NENBQVlDLE9BQU87NENBQVFDLEtBQUs7NENBQU9DLFdBQVc7d0NBQW1CO3dDQUFHMUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81SSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1ZHRlbmRlci50c3g/ZDE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVVJU3RhdGUsIHVzZUFjdGlvbnMsIHVzZUFJU3RhdGUgfSBmcm9tIFwiYWkvcnNjXCI7XG5pbXBvcnQgeyBBSSwgZ2V0VUlTdGF0ZUZyb21BSVN0YXRlLCBVSVN0YXRlIH0gZnJvbSBcIkAvYXBwL2FjdGlvblwiO1xuaW1wb3J0IFBlcnNvbk91dGxpbmVPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uT3V0bGluZU91dGxpbmVkXCI7XG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGVcIjtcbmltcG9ydCBBdXRvRml4SGlnaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXV0b0ZpeEhpZ2hcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEFjVW5pdEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWNVbml0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IFVzZXJNZXNzYWdlIH0gZnJvbSBcIi4vTWVzc2FnZXNcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcIi4vbWFnaWN1aS9wYXJ0aWNsZXNcIjtcbmltcG9ydCB7IEJvcmRlckJlYW0gfSBmcm9tIFwiLi9tYWdpY3VpL2JvcmRlci1iZWFtXCI7XG5pbXBvcnQgS2V5Ym9hcmRWb2ljZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZFZvaWNlJztcblxuaW50ZXJmYWNlIFdpbmRvd1dpdGhTcGVlY2hSZWNvZ25pdGlvbiBleHRlbmRzIFdpbmRvdyB7XG4gICAgU3BlZWNoUmVjb2duaXRpb246IGFueTtcbiAgICB3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjogYW55O1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1ZHRlbmRlcigpIHtcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVVJU3RhdGU8dHlwZW9mIEFJPigpO1xuICAgIGNvbnN0IHsgc3VibWl0VXNlck1lc3NhZ2UgfSA9IHVzZUFjdGlvbnM8dHlwZW9mIEFJPigpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzTGlzdGVuaW5nLCBzZXRJc0xpc3RlbmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlY29nbml0aW9uLCBzZXRSZWNvZ25pdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIFdlYiBTcGVlY2ggQVBJIGlzIHN1cHBvcnRlZFxuICAgICAgICBpZiAoJ1NwZWVjaFJlY29nbml0aW9uJyBpbiB3aW5kb3cgfHwgJ3dlYmtpdFNwZWVjaFJlY29nbml0aW9uJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IFNwZWVjaFJlY29nbml0aW9uQ29uc3RydWN0b3IgPSB3aW5kb3dXaXRoU3BlZWNoUmVjb2duaXRpb24uU3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93V2l0aFNwZWVjaFJlY29nbml0aW9uLndlYmtpdFNwZWVjaFJlY29nbml0aW9uO1xuICAgICAgICAgICAgY29uc3QgbmV3UmVjb2duaXRpb24gPSBuZXcgU3BlZWNoUmVjb2duaXRpb25Db25zdHJ1Y3RvcigpO1xuICAgICAgICAgIG5ld1JlY29nbml0aW9uLmNvbnRpbnVvdXMgPSB0cnVlO1xuICAgICAgICAgIG5ld1JlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgICBuZXdSZWNvZ25pdGlvbi5sYW5nID0gJ2VuLVVTJztcbiAgICBcbiAgICAgICAgICBuZXdSZWNvZ25pdGlvbi5vbnJlc3VsdCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNjcmlwdCA9IEFycmF5LmZyb20oZXZlbnQucmVzdWx0cylcbiAgICAgICAgICAgICAgLm1hcCgocmVzdWx0KSA9PiByZXN1bHRbMF0pXG4gICAgICAgICAgICAgIC5tYXAoKHJlc3VsdCkgPT4gcmVzdWx0LnRyYW5zY3JpcHQpXG4gICAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICBcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUodHJhbnNjcmlwdCk7XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICBuZXdSZWNvZ25pdGlvbi5vbnNwZWVjaGVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldElzTGlzdGVuaW5nKGZhbHNlKTtcbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgIHNldFJlY29nbml0aW9uKG5ld1JlY29nbml0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1dlYiBTcGVlY2ggQVBJIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZVZvaWNlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0xpc3RlbmluZykge1xuICAgICAgICAgIHJlY29nbml0aW9uLnN0b3AoKTtcbiAgICAgICAgICBzZXRJc0xpc3RlbmluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVjb2duaXRpb24uc3RhcnQoKTtcbiAgICAgICAgICBzZXRJc0xpc3RlbmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVByb21wdENsaWNrID0gYXN5bmMgKHByb21wdFRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgaWQgPSBuYW5vaWQoKTtcbiAgICAgICAgc2V0TWVzc2FnZXMoKGN1cnJlbnRNZXNzYWdlcykgPT4gW1xuICAgICAgICAgICAgLi4uY3VycmVudE1lc3NhZ2VzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IDxVc2VyTWVzc2FnZT57cHJvbXB0VGV4dH08L1VzZXJNZXNzYWdlPixcbiAgICAgICAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlTWVzc2FnZSA9IGF3YWl0IHN1Ym1pdFVzZXJNZXNzYWdlKHByb21wdFRleHQpO1xuICAgICAgICBzZXRNZXNzYWdlcygoY3VycmVudE1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAuLi5jdXJyZW50TWVzc2FnZXMsXG4gICAgICAgICAgICB7IC4uLnJlc3BvbnNlTWVzc2FnZSwgcm9sZTogXCJhc3Npc3RhbnRcIiB9LFxuICAgICAgICBdKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy1bNTByZW1dIG14LWF1dG8gIFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDUuMHJlbSlcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgYmctY3VzdG9tLWJsYWNrIHJvdW5kZWQteGwgcC03ICBteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFydGljbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlPXs4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi00MDAgdG8tYmx1ZS01MDAgdGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgR3JlZW5lc3QgQnVkdGVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc20gIHRleHQtd2hpdGUgb3BhY2l0eS03MCBtdC0yIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGV4cGVydCBndWlkZSBpbiB0aGUgd29ybGQgb2YgQ0JELCBoZWxwaW5nIHlvdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdmVyIHRoZSBwZXJmZWN0IHByb2R1Y3RzIHRhaWxvcmVkIHRvIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWUgcHJlZmVyZW5jZXMgYW5kIG5lZWRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGwgc3BhY2UteS01IHBiLTIwIHNjcm9sbGJhci1ub25lIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVzc2FnZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHctZnVsbCBiZy13aGl0ZSBtZDpweC0wIHB4LTIgYmctb3BhY2l0eS02MCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGdyaWQtY29scy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1jdXN0b20tZ3JheSBweS0zIG1iLTIgc206bWwtMiBtbC0wIHB4LTMgcm91bmRlZC14bCBpdGVtcy1jZW50ZXIgZmxleCBmbGV4LXJvdyBob3ZlcjpjdXJzb3ItcG9pbnRlciBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQcm9tcHRDbGljayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXaGF0IGlzIHRoZSBiZXN0IHByb2R1Y3QgZm9yIG1lP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0ZpeEhpZ2hJY29uIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTIgbWF4LXNtOnRleHQteHMgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgaXMgdGhlIGJlc3QgcHJvZHVjdCBmb3IgbWU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctY3VzdG9tLWdyYXkgcHktMyBtYi0yIHNtOm1sLTIgbWwtMCBweC0zIHJvdW5kZWQteGwgaXRlbXMtY2VudGVyIGZsZXggZmxleC1yb3cgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJvbXB0Q2xpY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2hvdyBtZSB0aGUgY2hlYXBlc3QgZ3VtbWllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0ZpeEhpZ2hJY29uIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTIgbWF4LXNtOnRleHQteHMgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgbWUgdGhlIGNoZWFwZXN0IGd1bW1pZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBuYW5vaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygoY3VycmVudE1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJNZXNzYWdlPntpbnB1dFZhbHVlfTwvVXNlck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZU1lc3NhZ2UgPSBhd2FpdCBzdWJtaXRVc2VyTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoKGN1cnJlbnRNZXNzYWdlcykgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50TWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4ucmVzcG9uc2VNZXNzYWdlLCByb2xlOiBcImFzc2lzdGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ibGFjayBweS0zIHB4LTUgb3V0bGluZS1ub25lIHRleHQtYmxhY2sgcm91bmRlZC14bCBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBhIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEtleWJvYXJkVm9pY2VJY29uIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwcHgnLCB0b3A6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9fSBjbGFzc05hbWU9XCJvcGFjaXR5LTcwXCIvPlxuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVUlTdGF0ZSIsInVzZUFjdGlvbnMiLCJBdXRvRml4SGlnaEljb24iLCJuYW5vaWQiLCJVc2VyTWVzc2FnZSIsIlBhcnRpY2xlcyIsIktleWJvYXJkVm9pY2VJY29uIiwiQnVkdGVuZGVyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic3VibWl0VXNlck1lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xpc3RlbmluZyIsInNldElzTGlzdGVuaW5nIiwicmVjb2duaXRpb24iLCJzZXRSZWNvZ25pdGlvbiIsIndpbmRvdyIsIlNwZWVjaFJlY29nbml0aW9uQ29uc3RydWN0b3IiLCJ3aW5kb3dXaXRoU3BlZWNoUmVjb2duaXRpb24iLCJTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibmV3UmVjb2duaXRpb24iLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJsYW5nIiwib25yZXN1bHQiLCJldmVudCIsInRyYW5zY3JpcHQiLCJBcnJheSIsImZyb20iLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0Iiwiam9pbiIsIm9uc3BlZWNoZW5kIiwiY29uc29sZSIsIndhcm4iLCJoYW5kbGVWb2ljZUlucHV0Iiwic3RvcCIsInN0YXJ0IiwiaGFuZGxlUHJvbXB0Q2xpY2siLCJwcm9tcHRUZXh0IiwiaWQiLCJjdXJyZW50TWVzc2FnZXMiLCJkaXNwbGF5Iiwicm9sZSIsInJlc3BvbnNlTWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwibGVuZ3RoIiwicXVhbnRpdHkiLCJlYXNlIiwicmVmcmVzaCIsImgxIiwiaDIiLCJtZXNzYWdlIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./components/Budtender.tsx\n");

/***/ })

});