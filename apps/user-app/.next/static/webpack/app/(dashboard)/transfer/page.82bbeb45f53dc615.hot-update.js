"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/transfer/page",{

/***/ "(app-pages-browser)/./components/AddMoneyCard.tsx":
/*!*************************************!*\
  !*** ./components/AddMoneyCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddMoney: function() { return /* binding */ AddMoney; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _repo_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @repo/ui/button */ \"(app-pages-browser)/../../packages/ui/src/button.tsx\");\n/* harmony import */ var _repo_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @repo/ui/card */ \"(app-pages-browser)/../../packages/ui/src/card.tsx\");\n/* harmony import */ var _repo_ui_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @repo/ui/select */ \"(app-pages-browser)/../../packages/ui/src/Select.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _repo_ui_textinput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @repo/ui/textinput */ \"(app-pages-browser)/../../packages/ui/src/TextInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ AddMoney auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SUPPORTED_BANKS = [\n    {\n        name: \"HDFC Bank\",\n        redirectUrl: \"https://netbanking.hdfcbank.com\"\n    },\n    {\n        name: \"Axis Bank\",\n        redirectUrl: \"https://www.axisbank.com/\"\n    }\n];\nconst AddMoney = ()=>{\n    var _SUPPORTED_BANKS_, _SUPPORTED_BANKS_1;\n    _s();\n    const [redirectUrl, setRedirectUrl] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((_SUPPORTED_BANKS_ = SUPPORTED_BANKS[0]) === null || _SUPPORTED_BANKS_ === void 0 ? void 0 : _SUPPORTED_BANKS_.redirectUrl);\n    const [amount, setamount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [provider, setprovider] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((_SUPPORTED_BANKS_1 = SUPPORTED_BANKS[0]) === null || _SUPPORTED_BANKS_1 === void 0 ? void 0 : _SUPPORTED_BANKS_1.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        title: \"Add Money\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_textinput__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                    label: \"Amount\",\n                    placeholder: \"Amount\",\n                    onChange: (value)=>{\n                        setamount(value);\n                    }\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-4 text-left\",\n                    children: \"Bank\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_select__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                    onSelect: (value)=>{\n                        var _SUPPORTED_BANKS_find;\n                        setRedirectUrl(((_SUPPORTED_BANKS_find = SUPPORTED_BANKS.find((x)=>x.name === value)) === null || _SUPPORTED_BANKS_find === void 0 ? void 0 : _SUPPORTED_BANKS_find.redirectUrl) || \"\");\n                        setprovider(value);\n                    },\n                    options: SUPPORTED_BANKS.map((x)=>({\n                            key: x.name,\n                            value: x.name\n                        }))\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>{\n                            window.location.href = redirectUrl || \"\";\n                        },\n                        children: \"Add Money\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AddMoney, \"8EsT45NUJ4OhnQJrfPaWZJM4vkY=\");\n_c = AddMoney;\nvar _c;\n$RefreshReg$(_c, \"AddMoney\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWRkTW9uZXlDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0o7QUFFSTtBQUNSO0FBQ2M7QUFFL0MsTUFBTUssa0JBQWtCO0lBQUM7UUFDckJDLE1BQU07UUFDTkMsYUFBYTtJQUNqQjtJQUFHO1FBQ0NELE1BQU07UUFDTkMsYUFBYTtJQUNqQjtDQUFFO0FBRUssTUFBTUMsV0FBVztRQUMyQkgsbUJBRVBBOztJQUZ4QyxNQUFNLENBQUNFLGFBQWFFLGVBQWUsR0FBR04sK0NBQVFBLEVBQUNFLG9CQUFBQSxlQUFlLENBQUMsRUFBRSxjQUFsQkEsd0NBQUFBLGtCQUFvQkUsV0FBVztJQUM5RSxNQUFNLENBQUNHLFFBQU9DLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDUyxVQUFTQyxZQUFZLEdBQUdWLCtDQUFRQSxFQUFDRSxxQkFBQUEsZUFBZSxDQUFDLEVBQUUsY0FBbEJBLHlDQUFBQSxtQkFBb0JDLElBQUk7SUFDaEUscUJBQU8sOERBQUNMLCtDQUFJQTtRQUFDYSxPQUFNO2tCQUNuQiw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNaLHlEQUFTQTtvQkFBQ2EsT0FBTztvQkFBVUMsYUFBYTtvQkFBVUMsVUFBVSxDQUFDQzt3QkFDdERULFVBQVVTO29CQUNsQjs7Ozs7OzhCQUNBLDhEQUFDTDtvQkFBSUMsV0FBVTs4QkFBaUI7Ozs7Ozs4QkFHaEMsOERBQUNkLG1EQUFNQTtvQkFBQ21CLFVBQVUsQ0FBQ0Q7NEJBQ0FmO3dCQUFmSSxlQUFlSixFQUFBQSx3QkFBQUEsZ0JBQWdCaUIsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFakIsSUFBSSxLQUFLYyxvQkFBckNmLDRDQUFBQSxzQkFBNkNFLFdBQVcsS0FBSTt3QkFDM0VNLFlBQVlPO29CQUNoQjtvQkFBR0ksU0FBU25CLGdCQUFnQm9CLEdBQUcsQ0FBQ0YsQ0FBQUEsSUFBTTs0QkFDbENHLEtBQUtILEVBQUVqQixJQUFJOzRCQUNYYyxPQUFPRyxFQUFFakIsSUFBSTt3QkFDakI7Ozs7Ozs4QkFDQSw4REFBQ1M7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNoQixtREFBTUE7d0JBQUMyQixTQUFTOzRCQUNiQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR3ZCLGVBQWU7d0JBQzFDO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWYsRUFBQztHQTVCWUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRNb25leUNhcmQudHN4PzEyYzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkByZXBvL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkByZXBvL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgQ2VudGVyIH0gZnJvbSBcIkByZXBvL3VpL2NlbnRlclwiO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiQHJlcG8vdWkvc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCJAcmVwby91aS90ZXh0aW5wdXRcIjtcclxuXHJcbmNvbnN0IFNVUFBPUlRFRF9CQU5LUyA9IFt7XHJcbiAgICBuYW1lOiBcIkhERkMgQmFua1wiLFxyXG4gICAgcmVkaXJlY3RVcmw6IFwiaHR0cHM6Ly9uZXRiYW5raW5nLmhkZmNiYW5rLmNvbVwiXHJcbn0sIHtcclxuICAgIG5hbWU6IFwiQXhpcyBCYW5rXCIsXHJcbiAgICByZWRpcmVjdFVybDogXCJodHRwczovL3d3dy5heGlzYmFuay5jb20vXCJcclxufV07XHJcblxyXG5leHBvcnQgY29uc3QgQWRkTW9uZXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcmVkaXJlY3RVcmwsIHNldFJlZGlyZWN0VXJsXSA9IHVzZVN0YXRlKFNVUFBPUlRFRF9CQU5LU1swXT8ucmVkaXJlY3RVcmwpO1xyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcHJvdmlkZXIsc2V0cHJvdmlkZXJdID0gdXNlU3RhdGUoU1VQUE9SVEVEX0JBTktTWzBdPy5uYW1lKTtcclxuICAgIHJldHVybiA8Q2FyZCB0aXRsZT1cIkFkZCBNb25leVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8VGV4dElucHV0IGxhYmVsPXtcIkFtb3VudFwifSBwbGFjZWhvbGRlcj17XCJBbW91bnRcIn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0YW1vdW50KHZhbHVlKTtcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgQmFua1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTZWxlY3Qgb25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZWRpcmVjdFVybChTVVBQT1JURURfQkFOS1MuZmluZCh4ID0+IHgubmFtZSA9PT0gdmFsdWUpPy5yZWRpcmVjdFVybCB8fCBcIlwiKTtcclxuICAgICAgICAgICAgc2V0cHJvdmlkZXIodmFsdWUpO1xyXG4gICAgICAgIH19IG9wdGlvbnM9e1NVUFBPUlRFRF9CQU5LUy5tYXAoeCA9PiAoe1xyXG4gICAgICAgICAgICBrZXk6IHgubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHgubmFtZVxyXG4gICAgICAgIH0pKX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmwgfHwgXCJcIjtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIEFkZCBNb25leVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L0NhcmQ+XHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIlNlbGVjdCIsInVzZVN0YXRlIiwiVGV4dElucHV0IiwiU1VQUE9SVEVEX0JBTktTIiwibmFtZSIsInJlZGlyZWN0VXJsIiwiQWRkTW9uZXkiLCJzZXRSZWRpcmVjdFVybCIsImFtb3VudCIsInNldGFtb3VudCIsInByb3ZpZGVyIiwic2V0cHJvdmlkZXIiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwib25TZWxlY3QiLCJmaW5kIiwieCIsIm9wdGlvbnMiLCJtYXAiLCJrZXkiLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AddMoneyCard.tsx\n"));

/***/ })

});